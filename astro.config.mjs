// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;

// Azure Static Web Apps serves the site from the domain root.
export default defineConfig({
  ...(site ? { site } : {}),
  base: "/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
