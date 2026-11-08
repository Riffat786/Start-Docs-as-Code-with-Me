---
title: Spell-checking
sidebar_position: 6
description: Learn how to use a spell checker in a Docs-as-Code project, how to handle project terms with a word list, and how to decide between fixing a word and adding it to the list.
---

# Spell-checking

> **Lesson level:** Beginner
>
> **Time to complete:** 20–25 minutes
>
> **Prerequisites:** Complete the Automation overview, and the Markdown module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a spell checker does, and what it cannot do.
- Read a spell-check message in your editor.
- Decide whether a flagged word is a typo, a term, or a false alarm.
- Add a project term to the word list in `.vscode/settings.json`, with a clear reason.
- Keep spelling and terminology consistent across pages.
- Describe a spell-check step in a workflow, and its limits.
- Document the spell-check rules so that other writers follow them.

---

## Why spell-checking matters for technical writers

A spelling error makes the documentation look careless, and it can change the meaning of a step. A term that is spelled two different ways across pages makes readers think there are two different features.

A spell checker finds many of these errors quickly. It cannot tell whether a word is correct for your product, so you still review each message.

> **Documentation Manager's Tip**
>
> A spell checker finds misspellings. It does not find wrong terms, wrong facts, or inconsistent terms. Check terminology against the glossary, and check facts against the source.

---

## Before you start

Make sure you have:

- Completed the Automation overview.
- Visual Studio Code or Cursor, with the course repository open.
- The Code Spell Checker extension installed, or the equivalent for your editor.
- Read access to `.vscode/settings.json`.

:::note

**For beginners**

A spell checker underlines a word that it does not recognize. The underline is a suggestion. You decide whether to correct the word, or to tell the checker that the word is correct.

:::

---

## What a spell checker does

A spell checker compares each word with a dictionary. It flags a word that is not in the dictionary, or that is close to a known word.

| Type of flag | Example | What to do |
|---|---|---|
| Typo | `documnetation` | Correct the word |
| Unusual term | `Mintlify` | Add it to the word list if it is a real product name |
| Code-like word | `npm_install` | Check whether it should be inside a code block |
| Abbreviation | `RTCCO` | Explain it on first use, or add it to the word list |

A spell checker does not check grammar, tone, or facts. A word can be spelled correctly and still be the wrong word.

---

## The word list in this project

This project keeps a custom word list in `.vscode/settings.json`. The checker reads the list, and it accepts the words in it.

```json
{
    "cSpell.words": [
        "Agentic",
        "defaultbranch",
        "Mintlify",
        "Riffat",
        "venv",
        "winver",
        "Wyne"
    ]
}
```

Each entry is a word that is correct for this project. The list includes product names, personal names, and technical terms that are not in a standard dictionary.

:::important

Add a word to the list only when it is a real project term. Do not add a word to hide a typo. A word added by mistake stops the checker from catching that error on every page.

:::

---

## Real messages in this project

When you open the project's Markdown files, the editor can show messages like these. Each one needs a decision.

| Word | Where it appears | Decision |
|---|---|---|
| `RTCCO` | The Skills lesson, and the Prompt engineering lesson | A real framework name. Explain it on first use, or add it to the list. |
| `mylib` | A Docusaurus example in the Best Practices page | An example package name. Keep it inside a code block, or add it to the list if it appears in text. |

:::tip

Before you add a word, search the project for it. If the word appears in many places, add it to the list. If it appears once, check whether a typo or a code block caused the flag.

:::

---

## How-to: Decide whether to fix a word or add it

**Goal:** Choose the right action for each spell-check message.

Use these questions:

| Question | If the answer is yes |
|---|---|
| Is the word misspelled? | Correct the word |
| Is the word a real term used in this project? | Add it to `cSpell.words`, and record the reason in the pull request |
| Is the word inside a code block or a file name? | Check whether the checker should ignore it, and keep the code block unchanged |
| Is the word a name for a product that you do not own? | Use the official spelling, and check it against the vendor's site |

**Result:** Each message has a clear decision. Words are added to the list only for a real reason.

---

## How-to: Add a project term to the word list

**Goal:** Add a term so that the checker accepts it, and record why.

**Step 1: Check the term.**

Confirm the spelling in an official source, such as the product's documentation.

**Step 2: Open the settings file.**

Open `.vscode/settings.json` in your editor.

**Step 3: Add the term in alphabetical order.**

```json
{
    "cSpell.words": [
        "Agentic",
        "defaultbranch",
        "Mintlify",
        "Riffat",
        "venv",
        "winver",
        "Wyne",
        "RTCCO"
    ]
}
```

Keep the list in alphabetical order, and keep the commas correct. A missing comma makes the file invalid.

**Step 4: Explain the change in the pull request.**

Write the term, its meaning, and where it appears.

**Result:** The checker accepts the term on every page. The pull request explains why the list changed.

:::warning

Do not commit a word list change without a reason. A list that grows without review hides real errors over time.

:::

---

## How-to: Keep terms consistent

**Goal:** Use the same spelling for a term on every page.

Use the glossary as the reference for terms. For example, the glossary spells the term `Docs-as-Code`, with hyphens.

| Inconsistent | Consistent |
|---|---|
| Docs as Code | Docs-as-Code |
| docs-as-code | Docs-as-Code |
| Github | GitHub |
| Visual studio code | Visual Studio Code |

:::note

The spell checker does not catch every inconsistency. A term can be spelled correctly, and still be spelled differently from the glossary. Search the project for the term before you publish.

:::

---

## Spell-checking in a workflow

A spell check can also run on each pull request. The workflow below is illustrative. The project does not run this check today, and you should test it on a branch before you add it.

```yaml
      - name: Spell check
        uses: streetsidesoftware/cspell-action@v6
        with:
          files: 'docs/**/*.md'
```

**Result:** The workflow reports unknown words on each pull request. A reviewer then decides whether to correct the word or add it to the list.

:::warning

A spell check that fails on every pull request blocks all publishing. Start the check in a mode that reports only, and make it blocking after the word list is complete.

:::

---

## Docs-as-Code workflow for spelling changes

Use this workflow when you fix spelling, or change the word list.

```text
Create a branch
    ↓
Read each spell-check message
    ↓
Fix the typo, or add a real term with a reason
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Peer review of each word list change
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/spell-checking-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/10-Automation/Spell-checking.md
git commit -m "Add spell-checking lesson"
git push -u origin docs/spell-checking-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| A typo is added to the word list. | The checker stops flagging that typo everywhere. | Correct the typo, and remove the word from the list. |
| A term is spelled differently on different pages. | Readers think there are two features. | Check each term against the glossary. |
| A word is added without a reason. | The list grows, and real errors are hidden. | Record the reason in the pull request. |
| The spell checker is treated as a full review. | Wrong facts and unclear sentences reach readers. | Keep a human review for facts and tone. |
| The settings file is edited and the JSON becomes invalid. | The editor stops reading the word list. | Check the commas and brackets after each change. |

---

## Summary

In this lesson, you learned that:

- A spell checker flags words that are not in its dictionary, and you decide what to do with each one.
- This project keeps its custom words in `.vscode/settings.json`.
- Add a word only when it is a real term, and record the reason.
- Use the glossary to keep terms consistent across pages.
- A spell check in a workflow must start in report mode before it blocks publishing.

The aim is simple:

**Correct the errors, and keep the terms the same on every page.**

---

## Practice exercise

Use this repository.

1. Open `docs/09-AI/Skills.md`. Find the term `RTCCO`. Decide whether to explain it on first use, or add it to the word list.
2. Open `.vscode/settings.json`. Find the word list, and confirm that the JSON is valid.
3. Search the `docs` folder for `Github`, and for `Docs as Code`. Check whether each one matches the glossary spelling.
4. Correct one inconsistent term on a branch, and record the change in a commit message.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What does a spell checker check?</strong></summary>

It compares each word with a dictionary, and flags words that are not in it. It does not check facts, tone, or grammar.

</details>

<details>
<summary><strong>2. Where does this project keep its custom word list?</strong></summary>

In `.vscode/settings.json`, under the `cSpell.words` key.

</details>

<details>
<summary><strong>3. When should you add a word to the list?</strong></summary>

When the word is a real project term, such as a product name or a framework name, and it is spelled correctly.

</details>

<details>
<summary><strong>4. Why is adding a typo to the list a mistake?</strong></summary>

The checker stops flagging that typo on every page, so the error stays in the documentation.

</details>

<details>
<summary><strong>5. What should you record in a pull request when you change the word list?</strong></summary>

The term, its meaning, and where it appears.

</details>

<details>
<summary><strong>6. Which source should you use to check the spelling of a term?</strong></summary>

The glossary for the project's terms, and the official documentation for product names.

</details>

<details>
<summary><strong>7. Why might a spell-check message appear inside a code block?</strong></summary>

A code block can contain names, commands, and file names that are not in a dictionary. Check whether the checker should ignore that part.

</details>

<details>
<summary><strong>8. Why should a spell check start in report mode in a workflow?</strong></summary>

A check that fails on every pull request blocks all publishing. Report mode lets the team fix the word list before the check blocks changes.

</details>

<details>
<summary><strong>9. Why can a spell checker miss an inconsistent term?</strong></summary>

A term can be spelled correctly, and still differ from the glossary spelling. The checker accepts both spellings.

</details>

<details>
<summary><strong>10. What is the main goal of spell-checking in documentation?</strong></summary>

The goal is to correct spelling errors, and to keep project terms consistent across pages, while a person still reviews the facts and the tone.

</details>

---

## Next lesson

Continue to **Validation**. You will learn how to check that files and content are correct before you publish them.
