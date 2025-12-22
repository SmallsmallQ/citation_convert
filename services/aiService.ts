
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle, AIProvider } from "../types";

const callGemini = async (prompt: string): Promise<string[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.1,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
          description: "完全符合标准格式的引注字符串"
        }
      }
    },
  });
  
  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Gemini JSON Parse Error:", e);
    // 兜底处理：尝试按行分割
    return (response.text || "").split('\n').filter(line => line.trim().length > 0);
  }
};

const callDeepSeek = async (prompt: string): Promise<string[]> => {
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
      response_format: { type: "json_object" }
    })
  });

  if (!response.ok) {
    throw new Error("DeepSeek API 调用失败");
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content?.trim() || "[]";
  
  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : (parsed.citations || Object.values(parsed)[0] || []);
  } catch (e) {
    return [content];
  }
};

export const processCitation = async (
  input: string, 
  lang: TargetLanguage, 
  style: CitationStyle,
  provider: AIProvider
): Promise<string[]> => {
  let styleName = "《法学引注手册》";
  let specificRequirements = "必须遵循：重复引用不省略、多语言格式对齐、法律文件需包含文号。";
  
  if (style === CitationStyle.SOCIAL_SCIENCE) {
    styleName = "《中国社会科学》引注规范";
    specificRequirements = "注意：作者后使用冒号，文献条目间使用逗号。";
  } else if (style === CitationStyle.GB7714) {
    styleName = "GB/T 7714-2015 (顺序编码制)";
    specificRequirements = "必须：包含 [1], [2] 序号，使用 [M][J][D] 等标识符。";
  }

  const prompt = `
[任务说明]
将以下原始描述转换为 ${styleName} 标准格式。
[语种要求]
${lang}
[特别要求]
${specificRequirements}

[待处理文献]
${input}

请直接返回符合要求的 JSON 数组。
`;

  if (provider === AIProvider.DEEPSEEK) {
    return await callDeepSeek(prompt);
  } else {
    return await callGemini(prompt);
  }
};
