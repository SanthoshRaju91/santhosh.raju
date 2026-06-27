---
name: check-now-section
description: Check NowSection component for content and formatting issues
---

## NowSection Checker

Check the NowSection component (`src/components/NowSection/NowSection.astro`) when it has uncommitted changes.

Run: !`git diff --name-only -- 'src/components/NowSection/NowSection.astro'`
Run: !`git diff --name-only --cached -- 'src/components/NowSection/NowSection.astro'`

### What to check

1. **Grammar and spelling**

   - Typos in book titles, author names, and activities
   - Subject-verb agreement
   - Missing or incorrect articles (a/an/the)
   - Comma splices (joining independent clauses with just a comma)

2. **Sentence structure**

   - Avoid run-on sentences
   - Ensure parallel structure in list items
   - Check for proper punctuation at sentence endings

3. **HTML/Semantic structure**

   - List items should use proper `<ul>` and `<li>` tags (not asterisks in paragraphs)
   - Book titles should use semantic `<em>` or `<cite>` tags
   - Maintain consistent styling classes

4. **Content quality**
   - Each list item should be a complete, meaningful thought
   - Activities should be current/relevant
   - Book titles and author names should be accurate

### Common patterns to fix

- "I wanted to have a leisure read, started..." → "I wanted a leisure read, so I started..."
- "practicing Trachtenberg method" → "practicing the Trachtenberg method"
- Asterisks (\*) for bullet points → proper `<ul><li>` structure

### Output

For each issue found, report:

- **Line**: approximate line number
- **Issue**: what's wrong
- **Suggestion**: corrected text

Group by severity:

- **Must fix**: Typos, broken HTML structure, missing articles in proper nouns
- **Should fix**: Grammar issues, awkward phrasing, comma splices
- **Optional**: Style improvements (only if they preserve the original voice)
