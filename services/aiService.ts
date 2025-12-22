
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { TargetLanguage, CitationStyle, AIProvider } from "../types";
import { fetchPublicationRank } from "./easyScholarService";

/**
 * 调用 Gemini 引擎
 */
const callGemini = async (prompt: string) => {
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
  return JSON.parse(response.text || "[]");
};

/**
 * 调用 DeepSeek 引擎
 * 使用 OpenAI 兼容接口，环境变量 DEEPSEEK_API_KEY 已由 vite.config.ts 注入
 */
const callDeepSeek = async (prompt: string) => {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("DeepSeek API Key 未配置。请确保环境变量 DEEPSEEK_API_KEY 已正确设置。");
  }

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
      response_format: {
        type: "json_object"
      },
      temperature: 0.1
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`DeepSeek API 错误: ${errorData.error?.message || response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  
  // 兼容某些情况下 AI 返回的 JSON 被包裹在代码块中的情况
  const jsonStr = content.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(jsonStr);
  
  // DeepSeek 返回的可能是对象包装的数组，或者是直接数组
  return Array.isArray(parsed) ? parsed : (parsed.citations || parsed.data || []);
};

export const processCitation = async (
  input: string, 
  lang: TargetLanguage, 
  style: CitationStyle,
  provider: AIProvider
): Promise<any[]> => {
  const prompt = `转换要求：将以下文献转换为 ${style} 样式。语言：${lang}。输入内容：\n${input}`;
  
  let aiResults: any[];
  
  if (provider === AIProvider.DEEPSEEK) {
    aiResults = await callDeepSeek(prompt);
  } else {
    aiResults = await callGemini(prompt);
  }
  
  const finalResults = await Promise.all(aiResults.map(async (res: any) => {
    // 异步获取 easyScholar 实时多维度官方等级
    const official = await fetchPublicationRank(res.pubName);
    
    return {
      text: res.text,
      level: res.level, 
      rankDetail: {
        tags: official.tags,
        isNegative: official.isNegative || res.level?.includes('风险') || res.level?.includes('负面')
      }
    };
  }));

  return finalResults;
};
