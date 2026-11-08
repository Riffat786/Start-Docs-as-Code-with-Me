---
title: GitHub Actions
sidebar_position: 3
description: Learn how to read, change, and test a GitHub Actions workflow, using this project's deploy workflow as a real example.
---

# GitHub Actions

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the CI-CD lesson, and the GitHub Actions lesson in Module 5 · GitHub.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Identify the parts of a workflow file, such as its trigger, jobs, and steps.
- Read the deploy workflow in this repository, line by line.
- Explain what a pinned action version such as `@v4` means.
- Explain the purpose of the `permissions`, `environment`, and `concurrency` settings.
- Test a workflow change on a branch, without publishing the site.
- Find the step that caused a failed run, and read its log.
- Store and use secrets without exposing them in logs or documentation.

---

## Why GitHub Actions matters for technical writers

GitHub Actions runs the pipeline for this project. A writer who understands the workflow file can explain what happens after a push, and can spot a problem before it reaches readers.

You do not need to write every workflow yourself. You do need to read them, describe them accurately, and test a small change safely.

> **Documentation Manager's Tip**
>
> Never change a workflow that publishes content on your main branch. Test each change on a branch first, and ask a technical reviewer to check it before you merge.

---

## Before you start

Make sure you have:

- Completed the CI-CD lesson in this module.
- Completed the GitHub Actions lesson in Module 5 · GitHub.
- Read access to the `.github/workflows` folder.
- A GitHub account with access to the repository.

:::note

**For beginners**

A workflow is a file that tells GitHub what to do after an event, such as a push. The file uses YAML, which relies on indentation. Use spaces, not tabs.

:::

---

## Parts of a workflow file

Every workflow has the same basic parts. The table uses the deploy workflow as the example.

| Part | Purpose | In `deploy.yml` |
|---|---|---|
| `name` | The name shown in the Actions tab | `Deploy Docusaurus to GitHub Pages` |
| `on` | The event that starts the workflow | A push to the `main` branch |
| `permissions` | The access that the workflow receives | Read the repository, write to Pages |
| `concurrency` | Controls how runs overlap | One Pages deployment at a time |
| `jobs` | The groups of steps that run | `build` and `deploy` |
| `runs-on` | The runner that executes a job | `ubuntu-latest` |
| `needs` | A job that must finish first | The deploy job needs `build` |
| `steps` | The tasks inside a job | Checkout, setup, install, build, upload, deploy |
| `uses` | A reusable action from GitHub or others | `actions/checkout@v4` |
| `run` | A command that the runner executes | `npm run build` |

---

## How-to: Read the deploy workflow

**Goal:** Explain each line of a real workflow to another writer.

Open `.github/workflows/deploy.yml`. Read the file in this order.

**Step 1: Read the trigger.**

```yaml
on:
  push:
    branches:
      - main
```

The workflow starts after each push to `main`.

**Step 2: Read the permissions.**

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

The workflow can read the repository, and it can deploy to GitHub Pages. It cannot change the repository content.

**Step 3: Read the build job.**

The job uses the runner `ubuntu-latest`. It runs five steps: check out the repository, set up Node.js 24, install dependencies with `npm ci`, build with `npm run build`, and upload the `build` folder.

**Step 4: Read the deploy job.**

The deploy job waits for the build job. It uses the environment `github-pages`, and it runs the deploy action.

**Result:** You can explain what the workflow does, in what order, and with what access.

---

## Pinned action versions

Each `uses` line includes a version, such as `@v4`. The version tells GitHub which release of the action to run.

| Reference | Meaning | Risk |
|---|---|---|
| `actions/checkout@v4` | Use the latest release in the major version 4 | Changes within version 4 can still affect the workflow |
| `actions/checkout@<full commit SHA>` | Use one exact version | The most predictable choice, but harder to update |
| `actions/checkout` with no version | Use the default branch | Not recommended. Changes can break the workflow without warning. |

:::important

Do not use an action without a version. Review each new version of an action before you update the reference, because the action runs with the permissions of your workflow.

:::

---

## Environments and approvals

The deploy job uses the environment `github-pages`. An environment is a named target. It can have its own rules, such as required reviewers, and its own secrets.

| Setting | What it means for this project |
|---|---|
| Environment name | `github-pages`, shown on the deployment page |
| Required reviewers | Set in the repository settings, if the team uses them |
| Environment URL | The live site address, returned by the deploy step |

:::note

If your team requires a manual approval before deployment, configure it on the `github-pages` environment in the repository settings. Document the setting in the workflow page, because the workflow file alone does not show it.

:::

---

## How-to: Test a workflow change on a branch

**Goal:** Test a new step without publishing the site.

The example below is illustrative. It runs on pull requests, not on pushes to `main`, so it does not deploy anything.

```yaml
name: Check build on pull request

on:
  pull_request:
    branches:
      - main

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build
```

**Step 1: Create a branch and add the file.**

Add the file in a new branch. Do not add it to `main` directly.

**Step 2: Open a pull request.**

The workflow runs on the pull request. Open the Actions tab, and select the run.

**Step 3: Read the result.**

A green check means every step passed. A red cross means a step failed. Select the failed step to see its log.

**Result:** You have tested the workflow without publishing the site. The check runs before the change reaches `main`.

:::warning

Only the `contents: read` permission is granted in this example. Keep the permissions as narrow as the job needs. Do not add `pages: write` to a workflow that only checks content.

:::

---

## How-to: Read a failed run

**Goal:** Find the step that caused a failure, and identify the cause.

**Step 1: Open the run.**

Open the Actions tab in the repository. Select the run that failed. It has a red cross.

**Step 2: Find the failed job.**

Select the job with the red cross, such as `build`.

**Step 3: Open the failed step.**

Expand the step with the red cross. The log shows the command output.

**Step 4: Find the cause.**

Read the last error message above the failure. For a build, the error names the file and the line.

**Step 5: Fix the cause on a branch.**

Make the fix in a branch, and push it. Run `npm run build` on your computer first.

**Result:** You know which step failed, and which file to fix.

:::tip

If a step is skipped, check its `if` condition, and the `needs` line of the job. A skipped deploy usually means the build job failed.

:::

---

## How-to: Use secrets safely

**Goal:** Store a secret, and use it in a workflow without exposing it.

**Step 1: Store the secret.**

In the repository settings, open **Secrets and variables**, then **Actions**. Add the secret with a clear name, such as `API_KEY_TEST`.

**Step 2: Reference the secret in a workflow.**

```yaml
      - name: Call a test service
        run: node scripts/check-service.js
        env:
          API_KEY: ${{ secrets.API_KEY_TEST }}
```

**Step 3: Confirm that the secret is hidden.**

GitHub masks a secret in the log, but masking is not a guarantee. Do not print the secret, and do not write it to a file.

**Result:** The script receives the secret, and the value does not appear in the log.

:::warning

Never paste a secret into a Markdown page, a pull request description, or a commit message. Revoke any secret that was exposed, even if you removed it later. Git keeps the history of every commit.

:::

---

## Docs-as-Code workflow for workflow changes

Use this workflow when you change or document a workflow.

```text
Create a branch
    ↓
Read the current workflow file
    ↓
Make the change, and test it locally where possible
    ↓
Open a pull request, and check the run
    ↓
Technical review of the permissions and steps
    ↓
Peer review and approval
    ↓
Merge, and watch the first run on main
```

**Step 1: Create a branch.**

```bash
git switch -c docs/github-actions-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/GitHub-Actions.md
git commit -m "Add GitHub Actions lesson"
git push -u origin docs/github-actions-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| An action is used without a version. | A change in the action can break the workflow without warning. | Pin the action to a version, and review updates. |
| The permissions are set too broadly. | The workflow can change content it only needs to read. | Grant only the permissions that each job needs. |
| A new workflow is tested on `main`. | A failed test can publish a broken site. | Test on a pull request, or on a branch. |
| A secret is printed in a step. | The secret can be exposed in the log. | Pass secrets through `env`, and never print them. |
| The workflow is changed without a technical review. | An error reaches the publishing step. | Ask a technical reviewer to check each change. |
| Indentation in the YAML file is wrong. | The workflow does not run, or runs the wrong steps. | Check the indentation, and read the error in the Actions tab. |

---

## Summary

In this lesson, you learned that:

- A workflow has a trigger, permissions, jobs, and steps.
- The deploy workflow runs on each push to `main`, and it has two jobs in order.
- An action version pins the release that the workflow runs.
- Environments and reviewers control how a deployment is approved.
- Test workflow changes on a pull request before you merge them.
- Read a failed run from the failed step, and fix the cause on a branch.
- Store secrets in GitHub, and never print or commit them.

The aim is simple:

**Read every workflow the way a reviewer would, and test every change before it reaches readers.**

---

## Practice exercise

Use this repository.

1. Open `.github/workflows/deploy.yml`. Write one sentence that explains each of the four top-level keys: `on`, `permissions`, `concurrency`, and `jobs`.
2. List each `uses` line in the workflow. For each one, write the version and say whether it is pinned.
3. Write the test workflow from this lesson on a branch. Open a pull request, and record whether the check passes.
4. Find the `needs` line in the deploy job. Explain what happens if the build job fails.
5. Run `npm run build` on your computer, and record the last line of the output.

---

## Knowledge check

<details>
<summary><strong>1. What does the `on` key in a workflow file define?</strong></summary>

The event that starts the workflow. In `deploy.yml`, the event is a push to the `main` branch.

</details>

<details>
<summary><strong>2. What does `permissions: contents: read` allow?</strong></summary>

It allows the workflow to read the repository content. It does not allow the workflow to change the content.

</details>

<details>
<summary><strong>3. What does `actions/checkout@v4` mean?</strong></summary>

It runs the action from major version 4. The version pins the release that the workflow uses.

</details>

<details>
<summary><strong>4. Why is an action with no version a risk?</strong></summary>

A change in the action can break the workflow or change its behavior, without any change in your repository.

</details>

<details>
<summary><strong>5. What does `needs: build` do?</strong></summary>

It makes the deploy job wait until the build job finishes successfully.

</details>

<details>
<summary><strong>6. Why is the `github-pages` environment important?</strong></summary>

It is the named target for the deployment. Its settings, such as required reviewers, control how the deployment is approved.

</details>

<details>
<summary><strong>7. Where should you test a new workflow step?</strong></summary>

On a pull request or a branch. Testing on `main` can publish a broken site.

</details>

<details>
<summary><strong>8. Where do you look first when a workflow run fails?</strong></summary>

In the Actions tab. Open the failed run, the failed job, and the failed step, and read the last error message.

</details>

<details>
<summary><strong>9. Why should you not print a secret in a workflow step?</strong></summary>

The value can appear in the log. Masking helps, but it is not a guarantee, so pass the secret through `env` and never print it.

</details>

<details>
<summary><strong>10. What is the main goal of reading a workflow file as a writer?</strong></summary>

The goal is to explain what the workflow does, in what order, and with what access, so that you can spot a problem before it reaches readers.

</details>

---

## Next lesson

Continue to **Link Checking**. You will learn how to find and fix broken links before they reach readers.
