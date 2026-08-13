---
title: Markdown Callouts
sidebar_label: Callouts
sidebar_position: 4
description: Learn how to use callouts to highlight useful information in technical documentation.
---

# Markdown Callouts

> **Lesson level:** Beginner
>
> **Time to complete:** 15–20 minutes
>
> **Prerequisites:** Complete [Markdown Basics](./Basics.md) and [Markdown Best Practices](./Best-Practices.md).

---

## Learning objectives

After you complete this lesson, you will be able to:

- Understand what a callout is.
- Understand when to use a callout.
- Choose the appropriate type of callout.
- Create callouts in Docusaurus.
- Use notes, tips, important information, and warnings appropriately.
- Avoid using callouts when normal text is clearer.
- Keep callouts useful and consistent across the documentation.

---

## What is a callout?

A callout is a visually highlighted section of content.

Callouts are useful when information needs to stand out from the main flow of the page.

For example:

> **Note**
>
> This command works only on Windows.

OR 

:::tip

This is Docusaurus callout.

:::

The purpose of the callout is not to replace the main documentation.

It draws attention to information that the reader should notice.

---

## Why use callouts?

Technical documentation often contains information that is important but does not fit naturally into the main procedure.

For example:

- A useful tip.
- An important requirement.
- A warning about a possible problem.
- Additional information that the reader may need.
- A reminder about a particular step.

A callout gives this information a clear visual treatment.

Without a callout, the information may be lost inside a long paragraph.

---

## When should you use a callout?

Use a callout when the information deserves attention but does not need to become part of the main flow.

For example:

```text
Main instruction
      ↓
Additional information
      ↓
Next instruction
```

The additional information may be better presented as a callout.

For example:

```markdown
1. Open the project folder.

:::
Keep the project folder in a location that is easy to find.
:::

2. Open the terminal.
```

---

## When should you not use a callout?

Do not use a callout simply because the feature is available.

If information is important to completing the procedure, put it directly into the procedure.

For example, avoid:

```markdown
:::
Select **Next**.
:::
```

if selecting **Next** is simply the next step.

Instead, write:

```markdown
Select **Next**.
```

Callouts should add value.

If every paragraph is highlighted, nothing stands out.

> **Documentation Manager's Tip**
>
> A callout should help the reader notice something.
>
> If everything is highlighted, nothing is highlighted.

---

## Docusaurus callouts

This project uses Docusaurus.

Docusaurus supports admonitions, which we use as callouts in our Markdown documentation.

The basic syntax is:

```markdown
:::
This is a tip.
:::
```

The opening line starts with:

```text
:::type
```

The callout type follows it e.g. tip, note, warning, important etc.

The callout content comes next.

The callout ends with:

```text
:::
```

The opening and closing markers must be present.

---

## Basic callout structure

The general structure is:

```markdown
:::

Content goes here.

:::
```

For example:

```markdown
:::

This information provides additional context.

:::
```

The important part is that the callout is properly closed.

> **Important**
>
> An unclosed callout can cause the Docusaurus build to fail.
>
> Always check that every `:::` opening marker has a corresponding closing marker.

---

## Step 1 — Create a note

Use `note` when you want to provide additional information that may help the reader.

Example:

```markdown
:::note

You can use either PowerShell or Command Prompt for this exercise.

:::
```

**Expected result**

:::note

You can use either PowerShell or Command Prompt for this exercise.

:::

A note provides context without interrupting the main procedure.

Use notes when the information is useful but not necessarily critical.

---

## Step 2 — Create a tip

Use `tip` for practical advice that can make a task easier.

Example:

```markdown
:::tip

Keep your project folders in a consistent location so they are easier to find.

:::
```

Tips are useful for sharing good working practices.

For example:

:::tip

Run the documentation site locally before committing major changes.

:::

---

## Step 3 — Create important information

Use `important` when the reader needs to pay particular attention to the information.

Example:

```markdown
:::

Do not commit API keys or other secrets to Git.

:::
```

This type of callout should be used for information that has more significance than a normal note.

---

## Step 4 — Create a warning

Use `warning` when an action or situation could cause a problem.

Example:

```markdown
:::

Do not delete the `.git` folder unless you intentionally want to remove the Git repository information.

:::
```

Warnings should be used carefully.

The reader should understand what the risk is.

---

## Step 5 — Create a danger callout

Use `danger` when the reader needs to be clearly warned about a potentially destructive or serious action.

For example:

```markdown
:::

This command can permanently delete files. Make sure you understand the command before running it.

:::
```

Do not use `danger` simply because something is important.

Use the strongest callout type only when the situation justifies it.

---

## Callout types

The main callout types used in this project are:

| Type | Use it for |
| --- | --- |
| `note` | Additional information or context |
| `tip` | Helpful advice or a recommended practice |
| `important` | Information that requires particular attention |
| `warning` | A possible problem or risk |
| `danger` | A serious or potentially destructive action |

The type should match the purpose of the information.

---

## Choosing the right callout

Use this simple decision process:

```text
Is this additional information?
        │
       Yes
        ↓
      NOTE

Is this useful advice?
        │
       Yes
        ↓
      TIP

Does the reader need to pay particular attention?
        │
       Yes
        ↓
   IMPORTANT

Could the reader encounter a problem or risk?
        │
       Yes
        ↓
    WARNING

Could the action cause serious or destructive results?
        │
       Yes
        ↓
     DANGER
```

This is a guideline, not a rule that must be followed mechanically.

Use your editorial judgement.

---

## Callout titles

You can also give a callout a custom title.

For example:

```markdown
:::
Keep procedures short and focused on the reader's task.
:::
```

This can make the purpose of the callout clearer.

Another example:

```markdown
:::
Make sure you have saved your work before closing the application.
:::
```

Use custom titles when they improve clarity.

Do not add a custom title simply to make the callout look different.

---

## Callouts with multiple paragraphs

A callout can contain more than one paragraph.

For example:

```markdown
:::
This project uses Markdown as the source format.

Docusaurus processes the Markdown when the documentation site is built.
:::
```

Keep the content focused.

A callout should not become a long section of documentation.

If the content requires several paragraphs of explanation, it probably belongs in the main page instead.

---

## Callouts with lists

You can include lists inside a callout.

For example:

```markdown
:::

Before you start:

- Save your current work.
- Close unnecessary applications.
- Make sure your internet connection is available.

:::
```

This can be useful when the reader needs a short checklist.

Keep the list short.

If the list becomes a complete procedure, make it a proper section instead.

---

## Callouts with code

You can also include code inside a callout.

For example:

:::important

Run the command from the project folder:

```bash
npm install
```

This installs the dependencies required by the project.

:::

When using code inside a callout, make sure the callout is correctly closed.

The code fence and the callout have different purposes:

```text
:::
    ↓
Callout starts

    ↓
Code block starts

npm install
    ↓
Code block ends

:::
    ↓
Callout ends

```

Missing either closing marker can cause a build problem.

---

## Callouts and Markdown source

Callouts are easy to read in the rendered documentation.

However, remember that another writer will see the source.

For example:

```markdown
:::
Do not delete the `.git` folder.
:::
```

This is clear in the source as well as in the rendered page.

Keep the syntax properly formatted and avoid putting large amounts of content into a single line.

---

## Common callout mistakes

<details>
<summary><strong>1. The callout is not displayed correctly</strong></summary>

**Cause**

The opening or closing `:::` marker may be missing or incorrectly placed.

**Solution**

Check that the callout has both an opening and closing marker.

Correct:

```markdown
:::
This is a tip.
:::
```

Incorrect:

```markdown
:::
This is a tip.
```

</details>

<details>
<summary><strong>2. The Docusaurus build fails after adding a callout</strong></summary>

**Cause**

The Markdown or MDX structure may be incomplete.

**Solution**

Check:

- The callout opening marker.
- The callout closing marker.
- Code fences inside the callout.
- HTML or MDX elements inside the callout.

For example:

:::

This is the note.

```bash
npm install
```

:::

Make sure every element is correctly closed.

</details>

<details>
<summary><strong>3. There are too many callouts on the page</strong></summary>

**Cause**

Callouts may have been used as a general formatting tool.

**Solution**

Review each callout.

Ask whether the information genuinely needs to stand out.

Move ordinary information back into the main content.

</details>

<details>
<summary><strong>4. The wrong callout type is being used</strong></summary>

**Cause**

The callout may have been selected based on appearance rather than meaning.

**Solution**

Choose the type based on the purpose of the information.

For example:

- Additional context → `note`
- Helpful advice → `tip`
- Particular attention → `important`
- Risk → `warning`
- Serious or destructive action → `danger`

</details>

<details>
<summary><strong>5. A callout contains too much information</strong></summary>

**Cause**

A complete section may have been placed inside a callout.

**Solution**

Move the main information into the normal page content.

Keep the callout for the short piece of information that needs emphasis.

</details>

---

## Callouts and technical writing style

Callouts should support the writing style of the documentation.

Keep them:

- Short.
- Specific.
- Useful.
- Action-oriented where appropriate.
- Consistent with the rest of the page.

Avoid writing callouts that contain vague statements.

For example, avoid:

```markdown
:::
This is a really useful thing to know!
:::
```

The reader does not know what they should do with that information.

Prefer:

```markdown
:::
Run the documentation site locally before you commit changes.
:::
```

The second example gives the reader something useful.

---

## Callouts and warnings

Warnings deserve particular attention.

A warning should explain the problem or risk.

Avoid:

```markdown
:::
Be careful!
:::
```

Prefer:

```markdown
:::
Do not commit API keys to the repository. Store secrets using the approved secret-management method.
:::
```

The second example tells the reader what to avoid and provides useful direction.

---

## Callouts and accessibility

Do not rely only on color to communicate meaning.

The callout type should also communicate its purpose through its label and text.

For example:

```markdown
:::
Do not delete the `.git` folder.
:::
```

The word **Warning** provides meaning even if the reader cannot distinguish the color used by the theme.

Keep callout text clear and concise.

---

## Review callouts during content review

When reviewing a page, check each callout.

Ask:

- Does this information need to stand out?
- Is the callout type appropriate?
- Is the wording clear?
- Is the callout short enough?
- Does it help the reader?
- Could the information be part of the normal text instead?
- Is the syntax correctly closed?
- Does the rendered callout display correctly?

This is especially important when reviewing content written by several Technical Writers.

---

## Callouts in this project

We will use callouts consistently throughout the learning platform.

For example:

```markdown
> **Best Practice**
>
> Review AI-generated content before publishing it.
```

and Docusaurus callouts such as:

```markdown
:::
Run the documentation site locally before committing major changes.
:::
```

The exact style can vary depending on the type of information.

The important thing is to maintain consistency.

---

## Callout review checklist

Before committing a callout, check:

```text
□ Does the information need emphasis?

□ Is the callout type appropriate?

□ Is the wording clear?

□ Is the content concise?

□ Is the callout helping the reader?

□ Is the callout correctly opened?

□ Is the callout correctly closed?

□ Are any code fences inside it correctly closed?

□ Does the rendered page display correctly?

□ Does the Docusaurus build complete successfully?
```

---

## A practical example

Consider this procedure:

```markdown
# Install Node.js

Download Node.js from the official website.

Select the LTS release.

Install Node.js using the default settings.

Verify the installation:

```bash
node --version
```

Finish installation.
```

The procedure is clear.

Now suppose there is an important additional instruction:

```markdown
:::
Restart your terminal after installing Node.js so that the new PATH settings are available.
:::
```

This information is useful because the reader may otherwise run into a problem.

The callout supports the procedure without interrupting the main steps.

---

## Callouts in a Docs-as-Code workflow

Callouts are part of the source content.

They are stored in Git along with the rest of the Markdown.

The workflow therefore remains:

```text
Write Markdown
      ↓
Add callout
      ↓
Save changes
      ↓
Git
      ↓
Review
      ↓
Build
      ↓
Publish
```

The callout does not create a separate publishing workflow.

It remains part of the documentation source.

---

## AI and callouts

AI tools can generate Markdown callouts, but the generated syntax still needs to be reviewed.

An AI assistant may produce:

- An unsupported syntax.
- An unclosed callout.
- Incorrect nesting.
- An inappropriate callout type.
- Too many callouts.
- Repetitive content.

If you use AI to create or edit callouts, verify the result in the actual Docusaurus project.

Always review AI-generated content for:

- Accuracy
- Completeness
- Terminology
- Style
- Audience
- Technical correctness

> **Documentation practice**
>
> A callout is a publishing feature, but the decision to use it is an editorial decision.
>
> The Technical Writer should decide whether the information genuinely needs emphasis.

---

## Best practices

- Use callouts to highlight useful information.
- Do not use callouts for ordinary instructions.
- Choose the callout type based on meaning.
- Keep callout content short.
- Use warnings only when there is a real risk.
- Use `danger` only for serious or potentially destructive situations.
- Keep callout syntax correctly closed.
- Check nested code blocks carefully.
- Do not rely on color alone to communicate meaning.
- Review callouts in the rendered documentation.
- Keep callout usage consistent across the project.

---

## Key terms

| Term | Definition |
| --- | --- |
| Callout | A visually highlighted section used to draw attention to specific information. |
| Admonition | A Docusaurus feature used to create visually distinct blocks such as notes, tips, and warnings. |
| Note | A callout used to provide additional information or context. |
| Tip | A callout used to provide useful advice or a recommended practice. |
| Important | A callout used when information requires particular attention. |
| Warning | A callout used to identify a possible problem or risk. |
| Danger | A callout used to identify a serious or potentially destructive action. |
| MDX | A format that extends Markdown with additional syntax and JSX capabilities. |
| Rendered content | The formatted documentation produced from the source Markdown. |

---

## Summary

In this lesson, you learned how to:

- Understand what a callout is.
- Understand when to use a callout.
- Create Docusaurus callouts.
- Use `note`.
- Use `tip`.
- Use `important`.
- Use `warning`.
- Use `danger`.
- Add custom callout titles.
- Add lists and code to callouts.
- Avoid unnecessary callouts.
- Keep callouts concise.
- Review callouts for accessibility and consistency.
- Troubleshoot common callout problems.

The main principle is simple:

**Use a callout when information needs attention, not simply because you can make it stand out.**

---

## Knowledge check

<details>
<summary><strong>1. What is a callout?</strong></summary>

A callout is a visually highlighted section of content used to draw attention to specific information.

</details>

<details>
<summary><strong>2. Which callout type should you use for additional context?</strong></summary>

Use:

```markdown
:::
Additional information.
:::
```

</details>

<details>
<summary><strong>3. Which callout type is useful for practical advice?</strong></summary>

Use:

```markdown
:::
Practical advice.
:::
```

</details>

<details>
<summary><strong>4. When should you use a warning?</strong></summary>

Use a warning when the reader needs to know about a possible problem or risk.

</details>

<details>
<summary><strong>5. Why should you avoid using too many callouts?</strong></summary>

If everything is highlighted, nothing stands out.

Callouts are most useful when they are reserved for information that genuinely needs attention.

</details>

<details>
<summary><strong>6. What must every Docusaurus callout have?</strong></summary>

A callout needs an opening marker and a closing marker.

For example:

```markdown
:::
This is a note.
:::
```

</details>

<details>
<summary><strong>7. Can a callout contain code?</strong></summary>

Yes.

A callout can contain code blocks, but the code fence and the callout must both be correctly opened and closed.

</details>

<details>
<summary><strong>8. Should you use a callout for every important instruction?</strong></summary>

No.

If the information is part of the main procedure, keep it in the procedure.

Use a callout when the information needs additional emphasis without becoming part of the main flow.

</details>

<details>
<summary><strong>9. Why should callouts not rely only on color?</strong></summary>

Readers may not be able to distinguish colors reliably.

The callout type and text should communicate the meaning as well.

</details>

<details>
<summary><strong>10. What should you check when using an AI-generated callout?</strong></summary>

Check the syntax, callout type, wording, accuracy, and rendered result.

Always review AI-generated content for accuracy, completeness, terminology, style, audience, and technical correctness.

</details>

---

## Practice exercise

Create a Markdown file called:

```text
callout-practice.md
```

Add the following callouts:

### 1. Note

Create a note explaining that Markdown files are stored in Git.

### 2. Tip

Create a tip recommending that writers preview documentation before committing changes.

### 3. Important

Create an important callout explaining that API keys should not be committed to Git.

### 4. Warning

Create a warning about making changes directly to production documentation.

### 5. Danger

Create a danger callout explaining that a destructive command should be checked before it is run.

Then add a short procedure containing one code block inside a callout.

:::important

Always run the local documentation site before committing a major change.

:::

Open the file in your Docusaurus site.

Check that:

- Each callout displays correctly.
- The callout type matches the information.
- The code block is formatted correctly.
- The callout is properly closed.
- The page remains easy to read.

---

## Next lesson

**Markdown Code**

In the next lesson, you will learn how to format commands, code examples, file names, paths, variables, and other technical content so that readers can easily distinguish technical values from normal text.