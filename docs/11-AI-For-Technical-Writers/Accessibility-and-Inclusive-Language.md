---
title: Accessibility and inclusive language
sidebar_position: 5
description: Learn how to write documentation that people with different abilities can use, how to check contrast, alt text, and link text, and how to use AI for inclusive language checks with human review.
---

# Accessibility and inclusive language

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Terminology management lesson, and the Static assets and Themes lessons in Module 8 · Docusaurus.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain why accessible documentation matters to readers and to your organization.
- Write meaningful alt text for an image, and recognize alt text that adds nothing.
- Check text and background contrast, in light and dark mode.
- Write link text that describes the destination.
- Use heading order and plain language so that screen reader users can navigate a page.
- Review wording for inclusive language, with AI support and a human decision.
- Document accessibility decisions so that other writers follow them.

---

## Why accessibility matters for technical writers

Documentation is often the only way a reader can complete a task. A reader who cannot see low-contrast text, or who uses a screen reader, can be blocked by a page that looks fine to you.

Accessible content also helps everyone. Clear headings, short sentences, and descriptive links make a page easier to scan, translate, and maintain.

> **Documentation Manager's Tip**
>
> Check accessibility while you write, not after publishing. Each fix is small when the page is new, and expensive when it is old.

---

## Before you start

Make sure you have:

- Completed the Terminology management lesson in this module.
- Completed the Static assets and Themes lessons in Module 8 · Docusaurus.
- A browser, with the course site open in light and dark mode.
- Read the Writing Guidelines in the Microsoft style guide for plain language, if your team uses it.

---

## Accessibility basics for documentation

Use this table as a short checklist for each page.

| Area | Requirement | Why it matters |
|---|---|---|
| Images | Every image has alt text that describes its purpose | Screen reader users hear the alt text instead of the image |
| Contrast | Text and background have enough contrast | Readers with low vision can read the text |
| Color | Color is not the only way to show meaning | Readers with color blindness can still understand the meaning |
| Headings | Headings follow a logical order, with one main title | Screen reader users can navigate by heading |
| Links | Link text describes the destination | Screen reader users can list links out of context |
| Language | Sentences are short and direct | Readers with cognitive or language differences can follow the steps |

---

## A real example: contrast in dark mode

When the course site was reviewed in dark mode, several sections showed light text on light backgrounds. The text was almost invisible. The problem came from sections that had hardcoded light backgrounds, while their text used the dark-mode text color.

The fix was to use theme tokens for the backgrounds, so that each mode has its own matching colors. The footer had a similar problem, with dark text on a dark blue background, and it was fixed in the same way.

This is a common accessibility problem. A page can look correct in one mode and fail in the other. Check both modes before you publish.

:::important

Check contrast in light mode and in dark mode. A color combination that works in one mode can fail in the other.

:::

---

## How-to: Write useful alt text

**Goal:** Describe an image so that a screen reader user gets the same information.

Alt text describes the purpose of the image, not its file name. Decide what the reader needs from the image, and write that.

Before (alt text is a file name, avoid):

```markdown
![screenshot-2.png](/img/portfolio/api/HTTP-response.png)
```

After (alt text describes the purpose, use):

```markdown
![Response sample showing a 200 OK response with release details, in the generated API reference](/img/portfolio/api/HTTP-response.png)
```

**Result:** A screen reader user hears what the image shows, and why it matters on the page.

:::tip

If an image only repeats the text next to it, use empty alt text, written as `alt=""` in HTML. A screen reader then skips the image. Do not leave the alt text out completely, because a missing alt text is read as the file name.

:::

---

## How-to: Check contrast in both modes

**Goal:** Confirm that text is easy to read in light mode and in dark mode.

**Step 1: Open the page in light mode.**

Use the theme switch in the navbar to choose light mode.

**Step 2: Check the text and the background.**

Look at body text, headings, table text, and callout text. Each one should be easy to read without effort.

**Step 3: Measure the contrast.**

Use a contrast checker, such as WebAIM's Contrast Checker, to test the text color and the background color. For normal body text, aim for a contrast ratio of at least 4.5 to 1.

**Step 4: Repeat in dark mode.**

Switch to dark mode, and repeat steps 2 and 3.

**Result:** You know which elements pass in both modes, and which need a color change in the theme.

:::note

Check the color values in the theme file, and change the theme tokens rather than the page. A single token change then fixes every page that uses the color.

:::

---

## How-to: Write link text that describes the destination

**Goal:** Make each link understandable when read out of context.

Screen reader users often list all the links on a page. A list that says "click here" gives no information.

Before (avoid):

```markdown
For the setup steps, [click here](./Install-Git.md).
```

After (use):

```markdown
Follow the [Git installation steps](./Install-Git.md) before you continue.
```

**Result:** The link describes its destination, and it makes sense in a list of links.

---

## How-to: Use headings in a logical order

**Goal:** Make the page structure clear to screen reader users and to readers who scan.

Use one main heading for the page title. Use the next level for each main section, and the level below for each subsection.

| Correct order | Incorrect order |
|---|---|
| Page title, then sections, then subsections | A section heading that jumps from a page title to a small subsection heading |
| One main title per page | Several main titles on one page |

:::note

The editor can flag a page with more than one top-level heading. A rule such as MD025 reports this. Check the rule, and decide whether the page needs a single main title.

:::

---

## How-to: Review wording for inclusive language

**Goal:** Find wording that excludes or confuses readers, and decide how to change it.

Use an AI tool for a first pass, then decide each change yourself. Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are an editor who reviews technical documentation for inclusive and plain language.

Task: List each sentence in the text below that uses assumed knowledge, idioms, gendered terms, or wording that may exclude readers.

Context: The page is a lesson for technical writers from many backgrounds. The team uses simple technical English.

Constraints:
- Do not change the text.
- Do not change code blocks, file names, or product names.
- Quote each sentence exactly.

Output: A table with the columns Quote, Concern, and Suggested rewrite.
```

**Result:** The AI returns a list of candidates. Common examples include "simply", "just", "obviously", and idioms such as "a piece of cake". Check each suggestion, because some words are correct in technical content, and some product terms must not change.

:::warning

AI can flag a word that is correct in context, and it can suggest a rewrite that changes the meaning. Accept a change only when the meaning stays the same and the wording is clearer for readers.

:::

---

## Docs-as-Code workflow for accessibility changes

Use this workflow when you change a page, a theme, or an image.

```text
Create a branch
    ↓
Check each image for alt text
    ↓
Check contrast in light and dark mode
    ↓
Check link text and heading order
    ↓
Review wording with AI, then decide each change
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Peer review, with a check in both modes
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/accessibility-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Accessibility-and-Inclusive-Language.md
git commit -m "Add accessibility and inclusive language lesson"
git push -u origin docs/accessibility-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The alt text is a file name. | A screen reader reads the file name, which tells the reader nothing. | Describe the purpose of the image. |
| The contrast is checked in one mode only. | The page fails in the other mode. | Check both light and dark mode. |
| Hardcoded colors are used on a page. | The colors do not follow the theme. | Use the theme tokens. |
| The link text is "click here" or "read more". | Links make no sense out of context. | Describe the destination in the link text. |
| Heading levels are skipped for style. | Screen reader users lose the page structure. | Follow one heading level at a time. |
| AI rewrites are accepted without a check. | The meaning changes, or product names are altered. | Decide each change, and keep product names unchanged. |

---

## Summary

In this lesson, you learned that:

- Accessible documentation helps every reader, not only readers with disabilities.
- Alt text describes the purpose of an image, and it is not a file name.
- Check contrast in light mode and in dark mode, and fix the theme tokens rather than each page.
- Link text describes the destination, and headings follow a logical order.
- AI can flag inclusive-language issues, but a writer decides each change.

The aim is simple:

**Write so that every reader can see, hear, navigate, and understand the page.**

---

## Practice exercise

Use this repository.

1. Open `docs/10-Automation/Validation.md` in the course site. Check each image, if it has one, and record whether its alt text describes its purpose.
2. Check the text and background contrast on one callout, in light mode and in dark mode. Record the result.
3. Find one link with unclear link text on any page. Rewrite it so that it describes the destination.
4. Use the inclusive language prompt in this lesson on one page. Record one suggestion you accept, and one you reject, with your reason.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Why does accessible documentation matter to every reader?</strong></summary>

Clear headings, short sentences, and descriptive links help everyone scan, understand, and maintain the page, not only readers with disabilities.

</details>

<details>
<summary><strong>2. What should alt text describe?</strong></summary>

The purpose of the image, and the information the reader needs from it. It should not be a file name.

</details>

<details>
<summary><strong>3. When should you use empty alt text?</strong></summary>

When the image only repeats the text next to it. A screen reader then skips the image.

</details>

<details>
<summary><strong>4. Why must you check contrast in both light and dark mode?</strong></summary>

A color combination that works in one mode can fail in the other. The course site had text that was unreadable in dark mode for this reason.

</details>

<details>
<summary><strong>5. Which change fixes contrast across many pages?</strong></summary>

Changing the theme tokens, so that every page that uses the color gets the fix.

</details>

<details>
<summary><strong>6. Why is "click here" a poor link text?</strong></summary>

A screen reader user who lists the links on a page hears "click here" many times, and cannot tell where each link goes.

</details>

<details>
<summary><strong>7. Why should heading levels follow a logical order?</strong></summary>

Screen reader users navigate a page by its headings. A skipped level or a second main title breaks that structure.

</details>

<details>
<summary><strong>8. What is a contrast ratio of 4.5 to 1 used for?</strong></summary>

It is a common minimum for normal body text, so that readers with low vision can read it.

</details>

<details>
<summary><strong>9. Why should AI wording suggestions be checked before you accept them?</strong></summary>

AI can flag correct technical words, and it can suggest a rewrite that changes the meaning or alters a product name.

</details>

<details>
<summary><strong>10. What is the main goal of accessibility and inclusive language in documentation?</strong></summary>

The goal is to write so that every reader can see, hear, navigate, and understand the page.

</details>

---

## Next lesson

Continue to **Translation**. You will learn how to prepare documentation for translation, and how to use AI for translation work with human review.
