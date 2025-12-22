
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle, AIProvider } from "../types";
import { fetchPublicationRank } from "./easyScholarService";

const callGemini = async (prompt: string) => {
  // Always use a named parameter for apiKey.
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
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            level: { type: Type.STRING },
            pubName: { type: Type.STRING }
          },
          required: ["text", "pubName"]
        }
      }
    },
  });
  // Use .text property directly as per the latest SDK guidelines.
  return JSON.parse(response.text || "[]");
};

export const processCitation = async (
  input: string, 
  lang: TargetLanguage, 
  style: CitationStyle,
  provider: AIProvider
): Promise<any[]> => {
  const prompt = `转换要求：将以下文献转换为 ${style} 样式。语言：${lang}。输入内容：\n${input}`;
  
  const aiResults = await callGemini(prompt);
  
  const finalResults = await Promise.all(aiResults.map(async (res: any) => {
    // 异步获取 easyScholar 实时多维度官方等级
    const official = await fetchPublicationRank(res.pubName);
    
    return {
      text: res.text,
      level: res.level, // AI 补充信息
      rankDetail: {
        // Fix: Property 'officialRanks' does not exist on type 'EasyScholarRank'. 
        // Use 'tags' property as defined in EasyScholarRank interface and Citation type.
        tags: official.tags,
        isNegative: official.isNegative || res.level?.includes('负面') || res.level?.includes('风险')
      }
    };
  }));

  return finalResults;
};
