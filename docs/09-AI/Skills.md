---
title: Skills
sidebar_position: 4
description: Learn how to design, write, test, and review reusable AI skills for documentation tasks, using clear instructions and a human review step.
---

# Skills

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Claude Code lesson, and the Examples lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a skill is, and how it differs from a prompt, a project memory file, and a slash command.
- Identify tasks that are good candidates for a skill.
- Describe the parts of a skill, including its description and instructions.
- Write a skill description that helps the AI choose the skill at the right time.
- Apply the RTCCO structure to skill instructions.
- Test a skill with examples, and record the results.
- Review and version a skill in Git, like any other documentation change.

---

## Why skills matter for technical writers

Writers repeat the same kinds of tasks. You check a page against the style guide, rewrite a release note, or review a table. Each time, you give the AI the same rules and the same examples.

A skill stores those rules once. When a task matches the skill, the AI loads the instructions and follows them. This gives your team consistent results, and it reduces the time spent on repeated prompts.

> **Documentation Manager's Tip**
>
> Write a skill only after you have done the same task by hand at least three times. A skill built from a clear, repeated process is easy to test and review. A skill built from a guess is hard to trust.

---

## Before you start

Make sure you have:

- Completed the Claude Code lesson, and understood the RTCCO structure.
- Completed the Examples lesson, and understood example pairs.
- The course repository cloned to your computer.
- Read the blog article about the release note project, which describes reusable Claude skills.

:::note

**For beginners**

A skill is a set of written instructions for one kind of task. The AI reads the skill when the task matches. You do not run a skill by hand, unless your tool provides a command for it.

:::

---

## Skills, prompts, memory, and commands

Several AI features give the AI instructions. Each one has a different scope and a different trigger.

| Feature | Scope | When it is used | Example |
|---|---|---|---|
| Prompt | One request | When you type it | "Summarize this page." |
| Project memory (`CLAUDE.md`) | The whole project | Every session | Writing standards for all pages |
| Skill | One kind of task | When the task matches the skill | Check a page against the style guide |
| Slash command | One action | When you type its name | `/review-release-analysis` |

:::important

Use a skill for a task that repeats and has clear rules. Use project memory for rules that apply to every task. Use a prompt for a one-time request.

:::

---

## Parts of a skill

A skill is usually a folder. The main file is named `SKILL.md`. It has two parts: a short header with a name and a description, and a body with the instructions.

Illustrative example of a skill file:

```markdown
---
name: style-check-markdown
description: Checks a documentation page against the team style guide. Use when a writer asks for a style review of a Markdown page, or before a pull request.
---

# Style check for Markdown pages

## Role
You are a technical editor who follows the team style guide.

## Task
Review the Markdown page that the writer provides.

## Context
The page is a lesson for technical writers. The team uses simple technical English and sentence case headings.

## Constraints
- Do not change the file.
- Do not change code blocks, links, or placeholders.
- Report only issues that you can point to in the text.

## Output
A table with the columns: Line, Issue, Suggested change.
```

**Result:** The file contains everything the AI needs for the task. The description tells the AI when to use the skill. The body tells the AI how to do the task.

---

## Write a useful description

The description decides when the AI uses a skill. A vague description causes the skill to load at the wrong time, or not at all.

| Description | Quality | Why |
|---|---|---|
| "Helps with writing." | Poor | It does not say what the skill does, or when to use it. |
| "Checks Markdown pages for style issues." | Fair | It says what the skill does, but not when to use it. |
| "Checks a Markdown page against the team style guide. Use when a writer asks for a style review, or before a pull request." | Good | It says what the skill does, and when to use it. |

:::tip

Write the description as a short sentence that a reader can understand without opening the skill. Include the words that a writer would use to ask for the task.

:::

---

## Choose a good task for a skill

Use this table to decide whether a task is suitable for a skill.

| Question | Good answer | Warning sign |
|---|---|---|
| Does the task repeat? | Yes, every release or every page | It happens once |
| Are the rules clear? | Yes, you can write them down | The rules change each time |
| Can the result be checked? | Yes, against the style guide or the source data | The result has no clear test |
| Does a person approve the result? | Yes | The skill publishes content on its own |

If the answer to the last question is "no", do not build the skill. Keep the review step with a person.

---

## How-to: Write the instructions with RTCCO

**Goal:** Turn a manual task into clear skill instructions.

Before (vague instructions):

```markdown
Check the page for problems.
```

After (RTCCO instructions):

````markdown
## Role
You are a technical editor who follows the team style guide.

## Task
Find sentences that use passive voice, long sentences, or jargon that new writers may not know.

## Context
The page is a lesson for technical writers. Keep the simple technical English style.

## Constraints
- Do not change the file.
- Do not report code blocks.
- Report only issues that you can quote from the text.

## Output
A table with: Quote, Issue, Suggested rewrite.
````

**Result:** The instructions tell the AI what to check, what to ignore, and what to return. The reviewer can compare the output with the quoted text.

---

## How-to: Test a skill with examples

**Goal:** Check that a skill gives correct results before the team uses it.

Use at least three test inputs. Choose one good page, one page with known problems, and one page with mixed content.

**Step 1: Prepare the test inputs.**

Choose three pages from `docs/09-AI`. Write down the problems you already know about each page.

**Step 2: Run the skill on each page.**

Start the AI tool, and load the skill for each page.

**Step 3: Record the results.**

| Test page | Known problems | Problems found | Missed | False alarms |
|---|---|---|---|---|
| `Cursor.md` | 2 | | | |

Fill in the table for each run.

**Step 4: Improve the skill.**

If the skill misses problems, add a clearer instruction. If it reports false alarms, add a constraint. Run the tests again.

**Result:** You know how well the skill works, and where it needs improvement.

:::important

A skill that passes one test is not ready for the team. Run the skill on several pages, including pages that you have not used when you wrote the instructions.

:::

---

## How-to: Review and version a skill in Git

**Goal:** Store a skill in the repository, and review changes like any other documentation change.

Store each skill in its own folder, and commit changes through a pull request.

```bash
git switch -c docs/skill-style-check
git add .claude/skills/style-check-markdown/SKILL.md
git commit -m "Add style check skill for Markdown pages"
git push -u origin docs/skill-style-check
```

**Result:** The skill is stored in the repository. Each change has a commit message, and reviewers can see what changed.

:::note

Use the folder that your AI tool expects for skills. Check the current Claude Code documentation for the correct location. Do not use this example path unless your tool reads it.

:::

---

## Safety rules for skills

A skill changes how the AI behaves. Review it as carefully as code.

| Rule | Why it matters |
|---|---|
| Do not put secrets in a skill. | Skills are stored in the repository, and they can be shared. |
| Restrict what the skill may change. | A skill that edits many files can cause large errors. |
| Require human review for publishing. | The skill must not publish content on its own. |
| Document each skill's purpose and limits. | Other writers must know when to use it, and when not to. |

:::warning

A skill that can run commands or change files can cause real harm if its instructions are wrong. Review each skill with a technical reviewer before the team uses it.

:::

---

## Docs-as-Code workflow for skills

Use this workflow when you create or change a skill.

```text
Choose a repeated task
    ↓
Write the description and instructions
    ↓
Test the skill on three or more pages
    ↓
Record the results, and improve the skill
    ↓
Commit, push, and open a pull request
    ↓
Technical review and peer review
    ↓
Publish the skill to the team
```

**Step 1: Create a branch.**

```bash
git switch -c docs/skills-lesson
```

**Step 2: Build the site after you update the lesson.**

```bash
npm run build
```

**Step 3: Commit and push the lesson.**

```bash
git add docs/09-AI/Skills.md
git commit -m "Add skills lesson"
git push -u origin docs/skills-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The description is vague. | The skill loads at the wrong time, or not at all. | Write a description that says what the skill does and when to use it. |
| The skill has no constraints. | The AI changes more than the task needs. | Add a Constraints section. |
| The skill is not tested. | Errors reach the team. | Test on at least three pages. |
| The skill contains a secret. | The secret is stored in the repository. | Remove the secret, and revoke it. |
| The skill publishes content. | Content reaches readers without approval. | Keep the approval step with a person. |
| The skill is changed without a review. | Team members get different results. | Review each change in a pull request. |

---

## Summary

In this lesson, you learned that:

- A skill is reusable instructions for one kind of task.
- A skill differs from a prompt, project memory, and a slash command.
- The description tells the AI when to use the skill.
- The RTCCO structure makes the instructions clear.
- Test a skill on several pages before you share it.
- Review and version skills in Git, and keep secrets out of them.

The aim is simple:

**Turn a repeated documentation task into a clear, tested, and reviewed set of instructions.**

---

## Practice exercise

Use this repository.

1. Choose a task that you repeat, such as checking tables or sentence case. Write three sentences that explain why it suits a skill.
2. Write a skill description that says what the skill does and when to use it.
3. Write the instructions with the four RTCCO parts: Role, Task, Context, and Constraints, plus an Output section.
4. Test the instructions on three pages from `docs/09-AI`. Record the problems found and missed.
5. Run `npm run build` to check any Markdown you change before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is a skill?</strong></summary>

A skill is a set of reusable instructions for one kind of task. The AI loads it when the task matches the skill.

</details>

<details>
<summary><strong>2. How does a skill differ from project memory?</strong></summary>

Project memory applies to every session in the project. A skill applies only when a task matches its description.

</details>

<details>
<summary><strong>3. What is the purpose of the description in a skill?</strong></summary>

The description tells the AI when to use the skill. A clear description helps the AI choose the skill at the right time.

</details>

<details>
<summary><strong>4. Which tasks are good candidates for a skill?</strong></summary>

Tasks that repeat, have clear rules, and produce results that a person can check.

</details>

<details>
<summary><strong>5. Why should a skill include a Constraints section?</strong></summary>

It limits what the AI may do, such as not changing the file or not changing code blocks.

</details>

<details>
<summary><strong>6. How many pages should you use to test a skill?</strong></summary>

At least three, including pages that you did not use when you wrote the instructions.

</details>

<details>
<summary><strong>7. Why should you keep secrets out of a skill?</strong></summary>

Skills are often stored in the repository and shared with the team. A secret in a skill is exposed to everyone with access.

</details>

<details>
<summary><strong>8. Why should a skill not publish content on its own?</strong></summary>

Publishing is a decision that a person must approve. An automated publish step can reach readers before the content is reviewed.

</details>

<details>
<summary><strong>9. How should you change a skill after the team starts using it?</strong></summary>

Make the change in a branch, record the reason in the commit message, and review it in a pull request.

</details>

<details>
<summary><strong>10. What is the main goal of writing a skill?</strong></summary>

The goal is to turn a repeated documentation task into clear, tested, and reviewed instructions that the team can use consistently.

</details>

---

## Next lesson

Continue to **Plugins**. You will learn how plugins add features to AI tools, and how to review them before your team uses them.
