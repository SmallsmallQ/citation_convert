
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle } from "../types";

export const processCitation = async (input: string, lang: TargetLanguage, style: CitationStyle): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.1,
      },
    });

    return response.text?.trim() || "格式转换失败，请检查输入。";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("API 调用异常，请稍后再试。");
  }
};
