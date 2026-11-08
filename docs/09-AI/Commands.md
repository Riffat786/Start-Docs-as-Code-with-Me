---
title: Commands
sidebar_position: 10
description: Learn how commands work in a Docs-as-Code project, how to read and run npm scripts safely, and how to document commands clearly for other writers.
---

# Commands

> **Lesson level:** Beginner
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Claude Code lesson, and the Install Node.js lesson in Module 2.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a command is, and identify its parts.
- Tell the difference between a terminal command, an npm script, a Git command, and a slash command.
- Read the npm scripts in this project before you run them.
- Run a project script and check the result.
- Identify commands that change files or publish content.
- Document a command in Markdown with a placeholder and an expected result.
- Apply a Docs-as-Code workflow to command examples.

---

## Why commands matter for technical writers

Documentation work uses many commands. You use commands to start a preview, build a site, check changes, and publish a page. Readers also follow commands in your guides.

A wrong command can waste time. A risky command can change or delete work. Writers must understand each command before they run it or publish it.

> **Documentation Manager's Tip**
>
> Read a command before you run it. Ask: "What does this change, and can I undo it?" If you cannot answer both questions, do not run the command yet.

---

## Before you start

Make sure you have:

- Completed the Claude Code lesson.
- Installed Node.js, as described in the Install Node.js lesson.
- Visual Studio Code or Cursor, with the course repository open.
- A terminal open in the project folder.

:::note

**For beginners**

A command is an instruction that you type into a terminal. The terminal sends the instruction to a program, and the program does the work. Most commands print a result, and some commands change files.

:::

---

## What is a command?

Most commands follow the same pattern:

```text
tool    subcommand    option    argument
npm     run           --help    build
```

| Part | Meaning | Example |
|---|---|---|
| Tool | The program that runs the command | `npm`, `git` |
| Subcommand | The action that the tool performs | `run`, `status` |
| Option | A setting that changes the action. Options often start with two dashes. | `--port 3001` |
| Argument | The value that the action uses | `build`, a file name |

Some options and arguments are optional. A command can run without them.

---

## Types of commands in this project

This project uses four types of commands. Each type comes from a different tool.

| Type | Example | Where it runs | Typical use |
|---|---|---|---|
| Terminal command | `cd docs` | Terminal | Move around your folders |
| npm script | `npm run build` | Terminal, with the project's `package.json` | Start, build, or check the site |
| Git command | `git status` | Terminal | Track and save changes |
| Slash command | `/review-release-analysis` | Inside a Claude Code session | Run a saved AI workflow step |

The same word can mean different things in different tools. For example, `clear` is a terminal command, and `npm run clear` is a Docusaurus command that removes cached build files.

---

## The npm scripts in this project

The file `package.json` lists the scripts for this project. Each script is a shortcut for a longer command.

| Script | What it does | Changes files? | Risk |
|---|---|---|---|
| `npm run start` | Starts a local development server | No | Low |
| `npm run build` | Creates the static site in the `build` folder | Creates the `build` folder | Low |
| `npm run serve` | Serves the last build locally | No | Low |
| `npm run clear` | Removes the Docusaurus cache | Removes cache files | Low |
| `npm run typecheck` | Checks TypeScript files for errors | No | Low |
| `npm run deploy` | Publishes the site to GitHub Pages | Publishes content | High |

:::warning

Do not run `npm run deploy` to test a change. It publishes the site. Only run it after the content is approved and the pull request is merged, and only if your team has agreed on the release process.

:::

---

## How-to: List the available scripts

**Goal:** See which scripts this project defines before you run one.

**Step 1: Open a terminal in the project folder.**

**Step 2: Run the command.**

```bash
npm run
```

Expected result: npm lists the scripts in `package.json`, such as `start`, `build`, and `deploy`. Read the list, and check the description of each script in the table above before you run it.

:::tip

Use `npm run` without a script name when you are not sure which script to run. The command does not change any files.

:::

---

## How-to: Run a script and check the result

**Goal:** Build the site, and confirm that the build succeeds.

**Step 1: Run the build.**

```bash
npm run build
```

**Step 2: Check the output.**

Expected result: The output ends with a line that starts with `[SUCCESS]`. The build creates a `build` folder in the project.

**Step 3: Find the error if the build fails.**

If the output shows `[ERROR]` or a line that starts with `Module build failed`, read the file name and line number in the message. Fix that line, and run the build again.

**Result:** You can confirm that the site builds before you commit a change.

---

## How-to: Document a command in Markdown

**Goal:** Show a command that readers can copy, with a placeholder and an expected result.

Markdown source:

````markdown
### Build the site

Run this command from the project folder:

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`.

### Serve the site on another port

Replace `<port-number>` with a free port on your computer, such as `3001`:

```bash
npm run serve -- --port <port-number>
```
````

**Result:** The reader sees the command, the placeholder, and the expected result. The placeholder shows where the reader adds a value.

:::important

Put placeholders inside code blocks or inline code only. In normal text, angle brackets can break the page build. Write `<port-number>` in a code block, and describe it in words elsewhere.

:::

---

## How-to: Document a workflow command

**Goal:** Describe a multi-step command workflow, such as the release note workflow in this repository.

The case study lists six commands in order. Each command has an input and an output. Use a table with the same columns:

| Step | Command | Input | Output |
|---|---|---|---|
| 1 | `/prepare-release` | Release tag | Prepared release workspace |
| 2 | `/fetch-release-data` | Prepared release file | `input/work-items.json` |
| 3 | `/consolidate-release-data` | Manifest and work items | `collected-release-data.json` |

**Result:** The reader sees the order, the input for each step, and the output that the next step needs. A command workflow is easier to follow when each step has a clear input and output.

:::note

The AI Agents lesson describes which agent runs each step. Link to that lesson from this table, instead of repeating the agent details.

:::

---

## Commands that need extra care

Some commands change files, delete data, or publish content. Check these points before you run them.

| Check | Question to ask |
|---|---|
| Location | Am I in the correct project folder? |
| Effect | Does this command change, delete, or publish anything? |
| Reversibility | Can I undo the result with Git, or is the change permanent? |
| Approval | Does this command need a review before it runs? |

:::warning

A command that changes files is safe only when the change is in Git, and you can review it with `git diff`. A command that publishes content can reach readers at once. Check the Approval row before you run it.

:::

---

## Platform differences

The examples in this lesson use the Bash format. Windows PowerShell uses different syntax in some cases.

| Task | Bash | PowerShell |
|---|---|---|
| Run two commands in order | `npm run build && npm run serve` | `npm run build; npm run serve` |
| Set an environment variable | `export NAME=value` | `$env:NAME = "value"` |

Check the terminal that your team uses. Document the platform in the page when the commands differ.

---

## Docs-as-Code workflow for command examples

Use this workflow when you change a command page.

```text
Create a branch
    ↓
Check each command in a terminal
    ↓
Update the Markdown page
    ↓
Run npm run start to preview
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Peer review
```

**Step 1: Create a branch.**

```bash
git switch -c docs/commands-lesson
```

**Step 2: Run each command that the page shows.**

Confirm that the command works and that the expected result matches the page.

**Step 3: Build the site.**

```bash
npm run build
```

**Step 4: Commit and push.**

```bash
git add docs/09-AI/Commands.md
git commit -m "Add commands lesson"
git push -u origin docs/commands-lesson
```

:::note

If the page shows a command that you did not run, do not publish it. Commands that look correct can still fail because of the project setup.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Running a command from the wrong folder. | The command fails, or it changes the wrong files. | Check the terminal path before you run a command. |
| Running `npm run deploy` to test a change. | The site is published before it is approved. | Use `npm run build` and `npm run serve` for testing. |
| Copying a placeholder without replacing it. | The command fails with an unclear error. | Show the placeholder clearly, and explain how to replace it. |
| Documenting a command that was never tested. | Readers lose trust in the guide. | Run every command on the page before you publish. |
| Using Bash syntax in a PowerShell terminal. | The command fails. | Show the platform, or give both versions. |
| Writing a placeholder in normal text. | The page build can fail. | Place placeholders in code blocks or inline code. |

---

## Summary

In this lesson, you learned that:

- A command has a tool, a subcommand, options, and arguments.
- This project uses terminal commands, npm scripts, Git commands, and slash commands.
- Use `npm run` to list the scripts, and read the table before you run a script.
- `npm run deploy` publishes the site, so use it only after approval.
- Document commands with placeholders and expected results.
- Run every command on a page before you publish it.

The aim is simple:

**Show readers exactly which command to run, what it changes, and how to check the result.**

---

## Practice exercise

Use this repository.

1. Open a terminal in the project folder. Run `npm run` to list the scripts.
2. For each script in `package.json`, write one sentence that says what it does, and whether it changes files.
3. Run `npm run build`. Record the last line of the output.
4. Write a Markdown section that shows the build command, with an expected result. Use the format from the lesson.
5. Explain in one sentence why you would not run `npm run deploy` to test a change.

---

## Knowledge check

<details>
<summary><strong>1. What are the four parts of a command?</strong></summary>

A tool, a subcommand, options, and arguments. Options and arguments are optional for some commands.

</details>

<details>
<summary><strong>2. What is an npm script?</strong></summary>

A named shortcut that is defined in `package.json`. It runs a longer command, such as `npm run build`.

</details>

<details>
<summary><strong>3. How can you see the scripts that this project defines?</strong></summary>

Run `npm run` in the project folder. npm lists the scripts from `package.json`.

</details>

<details>
<summary><strong>4. Which script in this project publishes the site?</strong></summary>

`npm run deploy`. It publishes the site, so run it only after the content is approved.

</details>

<details>
<summary><strong>5. What does `npm run build` create?</strong></summary>

A `build` folder that contains the static site. The command also prints a `[SUCCESS]` line when the build completes.

</details>

<details>
<summary><strong>6. Why should you check the terminal path before you run a command?</strong></summary>

A command runs in the folder where the terminal is open. A command that runs in the wrong folder can change the wrong files.

</details>

<details>
<summary><strong>7. Where should you place a placeholder such as `<release-folder>` in a Markdown page?</strong></summary>

Inside a code block or inline code. In normal text, angle brackets can break the page build.

</details>

<details>
<summary><strong>8. What is a slash command?</strong></summary>

A short command that runs inside a Claude Code session. It starts a saved request or a workflow step, such as `/review-release-analysis`.

</details>

<details>
<summary><strong>9. Why should you run every command on a page before you publish it?</strong></summary>

A command can look correct and still fail because of the project setup. Running it confirms that the command and the expected result are correct.

</details>

<details>
<summary><strong>10. What is the main goal of documenting commands?</strong></summary>

The goal is to show readers the exact command to run, what it changes, and how to check the result.

</details>

---

## Next lesson

Continue to **Cursor**. You will learn how to use Cursor as an AI-enabled code editor for documentation projects.
