---
title: Markdown Basics
sidebar_label: Markdown Basics
sidebar_position: 2
description: Learn the Markdown syntax used to create clear and maintainable technical documentation.
---

# Markdown Basics

> **Lesson level:** Beginner
>
> **Time to complete:** 15–20 minutes
>
> **Prerequisites:** Complete the Environment Setup module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Understand what Markdown is.
- Understand why technical writers use Markdown.
- Create headings.
- Write paragraphs.
- Add bold and italic text.
- Create bulleted and numbered lists.
- Add blockquotes.
- Use horizontal rules.
- Understand how Markdown becomes a rendered documentation page.
- Write Markdown that is easy for another writer to maintain.

---

## What is Markdown?

Markdown is the format we use to write much of the content in this project.

If you have worked mainly with Word or another visual authoring tool, Markdown may look different at first.

Instead of selecting formatting from a toolbar, you use simple characters in the text itself.

For example:

```markdown
# Page title

## Section heading

This is a paragraph.

**This text is bold.**

*This text is italic.*

- First item
- Second item
```

The Markdown is then converted into a formatted documentation page when the site is built.

---

## Why do technical writers use Markdown?

Markdown is simple to write, easy to review, and works well with Git.

This makes it a good fit for a Docs-as-Code workflow.

A typical workflow looks like this:

```text
Technical Writer
       ↓
Markdown
       ↓
Git
       ↓
GitHub
       ↓
Review
       ↓
Build
       ↓
Published documentation
```

The important point is that the Markdown file remains the source content.

The publishing tool does not change the way you think about the content itself.

For example, the same Markdown content could be processed by different publishing tools.

> **Documentation practice**
>
> Write the content for the reader first.
>
> Markdown is the format you use to structure the content. It should not become the focus of the writing.

---

## Where will you use Markdown?

You will see Markdown throughout this project.

For example:

```text
docs/
├── 01-Environment-Setup/
├── 02-Markdown/
├── 03-Git/
└── ...
```

The files inside these folders use the `.md` extension.

For example:

```text
Install-Git.md
Markdown-Basics.md
Markdown-Best-Practices.md
```

You can open these files in Visual Studio Code or Cursor and edit them as plain text.

---

## Step 1 — Create a heading

Headings organize a documentation page.

Use the `#` character to create a heading.

For example:

```markdown
# Main heading
```

This creates the main heading for the page.

You can create lower-level headings by adding more `#` characters.

```markdown
# Main heading

## Section heading

### Subsection heading
```

The number of `#` characters indicates the heading level.

---

### Heading levels

Use headings to create a logical structure.

For example:

```markdown
# Install Git

## Before you begin

## Install Git

### Download Git

### Run the installer

## Verify the installation

## Troubleshooting
```

This structure makes it easier for readers to understand the page.

It also makes the content easier to navigate.

> **Best Practice**
>
> Do not choose a heading level because it looks the right size.
>
> Choose it because it represents the correct level in the document structure.

---

## Step 2 — Write a paragraph

A normal line of text becomes a paragraph.

For example:

```markdown
Git is a version control system used to track changes to files.
```

You can write longer paragraphs in the Markdown source.

For example:

```markdown
Git is a version control system used to track changes to files.
Technical writers can use Git to manage documentation changes,
review contributions, and maintain a history of previous versions.
```

Markdown will render this as a paragraph.

---

### Separate paragraphs

Leave a blank line between paragraphs.

For example:

```markdown
Git tracks changes to your documentation.

Git also allows writers to work on different versions of content.
```

Without the blank line, Markdown may treat the text as part of the same paragraph.

> **Best Practice**
>
> Keep paragraphs short enough to read comfortably.
>
> A Markdown file should also be easy for another writer to scan and edit.

---

## Step 3 — Make text bold

Use two asterisks around text to make it bold.

```markdown
**Important**
```

This renders as:

**Important**

You can use bold text when the reader needs to notice a specific word or phrase.

For example:

```markdown
Select **Save** to continue.
```

---

## Step 4 — Make text italic

Use one asterisk around text to make it italic.

```markdown
*Note*
```

This renders as:

*Note*

Use italic text sparingly.

For example:

```markdown
The *main branch* contains the current version of the project.
```

---

## Step 5 — Create a bulleted list

Use a hyphen to create a bulleted list.

For example:

```markdown
- Markdown
- Git
- GitHub
- Docusaurus
```

This renders as:

- Markdown
- Git
- GitHub
- Docusaurus

Lists are useful when the order of the items does not matter.

For example, a list of required tools:

```markdown
You need:

- Git
- Node.js
- Visual Studio Code
```

---

## Step 6 — Create a numbered list

Use numbers followed by a period.

```markdown
1. Open Visual Studio Code.
2. Open your project.
3. Open the terminal.
4. Run the required command.
```

This creates a numbered list.

Numbered lists are useful when the reader needs to complete steps in a specific order.

For example:

```markdown
1. Download Git.
2. Run the installer.
3. Keep the default settings.
4. Select **Install**.
5. Verify the installation.
```

> **Documentation practice**
>
> Use numbered lists for procedures.
>
> Use bulleted lists for groups of related information where sequence does not matter.

---

## Step 7 — Create a nested list

You can create a list inside another list.

For example:

```markdown
- Documentation
  - User guides
  - API documentation
  - Release notes
- Development
  - Source code
  - Tests
  - Build scripts
```

This creates a hierarchy within the list.

Use nested lists when the relationship between the items is important.

Do not create several levels of nested lists unless the structure is genuinely necessary.

---

## Step 8 — Add a blockquote

Use the `>` character to create a blockquote.

For example:

```markdown
> Always review documentation before publishing it.
```

This can be useful when quoting information or highlighting a short statement.

In this course, you will also see blockquotes used for documentation guidance.

For example:

```markdown
> **Best Practice**
>
> Keep procedures short and use numbered steps.
```

Docusaurus can render this as a visually distinct block of content.

You will learn more about callouts later in the Markdown module.

---

## Step 9 — Add a horizontal rule

Use three hyphens to create a horizontal rule.

```markdown
---
```

This creates a visual separator between sections.

For example:

```markdown
# Install Git

## Before you begin

You need an internet connection.

---

## Install Git

Download Git from the official website.
```

Use horizontal rules when they improve the structure of the page.

Do not add them between every section.

---

## Step 10 — Combine Markdown elements

Markdown becomes useful when you combine simple elements.

For example:

```markdown
# Install Git

Git is used to track changes to your documentation.

## Before you begin

You need:

- A computer
- An internet connection
- Administrator access if required

## Install Git

1. Open the Git website.
2. Download the installer.
3. Run the installer.
4. Keep the default settings.
5. Select **Install**.

> **Best Practice**
>
> Verify Git after installation.
```

This is already enough to create a useful technical procedure.

You do not need complicated Markdown to write effective documentation.

---

## Markdown source and rendered content

When you work with Markdown, you will see two different views.

### Markdown source

```markdown
# Install Git

Git is a version control system.

- Download Git.
- Install Git.
- Verify Git.
```

### Rendered page

#### Install Git

Git is a version control system.

- Download Git.
- Install Git.
- Verify Git.

The Markdown source is what you edit.

The rendered page is what the reader sees.

As a technical writer, you should become comfortable working with both.

---

## Markdown and Git

One of the main advantages of Markdown is that the source file is plain text.

Git can track changes to that text.

For example, you might change:

```markdown
Install Git on your computer.
```

to:

```markdown
Install Git on your Windows computer.
```

Git can show exactly what changed.

This makes Markdown particularly useful for collaborative documentation.

You will learn more about this when we cover Git and GitHub.

---

## Markdown and Docusaurus

The Markdown files in this project are processed by Docusaurus when the documentation website is built.

The basic relationship is:

```text
Markdown
    ↓
Docusaurus
    ↓
HTML
    ↓
Documentation website
```

You do not need to learn HTML to start writing Markdown.

However, you may occasionally see HTML or MDX syntax in this project when Markdown alone cannot provide the required behavior.

We will introduce those cases when they become relevant.

---

## File names

Markdown files normally use the `.md` extension.

Examples:

```text
Markdown-Basics.md
Install-Git.md
Markdown-Best-Practices.md
```

Use clear and meaningful file names.

A writer opening the repository should be able to understand what a file contains without opening it.

> **Best Practice**
>
> Keep file names predictable.
>
> Follow the naming convention already used by the project rather than creating a different naming style for new files.

---

## Keep the source readable

A Markdown file is also a working document for the documentation team.

Another writer may need to:

- Review it.
- Update it.
- Troubleshoot it.
- Move sections.
- Fix links.
- Add screenshots.
- Update procedures.

For that reason, the source should be easy to read.

For example, prefer:

Run:

```bash
git --version
```

You should see the Git version.

Readable source makes maintenance easier.

---

## Common Markdown mistakes

<details>
<summary><strong>1. Forgetting the space after a heading marker</strong></summary>

Incorrect:

```markdown
#Install Git
```

Correct:

```markdown
# Install Git
```

The space after `#` is important.

</details>

<details>
<summary><strong>2. Forgetting a blank line between paragraphs</strong></summary>

Less readable:

```markdown
Git tracks changes to files.
Git can also show previous versions.
```

Better:

```markdown
Git tracks changes to files.

Git can also show previous versions.
```

</details>

<details>
<summary><strong>3. Using headings for visual formatting</strong></summary>

Do not create a heading simply because you want larger text.

For example, avoid:

```markdown
### Important information
```

when the text is not actually a section.

Use appropriate formatting instead.

</details>

<details>
<summary><strong>4. Using numbered lists when order does not matter</strong></summary>

If the reader does not need to follow a sequence, use a bulleted list.

Use:

```markdown
- Git
- GitHub
- Markdown
```

rather than:

```markdown
1. Git
2. GitHub
3. Markdown
```

</details>

<details>
<summary><strong>5. Creating too many headings</strong></summary>

Headings should help readers navigate the content.

If every few sentences have a heading, the page can become difficult to read.

Group related information under meaningful sections.

</details>

---

## Best practices

- Use headings to create a logical document structure.
- Use one main heading for the page.
- Use headings in a consistent hierarchy.
- Keep paragraphs focused on one idea.
- Use numbered lists for procedures.
- Use bulleted lists when order does not matter.
- Use bold text sparingly.
- Use italic text sparingly.
- Keep Markdown source readable.
- Use meaningful file names.
- Review the rendered page as well as the source.
- Follow the conventions already established in the project.

> **Documentation Manager's Tip**
>
> When reviewing Markdown written by another writer, do not focus only on whether the syntax is technically correct.
>
> Ask whether the structure helps the reader find and understand the information.

---

## Key terms

| Term | Definition |
| --- | --- |
| Markdown | A lightweight text-based format used to structure and format content. |
| Markdown source | The Markdown text that a writer edits. |
| Rendered content | The formatted result produced when Markdown is processed by a publishing tool. |
| Heading | A piece of text used to organize the structure of a document. |
| Paragraph | A group of sentences that presents a related idea. |
| Blockquote | A Markdown element used to visually distinguish quoted or highlighted content. |
| Bulleted list | A list used when the order of items does not matter. |
| Numbered list | A list used when items need to be followed in a specific order. |
| Horizontal rule | A visual separator created with Markdown syntax. |
| Docs-as-Code | A documentation approach that uses software development tools and workflows to create, manage, review, and publish documentation. |

---

## Summary

In this lesson, you learned how to:

- Understand what Markdown is.
- Understand why technical writers use Markdown.
- Create headings.
- Write paragraphs.
- Use bold and italic text.
- Create bulleted lists.
- Create numbered lists.
- Create nested lists.
- Add blockquotes.
- Add horizontal rules.
- Combine Markdown elements.
- Understand the difference between Markdown source and rendered content.
- Understand how Markdown fits into the Docs-as-Code workflow.
- Keep Markdown readable and maintainable.

These are the Markdown features you will use most often when writing documentation.

You will build on these basics throughout the remaining Markdown lessons.

---

## Knowledge check

<details>
<summary><strong>1. What is Markdown?</strong></summary>

Markdown is a text-based format used to structure and format content.

</details>

<details>
<summary><strong>2. How do you create a main heading?</strong></summary>

Use a `#` followed by a space.

```markdown
# Main heading
```

</details>

<details>
<summary><strong>3. How do you create a second-level heading?</strong></summary>

Use two `#` characters followed by a space.

```markdown
## Section heading
```

</details>

<details>
<summary><strong>4. When should you use a numbered list?</strong></summary>

Use a numbered list when the reader needs to follow the items in a specific order, such as the steps in a procedure.

</details>

<details>
<summary><strong>5. When should you use a bulleted list?</strong></summary>

Use a bulleted list when the order of the items does not matter.

</details>

<details>
<summary><strong>6. How do you make text bold?</strong></summary>

Use two asterisks around the text.

```markdown
**Important**
```

</details>

<details>
<summary><strong>7. How do you make text italic?</strong></summary>

Use one asterisk around the text.

```markdown
*Note*
```

</details>

<details>
<summary><strong>8. Why should Markdown source be readable?</strong></summary>

Other writers may need to review, update, troubleshoot, or maintain the content.

Readable source makes collaboration and maintenance easier.

</details>

<details>
<summary><strong>9. What is the difference between Markdown source and rendered content?</strong></summary>

Markdown source is the text that the writer edits.

Rendered content is the formatted result produced when the Markdown is processed by a publishing tool.

</details>

<details>
<summary><strong>10. Should you use a heading simply because you want larger text?</strong></summary>

No.

Headings should represent the structure of the content, not just provide visual formatting.

</details>

---

## Practice exercise

Create a new Markdown file called:

```text
my-first-markdown-page.md
```

Add the following:

1. A main heading.
2. A short introductory paragraph.
3. A second-level heading.
4. A bulleted list containing three documentation tools.
5. Another second-level heading.
6. A numbered list containing three steps.
7. One bold phrase.
8. One italic phrase.
9. A blockquote containing a documentation tip.

Your file should look similar to:

```markdown
# My First Markdown Page

This is my first Markdown page.

## Tools

- Markdown
- Git
- GitHub

## My documentation workflow

1. Write the content.
2. Review the content.
3. Publish the content.

**Always review your documentation before publishing it.**

*Keep the reader in mind.*

> **Documentation tip**
>
> Write clear instructions that another person can follow.
```

Open the file in your Markdown preview in Visual Studio Code or Cursor.

Check both:

- The Markdown source.
- The rendered result.

Ask yourself:

- Is the heading structure logical?
- Are the lists appropriate?
- Is the content easy to scan?
- Would another technical writer understand the source?
- Would the reader understand the rendered page?

---

# Next lesson

**Markdown Best Practices**

In the next lesson, you will move beyond Markdown syntax and look at how technical writers can structure Markdown so that it remains clear, consistent, accessible, and easy for another writer to maintain.