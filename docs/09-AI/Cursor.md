---
title: Cursor
sidebar_position: 11
description: Learn how to use Cursor, an AI-enabled code editor, to write, review, and preview documentation in a Docs-as-Code project, with human review before every commit.
---

# Cursor

> **Lesson level:** Beginner
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Verify Installation lesson in Module 1, and the Claude Code lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what Cursor is, and how it compares with Visual Studio Code.
- Identify the main areas of the Cursor interface for documentation work.
- Open a project folder, and preview a Markdown file.
- Use the AI chat to explain a page, with a clear prompt.
- Review an AI-proposed edit before you accept it.
- Run project commands from the integrated terminal.
- Protect private content when you use AI features.
- Apply a Docs-as-Code workflow to AI-assisted editing.

---

## Why Cursor matters for technical writers

Cursor is a code editor. It looks and works like Visual Studio Code, and it adds AI features. You can use it to edit Markdown, explain a page, and propose changes across files.

These AI features save time. They also need the same care as any other tool. The AI proposes changes, and you approve them.

> **Documentation Manager's Tip**
>
> Use the AI to find problems and suggest wording. Make the final decision yourself. A proposal that reads well can still be wrong.

---

## Before you start

Make sure you have:

- Completed the Verify Installation lesson, including Step 10, Verify Cursor.
- An account for the AI features, if your team requires one.
- The course repository cloned to your computer.
- Node.js installed, so that you can run project commands.

:::note

**For beginners**

Cursor opens files in the same way as Visual Studio Code. If you know VS Code, most of the screens and shortcuts will look familiar.

:::

---

## Cursor and Visual Studio Code

Many writers use both tools. The table shows the main differences for documentation work.

| Feature | Visual Studio Code | Cursor |
|---|---|---|
| Markdown editing and preview | Yes | Yes |
| Integrated terminal | Yes | Yes |
| Git source control | Yes | Yes |
| Extensions | Yes | Yes, most VS Code extensions work |
| AI chat about your files | Through extensions | Built in |
| AI edits across files | Through extensions | Built in |

The lessons in this course use either tool. The steps in this lesson apply to Cursor.

---

## The Cursor interface for documentation work

| Area | Use it to |
|---|---|
| Explorer | Browse the project folders, such as `docs/09-AI` |
| Editor | Read and edit Markdown files |
| Integrated terminal | Run commands such as `npm run build` |
| Source Control | Review changed files before you commit |
| AI chat | Ask questions about a file, or request a proposed edit |

:::tip

Open only the folder that you need. A smaller folder gives the AI less content to read, and it helps you avoid private files.

:::

---

## How-to: Open the project and preview a Markdown file

**Goal:** Open the project in Cursor, and see how a Markdown page looks when it is rendered.

**Step 1: Open the project folder.**

Select **File**, then **Open Folder**. Select `Start-Docs-as-Code-with-Me`.

**Step 2: Open a Markdown file.**

In the Explorer, open `docs/09-AI/Cursor.md`.

**Step 3: Open the preview.**

Press `Ctrl+Shift+V` on Windows. Select the preview tab if it opens in a separate pane.

**Result:** The preview shows the rendered headings, tables, and callouts. Compare it with the source. Check that the tables and code blocks look correct.

:::note

The preview shows basic Markdown. Docusaurus adds styles and components, so the site can look different. Use `npm run start` to check the final page.

:::

---

## How-to: Ask the AI to explain a page

**Goal:** Get a short summary of a page before you edit it.

Use the AI chat, and include the file in the request. Use the RTCCO structure from the Claude Code lesson.

Before (vague prompt):

```text
What does this page say?
```

After (RTCCO prompt):

```text
Role: You are a technical writer who reviews Docs-as-Code pages.

Task: Summarize the learning objectives and the main sections of this page.

Context: The page is a lesson for new technical writers.

Constraints: Do not change the file. Do not add facts that are not on the page.

Output: A bulleted list of five points or fewer.
```

**Result:** The AI returns a short summary that you can check against the page. The Constraints line keeps the file unchanged.

---

## How-to: Review an AI-proposed edit

**Goal:** Apply a change only after you check it.

**Step 1: Ask for a specific change.**

For example: "In this page, replace the word 'utilize' with 'use' in the body text. Do not change code blocks."

**Step 2: Read the proposed change.**

Cursor shows the proposed change in the editor. Check each line that changed. Make sure that code blocks, links, and placeholders are unchanged.

**Step 3: Accept or reject.**

Accept the change only if it is correct. Reject it if it changes meaning, tone, or any technical detail.

**Step 4: Check the change in Git.**

Open **Source Control**, and select the file. Check the differences before you commit.

**Result:** The file contains only the change that you approved.

:::important

AI tools can change text in many places at once. Always check the complete set of changes in Source Control, not only the part that you saw in the editor.

:::

---

## How-to: Run a project command from the terminal

**Goal:** Build the site from inside Cursor.

**Step 1: Open the integrated terminal.**

Press `` Ctrl+` `` on Windows. A terminal opens at the bottom of the window. Check that the path ends with `Start-Docs-as-Code-with-Me`.

**Step 2: Run the build.**

```bash
npm run build
```

**Step 3: Check the result.**

Expected result: The output ends with `[SUCCESS]`.

:::note

The Commands lesson explains each npm script. Use `npm run` to list the scripts before you run one.

:::

---

## Protect private content

AI features can send the text of the files you open to the AI service. Documentation often contains information that should not leave your organization, such as unreleased features or internal names.

| Rule | Why it matters |
|---|---|
| Do not open files that contain secrets, such as `.env` files. | A secret sent to an AI service can be exposed. |
| Do not paste real tokens into the AI chat. | The chat history can keep the text. |
| Follow your organization's AI policy. | Some content may be restricted. |
| Check the privacy settings for your account. | Settings control whether your content can be used for training. |
| Ask before you share unreleased content. | Only approved people should see it. |

:::warning

Check the privacy and data settings in Cursor before you use AI features with internal content. Settings can change, so confirm them in the current Cursor documentation.

:::

---

## Docs-as-Code workflow with Cursor

Use this workflow when you edit a page with Cursor.

```text
Create a branch
    ↓
Open the project folder
    ↓
Edit the page, with AI help if needed
    ↓
Review each change
    ↓
Run npm run build
    ↓
Check the changes in Source Control
    ↓
Commit, push, and open a pull request
    ↓
Peer review
```

**Step 1: Create a branch.**

```bash
git switch -c docs/cursor-lesson
```

**Step 2: Commit the reviewed file.**

```bash
git add docs/09-AI/Cursor.md
git commit -m "Add Cursor lesson"
git push -u origin docs/cursor-lesson
```

Open a pull request on GitHub. Describe which parts you wrote, which parts the AI suggested, and what you checked.

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Accepting an AI edit without reading the full change. | Unwanted changes reach the file. | Review each change in Source Control before you commit. |
| Opening the whole drive as the project. | The AI reads files that are not part of the project. | Open only the project folder. |
| Pasting a real token into the AI chat. | The secret can be stored in the chat history. | Use a placeholder. Revoke any secret that was shared. |
| Using a vague prompt. | The AI changes more than you wanted. | Use the RTCCO structure, with a Constraints line. |
| Trusting a summary without checking it. | The summary can include errors. | Check each point against the page. |
| Committing without a build. | A broken page reaches the pull request. | Run `npm run build` before you commit. |

---

## Summary

In this lesson, you learned that:

- Cursor is an AI-enabled editor that works like Visual Studio Code.
- The AI chat can explain a page, and it can propose edits.
- Review every proposed edit, and check the complete set of changes in Source Control.
- Use the integrated terminal to run project commands.
- Protect secrets and private content when you use AI features.
- Build the site, and review the pull request before you publish.

The aim is simple:

**Use Cursor to work faster, and keep the review and the approval with you.**

---

## Practice exercise

Use this repository.

1. Open the project folder in Cursor. Open `docs/09-AI/Cursor.md`, and preview it.
2. Use the AI chat with an RTCCO prompt to summarize the page. Check the summary against the page.
3. Ask for one specific wording change, with a Constraints line. Review the proposed change, and accept it only if it is correct.
4. Open Source Control, and check the changed lines.
5. Run `npm run build` in the integrated terminal, and confirm that the output ends with `[SUCCESS]`.

---

## Knowledge check

<details>
<summary><strong>1. What is Cursor?</strong></summary>

Cursor is a code editor with built-in AI features. It works like Visual Studio Code, and it can explain files and propose edits.

</details>

<details>
<summary><strong>2. What is the main difference between Cursor and Visual Studio Code for this course?</strong></summary>

Cursor includes AI chat and AI edits across files as built-in features. Visual Studio Code provides those features through extensions.

</details>

<details>
<summary><strong>3. Which shortcut opens the Markdown preview on Windows?</strong></summary>

`Ctrl+Shift+V`.

</details>

<details>
<summary><strong>4. Why should you open only the project folder?</strong></summary>

The AI reads the files that are open or in the folder. A smaller folder limits what the AI can read, and it helps you avoid private files.

</details>

<details>
<summary><strong>5. Why should you use a Constraints line in an AI request?</strong></summary>

It limits what the AI may do. For example, "Do not change the file" keeps the change under your control.

</details>

<details>
<summary><strong>6. Where should you check the full set of AI-proposed changes?</strong></summary>

In Source Control. Check every changed file and line before you commit.

</details>

<details>
<summary><strong>7. Why should you not paste a real token into the AI chat?</strong></summary>

The chat history can keep the text. A token in the history is exposed, and it must be revoked.

</details>

<details>
<summary><strong>8. Which file should you not open with AI features?</strong></summary>

A file that contains secrets, such as a `.env` file.

</details>

<details>
<summary><strong>9. What should you run before you commit a documentation change?</strong></summary>

`npm run build`. It confirms that the site builds without errors.

</details>

<details>
<summary><strong>10. What is the main goal of using Cursor in documentation work?</strong></summary>

The goal is to work faster with AI help, while the review, the facts, and the approval stay with people.

</details>

---

## Next lesson

Continue to **Hooks**. You will learn how hooks run automated actions in response to events.
