# Prince — Developer Portfolio

A dark, modern personal portfolio built with **React 19 + Vite**. Fully static — deploys to Vercel's free tier with zero cold starts.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Editing your content

Everything on the site (profile, skills, experience, projects, education, achievements) lives in one file:

```
src/data/portfolio.js
```

Edit it and refresh — no database, no API, no config.

## Deploying to Vercel

### Option A — Git integration (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — keep the defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Done — every push to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Project structure

```
├── index.html
├── vite.config.js
└── src/
    ├── App.jsx            # Composes all sections
    ├── main.jsx
    ├── index.css          # Dark glassmorphism theme
    ├── data/portfolio.js  # ← Your content lives here
    └── components/        # Navbar, Hero, About, Skills, Experience,
                           # Projects, Education, Achievements, Contact, Footer
```

## Why no backend?

Static sites on Vercel are served from the edge instantly — no serverless cold starts, no database latency, nothing to pay for. If you later need dynamic content (e.g. an admin panel to edit projects), you can add API routes without rearchitecting the site.
