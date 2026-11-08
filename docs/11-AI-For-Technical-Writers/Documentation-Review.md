---
title: Documentation review
sidebar_position: 2
description: Learn how to use AI for a first-pass documentation review, how to triage its findings, and how the human reviewer keeps responsibility for accuracy, completeness, and approval.
---

# Documentation review

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the AI writing lesson in this module, and the Review workflow lesson in Module 6 · Docs-as-Code Workflow.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain the purpose of a documentation review, and the three types of review in this course.
- Identify the checks that AI does well, and the checks that need a human reviewer.
- Run a first-pass AI review with a rubric and a checklist.
- Triage each AI finding as valid, not valid, or needing an owner.
- Carry out the reviewer's own checks, including running the steps.
- Record the review outcome so that the decision can be traced.
- Use the review steps in a Docs-as-Code workflow with pull requests.

---

## Why documentation review matters

A review is the gate between a draft and a published page. Its purpose is to find problems that the writer cannot see, because the writer knows what the page should say and reads past the gaps.

AI can help with the first pass. It reads quickly, it does not tire on a long page, and it can check the same points on every page. It cannot tell you whether a step works in the product, or whether a warning is enough for a risky action.

> **Documentation Manager's Tip**
>
> Use AI to make the human review faster and more consistent, not to replace it. The reviewer's time should go to accuracy, risk, and the reader's experience.

---

## Before you start

Make sure you have:

- Completed the AI writing lesson in this module.
- Completed the Review workflow lesson in Module 6 · Docs-as-Code Workflow.
- Visual Studio Code or Cursor, with the course repository open.
- A page to review, and its brief or source.

---

## Types of review

This course uses three types of review. Each one checks a different thing, and each one has a different reviewer.

| Type | Reviewer | Checks |
|---|---|---|
| Peer review | Another technical writer | Clarity, structure, style, and consistency |
| Technical review | An engineer or subject matter expert | Accuracy, steps, examples, and completeness |
| Management review | The documentation manager | Scope, risk, audience fit, and release readiness |

AI can support the peer review, and it can prepare the technical review. It cannot replace either of them, and it cannot replace the management decision.

---

## What AI checks well, and what it does not

Use this table to decide where to rely on the AI, and where to rely on a person.

| Check | AI support | Human required |
|---|---|---|
| Heading order and structure | Strong | Confirm the structure fits the reader's task |
| Terms against the glossary | Strong | Confirm the term is correct for the product |
| Missing sections against a template | Strong | Confirm the missing section is needed |
| Sentence length and passive voice | Strong | Confirm the change keeps the meaning |
| Missing alt text on images | Strong | Confirm the alt text describes the purpose |
| Accuracy of steps and values | Weak | Required, by testing the steps |
| Completeness of warnings | Partial | Required, by a technical reviewer |
| Fit for the audience | Partial | Required, by a writer who knows the audience |

:::important

Do not accept a finding about accuracy from AI without checking it, and do not reject a finding about accuracy from AI without checking the source. A review that trusts the AI in either direction has skipped the review.

:::

---

## How-to: Run a first-pass AI review

**Goal:** Use AI to check the page against a rubric, and produce a list of findings for the reviewer.

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a documentation reviewer who checks technical pages against the team's rubric.

Task: Review the page below against each rubric item. For each finding, quote the sentence and give the rubric item it breaks.

Context: The page is a procedure for developers. The team uses simple technical English, the approved glossary, and the Microsoft style guide.

Rubric:
- Structure: headings follow a logical order, with one main title.
- Terms: each term matches the glossary.
- Clarity: each step has one action.
- Style: sentences are short, and passive voice is limited.
- Images: each image has alt text that describes its purpose.
- Links: each link has descriptive link text.

Constraints:
- Do not change the page.
- Do not judge whether a step works in the product.
- Do not invent a finding. If a rubric item passes, say so.

Output: A table with the columns Quote, Rubric item, and Reason, followed by a list titled Not checked by this review.
```

**Result:** The AI returns findings tied to the rubric. The list titled Not checked shows the reviewer where the AI could not judge, such as the product steps.

---

## How-to: Triage each finding

**Goal:** Decide what happens to each finding, so that the writer receives clear actions.

Use three outcomes for each finding.

| Outcome | Meaning | Action |
|---|---|---|
| Valid | The finding is correct, and the page must change | The writer makes the change |
| Not valid | The finding is incorrect, or the rule does not apply | The reviewer records the reason, and closes the finding |
| Needs an owner | The finding needs a decision by someone else | The reviewer assigns it to the owner, such as the subject matter expert |

Record the triage in the pull request, using this table.

| Finding | Outcome | Reason or owner |
|---|---|---|
| Step 3 uses passive voice | Valid | Writer rewrites as an active step |
| Term "release list" is not in the glossary | Needs an owner | Terminology owner decides the term |
| Table heading differs from the template | Not valid | The template does not apply to this table type |

:::tip

Keep the reason for every "not valid" outcome. A rule that is wrong for one page may be right for another, and the reason helps the team improve the rubric.

:::

---

## How-to: Carry out the technical check

**Goal:** Confirm that the steps and values on the page are correct, by doing them.

AI cannot confirm that a step works. The technical reviewer does this check.

**Step 1: Set up a clean environment.**

Use an environment that matches the reader's setup. Note the versions of the tools you use.

**Step 2: Run each step in order.**

Follow the page exactly. Do not use knowledge that the page does not include. Record each step that does not work, or that gives a different result from the page.

**Step 3: Check each value.**

Compare each version number, limit, default, and example output with the source, such as the contract or the product.

**Step 4: Check each warning.**

Confirm that each risky action has a warning, and that the warning describes the risk.

**Result:** You know which steps and values are correct, and which need a change.

---

## Record the review outcome

Record the review in a form that another reviewer can read. The release note project uses a review report with an overall assessment, a score breakdown, findings, recommendations, and version fields. Use the same idea for a documentation review.

Markdown source for a review record:

````markdown
### Review record: Filter releases by status

| Item | Value |
|---|---|
| Overall assessment | Ready after changes, or Not ready, or Ready |
| First-pass review | AI tool and version, prompt version, date |
| Peer reviewer | Name, and the findings triaged |
| Technical reviewer | Name, and the steps run |
| Findings open | Count, with owner for each |
| Findings closed | Count, with reason for each not valid finding |
| Management decision | Approved by, date |
````

**Result:** A reader of the record can see who reviewed the page, what was checked, what remains open, and who decided.

---

## Docs-as-Code workflow for a documentation review

Use this workflow for each pull request.

```text
Writer opens the pull request
    ↓
Automated checks run: build, link checks, and spell check
    ↓
First-pass AI review, with the rubric
    ↓
Peer reviewer triages the findings
    ↓
Technical reviewer runs the steps
    ↓
Writer makes the valid changes
    ↓
Review record is completed
    ↓
Management decision, then merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/documentation-review-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Documentation-Review.md
git commit -m "Add documentation review lesson"
git push -u origin docs/documentation-review-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The AI review is accepted without triage. | Invalid findings change good text, and valid findings are missed. | Triage each finding with an outcome and a reason. |
| The technical check is skipped because the AI review passed. | Broken steps reach readers. | Run every step in a clean environment. |
| The findings are not tied to the rubric. | The writer cannot tell what to change. | Require each finding to name the rubric item it breaks. |
| "Not valid" findings are closed without a reason. | The team cannot improve the rubric. | Record the reason for each closed finding. |
| The review record is missing. | Nobody can trace the decision. | Complete the review record before merge. |
| The same reviewer does every review. | Bias and fatigue go unnoticed. | Rotate reviewers, and sample each reviewer's decisions. |

---

## Summary

In this lesson, you learned that:

- Documentation review has three types: peer, technical, and management.
- AI supports the first pass, for structure, terms, style, and missing items.
- AI does not confirm that steps work, so the technical reviewer must run them.
- Triage each finding as valid, not valid, or needing an owner, with a reason.
- Record the review so that the outcome and the decision can be traced.

The aim is simple:

**Use AI to make the review faster and more consistent, and keep the judgment about accuracy and approval with a person.**

---

## Practice exercise

Use this repository.

1. Choose one page from `docs/09-AI`. Run the first-pass review prompt in this lesson, and record the number of findings.
2. Triage three of the findings. For each one, record the outcome and the reason, or the owner.
3. Choose one step from the page, and run it in your own environment. Record whether it worked as the page describes.
4. Complete the review record for the page, with the fields in this lesson.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What are the three types of documentation review in this course?</strong></summary>

Peer review, technical review, and management review.

</details>

<details>
<summary><strong>2. Which check does AI do well?</strong></summary>

Structure, terms against the glossary, sentence length, and missing alt text, which are checks it can apply consistently to every page.

</details>

<details>
<summary><strong>3. Why can AI not confirm that a step works?</strong></summary>

It cannot run the step in the product. A technical reviewer must follow the steps in a clean environment.

</details>

<details>
<summary><strong>4. What are the three outcomes of triage?</strong></summary>

Valid, not valid, and needs an owner.

</details>

<details>
<summary><strong>5. Why must each finding name a rubric item?</strong></summary>

So that the writer can see what to change, and the team can see which rule the finding breaks.

</details>

<details>
<summary><strong>6. Why should a not valid finding have a reason?</strong></summary>

The reason shows why the rule does not apply. It helps the team improve the rubric.

</details>

<details>
<summary><strong>7. What does the "Not checked by this review" list show?</strong></summary>

The parts of the page that the AI review could not judge, such as whether the product steps work.

</details>

<details>
<summary><strong>8. Why should reviewers rotate?</strong></summary>

Rotation reduces bias and fatigue, and it spreads the knowledge of the rubric across the team.

</details>

<details>
<summary><strong>9. Why should the review outcome be recorded?</strong></summary>

So that anyone can see who reviewed the page, what was checked, what is open, and who approved it.

</details>

<details>
<summary><strong>10. What is the main goal of documentation review in an AI-assisted workflow?</strong></summary>

The goal is to make the review faster and more consistent, while the judgment about accuracy and approval stays with a person.

</details>

---

## Next lesson

Continue to **Quality checks**. You will learn how to measure the quality of a documentation set, and how to combine automated checks with a sample review.
