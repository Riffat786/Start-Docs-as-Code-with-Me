---
title: CI-CD
sidebar_position: 2
description: Learn how continuous integration and continuous delivery apply to documentation, using the build and deploy stages of this project's workflow as a real example.
---

# CI-CD

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the Automation overview, and the Hooks lesson in Module 10.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain continuous integration (CI) and continuous delivery (CD) in plain language.
- Describe the stages of a pipeline, and the order in which they run.
- Map each stage of this project's deploy workflow to a documentation task.
- Explain why a failed stage stops the pipeline.
- Describe the difference between delivering a build and publishing it.
- Document a pipeline so that other writers can understand it.
- Keep a human approval step in a pipeline that publishes content.

---

## Why CI-CD matters for technical writers

A documentation change passes through several steps before readers see it. The site must build, the links must work, and the content must be approved. Doing these steps by hand for every change is slow, and a step is easy to forget.

A CI-CD pipeline runs these steps in the same order every time. If a step fails, the pipeline stops, and the change does not move forward.

> **Documentation Manager's Tip**
>
> Ask what happens when a step fails. If the answer is "the change still gets published", the pipeline is not protecting readers. A failed step must block the change.

---

## Before you start

Make sure you have:

- Completed the Automation overview.
- Completed the Hooks lesson in Module 10.
- Read access to the `.github/workflows` folder.
- Node.js installed, so that you can run the build on your computer.

:::note

**For beginners**

A pipeline is a series of steps that runs in order. Each step takes the output of the step before it. If one step fails, the steps after it do not run.

:::

---

## What are CI and CD?

CI and CD are two parts of the same pipeline. They solve different problems.

| Term | Full name | Purpose | Documentation example |
|---|---|---|---|
| CI | Continuous integration | Checks each change as soon as it is added | Builds the site on every change, so that a broken page is found early |
| CD | Continuous delivery | Prepares a checked change so that it can be published | Packages the built site, ready to deploy |
| CD | Continuous deployment | Publishes a checked change automatically | Deploys the site to GitHub Pages on every push to `main` |

:::important

Continuous delivery prepares a build, and a person decides when to publish it. Continuous deployment publishes the build automatically. This project uses automatic deployment on the `main` branch, so a merge to `main` is a publishing decision.

:::

---

## The pipeline in this project

The file `.github/workflows/deploy.yml` defines the pipeline. It has two jobs that run in order.

```text
Push to main
     ↓
Job: build
  1. Check out the repository
  2. Set up Node.js
  3. Install dependencies (npm ci)
  4. Build the website (npm run build)
  5. Upload the build folder
     ↓
Job: deploy (runs only if build succeeds)
  6. Deploy to GitHub Pages
     ↓
Site is live
```

The `needs: build` line in the deploy job means the deploy job waits for the build job. If the build fails, the deploy job does not run.

| Stage | Step in `deploy.yml` | What it checks or does |
|---|---|---|
| Source | Check out the repository | Gets the exact version of the content |
| Environment | Set up Node.js | Uses Node.js version 24 |
| Dependencies | Install dependencies | Installs the exact packages in `package-lock.json` |
| Build (CI) | Build website | Fails if the content or code has errors |
| Package | Upload the build folder | Stores the built site as an artifact |
| Deploy (CD) | Deploy to GitHub Pages | Publishes the artifact |

---

## How-to: Trace a change through the pipeline

**Goal:** Follow one change from a push to the published site.

**Step 1: Find the trigger.**

Open `.github/workflows/deploy.yml`. Confirm that the `on` section runs on a push to `main`.

**Step 2: Read the build job.**

Find the step named `Build website`. It runs `npm run build`.

**Step 3: Run the same command on your computer.**

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`. The pipeline runs the same command, so a local success is a good sign.

**Step 4: Read the deploy job.**

Find the `needs: build` line. Confirm that the deploy job waits for the build.

**Result:** You can explain each stage, and you know which step checks the content before it reaches readers.

:::tip

Run `npm run build` before you push. A build error that you find on your computer costs less time than a failed pipeline on GitHub.

:::

---

## How-to: Explain the permissions and concurrency settings

**Goal:** Describe the security and timing settings in the workflow.

The workflow includes these settings:

| Setting | What it does | Why it matters |
|---|---|---|
| `permissions` | Limits what the workflow can access | Each job gets only the access it needs |
| `contents: read` | Reads the repository, but cannot change it | The build cannot modify the content |
| `concurrency` with `cancel-in-progress: true` | Runs one deployment at a time, and cancels the older run | The site always shows the latest approved change |

Markdown source for documenting these settings:

````markdown
### Deployment settings

| Setting | Value | Reason |
|---|---|---|
| Permissions | Read the repository. Write to GitHub Pages only. | Limits the access of the workflow |
| Concurrency | One deployment at a time | Prevents two deployments from overlapping |
````

**Result:** The reader can see what the workflow is allowed to do, and why only one deployment runs at a time.

---

## How-to: Add a check stage safely

**Goal:** Add a new check, such as a link check, before the deploy job runs.

The example below is illustrative. Do not add it to `deploy.yml` without a pull request and a technical review.

```yaml
      - name: Type check
        run: npm run typecheck
```

Place the step in the build job, after the install step and before the build step.

**Result:** A type error stops the pipeline before the deploy job runs. The check runs on every push to `main`.

:::warning

A new check that fails on every change blocks all publishing. Test the check on a branch, and confirm that it passes on the current content before you merge it.

:::

---

## Delivery and publishing

A pipeline can stop at delivery, or it can continue to publishing. Document which one applies.

| Decision | Stops at | Who decides | Example |
|---|---|---|---|
| Delivery | A built, checked artifact | A person, who runs the publish step | A build is stored for review on a staging site |
| Publishing | The live site | Automatic, after the merge | The deploy job publishes to GitHub Pages |

:::important

If a pipeline publishes automatically, the approval step happens before the merge. Make sure the pull request is reviewed and approved before anyone merges it to `main`.

:::

---

## Docs-as-Code workflow for pipeline documentation

Use this workflow when you document or change a pipeline.

```text
Create a branch
    ↓
Read the workflow file
    ↓
Document each stage, and its purpose
    ↓
Run npm run build on your computer
    ↓
Commit, push, and open a pull request
    ↓
Technical review of the stages and settings
    ↓
Peer review and approval
    ↓
Merge, and watch the pipeline run
```

**Step 1: Create a branch.**

```bash
git switch -c docs/ci-cd-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/CI-CD.md
git commit -m "Add CI-CD lesson"
git push -u origin docs/ci-cd-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The pipeline continues after a failed check. | Broken content is published. | Make each stage depend on the stage before it. |
| A check is added on a branch, but nobody tests it. | The check fails on every change after the merge. | Test the check on a branch before you merge it. |
| The page describes the pipeline as delivery only. | Readers expect a manual approval that does not exist. | Document whether the pipeline publishes automatically. |
| Permissions are set too broadly. | The workflow can change content it should only read. | Grant only the permissions each job needs. |
| The build is not run locally before a push. | Errors are found only on GitHub. | Run `npm run build` before you push. |

---

## Summary

In this lesson, you learned that:

- CI checks each change as it is added, and CD prepares or publishes a checked change.
- A pipeline runs its stages in order, and a failed stage stops the stages after it.
- This project's deploy workflow builds the site, and then deploys it to GitHub Pages.
- Permissions and concurrency settings limit access and prevent overlapping deployments.
- A push to `main` publishes the site, so the approval happens before the merge.

The aim is simple:

**Make sure that a change is checked before it reaches readers, and that a person approves the change before it is published.**

---

## Practice exercise

Use this repository.

1. Open `.github/workflows/deploy.yml`. List the steps in the build job, in order.
2. Write a sentence that explains what happens if the `Build website` step fails.
3. Run `npm run build` on your computer. Record the last line of the output.
4. Write a table that documents the deploy job, using the format in this lesson. Include the trigger, the environment, and the approval step.
5. Run `npm run build` again after you update your Markdown, and fix any error before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What does continuous integration (CI) do?</strong></summary>

It checks each change as soon as it is added, such as by building the site. A failed check shows the problem early.

</details>

<details>
<summary><strong>2. What does continuous delivery (CD) prepare?</strong></summary>

A checked change, so that it can be published. The build is packaged and kept ready for deployment.

</details>

<details>
<summary><strong>3. How does continuous deployment differ from continuous delivery?</strong></summary>

Continuous deployment publishes the checked change automatically. Continuous delivery prepares it, and a person decides when to publish.

</details>

<details>
<summary><strong>4. What does `needs: build` do in the deploy job?</strong></summary>

It makes the deploy job wait for the build job. If the build fails, the deploy job does not run.

</details>

<details>
<summary><strong>5. Which command runs the same build step as the pipeline?</strong></summary>

`npm run build`.

</details>

<details>
<summary><strong>6. Why does this project's `contents: read` permission matter?</strong></summary>

It lets the workflow read the repository, but not change it. The build cannot modify the content it builds.

</details>

<details>
<summary><strong>7. What does `cancel-in-progress: true` do?</strong></summary>

It cancels an older deployment that is still running when a newer one starts. The site then shows the latest approved change.

</details>

<details>
<summary><strong>8. When should you test a new check?</strong></summary>

Before you merge it. A check that fails on every change blocks all publishing.

</details>

<details>
<summary><strong>9. When does the approval step happen in this project?</strong></summary>

Before the merge to `main`. A push to `main` publishes the site automatically.

</details>

<details>
<summary><strong>10. What is the main goal of a CI-CD pipeline for documentation?</strong></summary>

The goal is to check each change in the same order every time, and to make sure that a person approves a change before it reaches readers.

</details>

---

## Next lesson

Continue to **GitHub Actions**. You will learn how to read and write the workflow files that run this pipeline.
