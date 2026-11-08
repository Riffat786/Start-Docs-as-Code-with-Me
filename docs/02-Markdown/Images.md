---
title: Working with Images in Markdown
sidebar_position: 3
description: Learn how to insert, optimize, and manage images in your documentation.
---

# Working with Images in Markdown

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Markdown image syntax.
- Insert images from local and external sources.
- Organize images in your documentation project.
- Optimize images for web performance.
- Add alt text for accessibility.
- Use image paths correctly in Docs-as-Code workflows.
- Choose appropriate image formats.
- Create responsive images for different screen sizes.

---

## Why Images Matter in Documentation

Images make documentation clearer and more engaging. They help readers understand complex concepts faster than text alone. Good images:

- Break up large blocks of text.
- Show interfaces and workflows.
- Illustrate step-by-step processes.
- Increase user engagement.
- Reduce time to comprehension.

However, images also increase file size and complexity. This lesson teaches you to use images effectively in your Docs-as-Code projects.

---

## Markdown Image Syntax

The basic Markdown syntax for images is:

```markdown
![alt text](image-path)
```

The parts are:

- `!` - Tells Markdown this is an image.
- `[alt text]` - Describes the image (for accessibility and when images don't load).
- `(image-path)` - The location of the image file or URL.

### Example

```markdown
![A screenshot showing the dashboard](../img/dashboard-screenshot.png)
```

---

## Image Paths

Use the correct path format based on your project structure.

### Local Images

For images stored in your repository:

```markdown
![Product home page](/img/home-page.png)
```

**Best practice:** Use a root-relative path starting with `/`. This works consistently in static site generators like Docusaurus and Jekyll.

### Images in a Subfolder

```markdown
![Configuration dialog](./images/config-dialog.png)
```

### Images in a Parent Directory

```markdown
![System architecture](../architecture/diagram.png)
```

### External Images

For images hosted elsewhere:

```markdown
![External logo](https://example.com/images/logo.png)
```

---

## Organizing Images

Create a clear folder structure for images in your project.

### Recommended Structure

```text
docs/
├── img/
│   ├── common/
│   ├── module-01/
│   ├── module-02/
│   └── icons/
├── 01-Welcome/
├── 02-Markdown/
└── 03-Git/
```

### Folder Guidelines

- `img/common/` - Logos, navigation elements, icons used across the site.
- `img/module-[number]/` - Images specific to each module.
- `img/icons/` - Reusable icons and symbols.
- Keep image names short and descriptive: `dashboard-overview.png` not `screenshot-123.png`.

---

## Image Formats

Choose the right format for your needs.

| Format | Use Case | Pros | Cons |
|--------|----------|------|------|
| **PNG** | Screenshots, diagrams, logos | Lossless, supports transparency | Larger file size |
| **JPEG** | Photos, complex images | Smaller file size | Lossy compression |
| **SVG** | Icons, diagrams, logos | Scalable, smallest file size | Less suitable for photos |
| **WebP** | Modern web projects | Best compression | Limited browser support |
| **GIF** | Simple animations | Supports animation | Poor quality for photos |

**Recommendation:** Use PNG for screenshots and diagrams. Use JPEG for photos. Use SVG for icons and logos.

---

## Image Optimization

Optimize images to improve page load times.

### Reduce File Size

- Use PNG instead of JPEG only when necessary.
- Compress images before adding them to your project.
- Tools: TinyPNG, ImageOptim, Squoosh.
- Target: Keep most images under 500 KB.

### Image Dimensions

- Use appropriate width and height.
- Avoid scaling large images down in the browser.
- Original image size should match display size.

### Optimization Tools

```bash
# macOS: ImageOptim (GUI)
# Windows: FileOptimizer (GUI)
# Online: tinypng.com, squoosh.app
```

---

## Alt Text

Alt text describes images for accessibility. Screen reader users rely on alt text.

### Writing Good Alt Text

**Do:**
- Describe what the image shows: `![Dashboard showing user metrics and charts]`
- Be concise: 100–125 characters maximum.
- Include relevant context: `![Configuration dialog for API settings]`

**Don't:**
- Write "image of" or "screenshot of" (redundant).
- Leave alt text empty: `![](image.png)` ❌
- Use only filenames: `![screenshot-456.png]` ❌
- Write a paragraph (too long).

### Examples

**Good:**
```markdown
![User dashboard with monthly revenue chart](img/dashboard.png)
```

**Poor:**
```markdown
![Screenshot](img/dashboard.png)
```

---

## Advanced Image Syntax

### Images with Captions

Markdown doesn't natively support captions. Use HTML if needed:

```html
<figure>
  <img src="/img/workflow.png" alt="Documentation workflow diagram">
  <figcaption>Figure 1: The documentation workflow</figcaption>
</figure>
```

### Image Links

Make an image clickable:

```markdown
[![Dashboard screenshot](/img/dashboard.png)](https://example.com/demo)
```

### Image Sizing

Standard Markdown doesn't support sizing. Use HTML:

```html
<img src="/img/diagram.png" alt="Architecture diagram" width="600" height="400">
```

Or use framework-specific syntax (Docusaurus example):

```jsx
<img src={require('/img/diagram.png').default} width="600" alt="Architecture diagram" />
```

---

## Images in Docs-as-Code Workflows

### Version Control

- Store image files in Git (with `.gitignore` for large files).
- Use Git LFS for files larger than 100 MB.
- Document image changes in commit messages.

### Static Site Generators

Different generators handle images differently:

**Docusaurus:**
- Place images in `static/img/` folder.
- Reference as: `/img/filename.png`

**Jekyll:**
- Place images in `assets/images/` folder.
- Reference as: `/assets/images/filename.png`

**MkDocs:**
- Place images in docs folder structure.
- Use relative paths.

### CI/CD Considerations

- Include image optimization in your build process.
- Validate image references during builds.
- Set up automated alt text checks if possible.

---

## Responsive Images

Create images that work on mobile and desktop.

### Simple Approach

Static site generators automatically scale images. Use:

```markdown
![Mobile-friendly diagram](/img/responsive-diagram.png)
```

### Advanced Approach

Use HTML for more control:

```html
<picture>
  <source media="(max-width: 640px)" srcset="/img/diagram-mobile.png">
  <source media="(min-width: 641px)" srcset="/img/diagram-desktop.png">
  <img src="/img/diagram-desktop.png" alt="System architecture diagram">
</picture>
```

---

## Common Image Types in Documentation

### Screenshots

- Show software interfaces.
- Use PNG format.
- Remove personal information.
- Highlight important areas with arrows or boxes.

### Diagrams

- Explain processes or architectures.
- Use SVG or PNG.
- Keep simple and clear.
- Use consistent styling.

### Icons

- Enhance visual hierarchy.
- Use SVG for best results.
- Keep size consistent.
- Ensure high contrast.

### Illustrations

- Make documentation engaging.
- Use for conceptual explanations.
- Maintain consistent art style.
- Keep file size reasonable.

---

## Accessibility Checklist

Before publishing images, verify:

- [ ] Alt text is present and descriptive.
- [ ] Alt text is under 125 characters.
- [ ] Color is not the only way to convey information.
- [ ] High contrast between image elements.
- [ ] Images are properly compressed.
- [ ] Image links have descriptive link text.

---

## Best Practices

- Use images to clarify, not decorate. Each image should serve a purpose.
- Keep images close to relevant text. Place images near the paragraph that mentions them.
- Use consistent image dimensions. Keep similar images the same size.
- Update images when documentation changes. Outdated screenshots confuse readers.
- Test images on mobile devices. Ensure they display correctly on small screens.
- Use descriptive filenames. Use `user-authentication-flow.png` not `image-1.png`.
- Document image locations. Keep a list of where images are stored and their purposes.
- Avoid screenshots of code. Use code blocks instead for better readability and searchability.
- Never embed sensitive information. Remove API keys, passwords, and personal data.

---

## Summary

In this lesson, you learned how to:

- Insert images using Markdown syntax.
- Organize images in your documentation project.
- Write descriptive alt text for accessibility.
- Choose appropriate image formats.
- Optimize images for web performance.
- Use images effectively in Docs-as-Code workflows.

Images are powerful tools for documentation. Used correctly, they improve clarity and engagement.

---

## Exercise

1. Create an `img` folder in your documentation project.
2. Add a screenshot or diagram image to the folder.
3. Insert the image in a Markdown file using proper syntax.
4. Write descriptive alt text.
5. Verify the image displays correctly in your local preview.
6. Commit the changes to Git.

---

## Knowledge Check

**Question 1**

What is the correct Markdown syntax for inserting an image with alt text?

- A. `[alt text](image.png)` ❌
- B. `![alt text](image.png)` ✅
- C. `![image.png]` ❌
- D. `{image: alt text}` ❌

---

**Question 2**

Which image format is best for diagrams and logos?

- A. JPEG ❌
- B. GIF ❌
- C. SVG ✅
- D. TIFF ❌

---

**Question 3**

What is the maximum recommended length for alt text?

- A. 50 characters ❌
- B. 100–125 characters ✅
- C. 200 characters ❌
- D. 500 characters ❌

---

**Question 4**

Where should you store images in a Docusaurus project?

- A. `/docs/images/` ❌
- B. `/static/img/` ✅
- C. `/src/images/` ❌
- D. `/assets/` ❌

---

## Next Lesson

➡️ [Links](Links.md)