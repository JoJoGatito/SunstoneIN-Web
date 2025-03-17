import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// Switch back to Netlify adapter with simpler config
export default defineConfig({
  integrations: [
    tailwind({
      config: { 
        applyBaseStyles: false
      }
    }), 
    react()
  ],
  output: 'server',
  adapter: netlify()  // Use default Netlify adapter settings
});