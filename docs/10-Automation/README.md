---
title: Automation overview
sidebar_label: Overview
sidebar_position: 1
description: Learn how automation reduces repetitive documentation work, which checks this project already runs automatically, and how each lesson in this module builds on them.
---
![Start Docs-as-Code with Me logo](/img/logo-horizontal.svg)
# Module 11 · Automation

> **Lesson level:** Beginner
>
> **Time to complete:** 20–25 minutes
>
> **Prerequisites:** Complete Module 10 · AI.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what documentation automation is, and what it is not.
- Identify tasks that are good candidates for automation.
- Describe the four levels of automation used in a Docs-as-Code project.
- Find the automated checks that already run in this repository.
- Explain how each lesson in this module builds on those checks.
- Document an automated task so that other writers can understand it.
- Keep a human approval step in every automated publishing task.

---

## Why automation matters for technical writers

Documentation work includes many repeated steps. You build a site, check links, check spelling, and publish a page. Each step is simple, but doing all of them by hand takes time, and people forget steps.

Automation runs these steps the same way every time. A check that runs on every change catches an error before a reader sees it.

> **Documentation Manager's Tip**
>
> Automate checks before you automate publishing. A check can only block a bad change. A publishing step can make a bad change public.

---

## Before you start

Make sure you have:

- Completed Module 10 · AI.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the project scripts.
- Read access to the `.github/workflows` folder.

:::note

**For beginners**

Automation means a computer runs a task for you, using rules that you define. You still decide what the rules are, and you still review the result.

:::

---

## What is automation?

Automation is a set of steps that runs without manual action. It can run when you type a command, when you save a file, when you push a change, or on a schedule.

| Task | Manual | Automated |
|---|---|---|
| Build the site | You type `npm run build` every time | A script or workflow runs the build |
| Check spelling | You read each page | A spell checker runs on each change |
| Publish the site | You copy files to a server | A workflow deploys after approval |
| Check links | You click each link | A link checker finds broken links |

:::important

Automation does not remove the need for review. It makes checks consistent. A person still decides whether the content is correct, and whether it is ready to publish.

:::

---

## Four levels of automation

A Docs-as-Code project can automate tasks at four levels. Each level runs at a different point in the workflow.

| Level | Where it runs | Example in this repository |
|---|---|---|
| Local scripts | Your computer, when you run a command | `npm run build` and `npm run typecheck` |
| Repository rules | In the project, when you change a file | Spell-check words in `.vscode/settings.json` |
| Platform workflows | On GitHub, when you push or open a pull request | `.github/workflows/deploy.yml` |
| AI-assisted steps | Inside an AI workflow, with review | The six-step release note workflow |

The Hooks lesson in Module 10 explains how events start these tasks.

---

## The lessons in this module

Each lesson in this module covers one part of an automated documentation workflow.

| Lesson | What you learn | Real example in this repository |
|---|---|---|
| CI-CD | How continuous integration and continuous delivery work | The build step in `deploy.yml` |
| GitHub Actions | How to read and write a workflow file | `.github/workflows/deploy.yml` |
| Link Checking | How to find and fix broken links | The `onBrokenLinks` setting in `docusaurus.config.ts` |
| Publishing | How a change reaches readers | The GitHub Pages deploy job |
| Spell-checking | How to keep terms and spelling consistent | The `cSpell.words` list in `.vscode/settings.json` |
| Validation | How to check that files are correct before you publish | `npm run typecheck` and the build |

Read the lessons in the sidebar order. Each lesson uses the checks that the previous one explains.

---

## How-to: Find the checks that already run

**Goal:** Identify the checks in this project before you add a new one.

**Step 1: Run the build.**

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`. A failed build shows an error and the file that caused it.

**Step 2: Run the type check.**

```bash
npm run typecheck
```

Expected result: The command finishes without errors. The check reads the TypeScript files and reports problems in the code.

**Step 3: Read the workflow trigger.**

Open `.github/workflows/deploy.yml`. Find the `on` section. Note the event and the branch.

**Result:** You know which checks run on your computer, and which run on GitHub. You also know which event starts the publishing workflow.

:::warning

The workflow in `deploy.yml` publishes the site on every push to `main`. Do not push to `main` to test a change. Test on a branch, and merge only after approval.

:::

---

## How-to: Decide whether to automate a task

**Goal:** Decide whether a task should be automated, and which level suits it.

Use these questions:

| Question | If the answer is yes |
|---|---|
| Does the task repeat on every change or every release? | It is a candidate for automation. |
| Are the rules for the task clear and written down? | The task can be automated safely. |
| Can the result be checked by a computer? | A check can run automatically. |
| Does the task publish or change content for readers? | Keep a human approval step. |

**Result:** You can explain why a task is or is not a good candidate, and which level of automation fits it.

---

## How-to: Document an automated task

**Goal:** Describe an automated task so that a reader knows what starts it, what it does, and who approves the result.

Markdown source:

````markdown
### Build check on each pull request

| Item | Description |
|---|---|
| Trigger | A pull request to `main` |
| Action | Builds the site with `npm run build` |
| Result | A failed build blocks the merge |
| Approval | A peer writer reviews the content before merge |
| Owner | Name the team or person who maintains the check |
````

**Result:** The reader sees the trigger, the action, the result, the approval step, and the owner. The owner row shows who fixes the check when it breaks.

---

## Docs-as-Code workflow with automated checks

Use this workflow for every change to the documentation.

```text
Create a branch
    ↓
Write or change the content
    ↓
Run npm run build on your computer
    ↓
Commit, push, and open a pull request
    ↓
Automated checks run on GitHub
    ↓
Peer review and approval
    ↓
Merge, and publish
```

**Step 1: Create a branch.**

```bash
git switch -c docs/automation-overview
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/README.md
git commit -m "Add automation overview lesson"
git push -u origin docs/automation-overview
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Automating publishing before checks exist. | A bad change can reach readers. | Add checks first, then publishing. |
| Assuming a passing check means the content is correct. | Errors that the check cannot see reach readers. | Keep a human review step. |
| Running a publishing command to test. | The site is published before approval. | Test with `npm run build` and `npm run serve`. |
| Documenting an automation without its owner. | Nobody fixes it when it breaks. | Name an owner for each automated task. |
| Describing a check that is not configured. | Readers look for a check that does not exist. | Check the repository before you document it. |

---

## Summary

In this lesson, you learned that:

- Automation runs repeated steps the same way every time.
- A Docs-as-Code project can automate at four levels: local scripts, repository rules, platform workflows, and AI-assisted steps.
- This repository already runs a build, a type check, and a publishing workflow.
- Checks come before publishing, and a person approves every change that reaches readers.
- Each automated task needs a trigger, an action, a result, an approval step, and an owner.

The aim is simple:

**Let the computer run the repeated checks, and let people approve what readers see.**

---

## Practice exercise

Use this repository.

1. Run `npm run build` and `npm run typecheck`. Record the last line of each output.
2. Open `.github/workflows/deploy.yml`. Write a table that lists its trigger, its jobs, and the steps in the build job.
3. Choose one repeated task in your own documentation work. Use the questions in this lesson to decide whether to automate it.
4. Write an automated task page for that task, using the table format in this lesson. Include an owner.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is documentation automation?</strong></summary>

A set of steps that runs without manual action, using rules that people define. A person still reviews the result.

</details>

<details>
<summary><strong>2. What are the four levels of automation in a Docs-as-Code project?</strong></summary>

Local scripts, repository rules, platform workflows, and AI-assisted steps.

</details>

<details>
<summary><strong>3. Which command checks that the site builds?</strong></summary>

`npm run build`. The output ends with `[SUCCESS]` when the build succeeds.

</details>

<details>
<summary><strong>4. What does `npm run typecheck` do?</strong></summary>

It runs the TypeScript compiler check, which reports problems in the TypeScript files without building the site.

</details>

<details>
<summary><strong>5. What event starts the deploy workflow in this repository?</strong></summary>

A push to the `main` branch.

</details>

<details>
<summary><strong>6. Why should you automate checks before publishing?</strong></summary>

A check can block a bad change. A publishing step can make a bad change public.

</details>

<details>
<summary><strong>7. Why is a passing check not the same as a correct page?</strong></summary>

A check finds only the problems it is designed to find. A person must still review the facts, the tone, and the approval.

</details>

<details>
<summary><strong>8. What should every automated task document?</strong></summary>

The trigger, the action, the result, the approval step, and the owner.

</details>

<details>
<summary><strong>9. Where does this repository list the words that the spell checker should accept?</strong></summary>

In the `cSpell.words` list in `.vscode/settings.json`.

</details>

<details>
<summary><strong>10. What is the main goal of documentation automation?</strong></summary>

The goal is to let the computer run repeated checks consistently, while people approve what readers see.

</details>

---

## Next lesson

Continue to **CI-CD**. You will learn how continuous integration and continuous delivery apply to documentation changes.
