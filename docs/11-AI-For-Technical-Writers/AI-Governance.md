---
title: AI governance
sidebar_position: 10
description: Learn how to set policies for AI use in documentation teams, including approved tools, data classification, approval rules, traceability, accountability, and incident response, with the policy kept in Git and changed through review.
---

# AI governance

> **Lesson level:** Advanced
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Agentic AI lesson in this module, the Content migration lesson, and the Release notes lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what AI governance is, and why a documentation team needs it.
- Describe the parts of an AI use policy: scope, approved tools, data rules, approval rules, and accountability.
- Classify content by sensitivity, and decide what may be sent to an AI tool.
- Set approval rules that depend on the audience and the risk of the content.
- Record enough information to trace how a published statement was produced and reviewed.
- Name an owner for each AI-related decision.
- Plan a response to an AI incident, such as an error or data exposure that reached readers.
- Keep the policy in Git, and change it through review.

---

## Why AI governance matters for technical writers

AI tools can draft, summarize, translate, and check documentation quickly. Without rules, each writer decides alone what to share, what to publish, and how to record the work. The result is uneven quality, unknown data exposure, and no way to explain a published statement later.

Governance is the set of rules that makes AI use predictable. It does not stop writers from using AI. It defines where AI helps, what it may see, and who is accountable for the result.

> **Documentation Manager's Tip**
>
> A policy that nobody can find or apply is not a policy. Keep it short, keep it in the repository, and link it from the places where writers work.

---

## Before you start

Make sure you have:

- Completed the Agentic AI lesson in this module.
- Completed the Content migration and Release notes lessons in this module.
- Read the human-in-the-loop decision in `portfolio/adrs/adr-002-human-in-the-loop-ai-review.md`.
- Read the privacy note in the Cursor lesson in Module 10 · AI.

:::note

**For beginners**

Governance means who decides, who checks, and who is responsible. It answers three questions: what may we do with AI, what must we check, and who signs off.

:::

---

## What an AI use policy contains

A documentation team's AI policy usually has six parts. Each part answers one question.

| Part | Question it answers | Example |
|---|---|---|
| Scope | Which work does the policy cover? | Drafting, translation, review, and release notes |
| Approved tools | Which tools may writers use? | A list maintained by the team and the IT owner |
| Data rules | What may be sent to a tool? | Only public and internal content in approved tools |
| Approval rules | Who must approve each type of content? | A reviewer for every customer-facing page |
| Traceability | What must be recorded for each result? | The tool, version, prompt version, and review date |
| Accountability | Who owns each decision? | A named owner for the policy and for each approval step |

---

## Classify content by sensitivity

Before you send content to an AI tool, decide how sensitive it is. The table below is an example. Your organization must set its own levels and rules.

| Class | Examples | Allowed in an approved AI tool? |
|---|---|---|
| Public | Published pages, public API references | Yes |
| Internal | Internal style guides, draft pages not yet published | Yes, in approved tools only |
| Confidential | Unreleased feature details, customer names | Only if the policy explicitly allows it |
| Restricted | Credentials, personal data, legal or security findings | No |

:::important

Check the class of content before you paste it into any tool. A tool that stores or trains on the text can expose content that was never meant to leave the organization.

:::

---

## Set approval rules by audience and risk

Not all content needs the same review. Use the audience and the risk to decide the approval rules.

| Content | Audience | Risk | Approval rule |
|---|---|---|---|
| Customer release notes | Customers | High | Product owner and a writer approve before publication |
| Customer procedures | Customers | High | Technical reviewer and a writer approve |
| Internal guides | Staff | Medium | One writer reviews |
| Drafts, outlines, and summaries | Writers | Low | The writer who uses them checks the result |

This table connects to the approval steps in the Release notes and Agentic AI lessons. A policy makes those steps mandatory, so that no one can skip them.

---

## Record traceability

When a published statement is questioned, you must be able to show how it was produced and reviewed. The ADR for this project defines the fields that a review artifact records. Use the same idea for each AI-assisted page.

Markdown source for a traceability record:

````markdown
### Traceability record: Filter releases by status

| Item | Value |
|---|---|
| Source | Change record, add the reference |
| AI tool | Add the tool name and version |
| Prompt version | Add the prompt version |
| Drafted by | Add the writer's name |
| Reviewed by | Add the reviewer's name |
| Review date | Add the date |
| Approved by | Add the approver's name |
| Approval date | Add the date |
````

**Result:** A reader or auditor can see which source, tool, prompt, writer, reviewer, and approver are linked to the statement, and when each step happened.

:::tip

Record the prompt version, not only the tool name. A result can change when the prompt changes, even with the same tool.

:::

---

## Assign accountability

Every AI-related decision needs one owner. Shared ownership usually means no one acts when something goes wrong.

| Decision | Owner | Backup |
|---|---|---|
| The AI use policy itself | Documentation manager | Team lead |
| The list of approved tools | Documentation manager, with IT | Security owner |
| Data classification rules | Security owner | Documentation manager |
| Approval for customer-facing content | Product owner | Release manager |
| Prompt versions in shared use | Writer who maintains the prompt | Documentation manager |
| Response to an incident | Documentation manager | Security owner |

---

## Plan the response to an incident

An incident is an event in which an error, data exposure, or unapproved change reaches readers or a system. Plan the response before an incident happens.

| Step | Action | Owner |
|---|---|---|
| 1. Detect | A reviewer, reader, or tool reports the problem | Anyone who finds it |
| 2. Contain | Remove the content from public view, or revert the change | Documentation manager |
| 3. Assess | Decide what was exposed, and to whom | Security owner, with the documentation manager |
| 4. Correct | Fix the content, and publish the correction | Writer and approver |
| 5. Learn | Record the cause, and update the policy or the checks | Documentation manager |

:::warning

If a credential or personal data reached a tool or a published page, revoke or remove it first, then assess. Waiting to assess before you contain gives the exposure more time to spread.

:::

---

## Keep the policy in Git

Store the policy as a Markdown file in the repository, and change it through a pull request. Each change then has an author, a reason, a reviewer, and a date.

```bash
git switch -c docs/ai-governance-policy
git add docs/11-AI-For-Technical-Writers/AI-Governance.md
git commit -m "Add AI governance lesson"
git push -u origin docs/ai-governance-policy
```

Review the policy at a fixed interval, such as every six months, and after any incident.

---

## Docs-as-Code workflow for governance changes

Use this workflow when you change the policy, or add a rule.

```text
Identify the problem or change in risk
    ↓
Draft the change in a branch
    ↓
Check the change against the ADR and the data rules
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by the security owner and the product owner
    ↓
Merge, and announce the change to the team
```

**Step 1: Create a branch.**

```bash
git switch -c docs/ai-governance-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/AI-Governance.md
git commit -m "Add AI governance lesson"
git push -u origin docs/ai-governance-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The policy lives in a document nobody can find. | Writers do not know the rules, and they apply them differently. | Keep the policy in the repository, and link it from the team's home page. |
| The data rules are vague. | Writers cannot tell what they may share. | Use a classification table with clear examples. |
| Approval depends on who is available. | Customer content is published without the right review. | Set approval rules by audience and risk. |
| The traceability record is missing. | No one can explain a published statement later. | Record the source, tool, prompt version, reviewer, and approver. |
| Ownership is shared by everyone. | No one acts during an incident. | Name one owner for each decision, and a backup. |
| The policy is never reviewed. | The policy no longer matches the tools or the risks. | Review the policy on a fixed schedule, and after each incident. |

---

## Summary

In this lesson, you learned that:

- An AI use policy covers scope, approved tools, data rules, approval rules, traceability, and accountability.
- Classify content by sensitivity, and check the class before you share it with a tool.
- Set approval rules by audience and risk.
- Record enough detail to trace each published statement.
- Name one owner for each decision, and plan the response to an incident.
- Keep the policy in Git, and change it through review.

The aim is simple:

**Make AI use predictable, traceable, and accountable, so that the team can trust what it publishes.**

---

## Practice exercise

Use this repository.

1. Read the human-in-the-loop decision in `portfolio/adrs/adr-002-human-in-the-loop-ai-review.md`. Write one sentence that states the rule for customer-facing publication.
2. Classify three kinds of content in this repository, such as published pages, internal notes, and the API contract. Use the classification table in this lesson, and explain each choice.
3. Write an approval rule for one type of content, using the audience and the risk.
4. Complete the traceability record for one page you have written, with the fields in this lesson.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is AI governance?</strong></summary>

The set of rules that defines where AI helps, what it may see, who checks the results, and who is accountable for them.

</details>

<details>
<summary><strong>2. What are the six parts of an AI use policy?</strong></summary>

Scope, approved tools, data rules, approval rules, traceability, and accountability.

</details>

<details>
<summary><strong>3. Why should content be classified before it is shared with an AI tool?</strong></summary>

A tool that stores or trains on the text can expose content that was never meant to leave the organization.

</details>

<details>
<summary><strong>4. Why should approval rules depend on the audience and the risk?</strong></summary>

Customer-facing content has higher risk, so it needs stronger review than an internal draft.

</details>

<details>
<summary><strong>5. Why must the prompt version be recorded, not only the tool name?</strong></summary>

A result can change when the prompt changes, even when the tool stays the same.

</details>

<details>
<summary><strong>6. Why should every decision have one named owner?</strong></summary>

Shared ownership often means no one acts. A named owner, with a backup, makes sure that someone can respond.

</details>

<details>
<summary><strong>7. What is the first action after a credential reaches a tool?</strong></summary>

Revoke or remove the credential, then assess what was exposed. Containment comes before assessment.

</details>

<details>
<summary><strong>8. Why should the policy be kept in Git?</strong></summary>

Each change then has an author, a reason, a reviewer, and a date, and the history shows how the policy changed.

</details>

<details>
<summary><strong>9. When should the policy be reviewed?</strong></summary>

On a fixed schedule, such as every six months, and after any incident.

</details>

<details>
<summary><strong>10. What is the main goal of AI governance in a documentation team?</strong></summary>

The goal is to make AI use predictable, traceable, and accountable, so that the team can trust what it publishes.

</details>

---

## Next lesson

Continue to **Measuring AI work**. You will learn how to measure the time, quality, and review effort of AI-assisted documentation, so that the team can decide where AI helps.
