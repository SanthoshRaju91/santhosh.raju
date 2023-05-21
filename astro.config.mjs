import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    react(),
    mdx({
      extendPlugins: "default",
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
  ],
});
