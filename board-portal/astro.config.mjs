import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
    binaryMediaTypes: ['image/*', 'font/*', 'application/pdf'],
    platform: 'node' // Explicitly set platform to node to handle built-in modules
  }),
});