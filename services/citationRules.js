export const DOC_TYPES = {
  BOOK: "book",
  JOURNAL_ARTICLE: "journal_article",
  COLLECTION_ARTICLE: "collection_article",
  NEWSPAPER_ARTICLE: "newspaper_article",
  WEB_ARTICLE: "web_article",
  WECHAT_ARTICLE: "wechat_article",
  CONFERENCE_PAPER: "conference_paper",
  THESIS: "thesis",
  LEGAL_DOCUMENT: "legal_document",
  OFFICIAL_DOCUMENT: "official_document",
  JUDICIAL_CASE: "judicial_case",
  ENGLISH_BOOK: "english_book",
  ENGLISH_ARTICLE: "english_article",
  ENGLISH_CASE: "english_case",
  JAPANESE_BOOK: "japanese_book",
  JAPANESE_ARTICLE: "japanese_article",
  FOREIGN_LANGUAGE: "foreign_language",
  UNKNOWN: "unknown",
};

export const DOC_TYPE_LABELS = {
  [DOC_TYPES.BOOK]: "图书",
  [DOC_TYPES.JOURNAL_ARTICLE]: "期刊文章",
  [DOC_TYPES.COLLECTION_ARTICLE]: "文集/集刊文章",
  [DOC_TYPES.NEWSPAPER_ARTICLE]: "报纸文章",
  [DOC_TYPES.WEB_ARTICLE]: "网络文献",
  [DOC_TYPES.WECHAT_ARTICLE]: "微信公众号文章",
  [DOC_TYPES.CONFERENCE_PAPER]: "会议论文",
  [DOC_TYPES.THESIS]: "学位论文",
  [DOC_TYPES.LEGAL_DOCUMENT]: "法律法规规章",
  [DOC_TYPES.OFFICIAL_DOCUMENT]: "规范性/官方文件",
  [DOC_TYPES.JUDICIAL_CASE]: "司法案例",
  [DOC_TYPES.ENGLISH_BOOK]: "英文图书",
  [DOC_TYPES.ENGLISH_ARTICLE]: "英文文章",
  [DOC_TYPES.ENGLISH_CASE]: "英美案例",
  [DOC_TYPES.JAPANESE_BOOK]: "日文图书",
  [DOC_TYPES.JAPANESE_ARTICLE]: "日文文章",
  [DOC_TYPES.FOREIGN_LANGUAGE]: "其他外文文献",
  [DOC_TYPES.UNKNOWN]: "待判定",
};

const mapOutsideUrls = (text, formatter) =>
  text
    .split(/(https?:\/\/\S+)/g)
    .map((segment) => (segment.startsWith("http://") || segment.startsWith("https://") ? segment : formatter(segment)))
    .join("");

const ensureTrailingPeriod = (text, punctuation) => {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  if (/[。.!?]$/.test(trimmed)) return trimmed;
  return `${trimmed}${punctuation}`;
};

const normalizeZhPunctuation = (text) => {
  const normalized = mapOutsideUrls(text, (segment) =>
    segment
      .replace(/\s*·\s*/g, "·")
      .replace(/\s*([，。；：])\s*/g, "$1")
      .replace(/\s*,\s*/g, "，")
      .replace(/\s*:\s*(?=《|“|「|『)/g, "：")
      .replace(/\(\s*/g, "(")
      .replace(/\s*\)/g, ")")
      .replace(/\s{2,}/g, " ")
      .trim(),
  );

  return ensureTrailingPeriod(normalized, "。");
};

const normalizeDocumentNumberBrackets = (text) =>
  text.replace(/([^\s《》()（）,，]{1,12})[\[【(（](\d{2,4})[\]】)）](?=\d+号)/g, "$1〔$2〕");

const normalizeEnglishSpacing = (text) =>
  ensureTrailingPeriod(
    text
      .replace(/\s+/g, " ")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*\(\s*/g, " (")
      .replace(/\s*\)\s*/g, ") ")
      .replace(/\)\s+\./g, ").")
      .replace(/\s+\./g, ".")
      .replace(/, \)/g, ")")
      .replace(/\s{2,}/g, " ")
      .trim(),
    ".",
  );

const normalizeEnglishAuthor = (author) =>
  author
    .replace(/\s+/g, " ")
    .replace(/([A-Z])\.([A-Z][a-z])/g, "$1. $2")
    .replace(/([A-Za-z]),([A-Z])/g, "$1, $2")
    .replace(/\s*,\s*/g, ", ")
    .trim();

const extractQuotedContainer = (text) => {
  const match = text.match(/载《([^》]+)》/);
  return match?.[1]?.trim() || "";
};

const extractPublisher = (text) => {
  const match = text.match(/([^，,。\s]+出版社)/);
  return match?.[1]?.trim() || "";
};

const extractWebsiteName = (text) => {
  const match = text.match(/载([^，,0-9]+?)(?:\d{4}年|\d{1,2}月|https?:\/\/)/);
  return match?.[1]?.trim() || "";
};

const extractWechatAccount = (text) => {
  const match = text.match(/(?:微信公众(?:号)?[“"]?)([^”"，,]+)(?:[”"])?/);
  return match?.[1]?.trim() || "";
};

const extractInstitution = (text) => {
  const match = text.match(/([^，,]+大学)\d{4}年(?:博士|硕士)学位论文/);
  return match?.[1]?.trim() || "";
};

export const cleanInputLine = (line) =>
  line
    .replace(/^〔\d+〕\s*/, "")
    .replace(/^\[\d+\]\s*/, "")
    .replace(/^\(\d+\)\s*/, "")
    .replace(/^\d+[.、]\s*/, "")
    .trim();

export const splitInputLines = (input) =>
  input
    .split(/\r?\n/)
    .map(cleanInputLine)
    .filter(Boolean);

export const detectLanguage = (text) => {
  if (/[ぁ-ゟ゠-ヿ]/.test(text) || /[一-龯]+.*[『「』」]/.test(text)) return "ja";
  if (/[А-Яа-яЁё]/.test(text)) return "ru";
  if (/[À-ÿ]/.test(text) && !/[一-龯]/.test(text)) return "fr";
  if (/[A-Za-z]/.test(text) && !/[一-龯]/.test(text)) return "en";
  if (/[一-龯]/.test(text)) return "zh";
  return "other";
};

export const detectCitationRule = (raw) => {
  const text = cleanInputLine(raw);
  const language = detectLanguage(text);

  const makeResult = (docType, confidence, reason, pubName = "") => ({
    original: text,
    language,
    docType,
    docTypeLabel: DOC_TYPE_LABELS[docType],
    confidence,
    reason,
    pubName,
  });

  if (/指导案例|案例库|判决书|裁定书|裁判书|诉.+案/.test(text)) {
    return makeResult(DOC_TYPES.JUDICIAL_CASE, "high", "命中案例/裁判文书显性线索", "");
  }

  if (/\bv\.|\sv\./.test(text) || text.includes("v.")) {
    return makeResult(DOC_TYPES.ENGLISH_CASE, "high", "命中英美案例 v. 线索", "");
  }

  if (/博士学位论文|硕士学位论文|学位论文|dissertation|thesis/i.test(text)) {
    return makeResult(DOC_TYPES.THESIS, "high", "命中学位论文显性线索", extractInstitution(text));
  }

  if (/会议论文|研讨会|论坛|年会论文|于北京|于上海|于广州/.test(text)) {
    return makeResult(DOC_TYPES.CONFERENCE_PAPER, "high", "命中会议论文显性线索", "");
  }

  if (/微信公众(?:号)?|公众号/.test(text)) {
    return makeResult(DOC_TYPES.WECHAT_ARTICLE, "high", "命中微信公众号显性线索", extractWechatAccount(text));
  }

  if (/https?:\/\/|网址|访问。?$|访问$/.test(text)) {
    return makeResult(DOC_TYPES.WEB_ARTICLE, "high", "命中 URL 或访问日期线索", extractWebsiteName(text));
  }

  if (/《.+》第\d+条/.test(text) || (/法律|条例|办法|规定|民法典|刑法|诉讼法/.test(text) && /第\d+条/.test(text))) {
    return makeResult(DOC_TYPES.LEGAL_DOCUMENT, "high", "命中法律文件与条文线索", "");
  }

  if (/国发[\[〔【(（]\d{2,4}[\]〕】)）]|法释[\[〔【(（]\d{2,4}[\]〕】)）]|通知|决定|意见|报告|白皮书|会议通过|GB\/T/.test(text)) {
    return makeResult(DOC_TYPES.OFFICIAL_DOCUMENT, "high", "命中规范性/官方文件显性线索", "");
  }

  if (/载《.+》\d{4}年\d{1,2}月\d{1,2}日，第?\d+版/.test(text)) {
    return makeResult(DOC_TYPES.NEWSPAPER_ARTICLE, "high", "命中报纸文章格式", extractQuotedContainer(text));
  }

  if (/载.+主编：《.+》/.test(text) || /载《.+》第\d+卷/.test(text) || (/论丛/.test(text) && /载/.test(text))) {
    return makeResult(DOC_TYPES.COLLECTION_ARTICLE, "high", "命中文集/集刊析出文献格式", extractQuotedContainer(text));
  }

  if (/载《.+》\d{4}年第\d+期/.test(text)) {
    return makeResult(DOC_TYPES.JOURNAL_ARTICLE, "high", "命中中文期刊文章格式", extractQuotedContainer(text));
  }

  if (/出版社\d{4}年版/.test(text) || /《.+》\((第?\d+版|第\d+版)\)/.test(text)) {
    return makeResult(DOC_TYPES.BOOK, "high", "命中中文图书格式", extractPublisher(text));
  }

  if (language === "ja" && /『.+』/.test(text)) {
    return makeResult(DOC_TYPES.JAPANESE_BOOK, "high", "命中日文图书书名号", "");
  }

  if (language === "ja" && /「.+」/.test(text)) {
    return makeResult(DOC_TYPES.JAPANESE_ARTICLE, "high", "命中日文文章标题符号", "");
  }

  if (language === "en" && /,\s*\d+\s+[A-Z][A-Za-z.&' -]+?\s+\d+(?:,\s*\d+(?:-\d+)?)?\s*\(\d{4}\)/.test(normalizeEnglishSpacing(text))) {
    return makeResult(DOC_TYPES.ENGLISH_ARTICLE, "high", "命中英文学术期刊卷页格式", "");
  }

  if (language === "en" && /(Press|Publishing|University Press|Pub\.)[, ]+\d{4}/i.test(text)) {
    return makeResult(DOC_TYPES.ENGLISH_BOOK, "medium", "命中英文图书出版信息", "");
  }

  if (language !== "zh" && language !== "en" && language !== "ja") {
    return makeResult(DOC_TYPES.FOREIGN_LANGUAGE, "medium", "识别为其他外文文献", "");
  }

  return makeResult(DOC_TYPES.UNKNOWN, "low", "未命中显性线索，需模型补判", "");
};

const formatChineseBook = (text) => {
  const match = text.match(/^(?<author>.+?)[：:](?<title>《.+?》(?:\([^)]*版\))?)[，,]?(?<rest>.+)$/);
  if (!match?.groups?.author || !/出版社\d{4}年版/.test(match.groups.rest)) return null;
  return normalizeZhPunctuation(`${match.groups.author}：${match.groups.title}，${match.groups.rest}`);
};

const formatChineseJournal = (text) => {
  const match = text.match(/^(?<author>.+?)[：:](?<title>《.+?》)[，,]?载《(?<container>[^》]+)》(?<rest>.+)$/);
  if (!match?.groups?.author || !/\d{4}年第\d+期/.test(match.groups.rest)) return null;
  return normalizeZhPunctuation(`${match.groups.author}：${match.groups.title}，载《${match.groups.container}》${match.groups.rest}`);
};

const formatCollectionArticle = (text) => {
  const match = text.match(/^(?<author>.+?)[：:](?<title>《.+?》)[，,]?载(?<container>.+)$/);
  if (!match?.groups?.author || !(/主编：《/.test(match.groups.container) || /第\d+卷/.test(match.groups.container) || /第\d+辑/.test(match.groups.container))) {
    return null;
  }
  return normalizeZhPunctuation(`${match.groups.author}：${match.groups.title}，载${match.groups.container}`);
};

const formatNewspaperArticle = (text) => {
  const match = text.match(/^(?<author>.+?)[：:](?<title>《.+?》)[，,]?载《(?<paper>[^》]+)》(?<date>\d{4}年\d{1,2}月\d{1,2}日)[，,]?(?<rest>第?\d+版.*)?$/);
  if (!match?.groups?.author) return null;
  const rest = match.groups.rest ? `，${match.groups.rest}` : "";
  return normalizeZhPunctuation(`${match.groups.author}：${match.groups.title}，载《${match.groups.paper}》${match.groups.date}${rest}`);
};

const formatWebArticle = (text) => {
  if (/微信公众(?:号)?|公众号/.test(text)) return null;
  if (!/https?:\/\/|访问/.test(text)) return null;

  const authored = text.match(/^(?<author>.+?)[：:](?<title>《.+?》)[，,]?载(?<rest>.+)$/);
  if (authored?.groups?.author) {
    return normalizeZhPunctuation(`${authored.groups.author}：${authored.groups.title}，载${authored.groups.rest}`);
  }

  return normalizeZhPunctuation(text);
};

const formatWechatArticle = (text) => {
  if (!/微信公众(?:号)?|公众号/.test(text)) return null;
  const stripped = text.replace(/[，,]?\s*https?:\/\/mp\.weixin\.qq\.com\/\S+/g, "");
  const authored = stripped.match(/^(?<author>.+?)[：:](?<title>《.+?》)[，,]?载(?<rest>.+)$/);
  if (authored?.groups?.author) {
    return normalizeZhPunctuation(`${authored.groups.author}：${authored.groups.title}，载${authored.groups.rest}`);
  }
  return normalizeZhPunctuation(stripped);
};

const formatConferencePaper = (text) => {
  if (!/会议论文|研讨会|论坛|年会论文/.test(text)) return null;
  return normalizeZhPunctuation(text.replace(/([?？])(，|。)/g, "$1"));
};

const formatThesis = (text) => {
  if (!/博士学位论文|硕士学位论文|学位论文/.test(text)) return null;
  return normalizeZhPunctuation(text);
};

const formatLegalDocument = (text) => {
  if (!/《.+》第\d+条/.test(text)) return null;
  return normalizeZhPunctuation(normalizeDocumentNumberBrackets(text));
};

const formatOfficialDocument = (text) => {
  if (!/通知|决定|意见|报告|白皮书|会议通过|GB\/T|〔\d{2,4}〕|\[\d{2,4}\]/.test(text)) return null;
  return normalizeZhPunctuation(normalizeDocumentNumberBrackets(text));
};

const formatJudicialCase = (text) => {
  if (!/案|判决书|裁定书|案例库|指导案例/.test(text)) return null;
  const reordered = text.replace(
    /^(?<caseName>.+?案)[，,](?<court>.+?法院)(?<docType>[^，,()（）]*?(?:判决书|裁定书|决定书))[，,]\s*(?<caseNo>[（(]\d{4}[)）][^，,。]+)[。.]?$/u,
    "$<caseName>，$<court>$<caseNo>$<docType>",
  );
  return normalizeZhPunctuation(normalizeDocumentNumberBrackets(reordered));
};

const formatEnglishArticle = (text) => {
  const normalized = normalizeEnglishSpacing(text);
  const match = normalized.match(/^(?<author>.+?), (?<title>.+?), (?<volume>\d+) (?<journal>.+?) (?<page>\d+)(?<pin>, \d+(?:-\d+)?)? \((?<year>\d{4})\)\.?$/);
  if (!match?.groups?.author) return null;
  const pin = match.groups.pin || "";
  return `${normalizeEnglishAuthor(match.groups.author)}, *${match.groups.title.trim()}*, ${match.groups.volume} ${match.groups.journal.trim()} ${match.groups.page}${pin} (${match.groups.year}).`;
};

const formatEnglishBook = (text) => {
  const normalized = normalizeEnglishSpacing(text);
  const match = normalized.match(/^(?<author>.+?), (?<title>.+?), (?<publisher>.+?), (?<year>\d{4}), p\.(?<pages>[\d-]+)\.?$/i);
  if (!match?.groups?.author) return null;
  return `${normalizeEnglishAuthor(match.groups.author)}, *${match.groups.title.trim()}*, ${match.groups.publisher.trim()}, ${match.groups.year}, p.${match.groups.pages}.`;
};

const formatEnglishNews = (text) => {
  const normalized = normalizeEnglishSpacing(text);
  const match = normalized.match(/^(?<author>.+?), (?<title>.+?), (?<container>.+?), (?<date>\d{1,2} [A-Za-z]+ \d{4}), p\.(?<pages>[\w-]+)\.?$/i);
  if (!match?.groups?.author) return null;
  return `${normalizeEnglishAuthor(match.groups.author)}, *${match.groups.title.trim()}*, ${match.groups.container.trim()}, ${match.groups.date}, p.${match.groups.pages}.`;
};

const formatEnglishCase = (text) => {
  if (!(text.includes("v.") || /\bv\./.test(text))) return null;
  const normalized = normalizeEnglishSpacing(text)
    .replace(/,Inc\./g, ", Inc.")
    .replace(/,Inc\. v\./g, ", Inc. v.")
    .replace(/Inc\.v\./g, "Inc. v.")
    .replace(/Council,Inc\./g, "Council, Inc.")
    .replace(/, Inc\.v\./g, ", Inc. v.")
    .replace(/ v\.([A-Z])/g, " v. $1")
    .replace(/,([A-Z])/g, ", $1")
    .replace(/(\d)\(/g, "$1 (");
  return ensureTrailingPeriod(normalized, ".");
};

const formatJapaneseSource = (text) => {
  if (!/[『「]/.test(text)) return null;
  return ensureTrailingPeriod(text.replace(/\s+/g, " ").trim(), "。");
};

export const formatCitationByRules = (raw, style = "legal", explicitDocType = "") => {
  const detected = detectCitationRule(raw);
  const docType = explicitDocType || detected.docType;
  const text = cleanInputLine(raw);

  if (style !== "legal") {
    return {
      ...detected,
      docType,
      docTypeLabel: DOC_TYPE_LABELS[docType] || detected.docTypeLabel,
      text: "",
      usedLocalRules: false,
    };
  }

  const formatterMap = {
    [DOC_TYPES.BOOK]: formatChineseBook,
    [DOC_TYPES.JOURNAL_ARTICLE]: formatChineseJournal,
    [DOC_TYPES.COLLECTION_ARTICLE]: formatCollectionArticle,
    [DOC_TYPES.NEWSPAPER_ARTICLE]: formatNewspaperArticle,
    [DOC_TYPES.WEB_ARTICLE]: formatWebArticle,
    [DOC_TYPES.WECHAT_ARTICLE]: formatWechatArticle,
    [DOC_TYPES.CONFERENCE_PAPER]: formatConferencePaper,
    [DOC_TYPES.THESIS]: formatThesis,
    [DOC_TYPES.LEGAL_DOCUMENT]: formatLegalDocument,
    [DOC_TYPES.OFFICIAL_DOCUMENT]: formatOfficialDocument,
    [DOC_TYPES.JUDICIAL_CASE]: formatJudicialCase,
    [DOC_TYPES.ENGLISH_ARTICLE]: (value) => formatEnglishArticle(value) || formatEnglishNews(value),
    [DOC_TYPES.ENGLISH_BOOK]: formatEnglishBook,
    [DOC_TYPES.ENGLISH_CASE]: formatEnglishCase,
    [DOC_TYPES.JAPANESE_BOOK]: formatJapaneseSource,
    [DOC_TYPES.JAPANESE_ARTICLE]: formatJapaneseSource,
  };

  const formatter = formatterMap[docType];
  const formatted = formatter ? formatter(text) : null;

  return {
    ...detected,
    docType,
    docTypeLabel: DOC_TYPE_LABELS[docType] || detected.docTypeLabel,
    text: formatted || "",
    pubName:
      detected.pubName ||
      extractQuotedContainer(text) ||
      extractPublisher(text) ||
      extractWebsiteName(text) ||
      extractWechatAccount(text) ||
      extractInstitution(text),
    usedLocalRules: Boolean(formatted),
  };
};
