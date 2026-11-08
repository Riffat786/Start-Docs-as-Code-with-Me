---
title: Prompt engineering
sidebar_position: 3
description: Learn how to write, test, and version prompts that give clear, consistent, and reviewable results for documentation work.
---

# Prompt engineering

> **Lesson level:** Beginner
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Claude Code lesson, and the Examples lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a prompt is, and why its wording changes the result.
- Write a prompt that states the task, the context, the constraints, and the output.
- Use the RTCCO structure in documentation prompts.
- Choose between a plain request and an example-based prompt.
- Test a prompt with several inputs, and record the results.
- Version a prompt in Git, so that a result can be traced to its prompt.
- Check AI output against the facts and the style guide.

---

## Why prompt engineering matters for technical writers

A prompt is the instruction you give an AI tool. Two prompts about the same task can give very different results. A vague prompt gives a vague answer. A clear prompt gives a result that you can check.

Writers do prompt engineering whenever they ask an AI tool for help. Doing it well saves time, and it reduces the number of corrections you need to make.

> **Documentation Manager's Tip**
>
> Write each prompt as if a new colleague will run it next month. If the colleague cannot repeat your result from the prompt alone, the prompt is not finished.

---

## Before you start

Make sure you have:

- Completed the Claude Code lesson, and the Examples lesson.
- An AI tool that your team has approved for documentation work.
- The course repository cloned to your computer.
- A page from this module that you can use for testing.

:::note

**For beginners**

A prompt is a written request. Prompt engineering means writing that request so that the AI does the task you need, in the form you need, every time.

:::

---

## Anatomy of a clear prompt

A clear prompt answers five questions. The RTCCO structure is one way to answer them.

| Part | Question it answers | Example |
|---|---|---|
| Role | Who should the AI act as? | "You are a technical editor." |
| Task | What should it do? | "List sentences that are not in simple technical English." |
| Context | What background does it need? | "The page is a lesson for new technical writers." |
| Constraints | What must it not do? | "Do not change the file." |
| Output | What should the result look like? | "A table with: Line, Issue, Suggested change." |

The Claude Code lesson and the Skills lesson use the same structure. Keep the structure the same across your prompts, so that the team can read them quickly.

---

## Compare a vague prompt with a clear prompt

Use the table to see how each part changes the result.

| Version | Prompt | What the AI is likely to do |
|---|---|---|
| Vague | "Improve this page." | Changes wording and structure without a clear goal |
| Better | "Improve this page for clarity." | Improves some sentences, but may change facts |
| Clear | "Role: technical editor. Task: list unclear sentences. Constraints: do not change the file. Output: a table." | Returns a list you can check line by line |

:::important

A clear prompt does not make the AI correct. It makes the result easier to check. You still review every fact, every link, and every example.

:::

---

## Choose a prompt technique

Different tasks need different techniques. Use the table to choose.

| Technique | When to use it | Example |
|---|---|---|
| Plain request | A simple, low-risk task | "Summarize this page in five bullets." |
| RTCCO prompt | A task with clear rules and a defined output | A style review with a table output |
| Example-based prompt | The output must match a style or format | An input and output pair from the Examples lesson |
| Step-by-step prompt | A task has several stages | "First list the headings. Then check each one." |

:::tip

Start with the simplest technique that works. Add structure only when the result is not consistent.

:::

---

## How-to: Improve a vague prompt

**Goal:** Turn a vague request into a prompt that gives a checkable result.

Before (vague prompt):

```text
Check this page.
```

After (RTCCO prompt):

````text
Role: You are a technical editor who follows the team style guide.

Task: Review the Markdown page that I provide. Find sentences that are long, use passive voice, or use terms that new writers may not know.

Context: The page is a lesson for technical writers. Use simple technical English.

Constraints:
- Do not change the file.
- Do not change code blocks, links, or placeholders.
- Report only issues that you can quote from the page.

Output: A table with the columns Quote, Issue, and Suggested rewrite.
````

**Result:** The AI returns a table of quotes. You can compare each quote with the page. A quote that does not appear in the page shows that the result needs checking.

---

## How-to: Test a prompt with several inputs

**Goal:** Check that a prompt gives consistent results across different pages.

Use at least three inputs. Choose one clean page, one page with known problems, and one long page.

**Step 1: Record the expected results.**

For each input, write the problems you already know about.

**Step 2: Run the prompt on each input.**

Use the same prompt text each time. Do not change the wording during the test.

**Step 3: Record the results in a log.**

| Version | Input | Known problems | Found | Missed | False alarms |
|---|---|---|---|---|---|
| v1 | `Cursor.md` | 2 | | | |

**Step 4: Change one part of the prompt.**

Change one part, such as a constraint. Record the new version, and run the test again.

**Result:** You can see which change improved the results, and which change made them worse.

:::important

Change one part of the prompt at a time. If you change several parts together, you cannot tell which change caused the result.

:::

---

## How-to: Version a prompt in Git

**Goal:** Store prompts so that a result can be traced to the prompt version that produced it.

The Architecture Decision Record for the release note project records the Prompt Version, the Reviewer Agent Version, and the review timestamp for each review. This lets the team trace a review result to the prompt that produced it.

Store each prompt in a file, and give it a version number in its header:

````markdown
# Prompt: style review for Markdown pages

Version: 1.2
Owner: Documentation team
Last tested: Add the date
Changes in this version: Added a constraint about code blocks.
````

Commit each change in a pull request, so that a reviewer can compare the versions.

**Result:** Each result can be traced to a prompt version. A reviewer can see when and why the prompt changed.

:::note

Record the prompt version in the review output, if your tool allows it. A result without a prompt version is hard to explain later.

:::

---

## How-to: Check AI output before you use it

**Goal:** Confirm that an AI result is accurate, complete, and suitable for the page.

Use this checklist:

| Check | Question |
|---|---|
| Facts | Does each fact match the source, such as the OpenAPI contract or the release notes? |
| Completeness | Does the result cover every item that the task asked for? |
| Format | Does it follow the output format in the prompt? |
| Style | Does it use the approved terms and tone? |
| Constraints | Did the AI respect each constraint, such as not changing code blocks? |

**Result:** You know which parts of the result need an edit, and which parts can be used as they are.

---

## Docs-as-Code workflow for prompts

Use this workflow when you create or change a prompt that the team uses.

```text
Write the prompt with RTCCO
    ↓
Test on three or more inputs
    ↓
Record the results, and change one part
    ↓
Version the prompt file
    ↓
Commit, push, and open a pull request
    ↓
Peer review of the prompt and the test log
    ↓
Share the approved version with the team
```

**Step 1: Create a branch.**

```bash
git switch -c docs/prompt-engineering-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/09-AI/Prompt-Engineering.md
git commit -m "Add prompt engineering lesson"
git push -u origin docs/prompt-engineering-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The prompt has no output format. | The result is hard to check. | Add an Output line, such as a table. |
| The prompt has no constraints. | The AI changes more than the task needs. | Add a Constraints line. |
| The prompt is changed in several places at once. | You cannot tell what caused the result. | Change one part at a time, and test each change. |
| The prompt is not stored or versioned. | The team cannot repeat or explain a result. | Store the prompt in a file with a version number. |
| The output is accepted without a check. | Errors reach a published page. | Use the checklist before the result is used. |
| The prompt contains a real secret or private data. | The data is shared with the AI service. | Use placeholders and mock data. |

---

## Summary

In this lesson, you learned that:

- A clear prompt states the role, task, context, constraints, and output.
- The right technique depends on the task. Start with the simplest one that works.
- Test a prompt with several inputs, and change one part at a time.
- Version prompts in Git, so that each result can be traced.
- Check every result against the facts, the format, and the style guide.

The aim is simple:

**Write prompts that give results you can check, repeat, and explain.**

---

## Practice exercise

Use this repository.

1. Write a vague prompt that asks for a review of `docs/09-AI/Cursor.md`. Then rewrite it using the RTCCO structure.
2. Run your RTCCO prompt on three pages from `docs/09-AI`. Record the results in a log table.
3. Change one constraint in the prompt. Run it again, and record whether the result improved.
4. Store your final prompt in a Markdown file, with a version number and a changes line.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is a prompt?</strong></summary>

A prompt is the written instruction that you give an AI tool. Its wording changes the result.

</details>

<details>
<summary><strong>2. What are the five parts of the RTCCO structure?</strong></summary>

Role, Task, Context, Constraints, and Output.

</details>

<details>
<summary><strong>3. Why does a clear prompt make a result easier to check?</strong></summary>

It states the output format and the limits. The result follows a defined shape, and you can compare it with the page.

</details>

<details>
<summary><strong>4. When should you use an example-based prompt?</strong></summary>

When the output must match a style or a format. Include an input and output pair, as described in the Examples lesson.

</details>

<details>
<summary><strong>5. Why should you test a prompt with several inputs?</strong></summary>

A prompt can work for one page and fail for another. Several inputs show whether the results are consistent.

</details>

<details>
<summary><strong>6. Why should you change one part of a prompt at a time?</strong></summary>

If you change several parts together, you cannot tell which change caused the result.

</details>

<details>
<summary><strong>7. Why should a prompt have a version number?</strong></summary>

A version number lets you trace a result to the prompt that produced it, and explain why the result changed.

</details>

<details>
<summary><strong>8. Which record in the release note project shows a prompt version?</strong></summary>

The review artifact. The architecture decision record lists the Prompt Version with the Reviewer Agent Version and the review timestamp.

</details>

<details>
<summary><strong>9. What should you check before you use an AI result?</strong></summary>

Facts, completeness, format, style, and constraints.

</details>

<details>
<summary><strong>10. What is the main goal of prompt engineering for documentation work?</strong></summary>

The goal is to write prompts that give results you can check, repeat, and explain.

</details>

---

## Next lesson

Continue to **Skills**. You will learn how to write reusable instructions for repeated documentation tasks.
