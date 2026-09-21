# Muhammad Abdullah — Portfolio

A production-ready developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. No backend, no database, no API keys — it's a fully static site that reads its content from plain TypeScript data files.

## Stack

- **Next.js 16** (App Router, static export–ready)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals + one orchestrated hero entrance (respects `prefers-reduced-motion`)
- **next-themes** — light/dark toggle
- **lucide-react** — icons
- **@fontsource** (Space Grotesk, IBM Plex Sans, IBM Plex Mono) — self-hosted fonts, no external font requests at runtime

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Everything you'd want to update lives in `src/data/`, not scattered across components:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, headline, bio, location, contact links, resume URL, **site URL** |
| `src/data/experience.ts` | Work history timeline |
| `src/data/projects.ts` | Featured project cards (description, role, stack, store links) |
| `src/data/skills.ts` | Skill groups and education |

**Before you publish, please double-check:**

1. **`siteUrl` in `src/data/profile.ts`** — currently set to a placeholder (`https://muhammadabdullah.dev`). Update it to your real deployed domain once you have one; it's used for SEO metadata, the sitemap, and the Open Graph image.
2. **Chepa Ticket Zone and University of Gujrat dates** in `src/data/experience.ts` — I didn't have exact start/end dates for these on file, so they're currently labeled "Remote engagement" and "Prior to Flutter development" rather than specific months. Add real dates if you have them.
3. **Vent Box** — listed as "In review" with no store link since it wasn't live yet. Add its Play Store URL to `src/data/projects.ts` once it publishes.
4. **Project descriptions** — I pulled these from the live App Store/Play Store listings for accuracy, but they're written from the outside in. If you want them to sound more like your own voice, or want to call out something the store listing doesn't (a specific technical challenge, a metric you're proud of), edit them directly.

## Available commands

```bash
npm run dev       # local dev server
npm run build      # production build
npm run start      # serve the production build locally
npm run lint        # ESLint
```

## Deploying to Vercel (recommended)

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy. Every push to `main` will auto-deploy.
5. Add your custom domain under Project → Settings → Domains, then update `siteUrl` in `src/data/profile.ts` to match and redeploy.

## Deploying to GitHub Pages

A ready-to-use workflow is included at `.github/workflows/deploy.yml`. It builds a static export (`next build` with `GITHUB_PAGES=true`, which flips `output: "export"` in `next.config.ts`) and publishes the `out/` folder via GitHub Pages.

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. If you're deploying to a *project* page (`https://<username>.github.io/<repo-name>`, not a root `<username>.github.io` repo or a custom domain), open `next.config.ts` and uncomment/set:
   ```ts
   basePath: "/<repo-name>",
   assetPrefix: "/<repo-name>",
   ```
4. Push to `main` — the workflow builds and deploys automatically. You can also trigger it manually from the Actions tab.

Both deploy targets work from the same codebase — nothing else to configure.

## Notes

- No environment variables are needed anywhere in this project.
- No contact form/backend — the Contact section links directly to `mailto:`, `tel:`, and WhatsApp, so there's nothing to keep running or pay for.
- Icons: `lucide-react` dropped brand logos in recent versions, so the GitHub/LinkedIn glyphs in `src/components/ui/BrandIcons.tsx` are small hand-included SVGs rather than a lucide import.
