---
title: Content migration
sidebar_position: 7
description: Learn how to plan, convert, validate, and cut over documentation moved from another system into a Docs-as-Code project, with redirects, link checks, and AI support that a writer reviews.
---

# Content migration

> **Lesson level:** Intermediate
>
> **Time to complete:** 40–50 minutes
>
> **Prerequisites:** Complete the Link checking and Validation lessons in Module 11 · Automation, and the Terminology management lesson in this module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Plan a content migration with an inventory, a mapping, and a decision for each page.
- Convert source content to Markdown, and keep its meaning and structure.
- Keep the history of moved files with `git mv`.
- Find and fix links that a move or rename breaks.
- Plan redirects so that old addresses still reach the new pages.
- Use AI for conversion work, with a comparison step that a writer checks.
- Document the migration so that the team can trace each page to its source.

---

## Why content migration matters for technical writers

Many documentation sets start in a wiki, a word processor, a help authoring tool, or an older site. Moving that content into a Docs-as-Code project brings version control, review, and automated checks. It also creates risk. Pages can lose content, links can break, and readers can land on old addresses.

A migration done well is a planned change. A migration done quickly often leaves gaps that readers find months later.

> **Documentation Manager's Tip**
>
> Do not start by moving files. Start by listing every page, deciding what happens to it, and agreeing on how you will know the migration worked.

---

## Before you start

Make sure you have:

- Completed the Link checking and Validation lessons in Module 11 · Automation.
- Completed the Terminology management lesson in this module.
- Read access to the source system, and an export of its content.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the build.

---

## The four phases of a migration

Each phase has a clear output. Do not start a phase until the previous one is complete.

| Phase | Question it answers | Output |
|---|---|---|
| Inventory | What do we have? | A list of every page, with its owner and last update |
| Mapping | Where does each page go, or does it go at all? | A decision for each page: move, merge, rewrite, or retire |
| Conversion | Does the new page say the same thing? | Markdown files, checked against the source |
| Cutover | Do readers reach the right page? | Live pages, redirects, and a verified link check |

---

## Phase 1: Inventory the source

Export the source content, and record each page in a table. The table becomes the migration log.

Markdown source for a migration log:

````markdown
### Migration log: Setup guides

| Source page | Source owner | Last updated | Target path | Decision | Status |
|---|---|---|---|---|---|
| Install guide (wiki) | Add name | Add date | docs/01-Environment-Setup/Install-Git.md | Merge with the existing page | Not started |
| Old FAQ (help tool) | Add name | Add date | Not decided | Retire after review | Not started |
````

**Result:** Every source page has an entry, with an owner and a decision. Pages without an owner are a risk, so resolve them first.

---

## Phase 2: Map each page

For each page, choose one decision. Use this table to decide.

| Decision | Use it when | Example |
|---|---|---|
| Move | The page is current and fits the structure | A current install guide |
| Merge | Two pages cover the same task | Two versions of one setup guide |
| Rewrite | The content is current, but the writing does not follow the style guide | A page that uses long, passive sentences |
| Retire | The content is out of date, or no reader uses it | A page for a feature that no longer exists |

:::important

Retire a page only after the owner agrees, and after you check the traffic or the support tickets. Removing a page without a redirect can break links from other sites and from earlier releases.

:::

---

## Phase 3: Convert the content

Conversion changes the format, not the meaning. Work one page at a time, and compare the result with the source.

### Keep the history of a moved file

When you move a Markdown file in this project, use `git mv`. Git then records the move, and the file history stays with the file.

```bash
git mv docs/old-folder/Install.md docs/01-Environment-Setup/Install.md
```

Expected result: Git stages the move. The file keeps its history when you commit it.

### Find the links that a move breaks

After you move or rename a file, search for its old name. Use `git grep` from the project folder.

```bash
git grep -n "old-folder/Install"
```

Expected result: Each line that points to the old path, with its file name and line number. Update each link to the new path.

:::tip

A real example from this project: a broken anchor warning pointed to a path that used `Docs-as-Code-Workflow`, while the folder is named `05-Docs-as-Code-Workflow`. The numbered folder name is not part of the page address, so a link that uses the folder name breaks. Check the page address that the build reports, not only the folder name.

:::

---

## Phase 4: Plan redirects and cut over

A redirect sends a reader from an old address to the new page. Without one, the old address shows an error page.

Plan redirects in a table before you cut over.

| Old address | New address | Reason |
|---|---|---|
| `/docs/old-install` | `/docs/01-Environment-Setup/Install-Git` | Page moved and renamed |
| `/docs/old-faq` | `/docs/troubleshooting` | Page merged into another |

Add redirects with the approved Docusaurus method for your project, and confirm the method with the current Docusaurus documentation. Test each old address after the build.

Cut over one section at a time. Verify each section before the next one moves.

---

## Using AI for conversion work

AI can convert content from one format to Markdown, and it can suggest a structure. Use it with a comparison step, because conversion can silently drop content.

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a technical writer who converts source content into Markdown for a Docs-as-Code project.

Task: Convert the source text below into Markdown. Keep every step, warning, note, and table row.

Context: The page will be published on a Docusaurus site. Use the heading levels and table format from the example lessons.

Constraints:
- Do not add facts that are not in the source.
- Do not remove a step, warning, or note.
- Keep code, commands, file names, and product names unchanged.
- List each part of the source that you could not convert, and explain why.

Output: The Markdown, followed by a list titled Not converted.
```

**Result:** The AI returns Markdown and a list of parts that it could not convert. A writer compares each part with the source before the page moves.

:::warning

AI can drop a table row, merge two steps, or change a number without warning. Never accept a converted page without a comparison. Keep the source file until the converted page is approved.

:::

---

## How-to: Compare a converted page with its source

**Goal:** Confirm that the converted page keeps the content, the order, and the meaning of the source.

Use this checklist.

| Check | Question | Example failure |
|---|---|---|
| Count | Are the number of steps, warnings, and tables the same? | A warning that disappeared |
| Order | Do the steps appear in the same order? | Step 4 before step 3 |
| Numbers | Do version numbers, dates, and limits match? | A timeout changed from 30 to 300 seconds |
| Links | Do internal links point to the new pages? | A link to the old wiki |
| Images | Does each image have its file and alt text? | An image that is missing after conversion |
| Terms | Do the terms match the glossary? | Two names for one feature |

When the checklist passes, build the site, and run the link checks from the Link checking lesson.

```bash
npm run build
```

---

## Docs-as-Code workflow for a migration

Use this workflow for each section you move.

```text
Inventory and map the section
    ↓
Create a branch
    ↓
Convert the pages, and use git mv for moved files
    ↓
Compare each page with its source
    ↓
Update links, and plan redirects
    ↓
Run npm run build and the link checks
    ↓
Commit, push, and open a pull request
    ↓
Owner review of the content
    ↓
Merge, then verify the old and new addresses
```

**Step 1: Create a branch.**

```bash
git switch -c docs/content-migration-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Content-Migration.md
git commit -m "Add content migration lesson"
git push -u origin docs/content-migration-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The migration starts without an inventory. | Pages are lost, and no one knows what is missing. | Build the migration log before you move any file. |
| A file is copied instead of moved with `git mv`. | The history is split, and old copies remain. | Use `git mv`, and delete the old copy after review. |
| Links are not updated after a move. | Readers reach error pages. | Search for old paths with `git grep`, and update each link. |
| Old addresses have no redirect. | Bookmarks, search results, and other sites break. | Plan redirects before the cutover. |
| AI output is accepted without a comparison. | Content, numbers, or warnings change silently. | Compare each page with its source using the checklist. |
| The source is deleted before the migration is verified. | Content cannot be recovered if a problem is found later. | Keep the source until the migration is approved. |

---

## Summary

In this lesson, you learned that:

- A migration has four phases: inventory, mapping, conversion, and cutover.
- Each page gets a decision: move, merge, rewrite, or retire.
- Use `git mv` to keep the history of moved files.
- Search for old paths after each move, and update each link.
- Plan redirects so that old addresses still reach the right pages.
- Compare each converted page with its source, because AI can drop content silently.

The aim is simple:

**Move the content without losing its meaning, its links, or its readers.**

---

## Practice exercise

Use this repository.

1. Create a migration log for three pages in `docs/09-AI`. Include the source path, the target path, the decision, and the status for each page.
2. Run `git grep -n "Docs-as-Code-Workflow"` from the project folder. Record each line that uses the old folder name.
3. Choose one page. Write a short plan for the redirect, with the old address, the new address, and the reason.
4. Use the comparison checklist on one page from `docs/09-AI`, using a copy of the page as the source. Record one check that you would fail.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What are the four phases of a content migration?</strong></summary>

Inventory, mapping, conversion, and cutover.

</details>

<details>
<summary><strong>2. Why should you start a migration with an inventory?</strong></summary>

It shows every page, its owner, and its state. Without it, pages can be lost, and nobody knows what is missing.

</details>

<details>
<summary><strong>3. What are the four decisions for a page?</strong></summary>

Move, merge, rewrite, and retire.

</details>

<details>
<summary><strong>4. Why should a page be retired only after the owner agrees?</strong></summary>

Removing a page without the owner's agreement can remove content that readers still need. Check traffic and support tickets as well.

</details>

<details>
<summary><strong>5. Why use `git mv` instead of copying a file?</strong></summary>

`git mv` records the move, so the file keeps its history. A copy splits the history and leaves an old file behind.

</details>

<details>
<summary><strong>6. How do you find the links that a move breaks?</strong></summary>

Search the repository for the old path with `git grep`, then update each link that points to it.

</details>

<details>
<summary><strong>7. What is a redirect?</strong></summary>

A redirect sends a reader from an old address to the new page, so that bookmarks and links still work.

</details>

<details>
<summary><strong>8. Why must a converted page be compared with its source?</strong></summary>

Conversion can drop a row, merge steps, or change a number without any warning.

</details>

<details>
<summary><strong>9. When should the source content be deleted?</strong></summary>

Only after the migration is approved and verified, because the source is the only copy if a problem is found later.

</details>

<details>
<summary><strong>10. What is the main goal of a content migration?</strong></summary>

The goal is to move the content without losing its meaning, its links, or its readers.

</details>

---

## Next lesson

Continue to **Release notes**. You will learn how to draft release notes from change data, with AI support and a human approval step.
