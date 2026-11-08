import CSL from 'citeproc';

export const LOCATOR_LABELS = { page: '页码', section: '条', paragraph: '款', chapter: '章', article: '条文' };
const supportedLanguages = new Set(['zh', 'en', 'de', 'fr', 'ja']);
const supportedTypes = new Set('article article-journal article-magazine article-newspaper bill book broadcast chapter classic collection dataset document entry entry-dictionary entry-encyclopedia event figure graphic hearing interview legal_case legislation manuscript map motion_picture musical_score pamphlet paper-conference patent performance periodical personal_communication post post-weblog regulation report review review-book software song speech standard thesis treaty webpage'.split(' '));

export function parseCslInput(input) {
  let data;
  try { data = JSON.parse(input); } catch { throw new Error('JSON 格式有误，请导入 Zotero 导出的 CSL JSON，或检查逗号与引号。'); }
  if (!Array.isArray(data)) data = [data];
  if (!data.length) throw new Error('文件中没有文献。');
  if (data.length > 200) throw new Error('每次最多导入 200 条文献。');
  const ids = new Set();
  return data.map((raw, index) => {
    const prefix = `第 ${index + 1} 条`;
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error(`${prefix}不是文献对象。`);
    if (typeof raw.type !== 'string' || !supportedTypes.has(raw.type)) throw new Error(`${prefix}缺少有效的 CSL type（如 book、article-journal、legal_case）。`);
    const id = String(raw.id ?? `item-${index + 1}`);
    if (ids.has(id)) throw new Error(`${prefix}的 id「${id}」重复，请为不同文献使用不同 id。`);
    ids.add(id);
    for (const name of ['author', 'editor', 'translator', 'compiler']) {
      if (raw[name] !== undefined && (!Array.isArray(raw[name]) || raw[name].some(n => !n || typeof n !== 'object' || !['literal', 'family', 'given'].some(k => typeof n[k] === 'string')))) {
        throw new Error(`${prefix}的 ${name} 应为姓名数组，如 [{"literal":"张三"}]。`);
      }
    }
    for (const name of ['issued', 'accessed', 'available-date']) {
      if (raw[name] !== undefined) {
        const date = raw[name];
        if (!date || typeof date !== 'object' || !(typeof date.literal === 'string' || (Array.isArray(date['date-parts']) && date['date-parts'].length && date['date-parts'].every(p => Array.isArray(p) && p.length >= 1 && p.length <= 3 && p.every(Number.isInteger))))) {
          throw new Error(`${prefix}的 ${name} 应为 CSL 日期，如 {"date-parts":[[2024,10,12]]}。`);
        }
      }
    }
    if (raw.language !== undefined && typeof raw.language !== 'string') throw new Error(`${prefix}的 language 应为语言代码字符串。`);
    if (raw.title !== undefined && typeof raw.title !== 'string') throw new Error(`${prefix}的 title 应为字符串。`);
    return { ...raw, id };
  });
}

export function getCslWarnings(item, locator = '') {
  const warnings = [];
  const language = (item.language || 'en').split(/[-_]/)[0].toLowerCase();
  if (!item.language) warnings.push('未填写 language，按原样式默认使用英文；中文请设为 zh-CN。');
  else if (!supportedLanguages.has(language)) warnings.push('原样式没有该语种的专用规则，将回退为英文。');
  if (language === 'fr') warnings.push('原样式注明法文支持尚不完善，请核对结果。');
  if (!item.title && !(language === 'de' && item.type === 'chapter')) warnings.push('缺少标题。');
  if (['book', 'chapter', 'article-journal', 'thesis'].includes(item.type)) {
    if (!item.author?.length && !item.editor?.length && !item.compiler?.length) warnings.push('未填写作者或编者。');
    if (!item.issued) warnings.push('缺少出版年份。');
    if (['book', 'chapter'].includes(item.type) && !item.publisher) warnings.push('未填写出版社。');
    if (['chapter', 'article-journal'].includes(item.type) && !item['container-title'] && !item['collection-title']) warnings.push('未填写刊名或文集名。');
    if (!locator && !(language === 'fr' && item.page)) warnings.push('未填写引用定位；文献总页码不能代替具体引文页码。');
  }
  if (['webpage', 'post', 'post-weblog'].includes(item.type)) {
    if (!item.URL) warnings.push('未填写网址。');
    if (!item.issued && !item.accessed) warnings.push('缺少发布日期和访问日期。');
  }
  if (item.type === 'legal_case' && language === 'zh') {
    if (item['collection-title'] || item['container-title']) {
      if (!item['available-date']) warnings.push('缺少案例发布时间 available-date；请勿以裁判日期代替。');
      if (item['collection-title'] && !item['collection-number']) warnings.push('指导性案例缺少 collection-number。');
      if (!item['collection-title'] && !item.issue) warnings.push('公报案例缺少期号 issue。');
    } else if (!item.archive) {
      if (!item.authority || !item.number || !item.genre) warnings.push('裁判文书应填写法院 authority、案号 number 和文书类型 genre。');
    }
  }
  return warnings;
}

// Render only supported emphasis as Markdown. Never insert imported HTML into the page.
export function htmlToMarkdown(html) {
  return html.replace(/<i\b[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
    .replace(/<[^>]*>/g, '')
    .replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ');
}

export function renderCslCitations(items, references, style, locales) {
  const byId = new Map(items.map(item => [String(item.id), item]));
  const engine = new CSL.Engine({
    retrieveLocale: lang => locales[lang] || locales[Object.keys(locales).find(key => key.startsWith(lang.split('-')[0]))] || locales['en-US'],
    retrieveItem: id => structuredClone(byId.get(String(id))),
  }, style);
  engine.updateItems(items.map(item => String(item.id)));
  const previous = [];
  const results = [];
  references.forEach((ref, index) => {
    if (!byId.has(String(ref.id))) throw new Error('引用对应的文献不存在。');
    const citationID = `citation-${index}`;
    const citationItem = { id: String(ref.id), ...(ref.locator?.trim() ? { locator: ref.locator.trim(), label: ref.label || 'page' } : {}) };
    const citation = { citationID, citationItems: [citationItem], properties: { noteIndex: index + 1 } };
    const [, updates] = engine.processCitationCluster(citation, previous, []);
    updates.forEach(([position, html]) => { results[position] = htmlToMarkdown(html); });
    previous.push([citationID, index + 1]);
  });
  return results;
}
