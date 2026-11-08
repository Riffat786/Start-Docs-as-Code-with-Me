---
title: AI writing
sidebar_position: 1
description: Learn how to use AI to draft, restructure, and rewrite technical documentation from approved facts, how to write a source-grounded brief, and how to check every sentence before it reaches readers.
---

# AI writing

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Prompt engineering lesson, and the Examples lesson in Module 10 · AI.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Identify the writing tasks where AI helps, and the tasks where it does not.
- Write a source-grounded brief that states the audience, the purpose, and the approved facts.
- Use AI to draft a page from an outline, using only the facts in the brief.
- Use AI to rewrite text in plain technical English, and check each change.
- Find sentences that state a fact without a source.
- Keep the writer responsible for accuracy, tone, and the final text.
- Document AI-assisted writing so that reviewers can see what was drafted and what was checked.

---

## Why AI writing matters for technical writers

AI can produce a first draft in seconds. It can restructure a rough outline, shorten a long paragraph, or suggest a clearer sentence. Used well, these tasks free you for the work that needs your judgment, such as checking the steps against the product and deciding what readers need.

AI can also write a plausible sentence that is wrong. It can invent a setting, a version number, or a warning that does not exist. A fluent sentence is not a correct sentence.

> **Documentation Manager's Tip**
>
> Treat an AI draft as a draft from a new colleague who has not used the product. The draft can save you time on structure and wording. You still check every fact before the page is approved.

---

## Before you start

Make sure you have:

- Completed the Prompt engineering lesson and the Examples lesson in Module 10 · AI.
- Visual Studio Code or Cursor, with the course repository open.
- Approved facts for one page you want to write, such as the steps from a tested procedure.
- The style guide your team follows, such as the simple technical English rules in this course.

---

## Where AI helps, and where it does not

Use this table to decide whether a task is suitable for AI.

| Task | Suitable for AI? | Why |
|---|---|---|
| Turn an outline into a first draft | Yes, with approved facts | Structure and wording are the main work |
| Rewrite a long sentence in plain language | Yes, with a check | The meaning must stay the same |
| Suggest a better heading or order | Yes | Suggestions are easy to accept or reject |
| Write a step that the writer has not tested | No | The step may not work in the product |
| Write a safety warning or a legal statement | No, unless a reviewer supplies the wording | An error can cause harm or a compliance problem |
| Invent a version number, limit, or default | No | The value must come from the source |

:::important

AI must not be the source of a fact. Give it the facts, and check its output against them. A fact that appears only in the AI output is an unverified fact.

:::

---

## Write a source-grounded brief

A brief is the set of instructions and facts that you give the AI before it writes. A good brief limits what the AI can say. Write the brief first, and keep it with the page.

Markdown source for a brief:

````markdown
### Writing brief: Filter releases by status

| Item | Content |
|---|---|
| Audience | Developers who call the Release Management API for the first time |
| Purpose | Show how to filter the list of releases by status |
| Approved facts | The `status` query parameter accepts the values listed in the contract. The list returns a page of results with pagination information. |
| Steps | 1. Choose the status. 2. Send the request with the parameter. 3. Read the pagination fields. |
| Warnings | None approved for this page. Add any approved warning here. |
| Terms | Use the glossary term for each concept. |
| Format | Procedure, with one request example in a code block. |
| Source | `portfolio/api/release-management/openapi.yaml` |
````

**Result:** The brief names the audience, the facts, and the source. Anything not in the brief is outside the scope of the draft.

:::tip

Keep the brief in the repository, beside the page it describes. A reviewer can then compare the page with the brief, and find any sentence that goes beyond the approved facts.

:::

---

## How-to: Draft a page from an outline and a brief

**Goal:** Use AI to turn an outline into a draft, without adding facts that are not in the brief.

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a technical writer who writes clear procedures for developers.

Task: Write the page described by the outline below, using only the approved facts in the brief.

Context: The audience is developers who are new to this API. Use simple technical English and short sentences.

Constraints:
- Use only the approved facts. If a detail is missing, write [NEEDS FACT] at that point.
- Do not add a warning, a limit, a default value, or a version number that is not in the brief.
- Keep code blocks unchanged.

Output: Markdown, with the same heading order as the outline.

Outline:
[paste the outline here]

Brief:
[paste the brief here]
```

**Result:** The AI returns a draft with the headings from the outline. Each missing fact is marked [NEEDS FACT], so the gap is visible and cannot pass as content.

:::warning

Search the draft for [NEEDS FACT] before you review it. Every marker must be resolved with a fact from the source, or removed. A draft with unresolved markers is not ready for review.

:::

---

## How-to: Rewrite text in plain technical English

**Goal:** Make a sentence shorter and clearer, without changing its meaning.

Before (long and passive):

```markdown
The release list may be filtered by the status field, which is then used by the server to return only those releases that have been marked with the requested status.
```

After (short and direct):

```markdown
Use the `status` parameter to return only the releases with that status.
```

**How to check the rewrite:**

| Check | Question | Result |
|---|---|---|
| Meaning | Does the rewrite say the same thing? | Yes |
| Facts | Does the rewrite add or remove a fact? | No |
| Terms | Does it use the approved term for the parameter? | Yes |
| Code | Is the code unchanged? | Yes |

**Result:** The sentence is shorter and clearer, and each check confirms that the meaning is the same.

:::note

Ask the AI for three options, not one. Compare the options with the meaning check, and choose the one that is clearest for the audience.

:::

---

## How-to: Find sentences without a source

**Goal:** Find each sentence that states a fact, and confirm that the fact appears in the brief or the source.

Use the RTCCO structure. Ask the AI to list the claims, not to judge them.

```text
Role: You are a fact checker for technical documentation.

Task: List each sentence in the page below that states a fact, a number, a limit, a default, or a warning.

Constraints:
- Do not judge whether a fact is true.
- Quote each sentence exactly.
- Do not add sentences that are not on the page.

Output: A table with the columns Quote, Type of claim, and Source (write Not found if the brief does not contain it).
```

**Result:** The AI lists each claim. The writer checks each claim against the brief, and marks the ones with no source as Not found. Those sentences must be removed, or sourced, before the page moves forward.

---

## Keep the writer responsible

AI can draft and rewrite, but the writer decides what the page says. Use this table to see which decisions stay with you.

| Decision | Who decides |
|---|---|
| Which facts are approved | The product owner and the subject matter expert |
| Whether a step works | A tester who has run the step |
| The final wording | The writer, after checking each claim |
| Whether the page is ready | The reviewer, using the review checklist |

---

## Document AI-assisted writing

Record the use of AI in the page's review record, so that reviewers know what was drafted and what was checked.

Markdown source for a review record:

````markdown
### AI-assisted writing record

| Item | Value |
|---|---|
| Brief | Link to the brief file |
| AI tool and version | Add the tool and version |
| Prompt version | Add the prompt version |
| Drafted with AI | Yes, from the outline and the brief |
| Unresolved markers | None, or list the remaining markers |
| Claims checked | Add the number of claims, and the number with no source |
| Checked by | Add the writer's name |
| Date | Add the date |
````

**Result:** A reviewer can see the brief, the tool, the prompt version, and the checks. This supports the traceability that the AI Governance lesson requires.

---

## Docs-as-Code workflow for AI-assisted writing

Use this workflow for each page.

```text
Write the brief, with approved facts and the source
    ↓
Create a branch
    ↓
Draft from the outline and the brief
    ↓
Resolve every [NEEDS FACT] marker
    ↓
Check each claim against the brief
    ↓
Rewrite for plain language, and check each change
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Technical review and peer review
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/ai-writing-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/AI-Writing.md
git commit -m "Add AI writing lesson"
git push -u origin docs/ai-writing-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The AI is asked to write without a brief. | The draft contains facts that no one approved. | Write the brief first, and give the AI only the approved facts. |
| The [NEEDS FACT] markers are left in the page. | The page publishes with gaps or placeholders. | Search for the markers, and resolve each one before review. |
| A plausible value is accepted without a source. | A wrong version, limit, or default reaches readers. | Check every claim against the brief, and remove any with no source. |
| The rewrite changes the meaning. | The page says something the product does not do. | Use the meaning check for each rewrite. |
| The writer accepts the draft as finished. | The writer's own check is skipped. | Make the claim check a required step before review. |
| The AI use is not recorded. | Reviewers cannot see what was drafted. | Add the AI-assisted writing record to each page. |

---

## Summary

In this lesson, you learned that:

- AI helps with structure, first drafts, and plain-language rewrites, but not with facts that have not been verified.
- A source-grounded brief limits what the AI can say, and it gives reviewers a source to check against.
- Mark each missing fact, and resolve every marker before review.
- Check each claim, and remove any sentence that has no source.
- The writer decides the final wording, and the reviewer decides readiness.
- Record the AI use, so that the page can be traced.

The aim is simple:

**Use AI to write faster, and check every fact before a reader sees it.**

---

## Practice exercise

Use this repository.

1. Write a brief for one procedure in `docs/09-AI`. Include the audience, the purpose, the approved facts, the source, and the format.
2. Write an outline for the same procedure, with five headings or fewer.
3. Use the drafting prompt in this lesson with your brief and outline. Record how many [NEEDS FACT] markers the draft contains.
4. Use the fact-checking prompt on the draft. Record how many claims have no source in your brief.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Which writing task is suitable for AI with a check?</strong></summary>

Rewriting a long sentence in plain language, because the meaning can be checked after the rewrite.

</details>

<details>
<summary><strong>2. Why should AI not be the source of a fact?</strong></summary>

AI can write a plausible fact that is wrong. A fact that appears only in the AI output has not been verified.

</details>

<details>
<summary><strong>3. What does a source-grounded brief contain?</strong></summary>

The audience, the purpose, the approved facts, the steps, the warnings, the terms, the format, and the source.

</details>

<details>
<summary><strong>4. What does the [NEEDS FACT] marker do?</strong></summary>

It shows a gap where the AI lacked an approved fact. It must be resolved or removed before review.

</details>

<details>
<summary><strong>5. Why should you ask the AI for three options when you rewrite a sentence?</strong></summary>

Comparing options helps you choose the clearest one for the audience, and the meaning check applies to each option.

</details>

<details>
<summary><strong>6. What should you do with a claim that has no source?</strong></summary>

Remove it, or add a source for it. Do not publish a claim that cannot be traced.

</details>

<details>
<summary><strong>7. Which decisions stay with the writer?</strong></summary>

The final wording and the check of each claim. The product owner and the subject matter expert decide which facts are approved.

</details>

<details>
<summary><strong>8. Why should the AI use be recorded on the page's review record?</strong></summary>

So that reviewers can see what was drafted, what tool and prompt version were used, and which checks were done.

</details>

<details>
<summary><strong>9. Why should you not ask AI to write a safety warning on its own?</strong></summary>

A wrong warning can cause harm or a compliance problem. The wording must come from an approved source.

</details>

<details>
<summary><strong>10. What is the main goal of AI writing in technical documentation?</strong></summary>

The goal is to write faster with AI help, while every fact is checked against an approved source before a reader sees it.

</details>

---

## Next lesson

Continue to **Documentation review**. You will learn how to use AI to support a review of documentation, and how a reviewer keeps the final judgment.
