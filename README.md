# 法学引注转换器

依据《法学引注手册（第二版）》整理引注，支持文本转换与 CSL JSON 精确引注。

- 文本转换优先使用本地规则，不能识别的条目由 DeepSeek 或 Gemini 辅助处理；保留原文用于核对。
- CSL 模式直接执行项目内的原始样式，支持中、英、德、法、日文。导入 Zotero 导出的 CSL JSON 后，可逐条选择语言、填写页码或条款，并为同一文献添加多次引用。每次均输出完整引注，无需 AI 密钥。
- 支持搜索、待核对筛选、复制、TXT / Markdown 导出、可选编号和清空撤销。最多保存 200 条本机记录。
- 期刊等级查询沿用 easyScholar 接口；未返回标签不代表已完成等级认证。

## 本地运行

```sh
npm install
npm run dev
```

可选环境变量放入 `.env.local`：

```env
DEEPSEEK_API_KEY=your_deepseek_key
EASY_SCHOLAR_SECRET=your_easyscholar_secret
GEMINI_API_KEY=your_gemini_key
```

DeepSeek 与 easyScholar 通过 `/api/deepseek/chat/completions`、`/api/easyscholar/rank` 服务端代理。Gemini 沿用现有浏览器直连配置。Vercel 部署可在项目中设置同名环境变量。

## CSL 数据

在 Zotero 中选中文献，选择“导出条目”，格式使用“CSL JSON”。也可直接粘贴对象或数组：

```json
[
  {
    "id": "book-1",
    "type": "book",
    "language": "zh-CN",
    "author": [{ "literal": "王名扬" }],
    "title": "美国行政法",
    "publisher": "中国法制出版社",
    "issued": { "date-parts": [[1995]] }
  }
]
```

`language` 缺省时依原样式使用英文，中文需设为 `zh-CN`。`page` 记录文献起止页；具体引文页码在导入后的“定位”输入框填写。重复引用按钮新增引用位置，原文献 ID 保持不变。不同文献不能共用一个 ID。

指导性案例的 `collection-title`、`collection-number`、`available-date` 分别为案例系列、编号和发布时间；公报案例填写 `container-title`、`issue`、`available-date`。发布时间不要以裁判日期代替。一般裁判文书填写 `authority`（法院）、`number`（案号）、`genre`（文书类型）。

源样式注明法文及英国案例支持尚不完善；输出需结合原文核对。CSL 模式只执行这份法学样式；其他体例使用文本转换。

## 验证与构建

```sh
npm run verify-samples
npm run verify-csl
npm run build
```

## 样式来源

`styles/legal-manual.csl` 为用户提供的《法学引注手册（第二版，多语言，重复引用不省略，标注页码）》原文件，未作规则修改。作者 Zeping Lee，样式声明 CC BY-SA 3.0，更新时间 2026-03-07。保留了原文件中的署名及许可信息。

`styles/locales/` 来自 [CSL 官方语言库](https://github.com/citation-style-language/locales)，按 CC BY-SA 3.0 发布。渲染引擎使用 [citeproc-js](https://github.com/Juris-M/citeproc-js)，许可见包内声明。
