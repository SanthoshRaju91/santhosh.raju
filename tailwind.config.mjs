/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        body: "url('/background.svg')",
      },
      colors: {
        "primary-100": "#2E8B57",
        "primary-200": "#61bc84",
        "primary-300": "#c6ffe6",
        "secondary-100": "#1E1E1E",
        "secondary-200": "#2d2d2d",
        "secondary-300": "#454545",
        "accent-100": "#8FBC8F",
        "accent-200": "#345e37",
        "tertiary-100": "#FFFFFF",
        "tertiary-200": "#e0e0e0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: {
    pattern: /(bg|text|border)-(primary|secondary|accent|tertiary)/,
    variants: ["hover", "focus", "after", "before", "selection"],
  },
};
