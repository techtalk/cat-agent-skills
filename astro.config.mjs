// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const base = process.env.SITE_BASE ?? (site ? new URL(site).pathname.replace(/\/$/, "") || "/" : "/");

// Default to the domain root, but allow a subpath when SITE_URL or SITE_BASE includes one.
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
