import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dev.stokvelsociety.co.za',
  integrations: [react(), tailwind()],
  build: {
    format: 'directory',
  },
});