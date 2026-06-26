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

## Editing content

- **Projects:** edit `src/data/projects.json`.
- **Reading list:** edit `src/data/books.json` (ratings are 0–5, half-steps allowed).
- **Résumé:** edit `src/data/resume.json`; drop a `resume.pdf` into `public/` and set
  `resumePdf: "/resume.pdf"` in `src/site.ts` to show the download button.
- **Blog:** add a Markdown file under `src/content/posts/`.

## Re-syncing vendored games

The games under `public/games/` are copies of separate repos. To update them:

```sh
# single-file games
cp ../yung-hung-jung/index.html public/games/jung/index.html
cp ../alexa-game/alexa.html      public/games/alexa/index.html

# escape-transylvania (built with the games subpath as base)
( cd ../escape-transylvania && npx vite build --base=/games/escape/ )
rm -rf public/games/escape && mkdir -p public/games/escape
cp -r ../escape-transylvania/dist/. public/games/escape/
```
