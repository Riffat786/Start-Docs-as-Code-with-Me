---
id: docs-as-code-platform
title: Docs-as-Code Documentation Platform
sidebar_label: Docs-as-Code Documentation Platform
description: Case study documenting the design and implementation of a Docusaurus-based Docs-as-Code documentation platform.
---

## Project Overview

**Start Docs-as-Code with Me** is a Docusaurus-based documentation platform designed to combine structured learning content, real-world project demonstrations, and a professional technical documentation portfolio.

The project demonstrates how a Technical Writer can design, build, document, and publish a **Docs-as-Code documentation platform** to design, author, version, build, and publish documentation using tools and practices commonly found in software development.

The site is also used as a practical learning environment where Docs-as-Code concepts are demonstrated through the platform itself.

---

## Project Goals

The platform was designed to achieve two complementary goals:

### 1. Learning

Provide Technical Writers with a structured path for learning modern documentation practices, including:

* Markdown
* Git
* GitHub
* Docs-as-Code workflows
* Static site generators
* Docusaurus
* API documentation
* AI
* Automation
* AI for Technical Writers
* Real-world documentation projects

### 2. Professional Documentation Portfolio

Provide a live example of how Docs-as-Code can be applied to build and organize professional technical documentation.

The portfolio demonstrates technical documentation through:

* Case studies
* Architecture documentation
* Architecture Decision Records
* Technical guides
* Real-world AI and documentation projects

---

## Documentation Architecture

The platform separates learning content from professional portfolio content while keeping both within the same Docusaurus site.

```text
                         Documentation Platform
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
           Learning Hub                     Documentation Portfolio
                 │                                 │
          Modules 1–13                         Case Studies
          Appendix                              Architecture
          Glossary                              ADRs
          Showcase                              Technical Guides
                 │                                 │
                 └────────────────┬────────────────┘
                                  │
                            Docusaurus
                                  │
                            GitHub Pages
```

This separation allows the Learning Hub to remain focused on teaching while the portfolio can evolve into a professional collection of technical documentation.

---

## Docs-as-Code Workflow

The project uses a Git-based authoring and publishing workflow.

```text
Markdown
   ↓
Git
   ↓
GitHub
   ↓
Docusaurus Build
   ↓
GitHub Pages
   ↓
Published Documentation
```

Documentation is therefore maintained as source-controlled content rather than as an isolated document repository.

Changes can be made to Markdown and configuration files, committed to Git, pushed to GitHub, and built into the published documentation site.

---

## Publishing Flexibility

A key benefit of the Docs-as-Code approach is that the **documentation source does not have to be tied to a single publishing platform**.

When documentation is authored as structured Markdown and managed through Git, the same source content can potentially be adapted for different documentation publishing systems.

For example:

```text
                    Markdown
                       │
                      Git
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   Docusaurus       MkDocs         Other SSGs
        │              │              │
        ↓              ↓              ↓
    Web Docs       Web Docs       Web Docs


       Markdown / Git
             │
       ┌─────┼─────┐
       ↓     ↓     ↓
     Fern  Mintlify  Other Platforms
```

This means Technical Writers can learn the **underlying Docs-as-Code workflow** rather than learning a single publishing tool in isolation.

### Why this matters

The authoring workflow can remain broadly consistent while the publishing layer changes according to project requirements.

For example, a team might choose:

| Publishing approach | Potential use                                              |
| ------------------- | ---------------------------------------------------------- |
| **Docusaurus**      | Documentation sites, learning platforms, developer portals |
| **MkDocs**          | Lightweight technical documentation                        |
| **Fern**            | Developer documentation and API-focused experiences        |
| **Mintlify**        | Modern developer documentation and API documentation       |

The important skill is therefore not simply *"how to use Docusaurus."*

It is understanding the broader workflow:

```text
Markdown
   ↓
Git
   ↓
Version Control
   ↓
CI/CD
   ↓
Documentation Build
   ↓
Publishing Platform
```

Once Technical Writers understand this model, they can evaluate and work with different publishing technologies without having to completely relearn the underlying documentation workflow.

:::info

"Learn the Docs-as-Code architecture, then understand how different publishing platforms can consume and publish that content."

:::

### A Practical Learning Path

This platform currently demonstrates the workflow using **Docusaurus**.

The same Docs-as-Code principles can then be explored with other publishing technologies, such as **MkDocs, Fern, or Mintlify**.

This makes the learning journey transferable rather than tied to one tool.

---

## Content Architecture

The current documentation structure includes a structured Learning Hub with 13 modules.

```text
docs/
├── 00-Welcome
├── 01-Environment-Setup
├── 02-Markdown
├── 03-Git
├── 04-GitHub
├── 05-Docs-as-Code-Workflow
├── 06-Static-Site-Generators
├── 07-Docusaurus
├── 08-API-Documentation
├── 09-AI
├── 10-Automation
├── 11-AI-For-Technical-Writers
├── 12-Real-World-Projects
├── appendix
├── glossary
└── showcase
```

The sidebar uses Docusaurus categories and autogenerated directory structures to organize the learning modules.

This allows the content structure in the repository to directly influence the navigation structure of the published site.

---

## Learning Hub

The Learning Hub is designed primarily for Technical Writers who want to develop Docs-as-Code skills.

The learning path progresses from foundational topics such as Markdown and Git toward more advanced subjects such as:

* Static site generators
* Docusaurus
* API documentation
* AI
* Automation
* AI for Technical Writers
* Real-world documentation projects

The content is therefore both **instructional** and **practical**.

---

## Project Showcase

The platform includes a dedicated Showcase area for demonstrating projects that have been built during the learning journey.

One example is the:

### AI Release Note Generator

The Showcase focuses on demonstrating the project and its implementation.

The separate Documentation Portfolio provides a different perspective by documenting the architecture, decisions, and technical documentation surrounding these projects.

---

## Documentation Portfolio

The Documentation Portfolio is implemented as a separate Docusaurus documentation instance.

This allows the portfolio to have its own:

* Content directory
* URL route
* Sidebar
* Information architecture

The portfolio is published under:

```text
/portfolio/
```

while the Learning Hub remains under:

```text
/docs/
```

This creates a clear distinction between:

```text
/docs/
    ↓
Learning Hub + Project Showcase

/portfolio/
    ↓
Professional Technical Documentation
```

---

## Docusaurus Configuration

Docusaurus is the current publishing implementation for the platform.

The configuration defines the site's metadata, deployment settings, documentation instances, navigation, Mermaid support, theme, and styling.

The platform uses separate Docusaurus documentation instances for:

```text
/docs/
    ↓
Learning Hub + Showcase

/portfolio/
    ↓
Documentation Portfolio
```

For the detailed configuration and implementation, see:

[Docusaurus Configuration](/portfolio/technical-guides/docusaurus-configuration.md)
[Docusaurus Documentation Architecture](/portfolio/architecture/docusaurus-documentation-architecture.md)

---

## Mermaid Architecture Diagrams

The site is configured to support Mermaid diagrams.

This allows architecture and workflow diagrams to be maintained as text alongside the documentation rather than as separate static image assets.

For example:

```text
Documentation Source
        ↓
     GitHub
        ↓
   Docusaurus
        ↓
 Published Site
```

This approach keeps diagrams closer to the documentation source and makes them easier to version and update.

---

## GitHub Pages Publishing

The site is published using GitHub Pages.

The repository acts as the source-controlled home for:

* Markdown content
* Docusaurus configuration
* Sidebar configuration
* Styling
* Static assets
* Site components

The published site provides a live representation of the documentation source.

---

## Information Architecture

A key part of the project is treating documentation structure as an information architecture problem rather than simply creating Markdown pages.

The platform separates content according to user intent:

| Area                    | User need                                          |
| ----------------------- | -------------------------------------------------- |
| Learning Hub            | Learn Docs-as-Code                                 |
| Showcase                | Explore projects                                   |
| Documentation Portfolio | Evaluate technical documentation skills            |
| Insights & Articles     | Read broader documentation and technology topics   |
| About Me                | Learn about the author and professional experience |

This creates distinct entry points for different audiences.

---

## What This Project Demonstrates

This project demonstrates practical experience with:

* Docs-as-Code
* Markdown
* Git
* GitHub
* Docusaurus
* Static site generation
* GitHub Pages
* Documentation information architecture
* Sidebar and navigation design
* Multiple Docusaurus documentation instances
* Mermaid diagrams
* Custom site styling
* Structured technical documentation
* Learning content architecture
* Technical portfolio design

More importantly, the project demonstrates the ability to **design the documentation system as well as create the documentation itself**.

---

## Relationship to the Learning Hub

The Learning Hub teaches the concepts used to build the platform.

The platform itself provides the practical implementation.

This creates a continuous loop:

```text
Learn
  ↓
Apply
  ↓
Build
  ↓
Document
  ↓
Publish
  ↓
Use the platform to demonstrate what was learned
```

The result is both a **learning resource for Technical Writers** and a **live technical documentation portfolio**.

---

## Related Documentation

### Architecture

- [Docusaurus Documentation Architecture](/portfolio/architecture/docusaurus-documentation-architecture/)

### Technical Guides

- [Docusaurus Configuration](/portfolio/technical-guides/docusaurus-configuration/)
- [Documentation Publishing Workflow](/portfolio/technical-guides/documentation-publishing-workflow/)

### Architecture Decision Records

- [ADR 001: GitHub as the Single Source of Truth](/portfolio/adrs/adr-001-github-as-single-source/)
