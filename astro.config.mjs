import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://phons.dev",
  output: "static",
  integrations: [solidJs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
