import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// Use Node adapter explicitly since we're having issues with Netlify adapter
export default defineConfig({
  integrations: [
    // Configure tailwind with explicit content paths
    tailwind({
      config: { 
        applyBaseStyles: false,
        content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}']
      }
    }), 
    react()
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  // Ensure all assets and URLs use correct base paths
  build: {
    assets: '_astro',
    assetsPrefix: '/_astro/'
  }
});