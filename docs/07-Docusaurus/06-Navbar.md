---
title: Configuring Docusaurus Navbar
sidebar_position: 7
description: Learn how to create and customize the navigation bar at the top of your Docusaurus documentation site.
---

# Configuring Docusaurus Navbar

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Docusaurus navbar structure and purpose.
- Configure navbar title and logo.
- Add navbar links and navigation items.
- Position items (left, right, center).
- Create dropdown menus.
- Configure external links and internal routes.
- Style navbar appearance.
- Apply navbar best practices.

---

## What Is a Docusaurus Navbar?

A navbar is the horizontal menu bar at the top of your documentation site. It provides primary navigation and helps users access key sections quickly.

### Navbar Components

**Logo:**
- Site icon/image
- Usually links to home
- Appears on left side

**Title:**
- Site name
- Often hidden if logo present
- Links to home

**Items:**
- Navigation links
- Can be internal routes or external URLs
- Positioned left, right, or center
- Can be dropdowns with sub-items

**Search bar (optional):**
- Site-wide search
- Appears on right side
- Provided by search plugin

### Example Navbar Structure

```
┌─────────────────────────────────────────────────────────┐
│ [Logo] Home  Docs  Blog  Guides     Search  [GitHub]   │
│         ↑     ↑     ↑     ↑          ↑        ↑        │
│        left   left  left  dropdown  right     right    │
└─────────────────────────────────────────────────────────┘
```

Users click items to navigate. Dropdowns expand to show sub-items.

:::important

The navbar is the first thing users see. Good navbar design makes navigation clear and intuitive.

:::

---

## Before You Start

Make sure you have:

- Docusaurus installed and running locally
- `docusaurus.config.ts` or `docusaurus.config.js` in project root
- Understanding of your site structure
- List of main navigation items you want
- Logo file (optional)

:::note

**For Beginners**

The navbar configuration tells Docusaurus: "Here are the main links users should see at the top of every page."

:::

---

## Navbar Configuration File

The navbar is configured in `docusaurus.config.ts` (or `.js`).

### Location

```
your-docs-repo/
├── docs/
├── src/
├── docusaurus.config.ts    ← Navbar config here
├── sidebars.ts
└── package.json
```

The config file is in project root.

### Config Structure

```typescript
const config: Config = {
  themeConfig: {
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.png',
      },
      items: [
        // Navbar items here
      ],
    },
  },
};
```

The `navbar` object sits inside `themeConfig`.

---

## Basic Navbar Configuration

### Navbar Title and Logo

Configure what appears on the left side:

```typescript
navbar: {
  title: 'My Docs',
  logo: {
    alt: 'Logo alt text',
    src: 'img/logo.png',
    srcDark: 'img/logo-dark.png',  // Optional: dark mode logo
    href: 'https://example.com',    // Optional: click goes here
    target: '_self',                // Optional: same tab or new tab
  },
}
```

**What it does:**
- Title: Text shown next to logo
- Src: Logo image path
- SrcDark: Different logo for dark mode
- Href: Where clicking logo goes (default: home)

### Simple Link Item

Add a single link:

```typescript
{
  to: '/docs/getting-started',
  label: 'Docs',
  position: 'left',
}
```

**What it does:**
- to: Internal route (docs folder path)
- label: Text shown in navbar
- position: 'left' or 'right' side of navbar

### External Link

Link to external website:

```typescript
{
  href: 'https://github.com/your-repo',
  label: 'GitHub',
  position: 'right',
}
```

**What it does:**
- href: Full URL (external)
- Opens in same tab by default
- Add `target: '_blank'` to open in new tab

---

## How-To: Create Your First Navbar

### Step 1: Open docusaurus.config.ts

Edit or create the config file.

### Step 2: Add basic navbar

```typescript
const config: Config = {
  themeConfig: {
    navbar: {
      title: 'My Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        // Navbar items go here
      ],
    },
  },
};
```

**Result:** Navbar with title and logo, but no items yet.

### Step 3: Add left items

```typescript
items: [
  {
    to: '/docs/intro',
    label: 'Getting Started',
    position: 'left',
  },
  {
    to: '/blog',
    label: 'Blog',
    position: 'left',
  },
]
```

**Before:**
```
[Logo] My Documentation
```

**After:**
```
[Logo] My Documentation    Getting Started    Blog
```

### Step 4: Add right items

```typescript
items: [
  // ... left items ...
  {
    href: 'https://github.com/your-repo',
    label: 'GitHub',
    position: 'right',
  },
]
```

**Before:**
```
[Logo] Getting Started  Blog
```

**After:**
```
[Logo] Getting Started  Blog                        [GitHub]
```

### Step 5: Test locally

```bash
npm run start
```

Visit `http://localhost:3000`

Check navbar:
- Logo shows?
- Links clickable?
- Positioned correctly?
- Links go to right places?

**Result:** Working navbar!

---

## How-To: Use Real Example from This Project

This project's navbar configuration:

**File structure:**
```
docs/
├── intro.md
├── 00-Welcome/
├── 03-Git/
├── 04-GitHub/
└── 05-Docs-as-code-workflow/

portfolio/
└── docs/

src/
└── pages/
    └── insights.tsx
```

**Actual navbar config (real from repo):**

```typescript
navbar: {
  title: '',  // Title hidden (using logo only)
  
  logo: {
    alt: 'Start Docs-as-Code with Me',
    src: 'img/favicon.png',
  },
  
  items: [
    {
      to: '/',
      label: 'Home',
      position: 'left',
    },
    
    {
      to: '/insights',
      label: 'Insights & Articles',
      position: 'left',
    },
    
    {
      to: '/portfolio',
      label: 'Documentation Portfolio',
      position: 'left',
    },
    
    {
      href: 'https://riffat786.github.io/portfolio/',
      label: 'About Me',
      position: 'left',
    },
    
    {
      href: 'https://github.com/Riffat786/Start-Docs-as-Code-with-Me',
      label: 'GitHub',
      position: 'right',
    },
  ],
}
```

**What this creates:**

```
[Logo]    Home  Insights & Articles  Documentation Portfolio  About Me        [GitHub]
         left                left                  left           left          right
```

Users see navigation to:
- Home page
- Insights & Articles (blog section)
- Documentation Portfolio (separate portfolio docs)
- About Me (external link)
- GitHub repository

---

## Advanced Navbar Features

### Dropdown Menu

Create menu with sub-items:

```typescript
{
  label: 'Docs',
  position: 'left',
  items: [
    {
      to: '/docs/getting-started',
      label: 'Getting Started',
    },
    {
      to: '/docs/api',
      label: 'API Reference',
    },
    {
      to: '/docs/guides',
      label: 'Guides',
    },
  ],
}
```

**Before:**
```
Home  Docs  Blog
```

**After (hover on Docs):**
```
Home  Docs ▼ Blog
      ├─ Getting Started
      ├─ API Reference
      └─ Guides
```

### Mobile Responsive

Navbar automatically collapses on mobile. No configuration needed.

```
Desktop:
[Logo] Home  Docs  Blog                [GitHub]

Mobile:
[Logo]                              [☰ Menu]
(click menu to expand)
├─ Home
├─ Docs
├─ Blog
└─ GitHub
```

### Custom Styling

Add classes to items:

```typescript
{
  to: '/docs',
  label: 'Docs',
  position: 'left',
  className: 'navbar-docs-link',  // CSS class
}
```

Then in custom CSS:

```css
.navbar-docs-link {
  color: #0066cc;
  font-weight: bold;
}
```

---

## Navbar Best Practices

### Do's

✓ Keep navbar simple (5-7 items maximum)
✓ Put most important links on left
✓ Put GitHub/social links on right
✓ Use clear, short labels
✓ Use dropdowns for sub-items
✓ Test on mobile devices
✓ Use real logo (not generic)
✓ Make logo clickable (go home)

### Don'ts

✗ Don't overcrowd navbar (too many links)
✗ Don't use vague labels ("Stuff", "Things")
✗ Don't hide important navigation
✗ Don't use too many dropdowns
✗ Don't forget mobile responsiveness
✗ Don't use placeholder logos
✗ Don't link to broken pages

---

## Summary

In this lesson, you learned:

- What Docusaurus navbars are and why they matter
- Basic navbar structure and components
- How to configure navbar title and logo
- How to add left and right navigation items
- How to create dropdown menus
- Real example from this project
- Navbar best practices

Good navbars make sites easy to navigate. Invest time in clear navigation.

---

## Exercise

1. Open `docusaurus.config.ts`
2. Add navbar title
3. Add/update logo
4. Add Home link (to home page)
5. Add Docs link (to docs intro)
6. Add Blog link (if you have blog)
7. Add GitHub link (if public repo)
8. Test locally: `npm run start`
9. Click each navbar link
10. Test on mobile (responsive)

---

## Knowledge Check

<details>
<summary><strong>1. What is a Docusaurus navbar?</strong></summary>

A navbar is the horizontal menu bar at the top of your documentation site. It provides primary navigation and appears on every page.

</details>

<details>
<summary><strong>2. Where is navbar configured?</strong></summary>

In `docusaurus.config.ts` (or `.js`), inside the `themeConfig` object, in the `navbar` property.

</details>

<details>
<summary><strong>3. What are the main navbar components?</strong></summary>

- **Logo:** Site icon/image on left
- **Title:** Site name (often hidden if logo present)
- **Items:** Navigation links
- **Search bar:** Site-wide search (optional)

</details>

<details>
<summary><strong>4. What does "position: left" and "position: right" do?</strong></summary>

**position: 'left'** puts the item on the left side of the navbar.

**position: 'right'** puts the item on the right side of the navbar.

</details>

<details>
<summary><strong>5. What's the difference between "to" and "href"?</strong></summary>

**to:** Internal route within your documentation (uses `to: '/docs/getting-started'`)

**href:** External URL or absolute path (uses `href: 'https://github.com/...'`)

</details>

<details>
<summary><strong>6. How do you create a dropdown menu in navbar?</strong></summary>

Use the `items` property with sub-items:

```typescript
{
  label: 'Docs',
  position: 'left',
  items: [
    { to: '/docs/getting-started', label: 'Getting Started' },
    { to: '/docs/api', label: 'API' },
  ],
}
```

</details>

<details>
<summary><strong>7. How many navbar items should you have?</strong></summary>

Keep it simple: 5-7 items maximum. Too many items overwhelm users and clutter the navbar.

</details>

<details>
<summary><strong>8. How does navbar respond on mobile?</strong></summary>

Navbar automatically collapses into a hamburger menu on mobile devices. No configuration needed. Users click the menu icon to expand.

</details>

---

## Next Lesson

After mastering navbar configuration, learn how to create and customize your documentation homepage to welcome users and guide them to key sections.