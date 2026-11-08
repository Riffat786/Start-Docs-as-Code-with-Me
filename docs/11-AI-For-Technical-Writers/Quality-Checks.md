---
title: Quality checks
sidebar_position: 3
description: Learn how to measure the quality of a documentation set with automated checks, quality gates, and a sample audit that AI can support, and how to track defects by severity.
---

# Quality checks

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Documentation review lesson in this module, the Validation lesson and the Link checking lesson in Module 11 · Automation, and the Review workflow lesson in Module 6 · Docs-as-Code Workflow.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain the difference between a review of one page and a quality check of a whole documentation set.
- Name the quality dimensions that a documentation set should meet.
- Run the automated checks that this project already uses, and read their results.
- Define a quality gate, and decide which checks block a change and which only warn.
- Run an AI-assisted audit on a sample of pages, with a rubric and a recorded result.
- Record defects with a severity, an owner, and a status.
- Report the quality of a documentation set so that the team can act on it.

---

## Why quality checks matter for technical writers

A review checks one change. A quality check looks at the whole documentation set over time. It shows whether the content is getting better or worse, and where the problems are concentrated.

A set of pages can pass every review and still have broken links, outdated examples, and inconsistent terms that no single review would catch.

> **Documentation Manager's Tip**
>
> Measure the set, not only the page. A single review tells you about one change. A quality check tells you whether the reader can trust the whole site.

---

## Before you start

Make sure you have:

- Completed the Documentation review lesson in this module.
- Completed the Validation and Link checking lessons in Module 11 · Automation.
- Visual Studio Code or Cursor, with the course repository open.
- Node.js installed, so that you can run the build.

---

## Quality dimensions

A documentation set should meet several dimensions. Each one has a check, and some checks are automated while others need a person.

| Dimension | What it means | Check type |
|---|---|---|
| Buildability | The site builds without errors | Automated: `npm run build` |
| Links | Internal links and anchors work | Automated, plus an external link review |
| Accuracy | Steps and values match the source | Human review, with a sample audit |
| Completeness | Every required section is present | Automated against a template, and human review |
| Consistency | Terms match the glossary | Automated search, and human review |
| Accessibility | Images have alt text, and contrast is readable | Automated checks, and a manual contrast check |
| Currency | The page matches the current version | Human review, against the release notes |
| Findability | Readers can find the page from the sidebar and search | Human test, with a set of reader tasks |

---

## Run the automated checks

This project already runs several automated checks. Run them in this order, and read each result before you move to the next one.

**Step 1: Build the site.**

```bash
npm run build
```

Expected result: The output ends with `[SUCCESS]`. A failure shows the file and the line.

**Step 2: Run the type check.**

```bash
npm run typecheck
```

Expected result: The command finishes without errors.

**Step 3: Check the OpenAPI contract.**

```bash
npx redocly lint portfolio/api/release-management/openapi.yaml
```

Expected result: No errors. Read each warning, and record any that you accept.

**Step 4: Search for terms that drift.**

```bash
git grep -n -i "docs as code"
```

Expected result: Each line that uses a variant of a glossary term. Compare the results with the preferred term.

**Result:** You have the results of five checks. Each one tells you about a different dimension.

---

## Define quality gates

A quality gate is a rule that decides whether a change can move forward. Each check is either a gate or a warning.

| Check | Gate or warning | Reason |
|---|---|---|
| Build | Gate | A page that does not build cannot be published |
| Internal links | Gate | A broken internal link sends the reader to an error page |
| Broken anchors | Warning, read and recorded | The build reports them, and the change can move forward after review |
| Spell check | Warning, reviewed | A false positive can block a valid term |
| External links | Warning, checked by a person | A site can be down for maintenance |
| Contrast | Gate for customer pages | Readers with low vision cannot read low-contrast text |

:::important

Make a check a gate only when a failure must stop publication. A gate that fails for reasons nobody can fix leads people to bypass it.

:::

---

## How-to: Run an AI-assisted audit on a sample

**Goal:** Check a sample of pages against the rubric, and record the results so that the set can be compared over time.

**Step 1: Build the inventory.**

List the pages in the area you audit, with their last update date.

```bash
git log -1 --format="%ad" --date=short -- docs/09-AI/Cursor.md
```

Expected result: The date of the last commit that changed the page. Repeat for each page in the sample.

**Step 2: Choose the sample.**

Choose a random sample of pages, of at least ten percent of the area. Include the oldest pages, because they are most likely to be out of date.

**Step 3: Run the audit prompt.**

Use the RTCCO structure from the Prompt engineering content in Module 10.

```text
Role: You are a quality auditor for technical documentation.

Task: Check the page below against each rubric item. For each item, give a score of 0, 1, or 2, and quote the sentence that supports the score.

Context: The page is part of a documentation set for developers. The team uses the approved glossary and simple technical English.

Rubric:
- Consistency: terms match the glossary.
- Completeness: each procedure has a purpose, steps, and an expected result.
- Clarity: each step has one action.
- Links: each link has descriptive text.
- Accessibility: each image has alt text that describes its purpose.

Constraints:
- Do not change the page.
- Do not judge whether a step works in the product. Mark accuracy as Not checked.
- Quote each sentence exactly.

Output: A table with the columns Page, Rubric item, Score, and Quote.
```

**Step 4: Record the results.**

| Page | Last updated | Consistency | Completeness | Clarity | Links | Accessibility | Total |
|---|---|---|---|---|---|---|---|
| Cursor.md | Add date | 2 | 2 | 1 | 2 | 2 | 9 |

**Result:** You have a score for each page in the sample. Compare the totals over time, and use the lowest scores to decide where to start.

:::warning

Check every score against its quote. AI can give a high score to a sentence that breaks the rule, or a low score to one that meets it. A score without a quote is not a result.

:::

---

## How-to: Track defects by severity

**Goal:** Record each defect so that the team can see what must be fixed first.

Use three severity levels.

| Severity | Meaning | Example | Target to fix |
|---|---|---|---|
| High | A reader cannot complete the task, or is at risk | A step that does not work, or a missing warning | Before the next release |
| Medium | A reader is slowed or confused | A broken link to a minor page | Within one sprint |
| Low | A cosmetic or minor wording issue | A typo in a heading | When convenient |

Markdown source for a defect record:

````markdown
### Defect: Broken link on the Cursor page

| Item | Value |
|---|---|
| Page | docs/09-AI/Cursor.md |
| Severity | Medium |
| Found by | Name, and the check that found it |
| Found on | Date |
| Owner | Name of the writer who fixes it |
| Status | Open, in progress, or closed |
| Fix | Describe the change, and link the pull request |
````

:::note

Record the check that found each defect. A defect found by an automated check shows that the check works. A defect found by a reader shows that the checks missed something.

:::

---

## Report the quality of the set

Report the results in a Markdown file in the repository, and update it through a pull request. The report shows the trend, not only the current state.

| Dimension | Last period | This period | Trend | Notes |
|---|---|---|---|---|
| Buildability | Add value | Add value | Add arrow | Add context |
| Links | Add value | Add value | Add arrow | Add context |
| Sample audit total | Add value | Add value | Add arrow | Add context |
| Open high defects | Add value | Add value | Add arrow | Add context |

---

## Docs-as-Code workflow for quality checks

Use this workflow each period, and when you change a gate.

```text
Run the automated checks
    ↓
Build the inventory, and choose the sample
    ↓
Run the AI-assisted audit, and check each score
    ↓
Record the defects with severity and owner
    ↓
Update the quality report in a branch
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by the documentation manager
    ↓
Merge, and assign the open high defects
```

**Step 1: Create a branch.**

```bash
git switch -c docs/quality-checks-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Quality-Checks.md
git commit -m "Add quality checks lesson"
git push -u origin docs/quality-checks-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Every check is a gate. | Teams bypass the gates, and the checks lose their value. | Make a check a gate only when a failure must stop publication. |
| The sample is always the newest pages. | Old pages drift without anyone noticing. | Include the oldest pages in each sample. |
| A score is recorded without a quote. | The score cannot be checked. | Require a quote for each score. |
| Defects have no severity or owner. | The team cannot decide what to fix first. | Record a severity and an owner for every defect. |
| Only the current state is reported. | The team cannot see whether quality is improving. | Report the trend with each period. |
| AI scores are accepted without checking. | Wrong scores hide real problems. | Check each score against its quote, and sample the checks. |

---

## Summary

In this lesson, you learned that:

- A quality check looks at the whole documentation set over time, not one change.
- Quality has several dimensions, and each one has an automated or a human check.
- A quality gate blocks a change only when a failure must stop publication.
- An AI-assisted audit on a sample gives comparable scores, when each score has a quote.
- Defects are recorded with a severity, an owner, and a status.
- The quality report shows the trend, so the team can see whether the set is improving.

The aim is simple:

**Know the quality of the whole documentation set, and fix the problems that matter most to readers first.**

---

## Practice exercise

Use this repository.

1. Run the four automated checks in this lesson, and record one result for each.
2. Choose a sample of three pages from `docs/09-AI`. Run the audit prompt on each one, and record the score for each rubric item.
3. Check two scores against their quotes. Record whether each score is correct.
4. Write a defect record for one problem you find, with a severity and an owner.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. How does a quality check differ from a review?</strong></summary>

A review checks one change. A quality check looks at the whole documentation set, over time.

</details>

<details>
<summary><strong>2. Which dimension is checked by the build?</strong></summary>

Buildability. The build fails when the site cannot be built.

</details>

<details>
<summary><strong>3. What is a quality gate?</strong></summary>

A rule that decides whether a change can move forward. A gate blocks publication when it fails.

</details>

<details>
<summary><strong>4. Why should not every check be a gate?</strong></summary>

When a gate fails for reasons nobody can fix, people bypass it, and the gate loses its value.

</details>

<details>
<summary><strong>5. Why must each AI score have a quote?</strong></summary>

A score without a quote cannot be checked. The quote shows the sentence that supports the score.

</details>

<details>
<summary><strong>6. Why should the sample include the oldest pages?</strong></summary>

Old pages are the most likely to be out of date, so they are where drift is most likely to be found.

</details>

<details>
<summary><strong>7. What are the three severity levels in this lesson?</strong></summary>

High, medium, and low.

</details>

<details>
<summary><strong>8. Why should a defect record include the check that found it?</strong></summary>

It shows whether the checks work. A defect found by a reader shows that the checks missed something.

</details>

<details>
<summary><strong>9. Why should the quality report show the trend?</strong></summary>

A trend shows whether the documentation set is improving or getting worse. The current state alone does not show that.

</details>

<details>
<summary><strong>10. What is the main goal of quality checks for a documentation set?</strong></summary>

The goal is to know the quality of the whole set, and to fix the problems that matter most to readers first.

</details>

---

## Next lesson

Continue to **Terminology management**. You will learn how to keep product and technical terms consistent across documentation, and how to use AI for terminology work with human approval.
