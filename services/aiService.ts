import { GoogleGenAI, Type } from "@google/genai";
import {
  CLASSIFICATION_SYSTEM_INSTRUCTION,
  DOC_TYPE_LABELS,
  FORMATTER_SYSTEM_INSTRUCTION,
  GB7714_STYLE_RULES,
  LEGAL_MANUAL_SUMMARY,
  SOCIAL_SCIENCE_STYLE_RULES,
  STYLE_LABELS,
} from "../constants";
import {
  AIProvider,
  CitationDocType,
  CitationStyle,
  TargetLanguage,
} from "../types";
import {
  detectCitationRule,
  DOC_TYPE_LABELS as RULE_DOC_TYPE_LABELS,
  formatCitationByRules,
  splitInputLines,
} from "./citationRules.js";
import { fetchPublicationRank } from "./easyScholarService";

type ConfidenceLevel = "high" | "medium" | "low";
type DetectedLanguage = "zh" | "en" | "ja" | "fr" | "de" | "it" | "ru" | "other";

interface JsonGenerationOptions {
  prompt: string;
  systemInstruction: string;
  schema?: any;
}

interface HeuristicClassification {
  index: string;
  original: string;
  language: DetectedLanguage;
  heuristicDocType: CitationDocType;
  heuristicDocTypeLabel: string;
  heuristicConfidence: ConfidenceLevel;
  heuristicReason: string;
  heuristicPubName: string;
}

interface ClassifiedCitation {
  index: string;
  original: string;
  language: DetectedLanguage;
  docType: CitationDocType;
  docTypeLabel: string;
  confidence: ConfidenceLevel;
  pubName: string;
}

interface FormattedCitation {
  index: string;
  text: string;
  level?: string;
  pubName: string;
  docType: CitationDocType;
  docTypeLabel: string;
}

interface CitationProcessResult {
  text: string;
  level?: string;
  pubName: string;
  docType: CitationDocType;
  docTypeLabel: string;
  rankDetail: {
    tags: Array<{ label: string; value: string; type: string }>;
    isNegative?: boolean;
  };
}

const geminiClassificationSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      index: { type: Type.STRING },
      language: { type: Type.STRING },
      docType: { type: Type.STRING },
      docTypeLabel: { type: Type.STRING },
      confidence: { type: Type.STRING },
      pubName: { type: Type.STRING },
    },
    required: ["index", "docType", "pubName"],
  },
};

const geminiFormattingSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      index: { type: Type.STRING },
      text: { type: Type.STRING },
      level: { type: Type.STRING },
      pubName: { type: Type.STRING },
      docType: { type: Type.STRING },
      docTypeLabel: { type: Type.STRING },
    },
    required: ["index", "text", "pubName", "docType"],
  },
};

const isCitationDocType = (value: string): value is CitationDocType =>
  Object.values(CitationDocType).includes(value as CitationDocType);

const normalizeConfidence = (value?: string): ConfidenceLevel => {
  if (value === "high" || value === "medium" || value === "low") return value;
  return "low";
};

const normalizeLanguage = (value?: string): DetectedLanguage => {
  if (!value) return "other";
  if (["zh", "en", "ja", "fr", "de", "it", "ru", "other"].includes(value)) {
    return value as DetectedLanguage;
  }
  return "other";
};

const getDocTypeLabel = (docType: CitationDocType) => DOC_TYPE_LABELS[docType] || RULE_DOC_TYPE_LABELS[docType];

const stripCodeFence = (content: string) => content.replace(/```json|```/g, "").trim();

const parseJsonArray = (content: string): any[] => {
  const cleaned = stripCodeFence(content);
  const start = cleaned.indexOf("[");
  const end = cleaned.lastIndexOf("]");
  const jsonText = start >= 0 && end >= start ? cleaned.slice(start, end + 1) : cleaned;
  const parsed = JSON.parse(jsonText);

  if (Array.isArray(parsed)) return parsed;
  if (Array.isArray(parsed?.citations)) return parsed.citations;
  if (Array.isArray(parsed?.data)) return parsed.data;
  if (Array.isArray(parsed?.results)) return parsed.results;

  return [];
};

const callGeminiJson = async ({ prompt, systemInstruction, schema }: JsonGenerationOptions) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction,
      temperature: 0.1,
      responseMimeType: "application/json",
      ...(schema ? { responseSchema: schema } : {}),
    },
  });

  return parseJsonArray(response.text || "[]");
};

const callDeepSeekJson = async ({ prompt, systemInstruction }: JsonGenerationOptions) => {
  const response = await fetch("/api/deepseek/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: prompt },
      ],
      temperature: 0.1,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`DeepSeek API 错误: ${errorData.error?.message || response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || "[]";
  return parseJsonArray(content);
};

const generateJson = async (provider: AIProvider, options: JsonGenerationOptions) => {
  if (provider === AIProvider.DEEPSEEK) {
    return callDeepSeekJson(options);
  }
  return callGeminiJson(options);
};

const buildClassificationPrompt = (entries: HeuristicClassification[]) => {
  const docTypeGuide = Object.entries(DOC_TYPE_LABELS)
    .map(([value, label]) => `- ${value}: ${label}`)
    .join("\n");

  return `
请根据《法学引注手册（第二版）》判断每条输入最可能的文献类型。

可选类型：
${docTypeGuide}

判别要点：
- 图书要有书名、出版社、年份等出版信息。
- 期刊文章通常有“载《刊名》年份第x期”。
- 文集/集刊文章通常有“载某某主编：《某文集》”或“第x卷/第x辑”。
- 报纸文章通常含具体年月日和“第x版”。
- 网络文献通常有网站名、日期、URL 或访问日期。
- 微信公众号文章单列为 wechat_article。
- 法律文件、规范性文件、官方文件、司法案例需要与一般文章区分。
- 英文文献至少区分 english_book / english_article / english_case。
- 日文图书、日文文章分别识别。

输入 JSON：
${JSON.stringify(entries, null, 2)}

输出要求：
- 只返回 JSON 数组。
- 顺序与输入一致。
- 每项保留 index。
- docType 只能填写上方枚举值。
- docTypeLabel 用简短中文名称。
- confidence 只能填写 high / medium / low。
- pubName 尽量提取最核心来源名称；没有就填空字符串。
- 如果模型与 heuristic 不一致，可以纠正，但不要无理由改动。
`;
};

const getStyleRules = (style: CitationStyle) => {
  if (style === CitationStyle.SOCIAL_SCIENCE) return SOCIAL_SCIENCE_STYLE_RULES;
  if (style === CitationStyle.GB7714) return GB7714_STYLE_RULES;
  return "";
};

const buildFormattingPrompt = (
  entries: ClassifiedCitation[],
  style: CitationStyle,
  lang: TargetLanguage,
) => `
目标样式：${STYLE_LABELS[style]}
界面语言参数：${lang}

${LEGAL_MANUAL_SUMMARY}
${getStyleRules(style)}

现在请按照“已识别的文献类型”逐条生成最终引注。

输入 JSON：
${JSON.stringify(entries, null, 2)}

输出要求：
- 只返回 JSON 数组，顺序与输入一致。
- 每项字段：
  - index: 与输入一致
  - text: 最终引注字符串
  - level: 可留空字符串；除非存在明显风险提示，不要自行添加评价
  - pubName: 最终用于来源识别的名称；没有就填空字符串
  - docType: 复写输入中的 docType
  - docTypeLabel: 复写或规范化后的中文类型名
- 不要编造作者、刊名、法院、案号、文号、页码、年份。
- 微信公众号文章默认不附链接，除非输入本身明确保留且链接并不冗长。
- 规范性文件文号中的年份统一用〔〕。
- 裁判文书统一写成“法院名称 + 案号 + 文书类型”。
- 如果输入已经很接近手册格式，只做必要校正。
`;

const mergeClassifications = (entries: HeuristicClassification[], aiResults: any[]): ClassifiedCitation[] => {
  const aiByIndex = new Map<string, any>();
  aiResults.forEach((item) => {
    if (item && typeof item.index === "string") {
      aiByIndex.set(item.index, item);
    }
  });

  return entries.map((entry) => {
    const ai = aiByIndex.get(entry.index);
    const docType = isCitationDocType(ai?.docType) ? ai.docType : entry.heuristicDocType;
    const pubName = typeof ai?.pubName === "string" && ai.pubName.trim() ? ai.pubName.trim() : entry.heuristicPubName;
    const language = typeof ai?.language === "string" ? normalizeLanguage(ai.language) : entry.language;

    return {
      index: entry.index,
      original: entry.original,
      language,
      docType,
      docTypeLabel: typeof ai?.docTypeLabel === "string" && ai.docTypeLabel.trim() ? ai.docTypeLabel.trim() : getDocTypeLabel(docType),
      confidence: normalizeConfidence(ai?.confidence || entry.heuristicConfidence),
      pubName,
    };
  });
};

const mergeFormattedResults = (entries: ClassifiedCitation[], aiResults: any[]): FormattedCitation[] => {
  const aiByIndex = new Map<string, any>();
  aiResults.forEach((item) => {
    if (item && typeof item.index === "string") {
      aiByIndex.set(item.index, item);
    }
  });

  return entries.map((entry) => {
    const ai = aiByIndex.get(entry.index);
    const text = typeof ai?.text === "string" && ai.text.trim() ? ai.text.trim() : entry.original;
    const pubName = typeof ai?.pubName === "string" && ai.pubName.trim() ? ai.pubName.trim() : entry.pubName;
    const docType = isCitationDocType(ai?.docType) ? ai.docType : entry.docType;

    return {
      index: entry.index,
      text,
      level: typeof ai?.level === "string" ? ai.level.trim() : "",
      pubName,
      docType,
      docTypeLabel:
        typeof ai?.docTypeLabel === "string" && ai.docTypeLabel.trim()
          ? ai.docTypeLabel.trim()
          : entry.docTypeLabel,
    };
  });
};

const shouldLookupPublicationRank = (docType: CitationDocType, pubName: string) => {
  if (!pubName) return false;
  if (pubName.includes("出版社")) return false;

  return [
    CitationDocType.JOURNAL_ARTICLE,
    CitationDocType.COLLECTION_ARTICLE,
    CitationDocType.NEWSPAPER_ARTICLE,
    CitationDocType.ENGLISH_ARTICLE,
  ].includes(docType);
};

const classifyCitations = async (lines: string[], provider: AIProvider) => {
  const heuristics: HeuristicClassification[] = lines.map((line, index) => {
    const guess = detectCitationRule(line);
    return {
      index: String(index),
      original: line,
      language: normalizeLanguage(guess.language),
      heuristicDocType: guess.docType as CitationDocType,
      heuristicDocTypeLabel: guess.docTypeLabel,
      heuristicConfidence: normalizeConfidence(guess.confidence),
      heuristicReason: guess.reason,
      heuristicPubName: guess.pubName || "",
    };
  });

  try {
    const aiResults = await generateJson(provider, {
      prompt: buildClassificationPrompt(heuristics),
      systemInstruction: CLASSIFICATION_SYSTEM_INSTRUCTION,
      schema: provider === AIProvider.GEMINI ? geminiClassificationSchema : undefined,
    });

    return mergeClassifications(heuristics, aiResults);
  } catch (error) {
    console.error("Classification Error:", error);
    return heuristics.map((entry) => ({
      index: entry.index,
      original: entry.original,
      language: entry.language,
      docType: entry.heuristicDocType,
      docTypeLabel: entry.heuristicDocTypeLabel,
      confidence: entry.heuristicConfidence,
      pubName: entry.heuristicPubName,
    }));
  }
};

const formatCitations = async (
  entries: ClassifiedCitation[],
  provider: AIProvider,
  lang: TargetLanguage,
  style: CitationStyle,
) => {
  const localFormatted = entries.map((entry) => {
    const ruleResult = formatCitationByRules(entry.original, style, entry.docType);
    return {
      index: entry.index,
      text: ruleResult.text,
      level: "",
      pubName: ruleResult.pubName || entry.pubName,
      docType: (ruleResult.docType as CitationDocType) || entry.docType,
      docTypeLabel: ruleResult.docTypeLabel || entry.docTypeLabel,
      usedLocalRules: ruleResult.usedLocalRules,
    };
  });

  if (style === CitationStyle.LEGAL && localFormatted.every((entry) => entry.usedLocalRules)) {
    return localFormatted.map(({ usedLocalRules: _usedLocalRules, ...entry }) => entry);
  }

  try {
    const fallbackEntries = entries.filter((entry, index) => !localFormatted[index].usedLocalRules);
    const aiResults = fallbackEntries.length
      ? await generateJson(provider, {
          prompt: buildFormattingPrompt(fallbackEntries, style, lang),
          systemInstruction: FORMATTER_SYSTEM_INSTRUCTION,
          schema: provider === AIProvider.GEMINI ? geminiFormattingSchema : undefined,
        })
      : [];

    const merged = mergeFormattedResults(fallbackEntries, aiResults);
    const aiByIndex = new Map(merged.map((entry) => [entry.index, entry]));

    return localFormatted.map(({ usedLocalRules: _usedLocalRules, ...entry }) => {
      if (entry.text) return entry;
      return aiByIndex.get(entry.index) || entry;
    });
  } catch (error) {
    console.error("Formatting Error:", error);
    return localFormatted.map(({ usedLocalRules: _usedLocalRules, ...entry }) => ({
      ...entry,
      text: entry.text || entries.find((item) => item.index === entry.index)?.original || "",
    }));
  }
};

export const processCitation = async (
  input: string,
  lang: TargetLanguage,
  style: CitationStyle,
  provider: AIProvider,
): Promise<CitationProcessResult[]> => {
  const lines = splitInputLines(input);
  if (!lines.length) return [];

  const classified = await classifyCitations(lines, provider);
  const formatted = await formatCitations(classified, provider, lang, style);

  return Promise.all(
    formatted.map(async (entry) => {
      const shouldLookup = shouldLookupPublicationRank(entry.docType, entry.pubName);
      const official = shouldLookup ? await fetchPublicationRank(entry.pubName) : { tags: [], isNegative: false };

      return {
        text: entry.text,
        level: entry.level,
        pubName: entry.pubName,
        docType: entry.docType,
        docTypeLabel: entry.docTypeLabel,
        rankDetail: {
          tags: official.tags,
          isNegative: official.isNegative || entry.level?.includes("风险") || entry.level?.includes("负面"),
        },
      };
    }),
  );
};
