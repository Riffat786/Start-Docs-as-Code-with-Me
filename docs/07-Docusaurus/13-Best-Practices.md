---
title: Docusaurus Best Practices
sidebar_position: 13
description: Learn best practices for building, maintaining, and growing documentation sites with Docusaurus.
---

# Docusaurus Best Practices

> **Estimated reading time:** 22 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Organize documentation structure effectively.
- Write documentation for maintainability.
- Optimize documentation performance.
- Create consistent user experience.
- Implement SEO best practices.
- Manage documentation growth.
- Handle documentation maintenance.
- Apply Docusaurus-specific best practices.

---

## Why Best Practices Matter

Following best practices:
- Makes documentation easier to maintain
- Improves user experience
- Reduces technical debt
- Saves time long-term
- Builds professional appearance
- Supports team collaboration

Poor practices lead to:
- Confusing structure
- Hard to find content
- Slow site performance
- Inconsistent appearance
- Documentation debt
- Frustrated users

:::important

Best practices are investments that pay dividends over time.

:::

---

## Before You Start

Make sure you have:

- Understanding of Docusaurus basics
- Existing documentation site
- Team collaboration experience
- Desire to improve documentation quality

:::note

**For Beginners**

Best practices are guidelines, not rules. Adapt to your situation.

:::

---

## Documentation Structure Best Practices

### Clear Hierarchy

Organize documentation with clear levels:

```
docs/
├── intro.md                    (level 0: start)
├── getting-started/            (level 1: basic)
│   ├── index.md
│   ├── install.md
│   └── first-steps.md
├── guides/                     (level 1: how-to)
│   ├── installation/
│   ├── configuration/
│   └── advanced/
├── api/                        (level 1: reference)
│   ├── index.md
│   ├── authentication.md
│   └── endpoints.md
└── troubleshooting/            (level 1: help)
    ├── common-issues.md
    └── faq.md
```

Clear structure = easy navigation.

### Naming Conventions

Use consistent naming:

**File names:**
- Lowercase: `getting-started.md`
- Hyphens for spaces: `api-reference.md`
- Descriptive: `install-on-windows.md`
- Not: `doc1.md`, `temp.md`, `fix.md`

**Folder names:**
- Lowercase: `guides/`, `api/`
- Plural when containing multiple items: `guides/`, `tutorials/`
- Singular for single content: `intro/`, `faq/`

**Sidebar labels:**
- Title case: "Getting Started", "API Reference"
- Concise: "Installation" not "How to Install"
- Consistent: use same terminology everywhere

### Sidebar Organization

Best sidebar practices:

```typescript
// ✓ Good: Logical flow
sidebars: {
  docs: [
    'intro',                    // Start here
    {
      label: 'Getting Started',
      items: ['install', 'first-steps'],
    },
    {
      label: 'Guides',
      items: ['configuration', 'advanced'],
    },
    {
      label: 'Reference',
      items: ['api', 'cli'],
    },
    'troubleshooting',          // Help at end
  ],
}

// ✗ Bad: Random order
sidebars: {
  docs: [
    'troubleshooting',
    'api',
    'install',
    'intro',
    'cli',
  ],
}
```

Organize for user journey, not alphabetically.

---

## Writing Best Practices

### Clear, Concise Writing

Write for scanners:

```markdown
✓ Good: Short, punchy

## Installation

Two steps:
1. Download installer
2. Run installer

Done!

✗ Bad: Long paragraphs

Installation is a critical part of getting your system
set up. The process involves downloading the appropriate
installer for your operating system and then running it
through the system installation wizard which will guide you
through various configuration options. This is an important
step that many users find confusing.
```

Be direct, use action verbs, short paragraphs.

### Examples Are Essential

Every concept needs examples:

```markdown
## Authentication

To authenticate, use the API key header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/users
```

Response:
```json
{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
  ]
}
```
```

Real, working examples beat explanations.

### Front Matter Best Practices

Every doc needs front matter:

```markdown
---
title: Getting Started
sidebar_position: 1
description: Quick start guide for new users
tags: [getting-started, beginner]
---
```

**title:** Display name in sidebar
**sidebar_position:** Control order (1-100)
**description:** SEO and preview text
**tags:** Help with organization

Always include all four.

---

## Performance Best Practices

### Image Optimization

Optimize all images:

```bash
# Before: 2.5 MB
image.png

# After compression: 250 KB (10x smaller!)
npm install --save-dev imagemin
```

**Guidelines:**
- PNG: Screenshots, diagrams (lossless)
- JPG: Photos (lossy)
- SVG: Icons, logos (scalable)
- Max 1200px width
- Max 500 KB per image

### Code Block Optimization

Keep code blocks reasonable:

```markdown
✓ Good: Relevant code only

```javascript
// Show key part only
const user = await fetchUser(id);
console.log(user.name);
```

✗ Bad: Too much code

```javascript
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
// ... 50 lines of imports and setup
const user = await fetchUser(id);
```

Show only relevant code, link to full files.

### Lazy Loading

Lazy load heavy components:

```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./Heavy'));

export function MyDoc() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

Don't load until needed.

---

## Consistency Best Practices

### Style Guide

Create and follow style guide:

```markdown
# Documentation Style Guide

## Terminology
- Use "API" not "Api" or "api"
- Use "authenticate" not "login" or "sign in"
- Use "install" not "setup" or "deploy"

## Formatting
- Code: backticks for inline, code blocks for longer
- Bold: **important terms**
- Italic: *emphasis*
- Links: [display text](url)

## Tone
- Be friendly but professional
- Use "you" when addressing users
- Use active voice
- Keep sentences short
```

Consistency builds trust.

### Cross-Document Links

Link related docs:

```markdown
See also:
- [Installation Guide](./install.md)
- [Configuration Reference](../reference/config.md)
- [Troubleshooting](../troubleshooting/index.md)
```

Help users explore related topics.

---

## SEO Best Practices

### Meta Descriptions

Every doc should have description:

```markdown
---
title: Getting Started
description: Five-minute setup guide for new users
---
```

Description shows in search results.

### URL Structure

Use readable URLs:

```
✓ Good:
/docs/getting-started/
/docs/guides/configuration/
/docs/api/authentication/

✗ Bad:
/docs/doc1/
/docs/temp/guide-v2/
/docs/api/12345/
```

Clear URLs help SEO and users.

### Headings Hierarchy

Use proper heading levels:

```markdown
# Title (H1 - one per page)

## Main Section (H2)

### Subsection (H3)

#### Detail (H4 - rarely needed)

# Don't do this
## Or this
# Multiple H1s
```

Proper hierarchy helps search engines.

### Keywords

Use target keywords naturally:

```markdown
# API Documentation

Learn how to use our REST API.

## Authentication

To authenticate with our API...

## API Endpoints

The API provides these endpoints...
```

Include keywords naturally, don't stuff them.

---

## Maintenance Best Practices

### Regular Audits

Schedule documentation reviews:

```
Monthly:
- Check for broken links
- Review user feedback
- Update outdated content

Quarterly:
- Audit structure
- Review style consistency
- Check outdated examples

Yearly:
- Full documentation audit
- Major reorganization if needed
- Performance review
```

Regular maintenance prevents debt.

### Content Ownership

Assign owners:

```
Getting Started Guide → Sarah
API Reference → Marcus
Troubleshooting → Lisa
Configuration Guide → James
```

Owners are responsible for accuracy and updates.

### Tracking Changes

Document what changed:

```markdown
## Latest Updates

- 2024-02: Updated for v3.0 release
- 2024-01: Added dark mode instructions
- 2023-12: Reorganized guides section
```

Users know docs are current.

---

## Scalability Best Practices

### Modular Content

Break large docs into smaller pieces:

```markdown
✗ Bad: One 5000-word page

# Complete Guide to Configuration
[everything in one page]

✓ Good: Modular docs

docs/guides/configuration/
├── index.md (overview)
├── basic.md (basic setup)
├── advanced.md (advanced options)
├── environment.md (env variables)
└── troubleshooting.md (common issues)
```

Smaller pages = easier to maintain and read.

### Versioning Strategy

Plan for multiple versions:

```
docs/                    (v2.0 development)
versioned_docs/
├── version-1.5/         (maintenance)
└── version-1.0/         (archived)
```

Support 2-3 versions, archive older ones.

### Reusable Components

Create components for repeated patterns:

```typescript
// Use in multiple places
<Alert type="warning">
  This will delete all data.
</Alert>

<CodeBlock language="bash" title="Installation">
  {`npm install mylib`}
</CodeBlock>
```

Reduces maintenance burden.

---

## Collaboration Best Practices

### Pull Request Process

Require reviews:

```
1. Create branch
2. Write documentation
3. Create pull request
4. Peer review
5. Technical review (if needed)
6. Merge
7. Deploy
```

Reviews catch issues before publishing.

### Documentation Templates

Provide templates:

```markdown
# New Guide Template

## Overview
[What is this about?]

## Prerequisites
[What users need]

## Steps
1. [First step]
2. [Second step]

## Verification
[How to check it worked]

## Troubleshooting
[Common issues]
```

Templates ensure consistency.

---

## Common Pitfalls to Avoid

### ✗ Pitfall 1: Outdated Information

**Problem:** Documentation hasn't been updated in 6 months

**Solution:**
- Schedule regular reviews
- Assign owners
- Add "last updated" dates
- Monitor user feedback

### ✗ Pitfall 2: Unclear Structure

**Problem:** Users can't find what they need

**Solution:**
- Use clear hierarchy
- Add search keywords
- Cross-link related topics
- Test with new users

### ✗ Pitfall 3: Missing Examples

**Problem:** Users don't understand concepts

**Solution:**
- Add working examples
- Show input and output
- Test examples before publishing
- Update when API changes

### ✗ Pitfall 4: Broken Links

**Problem:** Links point to removed pages

**Solution:**
- Run link checker regularly
- Create redirects when moving docs
- Use relative paths carefully
- Test build before deploying

---

## Summary

In this lesson, you learned:

- Documentation structure best practices
- Writing guidelines for clarity and consistency
- Performance optimization techniques
- SEO best practices
- Maintenance and ownership models
- Scalability strategies for growing documentation
- Collaboration workflows
- Common pitfalls and how to avoid them

Good documentation practices compound over time.

---

## Exercise

1. Review your documentation structure
2. Rename files to follow conventions
3. Reorganize sidebar for logical flow
4. Add front matter to all docs
5. Create style guide for your team
6. Audit and fix broken links
7. Optimize images
8. Assign documentation owners
9. Schedule regular reviews
10. Document improvements as you go

---

## Knowledge Check

<details>
<summary><strong>1. What makes good documentation structure?</strong></summary>

Good structure:
- Clear hierarchy (intro → guides → reference → help)
- Logical grouping by topic
- Consistent naming conventions
- Easy navigation
- Logical sidebar ordering (user journey, not alphabetical)

</details>

<details>
<summary><strong>2. Why are examples essential?</strong></summary>

Examples:
- Show concrete usage
- Help users understand quickly
- Provide copy-paste starters
- Build confidence
- Beat abstract explanations

Every concept needs working examples.

</details>

<details>
<summary><strong>3. What should front matter include?</strong></summary>

Every doc needs:
- **title:** Display name
- **sidebar_position:** Order (1-100)
- **description:** SEO preview text
- **tags:** Organization and search

All four help users find and understand docs.

</details>

<details>
<summary><strong>4. How do you keep documentation current?</strong></summary>

- Assign owners (responsible for accuracy)
- Schedule regular reviews (monthly/quarterly)
- Add "last updated" dates
- Monitor user feedback
- Update examples when code changes
- Track changes in changelog

</details>

<details>
<summary><strong>5. What are key SEO best practices?</strong></summary>

- Meta descriptions in front matter
- Clear, readable URLs
- Proper heading hierarchy (H1, H2, H3)
- Natural keyword usage
- Cross-linking related docs
- Mobile responsive

</details>

<details>
<summary><strong>6. Why should docs be modular?</strong></summary>

Modular docs:
- Easier to maintain (change one file, not 5000 words)
- Faster for users to scan
- Reusable content
- Better for mobile
- Scalable as docs grow

One 5000-word page is worse than five 1000-word pages.

</details>

<details>
<summary><strong>7. How do you handle multiple versions?</strong></summary>

- Support current development version
- Support previous stable release
- Archive older versions
- Add deprecation notices to old versions
- Keep 2-3 active versions maximum

More versions = maintenance nightmare.

</details>

<details>
<summary><strong>8. What's the best documentation review process?</strong></summary>

1. Peer review (clarity, consistency)
2. Technical review (accuracy)
3. Management review (strategic fit)
4. Merge
5. Automatic deployment

Reviews catch issues before users see them.

</details>

---

## Next Lesson

After mastering best practices, learn how to troubleshoot common Docusaurus issues and get your documentation site running smoothly.