import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  outDir: './dist',       // Explicitly set output directory
  publicDir: './public',  // Explicitly set public directory
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
    binaryMediaTypes: ['image/*', 'font/*', 'application/pdf'],
    platform: 'node'      // Explicitly set platform to node to handle built-in modules
  }),
  vite: {
    build: {
      rollupOptions: {
        // Ensure Node.js built-ins are properly handled
        external: ['stream', 'http', 'https', 'zlib', 'net', 'tls', 'crypto', 'events', 'url', 'punycode', 'buffer']
      }
    }
  }
});