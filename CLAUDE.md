# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and technical blog at santhoshraju.dev, built with Astro.js (static site generation), Tailwind CSS, and deployed on Vercel.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site for production
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint on `src/**/*.{jsx,js,astro}`
- `npm run format` — Prettier auto-format
- `npm run format:check` — Check formatting without writing
- `npm run test:ci` — Jest with coverage
- `npm run commit` — Commitizen conventional commit helper

## Architecture

**Astro static site** with file-based routing. No SSR — all pages are pre-rendered at build time.

### Key directories

- `src/pages/` — Routes. `index.astro` (home), `portfolio.astro` (about), `blogs/[...page].astro` (paginated blog listing)
- `src/pages/blogs/*.md` — Blog posts as Markdown with YAML frontmatter (`layout`, `slug`, `title`, `synopsis`, `published`, `tags`)
- `src/layouts/` — `MySiteLayout.astro` (main site wrapper with Header/Footer), `BlogLayout.astro` (blog post wrapper with global markdown styling)
- `src/components/` — Astro components: `Header/`, `Footer/`, `Article/`, `Skill/`, `Connection/`
- `public/` — Static assets (SVGs, per-blog image directories like `public/aug-2024/`, favicons)

### Blog system

- Posts are Markdown files in `src/pages/blogs/` with frontmatter
- Pagination in `[...page].astro` using `getStaticPaths()`, 10 posts per page
- Posts sorted by `published` date (descending), top 4 shown on homepage
- Blog content styled via `<style is:global>` in `BlogLayout.astro` using Tailwind `@apply`

### Styling

- Tailwind CSS with custom theme colors: primary (`#2E8B57`), secondary (`#1E1E1E`), accent (`#8FBC8F`), tertiary (`#FFFFFF`)
- Inter variable font via `@fontsource-variable/inter`
- Mobile-first responsive design with `md:` and `xl:` breakpoints

## Conventions

- Conventional commits enforced via Commitizen + Husky hooks
- Double quotes (Prettier config: `singleQuote: false`)
- Feature branch workflow with PR merges to master
- Jenkins CI/CD pipeline runs lint, test, and SonarQube analysis
