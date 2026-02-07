---
name: check-blog
description: Check blog posts for spelling mistakes and content issues
disable-model-invocation: true
argument-hint: "[blog-filename (optional)]"
---

## Blog Post Checker

Check blog posts in `src/pages/blogs/` for spelling, grammar, and content issues before publishing.

If `$ARGUMENTS` is provided, check only that specific blog post file. Otherwise, check all blog posts that have uncommitted changes:
!`git diff --name-only -- 'src/pages/blogs/*.md'`
!`git diff --name-only --cached -- 'src/pages/blogs/*.md'`
!`git ls-files --others --exclude-standard -- 'src/pages/blogs/*.md'`

### What to check

1. **Spelling mistakes** - Catch misspelled words in titles, synopsis, headings, and body text. Pay special attention to:
   - Blog post `title` and `synopsis` in frontmatter (these are highly visible)
   - Section headings
   - Author and book names (verify consistency within the post)

2. **Grammar** - Awkward phrasing, subject-verb disagreement, missing articles, run-on sentences

3. **Frontmatter validation** - Ensure all required fields are present and well-formed:
   - `layout` must be `"../../layouts/BlogLayout.astro"`
   - `slug` must be a valid URL slug (lowercase, hyphens, no spaces)
   - `title` must be present and non-empty
   - `synopsis` must be present (1-2 sentences)
   - `published` must be a valid date
   - `tags` must be a non-empty list

4. **Content quality** - Flag any placeholder text, TODO comments, or incomplete sections

5. **Image references** - Check that referenced images in `public/` directories actually exist

### Output

For each issue found, report:
- **Location**: frontmatter field or approximate position in the post
- **Issue**: what's wrong
- **Suggestion**: the corrected text

Group issues by severity:
- **Must fix**: Spelling errors in titles/headings, missing frontmatter, broken images
- **Should fix**: Body text spelling/grammar, awkward phrasing
- **Optional**: Style suggestions, minor improvements
