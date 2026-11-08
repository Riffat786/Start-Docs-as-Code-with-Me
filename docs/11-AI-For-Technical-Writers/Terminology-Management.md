---
title: Terminology management
sidebar_position: 4
description: Learn how to keep product and technical terms consistent across documentation, how to find term drift, and how to use AI for terminology work with human approval.
---

# Terminology management

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Spell-checking lesson in Module 11, and the AI Writing lesson in this module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain why consistent terminology matters to readers.
- Describe a term record, with a preferred term, variants, and a definition.
- Find term drift across a documentation set with search.
- Use AI to find variants and draft definitions, and check each result against a source.
- Add or update a glossary entry in the correct alphabetical position.
- Decide when a term needs a glossary entry, and when it does not.
- Document a terminology decision so that other writers follow it.

---

## Why terminology matters for technical writers

Readers learn a product through its words. If one page says "sign in" and another says "log on", a reader may think these are two different actions. If a feature is called one name in the interface and another name in the documentation, readers search for the wrong term and cannot find the answer.

Consistent terms also make the documentation easier to translate, review, and maintain.

> **Documentation Manager's Tip**
>
> Choose one preferred term for each concept, and write it down. Then make every page use that term. A glossary is only useful when writers check it before they write.

---

## Before you start

Make sure you have:

- Completed the Spell-checking lesson in Module 11 · Automation.
- Completed the AI Writing lesson in this module.
- Visual Studio Code or Cursor, with the course repository open.
- Read `docs/glossary/glossary-terms.md`.

---

## What terminology management covers

Terminology management is the work of deciding which words to use, recording that decision, and checking that the team follows it. It has four parts.

| Part | Question it answers | Example in this project |
|---|---|---|
| Preferred term | Which word do we use? | Docs-as-Code |
| Variants | Which other spellings or words appear? | Docs as Code, docs-as-code |
| Definition | What does the term mean here? | The glossary entry for Docs-as-Code |
| Status | Is the term approved, or under review? | Approved, or to be confirmed |

Spell-checking catches misspellings. Terminology management decides which correct spelling to use, and it catches correct words that are used in the wrong place.

---

## Where terms are recorded in this project

This project records terms in three places. Each one serves a different purpose.

| Source | Purpose | Example |
|---|---|---|
| Glossary | Definitions that readers and writers use | `docs/glossary/glossary-terms.md` |
| Word list | Words that the spell checker accepts | `cSpell.words` in `.vscode/settings.json` |
| Lesson text | How a term is used in context | The Docs-as-Code lessons in each module |

A term can be correct in the word list and still be missing from the glossary. Check both sources when you add a term.

---

## A real example: the same term defined three ways

When this project's glossary was merged, the file contained many repeated terms. Some terms appeared three times. The entry for `Git` appeared with three definitions, such as "Version control software" and "A version control system used to track changes to files."

The writers did not decide which definition was correct. Each entry was added by a different lesson, and nobody checked the others. The merge kept one definition for each term, and chose the clearest.

This is terminology drift. It happens when several writers add terms without a shared record.

:::important

Drift is not a spelling error. Each entry can be spelled correctly, and it can still disagree with the others. Only a shared term record, checked by a person, prevents drift.

:::

---

## How-to: Create a term record

**Goal:** Record one term so that every writer uses it the same way.

Markdown source:

````markdown
### Term record: Docs-as-Code

| Item | Value |
|---|---|
| Preferred term | Docs-as-Code |
| Variants to avoid | Docs as Code, docs-as-code, Docs as code |
| Definition | A documentation approach that uses software development tools and workflows to create, manage, review, and publish documentation. |
| Status | Approved |
| Owner | Name the person who approves changes to the term |
| Last reviewed | Add the date |
````

**Result:** The record shows the preferred spelling, the variants to avoid, the approved definition, and who owns the decision. A writer can check the record before they write the term.

---

## How-to: Find term drift with search

**Goal:** Find each place where a variant appears in the documentation.

Use `git grep` from the project folder. The command searches the files in the repository, and it does not change any file.

```bash
git grep -n -i "docs as code"
```

Expected result: Each line that contains the variant, with its file name and line number.

Repeat the search for each variant in your term record. Then decide, for each result, whether to change it to the preferred term.

**Result:** You have a list of every place that uses a variant, and you can review each one.

:::tip

Search for variants without hyphens, and for variants with different capital letters. Use `-i` to ignore case, so that one search finds all capitalizations.

:::

---

## How-to: Use AI to find variants and draft definitions

**Goal:** Use AI to speed up terminology work, while a writer checks each result.

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a terminology reviewer for technical documentation.

Task: List each term in the text below that appears in more than one form, and suggest the preferred form.

Context: The team uses simple technical English. The preferred forms are listed in the glossary entries provided.

Constraints:
- Do not change the text.
- Do not invent a definition for a term that is not in the glossary entries provided.
- Mark each suggestion as needs review.

Output: A table with the columns Found form, Suggested preferred form, and Location.
```

**Result:** The AI returns a list of candidate changes. The writer checks each one against the glossary, and decides which changes to make.

:::warning

AI can invent a plausible definition, and it can suggest a product name that does not exist. Check every definition against the product documentation or the approved source before you add it to the glossary.

:::

---

## How-to: Add a term to the glossary

**Goal:** Add a term in the correct alphabetical position, with a clear definition.

**Step 1: Decide whether the term needs an entry.**

Add an entry when readers need the meaning to follow the documentation, and when the term is used on more than one page. Do not add an entry for a word that is used once, or for a common word.

**Step 2: Find the letter section.**

Open `docs/glossary/glossary-terms.md`. Find the section for the first letter of the term.

**Step 3: Insert the row in alphabetical order.**

Use the same table format as the other rows.

```text
| Preferred term | A short, clear definition in simple technical English. |
```

**Step 4: Update the letter bar, if the letter is new.**

The bar at the top of the glossary links only to letters that have a section. Add a link only when you add the first term for that letter.

**Result:** The term appears in the correct place, and the definition uses the same style as the other entries.

---

## Docs-as-Code workflow for terminology changes

Use this workflow when you add a term, or change a preferred term.

```text
Create a branch
    ↓
Check the term record and the glossary
    ↓
Search for variants with git grep
    ↓
Change the variants on each page
    ↓
Update the glossary entry, and the word list if needed
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by a second writer and the term owner
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/terminology-management-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Terminology-Management.md
git commit -m "Add terminology management lesson"
git push -u origin docs/terminology-management-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Two writers add the same term with different definitions. | Readers get two meanings for one term. | Check the glossary before you add a term, and keep one entry. |
| A variant is fixed on one page only. | The variant remains on other pages. | Search the whole repository for each variant. |
| An AI-drafted definition is added without checking it. | An inaccurate definition reaches readers. | Check each definition against an approved source. |
| A word is added to the word list instead of the glossary. | The spell checker accepts the word, but readers do not learn its meaning. | Add a definition to the glossary when readers need it. |
| A new letter section is added without a link in the letter bar. | The letter is missing from the navigation. | Add the letter to the bar when you add its first term. |
| A term is changed without telling the team. | Other writers keep using the old term. | Record the change in the pull request, and tell the team. |

---

## Summary

In this lesson, you learned that:

- Consistent terms help readers find and understand information.
- A term record holds the preferred term, its variants, its definition, and its status.
- Terminology drift happens when terms are added without a shared record.
- Use `git grep` to find each variant across the repository.
- AI can help find variants and draft definitions, but a writer must check each result.
- Add a glossary entry only when readers need it, in the correct alphabetical position.

The aim is simple:

**Give each concept one name, one definition, and one owner, and make every page follow them.**

---

## Practice exercise

Use this repository.

1. Open `docs/glossary/glossary-terms.md`. Choose one term that has a clear definition. Write its term record, using the format in this lesson.
2. Run `git grep -n -i "github"` from the project folder. Count how many lines use the spelling `Github` with a lowercase letter `h`.
3. Use the AI prompt in this lesson on one page from `docs/11-AI-For-Technical-Writers` or any other page. Record one suggestion, and check it against the glossary.
4. Choose one term that is used on two or more pages, but is missing from the glossary. Write a draft entry, and record the source you would check it against.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Why does consistent terminology matter to readers?</strong></summary>

Readers learn a product through its words. Different words for the same thing make readers think there are two features, and they can search for the wrong term.

</details>

<details>
<summary><strong>2. What are the four parts of a term record?</strong></summary>

The preferred term, its variants, its definition, and its status.

</details>

<details>
<summary><strong>3. What is terminology drift?</strong></summary>

The gradual change of terms across a documentation set, usually because several writers add or change terms without a shared record.

</details>

<details>
<summary><strong>4. Why is a spell checker not enough for terminology management?</strong></summary>

A spell checker accepts any correct spelling. It does not decide which correct spelling to use, or check that a term means the same thing on every page.

</details>

<details>
<summary><strong>5. How can you find every place that uses a variant?</strong></summary>

Run `git grep` with the variant. Use `-i` to ignore case, and `-n` to show line numbers.

</details>

<details>
<summary><strong>6. What should you check before you accept an AI-drafted definition?</strong></summary>

Check the definition against an approved source, such as the product documentation or the glossary.

</details>

<details>
<summary><strong>7. When should a word get a glossary entry?</strong></summary>

When readers need its meaning to follow the documentation, and when it is used on more than one page.

</details>

<details>
<summary><strong>8. Why must the letter bar be updated when you add a new letter section?</strong></summary>

The bar links to each letter section. A letter without a link is missing from the navigation, and a link to a missing section is a broken anchor.

</details>

<details>
<summary><strong>9. Why should a term change be recorded in the pull request?</strong></summary>

Other writers need to know that the term changed, so that they update their pages and stop using the old term.

</details>

<details>
<summary><strong>10. What is the main goal of terminology management?</strong></summary>

The goal is to give each concept one name, one definition, and one owner, so that every page follows the same terms.

</details>

---

## Next lesson

Continue to **Accessibility and inclusive language**. You will learn how to check documentation for accessible and inclusive wording, with AI support and a human review.
