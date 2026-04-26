# Plan: Improve SEO (Issue #80)

> **Related Issue:** [Issue #80: Improve SEO](./issue.md)

## Context

Blog posts on santhoshraju.dev lack structured SEO metadata (`description`, `keywords`, Open Graph tags), limiting organic search reach. The `<head>` in `BlogLayout.astro` currently emits only `<title>` — no meta description, keywords, or OG tags.

## Requirements Summary

- `BlogLayout.astro` must emit `<meta name="description">`, `<meta name="keywords">`, and Open Graph `<meta>` tags
- All 18 existing blog posts must have `description` and `keywords` in frontmatter
- A reusable SEO review skill must be documented for future posts
- Lighthouse SEO score ≥ 95 on a sample post after changes
- `@astrojs/sitemap` integration added to `astro.config.mjs` so updated posts are indexed

## User Preferences

- No paid SEO tooling — Claude used for keyword generation via the skill
- Stack: Astro (Markdown frontmatter), Tailwind, deployed on Vercel

---

## Implementation Plan

### Phase 1: Update BlogLayout.astro to emit SEO meta tags

**Files to modify:**

- `src/layouts/BlogLayout.astro`

Destructure `description` and `keywords` from `Astro.props.content` alongside existing fields. Add into `<head>`:

```astro
---
const { title, published, tags = [], synopsis, description, keywords } = Astro.props.content;
---
<!-- inside <head> -->
{description && <meta name="description" content={description} />}
{keywords?.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
<meta property="og:title" content={title} />
{description && <meta property="og:description" content={description} />}
<meta property="og:type" content="article" />
<meta property="og:url" content={Astro.url} />
<meta name="twitter:card" content="summary_large_image" />
```

Both `description` and `keywords` are optional so existing posts without them won't break.

---

### Phase 2: Add @astrojs/sitemap integration

**Files to modify:**

- `astro.config.mjs`
- `package.json` (add `@astrojs/sitemap` dependency)

Add sitemap integration so search engines pick up updated posts faster:

```js
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://santhoshraju.dev",
  integrations: [
    sitemap(),
    // ...existing integrations
  ],
});
```

---

### Phase 3: Create SEO review skill

**Files to create:**

- `.claude/skills/seo-blog-review/README.md`

The skill instructs Claude to act as an SEO content strategist. Given a blog post it:

1. Identifies primary topic and reader search intent
2. Suggests 5–8 SEO keywords (prefer long-tail 3–5 word phrases)
3. Writes a meta description (≤ 155 characters) including the primary keyword
4. Flags any keyword missing from title, opening paragraph, or a subheading
5. Returns a ready-to-paste YAML frontmatter block with `description` and `keywords`

---

### Phase 4: Backfill frontmatter for all existing posts

**Files to modify (all in `src/pages/blogs/`):**

Priority order from issue:

1. `inferiority-is-not-the-enemy.md`
2. `life-tasks-adlerian-psychology.md`
3. `Adlerian-psychology.md`
4. `importance-of-good-commit-message.md`
5. Monthly reads: `oct-2024-books.md`, `sep-2024-books.md`, `aug-2024-books.md`, `jul-2024-books.md`, `jun-2024-books.md`, `apr-may-2024-books.md`
6. Remaining posts: `what-is-mlops.md`, `command-alias.md`, `portainer.md`, `three-books-a-month.md`, `essential-guide-to-jupyter.md`, `feb-2024-books.md`, `mar-2024-books.md`, `jan-2024-books.md`

Add to each post's frontmatter:

```yaml
description: "≤155 char meta description with primary keyword"
keywords:
  - keyword one
  - keyword two
  - keyword three
  - keyword four
  - keyword five
```

Use the SEO review skill (Phase 3) to generate values for each post.

---

## File Structure

```
src/
  layouts/
    BlogLayout.astro          ← updated: SEO meta tags in <head>
  pages/
    blogs/
      *.md                    ← all 18 posts: add description + keywords
astro.config.mjs              ← add @astrojs/sitemap, site URL
.claude/
  skills/
    seo-blog-review/
      README.md               ← new SEO review skill
docs/
  issues/
    issue-80/
      issue.md
      plan.md                 ← this file
```

---

## Verification Steps

1. **Meta tags render correctly**

   - Run `npm run dev`, open any blog post, view page source
   - Confirm `<meta name="description">`, `<meta name="keywords">`, `<meta property="og:title">` are present

2. **All posts have frontmatter fields**

   - `grep -L "description:" src/pages/blogs/*.md` should return nothing

3. **Build passes**

   - `npm run build` completes without errors
   - `npm run lint` passes

4. **Sitemap generated**

   - After build, `dist/sitemap-index.xml` and `dist/sitemap-0.xml` exist

5. **Lighthouse SEO score**
   - Run `npm run preview`, open Lighthouse in Chrome DevTools on a sample post
   - SEO score ≥ 95

---

## Future Enhancements (Out of Scope)

- Structured data / JSON-LD (`Article` schema) for rich search snippets
- Per-post Open Graph images (`og:image`)
- Canonical URL meta tag
- Automatic keyword density checking in CI
