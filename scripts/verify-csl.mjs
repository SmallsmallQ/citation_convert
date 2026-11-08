import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCslInput, getCslWarnings, renderCslCitations } from '../services/cslCore.js';
const style = readFileSync(new URL('../styles/legal-manual.csl', import.meta.url), 'utf8');
const locales = Object.fromEntries(['en-US', 'zh-CN', 'de-DE', 'fr-FR', 'ja-JP'].map(language => [language, readFileSync(new URL(`../styles/locales/${language}.xml`, import.meta.url), 'utf8')]));
const items = parseCslInput(JSON.stringify([
  { id: 'book', type: 'book', language: 'zh-CN', author: [{ literal: '王名扬' }], title: '美国行政法', publisher: '中国法制出版社', issued: { 'date-parts': [[1995]] } },
  { id: 'journal', type: 'article-journal', language: 'en-US', author: [{ given: 'Charles A.', family: 'Reich' }], title: 'The New Property', 'container-title': 'Yale Law Journal', volume: '73', page: '733-787', issued: { 'date-parts': [[1964]] } },
  { id: 'law', type: 'legislation', language: 'zh-CN', title: '民法典', section: '1224' },
  { id: 'de', type: 'book', language: 'de-DE', author: [{ given: 'Max', family: 'Weber' }], title: 'Wirtschaft und Gesellschaft', issued: { 'date-parts': [[1922]] } },
  { id: 'ja', type: 'book', language: 'ja-JP', author: [{ literal: '我妻栄' }], title: '民法講義', publisher: '有斐閣', issued: { 'date-parts': [[1971]] } },
  { id: 'fr', type: 'book', language: 'fr-FR', author: [{ given: 'Paul', family: 'Durand' }], title: 'Droit civil', publisher: 'Dalloz', issued: { 'date-parts': [[2020]] } },
  { id: 'case', type: 'legal_case', language: 'zh-CN', title: '荣宝英诉王阳案', 'collection-title': '最高人民法院指导案例', 'collection-number': '24', 'available-date': { 'date-parts': [[2014]] }, issued: { 'date-parts': [[2012]] } },
]));
const render = refs => renderCslCitations(items, refs, style, locales);
const snapshot = JSON.stringify(items);
const output = render([{ id: 'book', locator: '18' }, { id: 'book', locator: '20-21' }, { id: 'journal', locator: '737-738' }, { id: 'law', locator: '1224', label: 'section' }, { id: 'de', locator: '15' }, { id: 'ja', locator: '50' }, { id: 'fr', locator: '30' }, { id: 'case' }]);
assert.deepEqual(output, [
  '王名扬：《美国行政法》，中国法制出版社1995年版，第18页。',
  '王名扬：《美国行政法》，中国法制出版社1995年版，第20-21页。',
  'Charles A. Reich, *The New Property*, 73 Yale Law Journal 733, 737-738 (1964).',
  '《民法典》第1224条。',
  'Max Weber, Wirtschaft und Gesellschaft, 1922, S. 15.',
  '我妻栄『民法講義』（有斐閣，1971年）50頁。',
  'Paul Durand, *Droit civil*, Dalloz, 2020, p. 30.',
  '荣宝英诉王阳案，最高人民法院指导案例24号（2014年）。',
]);
assert.equal(JSON.stringify(items), snapshot, '处理器不应修改导入数据');
assert.deepEqual(render([{ id: 'book', locator: '18' }, { id: 'book', locator: '18' }]), [output[0], output[0]], '相同页码的连续引用也应完整输出');
assert.ok(getCslWarnings(items[1]).some(warning => warning.includes('未填写引用定位')));
assert.ok(!getCslWarnings(items[1], '737').length);
assert.ok(!render([{ id: 'journal' }])[0].includes('787'), '不得把文献末页作为具体引文页码');
assert.ok(getCslWarnings({ ...items[0], language: undefined }).some(warning => warning.includes('默认使用英文')));
assert.ok(getCslWarnings({ ...items[6], 'available-date': undefined }).some(warning => warning.includes('案例发布时间')));
for (const data of ['{bad}', '[]', '[null]', '[{"type":"unknown"}]', '[{"type":"book","author":"王名扬"}]', '[{"type":"book","issued":1995}]', '[{"type":"book","language":1}]', '[{"id":"1","type":"book"},{"id":"1","type":"book"}]']) assert.throws(() => parseCslInput(data));
assert.equal(parseCslInput('{"type":"book","title":"书"}')[0].id, 'item-1');
assert.throws(() => render([{ id: 'missing' }]));
console.log('CSL 验证通过：五种语言、页码与条款定位、连续重复引用、案例发布时间、字段诊断和无效输入。');
