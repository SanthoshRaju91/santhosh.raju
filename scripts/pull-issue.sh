#!/bin/bash

# Pull a GitHub issue into the local docs/issues directory
# Usage: ./scripts/pull-issue.sh <issue-number>

set -e

ISSUE_NUMBER=$1

if [ -z "$ISSUE_NUMBER" ]; then
    echo "Error: Issue number is required"
    echo "Usage: $0 <issue-number>"
    exit 1
fi

if ! [[ "$ISSUE_NUMBER" =~ ^[0-9]+$ ]]; then
    echo "Error: Issue number must be a valid number"
    exit 1
fi

echo "Pulling issue #$ISSUE_NUMBER..."

mkdir -p "docs/issues/issue-$ISSUE_NUMBER"

OUTPUT_FILE="docs/issues/issue-$ISSUE_NUMBER/issue.md"

# Write issue header, body, and labels
gh issue view "$ISSUE_NUMBER" \
    --json number,title,body,labels \
    --template '# Issue {{.number}}: {{.title}}

{{.body}}

## Labels
{{range .labels}}- {{.name}}
{{end}}' > "$OUTPUT_FILE"

# Append comments if any exist
COMMENT_COUNT=$(gh issue view "$ISSUE_NUMBER" --json comments --jq '.comments | length')

if [ "$COMMENT_COUNT" -gt 0 ]; then
    echo -e "\n## Conversation\n" >> "$OUTPUT_FILE"
    gh issue view "$ISSUE_NUMBER" --json comments \
        --jq '.comments[] | "### @\(.author.login) — \(.createdAt)\n\n\(.body)\n\n---\n"' \
        >> "$OUTPUT_FILE"
fi

echo "Issue #$ISSUE_NUMBER saved to $OUTPUT_FILE ($COMMENT_COUNT comment(s) included)"
