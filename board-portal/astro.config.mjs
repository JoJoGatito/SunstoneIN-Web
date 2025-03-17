import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// Use Node adapter explicitly since we're having issues with Netlify adapter
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});