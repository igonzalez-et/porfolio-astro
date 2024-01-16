import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://igonzalez-et.github.io',
  base: '/porfolio-astro',
  integrations: [tailwind()]
});