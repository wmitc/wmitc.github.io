# wmitc.github.io

Personal website, portfolio, and blog of William Mitchell. Built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages via the official `withastro/action`.

> One-time setup: in the repo settings, set **Pages → Build and deployment →
> Source** to **GitHub Actions**.

## Structure

- `src/pages/` — routes (home, projects, games, reading, blog, resume)
- `src/layouts/BaseLayout.astro` — shared shell (nav, footer, theme toggle, SEO)
- `src/components/` — reusable UI components
- `src/content/` — content collections (books, projects, posts)
- `src/site.ts` — site-wide metadata and links
- `public/games/` — vendored self-contained browser games
