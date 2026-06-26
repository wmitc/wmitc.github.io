// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // User/org GitHub Pages site served at the root domain.
  site: 'https://wmitc.github.io',
  integrations: [sitemap()],
});
