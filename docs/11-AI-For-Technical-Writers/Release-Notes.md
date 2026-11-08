---
title: Release notes
sidebar_position: 8
description: Learn how to write release notes for two audiences, how to draft them from change data with AI support, and how to check every statement against its source before a person approves publication.
---

# Release notes

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the AI Writing lesson in this module, the AI Agents lesson in Module 10, and the Terminology management lesson in this module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what a release note is, and who reads it.
- Write release notes for two audiences, customers and technical teams, from the same source.
- Turn a change record into a customer-facing sentence, without internal details.
- Use an AI-assisted workflow to draft release notes, and keep a traceable link to each source record.
- Use a review report as a checklist before a person approves publication.
- Keep a human approval step between a draft and the published notes.
- Document the release note process so that other writers can follow it.

---

## Why release notes matter for technical writers

A release note tells readers what changed, what to check, and what they must do differently. Customers use release notes to decide whether to upgrade. Support teams use them to answer questions. Internal teams use them to plan testing.

A wrong or missing release note can cause a failed upgrade, a support spike, or a compliance problem.

> **Documentation Manager's Tip**
>
> Write the release note for the reader who has to act. Ask: "What will this reader do differently after this release?" If the answer is nothing, the change may not need a release note.

---

## Before you start

Make sure you have:

- Completed the AI Writing lesson in this module.
- Completed the AI Agents lesson in Module 10 · AI.
- Completed the Terminology management lesson in this module.
- Read the case study at `portfolio/case-studies/ai-release-note-generator/index.md`.
- Visual Studio Code or Cursor, with the course repository open.

---

## Two audiences, one source

The AI Release Note Generator in this repository produces two drafts from the same analyzed release data. Each draft has a different reader and a different level of detail.

| Draft | Reader | Includes | Excludes |
|---|---|---|---|
| Customer release notes | Customers and end users | Plain-language changes, fixes, and actions to take | Internal IDs, system names, and technical internals |
| Technical services release notes | Support and technical teams | Component names, known issues, and technical impact | Marketing language, and details that do not affect support |

The case study lists the output of the Publishing Agent as these two files. The same change can appear in both drafts, with different wording.

:::important

Keep internal details, such as work item numbers, out of customer drafts. A customer does not need a work item ID, and an ID can expose internal information.

:::

---

## From a change record to a release note

A change record is written for engineers. A release note is written for a reader who must act. Use this table to see the difference.

| Source change record | Customer release note | Technical services note |
|---|---|---|
| Fix null reference in navigation menu when no items are returned | Fixed an issue where the navigation menu showed an error page when a section had no items. | Resolved a null reference in the navigation component for empty sections. Check the empty-section case after upgrade. |
| Add a `status` filter to the list releases endpoint | You can now filter releases by status. | The list releases operation accepts a `status` query parameter. Update any integration that lists releases. |

The source in both rows is a mock record for this lesson, based on the style of the Examples lesson in Module 10. The text in the right-hand columns is written for the lesson.

---

## How-to: Write a release note entry

**Goal:** Write one release note entry that a reader can act on.

Use this structure for each entry:

```text
What changed (one sentence, in the reader's terms)
What the reader must do, if anything (one sentence)
Where to find more information (one link, if needed)
```

Markdown source:

````markdown
### Filter releases by status

You can now filter the list of releases by status. Use the `status` parameter when you request the list.

For details, see the [release list reference](../08-API-Documentation/REST.md).
````

**Result:** The entry tells the reader what changed, what to do, and where to look. It contains no internal detail.

:::tip

Use the same order for every entry, so that readers can scan a release. Put the most important change first.

:::

---

## How-to: Structure a release note page

**Goal:** Organize the entries so that readers can find the changes that affect them.

Use these sections, in this order.

| Section | Contains |
|---|---|
| Overview | The release version, the date, and a one-line summary |
| Action required | Changes that need a reader to do something |
| New | New features |
| Changed | Changes to existing behavior |
| Fixed | Bug fixes |
| Known issues | Problems that remain, with a workaround if one exists |

Markdown source for the page structure:

````markdown
# Release 2026.08

**Release date:** Add the date

## Action required

- Add the action, if any.

## New

- Add each new feature.

## Changed

- Add each change to existing behavior.

## Fixed

- Add each fix.

## Known issues

- Add each known issue, with a workaround if one exists.
````

:::note

Put "Action required" first. A reader who skims the page must see the changes that could break their work before any other section.

:::

---

## How-to: Draft release notes with AI, from a review checklist

**Goal:** Use an AI tool to draft entries, and use the review report to check the draft.

The case study describes a Reviewer Agent that writes a review report, with an overall assessment, a score breakdown, findings, and recommendations. Use the findings as a checklist for the draft.

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a technical writer who drafts customer-facing release notes.

Task: Draft release note entries for the change records below. Use the entry structure: what changed, what the reader must do, and where to find more information.

Context: Use plain language. Follow the terminology in the glossary entries provided. The audience is customers, not engineers.

Constraints:
- Do not add a fact that is not in the change record.
- Do not include work item IDs, system names, or internal details.
- Mark each entry that has no action for the reader, so that a writer can confirm it.
- If a change record is unclear, do not guess. List it under Needs clarification.

Output: The entries, followed by a list titled Needs clarification.

Change records:
[paste the approved change records here]
```

**Result:** The AI returns a draft with a list of unclear records. A writer checks each entry against its change record, and then checks the review report findings.

:::warning

An AI draft can state a fix that the change record does not describe, or it can describe a feature as released when the record says it is planned. Check every statement against the change record before the draft goes to review.

:::

---

## How-to: Check a draft against its source

**Goal:** Confirm that every statement in the draft has a source, and that no statement goes beyond it.

Use this checklist.

| Check | Question | Example failure |
|---|---|---|
| Source | Does each entry map to a change record? | An entry with no record behind it |
| Scope | Does the entry say only what the record says? | "Improved performance" when the record says nothing about speed |
| Status | Is the change released, or only planned? | A planned feature written as available |
| Action | Is the reader action correct and complete? | A reader told to update a setting that does not exist |
| Audience | Does the entry avoid internal detail? | A work item ID in a customer note |
| Review report | Has each finding in the review report been addressed? | A finding about a missing action left open |

Keep a traceable link between each entry and its change record. A reviewer can then check the source of any statement during the approval step.

---

## Approval and publication

A person approves the release notes before publication. In this project, the Reviewer Agent's report supports the decision, and it does not replace it.

| Step | Owner | Output |
|---|---|---|
| Draft | AI tool, with a writer | Draft entries and a list of unclear records |
| Source check | Writer | Each entry mapped to a record |
| Review report check | Writer | Each finding addressed or recorded |
| Approval | Product owner or release manager | Approved notes |
| Publication | Writer, through the approved workflow | Published release notes |

:::important

Publication is a decision. The review report and the AI draft are inputs to that decision. Record who approved the notes, and when.

:::

---

## Docs-as-Code workflow for release notes

Use this workflow for each release.

```text
Collect the approved change records
    ↓
Draft the entries, with AI support
    ↓
Check each entry against its source
    ↓
Address the review report findings
    ↓
Create a branch, and add the release note page
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Approval by the product owner
    ↓
Merge, and publish through the approved workflow
```

**Step 1: Create a branch.**

```bash
git switch -c docs/release-notes-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Release-Notes.md
git commit -m "Add release notes lesson"
git push -u origin docs/release-notes-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The customer note includes a work item ID or a system name. | Internal details reach customers. | Remove the internal detail, and keep it in the technical note. |
| An entry says more than its change record. | Readers expect a result that is not guaranteed. | Limit each entry to what the record says. |
| A planned feature is written as released. | Readers look for a feature that is not available. | Check the status in the record before writing. |
| The reader action is missing. | Readers cannot tell whether they must act. | Add the action, or state that none is needed. |
| The review report is not checked. | A finding that was already raised is missed. | Address each finding, or record why it does not apply. |
| The notes are published without a recorded approval. | No one can say who approved a statement. | Record the approver and the date. |

---

## Summary

In this lesson, you learned that:

- Release notes serve readers who must act, and a note should answer what they must do.
- Customer notes and technical notes can come from the same source, with different detail.
- Use one entry structure: what changed, what the reader must do, and where to find more information.
- Draft with AI from change records, and check each entry against its source.
- Use the review report as a checklist, and keep a person responsible for approval.
- Keep internal details out of customer notes.

The aim is simple:

**Tell each reader what changed, what to do, and where to find more, with every statement traceable to its source.**

---

## Practice exercise

Use this repository.

1. Read the two-draft description in the case study at `portfolio/case-studies/ai-release-note-generator/index.md`. Write one sentence that explains why the drafts differ.
2. Write one release note entry for a mock change record of your choice, using the entry structure in this lesson.
3. Check your entry against the source checklist. Record one check that you pass, and one that you would fail if the record were different.
4. Write a short approval table for the release notes, with each step, its owner, and its output.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Who reads customer release notes?</strong></summary>

Customers and end users, who need to know what changed and whether they must act.

</details>

<details>
<summary><strong>2. What are the two audiences in the release note project in this repository?</strong></summary>

Customers, who receive the customer release notes, and support and technical teams, who receive the technical services release notes.

</details>

<details>
<summary><strong>3. What is the entry structure that this lesson recommends?</strong></summary>

What changed, what the reader must do, and where to find more information.

</details>

<details>
<summary><strong>4. Why should work item IDs stay out of customer notes?</strong></summary>

A customer does not need the ID, and an ID can expose internal information about the project.

</details>

<details>
<summary><strong>5. What should a writer do with an unclear change record?</strong></summary>

Do not guess. List it under Needs clarification, and ask the owner of the record to explain it.

</details>

<details>
<summary><strong>6. Why must a planned feature not be written as released?</strong></summary>

Readers then look for a feature that is not available yet, and they can lose trust in the notes.

</details>

<details>
<summary><strong>7. What does the Reviewer Agent's report provide?</strong></summary>

An overall assessment, a score breakdown, findings, and recommendations. It supports the reviewer's decision.

</details>

<details>
<summary><strong>8. Why should the review report not replace the approval?</strong></summary>

The report is an input from an automated review. A person must decide whether the notes are correct for the audience.

</details>

<details>
<summary><strong>9. Why should the approver and the date be recorded?</strong></summary>

So that anyone can see who approved each statement, and when, if a question arises later.

</details>

<details>
<summary><strong>10. What is the main goal of a release note?</strong></summary>

The goal is to tell each reader what changed, what to do, and where to find more, with every statement traceable to its source.

</details>

---

## Next lesson

Continue to **Agentic AI**. You will learn how to design a multi-step documentation workflow with agents, and where to place the human review steps.
