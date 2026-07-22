---
title: Installing Docusaurus
sidebar_position: 2
description: Learn how to install Docusaurus and create your first documentation website.
---

# Installing Docusaurus

> **Estimated reading time:** 15 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Explain the prerequisites for Docusaurus.
- Install Docusaurus.
- Create a new Docusaurus project.
- Run a local development server.
- Understand the generated project structure.
- Troubleshoot common installation issues.

---

## What is Docusaurus?

Docusaurus is an open-source documentation framework developed by Meta (formerly Facebook). It enables you to build modern documentation websites using Markdown, React, and static site generation.

It is widely used for:

- Product documentation
- API documentation
- Developer portals
- Knowledge bases
- Learning platforms

---

## Why Use Docusaurus?

Docusaurus offers many features that make it well suited for Docs-as-Code projects.

- Markdown support
- Versioning
- Search
- Dark mode
- Blog support
- React components
- GitHub Pages deployment
- Mermaid diagrams
- Excellent navigation

---

## Prerequisites

Before installing Docusaurus, ensure the following software is installed.

| Software | Recommended Version |
|-----------|---------------------|
| Node.js | LTS (20 or later) |
| npm | Latest |
| Git | Latest |
| Visual Studio Code or Cursor | Latest |

Verify your installation.

```bash
node --version

npm --version

git --version
```

---

## Create a New Docusaurus Project

Open a terminal and run:

```bash
npx create-docusaurus@latest website classic
```

This command creates a new Docusaurus project using the Classic template.

---

## Project Structure

After installation, the generated project includes folders similar to:

```text
website/
│
├── blog/
├── docs/
├── src/
├── static/
├── docusaurus.config.ts
├── package.json
└── sidebars.ts
```

Each of these files will be explained in the following lessons.

---

## Install Dependencies

If required, install project dependencies.

```bash
npm install
```

---

## Start the Development Server

Run:

```bash
npm start
```

By default, the website opens at:

```text
http://localhost:3000
```

The development server automatically reloads when you save changes.

---

## Verify the Installation

You should see the default Docusaurus homepage in your browser.

If the homepage loads successfully, the installation is complete.

---

## Common Installation Errors

### Node.js not found

**Error**

```text
node is not recognized...
```

**Solution**

Install Node.js and restart the terminal.

---

### npm not found

**Error**

```text
npm is not recognized...
```

**Solution**

Reinstall Node.js because npm is included.

---

### Port 3000 already in use

Run:

```bash
npm start -- --port 3001
```

---

## Best Practices

- Use the latest Node.js LTS version.
- Keep dependencies updated.
- Commit changes frequently using Git.
- Do not modify generated files until you understand their purpose.
- Use feature branches for major changes.

---

## Summary

In this lesson, you learned how to install Docusaurus, create a new project, and run the local development server.

In the next lesson, you'll explore the generated project structure and understand the purpose of each file and folder.

---

## Exercise

1. Install Docusaurus.
2. Create a new project.
3. Start the development server.
4. Open the website.
5. Explore the generated folders.

---

## Knowledge Check

**Question 1**

Which command creates a new Docusaurus project?

- A. npm create docs
- B. npx create-docusaurus@latest website classic ✅
- C. npm install docusaurus
- D. npm init docusaurus

---

## Next Lesson

➡️ 03-Project-Structure
