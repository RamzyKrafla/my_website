# Ramzy Rafla - Personal Website

Personal portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

Deployed to GitHub Pages at [www.ramzyrafla.com](https://www.ramzyrafla.com/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts: `npm run lint`, `npm run typecheck`, `npm run build`.

## How to update content

- **Copy / bio / jobs / projects / hero text**: edit [`src/data/portfolio.ts`](src/data/portfolio.ts).
- **Layout / styling**: edit components in `src/components/` or tokens in `src/app/globals.css`.
- **Section order**: edit [`src/app/page.tsx`](src/app/page.tsx).

AI / contributor conventions: see [`AGENTS.md`](AGENTS.md).

## Deploy

The live site only updates after you **push to `main`**. A local `npm run build` does not change [www.ramzyrafla.com](https://www.ramzyrafla.com/).

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions builds the static export and deploys to Pages (custom domain, site root — no `/my_website` base path). You do **not** need to commit the `out/` folder.

### Checking deployment status

1. Open the **Actions** tab on GitHub.
2. Workflow run colors: yellow = in progress, green = live, red = failed (open the run for logs).

Pull requests also get a CI job (`lint` + `typecheck` + `build`) so broken changes are caught before merge.
