import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// Configure Astro with Netlify adapter
export default defineConfig({
  site: 'https://sunstoneinclusivity.network',
  integrations: [
    tailwind({
      config: { 
        applyBaseStyles: false
      }
    }), 
    react()
  ],
  output: 'server',
  // Explicitly configure the Netlify adapter with the function name
  adapter: netlify({
    functionName: 'ssr',
    binaryMediaTypes: ['image/*', 'font/*', 'application/octet-stream'],
    edgeMiddleware: false
  })
});