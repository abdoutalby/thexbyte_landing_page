import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thexbyte.com.tn',
   integrations: [],
  build: {
    format: 'directory'
  }
});
