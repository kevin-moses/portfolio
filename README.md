# Kevin Moses · Portfolio

This repository contains the Vite + React landing page described in `prompts/prompt1.md`. The app is ready for local development and Netlify deployment.

## Getting started

```bash
cd /Users/Kevin/code/portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` to view the navy landing page with the animated subtitle cycle.

## Deploying to Netlify

1. Install the Netlify CLI if you have not already: `npm install -g netlify-cli`.
2. Run `netlify init` in this directory and follow the prompts.
3. Deploy with `netlify deploy --prod`. The site builds with `npm run build` and publishes the `dist` directory (configured in `netlify.toml`).
