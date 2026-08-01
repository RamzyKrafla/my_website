# Agent guide — my_website

Personal portfolio for Ramzy Rafla. Static Next.js site deployed to GitHub Pages.

## Stack

- **Next.js 16** App Router, `output: "export"` (static HTML only — no API routes, no SSR/server actions)
- **React 19**, **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- **Framer Motion** (scroll/entrance animation; respect `prefers-reduced-motion` via `MotionConfig`)
- Path alias: `@/*` → `./src/*`

## Content vs presentation

| What | Where |
|------|--------|
| Bio, hero copy, experience, education, projects, publications, skills, contact blurb | `src/data/portfolio.ts` |
| Section layout, styling, icons | `src/components/*.tsx` |
| Shared UI (`FadeIn`, `SectionHeader`, `Tag`) | `src/components/ui/` |
| Homepage section order | `src/app/page.tsx` |
| Design tokens / atmosphere | `src/app/globals.css` |
| Public assets (CV, photo, favicon) | `public/` |

**Always edit copy in `portfolio.ts` first.** Components should only hold presentation logic.

Types for the data model live in the same file (`PersonalInfo`, `HeroContent`, etc.). Keep new entries typed.

## How to add a homepage section

1. Add typed data under `src/data/portfolio.ts` (or reuse existing keys).
2. Create `src/components/YourSection.tsx` (use `FadeIn` / `SectionHeader` / `Tag` when possible).
3. Import and place it in `src/app/page.tsx`.

## Deploy constraints (do not “fix” these)

- `output: "export"` and `images.unoptimized: true` are required for GitHub Pages.
- Production URL is the custom domain **https://www.ramzyrafla.com/** (site root).
- Leave `PAGES_BASE_PATH` empty for production. Only set it if you temporarily serve under a subpath.
- Raw `<a href="/file.pdf">` links must use `withBasePath()` from `src/lib/paths.ts` when a base path is used. `next/image` handles `basePath` automatically.
- Keep `public/CNAME` as `www.ramzyrafla.com` so the custom domain stays attached after deploys.
- **Local `npm run build` does not update the live site.** Push to `main` to trigger GitHub Actions deploy.

## Commands

```bash
npm run dev        # local server
npm run typecheck  # tsc --noEmit
npm run lint
npm run build      # writes static site to out/
```

Simulate a subpath build (usually not needed with the custom domain):

```bash
PAGES_BASE_PATH=/my_website npm run build
```

## Do not

- Add API routes or server-only features incompatible with static export.
- Remove `images.unoptimized` or invent a Node server for hosting.
- Leave empty placeholder folders under `src/components/`.
- Hardcode portfolio copy in components when it belongs in `portfolio.ts`.
