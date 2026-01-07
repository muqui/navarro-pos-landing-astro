// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare(),
    site: "https://posnavarro.com",
  vite: {
    plugins: [tailwindcss()],
  },
});