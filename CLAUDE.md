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

---

## CodeGuide — codebase learning

A structured codebase index lives in `codeguide-out/`.

### Before answering any architecture or "how does X work" question:

1. Read `codeguide-out/INDEX.md` — it maps every module with key files
2. Read `codeguide-out/STRUCTURE.md` for the dependency graph
3. Reference specific files and line numbers in answers — never generic advice
4. Only grep raw source files if the index doesn't answer the question

### Slash commands available in this session:

| Command                       | What it does                                         |
| ----------------------------- | ---------------------------------------------------- |
| `/codeguide init`             | Re-index this repository (run after major refactors) |
| `/codeguide tour`             | Give a structured orientation of this codebase       |
| `/codeguide mission <topic>`  | Run a step-by-step interactive learning mission      |
| `/codeguide ask "<question>"` | Answer a question using the index                    |
| `/codeguide sync`             | Incrementally update the index for changed files     |

### Running a mission — follow this format exactly:

When `/codeguide mission <topic>` is run:

1. Check if `codeguide-out/missions/<topic>.md` exists
2. If yes: load it and start from Step 1
3. If no: generate the mission file using the index, save it, then start Step 1
4. **Present one step at a time.** Wait for the user to say "done", "next",
   or ask a question before showing the next step
5. When the user asks a question mid-mission: answer it with file references,
   then offer to continue with the current step
6. Never skip steps. The pacing is the learning
7. After the final step: suggest a follow-up mission from GRAPH_REPORT.md

### Generating a mission file — use this structure exactly:

```markdown
# Mission: <Title>

Generated for: <project> | Topic: <topic>

## Overview

<2-3 sentences about how <topic> works specifically in THIS codebase.
Reference actual file paths.>

## Steps

### Step 1 — Learn: <concept>

**Read:** `<file path>` lines <N>-<M>
<Explanation referencing specific functions, variables, and patterns from the code.>

**Concept check:** <A question to confirm understanding before moving on.>

---

### Step 2 — Learn: <next concept>

...

### Step N — Task: <something to build or modify>

<Specific task. Reference existing files as patterns to follow.>
**Hint:** <Hint for when they get stuck.>

---

### Step N+1 — Verify: <check understanding>

<A question or small challenge that confirms they understood the task.>

---

### Reflect

You now understand:

- <bullet 1>
- <bullet 2>

**Next mission:** `/codeguide mission <related-topic>`
```

---
