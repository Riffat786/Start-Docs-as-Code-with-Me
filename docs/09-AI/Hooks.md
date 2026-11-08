---
title: Hooks
sidebar_position: 12
description: Learn how hooks run automated actions in response to events, and how to document the events, triggers, and effects of hooks in a Docs-as-Code project.
---

# Hooks

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Commands lesson, and the GitHub Actions lesson in Module 5.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a hook is, and what an event and a trigger are.
- Identify the kinds of hooks used in a Docs-as-Code project.
- Read a workflow trigger, and explain what it does.
- Explain why a push to the main branch can publish a site.
- Document the events, triggers, and effects of automated tasks.
- Decide when a hook needs human approval.
- Apply a Docs-as-Code workflow to hook documentation.

---

## Why hooks matter for technical writers

A hook runs an action when something happens. For example, a site can build each time a writer pushes a change. Writers do not start the build by hand.

Hooks save time, and they also change the results of an action. A writer who does not know a hook exists can be surprised by its effect. Documentation must show which events start which actions.

> **Documentation Manager's Tip**
>
> For every automated task, document three things: the event that starts it, the action it runs, and what changes as a result. If a task publishes content, state that clearly in the first line.

---

## Before you start

Make sure you have:

- Completed the Commands lesson.
- Completed the GitHub Actions lesson in Module 5.
- The course repository cloned to your computer.
- Read access to the `.github/workflows` folder.

:::note

**For beginners**

An event is something that happens, such as a push or a file save. A hook is an action that runs in response to an event. A trigger is the event that starts a specific automated task.

:::

---

## Kinds of hooks in a Docs-as-Code project

This project uses hooks in three places. Each one runs at a different point in the workflow.

| Kind | Where it runs | Example | Status in this repository |
|---|---|---|---|
| Git hook | On your computer, at a Git step such as a commit | A script that runs before each commit | Sample files only. No active hook. |
| GitHub Actions trigger | On GitHub, after a push or pull request | Build and deploy the site | Active. See `.github/workflows/deploy.yml`. |
| Claude Code hook | Inside a Claude Code session, at a tool step | A check that runs after a file is changed | Not configured in this repository. |

:::important

Each kind of hook is set up in a different place, and each one has a different scope. A Git hook runs only on the computer where it is stored. A GitHub Actions workflow runs on GitHub for everyone who pushes to the branch. Document the scope before you describe the effect.

:::

---

## Read a workflow trigger

The workflow file in `.github/workflows/deploy.yml` starts with a trigger. This trigger is the event that starts the job.

```yaml
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main
```

Read the file in three parts:

| Part | Meaning |
|---|---|
| `name` | The name shown on GitHub |
| `on` | The event that starts the workflow |
| `branches` | The branch that the event applies to |

The trigger is `push` to the `main` branch. Each push to `main` starts the workflow.

The job then runs these steps in order:

1. Check out the repository.
2. Set up Node.js.
3. Install the dependencies with `npm ci`.
4. Build the site with `npm run build`.
5. Upload the `build` folder.
6. Deploy the site to GitHub Pages.

:::warning

A push to `main` publishes the site. Merge a pull request only when the content is approved. A change that reaches `main` can be live within a few minutes.

:::

---

## How-to: Document a trigger in Markdown

**Goal:** Describe an automated task so that a reader knows what starts it and what it changes.

Markdown source:

````markdown
### Deploy the documentation site

| Item | Description |
|---|---|
| Trigger | A push to the `main` branch |
| Action | Builds the site with `npm run build`, and deploys it to GitHub Pages |
| Result | The public site updates after the workflow completes |
| Approval | A pull request must be approved before it is merged into `main` |
````

**Result:** The reader sees the trigger, the action, the result, and the approval step in one table. The approval row explains who decides when the change goes live.

:::tip

Use the same row names for every automated task on the page. Readers compare tasks more easily when the structure is the same.

:::

---

## How-to: Explain a Git hook before you use one

**Goal:** Describe a Git hook so that writers understand its scope before they set it up.

A Git hook is a script that Git runs at a point in its workflow. The most common example is a `pre-commit` hook, which runs before each commit.

The project includes sample hook files in the `.git/hooks` folder. The `.sample` extension means that the hook is not active. Git runs a hook only when its file name has no `.sample` extension.

Markdown source:

```markdown
### Pre-commit check (optional)

A pre-commit hook can run a check before each commit.

| Item | Description |
|---|---|
| Scope | Your computer only. Git hooks are not shared with other users by default. |
| Risk | A slow check delays every commit. A failing check blocks the commit. |
| Recommendation | Use a shared tool, and agree on the check with your team. |
```

**Result:** The reader knows that a Git hook is local, and that a slow or failing check affects every commit. The reader also knows that a team-wide check should be shared through the project, not set up by hand on one computer.

:::warning

Do not disable a hook to get around a failed check. Find out why the check fails, and fix the problem. Bypassing a check can let an error reach the repository.

:::

---

## Claude Code hooks

Claude Code can run hooks at points in a session, such as before a tool runs or after a file changes. A hook can run a command, such as a build, after a change.

This repository does not configure Claude Code hooks. If you add one, document:

- The event that starts the hook.
- The command that the hook runs.
- Whether the hook can change files or only check them.
- Who approved the hook, and where its settings are stored.

:::note

The exact names and settings for Claude Code hooks can change. Check the current Claude Code documentation before you write the setup steps.

:::

---

## Decide when a hook needs approval

Not every automated task needs the same level of review. Use this table to decide.

| Task | Approval needed? | Reason |
|---|---|---|
| Run a read-only check, such as a link check | No | The check does not change content. |
| Build the site | No | The build creates files, but it does not publish them. |
| Deploy the site to GitHub Pages | Yes | The deploy makes content public. |
| Update a file automatically | Yes | The change must be reviewed before it is committed. |
| Send a notification to a team channel | Yes | The message reaches people outside the review. |

:::important

An automated task that changes or publishes content needs a human decision. Automation can run the steps, but people approve the result.

:::

---

## Docs-as-Code workflow for hook documentation

Use this workflow when you update a hooks page.

```text
Create a branch
    ↓
Read the workflow file or hook file
    ↓
Document the event, trigger, and effect
    ↓
Run npm run start to preview
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Technical review of the trigger details
    ↓
Peer review
```

**Step 1: Create a branch.**

```bash
git switch -c docs/hooks-lesson
```

**Step 2: Check the file that the page describes.**

Open `.github/workflows/deploy.yml`, and confirm the trigger and the steps before you describe them.

**Step 3: Build the site.**

```bash
npm run build
```

**Step 4: Commit and push.**

```bash
git add docs/09-AI/Hooks.md
git commit -m "Add hooks lesson"
git push -u origin docs/hooks-lesson
```

Ask a technical reviewer to confirm the trigger details. A writer can describe an automated task, but the engineer who owns the workflow must confirm how it behaves.

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The page does not name the trigger. | Readers do not know what starts the task. | Name the event and the branch for each task. |
| The page does not say that a push to `main` publishes. | Writers push changes and publish them by accident. | State the publishing effect in the first line. |
| The page treats a Git hook as shared. | Teammates do not get the same checks. | Explain the scope, and use a shared tool for team checks. |
| The page describes a hook that is not configured. | Readers look for a hook that does not exist. | Check the file, and describe only the active hooks. |
| A failing hook is bypassed. | An error reaches the repository. | Explain how to find and fix the failure. |
| The page gives setup steps without checking the current docs. | The steps stop working after a tool update. | Check the current documentation before you publish. |

---

## Summary

In this lesson, you learned that:

- A hook runs an action when an event happens.
- This project uses Git hooks, GitHub Actions triggers, and Claude Code hooks, with different scopes.
- The `deploy.yml` workflow runs on each push to `main`, and it publishes the site.
- Document the event, the trigger, and the effect of every automated task.
- Automated tasks that change or publish content need human approval.

The aim is simple:

**Show readers what starts each automated task, what it changes, and who approves the result.**

---

## Practice exercise

Use this repository.

1. Open `.github/workflows/deploy.yml`. Write a short table that lists the trigger, the branch, and each step.
2. Check the `.git/hooks` folder. Explain why the sample files do not run.
3. Write a Markdown section that documents the deploy trigger, using the format in this lesson.
4. Name one task in this project that should not run without human approval, and explain why.
5. Run `npm run build` to confirm that your Markdown builds before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is a hook?</strong></summary>

A hook is an action that runs automatically when a specific event happens.

</details>

<details>
<summary><strong>2. What is the difference between an event and a trigger?</strong></summary>

An event is something that happens, such as a push. A trigger is the event that starts a specific automated task.

</details>

<details>
<summary><strong>3. Which event starts the deploy workflow in this repository?</strong></summary>

A push to the `main` branch.

</details>

<details>
<summary><strong>4. What does the deploy workflow do after it builds the site?</strong></summary>

It uploads the `build` folder as a GitHub Pages artifact, and it deploys the site to GitHub Pages.

</details>

<details>
<summary><strong>5. Why do the sample files in `.git/hooks` not run?</strong></summary>

They have a `.sample` extension. Git runs a hook only when its file name has no `.sample` extension.

</details>

<details>
<summary><strong>6. Why is a Git hook not shared with other users by default?</strong></summary>

A Git hook is stored on the local computer. It is not part of the shared repository history unless the team uses a shared method to distribute it.

</details>

<details>
<summary><strong>7. Why should you not bypass a failing hook?</strong></summary>

The check is there to stop an error from reaching the repository. Bypassing it can let the error into the content.

</details>

<details>
<summary><strong>8. Which automated task in the table needs human approval?</strong></summary>

Deploying the site to GitHub Pages. A deploy makes the content public, so a person must approve it.

</details>

<details>
<summary><strong>9. What should a hook page document for each automated task?</strong></summary>

The event that starts it, the action it runs, and what changes as a result. It should also state who approves the result.

</details>

<details>
<summary><strong>10. What is the main goal of documenting hooks?</strong></summary>

The goal is to show readers what starts each automated task, what it changes, and who approves the result.

</details>

---

## Next lesson

Continue to **Examples**. You will learn how to use examples in AI-assisted documentation work.
