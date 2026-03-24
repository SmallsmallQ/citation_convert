
export interface Citation {
  id: string;
  original: string;
  formatted: string;
  style: CitationStyle;
  provider: AIProvider;
  docType?: CitationDocType;
  docTypeLabel?: string;
  level?: string; 
  rankDetail?: {
    tags: Array<{ label: string; value: string; type: string }>;
    isNegative?: boolean;
  };
  timestamp: number;
}

export enum TargetLanguage {
  ZH = 'zh',
  EN = 'en',
  DE = 'de',
  FR = 'fr',
  JA = 'ja'
}

export enum CitationStyle {
  LEGAL = 'legal',
  SOCIAL_SCIENCE = 'social_science',
  GB7714 = 'gb7714'
}

export enum AIProvider {
  GEMINI = 'gemini',
  DEEPSEEK = 'deepseek'
}

export enum CitationDocType {
  BOOK = 'book',
  JOURNAL_ARTICLE = 'journal_article',
  COLLECTION_ARTICLE = 'collection_article',
  NEWSPAPER_ARTICLE = 'newspaper_article',
  WEB_ARTICLE = 'web_article',
  WECHAT_ARTICLE = 'wechat_article',
  CONFERENCE_PAPER = 'conference_paper',
  THESIS = 'thesis',
  LEGAL_DOCUMENT = 'legal_document',
  OFFICIAL_DOCUMENT = 'official_document',
  JUDICIAL_CASE = 'judicial_case',
  ENGLISH_BOOK = 'english_book',
  ENGLISH_ARTICLE = 'english_article',
  ENGLISH_CASE = 'english_case',
  JAPANESE_BOOK = 'japanese_book',
  JAPANESE_ARTICLE = 'japanese_article',
  FOREIGN_LANGUAGE = 'foreign_language',
  UNKNOWN = 'unknown'
}
