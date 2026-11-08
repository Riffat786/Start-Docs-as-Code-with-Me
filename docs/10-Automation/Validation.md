---
title: Validation
sidebar_position: 7
description: Learn how to validate documentation content, code, data files, and API contracts before publishing, using the checks that already run in this project.
---

# Validation

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the CI-CD lesson, the Link Checking lesson, and the Spell-checking lesson in this module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what validation checks, and how it differs from verification.
- Describe the kinds of validation used in a Docs-as-Code project.
- Run the validation commands that this project already uses.
- Read a validation error, and find the line that caused it.
- Validate a JSON file, a Markdown page, and an OpenAPI contract.
- Explain why a passing check is not the same as a correct page.
- Document a validation step so that other writers know what it checks.

---

## Why validation matters for technical writers

A documentation change can break in many ways. A tag can be unclosed, a JSON file can be invalid, or an API contract can describe a value that the API does not accept. Each of these errors can stop readers from completing a task.

Validation finds these errors before the change is published. It works best when it runs in the same order every time.

> **Documentation Manager's Tip**
>
> Validation answers one question: "Does this follow the rules?" It does not answer: "Is this correct for the reader?" Keep both questions in every review.

---

## Before you start

Make sure you have:

- Completed the CI-CD, Link Checking, and Spell-checking lessons in this module.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the project scripts.
- Read access to `portfolio/api/release-management/openapi.yaml`.

---

## Validation and verification

Two terms are often confused. Use the table to keep them apart.

| Term | Question it answers | Example |
|---|---|---|
| Validation | Does it follow the defined rules? | The JSON file parses, and the contract passes the linter |
| Verification | Does it do what it should, for the reader? | A reader completes the setup steps on the page |

Validation can be automated. Verification needs a person.

---

## Kinds of validation in this project

This project validates several kinds of content. Each one has a command or a tool.

| Kind | What it checks | How to run it | Example of a failure |
|---|---|---|---|
| Site build | MDX syntax, page structure, and internal links | `npm run build` | An unclosed tag stops the build |
| Type check | TypeScript code used in the site | `npm run typecheck` | A wrong type in a React component |
| JSON syntax | JSON files and examples | Open the file in VS Code | A trailing comma in `.vscode/settings.json` |
| API contract | OpenAPI structure and rules | `npx redocly lint` | An invalid schema reference |
| Editor rules | Markdown style rules | The Problems panel in VS Code | A heading that skips a level |

---

## Run the validation steps in order

Run the checks in this order. Each check is faster than the one after it, and each one catches a different kind of error.

**Step 1: Check the JSON settings.**

Open `.vscode/settings.json` in VS Code. Confirm that no red underline appears.

**Step 2: Run the type check.**

```bash
npm run typecheck
```

Expected result: The command finishes without errors.

**Step 3: Check the OpenAPI contract.**

```bash
npx redocly lint portfolio/api/release-management/openapi.yaml
```

Expected result: The linter reports no errors. Read each warning before you ignore it.

**Step 4: Build the site.**

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`.

**Result:** You have checked the settings, the code, the contract, and the pages, in that order.

:::important

Run `npm run build` last. The build is the slowest check, and it is the one that reflects how the site is published. A change that passes the build can still contain errors that the other checks catch.

:::

---

## How-to: Read a build error

**Goal:** Find the line that caused a build error, and fix it.

A real example from this project: an MDX error caused by a less-than sign. The message shows the file, the line, and the column.

```text
Module build failed (from ./node_modules/@docusaurus/mdx-loader/lib/index.js):
Error: MDX compilation failed for file "docs/07-Docusaurus/12-Deployment.md"
Cause: Unexpected character `5` before name
  line: 547, column: 21
```

**Step 1: Open the file.**

Open the file named in the message, and go to the line number.

**Step 2: Find the character.**

The column shows where the parser stopped. The character before it is often the cause. In this example, the parser read `<5` as the start of a tag.

**Step 3: Fix the text.**

Write the text in words, such as "under 5 minutes", or escape the character.

**Step 4: Build again.**

```bash
npm run build
```

**Result:** The build completes with `[SUCCESS]`.

:::tip

Angle brackets are common in technical text. In normal text, write them as words, or keep them inside a code block. Use the build to find each one.

:::

---

## How-to: Validate a JSON file

**Goal:** Confirm that a JSON file can be read by a program.

**Step 1: Open the file in VS Code.**

Open `.vscode/settings.json`.

**Step 2: Check for red underlines.**

A red underline marks a syntax error, such as a missing comma or an unclosed brace.

**Step 3: Open the Problems panel.**

Select **View**, then **Problems**. Each error appears with its line number.

**Step 4: Fix each error, and save the file.**

**Result:** The Problems panel shows no errors for the file.

---

## How-to: Validate an OpenAPI contract

**Goal:** Check the API contract before you use it to build reference documentation.

```bash
npx redocly lint portfolio/api/release-management/openapi.yaml
```

Read each message. An error means the contract breaks a rule. A warning means the contract can be improved. For each error, find the path in the file, such as `components/schemas/Release`, and fix it.

**Result:** The contract passes the linter, and the reference documentation can be built from it.

:::warning

Do not use the repository's build command to test the contract. The build writes a file to the repository. Use the linter to check the contract, and build previews outside the repository, as described in the OpenAPI lesson.

:::

---

## Validation does not prove correctness

A passing check means that the rules were followed. It does not mean that the content is correct for readers.

| Check passes | Check cannot tell you |
|---|---|
| The build completes | Whether the setup steps work on a clean computer |
| The contract passes the linter | Whether the API actually accepts the values in the contract |
| The JSON parses | Whether the example values make sense for the feature |
| The spell check finds no unknown words | Whether the wording is clear |

:::important

Run the validation steps, then ask a reviewer to check the content. Record both results in the pull request.

:::

---

## Docs-as-Code workflow for validation

Use this workflow for every change.

```text
Create a branch
    ↓
Make the change
    ↓
Check the JSON and the contract
    ↓
Run npm run typecheck
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Automated checks run on GitHub
    ↓
Peer review of the content
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/validation-lesson
```

**Step 2: Run the build.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/Validation.md
git commit -m "Add validation lesson"
git push -u origin docs/validation-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The build is run only once, at the end. | Errors are found late, and each fix needs another build. | Run the checks in order, and fix each one before the next. |
| A warning from the linter is ignored. | A rule violation remains in the contract. | Read each warning, and fix or record it. |
| A passing build is treated as approval. | Wrong content is published. | Keep the content review as a separate step. |
| An error is fixed by removing the check. | The problem remains, and it is hidden. | Fix the cause, and keep the check. |
| The build command is used to test the contract. | The repository files change. | Use the linter, and build previews outside the repository. |
| A JSON error is found only after a build fails. | The error is harder to find in a long file. | Check JSON files in VS Code before the build. |

---

## Summary

In this lesson, you learned that:

- Validation checks rules. Verification checks the result for the reader.
- This project validates JSON, code, the OpenAPI contract, and the site build.
- Run the checks in order, and read each error before you fix it.
- A passing check does not prove that the content is correct.
- Record the validation results and the content review in the pull request.

The aim is simple:

**Find rule violations early, and keep a person responsible for whether the content is right.**

---

## Practice exercise

Use this repository.

1. Open `.vscode/settings.json` in VS Code. Check the Problems panel, and record whether any errors appear.
2. Run `npm run typecheck`. Record the result.
3. Run `npx redocly lint portfolio/api/release-management/openapi.yaml`. Record the number of errors and warnings.
4. Run `npm run build`. Record the last line of the output.
5. In one sentence, explain what the four checks did not test.

---

## Knowledge check

<details>
<summary><strong>1. What does validation check?</strong></summary>

It checks that content, code, or data follows the defined rules. It does not check whether the content is correct for readers.

</details>

<details>
<summary><strong>2. What is the difference between validation and verification?</strong></summary>

Validation checks rules, and it can be automated. Verification checks whether the result works for the reader, and it needs a person.

</details>

<details>
<summary><strong>3. Why should you run the checks in order?</strong></summary>

Each check is faster than the one after it. Running them in order finds errors early, before the slower build runs.

</details>

<details>
<summary><strong>4. Which command checks the OpenAPI contract in this project?</strong></summary>

`npx redocly lint portfolio/api/release-management/openapi.yaml`.

</details>

<details>
<summary><strong>5. What did the MDX error in the example come from?</strong></summary>

A less-than sign followed by a number, `<5`. The parser read it as the start of a tag.

</details>

<details>
<summary><strong>6. How do you find the line that caused a build error?</strong></summary>

Read the file name, the line number, and the column in the error message, then open the file at that line.

</details>

<details>
<summary><strong>7. How can you check a JSON file before a build?</strong></summary>

Open it in VS Code, and check for red underlines and the Problems panel.

</details>

<details>
<summary><strong>8. Why should you not use the repository build command to test the API contract?</strong></summary>

The build writes a file into the repository, which changes the files. Use the linter for the check, and build previews outside the repository.

</details>

<details>
<summary><strong>9. Why does a passing build not prove that a page is correct?</strong></summary>

The build checks structure and links. It does not check whether the steps work for a reader, or whether the wording is clear.

</details>

<details>
<summary><strong>10. What is the main goal of validation in a Docs-as-Code project?</strong></summary>

The goal is to find rule violations early, and to keep a person responsible for whether the content is correct for readers.

</details>

---

## Next module

Continue to **Module 12 · AI for Technical Writers**. You will apply the workflows from the previous modules to practical writing tasks.
