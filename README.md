<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/66dc802e-387a-4f0e-809b-33dd98be0eb8

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set API keys in [.env.local](.env.local) or in your shell environment:
   ```env
   DEEPSEEK_API_KEY=your_deepseek_key
   EASY_SCHOLAR_SECRET=your_easyscholar_secret
   GEMINI_API_KEY=your_gemini_key
   ```
   `API_KEY` is also supported as an alias for `GEMINI_API_KEY`.
   `DEEPSEEK_KEY` is also supported as an alias for `DEEPSEEK_API_KEY`.
   `EASYSCHOLAR_SECRET`, `EASY_SCHOLAR_API_KEY`, and `SCHOLAR_API_KEY` are also supported as aliases for `EASY_SCHOLAR_SECRET`.
3. Run the app:
   `npm run dev`

## Vercel

Add these Environment Variables in Vercel Project Settings:

```env
DEEPSEEK_API_KEY=your_deepseek_key
EASY_SCHOLAR_SECRET=your_easyscholar_secret
GEMINI_API_KEY=your_gemini_key
```

DeepSeek and easyScholar requests are handled by `/api/deepseek/chat/completions` and `/api/easyscholar/rank`, so those keys are read on the server side instead of being exposed in the browser bundle.
