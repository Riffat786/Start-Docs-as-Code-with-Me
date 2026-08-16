---
id: docusaurus-configuration
title: Docusaurus Configuration
sidebar_label: Docusaurus Configuration
description: Technical guide documenting the Docusaurus configuration used to build the Start Docs-as-Code with Me documentation platform.
---

## Purpose

This guide explains the key Docusaurus configuration used by the **Start Docs-as-Code with Me** documentation platform.

The configuration controls the site's identity, GitHub Pages deployment, documentation instances, navigation, Markdown features, theme, styling, and publishing behavior.

The guide focuses on the configuration used by this project rather than providing a generic Docusaurus configuration reference.

---

## Configuration File

The main configuration file is:

```text
docusaurus.config.ts
```

It defines the configuration used when Docusaurus runs the development server or builds the production site.

The project uses TypeScript for the configuration.

```TypeScript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
```

---

## Site Identity

The configuration defines the site's title, tagline, and favicon.

```TypeScript
title: 'Start Docs-as-Code with Me',
tagline:
  'Learn modern Docs-as-Code by building real-world documentation projects with AI, Git, GitHub, VS Code, Markdown and Docusaurus, from Beginner to Advanced.',
favicon: 'img/favicon.png',
```

These values are used by Docusaurus for site metadata and browser presentation.

The title establishes the site's main purpose:

```text
Start Docs-as-Code with Me
```

The tagline communicates that the platform combines learning with practical documentation projects.

---

## Production URL and Base URL

The site is published as a GitHub Pages project site.

The configuration therefore defines both the production domain and repository-specific base path:

```TypeScript
url: 'https://riffat786.github.io',
baseUrl: '/Start-Docs-as-Code-with-Me/',
```

These values have different purposes.

```url```

Defines the site's production domain.

```baseUrl```

Defines the path under which the project is served.

For this project:

```text

https://riffat786.github.io
        +
/Start-Docs-as-Code-with-Me/

```

results in:

```text

https://riffat786.github.io/Start-Docs-as-Code-with-Me/

```

Correct ```baseUrl``` configuration is particularly important when deploying a Docusaurus project as a GitHub Pages project site rather than as the root site of a domain.

---

## GitHub Pages Configuration

The project identifies the GitHub organization/user and repository:

```TypeScript
organizationName: 'Riffat786',
projectName: 'Start-Docs-as-Code-with-Me',
```

Together with url and baseUrl, these settings identify the GitHub Pages project.

The repository is therefore both:

- the source-controlled documentation repository, and
- the project associated with the published site.

---

## Link Validation

The configuration uses:

```TypeScript
onBrokenLinks: 'throw',
```

This means broken links are treated as build errors.

:::important

This is an important documentation quality control because links are part of the documentation experience.

Instead of allowing broken links to pass silently, the build can identify them before publication.

:::

---

## Internationalization

The current site uses English as its only locale:

```TypeScript
i18n: {
  defaultLocale: 'en',
  locales: ['en'],
},
```

The configuration can be extended if additional locales are introduced in the future.

---

## Markdown Configuration

The site enables Mermaid support:

```TypeScript
markdown: {
  mermaid: true,
},
```

This allows Mermaid diagrams to be maintained alongside the Markdown documentation source.

The project also includes the Mermaid theme:

```TypeScript
themes: ['@docusaurus/theme-mermaid'],
```

:::tip

This is useful for architecture, workflow, and process documentation because diagrams can remain version controlled as source text.

:::

---

## Primary Documentation Instance

The standard Docusaurus documentation instance uses:

```TypeScript
docs: {
  sidebarPath: './sidebars.ts',
  editUrl:
    'https://github.com/Riffat786/Start-Docs-as-Code-with-Me/tree/main/',
},
```

The primary documentation content is stored under:

```docs/```

and is published under:

```/docs/```

The sidebar is controlled by:

```sidebars.ts```

This instance provides the main Learning Hub and Showcase experience.

---

## Learning Hub Navigation

The primary sidebar is organized into learning modules.

The structure includes:

```text
Module 1 · Welcome
Module 2 · Environment Setup
Module 3 · Markdown
Module 4 · Git
Module 5 · GitHub
Module 6 · Docs-as-Code Workflow
Module 7 · Static Site Generators
Module 8 · Docusaurus
Module 9 · API Documentation
Module 10 · AI
Module 11 · Automation
Module 12 · AI for Technical Writers
Module 13 · Real-World Projects
Appendix
Glossary
Showcase
```

The sidebar uses autogenerated directory structures for the individual modules.

For example:

```TypeScript
{
  type: 'category',
  label: 'Module 3 · Markdown',
  collapsed: true,
  items: [
    {
      type: 'autogenerated',
      dirName: '02-Markdown',
    },
  ],
},

```

This allows the documentation directory structure to drive part of the navigation.

---

## Portfolio Documentation Instance

The project also uses a second Docusaurus documentation instance for the professional Documentation Portfolio.

This is configured separately from the primary documentation instance.

```TypeScript
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'portfolio',
      path: 'portfolio',
      routeBasePath: 'portfolio',
      sidebarPath: './sidebarsPortfolio.ts',
      showLastUpdateTime: false,
    },
  ],
],
```

This configuration creates a separate documentation environment using:

```text
Content:
portfolio/

Route:
/portfolio/

Sidebar:
sidebarsPortfolio.ts
```

:::note

This allows the Learning Hub and Documentation Portfolio to have different information architectures while remaining part of the same Docusaurus project.

:::

---

## Portfolio Information Architecture

The Documentation Portfolio uses its own sidebar:

```sidebarsPortfolio.ts```

The current structure is:

```text
Documentation Portfolio
│
├── Case Studies
│   ├── AI Release Note Generator
│   └── Docs-as-Code Documentation Platform
│
├── Architecture
│   ├── AI Documentation Intelligence
│   └── Docusaurus Documentation Architecture
│
├── Architecture Decision Records
│   ├── ADR 001: GitHub as Single Source
│   └── ADR 002: Human-in-the-Loop AI Review
│
└── Technical Guides
    ├── AI Release Note Generator CI Validation
    ├── Docusaurus Configuration
    └── Documentation Publishing Workflow
```

The portfolio sidebar uses autogenerated navigation for each directory:

```TypeScript
{
  type: 'autogenerated',
  dirName: 'case-studies',
}
```

This means new documents placed in the appropriate portfolio directory can be incorporated into the navigation without manually adding every individual document.

---

## Presets

The project uses the Docusaurus Classic preset:

```TypeScript
presets: [
  [
    'classic',
    {
      docs: {
        ...
      },
      blog: {
        ...
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies Preset.Options,
  ],
],
```

The Classic preset provides the standard documentation, blog, and theme functionality used by the project.

---

## Blog Configuration

The site includes an Insights & Articles area.

The blog configuration includes:

```TypeScript
blog: {
  showReadingTime: true,
  postsPerPage: 2,
  blogSidebarCount: 'ALL',
  feedOptions: {
    type: ['rss', 'atom'],
    xslt: true,
  },
  ...
},
```

The configuration therefore supports:

- Reading-time information
- Controlled posts per page
- Blog sidebar entries
- RSS
- Atom feeds

The blog provides a separate space for articles and insights rather than mixing them into the structured Learning Hub.

---

## Custom CSS

The site uses a custom stylesheet:

```TypeScript
theme: {
  customCss: './src/css/custom.css',
},
```

The custom CSS allows the visual presentation of the documentation platform to be adapted without changing the underlying Markdown content.

This provides a separation between:

```text
Content
   ↓
Markdown


Presentation
   ↓
CSS / Theme
```

---

## Navigation

The navbar provides distinct entry points for different user needs.

The current navigation includes:

- Home
- Insights & Articles
- About Me
- GitHub

> The Documentation Portfolio is accessed from the homepage through the Professional Documentation Portfolio entry point and is maintained as a separate documentation experience.

This keeps the personal CV/profile destination separate from the technical Documentation Portfolio.

---

## Code Highlighting

The project uses Prism themes for code syntax highlighting:

```TypeScript
prism: {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
},
```

This provides different code presentation for light and dark modes.

---

## Color Mode

The configuration respects the user's system color preference:

```TypeScript
colorMode: {
  respectPrefersColorScheme: true,
},
```

This allows the site's color mode to respond to the user's operating-system preference.

---

## Edit Links

The documentation and blog configurations include an editUrl pointing to the GitHub repository.

This supports a Docs-as-Code workflow by connecting published documentation back to its source repository.

The repository therefore remains visible as part of the documentation lifecycle rather than being hidden behind the publishing layer.

---

Configuration Architecture

The main configuration can be viewed as several layers:

```text
docusaurus.config.ts
│
├── Site Identity
│   ├── title
│   ├── tagline
│   └── favicon
│
├── Deployment
│   ├── url
│   ├── baseUrl
│   ├── organizationName
│   └── projectName
│
├── Documentation
│   ├── Primary Docs Instance
│   └── Portfolio Docs Instance
│
├── Markdown
│   └── Mermaid
│
├── Blog
│   └── Insights & Articles
│
├── Theme
│   ├── Custom CSS
│   ├── Color Mode
│   └── Prism
│
└── Navigation
    ├── Navbar
    ├── sidebars.ts
    └── sidebarsPortfolio.ts
```

This separation makes the configuration easier to understand and maintain.

---

## Configuration Changes and Version Control

Because docusaurus.config.ts is stored in Git, configuration changes are version controlled alongside the documentation.

A change to the site can therefore involve both:

```text
Content change
    +
Configuration change
    +
Navigation change
```

:::tip

All three can be reviewed and committed as part of the same Docs-as-Code workflow.

:::

---

## Configuration and Publishing

The configuration is ultimately consumed by the Docusaurus build process:

```text
Markdown
   +
Docusaurus Configuration
   +
Sidebar Configuration
   +
Theme / CSS
   +
Static Assets
        ↓
Docusaurus Build
        ↓
Static Documentation Site
```

The resulting site can then be published through the project's GitHub Pages workflow.

---

## Common Configuration Problems

Incorrect baseUrl

If the site is deployed to a GitHub Pages project URL but baseUrl is incorrect, links and assets may not resolve correctly.

Check:

```TypeScript
url: 'https://riffat786.github.io',
baseUrl: '/Start-Docs-as-Code-with-Me/',
```

---

## Incorrect Documentation ID

Docusaurus document IDs are different from documentation instance IDs.

For example:

```text
Documentation instance:
id: portfolio


Document:
id: index
```

Keeping these concepts separate is important when working with multiple documentation instances.

---

## Sidebar References

If a sidebar references a document or directory that does not exist, the build can fail.

When using autogenerated navigation, verify that the referenced directory exists:

```text
portfolio/
├── case-studies/
├── architecture/
├── adrs/
└── technical-guides/
```

---

## Portfolio Route Confusion

The portfolio documentation instance uses:

```TypeScript
routeBasePath: 'portfolio',
```

Therefore its route is:

```/portfolio/```

This is different from the personal About Me destination, which is an external portfolio/CV page.

The two serve different purposes:

```text
/portfolio/
    ↓
Technical Documentation Portfolio


About Me
    ↓
Personal / Professional CV Portfolio
```

---

## Configuration Best Practices Demonstrated

The project demonstrates several useful configuration practices:

- Keep content and configuration separate.
- Use Git to version configuration changes.
- Use explicit build validation.
- Treat broken links as build errors.
- Use separate sidebars for different documentation experiences.
- Use multiple documentation instances when information architectures differ.
- Keep publishing configuration separate from content.
- Use Mermaid as version-controlled source.
- Keep the publishing layer separate from the documentation source.

---

## Outcome

The Docusaurus configuration provides the foundation for a documentation platform that combines:

```text
Learning
   +
Project Showcase
   +
Technical Documentation Portfolio
   +
Insights & Articles
   +
GitHub-based Docs-as-Code
   +
Automated Publishing
```

The configuration is therefore not simply a collection of Docusaurus settings.

It is part of the documentation architecture that determines how content is organized, navigated, built, and published.

---

## Related Documentation

- [Docs-as-Code Documentation Platform](/portfolio/case-studies/docs-as-code-platform/)
- [Docusaurus Documentation Architecture](/portfolio/architecture/docusaurus-documentation-architecture.md)
- [Documentation Publishing Workflow](/portfolio/technical-guides/documentation-publishing-workflow.md)
- [ADR 001: GitHub as the Single Source of Truth](/portfolio/adrs/adr-001-github-as-single-source.md)
