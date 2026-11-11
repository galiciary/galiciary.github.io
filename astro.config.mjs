// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // drives canonical urls and og:url. update this if a custom domain is added
  site: 'https://galiciary.github.io',
  integrations: [sitemap()],
});
