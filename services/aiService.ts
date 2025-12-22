
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle, AIProvider } from "../types";

const callGemini = async (prompt: string): Promise<string> => {
  // Use process.env.API_KEY directly as per Gemini API coding guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.1,
    },
  });
  // Use response.text property directly
  return response.text?.trim() || "";
};

const callDeepSeek = async (prompt: string): Promise<string> => {
  // Switch to process.env to resolve ImportMeta errors
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
  if (style === CitationStyle.SOCIAL_SCIENCE) styleName = "《中国社会科学》引注规范";
  if (style === CitationStyle.GB7714) styleName = "GB/T 7714-2015 (顺序编码制)";

  const prompt = `
Target Style: ${styleName}
Target Language: ${lang}
User Input Citation Description:
${input}

Please convert this into a single formatted citation string. Return only the result.
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
