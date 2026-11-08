---
title: Link checking
sidebar_position: 4
description: Learn how to find and fix broken internal links, anchors, and external links, using the build settings and real examples from this project.
---

# Link checking

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the CI-CD lesson, and the Deployment lesson in Module 8 · Docusaurus.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain the difference between internal links, anchors, and external links.
- Explain how the `onBrokenLinks` and `onBrokenAnchors` settings treat each kind of link.
- Read a broken-link error or warning in the build output.
- Find and fix a broken link, using a real example from this project.
- Describe the limits of a build check, including external links.
- Document a link check so that other writers know what it covers.
- Use a review step to check links that a build cannot test.

---

## Why link checking matters for technical writers

A broken link sends a reader to an error page. It also tells the reader that the documentation is not maintained. Links break when a file moves, a heading is renamed, or a site changes its address.

Documentation changes often. A link check finds broken links before readers do.

> **Documentation Manager's Tip**
>
> Treat a broken link as a defect, not as a cosmetic problem. A reader who hits an error page on a setup step may stop the whole task.

---

## Before you start

Make sure you have:

- Completed the CI-CD lesson in this module.
- Completed the Deployment lesson in Module 8 · Docusaurus.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the build.

:::note

**For beginners**

A link has two parts: the text that the reader sees, and the address it points to. An address can be a page, a file, a heading on a page, or a web address.

:::

---

## Three kinds of links

Each kind of link is checked in a different way.

| Kind | Example | What it points to | How it is checked |
|---|---|---|---|
| Internal link | `[Install Git](../01-Environment-Setup/Install-Git.md)` | A page or file in this site | The build checks that the file exists |
| Anchor | `[Troubleshooting](#troubleshooting)` | A heading on the same page or another page | The build checks that the heading exists |
| External link | `[GitHub](https://github.com)` | A page on another website | Not checked by default |

:::important

The build checks internal links and anchors. It does not check external links by default. A website you link to can change or disappear without any build error.

:::

---

## How the build treats broken links

This project sets two options in `docusaurus.config.ts`.

| Setting | Current value | What it does |
|---|---|---|
| `onBrokenLinks` | `'throw'` | Stops the build when an internal link is broken |
| `onBrokenAnchors` | Not set (default: warn) | Reports a broken anchor, and the build still succeeds |

The first setting is strict. A broken internal link fails the build, so the change cannot be published. The second setting is not strict. A broken anchor shows a warning, and the build completes.

:::warning

Because `onBrokenAnchors` only warns, a broken anchor can reach readers. Read every warning in the build output, and fix it before you merge the change.

:::

---

## Real example: a broken anchor in this project

When this project was built, the output reported a broken anchor:

```text
[WARNING] Docusaurus found broken anchors!

- Broken anchor on source page path = /docs/Docs-as-Code-Workflow/documentation-lifecycle:
   -> linking to #troubleshooting
```

The page links to `#troubleshooting`, but the page has no heading that creates that anchor. The build still succeeds, so the broken link is easy to miss.

**How to fix it:**

1. Find the link in `documentation-lifecycle.md`.
2. Check whether the target heading exists, and whether its text creates the anchor `troubleshooting`.
3. Either add the heading, or change the link to point to a heading that exists.
4. Run the build again, and confirm that the warning is gone.

**Result:** The warning disappears, and the link goes to the right section.

---

## Real example: links that broke during this project

The module pages also had broken links that the build reported. Each one shows a common cause.

| Problem | Cause | Fix |
|---|---|---|
| A link pointed to a file that did not exist | The target file was not created, or was renamed | Point the link to the existing file, or remove the link |
| A web address was written without `https://` | Docusaurus treated it as a page in the site | Add the protocol, such as `https://` |
| A link pointed to a template file | A sample text was copied into the page as a real link | Remove the link, or describe the file in words |

:::tip

When you rename or move a file, search the repository for its old name before you commit. A search finds the links that the rename breaks.

:::

---

## How-to: Read a broken-link message

**Goal:** Find the file and the link that the build reports.

**Step 1: Run the build.**

```bash
npm run build
```

**Step 2: Find the message.**

Look for `[ERROR]` for a broken internal link, or `[WARNING]` for a broken anchor. The message names the page that contains the link, and the target that is missing.

**Step 3: Open the source page.**

Use the source path in the message to find the Markdown file. The path is based on the URL, so look for the matching file in the `docs` folder.

**Step 4: Fix the link.**

Correct the path, the file name, or the anchor. Run the build again.

**Result:** The message disappears, and the build reports no broken links for that page.

---

## How-to: Document a link check

**Goal:** Describe what a link check covers, so that writers know what they still need to check by hand.

Markdown source:

````markdown
### Link check

| Item | Description |
|---|---|
| Internal links | Checked by the build. A broken link fails the build. |
| Anchors | Checked by the build. A broken anchor shows a warning. |
| External links | Not checked by the build. Check them during review. |
| Reviewer | Name the person who checks external links before release |
| Last checked | Add the date of the last manual check |
````

**Result:** The reader knows which links the build checks, which ones need a manual check, and who is responsible.

---

## Check external links

External links need a separate check. Some teams add a link checker as a workflow step. The example below is illustrative. Test it on a branch before you add it to the main workflow.

```yaml
      - name: Check external links
        uses: lycheeverse/lychee-action@v2
        with:
          args: --no-progress 'docs/**/*.md'
```

**Result:** The step reports external links that do not respond. Review each report, because a site can block automated checks, or be slow to respond.

:::warning

An external link checker can fail for reasons that are not your fault, such as a site that is down for maintenance. Treat each failure as a question, not as an automatic error. Check the link in a browser before you change it.

:::

---

## Docs-as-Code workflow for link checks

Use this workflow for every change that adds or moves a link.

```text
Create a branch
    ↓
Make the content change
    ↓
Run npm run build, and read every warning
    ↓
Search for old file names if you moved a file
    ↓
Check external links in a browser
    ↓
Commit, push, and open a pull request
    ↓
Peer review of the links
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/link-checking-lesson
```

**Step 2: Build the site, and read every warning.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/Link-Checking.md
git commit -m "Add link checking lesson"
git push -u origin docs/link-checking-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The build warning about an anchor is ignored. | The broken anchor reaches readers. | Read every warning, and fix each one before you merge. |
| A file is renamed, but its links are not updated. | Readers hit an error page. | Search for the old file name, and update each link. |
| An external link is assumed to be correct. | A dead site is linked as if it works. | Check external links in a browser during review. |
| A web address is written without a protocol. | The link is treated as a page in the site. | Add `https://` to the address. |
| A link is copied from a template and left unchanged. | The link points to a placeholder. | Replace the placeholder with a real address, or remove the link. |

---

## Summary

In this lesson, you learned that:

- Internal links, anchors, and external links are checked in different ways.
- This project fails the build on a broken internal link, and warns on a broken anchor.
- The build does not check external links by default.
- Read every warning in the build output, and fix each one.
- Search for old file names when you move a file.
- Check external links during review, and document who is responsible.

The aim is simple:

**Make sure every link in the documentation leads readers where they expect to go.**

---

## Practice exercise

Use this repository.

1. Run `npm run build`. Record each warning about a broken anchor, or confirm that there are none.
2. Open `docs/04-GitHub/Actions.md`. Find one internal link, and check that its target file exists.
3. Choose one external link in any page. Open it in a browser, and record whether it works.
4. Write a link check table for a page you wrote, using the format in this lesson. Name a reviewer.
5. Run `npm run build` again after any change, and fix any error before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is an internal link?</strong></summary>

A link to a page or file within the documentation site. The build checks that the target exists.

</details>

<details>
<summary><strong>2. What is an anchor?</strong></summary>

A link to a heading on a page, written with a `#` symbol. The build checks that the heading exists.

</details>

<details>
<summary><strong>3. Does the build check external links by default?</strong></summary>

No. External links need a separate check, such as a link checker step in a workflow, or a manual review.

</details>

<details>
<summary><strong>4. What does `onBrokenLinks: 'throw'` do?</strong></summary>

It stops the build when an internal link is broken. The change cannot be published until the link is fixed.

</details>

<details>
<summary><strong>5. Why is a broken anchor a risk even though the build succeeds?</strong></summary>

The default setting only warns about broken anchors. The build completes, so the broken anchor can reach readers unless someone reads the warning.

</details>

<details>
<summary><strong>6. What should you do after you move a file?</strong></summary>

Search the repository for the old file name, and update each link that points to it.

</details>

<details>
<summary><strong>7. Why must a web address include `https://`?</strong></summary>

Without the protocol, Docusaurus treats the address as a page in the site, and the link breaks.

</details>

<details>
<summary><strong>8. Why should you not treat every external link failure as an error?</strong></summary>

A site can be down for maintenance, or block automated checks. Check the link in a browser before you change it.

</details>

<details>
<summary><strong>9. Where is the link check setting for internal links in this project?</strong></summary>

In `docusaurus.config.ts`, as the `onBrokenLinks` setting.

</details>

<details>
<summary><strong>10. What is the main goal of link checking?</strong></summary>

The goal is to make sure every link leads readers where they expect to go, and that a person checks the links that a build cannot test.

</details>

---

## Next lesson

Continue to **Publishing**. You will learn how a reviewed change moves from the repository to the live site.
