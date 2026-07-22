---
title: Docusaurus Configuration
sidebar_position: 4
description: Learn how to configure your Docusaurus website using docusaurus.config.ts.
---

# Docusaurus Configuration

> **Estimated reading time:** 25 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand the purpose of `docusaurus.config.ts`.
- Configure your website title and branding.
- Customize the navigation bar.
- Configure the footer.
- Understand deployment settings.
- Enable themes and plugins.

---

# What is docusaurus.config.ts?

The `docusaurus.config.ts` file is the primary configuration file for a Docusaurus website.

It controls how the website behaves and appears.

Almost every global website setting is configured here.

---

# Location

```text
Start-Docs-as-Code-with-Me/

docusaurus.config.ts
```

---

# Website Metadata

The first section defines basic website information.

Example:

```ts
title: 'Start Docs-as-Code with Me',
tagline: 'Learn modern documentation practices',
favicon: 'img/favicon.ico',
```

| Property | Description |
|----------|-------------|
| `title` | Website title |
| `tagline` | Short description |
| `favicon` | Browser tab icon |

---

# URL Configuration

Example:

```ts
url: 'https://yourusername.github.io',
baseUrl: '/',
```

| Property | Description |
|----------|-------------|
| `url` | Website URL |
| `baseUrl` | Base path for the site |

These values are important when deploying to GitHub Pages.

---

# Navigation Bar

The navigation bar appears at the top of every page.

Example:

```ts
navbar: {
  title: 'Start Docs-as-Code with Me',
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Documentation',
    },
    {
      to: '/blog',
      label: 'Blog',
      position: 'left',
    },
    {
      href: 'https://github.com/yourusername/start-docs-as-code-with-me',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
```

---

# Footer

The footer appears at the bottom of every page.

Example:

```ts
footer: {
  style: 'dark',
  copyright:
    'Copyright © 2026 Start Docs-as-Code with Me.',
},
```

---

# Themes

Docusaurus includes built-in themes.

Example:

```ts
themes: [],
```

Additional themes can be installed as needed.

---

# Presets

Most documentation websites use the Classic preset.

Example:

```ts
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
      },
      blog: true,
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
],
```

---

# Plugins

Plugins extend the functionality of Docusaurus.

Examples include:

- Mermaid diagrams
- Local search
- Google Analytics
- Sitemap generation

Plugins are added to the configuration file after installation.

---

# Internationalization

Docusaurus supports multiple languages.

Example:

```ts
i18n: {
  defaultLocale: 'en',
  locales: ['en'],
},
```

Additional languages can be added later.

---

# Best Practices

- Keep the configuration file organized.
- Use meaningful website metadata.
- Test changes locally before deployment.
- Comment complex configurations.
- Commit configuration changes to Git.

---

# Summary

In this lesson, you learned:

- The purpose of `docusaurus.config.ts`.
- How website metadata is configured.
- How navigation and the footer are defined.
- How presets, themes, and plugins are managed.

---

# Exercise

1. Open `docusaurus.config.ts`.
2. Locate the website title.
3. Find the navigation bar configuration.
4. Identify the footer settings.
5. Locate the preset configuration.

> Do not modify these settings yet. In the next lessons, you'll customize them for your own documentation site.

---

# Knowledge Check

**Question**

Which file controls the global configuration of a Docusaurus website?

- A. package.json
- B. sidebars.ts
- C. docusaurus.config.ts ✅
- D. tsconfig.json

---

# Next Lesson

➡️ 05-Sidebars.md