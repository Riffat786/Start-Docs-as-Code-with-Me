---
title: Publishing
sidebar_position: 5
description: Learn how an approved change moves from the repository to the live GitHub Pages site, how to verify the result, and how to roll back a bad publish safely.
---

# Publishing

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the CI-CD lesson, the GitHub Actions lesson, and the Deployment lesson in Module 8 · Docusaurus.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Describe the path from an approved change to the live site.
- Explain why the site address includes the project name.
- Verify a published change on the live site.
- Explain what a rollback is, and how to make one safely.
- Explain why a manual deploy can conflict with the automated one.
- Document a publishing process so that other writers can follow it.

---

## Why publishing matters for technical writers

Publishing is the last step before readers see a change. It is also the step that is hardest to undo, because readers may already have read the page.

A writer who knows the publishing path can check the result, spot a problem early, and respond quickly when something goes wrong.

> **Documentation Manager's Tip**
>
> Publishing is a decision, not a button. Confirm that the change is reviewed, the build passes, and the owner agrees before the merge. Then check the live site.

---

## Before you start

Make sure you have:

- Completed the CI-CD lesson, and the GitHub Actions lesson in this module.
- Completed the Deployment lesson in Module 8 · Docusaurus.
- Read access to the repository, and the Actions tab.
- A browser, so that you can check the live site.

---

## The publishing path

In this project, publishing happens when a pull request is merged into `main`. The deploy workflow then builds the site and publishes it to GitHub Pages.

```text
Pull request approved
     ↓
Merge into main
     ↓
Workflow: build job runs npm run build
     ↓
Workflow: upload the build folder
     ↓
Workflow: deploy job publishes to GitHub Pages
     ↓
Live site updates
```

The deploy step runs in the `github-pages` environment. It returns the address of the live site.

---

## The site address

The live site is published under the project name. The project settings in `docusaurus.config.ts` define the address.

| Setting | Value in this project | Meaning |
|---|---|---|
| `url` | `https://riffat786.github.io` | The domain that hosts the site |
| `baseUrl` | `/Start-Docs-as-Code-with-Me/` | The path under the domain |

The full address is therefore `https://riffat786.github.io/Start-Docs-as-Code-with-Me/`.

:::important

The `baseUrl` must match the repository name. If the path is wrong, the pages can load without their styles or images. Check the `baseUrl` before you change the project name or the repository name.

:::

---

## How-to: Trace a merged change to the live site

**Goal:** Confirm that a merged change has been built and published.

**Step 1: Open the Actions tab.**

Find the run that started after the merge. It is named for the deploy workflow.

**Step 2: Check the build job.**

Confirm that the build job has a green check. Open it, and find the step `Build website`. The output ends with `[SUCCESS]`.

**Step 3: Check the deploy job.**

Confirm that the deploy job ran after the build job. The deploy job shows the environment `github-pages`, and a link to the page URL.

**Step 4: Open the live site.**

Open the page URL in a browser, and go to the page you changed.

**Result:** You can see the build, the deploy, and the changed page on the live site.

:::note

The site can take a few minutes to update after the deploy job finishes. If the page still shows the old content, wait, then refresh the page with a hard refresh.

:::

---

## How-to: Verify a published change

**Goal:** Check the live site with a short checklist after each publish.

Use this checklist:

| Check | How to check | Expected result |
|---|---|---|
| Homepage loads | Open the site address | The homepage shows its styles and images |
| Changed page loads | Open the changed page | Your change appears |
| Navigation works | Select a link in the sidebar | The sidebar opens the correct page |
| Images load | Look at an image on the changed page | The image appears |
| Links work | Select one internal link on the changed page | The link opens the right page |
| Dark mode | Switch to dark mode | The page remains readable |

Record the date and the reviewer in the pull request, after the check.

:::tip

Check the page on a phone-sized screen too. A layout problem often appears only on a small screen.

:::

---

## How-to: Roll back a bad publish

**Goal:** Restore the previous version of the site after a bad change reached `main`.

**Step 1: Decide that a rollback is needed.**

Use a rollback when a published change is wrong, and a fix cannot be published quickly. Tell the owner before you start.

**Step 2: Create a branch from the latest `main`.**

```bash
git switch main
git pull origin main
git switch -c fix/rollback-bad-publish
```

**Step 3: Revert the bad commit.**

Find the commit that caused the problem, then create a revert commit.

```bash
git log --oneline -n 10
git revert <commit-hash>
```

**Step 4: Build and check the revert.**

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`.

**Step 5: Open a pull request, and merge it after approval.**

Merging the revert publishes the previous content through the normal workflow.

**Result:** The live site returns to the previous content, and the history shows what was reverted and why.

:::warning

Do not force push to `main` to remove a commit. A force push rewrites the history, and it can break the work of other writers. Use `git revert`, which adds a new commit.

:::

---

## Manual deploy and the automated deploy

The project file `package.json` includes a `deploy` script:

```bash
npm run deploy
```

This script publishes the site directly. The deploy workflow also publishes the site through GitHub Pages. Running both can publish different content, or overwrite a newer version.

:::warning

Do not run `npm run deploy` to publish a change in this project. Publish through a merged pull request, so that the approval and the build are recorded. Use the manual script only when the owner asks for it, and check the Pages settings first.

:::

---

## Docs-as-Code workflow for publishing

Use this workflow for every change that reaches readers.

```text
Create a branch, and make the change
    ↓
Run npm run build
    ↓
Open a pull request
    ↓
Peer review and approval
    ↓
Merge into main
    ↓
Watch the deploy workflow
    ↓
Verify the live site with the checklist
    ↓
Record the result in the pull request
```

**Step 1: Create a branch.**

```bash
git switch -c docs/publishing-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/Publishing.md
git commit -m "Add publishing lesson"
git push -u origin docs/publishing-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| A change is merged before it is approved. | Unreviewed content reaches readers. | Merge only after the approval step is complete. |
| The live site is not checked after the deploy. | A broken page stays live without anyone noticing. | Use the verification checklist after each publish. |
| `npm run deploy` is run to publish a change. | The automated and manual deploys conflict. | Publish through a merged pull request. |
| The `baseUrl` is changed without a check. | The styles and images break on the live site. | Check the `baseUrl` against the repository name, and verify the site. |
| A bad commit is removed with a force push. | The history is rewritten, and other writers lose work. | Use `git revert`, and merge the revert through a pull request. |
| The publish is not recorded. | Nobody knows when a change went live. | Record the date and the result in the pull request. |

---

## Summary

In this lesson, you learned that:

- A merge into `main` starts the workflow that publishes the site.
- The site address includes the `baseUrl`, which must match the repository name.
- Verify each publish with a short checklist on the live site.
- A rollback uses `git revert`, and it goes through a pull request.
- Do not publish with `npm run deploy` in this project.

The aim is simple:

**Publish only approved changes, and check the live site every time.**

---

## Practice exercise

Use this repository.

1. Open `docusaurus.config.ts`. Write down the `url` and the `baseUrl`, and the full address that they produce.
2. Open the Actions tab. Find the most recent deploy run. Record whether the build and deploy jobs succeeded.
3. Open the live site. Use the verification checklist on one page, and record the results.
4. Write a short rollback plan for a bad publish. Include the commands, the approval step, and the person to tell.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What starts publishing in this project?</strong></summary>

A merge into the `main` branch. The deploy workflow then builds the site and publishes it to GitHub Pages.

</details>

<details>
<summary><strong>2. What does the `baseUrl` setting do?</strong></summary>

It sets the path under the domain where the site lives. In this project, the path is `/Start-Docs-as-Code-with-Me/`.

</details>

<details>
<summary><strong>3. What happens if the `baseUrl` does not match the repository name?</strong></summary>

The site can load without its styles or images, because the paths to those files are wrong.

</details>

<details>
<summary><strong>4. What does the verification checklist check after a publish?</strong></summary>

The homepage, the changed page, the navigation, the images, the internal links, and dark mode.

</details>

<details>
<summary><strong>5. What is a rollback?</strong></summary>

Restoring the previous version of the content after a bad change has been published.

</details>

<details>
<summary><strong>6. Why should you use `git revert` instead of a force push?</strong></summary>

`git revert` adds a new commit. A force push rewrites the history, and it can break other writers' work.

</details>

<details>
<summary><strong>7. Why should you not run `npm run deploy` to publish a change?</strong></summary>

It publishes the site directly, outside the approved pull request. It can conflict with the automated deploy and overwrite a newer version.

</details>

<details>
<summary><strong>8. Why might the live site still show old content after a deploy?</strong></summary>

The site can take a few minutes to update. Wait, then refresh the page with a hard refresh.

</details>

<details>
<summary><strong>9. Why should you record the publish result in the pull request?</strong></summary>

It shows when the change went live, who checked it, and what the result was.

</details>

<details>
<summary><strong>10. What is the main goal of the publishing process?</strong></summary>

The goal is to publish only approved changes, and to confirm on the live site that they work for readers.

</details>

---

## Next lesson

Continue to **Spell-checking**. You will learn how to keep spelling and terminology consistent across the documentation.
