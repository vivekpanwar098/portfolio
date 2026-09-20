
# Developer Portfolio

A premium, dark-first developer portfolio with a Vengeance UI–inspired futuristic style: cyan accent, glass surfaces, animated hero, comet cursor with spark particles, filterable projects, detail modal, timeline, and a fully responsive layout.

Built with **TanStack Start (React 19) + TypeScript + Tailwind CSS v4 + shadcn/ui + Motion + Lucide icons**.

## Quick Start

```sh
1. Install dependencies
npm install    # or: npm install

2. Run the dev server
npm run dev    # or: npm run dev
```

Open http://localhost:8080 in your browser.

## Customize Your Content

All portfolio content lives in one file: `src/data/portfolio.ts`

| Field | What to change |
| --- | --- |
| `name`, `initials` | Your name (currently `[YOUR NAME]`) |
| `role`, `bio`, `about` | Your headline and intro text |
| `email` | Your email (currently `[YOUR EMAIL]`) |
| `github`, `linkedin`, `resume` | Real URLs — replace the `#...-placeholder` values |
| `stats` | Real numbers (replace `[X]+` placeholders) |
| `skills` | Grouped tech stack lists |
| `projects` | Title, description, category, tech, image, overview, features |
| `experience` | Role, company, period, description, tech |
| `testimonials` | Add real quotes here (empty by design — no fake data) |

Also update your name in:
- `src/routes/index.tsx` → page `<title>` and social (og/twitter) metadata
- `src/routes/__root.tsx` → author meta
- `public/sitemap.xml` → your domain

## Project Images

Project preview images are in `src/assets/` (`project-web.jpg`, `project-mobile.jpg`, `project-ai.jpg`). Replace them with your own screenshots — keep the same file names, or add new imports in `src/data/portfolio.ts`.

## Contact Form

The form validates input locally and shows a mailto/copy-email fallback. To send real emails, connect an email service (Resend / EmailJS / Formspree) via a server function or API route — no backend is claimed until configured.

## Build & Deploy

```sh
bun run build   # production build
```

The project deploys via Lovable (Publish button) or to any Node-compatible host / Vercel.

## Notes

- Placeholder links (`#...-placeholder`) render as disabled so nothing pretends to work.
- No fake stats, testimonials, or company names — replace every `[PLACEHOLDER]` with real data.
- Animations respect `prefers-reduced-motion`; the cursor effect is disabled on touch devices.
```
