---
name: review-code
description: Review code changes for issues before committing
disable-model-invocation: true
argument-hint: "[file or path (optional)]"
---

## Code Review

Review code for issues before it gets committed. If `$ARGUMENTS` is provided, review only those files. Otherwise, review all staged and unstaged changes.

### Context

Changes to review:
!`git diff`
!`git diff --cached`

### Checklist

For each changed file, check for:

1. **Correctness** - Logic errors, off-by-one mistakes, missing edge cases
2. **Astro/Tailwind conventions** - Proper component structure, correct use of Tailwind classes, theme colors (primary `#2E8B57`, secondary `#1E1E1E`, accent `#8FBC8F`, tertiary `#FFFFFF`)
3. **Frontmatter** - Blog posts must have all required fields: `layout`, `slug`, `title`, `synopsis`, `published`, `tags`
4. **Broken references** - Missing images, dead links to other pages, incorrect import paths
5. **Accessibility** - Images should have `alt` attributes, semantic HTML where appropriate
6. **Responsiveness** - Mobile-first approach, proper use of `md:` and `xl:` breakpoints

### Output

Present findings as a structured list grouped by file. For each issue found:
- State the file and line
- Describe the issue
- Suggest the fix

If no issues are found, confirm the changes look good.
