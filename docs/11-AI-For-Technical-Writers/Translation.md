---
title: Translation
sidebar_position: 6
description: Learn how to prepare source content for translation, how Docusaurus stores localized pages, and how to use AI for translation drafts with glossary support and human review.
---

# Translation

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Terminology management lesson and the Accessibility and inclusive language lesson in this module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain the difference between translation and localization.
- Prepare source content so that it is easier and cheaper to translate.
- Describe how Docusaurus stores translated pages, and what the project's current setting is.
- Use AI for a translation draft, with glossary terms and fixed elements protected.
- Check a translated page for meaning, terms, layout, and links.
- Track the translation status of each page.
- Document translation decisions so that translators and reviewers follow them.

---

## Why translation matters for technical writers

Readers who use documentation in another language may be unable to complete a task if the page is missing or unclear. A translated page that changes a term, a step, or a warning can cause errors that are more serious than a typo.

Translation also costs time and money. Source content that is clear, consistent, and easy to split into parts is much cheaper to translate and to keep up to date.

> **Documentation Manager's Tip**
>
> Write for translation before you translate. Most translation problems start in the source text, such as idioms, unclear references, and text inside images.

---

## Before you start

Make sure you have:

- Completed the Terminology management lesson and the Accessibility and inclusive language lesson in this module.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the build.
- A native speaker of the target language who can review the translation.

---

## Translation and localization

Two terms are often used for the same work. They are different.

| Term | Meaning | Example |
|---|---|---|
| Translation | Changing the words from one language to another | "Save the file" becomes its equivalent in the target language |
| Localization | Adapting the content for a region, including formats, examples, and cultural references | Dates, currency, units, and screenshots that match the local interface |

Translation is a part of localization. A page can be translated correctly and still need localization, for example when a screenshot shows an English interface.

---

## This project's language setting

The Docusaurus configuration in `docusaurus.config.ts` currently sets English as the only language.

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en'],
},
```

The project therefore does not publish translated pages today. The steps in this lesson show how to prepare for translation, and how the setting changes when you add a language.

:::note

Add a locale to the `locales` list only when a translated version is ready for review. An empty or incomplete locale can publish pages with missing content.

:::

---

## How Docusaurus stores translated pages

Docusaurus keeps translated pages in a separate folder for each language. The English pages stay in `docs`. A translated page uses the same file name, in a folder for its language.

The layout below is illustrative. Check the Docusaurus documentation for the exact folder names before you create a translation.

```text
docs/
  09-AI/
    Cursor.md
i18n/
  fr/
    docusaurus-plugin-content-docs/
      current/
        09-AI/
          Cursor.md
```

The project also includes a script that creates the files that hold the theme text for each language:

```bash
npm run write-translations
```

Expected result: The command creates translation files for the theme labels. It does not translate your pages. A translator still needs to translate the page content.

---

## Prepare source content for translation

Clear source text is easier to translate. Use this table to check each page before you send it.

| Write this | Not this | Why |
|---|---|---|
| Click Save. | Hit Save to lock it in. | Idioms do not translate directly |
| Select the file, then select Open. | Open it up. | Short, direct steps are easier to follow |
| Use `npm run build` to check the site. | Run the usual build thing. | Exact terms and commands are safer |
| Describe the image in the alt text. | Leave the text inside the image only. | Text inside images cannot be translated by a tool |
| Use the same term every time. | Mix three names for one feature. | Consistent terms reduce translation errors |

:::important

Keep code, commands, file names, and placeholders in English. Translate the words around them, not the commands themselves.

:::

---

## How-to: Prepare a page for translation

**Goal:** Check and prepare one source page before a translator starts.

**Step 1: Check the terms.**

Compare each key term with the glossary entry. Use the preferred term, and avoid its variants. This connects to the Terminology management lesson.

**Step 2: Check for idioms and unclear references.**

Look for phrases such as "under the hood" or "a piece of cake". Replace them with plain words. Check each "this" or "it" that refers to a sentence earlier on the page.

**Step 3: Check images.**

Confirm that each image has alt text. If the image contains text that matters, add that text to the surrounding paragraph too.

**Step 4: Mark what must not change.**

Note the code blocks, commands, file names, and product names. A translator must keep them unchanged.

**Result:** The page is ready for a translator, with clear terms and fewer hidden problems.

---

## How-to: Use AI for a translation draft

**Goal:** Get a first draft that uses the approved terms, and that keeps fixed elements unchanged.

Use the RTCCO structure from the Prompt engineering content in Module 10. Include the glossary entries for the terms on the page.

```text
Role: You are a technical translator who translates documentation from English into the target language.

Task: Translate the text below into the target language.

Context: The text is a lesson for technical writers. Use the glossary entries provided for each term.

Glossary entries:
- Docs-as-Code: [approved translation from the glossary]
- Pull request: [approved translation from the glossary]

Constraints:
- Do not translate code blocks, commands, file names, or placeholders such as <access-token>.
- Do not add or remove steps, warnings, or notes.
- Keep the same heading levels and table structure.
- If a term is not in the glossary entries, keep the English term and mark it for review.

Output: The translated Markdown, with the same structure as the source.
```

**Result:** The AI returns a draft that uses the approved terms, and that keeps code and structure unchanged. A translator then checks the meaning, the tone, and the terms that were marked for review.

:::warning

AI can change the meaning of a warning, drop a step, or translate a command. Do not publish an AI draft without a review by a native speaker who knows the product.

:::

---

## How-to: Check a translated page

**Goal:** Confirm that a translated page is accurate, complete, and usable.

Use this checklist. Each row is a question that a reviewer answers with yes or no.

| Check | Question | Example failure |
|---|---|---|
| Meaning | Does each step mean the same as the source? | A step that now asks for the opposite action |
| Warnings | Does each warning keep its full meaning? | A warning that became a tip |
| Terms | Are the approved terms used? | A feature named two different ways on one page |
| Code | Are commands and file names unchanged? | A command with a translated word inside it |
| Structure | Do the headings, tables, and lists match the source? | A table that lost a column |
| Links | Do the links go to the translated page, or to the English page? | A link that leads to the wrong language |
| Length | Does the page still fit the layout? | A table cell that overflows the page |

When the checklist passes, build the site:

```bash
npm run build
```

:::note

To build a single language, Docusaurus supports the `--locale` option. Add a locale to the configuration first, and confirm the option with the current Docusaurus documentation.

:::

---

## How-to: Track translation status

**Goal:** Show which pages are translated, reviewed, and up to date.

Markdown source for a status table:

````markdown
### Translation status: French

| Page | Source last changed | Translation status | Reviewer | Last reviewed |
|---|---|---|---|---|
| 09-AI/Cursor.md | Add date | Draft | Add name | Add date |
| 09-AI/Skills.md | Add date | Reviewed | Add name | Add date |
````

**Result:** Each page shows its status, and a reviewer can see which translations are out of date after a source change.

---

## Docs-as-Code workflow for translation

Use this workflow when you add or update a translation.

```text
Prepare the source page
    ↓
Create a branch
    ↓
Create or update the translated file
    ↓
Check the translation with the checklist
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by a native speaker and the product owner
    ↓
Update the status table, and merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/translation-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Translation.md
git commit -m "Add translation lesson"
git push -u origin docs/translation-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Source text uses idioms and unclear references. | The translation is inaccurate or hard to follow. | Prepare the source page before you translate it. |
| A command is translated. | The reader cannot run the command. | Keep code, commands, and placeholders in English. |
| A warning is shortened in the translation. | The reader misses a risk. | Compare each warning with the source. |
| The AI draft is published without review. | Errors reach readers in another language. | Require a native speaker review before publishing. |
| The locale is added before the pages are ready. | Readers reach incomplete pages. | Add the locale only when the translation is reviewed. |
| The status table is not updated after a source change. | Readers see outdated translations. | Compare the source date and the translation date each release. |

---

## Summary

In this lesson, you learned that:

- Translation changes the words, and localization also adapts the content for a region.
- Source text that is clear and consistent is easier and cheaper to translate.
- This project currently publishes English only, and the locale setting controls the languages.
- Use AI for a draft, with approved glossary terms and fixed elements protected.
- A native speaker reviews the meaning, the warnings, the terms, and the layout.
- Track each page's status, and update it when the source changes.

The aim is simple:

**Make sure a reader in any language can complete the same task, with the same warnings and the same steps.**

---

## Practice exercise

Use this repository.

1. Open `docusaurus.config.ts`. Record the locales that the project currently supports.
2. Choose one page from `docs/09-AI`. Find one idiom or unclear reference, and rewrite it in plain words.
3. Write a glossary-based prompt for the page, with at least two glossary entries and the Constraints section.
4. Create a translation status table for the page, using the format in this lesson. Mark its status as Draft.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is the difference between translation and localization?</strong></summary>

Translation changes the words from one language to another. Localization also adapts the content for a region, such as formats, examples, and screenshots.

</details>

<details>
<summary><strong>2. Why should you avoid idioms in source text?</strong></summary>

Idioms often do not translate directly, and a literal translation can have a different meaning or no meaning at all.

</details>

<details>
<summary><strong>3. What should stay in English in a translated page?</strong></summary>

Code, commands, file names, and placeholders such as `<access-token>`.

</details>

<details>
<summary><strong>4. What does the `write-translations` script create?</strong></summary>

Translation files for the theme labels in each language. It does not translate the page content.

</details>

<details>
<summary><strong>5. What does this project's `i18n` setting currently contain?</strong></summary>

English as the default locale, and English as the only locale.

</details>

<details>
<summary><strong>6. Why should a locale be added only when its pages are ready?</strong></summary>

A locale can publish pages that are incomplete. Readers then reach missing or unclear content.

</details>

<details>
<summary><strong>7. Why should a glossary entry be used in an AI translation prompt?</strong></summary>

It keeps the approved terms consistent. The AI then uses the same translation for each term, across pages.

</details>

<details>
<summary><strong>8. Why must a warning keep its full meaning in translation?</strong></summary>

A reader who misses a warning can take a risky action. A shortened warning can change its meaning.

</details>

<details>
<summary><strong>9. Who should review an AI translation before it is published?</strong></summary>

A native speaker who knows the product, and who checks the meaning, the warnings, the terms, and the layout.

</details>

<details>
<summary><strong>10. What is the main goal of translation in documentation?</strong></summary>

The goal is to make sure a reader in any language can complete the same task, with the same steps and the same warnings.

</details>

---

## Next lesson

Continue to **Content migration**. You will learn how to move documentation from an existing system into a Docs-as-Code project, and how to check the result.
