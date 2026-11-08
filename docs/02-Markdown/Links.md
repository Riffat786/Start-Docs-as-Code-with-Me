---
title: Creating Links in Markdown
sidebar_position: 4
description: Learn how to create internal and external links effectively in your documentation.
---

# Creating Links in Markdown

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Markdown link syntax.
- Create internal links within your documentation.
- Create external links to other websites.
- Write descriptive link text.
- Organize and manage links in documentation.
- Use reference-style links for complex documents.
- Check links for validity and accessibility.
- Follow link best practices in Docs-as-Code projects.

---

## Why Links Matter in Documentation

Links guide readers to related information. Good links:

- Help readers navigate between topics.
- Provide sources and references.
- Direct users to external resources.
- Create a connected information structure.
- Improve search engine optimization.
- Reduce duplicated content by linking instead of repeating.

However, broken links damage credibility and frustrate readers. This lesson teaches you to create and maintain links effectively.

---

## Markdown Link Syntax

The basic Markdown syntax for links is:

```markdown
[link text](URL)
```

The parts are:

- `[link text]` - The visible text that readers click.
- `(URL)` - The destination address (website URL or file path).

### Example

```markdown
[Visit the official documentation](https://example.com/docs)
```

---

## Internal Links

Internal links connect pages within your documentation.

### Absolute Paths

Use absolute paths starting with `/` for links within your documentation site:

```markdown
[Getting Started](/docs/intro)
[API Reference](/docs/api/reference)
[Git Basics](/docs/git/basics)
```

**Benefit:** Works consistently regardless of the current page location.

**Best practice:** Use absolute paths in static site generators like Docusaurus and Jekyll.

### Relative Paths

Use relative paths for links between files in the same folder:

```markdown
[Next Topic](./next-topic.md)
[Previous Topic](../getting-started.md)
[Sibling Folder](../other-module/topic.md)
```

**When to use:** Local development or when absolute paths don't work.

### Links to Specific Sections

Link directly to a heading in another page:

```markdown
[View Installation Steps](/docs/setup#installation)
[Skip to Best Practices](/docs/guide#best-practices)
```

The `#` symbol references the heading. The heading anchor is automatically generated from the heading text:

- `# Getting Started` becomes `#getting-started`
- `## Advanced Configuration` becomes `#advanced-configuration`

---

## External Links

External links direct readers to websites outside your documentation.

### Basic External Links

```markdown
[Google](https://www.google.com)
[MDN Web Docs](https://developer.mozilla.org)
[GitHub](https://github.com)
```

### Links with Protocols

Always include the protocol (`https://` or `http://`):

```markdown
[Example](https://example.com)
```

Without the protocol, Markdown may treat it as a relative path.

### Opening Links in New Tabs

Standard Markdown doesn't support opening links in new tabs. Use HTML if needed:

```html
<a href="https://example.com" target="_blank">Link text</a>
```

Or let your static site generator handle it. Check your framework's documentation.

---

## Writing Effective Link Text

Link text should be descriptive and meaningful.

### Do

- Write descriptive link text: `[Installation guide](/docs/install)`
- Use the article title: `[Getting Started Guide](/docs/intro)`
- Match the destination page title: Link text and page title should align.

### Don't

- Use generic text: `Click here` ❌
- Link entire sentences: `Visit the documentation site to learn more.` ❌
- Use the URL as text: `https://example.com` ❌
- Use "link" or "page": `[link to guide]` ❌

### Examples

**Good:**
```markdown
[View the API reference](/docs/api)
[Learn about deployment](/docs/deployment)
```

**Poor:**
```markdown
[Click here](/docs/api)
[More information](/docs/deployment)
```

---

## Organizing Links

Create a clear link structure that helps readers navigate.

### Navigation Links

Place navigation links at the start or end of pages:

```markdown
**Previous:** [Getting Started](./getting-started.md)

**Next:** [Advanced Topics](./advanced.md)
```

### Table of Contents

Create a table of contents that links to sections:

```markdown
## Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
```

### Related Links

Group related links in a dedicated section:

```markdown
## See Also

- [Configuration Guide](/docs/config)
- [Best Practices](/docs/best-practices)
- [API Reference](/docs/api)
```

### Link Grouping by Category

```markdown
## Learn More

### Getting Started
- [Installation](/docs/install)
- [Quick Start](/docs/quick-start)

### Advanced Topics
- [Configuration](/docs/config)
- [Deployment](/docs/deployment)
```

---

## Reference-Style Links

Reference-style links are useful for long documents or when links appear multiple times.

### Syntax

```markdown
This is a [link][reference-name].

This is another [link][reference-name].

[reference-name]: https://example.com
```

### Benefits

- Cleaner Markdown source.
- Easy to update links used multiple times.
- Separates link text from URL.

### Example

```markdown
Learn about [Git][git-docs] and [GitHub][github-docs].

Later in the document:

[git-docs]: https://git-scm.com/doc
[github-docs]: https://github.com/features
```

---

## Links in Docs-as-Code Workflows

### Static Site Generator Specifics

**Docusaurus:**

```markdown
[Link to page](/docs/page-name)
[Link to section](/docs/page-name#section)
```

**Jekyll:**

```markdown
[Link to page](/docs/page-name)
```

**MkDocs:**

```markdown
[Link to page](../path/to/page.md)
```

Check your framework's documentation for the exact syntax.

### Link Validation in CI/CD

Add link checking to your build process:

```bash
# Example: Using htmlproofer
bundle exec htmlproofer ./_site --disable-external
```

Most projects include link validation in GitHub Actions or similar CI tools.

### Handling Broken Links

When links break:

- Update the link destination.
- Remove the link if the destination is gone.
- Add a redirect if the page moved.
- Document why a link is no longer valid.

---

## Accessibility and Links

Make links accessible to all users.

### Link Text Accessibility

Screen reader users rely on link text to understand where a link goes.

**Do:**
- Use descriptive text: `[Read the installation guide](/docs/install)`
- Make sense out of context: A screen reader lists links without surrounding text.

**Don't:**
- Use empty links: `[](/docs/page)` ❌
- Use only punctuation: `[...](/docs/page)` ❌
- Repeat the URL: `[https://example.com](https://example.com)` ❌

### Color and Contrast

Links must be visually distinct:

- Use color plus underline or other styling (not color alone).
- Ensure sufficient contrast between link color and background.
- Test with accessibility tools.

### Link Keyboard Navigation

All links should be accessible via keyboard:

- Users should be able to tab to links.
- Links should be activated with Enter.
- Static site generators handle this automatically.

---

## Advanced Link Techniques

### Email Links

Create links that open the user's email client:

```markdown
[Email support](mailto:support@example.com)
```

### Phone Links

Create clickable phone numbers:

```markdown
[Call us](tel:+1-555-123-4567)
```

### Download Links

Link to downloadable files:

```markdown
[Download the setup guide](/files/setup-guide.pdf)
```

Place files in a `public` or `static` folder in your project.

### Links with Titles

Add title text that appears on hover (HTML only):

```html
<a href="/docs/page" title="Visit this page">Link text</a>
```

---

## Common Link Patterns in Documentation

### Related Reading

```markdown
## Related Topics

- [Getting started](/docs/getting-started)
- [Configuration options](/docs/config)
- [API reference](/docs/api)
```

### Cross-References

```markdown
For more information, see [Advanced Configuration](/docs/advanced-config).
```

### Step-by-Step Navigation

```markdown
**Prerequisites:** [Install the software](/docs/install)

**Next:** [Configure your project](/docs/configure)

**Troubleshooting:** [Solve common problems](/docs/troubleshoot)
```

### Resource Links

```markdown
## Additional Resources

- [Official Documentation](https://example.com/docs)
- [Community Forum](https://example.com/forum)
- [GitHub Repository](https://github.com/example/project)
- [Report an Issue](https://github.com/example/project/issues)
```

---

## Best Practices

- Use absolute paths in static site generators. This ensures consistency across your site.
- Write descriptive link text. Readers and search engines benefit from clear link labels.
- Keep links current. Broken links damage credibility and frustrate readers.
- Test links regularly. Include link validation in your CI/CD pipeline.
- Avoid deep nesting. Limit links to 3-4 levels deep for easier navigation.
- Group related links. Place similar links together for better user experience.
- Use reference-style links in long documents. They improve readability of your source Markdown.
- Link to sections within long pages. Help readers jump to relevant content.
- Use consistent link naming. If you use "Installation" as a heading, link to "[Installation](/docs/install)" consistently.
- Provide context for external links. Explain why you're linking and what readers will find.
- Never link to external sites for critical information. Keep critical content within your documentation.
- Update links when pages move. Use redirects or update all references.

---

## Link Checking Tools

Verify your links are working:

| Tool | Purpose | Cost |
|------|---------|------|
| htmlproofer | Check all links in built HTML | Free |
| linkinator | Find broken links in websites | Free |
| Dead Link Checker | Browser extension for manual checking | Free |
| W3C Link Checker | Official link validation service | Free |
| Checkly | Monitor links over time | Freemium |

---

## Summary

In this lesson, you learned how to:

- Create internal and external links using Markdown syntax.
- Write descriptive link text.
- Organize links effectively in documentation.
- Use reference-style links for complex documents.
- Apply links in Docs-as-Code workflows.
- Follow accessibility guidelines for links.
- Maintain and validate links in your documentation.

Good links connect information and guide readers. Practice writing clear, descriptive link text.

---

## Exercise

1. Create a Markdown file with at least 5 internal links to different sections.
2. Create at least 3 external links to relevant resources.
3. Write descriptive link text for each link.
4. Test all links in your local preview.
5. Use reference-style links for at least 2 links.
6. Commit your changes to Git.

---

## Knowledge Check

**Question 1**

What is the correct Markdown syntax for a link?

- A. `(link text)[URL]` ❌
- B. `[link text](URL)` ✅
- C. `{link text: URL}` ❌
- D. `<link text>URL</link text>` ❌

---

**Question 2**

How do you link to a specific section within a page?

- A. `[text](/page/section)` ❌
- B. `[text](/page#section)` ✅
- C. `[text](/page:section)` ❌
- D. `[text](/page.section)` ❌

---

**Question 3**

Which link text is most accessible for screen reader users?

- A. `[Click here](/docs/install)` ❌
- B. `[Link](/docs/install)` ❌
- C. `[Installation guide](/docs/install)` ✅
- D. `[/docs/install](/docs/install)` ❌

---

**Question 4**

What should you use for links within your documentation site?

- A. Relative paths only ❌
- B. Absolute paths starting with / ✅
- C. Full URLs ❌
- D. File names only ❌

---

## Next Lesson

➡️ [Mermaid Diagrams](Mermaid.md)