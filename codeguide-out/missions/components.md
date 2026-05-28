# Mission: Components

Generated for: santhosh.raju | Topic: components

## Overview

The `src/components/` directory holds 8 Astro UI components that compose the homepage and blog listing pages. Components split into two categories: **layout chrome** (Header, Footer) that take no props, and **content cards** (Article, BlogCard, FeaturedPost, Skill) that receive `Astro.props`. They are assembled in `src/pages/index.astro`, which owns all data-fetching logic and passes data down.

## Steps

### Step 1 — Learn: Astro component anatomy (no-props components)

**Read:** `src/components/Header/Header.astro` lines 1–12 and `src/components/Footer/Footer.astro` lines 1–25

Astro components are split into two sections by `---` fences:

- The **frontmatter** block (between `---`) runs at build time — it's where you import things and destructure props
- The **template** block (below the second `---`) is the HTML output

`Header` and `Footer` have no frontmatter at all (the `---` fences are absent entirely). They are purely static templates. Header renders a fixed top nav with `backdrop-blur-md` and three links; Footer renders social icons (LinkedIn, GitHub SVGs) with `opacity-60 hover:opacity-100` transitions.

The layout constraint `w-[84%] mx-auto xl:container xl:w-[60%]` appears in both — this is the site's standard content width system: 84% wide on mobile/tablet, capped at 60% of container on `xl` screens.

**Concept check:** Why would a component have no frontmatter at all, rather than an empty `---` block? And what does the shared `xl:w-[60%]` constraint tell you about how layout width is managed in this project?

---

### Step 2 — Learn: Props pattern (Article component)

**Read:** `src/components/Article/Article.astro` lines 1–33

This is the standard props pattern used across all content-card components:

```js
const {
  title,
  synopsis,
  publishedDate,
  url,
  tags = [],
  readingTime = "",
} = Astro.props;
```

Two things to notice:

1. **Default values** — `tags = []` and `readingTime = ""` make those props optional. The template then guards with `{tags.length > 0 && (...)}` and `{readingTime && (...)}` so nothing renders when they're empty.
2. **The `group` / `group-hover:` pattern** — the outer `<a>` has class `group`, and the inner `<h2>` uses `group-hover:text-primary-200`. This is Tailwind's group-hover mechanic: hovering the parent triggers child style changes, keeping interaction state centralised on the wrapper element.

`Article` is used by the paginated blog listing page (`src/pages/blogs/[...page].astro`), not the homepage.

**Concept check:** What's the difference between `{synopsis && <p>...</p>}` and wrapping the render in `{synopsis ? <p>...</p> : null}`? Are they equivalent in Astro/JSX?

---

### Step 3 — Learn: BlogCard vs Article — near-duplicates with different contexts

**Read:** `src/components/BlogCard/BlogCard.astro` lines 1–29, then compare with `src/components/Article/Article.astro` lines 1–33

These two components are nearly identical. The differences are subtle but intentional:

|              | `BlogCard`                                    | `Article`                                        |
| ------------ | --------------------------------------------- | ------------------------------------------------ |
| Heading size | `text-2xl` (fixed)                            | `text-xl md:text-2xl` (responsive)               |
| Synopsis     | Always rendered (no guard)                    | Optional — only renders if truthy                |
| Tags         | Always rendered (no length guard)             | Guarded with `tags.length > 0`                   |
| Used by      | `src/pages/index.astro` (homepage, posts 2–4) | `src/pages/blogs/[...page].astro` (full listing) |

`BlogCard` is used in a controlled context — the homepage — where posts are pre-sorted and guaranteed to have a synopsis. `Article` is used in the open listing where any post could theoretically have missing metadata, so it guards more defensively.

**Concept check:** If you wanted to merge these two into one component, what prop or variant flag would you add, and what's the downside of doing so?

---

### Step 4 — Learn: FeaturedPost — scoped styles and animation

**Read:** `src/components/FeaturedPost/FeaturedPost.astro` lines 1–52

`FeaturedPost` shares the same props signature as `BlogCard` and `Article`, but it has two unique characteristics:

1. **Scoped `<style>` block** (lines 33–52) — Astro scopes `<style>` to the component automatically (it adds a hashed attribute selector at build time). The `.featured-card` class gets a `pulseGlow` keyframe animation that creates a subtle green glow every 3 seconds. Hovering stops the animation with `animation: none`.

2. **Visual hierarchy signals** — it uses a larger heading (`text-3xl md:text-4xl` vs `text-2xl`), a `bg-secondary-200/20` background fill, and a `"Featured"` badge pill. Together these make the most recent post stand out on the homepage.

In `src/pages/index.astro` at line 107–115, `FeaturedPost` always receives `sortedPosts[0]` — the newest post by published date.

**Concept check:** What would happen visually if you moved the `.featured-card` class from the `<a>` tag to the inner `<div>`? Would the animation still work?

---

### Step 5 — Learn: Static content components (NowSection & Connection)

**Read:** `src/components/NowSection/NowSection.astro` lines 1–24 and `src/components/Connection/Connection.astro` lines 1–17

Both are **zero-prop, hardcoded-content** components. They exist to keep `index.astro` readable rather than to be reusable.

`NowSection` uses a gradient border trick: the outer `div` is `p-[1px]` with a gradient background, and an inner `div` with `bg-secondary-100` sits on top — making just 1px of the gradient bleed around the edges as a border. The `animate-ping` on the green dot is a Tailwind built-in keyframe that scales and fades out, creating a "live" pulse effect.

`Connection` is a simple CTA card with an inline SVG icon, static copy, and a LinkedIn link styled as a green pill button.

**Concept check:** If you wanted to make `NowSection` data-driven (reading from a config file instead of hardcoded content), where would you add the data-fetching — in `NowSection.astro`'s frontmatter or in `index.astro`? What are the tradeoffs?

---

### Step 6 — Learn: Component composition in index.astro

**Read:** `src/pages/index.astro` lines 1–46 (frontmatter) and lines 48–136 (template)

`index.astro` is the only file that fetches data — all components just receive props. The data pipeline:

1. `Astro.glob("./blogs/*.md")` (line 9) — collects all blog posts at build time
2. Each post is mapped to add `readingTime` via `estimateReadingTime()` (line 39–44) — strips HTML tags, counts words at 200wpm
3. `sortPostsByPublisedDate()` (line 19–33) converts `frontmatter.published` strings to `Date` objects and sorts descending
4. `sortedPosts[0]` → `FeaturedPost`, `sortedPosts[1..3]` → three `BlogCard` instances in a `grid-cols-1 md:grid-cols-2` grid

The `Skill` component (line 79–87) is called 8 times with hardcoded `icon` and `skill` props — the icons come from the `astro-icon` package using Iconify icon names like `"logos:react"`.

**Concept check:** `sortedPosts.slice(1, 4)` gives exactly 3 posts. What happens to the layout if there are fewer than 3 posts total? Does anything break?

---

### Step 7 — Task: Add a new Skill entry

Using `src/pages/index.astro` lines 79–87 as your pattern, add a new skill to the Tech Stack grid.

1. Pick a technology (e.g. TypeScript, PostgreSQL, Redis)
2. Find its Iconify icon name from the `logos:` set (e.g. `logos:typescript-icon`)
3. Add a new `<Skill icon="..." skill="..." />` line inside the existing grid `<div>` (around line 87)

**Hint:** The grid is `grid-cols-2 md:grid-cols-4`. With 8 items it fills two rows of 4. Adding a 9th creates a partial row — you may want to add a 10th to keep it balanced, or change to `md:grid-cols-3` for a 3-column layout.

---

### Reflect

You now understand:

- How Astro components split build-time logic (frontmatter) from HTML output (template)
- The `Astro.props` destructuring pattern with optional defaults (`tags = []`)
- Tailwind's `group` / `group-hover:` mechanic for parent-driven child styles
- Why `BlogCard` and `Article` are near-duplicates rather than one shared component
- How `FeaturedPost` uses scoped `<style>` for component-local keyframe animation
- The gradient border trick in `NowSection` using `p-[1px]` + layered backgrounds
- How `index.astro` owns all data-fetching and passes results down to dumb presentational components

**Next mission:** `/codeguide mission layouts`
