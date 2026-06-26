import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dev.stokvelsociety.co.za',
  output: 'static',
  redirects: {
    '/architecture': '/projects',
  },
  integrations: [react(), tailwind()],
  build: {
    format: 'directory',
  },
});
