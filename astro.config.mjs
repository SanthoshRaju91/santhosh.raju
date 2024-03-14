/* eslint-disable import/no-unresolved */
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    mdx({
      extendPlugins: "default",
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
    tailwind(),
  ],
});
