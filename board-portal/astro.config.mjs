import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// Switch back to Netlify adapter with simpler config
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
  adapter: netlify()  // Use default Netlify adapter settings
});