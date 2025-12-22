
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle, AIProvider } from "../types";

const callGemini = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.1,
    },
  });
  return response.text?.trim() || "";
};

const callDeepSeek = async (prompt: string): Promise<string> => {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error("未配置 DEEPSEEK_API_KEY 环境变量");

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION },
        { role: "user", content: prompt }
      ],
      temperature: 0.1,
      stream: false
    })
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error?.message || "DeepSeek API 调用失败");
  }

  const data = await response.json();
  return data.choices[0]?.message?.content?.trim() || "";
};

export const processCitation = async (
  input: string, 
  lang: TargetLanguage, 
  style: CitationStyle,
  provider: AIProvider
): Promise<string> => {
  let styleName = "《法学引注手册》";
  let numberingHint = "不带 [序号]";
  if (style === CitationStyle.SOCIAL_SCIENCE) {
    styleName = "《中国社会科学》引注规范";
  }
  if (style === CitationStyle.GB7714) {
    styleName = "GB/T 7714-2015 (顺序编码制)";
    numberingHint = "必须带有 [序号] 格式（如 [1]）";
  }

  const prompt = `
目标引注风格: ${styleName}
目标语言: ${lang}
格式说明: ${numberingHint}

用户提供的原始信息:
${input}

请将其转换为单条标准引注。如果描述中包含多条，仅转换第一条。请确保包含该风格特有的标号或前缀。
`;

  try {
    if (provider === AIProvider.DEEPSEEK) {
      return await callDeepSeek(prompt);
    } else {
      return await callGemini(prompt);
    }
  } catch (error: any) {
    console.error(`${provider} Error:`, error);
    throw new Error(error.message || "AI 调用异常，请稍后再试。");
  }
};
