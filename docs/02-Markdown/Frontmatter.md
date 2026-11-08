# Markdown Frontmatter

## Learning objectives

By the end of this lesson, you will be able to:

* Explain what frontmatter is.
* Identify the purpose of frontmatter in a Markdown file.
* Create frontmatter using YAML.
* Add common frontmatter fields to a document.
* Check frontmatter for errors.
* Troubleshoot common frontmatter problems.

## 1. Introduction

In the previous Markdown lessons, you learned how to write headings, paragraphs, lists, and code blocks.

Now, you will learn how to add information *about* a document.

For example, a lesson can have a title, a description, an author, and a publication status. This information helps a documentation website organize and display the document correctly.

This information is called **frontmatter**.

### What is frontmatter?

Frontmatter is a block of metadata placed at the beginning of a Markdown file. Metadata is information that describes a document.

Frontmatter usually appears before the document's main content and uses a format such as YAML.

Example:

```yaml
---
title: Introduction to Markdown
description: Learn the basics of Markdown syntax.
author: Documentation Team
---
```

The three hyphens at the beginning and end mark the frontmatter block.

The Markdown content starts after the closing delimiter.

```markdown
---
title: Introduction to Markdown
description: Learn the basics of Markdown syntax.
author: Documentation Team
---

# Introduction to Markdown

Markdown is a lightweight markup language.
```

### What does frontmatter do?

Frontmatter can provide information that a documentation tool uses to:

* Set a page title.
* Add a description.
* Define a document's order in a sidebar.
* Set a publication date.
* Identify a document category.
* Control other page settings supported by the documentation tool.

The exact fields and their behavior depend on the tool you use. Docusaurus, MkDocs, and other documentation platforms can support different frontmatter fields.

> **Important**
>
> Frontmatter is not a replacement for Markdown headings. It provides metadata for the document. Your headings provide the document's visible content.

---

## 2. Understand the structure of frontmatter

Before you create frontmatter, learn its basic structure.

```yaml
---
title: My First Lesson
description: A beginner lesson about Markdown.
---
```

This example contains three parts.

| Part              | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| Opening delimiter | `---` marks the beginning of frontmatter.                         |
| Metadata fields   | `title` and `description` contain information about the document. |
| Closing delimiter | `---` marks the end of frontmatter.                               |

### What is YAML?

YAML is a human-readable format used to represent structured data. Frontmatter often uses YAML because it is easy to read and write.

YAML uses a key-value structure.

```yaml
title: My First Lesson
```

In this example:

* `title` is the key.
* `My First Lesson` is the value.

The colon separates the key from the value.

### Important YAML rules

Follow these rules when you write frontmatter:

1. Write the key first.
2. Add a colon after the key.
3. Add a space after the colon.
4. Write the value.
5. Use consistent indentation when you create nested data.

Correct:

```yaml
title: My First Lesson
```

Incorrect:

```yaml
title:My First Lesson
```

The missing space can cause a YAML parsing error.

---

## 3. Create your first frontmatter block

In this exercise, you will create a Markdown file with frontmatter.

### Step 1: Open your documentation project

Open the Learning Hub project in Visual Studio Code.

If you have not opened the project yet:

1. Start Visual Studio Code.
2. Select **File > Open Folder**.
3. Select your Learning Hub project folder.
4. Select **Select Folder**.

### Expected result

Your project files appear in the Explorer panel.

### Step 2: Create a Markdown file

1. In the Explorer panel, open the folder where you store your Markdown lessons.
2. Create a new file.
3. Name the file:

```text
frontmatter-basics.md
```

4. Open the file.

### Expected result

You have an empty Markdown file.

### Step 3: Add frontmatter

Copy the following content into the file:

```markdown
---
title: Frontmatter Basics
description: Learn how to add metadata to a Markdown document.
---

# Frontmatter Basics

Frontmatter provides information about a Markdown document.
```

Save the file.

Use **Ctrl + S** on Windows or **Cmd + S** on macOS.

### Expected result

Your file contains a frontmatter block followed by a Markdown heading and paragraph.

### Step 4: Check the file structure

Your file should look like this:

```yaml
---
title: Frontmatter Basics
description: Learn how to add metadata to a Markdown document.
---
```

# Frontmatter Basics

Frontmatter provides information about a Markdown document.

Check the following items:

* [ ] The file starts with `---`.
* [ ] The `title` field has a value.
* [ ] The `description` field has a value.
* [ ] The closing `---` is present.
* [ ] The Markdown heading appears after the closing delimiter.

---

## 4. Add common frontmatter fields

Now that you know how to create a basic frontmatter block, you will add more fields.

The following example includes common metadata fields:

```yaml
---
title: Git Basics
description: Learn the basic concepts of Git.
sidebar_position: 2
slug: /git-basics
---
```

### Understand each field

| Field              | Purpose                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| `title`            | Defines the document title.                                                   |
| `description`      | Describes the document.                                                       |
| `sidebar_position` | Sets the document's position in a sidebar in systems that support this field. |
| `slug`             | Defines the URL path in systems that support this field.                      |

**Note:** `sidebar_position` and `slug` are commonly used in Docusaurus. They are not universal Markdown fields. The documentation platform must support them.

### Step 1: Add a title

The `title` field identifies the document.

```yaml
title: Git Basics
```

Use a clear title that describes the document.

Good:

```yaml
title: Introduction to Git
```

Less useful:

```yaml
title: Lesson 2
```

### Step 2: Add a description

The `description` field gives a short summary of the document.

```yaml
description: Learn how to create your first Git repository.
```

Write a description that tells the reader what they will learn.

### Step 3: Add a sidebar position

If your documentation website supports `sidebar_position`, you can control the order of documents in the sidebar.

```yaml
sidebar_position: 2
```

The number determines the position according to the platform's ordering rules.

### Step 4: Add a slug

A slug defines the URL path for a page when the documentation platform supports it.

```yaml
slug: /git-basics
```

The page URL might use this path:

```text
/git-basics
```

The final URL also depends on your website's base URL and configuration.

### Step 5: Create the complete example

Replace the content of your test file with:

```markdown
---
title: Git Basics
description: Learn the basic concepts of Git.
sidebar_position: 2
slug: /git-basics
---

# Git Basics

Git is a version control system.
```

Save the file.

### Expected result

The Markdown file contains four frontmatter fields and a heading.

---

## 5. Use strings, numbers, and Boolean values

YAML supports different types of values.

### Strings

A string is text.

```yaml
title: Introduction to Git
```

You can also use quotation marks.

```yaml
title: "Introduction to Git"
```

Both forms represent text.

Use quotation marks when they make the value clearer or when the value contains characters that could be interpreted as YAML syntax.

### Numbers

A number is a numeric value.

```yaml
sidebar_position: 2
```

Do not write the number as a quoted string when the documentation tool expects a numeric value.

```yaml
sidebar_position: "2"
```

Some tools may accept the quoted value, but it is not the same YAML data type as the number `2`.

### Boolean values

A Boolean value represents true or false.

```yaml
draft: true
```

```yaml
published: false
```

The documentation tool must support these fields for them to have an effect.

### Practice exercise

Create the following frontmatter:

```yaml
---
title: Introduction to APIs
description: Learn what an API is and how it works.
sidebar_position: 3
draft: true
---
```

Check each value:

* `title` is a string.
* `description` is a string.
* `sidebar_position` is a number.
* `draft` is a Boolean value.

---

## 6. Add dates correctly

Dates are common in documentation projects.

For example:

```yaml
date: 2026-09-14
```

This value uses the format:

```text
YYYY-MM-DD
```

Where:

* `YYYY` is the four-digit year.
* `MM` is the two-digit month.
* `DD` is the two-digit day.

Example:

```text
2026-09-14
```

This represents September 14, 2026.

### Use quotation marks when required

Some tools interpret unquoted dates as date values. Other tools expect strings.

If your documentation tool expects a date as text, use quotation marks:

```yaml
date: "2026-09-14"
```

Follow the documentation tool's requirements.

> **Best Practice**
>
> Use one date format throughout your documentation project. ISO 8601 dates such as `2026-09-14` are clear and easy to sort.

---

## 7. Use lists in frontmatter

YAML supports lists. A list contains multiple values.

For example, a document can have several tags.

```yaml
tags:
  - markdown
  - documentation
  - beginner
```

Each item starts with a hyphen.

The indentation shows that the items belong to the `tags` field.

### Understand the structure

```yaml
tags:
  - markdown
  - documentation
  - beginner
```

* `tags` is the key.
* The three hyphen-prefixed lines are list items.
* The list items are indented by two spaces.

### Create a list

Add the following frontmatter to your test file:

```markdown
---
title: Markdown Basics
description: Learn the basics of Markdown.
tags:
  - markdown
  - learning
  - documentation
---

# Markdown Basics
```

Save the file.

### Expected result

The file contains a list of three tags.

### Common mistake: Incorrect indentation

Correct:

```yaml
tags:
  - markdown
  - learning
```

Incorrect:

```yaml
tags:
- markdown
 - learning
```

The second item has inconsistent indentation.

Use consistent indentation to make the structure clear and avoid parsing errors.

---

## 8. Understand frontmatter in Docusaurus

Your Learning Hub uses documentation tools, so it is important to understand how frontmatter works in Docusaurus.

Docusaurus is a documentation website framework that uses Markdown and React.

Docusaurus supports frontmatter fields for documentation pages.

### Example

```markdown
---
id: markdown-basics
title: Markdown Basics
description: Learn the basics of Markdown.
sidebar_position: 1
---

# Markdown Basics

Markdown is a lightweight markup language.
```

### Common Docusaurus fields

| Field              | Description                        |
| ------------------ | ---------------------------------- |
| `id`               | Sets the document ID.              |
| `title`            | Sets the document title.           |
| `description`      | Sets the page description.         |
| `sidebar_position` | Sets the document's sidebar order. |
| `slug`             | Sets the document URL path.        |

Docusaurus supports additional fields. Use the official documentation to check which fields are supported and how they work.

### Important

Do not copy frontmatter fields from another documentation tool without checking compatibility.

For example, a field supported by MkDocs might not work in Docusaurus.

---

## 9. Understand frontmatter in MkDocs

MkDocs is another documentation tool that converts Markdown files into a documentation website.

MkDocs does not use the same built-in frontmatter system as Docusaurus for all page settings.

Some MkDocs themes and plugins support frontmatter. Their supported fields depend on the theme or plugin.

### Example

A MkDocs project can use YAML frontmatter when the configured tooling supports it.

```markdown
---
title: Markdown Basics
description: Learn the basics of Markdown.
---

# Markdown Basics
```

Whether these fields affect the generated page depends on your MkDocs configuration.

### Important distinction

Markdown is a document format. Frontmatter is a metadata convention. Docusaurus, MkDocs, and other tools decide which metadata fields they support.

Always check the documentation for the tool you use.

---

## 10. Validate your frontmatter

A frontmatter block can contain syntax errors. These errors can prevent your documentation website from building.

You should check your frontmatter before you publish a document.

### Step 1: Check the opening delimiter

The file should start with:

```yaml
---
```

Do not add text before the opening delimiter if your tool requires frontmatter at the beginning of the file.

### Step 2: Check the closing delimiter

The frontmatter block must end with:

```yaml
---
```

Example:

```markdown
---
title: Markdown Basics
---

# Markdown Basics
```

### Step 3: Check the colon

Every key-value field must use a colon.

Correct:

```yaml
title: Markdown Basics
```

Incorrect:

```yaml
title Markdown Basics
```

### Step 4: Check indentation

Use consistent indentation for nested values and lists.

Correct:

```yaml
tags:
  - markdown
  - documentation
```

### Step 5: Run your documentation build

If your project uses Docusaurus, open the terminal in the project folder.

Run:

```bash
npm run build
```

The build command checks your documentation project and generates the production website.

### Expected result

If your frontmatter and other project files are valid, the build completes successfully.

If the build fails, read the error message. It often identifies the file or line that contains the problem.

> **Note**
>
> The build command can report errors that are unrelated to frontmatter. Check the error details before changing your Markdown file.

---

## 11. Troubleshooting

### Problem 1: The page title is not displayed correctly

**Cause:** The `title` field might be missing, misspelled, or unsupported by the documentation tool.

**Solution:**

1. Open the Markdown file.
2. Check the frontmatter.
3. Confirm that the field is spelled correctly.
4. Check the documentation tool's supported fields.
5. Rebuild the website.

Example:

```yaml
---
title: Markdown Basics
---
```

---

### Problem 2: The website reports a YAML parsing error

**Cause:** The YAML syntax is invalid.

Common causes include:

* Missing colon.
* Incorrect indentation.
* Unclosed quotation marks.
* Incorrect list formatting.

**Solution:**

Review the frontmatter line by line.

Correct:

```yaml
---
title: Markdown Basics
description: Learn Markdown syntax.
---
```

Incorrect:

```yaml
---
title Markdown Basics
description: Learn Markdown syntax.
---
```

The `title` field is missing a colon.

---

### Problem 3: The frontmatter appears as visible text

**Cause:** The documentation tool might not recognize the frontmatter format, or the delimiters might be incorrect.

**Solution:**

1. Confirm that the frontmatter starts with `---`.
2. Confirm that the frontmatter ends with `---`.
3. Check that the block appears at the beginning of the file.
4. Confirm that your documentation tool supports the frontmatter format.
5. Rebuild the website.

---

### Problem 4: The sidebar order does not change

**Cause:** The documentation tool might not support `sidebar_position`, or the sidebar configuration might override the field.

**Solution:**

1. Confirm that you are using Docusaurus or another tool that supports the field.
2. Check the value:

```yaml
sidebar_position: 2
```

3. Review your sidebar configuration.
4. Rebuild the website.
5. Check the sidebar again.

---

### Problem 5: The URL does not change

**Cause:** The `slug` field might be unsupported or incorrectly configured.

**Solution:**

Check the field:

```yaml
slug: /markdown-basics
```

Then verify the documentation tool's slug configuration.

Do not assume that every Markdown website supports the same slug syntax.

---

### Problem 6: The build fails after adding a new field

**Cause:** The field might not be supported by your documentation tool.

**Solution:**

1. Remove the new field temporarily.
2. Run the build again.
3. If the build succeeds, check the documentation tool's frontmatter reference.
4. Add only supported fields.

---

## 12. Best practices

Follow these practices when you write frontmatter.

### Keep fields consistent

Use the same field names throughout your project.

For example:

```yaml
title: Introduction to Git
description: Learn the basics of Git.
```

Do not use different names for the same purpose without a clear reason.

### Use clear titles

Write titles that describe the document.

Good:

```yaml
title: Install Python
```

Less useful:

```yaml
title: Lesson 4
```

### Write useful descriptions

A description should explain what the reader will learn.

Good:

```yaml
description: Learn how to install Python on Windows.
```

Avoid descriptions that provide no useful information.

### Use supported fields

Check the documentation tool's reference before you add a field.

### Keep frontmatter near the top

Place frontmatter at the beginning of the Markdown file.

### Review before publishing

Check the syntax, values, and supported fields before you publish the document.

---

## 13. Practice exercise

Complete the following exercise in your Learning Hub project.

### Task

Create a file named:

```text
frontmatter-practice.md
```

Add this frontmatter:

```yaml
---
title: Introduction to Git
description: Learn the basic concepts of Git and version control.
sidebar_position: 4
tags:
  - git
  - version-control
  - beginner
---
```

Add the following Markdown content:

```markdown
# Introduction to Git

Git is a version control system that helps you track changes to files.
```

### Tasks to complete

* [ ] Create the Markdown file.
* [ ] Add the frontmatter.
* [ ] Add the heading and paragraph.
* [ ] Save the file.
* [ ] Check the YAML indentation.
* [ ] Run the documentation build.
* [ ] Confirm that the website displays the page correctly.

### Expected result

Your new page contains the title, description, sidebar position, and tags in its frontmatter.

The page content displays the heading and paragraph.

---

## 14. Knowledge check

Answer the following questions before you continue.

1. What is frontmatter?
2. Where do you place frontmatter in a Markdown file?
3. What do the three hyphens represent?
4. What is the purpose of the `title` field?
5. Why must you check whether a frontmatter field is supported by your documentation tool?
6. What is the difference between a string and a number in YAML?
7. How do you create a list in YAML?
8. What should you check if the website reports a YAML parsing error?
9. Why should you keep frontmatter consistent across your project?
10. Which command can you use to build a Docusaurus website?

---

## 15. Summary

In this lesson, you learned how to:

* Explain frontmatter and metadata.
* Create a frontmatter block.
* Use YAML key-value pairs.
* Add common fields such as `title` and `description`.
* Add numbers, Boolean values, dates, and lists.
* Understand the difference between Docusaurus and MkDocs frontmatter support.
* Validate frontmatter.
* Troubleshoot common errors.
* Apply best practices.

Frontmatter helps your documentation tools organize and display your Markdown files. When you use it correctly, you can control important page information without changing the main document content.

---

## Next lesson

**Markdown Images**

You will learn how to add images to Markdown documents, use relative paths, organize image files, and troubleshoot missing or incorrectly displayed images.
