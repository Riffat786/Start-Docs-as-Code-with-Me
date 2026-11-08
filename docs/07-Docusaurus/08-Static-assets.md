---
title: Managing Static Assets
sidebar_position: 9
description: Learn how to organize and manage static assets like images, files, and media in your Docusaurus documentation.
---

# Managing Static Assets

> **Estimated reading time:** 16 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand static assets and why they matter.
- Choose where to store assets (static folder vs docs folder).
- Reference images in markdown.
- Optimize images for documentation.
- Organize assets effectively.
- Handle different file types.
- Implement caching strategies.
- Apply asset management best practices.

---

## What Are Static Assets?

Static assets are files that don't change: images, icons, PDFs, videos, fonts, and other resources.

### Common Asset Types

**Images:**
- PNG, JPG, SVG, GIF, WebP
- Screenshots, diagrams, logos
- Illustrations, charts

**Documents:**
- PDF files
- Downloads
- References

**Media:**
- Videos (MP4, WebM)
- Audio files

**Fonts:**
- Custom fonts
- Web fonts

**Icons:**
- Favicons
- Logos
- UI icons

### Why Assets Matter

Good assets:
- Help explain concepts (screenshots)
- Make documentation attractive (logos, illustrations)
- Provide downloads (PDFs)
- Support multiple formats (icons)

Bad asset management:
- Slows down site (huge images)
- Confuses users (broken references)
- Makes maintenance hard (scattered files)
- Wastes disk space (duplicates)

:::important

Well-organized assets make documentation clearer and more professional.

:::

---

## Before You Start

Make sure you have:

- Project folder structure
- Image files to use
- Understanding of file types
- Space for storing assets
- Optimization tools (optional but helpful)

:::note

**For Beginners**

Think of assets like supplies: keep them organized in folders, label them clearly, and use them efficiently.

:::

---

## Asset Storage Options

### Option 1: Static Folder

Store assets in `static/` folder. Files here are copied as-is to build output.

**Location:**
```
your-project/
├── static/
│   ├── img/
│   │   ├── logo.png
│   │   ├── homepage/
│   │   │   └── hero.jpg
│   │   └── icons/
│   │       └── github.svg
│   └── docs/
│       └── guide.pdf
└── docusaurus.config.ts
```

**Pros:**
- Organized in one place
- Used for site-wide assets (logos)
- Easy to reference from anywhere
- Copied to build unchanged

**Cons:**
- Separated from docs content
- Harder to find which docs use which assets
- All files bundled (even if unused)

**Best for:** Logos, icons, site-wide images, shared resources

### Option 2: Docs Folder

Store assets with related docs.

**Location:**
```
your-project/
├── docs/
│   ├── 03-Git/
│   │   ├── Branches.md
│   │   ├── images/
│   │   │   ├── branch-diagram.png
│   │   │   └── merge-example.png
│   │   └── files/
│   │       └── workflow.pdf
│   └── 04-GitHub/
│       ├── Actions.md
│       └── images/
│           └── workflow.png
└── docusaurus.config.ts
```

**Pros:**
- Assets near related docs
- Easy to see which docs use which assets
- Easy to move docs (assets move too)
- Context-clear organization

**Cons:**
- Duplicates if shared across docs
- Slower builds (process more files)
- Requires relative paths

**Best for:** Documentation-specific images, related resources

### Recommendation

**Use both:**
- Static folder: Site logos, icons, shared resources
- Docs folder: Document-specific images

This gives you flexibility and clear organization.

---

## Static Folder Structure

### Organizing by Type

```
static/
├── img/                    (Images)
│   ├── logo.png
│   ├── favicon.png
│   ├── homepage/           (Homepage images)
│   ├── articles/           (Blog images)
│   ├── portfolio/          (Portfolio images)
│   └── icons/              (Icon set)
├── docs/                   (Documents)
│   ├── guide.pdf
│   └── cheatsheet.pdf
├── media/                  (Videos, audio)
│   ├── intro.mp4
│   └── tutorial.webm
└── fonts/                  (Custom fonts)
    ├── roboto.woff2
    └── opensans.woff2
```

This structure is clear and scalable.

### Real Example from This Project

**Actual folder structure:**
```
static/
├── img/
│   ├── favicon.png                     (Site icon)
│   ├── logo.png
│   ├── banner.png
│   ├── homepage/                       (Homepage images)
│   │   ├── learn-by-building.png
│   │   ├── modern-documentation.png
│   │   └── build-portfolio.png
│   ├── articles/                       (Blog article images)
│   │   ├── future-tech-writing.png
│   │   ├── documentation-ai.png
│   │   ├── docs-as-code.png
│   │   └── release-note-generator.png
│   └── portfolio/                      (Portfolio project images)
│       └── api/
│           ├── release-management-api-reference.png
│           ├── release-management-api-get-release.png
│           └── HTTP-response.png
└── assets/                             (Screenshots and diagrams)
    └── screenshots/
        ├── docs-int-plat.png
        ├── 6-step-workflow.png
        └── pipeline.png
```

This real organization shows best practices.

---

## How-To: Reference Images

### From Static Folder

In markdown:

```markdown
![Alt text](/img/logo.png)
```

In React:

```jsx
<img src="/img/logo.png" alt="Alt text" />
```

**Important:** Paths start with `/` (absolute from static root)

### From Docs Folder

In markdown:

```markdown
![Alt text](./images/branch-diagram.png)
```

Or with require:

```markdown
![Alt text](require('./images/branch-diagram.png').default)
```

**Important:** Paths are relative to current file

### How-To: Add Image to Documentation

**Step 1: Prepare image**

Save image in appropriate folder:
```
docs/03-Git/
├── Branches.md
└── images/
    └── branch-diagram.png
```

**Step 2: Reference in markdown**

```markdown
# Git Branches

Here's how branches work:

![Branch diagram showing main and feature branches](./images/branch-diagram.png)
```

**Step 3: Build and verify**

```bash
npm run build
npm run serve
```

Visit documentation, verify image shows.

**Result:** Image appears in documentation!

---

## Best Practices

### File Naming

**Good names:**
```
branch-diagram.png
git-workflow.svg
github-actions-screenshot.png
merge-conflict-example.jpg
```

**Bad names:**
```
image1.png
temp.png
screenshot.jpg
diagram.svg
```

Use descriptive names that tell what the image shows.

### File Optimization

**Optimize images before adding:**

```bash
# Using ImageMagick
convert large-image.png -quality 80 -resize 1200x optimized.png

# Using online tool
# Visit: https://tinypng.com (PNG/JPG)
# Visit: https://svgo.js.org (SVG)
```

Optimized images = faster site = happier users.

### Alt Text

Always include alt text:

```markdown
![Clear description of what image shows](./image.png)
```

Alt text helps:
- Accessibility (screen readers)
- SEO (search engines)
- Users (broken image fallback)

**Good alt text:**
- Describes what's in image
- Clear and concise
- Not redundant if caption exists
- Not "image" or "picture"

**Examples:**
```
✓ "Git workflow showing main branch and three feature branches"
✓ "Screenshot of GitHub Actions workflow editor with YAML config"
✓ "API endpoint response showing JSON structure"

✗ "image"
✗ "screenshot"
✗ "git-workflow"
```

### Format Selection

**PNG:**
- Screenshots (best)
- Diagrams
- Images with transparency
- Lossless quality

**JPG:**
- Photos
- Complex images
- Smaller file size
- Lossy quality (acceptable)

**SVG:**
- Logos (best)
- Icons
- Diagrams
- Infinitely scalable
- Smallest file size

**WebP:**
- Modern format
- Smallest size
- Not all browsers (provide fallback)

---

## Advanced Asset Management

### Responsive Images

Make images work on all screen sizes:

```markdown
![Responsive image](./image.png){:style="max-width: 100%; height: auto;"}
```

Or in HTML:

```html
<img 
  src="/img/screenshot.png" 
  alt="Screenshot"
  style="max-width: 100%; height: auto;"
/>
```

Images scale but never larger than original.

### Image Compression

Use build-time optimization:

In `docusaurus.config.ts`:

```typescript
webpack: {
  configure: (config) => {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        {
          loader: 'file-loader',
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true },
            optipng: { enabled: false },
            pngquant: { quality: [0.65, 0.90] },
            gifsicle: { interlaced: false },
          },
        },
      ],
    });
    return config;
  },
},
```

Automatically optimizes images during build.

### CDN Usage

For large sites, use CDN for assets:

In `docusaurus.config.ts`:

```typescript
url: 'https://example.com',
baseUrl: '/',
```

Docusaurus can be configured to use external CDN.

Benefits:
- Faster delivery
- Reduced server load
- Global distribution
- Caching

---

## Common Issues

### Image Not Showing

**Problem:** Image reference is wrong

**Solutions:**
1. Check file exists: `ls docs/images/`
2. Check path is correct: relative or absolute?
3. Check filename spelling (case-sensitive on Linux/Mac)
4. Check format: is it actually an image?

**Debug:**
```bash
npm run build  # Build to see errors
npm run serve  # Test locally
```

### Image Too Large

**Problem:** File size huge, slow to load

**Solution:** Compress image

```bash
convert input.png -quality 80 output.png
```

Or use online tool: tinypng.com

### Broken References

**Problem:** Image shows broken icon

**Solution:**
1. Check path (relative vs absolute)
2. Verify file exists
3. Check for typos in filename
4. Test locally before deploy

---

## Asset Management Workflow

### For Screenshots

1. Take screenshot
2. Crop to relevant area only
3. Add arrows/annotations if helpful
4. Compress (optimize quality)
5. Save with descriptive name
6. Add alt text in markdown

### For Diagrams

1. Create in tool (draw.io, Lucidchart)
2. Export as SVG (scalable, small)
3. Optimize SVG (SVGO tool)
4. Save with clear name
5. Add alt text in markdown

### For Icons/Logos

1. Design in design tool
2. Export as SVG (best quality)
3. Test at small sizes
4. Save to static/img/icons/
5. Use from anywhere

---

## Summary

In this lesson, you learned:

- What static assets are and why they matter
- Where to store assets (static vs docs folder)
- How to organize assets effectively
- How to reference images in markdown
- Image optimization techniques
- Alt text best practices
- Common issues and solutions
- Asset management workflow

Good asset organization makes documentation clearer and faster.

---

## Exercise

1. Create `static/img/screenshots/` folder
2. Create `docs/images/` in your docs folder
3. Add one screenshot to static folder
4. Add one diagram to docs folder
5. Reference both in markdown with alt text
6. Optimize images (compress)
7. Build locally: `npm run build`
8. Verify images show
9. Test on mobile
10. Add more images to both locations

---

## Knowledge Check

<details>
<summary><strong>1. What are static assets?</strong></summary>

Static assets are files that don't change: images (PNG, JPG, SVG), documents (PDF), videos, audio, fonts, icons. They're served as-is without processing.

</details>

<details>
<summary><strong>2. What are the two main asset storage options?</strong></summary>

**Static folder:** Site-wide assets like logos, icons. Organized centrally. Used for shared resources.

**Docs folder:** Document-specific assets. Stored with related docs. Easy to see relationships.

**Best practice:** Use both for flexibility.

</details>

<details>
<summary><strong>3. How do you reference an image from static folder?</strong></summary>

Use absolute path starting with `/`:

```markdown
![Alt text](/img/logo.png)
```

Path starts at static folder root.

</details>

<details>
<summary><strong>4. How do you reference an image from docs folder?</strong></summary>

Use relative path:

```markdown
![Alt text](./images/screenshot.png)
```

Path relative to current markdown file.

</details>

<details>
<summary><strong>5. What makes good alt text?</strong></summary>

Good alt text:
- Describes what's in image
- Clear and concise (10-20 words)
- Not redundant with caption
- Specific, not generic

Example: "Git workflow showing main branch and three feature branches"

</details>

<details>
<summary><strong>6. What image formats should you use?</strong></summary>

**PNG:** Screenshots, diagrams (lossless)

**JPG:** Photos, complex images (lossy, smaller)

**SVG:** Logos, icons (scalable, smallest)

**WebP:** Modern format (smallest, not all browsers)

</details>

<details>
<summary><strong>7. How should you organize static folder?</strong></summary>

Organize by type and purpose:

```
static/
├── img/
│   ├── logo.png
│   ├── homepage/
│   ├── articles/
│   └── icons/
├── docs/
│   └── guide.pdf
└── media/
    └── video.mp4
```

Clear hierarchy makes assets easy to find.

</details>

<details>
<summary><strong>8. Why should you compress images?</strong></summary>

Compression:
- Reduces file size
- Faster page load
- Better user experience
- Reduced bandwidth costs
- Improves SEO

Example: 2MB image → 200KB optimized (10x smaller!)

</details>

---

## Next Lesson

After mastering asset management, explore how to customize Docusaurus themes to match your brand and create unique visual identity for your documentation site.