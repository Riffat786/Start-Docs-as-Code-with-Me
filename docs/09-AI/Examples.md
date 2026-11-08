---
title: Examples
sidebar_position: 13
description: Learn how to write and use examples in AI-assisted documentation work, including mock data, input and output pairs, and checks that keep AI output consistent with your style.
---

# Examples

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Prompt Engineering lesson, and the AI Agents lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain why examples shape the output of an AI tool.
- Choose the right type of example for a documentation task.
- Use mock data safely, and explain why the release note project started with it.
- Write an input and output example pair in Markdown.
- Add examples to a prompt, using the RTCCO structure.
- Check AI output against your examples and your style guide.
- Document examples so that reviewers can trust and maintain them.

---

## Why examples matter for technical writers

An AI model learns a pattern from the examples you give it. If an example uses a formal sentence, the output often uses formal sentences. If an example includes an internal ticket number, the output may include one too.

Good examples teach the AI the tone, length, and structure that you need. Poor examples teach the AI the wrong habits, and the errors repeat across every draft.

> **Documentation Manager's Tip**
>
> Review your examples as carefully as your published pages. An example is an instruction in disguise, and the AI treats it as a rule.

---

## Before you start

Make sure you have:

- Completed the Prompt Engineering lesson.
- Completed the AI Agents lesson.
- The course repository cloned to your computer.
- Read the "Why Mock Data?" section of the case study at `portfolio/case-studies/ai-release-note-generator/index.md`.

:::note

**For beginners**

An example is a small, complete pair: what the AI receives, and what a good result looks like. You do not need to train a model to use examples. You include them in your prompt or your workflow.

:::

---

## Types of examples

Each type of example has a different purpose. Choose the type before you write the example.

| Type | Purpose | Example in documentation work |
|---|---|---|
| Example pair | Shows an input and the output you want | A work item and a customer-facing note |
| Counter-example | Shows an output you do not want | A note that uses an internal ticket number |
| Reference output | Shows the final format and tone | A complete release note section |
| Mock data | Stands in for real data during testing | Fictional work items for a test release |

:::important

Use mock data for testing and demonstrations. Do not use real customer data, real credentials, or unreleased product details in any example, even in a private repository.

:::

---

## Why the project started with mock data

The case study explains that the release note project began with mock engineering data. This approach let the team test the architecture before it connected to Azure DevOps and ServiceNow.

Mock data helped the team:

- Test each stage of the workflow without a live system.
- Check the output files at every stage.
- Change the design before it depended on an external system.

The project then connected MCP to Azure DevOps. Because each stage reads and writes a defined file, the other stages could stay independent of the new source.

| Stage | File | What it contains |
|---|---|---|
| Fetch and consolidate | `collected-release-data.json` | Source data from the manifest and Azure DevOps |
| Analyze | `analyzed-release.json` | The source data, plus AI-derived analysis |
| Review | `review-report.json` and `review-report.md` | Quality and readiness findings |
| Generate | Customer and technical drafts | Audience-specific Markdown content |

:::tip

Keep one stage in mind when you write an example. An example for the Generate stage should match the format of the final draft, not the format of the source data.

:::

---

## How-to: Write an example pair

**Goal:** Show an AI tool what a good customer-facing note looks like for a technical work item.

The example below is illustrative. It is not generated output from the project.

Markdown source:

````markdown
### Example pair: Work item to customer note

**Input (mock work item):**

```text
ID: 1042 (mock)
Type: Bug
Title: Fix null reference in navigation menu when no items are returned
Impact: Users with empty navigation groups see an error page.
```

**Output (customer-facing note):**

```text
Fixed an issue where the navigation menu showed an error page when a
section had no items. The menu now displays an empty section instead.
```
````

**Result:** The reader sees one input, one output, and the label that shows the example is mock data. The output describes the change in customer language, and it does not mention the internal ID or the technical term "null reference".

:::warning

Label every example as mock or illustrative. A reader who sees a real-looking ticket number may assume that the example came from a live system.

:::

---

## How-to: Add examples to a prompt

**Goal:** Give an AI tool an example pair and the instruction to follow it.

Use the RTCCO structure from the Claude Code lesson. Include one or two example pairs in the Context part.

Before (no example):

```text
Write a release note for this work item.
```

After (with an example pair):

```text
Role: You are a technical writer who writes customer-facing release notes.

Task: Write a release note for the work item below.

Context: Follow the style of the example. Use plain language. Do not mention internal IDs.

Example input: Bug 1042 (mock). Title: Fix null reference in navigation menu.
Example output: Fixed an issue where the navigation menu showed an error page when a section had no items.

Constraints: Use one or two sentences. Do not use technical terms such as null reference.

Output: A single paragraph.

Work item to write for: Bug 2208 (mock). Title: Correct date format in the release summary.
```

**Result:** The AI returns a short paragraph in the same style as the example. Check the result against the Constraints line before you use it.

:::note

Use only two or three examples in a prompt. More examples make the prompt longer, and the AI can copy the details of an example too closely.

:::

---

## How-to: Check AI output against your examples

**Goal:** Confirm that an AI draft follows your style before you use it.

Use this checklist for each draft:

| Check | Question | Example failure |
|---|---|---|
| Length | Is the draft as long as the example? | A three-paragraph note for a one-line change |
| Terminology | Does it use the approved terms? | A technical term that customers do not know |
| Internal details | Does it avoid ticket numbers and internal names? | "See ticket 1042" in a public note |
| Accuracy | Does it describe only what the work item says? | A feature that was not in the work item |
| Tone | Does it match the example? | A casual phrase in a formal note |

**Result:** You know which drafts need edits, and which checks the AI missed. Record the failures, and update your examples or your prompt.

---

## How-to: Document an example in the repository

**Goal:** Store an example so that reviewers can trust and maintain it.

Markdown source:

````markdown
### Example set: Navigation fixes (mock)

| Item | Value |
|---|---|
| Data type | Mock |
| Purpose | Teach the AI to write one-sentence fix notes |
| Last reviewed | Add the review date |
| Reviewer | Add the name of the reviewer |
| Source | Written for this lesson. Not from a live system. |
````

**Result:** Each example set shows its data type, purpose, review date, reviewer, and source. A reviewer can see at a glance whether the example is safe and current.

:::note

Review example sets when the style guide or the product changes. An example that describes an old feature teaches the AI the wrong behavior.

:::

---

## Docs-as-Code workflow for example sets

Use this workflow when you add or change an example set.

```text
Create a branch
    ↓
Write the example pair, and label it
    ↓
Check the example for real or sensitive data
    ↓
Test the examples with the prompt
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Peer review and technical review
```

**Step 1: Create a branch.**

```bash
git switch -c docs/ai-examples-lesson
```

**Step 2: Check for sensitive data.**

Search the file for ticket numbers, names, and any text that came from a real system. Replace each real value with a mock value.

**Step 3: Build the site.**

```bash
npm run build
```

**Step 4: Commit and push.**

```bash
git add docs/09-AI/Examples.md
git commit -m "Add AI examples lesson"
git push -u origin docs/ai-examples-lesson
```

:::warning

Git keeps the history of every commit. If real customer data reaches a commit, the data remains in the history even after you delete it. Remove the data before you commit, and report the problem to your team if it already reached the repository.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The example uses real customer or ticket data. | Private information is stored in the repository. | Replace the data with mock values before you commit. |
| The example is not labelled as mock or illustrative. | Readers assume it came from a live system. | Add a label to every example. |
| The examples conflict with each other. | The AI output is inconsistent. | Use examples that follow the same rules. |
| The example describes an old feature. | The AI repeats outdated information. | Review example sets when the product changes. |
| The prompt uses too many examples. | The AI copies details from one example. | Use two or three examples at most. |
| The AI output is accepted without a check. | Errors reach a published note. | Use the checklist before each draft is used. |

---

## Summary

In this lesson, you learned that:

- Examples shape the output of an AI tool, so review them carefully.
- Choose the example type that matches the task.
- Mock data is useful for testing, and it must never contain real or sensitive data.
- An example pair shows an input and a good output in the same style.
- Check each AI draft against your examples, your style guide, and your facts.
- Document each example set with its data type, purpose, reviewer, and source.

The aim is simple:

**Give the AI examples that teach the style you need, and check every result before it is used.**

---

## Practice exercise

Use this repository.

1. Read the "Why Mock Data?" section of the case study. Write two sentences that explain why the project started with mock data.
2. Write one example pair. Use a mock work item as the input, and write a customer-facing note as the output. Label the example as mock.
3. Write a prompt that uses your example pair, with the RTCCO structure. Include a Constraints line.
4. Use the checklist in this lesson to check a draft. Record one failure, if you find one.
5. Search your example for any real or sensitive data. Replace any that you find, and run `npm run build` before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Why do examples shape AI output?</strong></summary>

An AI model learns a pattern from the examples in its input. It often repeats the tone, length, and structure of an example.

</details>

<details>
<summary><strong>2. What is an example pair?</strong></summary>

An example pair shows an input and the output that you want. It teaches the AI the expected result for a similar input.

</details>

<details>
<summary><strong>3. What is a counter-example?</strong></summary>

A counter-example shows an output that you do not want. For example, a note that includes an internal ticket number.

</details>

<details>
<summary><strong>4. Why did the release note project start with mock data?</strong></summary>

Mock data let the team test the architecture and each output stage before it connected to Azure DevOps and ServiceNow.

</details>

<details>
<summary><strong>5. What should every example be labelled as?</strong></summary>

Mock or illustrative, so that readers do not assume that it came from a live system.

</details>

<details>
<summary><strong>6. Why should a prompt use only two or three examples?</strong></summary>

More examples make the prompt longer. The AI can also copy the details of an example too closely.

</details>

<details>
<summary><strong>7. What should you check in an AI draft?</strong></summary>

Length, terminology, internal details, accuracy, and tone. Compare the draft with your examples and your style guide.

</details>

<details>
<summary><strong>8. Why must you not commit real customer data in an example?</strong></summary>

Git keeps the history of every commit. Data that reaches a commit remains in the history, even after you delete it.

</details>

<details>
<summary><strong>9. What should an example set document?</strong></summary>

Its data type, purpose, last review date, reviewer, and source.

</details>

<details>
<summary><strong>10. What is the main goal of using examples in AI-assisted documentation?</strong></summary>

The goal is to teach the AI the style you need, and to check every result before it is used.

</details>

---

## Next module

Continue to **Module 11 · Automation**. You will learn how to automate documentation tasks with scripts and workflows.
