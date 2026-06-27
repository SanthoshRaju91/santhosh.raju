/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.75" }],
        lg: ["1.125rem", { lineHeight: "1.75" }],
        xl: ["1.25rem", { lineHeight: "1.75" }],
        "2xl": ["1.625rem", { lineHeight: "1.3" }],
        "3xl": ["2rem", { lineHeight: "1.3" }],
        "4xl": ["2.5rem", { lineHeight: "1.2" }],
        "5xl": ["3.25rem", { lineHeight: "1.15" }],
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
