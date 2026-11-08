import style from '../styles/legal-manual.csl?raw';
import en from '../styles/locales/en-US.xml?raw';
import zh from '../styles/locales/zh-CN.xml?raw';
import de from '../styles/locales/de-DE.xml?raw';
import fr from '../styles/locales/fr-FR.xml?raw';
import ja from '../styles/locales/ja-JP.xml?raw';
import { renderCslCitations } from './cslCore.js';
import type { CslItem, CslReference } from '../types';

export { parseCslInput, getCslWarnings, LOCATOR_LABELS } from './cslCore.js';
export const renderReferences = (items: CslItem[], references: CslReference[]): string[] =>
  renderCslCitations(items, references, style, { 'en-US': en, 'zh-CN': zh, 'de-DE': de, 'fr-FR': fr, 'ja-JP': ja });
