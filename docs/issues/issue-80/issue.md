# Issue 80: Improve SEO

## Summary

Improve discoverability of blog posts on [santhoshraju.dev](https://santhoshraju.dev) by implementing an SEO keyword enrichment pipeline. The site is built on Astro and covers three main content pillars: **psychology** (Adlerian), **books**, and **software engineering**. Currently, blog frontmatter lacks structured SEO metadata (keywords, description, open graph tags), which limits organic search reach.

---

## Goals

- Add structured SEO metadata to all existing and future blog posts
- Build a repeatable skill/process for generating and injecting SEO keywords per post
- Improve Astro's `<head>` to emit `<meta>` tags for keywords, description, and Open Graph

---

## Implementation Plan

### 1. Astro `<head>` SEO metadata

Update the blog post layout (`src/layouts/BlogPost.astro` or equivalent) to include:

```astro
---
const { title, description, keywords, pubDate, heroImage } = Astro.props;
---
<meta name="description" content={description} />
<meta name="keywords" content={keywords?.join(', ')} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="article" />
<meta property="og:url" content={Astro.url} />
<meta name="twitter:card" content="summary_large_image" />
```

### 2. Frontmatter schema update

Add `description` and `keywords` fields to every blog post's frontmatter:

```yaml
---
title: "Inferiority Is Not the Enemy"
pubDate: 2026-03-08
description: "What if feeling inadequate is the very signal that growth is possible? A reflection on inferiority, courage, and Adlerian psychology."
keywords:
  - adlerian psychology
  - inferiority complex
  - personal growth
  - alfred adler
  - self improvement psychology
category: Psychology
---
```

### 3. SEO keyword review skill

Create a `skills/seo-blog-review.md` skill (or a Claude Project instruction) that:

1. **Reads** the blog post content
2. **Identifies** primary topic, secondary themes, and target audience intent
3. **Generates** 5–8 SEO keywords ranked by search volume potential and relevance
4. **Checks** that the keywords appear naturally in the title, first paragraph, and at least one subheading
5. **Outputs** a ready-to-paste frontmatter block with `description` and `keywords` fields

#### Skill prompt template

```
You are an SEO content strategist. Given a blog post, do the following:

1. Identify the post's core topic and the reader's likely search intent.
2. Suggest 5–8 SEO keywords. Prefer long-tail phrases (3–5 words) over single-word terms.
3. Write a meta description (≤ 155 characters) that includes the primary keyword.
4. Flag any keyword that is missing from the title, opening paragraph, or a subheading.
5. Return a YAML frontmatter block ready to paste.

Post content:
<paste post here>
```

### 4. Backfill existing posts

Apply the skill to all existing posts and update their frontmatter. Priority order:

- [ ] inferiority-is-not-the-enemy
- [ ] life-tasks-adlerian-psychology
- [ ] Adlerian-psychology
- [ ] importance-of-good-commit-message
- [ ] Monthly Reads series (oct, sep, aug, jul, jun, apr-may 2024)

### 5. (Optional) sitemap & robots.txt

Verify Astro's `@astrojs/sitemap` integration is enabled so updated posts are indexed faster.

---

## Acceptance Criteria

- [ ] Blog post layout emits `description`, `keywords`, and Open Graph `<meta>` tags
- [ ] All existing posts have `description` and `keywords` in frontmatter
- [ ] SEO review skill documented and usable for future posts
- [ ] Lighthouse SEO score ≥ 95 on a sample post

---

## Notes

- Site stack: **Astro**, hosted on **Vercel**
- Content pillars: Psychology (Adlerian), Book summaries, Software engineering
- No paid SEO tooling required — skill uses Claude for keyword generation

## Labels
- enhancement
- good first issue
- seo
