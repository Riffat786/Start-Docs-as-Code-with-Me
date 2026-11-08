---
title: Claude Code
sidebar_position: 9
description: Learn how to use Claude Code in a Docs-as-Code project to draft, review, and update documentation safely, with human review before every commit.
---

# Claude Code

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Install Claude Code lesson in Module 2, and complete the AI Agents lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what Claude Code does in a documentation project.
- Start a Claude Code session from your project folder.
- Write a clear prompt by using the RTCCO framework.
- Create a project memory file that holds your writing standards.
- Review each change with Git before you commit it.
- Recognize tasks that need extra care, such as secrets and destructive commands.
- Apply a Docs-as-Code workflow to AI-assisted writing.

---

## Why Claude Code matters for technical writers

Claude Code works inside your project folder. It can read many files, explain them, and propose changes. For a writer, this saves time on repetitive work, such as reformatting tables or checking that a page follows the style guide.

Claude Code does not decide what is correct. You decide. Every change must pass your review.

> **Documentation Manager's Tip**
>
> Treat Claude Code as a fast drafting partner, not as the author of record. You remain responsible for the accuracy, tone, and approval of every page.

---

## Before you start

Make sure you have:

- Completed the Install Claude Code lesson in Module 2.
- An Anthropic account, and Claude Code installed on your computer.
- Visual Studio Code or Cursor, with the course repository open.
- Git installed, so that you can review changes with `git diff`.

:::note

**For beginners**

Claude Code runs in a terminal. You type a request, and it answers in the same window. It reads the files in the folder where you started it, so start it from your project folder.

:::

---

## What Claude Code can do in a documentation project

Use Claude Code for tasks that you can check easily. Use it with care for tasks that affect many pages.

| Task | Suitable for AI assistance? | Your check |
|---|---|---|
| Draft a new page from an outline | Yes | Check facts, examples, and terminology. |
| Reformat a table or a list | Yes | Compare the rendered page with the source. |
| Check a page against the style guide | Yes | Check each finding. Some findings can be wrong. |
| Rename a file and update its links | Use with care | Run `npm run build` to find broken links. |
| Change an API example | Use with care | Check the example against the OpenAPI contract. |
| Publish or deploy a site | No | Publishing needs a person to approve it. |

:::important

Claude Code does not know which facts in your project are approved. Check every product detail, version number, and API value against a source you trust, such as the OpenAPI contract or the release notes.

:::

---

## How-to: Start a session in your project folder

**Goal:** Start Claude Code so that it works on this project only.

**Step 1: Open a terminal in the project folder.**

In Visual Studio Code, select **Terminal**, then **New Terminal**. Check that the terminal path ends with `Start-Docs-as-Code-with-Me`.

**Step 2: Start Claude Code.**

```bash
claude
```

Expected result: Claude Code starts, and a prompt appears in the terminal. The session can read files in this folder.

**Step 3: Ask a simple question.**

Type this request, and press Enter:

```text
Summarize the structure of the docs/09-AI folder.
```

Expected result: Claude Code lists the files in the folder and describes what each one covers. It does not change any file.

:::warning

Start Claude Code from the project folder, not from your home folder. If you start it from a larger folder, it can read files that are not part of this project.

:::

---

## How-to: Write a clear prompt with RTCCO

**Goal:** Ask Claude Code for a specific result that you can review.

The RTCCO framework has five parts: Role, Task, Context, Constraints, and Output. The release note project in this repository uses the same structure for its reusable Claude skills.

Before (vague prompt):

```text
Improve the Claude Code page.
```

After (RTCCO prompt):

```text
Role: You are a technical writer who follows the Microsoft style guide.

Task: Review docs/09-AI/Claude-code.md, and list sentences that are not in simple technical English.

Context: The page teaches new technical writers how to use Claude Code in a Docs-as-Code project.

Constraints: Do not edit the file. Do not change any code blocks. Do not add facts that are not on the page.

Output: A numbered list. For each item, show the original sentence and a suggested rewrite.
```

**Result:** Claude Code returns a list that you can check line by line. Because the constraints say not to edit the file, the change stays under your control.

:::tip

Ask for a list before you ask for an edit. Review the list, choose the changes you want, and then ask for those changes only.

:::

---

## How-to: Create a project memory file

**Goal:** Give Claude Code your writing standards, so that you do not repeat them in every prompt.

Claude Code reads a file named `CLAUDE.md` in the project folder when a session starts. Use this file for rules that apply to the whole project.

Markdown source for a `CLAUDE.md` file:

````markdown
# Documentation standards

- Use simple technical English.
- Use sentence case for headings.
- Use the Microsoft style guide tone and voice.
- Start each lesson with a learning objectives section.
- Use callouts for notes, tips, important information, and warnings.
- Do not use real access tokens or secrets in examples. Use placeholders such as `<access-token>`.
- Put key terms in the glossary, not at the end of a lesson.
````

**Result:** Each new session starts with these rules in place. Your prompts can focus on the task, such as "Draft the Postman lesson", and Claude Code follows the standards.

:::note

Keep `CLAUDE.md` short. A long memory file costs more to read in every session, and it is harder for the team to maintain. Review changes to this file in a pull request, like any other documentation change.

:::

---

## How-to: Review a change before you commit

**Goal:** Check every change that Claude Code makes before it reaches the repository.

**Step 1: See which files changed.**

```bash
git status
```

Expected result: The list shows each modified file. Check that only the files you expected are listed.

**Step 2: Read the changes.**

```bash
git diff docs/09-AI/Claude-code.md
```

Expected result: The output shows lines removed in red and lines added in green. Read each change, and check facts, links, and code blocks.

**Step 3: Check that the site builds.**

```bash
npm run build
```

Expected result: The build completes with `[SUCCESS]`. Fix any error before you commit.

**Step 4: Commit only what you reviewed.**

```bash
git add docs/09-AI/Claude-code.md
git commit -m "Add Claude Code lesson"
```

:::important

Never commit a change that you have not read. If you cannot explain a change, do not commit it. Ask a peer writer or a technical reviewer to check it.

:::

---

## Control permissions and secrets

Claude Code asks for permission before it runs commands or changes files. Read each request before you approve it.

| Action | Recommendation |
|---|---|
| Read a file | Usually safe in this project. |
| Edit a file | Approve only after you have reviewed the proposed change. |
| Run a command that deletes files | Decline unless you are sure. Ask for a safer option. |
| Run a build or preview command | Usually safe. |
| Open a file that contains secrets | Do not do this. Keep secrets out of the project folder. |

:::warning

Never paste a real token, password, or key into a Claude Code prompt. Anything in a prompt can be stored in the session history. Use a placeholder, and keep real secrets in a secure location outside the repository.

:::

---

## Slash commands and reusable workflows

Claude Code supports slash commands. A slash command is a short name that starts a saved request, such as `/review`. Teams can create their own slash commands to repeat a workflow.

The AI Release Note Generator in this repository uses a six-command workflow. Each command performs one step, such as `/fetch-release-data` or `/analyze-release-data`. The case study describes how each step creates the input for the next step. See the AI Agents lesson for the full table.

For a documentation team, a slash command could check a page against the style guide, or produce a review checklist. Keep each command small and specific, so that it is easy to review.

---

## Docs-as-Code workflow for an AI-assisted page

Use this workflow when you write or update a page with Claude Code.

```text
Create a branch
    ↓
Start a Claude Code session
    ↓
Draft or update the page
    ↓
Review the changes with git diff
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Peer review and approval
    ↓
Publish
```

**Step 1: Create a branch.**

```bash
git switch -c docs/claude-code-lesson
```

**Step 2: Work in the session.**

Start Claude Code, and follow the RTCCO and review steps in this lesson.

**Step 3: Push and open a pull request.**

```bash
git push -u origin docs/claude-code-lesson
```

Open a pull request on GitHub. Describe what you asked Claude Code to do, and what you checked.

:::note

Mention in the pull request that AI assistance was used, and list the parts that you checked. Reviewers need to know where to look.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Claude Code starts from a folder that is too large. | It reads files that are not part of the project. | Start the session from the project folder. |
| The prompt has no constraints. | The changes go beyond what you asked for. | Add a Constraints line. Ask for a list before an edit. |
| A change is committed without a review. | Errors reach the published site. | Run `git diff` and `npm run build` before each commit. |
| A real token is pasted into a prompt. | The secret is stored in the session history. | Use a placeholder. Revoke any secret that was shared. |
| The writing standards are repeated in every prompt. | Prompts become long, and the standards drift. | Store the standards in `CLAUDE.md`. |
| A fact is accepted because the output sounds confident. | The page contains an error. | Check each fact against a trusted source. |

---

## Summary

In this lesson, you learned that:

- Claude Code works inside your project folder and can read many files.
- Use it for tasks that you can check, such as drafting, reformatting, and style checks.
- The RTCCO framework helps you write clear prompts.
- `CLAUDE.md` stores project rules for every session.
- Review every change with `git diff` and `npm run build` before you commit.
- Never place real secrets in a prompt or a file.

The aim is simple:

**Use Claude Code to save time, and keep the review, the facts, and the approval with people.**

---

## Practice exercise

Use this repository.

1. Start Claude Code from the project folder. Ask it to summarize the `docs/09-AI` folder.
2. Write an RTCCO prompt that asks for a list of sentences in `docs/09-AI/Claude-code.md` that could be simpler. Include a constraint that the file must not change.
3. Review the list. Choose two suggestions that you agree with, and ask Claude Code to apply only those two changes.
4. Run `git diff` and check the changes line by line.
5. Run `npm run build`, and fix any error before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is Claude Code?</strong></summary>

Claude Code is an AI coding assistant that runs in a terminal. It reads the files in the folder where you start it, and it can propose or make changes to those files.

</details>

<details>
<summary><strong>2. Why should you start Claude Code from the project folder?</strong></summary>

It reads the files in the folder where you start it. Starting from a larger folder can expose files that are not part of the project.

</details>

<details>
<summary><strong>3. What does each part of the RTCCO framework mean?</strong></summary>

Role, Task, Context, Constraints, and Output. Together they tell the assistant who it is, what to do, what background it needs, what it must not do, and what the result should look like.

</details>

<details>
<summary><strong>4. What is the purpose of a Constraints line in a prompt?</strong></summary>

It limits what the assistant may do. For example, "Do not edit the file" keeps the change under your control.

</details>

<details>
<summary><strong>5. What does CLAUDE.md contain?</strong></summary>

Project rules, such as writing standards, that Claude Code reads when a session starts. It stores rules that apply to the whole project.

</details>

<details>
<summary><strong>6. Which two commands help you review a change before you commit it?</strong></summary>

`git diff` shows the changes line by line. `npm run build` checks that the site still builds.

</details>

<details>
<summary><strong>7. Why must you never paste a real token into a prompt?</strong></summary>

A prompt can be stored in the session history. A token in the history is exposed, and it must be revoked.

</details>

<details>
<summary><strong>8. Which tasks are not suitable for AI assistance without extra care?</strong></summary>

Tasks that change many pages, such as renaming files, or tasks that change API values. Publishing or deploying a site needs a person to approve it.

</details>

<details>
<summary><strong>9. What is a slash command?</strong></summary>

A short name that starts a saved request. Teams use slash commands to repeat a workflow, such as the six-command workflow in the AI Release Note Generator.

</details>

<details>
<summary><strong>10. What is the main goal of using Claude Code in documentation?</strong></summary>

The goal is to save time on repetitive work, while the facts, review, and approval stay with people.

</details>

---

## Next lesson

Continue to **Commands**. You will learn how to create and use commands to repeat common documentation tasks.
