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
  adapter: netlify() // Use default Netlify adapter settings
});