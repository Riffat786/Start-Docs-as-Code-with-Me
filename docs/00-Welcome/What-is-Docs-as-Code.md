# What is Docs-as-Code?

## Learning Objectives

After completing this lesson, you will be able to:

- Define Docs-as-Code
- Explain how Docs-as-Code differs from traditional documentation
- Understand the core tools used in Docs-as-Code
- Describe the documentation workflow

---

## What is Docs-as-Code?

Docs-as-Code is an approach to creating, reviewing, versioning, and publishing documentation using the same tools and workflows that software developers use for source code.

Instead of writing documentation in traditional word processors, documentation is written as plain text (usually Markdown), stored in Git repositories, reviewed through Pull Requests, and automatically published.

---

## Traditional Documentation

Typical workflow:

```
Word Document

↓

Email Review

↓

Manual Edits

↓

Publish PDF

↓

Repeat
```

Common challenges include:

- Multiple document versions
- Difficult collaboration
- Limited version history
- Manual publishing
- Poor traceability

---

## Docs-as-Code Workflow

```
Markdown

↓

Git

↓

GitHub

↓

Pull Request

↓

Review

↓

Merge

↓

Automatic Website
```

Benefits include:

- Version control
- Collaborative reviews
- Automated publishing
- Documentation history
- Improved quality
- Faster updates

---

## Core Components

- Markdown
- Git
- GitHub
- Static Site Generator
- CI/CD
- Automation

---

## Real-World Example

A developer completes a new feature.

The documentation writer updates the Markdown file in the same repository.

A Pull Request is created.

The documentation is reviewed.

GitHub Actions automatically builds and publishes the website.

No manual publishing is required.

---

## Summary

Docs-as-Code treats documentation as a software project, enabling collaboration, automation, consistency, and continuous improvement.

---

## Next Lesson

➡️ Why-Docs-as-Code.md