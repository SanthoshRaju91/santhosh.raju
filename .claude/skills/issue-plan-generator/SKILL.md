---
name: issue-plan-generator
description: This skill should be used when the user asks to "create an implementation plan", "generate a plan from issue", "plan implementation for issue", "check issue file and create plan", or discusses creating implementation plans from GitHub issues or markdown issue files.
version: 1.0.0
---

# Issue Plan Generator

Generate comprehensive implementation plans by analyzing issue markdown files.

## Overview

This skill creates structured implementation plans from issue definitions stored in `docs/issues/{issue-number}/issue.md` files. Plans are saved to matching `plan.md` files with phases, file structures, and verification steps.

## When to Use

Activate when handling requests like:
- Creating an implementation plan from an issue file
- Generating a plan for a specific issue number
- Converting issue requirements to implementation steps
- Planning implementation based on acceptance criteria
- Creating structured development plans from markdown issues

## Activation Patterns

**Trigger phrases:**
- "create implementation plan"
- "generate plan from issue"
- "plan implementation for issue"
- "check issue file and create plan"
- "create plan for issue #{number}"

**Keywords:** issue, plan, implementation, acceptance criteria, requirements

## Implementation Workflow

### Step 1: Read the Issue File

Locate and read the issue file:
- Default path: `docs/issues/{issue-number}/issue.md`
- Extract: title, description, acceptance criteria, labels

### Step 2: Analyze Requirements

Parse the issue to identify:
- **Core functionality** from the description
- **Acceptance criteria** as requirement checklists
- **Technical constraints**: performance, interfaces, file locations
- **Dependencies** or prerequisites

### Step 3: Determine Tech Stack

Check project context:
- Look for `package.json`, `tsconfig.json`, config files
- Review existing source files for patterns
- Check for TECHNICAL_SPEC or documentation
- Note default tech stack if project is empty

### Step 4: Create Implementation Plan

Write comprehensive plan to `docs/issues/{issue-number}/plan.md`:

**Required:** Include a link to the original issue at the top of the plan.

```markdown
# Plan: {Issue Title} (Issue #{number})

> **Related Issue:** [Issue #{number}: {Issue Title}](../../issues/issue-{number}/issue.md)

## Context
Brief explanation of what this issue addresses.

## Requirements Summary
Bullet list of key requirements from acceptance criteria.

## User Preferences
Tech stack or approach decisions based on context.

## Implementation Plan

### Phase 1: [Phase Name]
**Files to create/modify:**
- `path/to/file.ts` - Purpose and key contents

### Phase 2: [Phase Name]
[Continue with additional phases...]

## File Structure
```
[ASCII tree of expected file structure]
```

## Verification Steps
Steps to verify implementation meets acceptance criteria.

## Future Enhancements (Out of Scope)
Optional: things intentionally excluded.
```

### Step 5: Present the Plan

After creating the plan:
1. Confirm successful creation
2. Summarize key implementation phases
3. Highlight important technical decisions

## Best Practices

1. **Link to Original Issue**: Always include a link to the original issue file at the top of the plan (e.g., `> **Related Issue:** [Issue #N](../../issues/issue-N/issue.md)`). This ensures traceability and helps developers reference the source requirements.
2. **Be Specific**: Include actual file paths, function names, interface definitions
3. **Phased Approach**: Break into logical phases (setup → types → core → tests)
4. **Reference Patterns**: Follow existing code patterns when present
5. **Verification First**: Map verification steps directly to acceptance criteria
6. **Performance**: Note any performance requirements from the issue

## Plan Structure Guidelines

### Context Section
- Explain the issue's purpose and importance
- Reference any related issues or dependencies

### Requirements Summary
- Extract bullet points from acceptance criteria
- Group related requirements
- Note any implied requirements

### Implementation Phases

**Typical phase structure:**
1. **Setup Phase**: Project configuration, dependencies
2. **Types Phase**: Interfaces, type definitions
3. **Core Phase**: Main implementation files
4. **Tests Phase**: Unit tests, integration tests

**For each phase:**
- List files to create/modify
- Describe purpose of each file
- Include key function/class signatures

### File Structure
- Use ASCII tree format
- Show full directory hierarchy
- Group related files

### Verification Steps
- Map each step to acceptance criteria
- Include specific commands to run
- Note expected outcomes

## Example Usage

**User request:** "Create an implementation plan for issue #25"

**Actions:**
1. Read `docs/issues/issue-25/issue.md`
2. Analyze acceptance criteria and requirements
3. Check existing project structure
4. Create `docs/issues/issue-25/plan.md` with comprehensive plan
5. Present summary to user

## Common Issue Patterns

### Feature Implementation Issues
Typical phases:
1. Setup (dependencies, config)
2. Types (interfaces, types)
3. Implementation (core logic)
4. Tests (unit tests)

### Bug Fix Issues
Typical phases:
1. Investigation (reproduce, locate)
2. Fix implementation
3. Regression tests
4. Documentation update

### Refactoring Issues
Typical phases:
1. Analysis (current state)
2. Migration plan
3. Implementation
4. Verification (tests pass)

## Additional Resources

### References
- `../example-plans/` - Example implementation plans (if available)

### Related Skills
- Use agent skills for complex multi-file implementations
- Use testing skills for test plan generation
