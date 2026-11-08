---
title: Measuring AI work
sidebar_position: 11
description: Learn how to measure the time, quality, and review effort of AI-assisted documentation, how to set a baseline before you change the process, and how to avoid metrics that reward volume instead of quality.
---

# Measuring AI work

> **Lesson level:** Advanced
>
> **Time to complete:** 35–40 minutes
>
> **Prerequisites:** Complete the AI Governance lesson in this module, and the Validation lesson in Module 11 · Automation.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain why a documentation team should measure AI-assisted work before it expands its use.
- Set a baseline for a task before AI is introduced.
- Define metrics for time, quality, and review effort, with a clear formula for each one.
- Collect metrics from real project signals, such as the build output, review findings, and Git history.
- Recognize metrics that reward volume and do not show quality.
- Measure quality with a sample review and a rubric.
- Keep metrics in Git, and report them through a review.

---

## Why measurement matters for technical writers

A team that uses AI can produce more pages, faster. Speed alone does not show that the pages are correct, clear, or easy to maintain. Without measurement, a team can expand AI use because it feels fast, and only learn about the cost when readers report errors.

Measurement helps you decide where AI helps, where it adds review work, and where it should not be used.

> **Documentation Manager's Tip**
>
> Measure the result that readers feel, not the work that writers do. A page that takes less time to write but more time to fix after publication is not a gain.

---

## Before you start

Make sure you have:

- Completed the AI Governance lesson in this module.
- Completed the Validation lesson in Module 11 · Automation.
- Read access to the repository history, and to the review comments on pull requests.
- A list of the tasks you want to measure, such as drafting, translation, and release notes.

---

## Choose what to measure

Measure three areas: time, quality, and review effort. Each area needs at least one metric, and each metric needs a clear definition.

| Area | Question it answers | Example metric |
|---|---|---|
| Time | How long does a task take from start to approval? | Time to approved page |
| Quality | How many errors reach readers or reviewers? | Defect escape rate |
| Review effort | How much work does a reviewer need to do? | Review rounds per page |

:::important

Choose the metrics before you start the pilot, and write them down. A metric chosen after the results are known can hide a problem.

:::

---

## Define each metric with a formula

A metric needs a formula, a unit, and a source. Use this table for each metric.

| Metric | Formula | Unit | Source |
|---|---|---|---|
| Time to approved page | Approval date minus start date | Days | Pull request dates |
| Review rounds per page | Number of review cycles before approval | Count | Pull request review history |
| Defect escape rate | Errors found after publication divided by pages published | Percent | Issues and reader reports |
| Build warnings per change | Warnings in the build output for each change | Count | Build output |
| Rework rate | Lines changed after the first review, divided by lines in the first draft | Percent | Git history |

Use the same formula for every task, so that the results can be compared.

---

## Set a baseline before you change the process

A baseline is the measurement of a task before AI is introduced. Without a baseline, you cannot tell whether the change helped.

Collect the baseline for at least four weeks, or for enough tasks to be representative. Record the same metrics for the same task type.

| Task type | Baseline period | Number of tasks | Time to approved page (median) | Review rounds (median) |
|---|---|---|---|---|
| Procedure pages | Add the period | Add the count | Add the value | Add the value |
| Release notes | Add the period | Add the count | Add the value | Add the value |

:::tip

Use the median, not the average, when a few tasks take much longer than the rest. One long task can hide the normal pattern.

:::

---

## Collect metrics from real project signals

This project already records several signals that you can use. You do not need a new tool to start.

| Signal | Where to find it | What it tells you |
|---|---|---|
| Build output | Output of `npm run build` | Structure, MDX, and link problems |
| Broken anchor warnings | Build output | Links that a reader would hit |
| Review findings | Review report for release notes | Issues found before publication |
| Review comments | Pull request discussions | Rounds of review and the kinds of changes |
| Commit history | `git log` | Size and timing of each change |

The commands below use the commit history. Each one reads the repository and changes no files.

```bash
git log --since="30 days ago" --oneline
```

Expected result: A list of commits in the last 30 days. Count the commits that belong to each task type.

```bash
git log --since="30 days ago" --format="%h %ad %s" --date=short
```

Expected result: The commit hash, the date, and the subject of each commit. Use the dates to calculate the time to approved page for each change.

---

## How-to: Measure quality with a sample review

**Goal:** Measure the quality of a sample of pages with a rubric that a reviewer applies the same way each time.

**Step 1: Choose a sample.**

Choose a random sample of pages from the period. Include both AI-assisted pages and pages written without AI, so that you can compare them.

**Step 2: Apply the rubric.**

Use these criteria. Score each one from 0 to 2: 0 is a serious problem, 1 is a minor problem, and 2 is correct.

| Criterion | Question |
|---|---|
| Accuracy | Does each statement match its source? |
| Completeness | Are all steps, warnings, and notes present? |
| Terms | Does the page use the approved terms? |
| Links | Do the links work and point to the right page? |
| Clarity | Can a reader complete the task without help? |

**Step 3: Record the result.**

| Page | Source | Accuracy | Completeness | Terms | Links | Clarity | Total |
|---|---|---|---|---|---|---|---|
| Add page | AI-assisted | 2 | 1 | 2 | 2 | 2 | 9 |

**Result:** You have a comparable quality score for each page. Compare the averages for the AI-assisted and the non-AI pages.

:::note

Use a second reviewer for at least part of the sample. Two reviewers who score the same page differently show that the rubric needs a clearer definition.

:::

---

## Recognize metrics that mislead

Some metrics look useful, but they reward the wrong behavior.

| Metric | Why it misleads | Better alternative |
|---|---|---|
| Number of pages published | Encourages volume over quality | Defect escape rate |
| Words generated by AI | Rewards long text | Review rounds per page |
| Percentage of AI-assisted pages | Shows use, not benefit | Time to approved page, with quality |
| Individual writer output | Encourages hiding problems, and unfair comparisons | Team-level trends, with agreed purpose |

:::warning

Do not use the metrics to rank individual writers, unless the team has agreed to that purpose in advance. A writer who reports problems honestly can look worse on a metric that counts errors. Use the metrics to improve the process.

:::

---

## Report the results

Store the metrics in a Markdown file in the repository, and report them through a pull request. Each report then shows what was measured, when, and by whom.

Markdown source for a metrics report:

````markdown
### Metrics report: Last quarter

| Area | Metric | Baseline | Current | Change | Notes |
|---|---|---|---|---|---|
| Time | Time to approved page (median, days) | Add value | Add value | Add value | Add context |
| Quality | Defect escape rate (percent) | Add value | Add value | Add value | Add context |
| Review effort | Review rounds per page (median) | Add value | Add value | Add value | Add context |

Sample size: Add number
Reviewers: Add names
Data sources: Add sources
````

**Result:** The report shows the baseline, the current value, and the change. Readers can see the data sources and the sample size, and they can question the result.

---

## Docs-as-Code workflow for metrics

Use this workflow when you measure a period, or change a metric.

```text
Define the metrics and the purpose
    ↓
Collect the baseline
    ↓
Run the pilot, and collect the same metrics
    ↓
Review a sample with the rubric
    ↓
Write the report in a branch
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by the team and the documentation manager
    ↓
Merge, and decide the next step
```

**Step 1: Create a branch.**

```bash
git switch -c docs/measuring-ai-work-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Measuring-AI-Work.md
git commit -m "Add measuring AI work lesson"
git push -u origin docs/measuring-ai-work-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The metrics are chosen after the results are known. | The team reports the results that look good. | Choose and record the metrics before the pilot starts. |
| There is no baseline. | No one can tell whether AI helped. | Collect a baseline for the same task type before the change. |
| Only speed is measured. | Quality problems grow without anyone noticing. | Measure quality, and review a sample. |
| A metric rewards volume. | Writers produce more pages with more errors. | Use the metrics in the table of misleading metrics. |
| Individual writers are ranked without an agreed purpose. | Writers hide problems. | Report team-level trends. |
| The metrics are not stored in Git. | The team cannot see how the numbers changed. | Keep the report in the repository, and review it through a pull request. |

---

## Summary

In this lesson, you learned that:

- Measure time, quality, and review effort, and define each metric with a formula.
- Set a baseline before you introduce AI, and compare the same task types.
- Use real project signals, such as the build output, review findings, and Git history.
- Measure quality with a rubric and a sample review.
- Avoid metrics that reward volume, and do not rank individual writers without an agreed purpose.
- Keep the metrics report in Git, and review it through a pull request.

The aim is simple:

**Decide where AI helps by measuring what readers experience, not only how fast the team writes.**

---

## Practice exercise

Use this repository.

1. Run `git log --since="30 days ago" --format="%h %ad %s" --date=short`. Count the commits that change files in `docs/09-AI`.
2. Define one time metric and one quality metric, with a formula, a unit, and a source for each.
3. Choose three pages from `docs/09-AI`. Score each page with the rubric, using the criteria in this lesson.
4. Write one sentence that explains why a metric based on the number of pages would mislead the team.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. Why should a team measure AI-assisted work before it expands AI use?</strong></summary>

Speed alone does not show that pages are correct or easy to maintain. Measurement shows where AI helps and where it adds review work.

</details>

<details>
<summary><strong>2. What is a baseline?</strong></summary>

The measurement of a task before AI is introduced. It is the reference that the pilot is compared against.

</details>

<details>
<summary><strong>3. Why use the median instead of the average?</strong></summary>

A few very long tasks can distort the average. The median shows the typical task more fairly.

</details>

<details>
<summary><strong>4. What are the three areas to measure?</strong></summary>

Time, quality, and review effort.

</details>

<details>
<summary><strong>5. What project signals can you use without a new tool?</strong></summary>

The build output, broken anchor warnings, review findings, pull request review comments, and the Git commit history.

</details>

<details>
<summary><strong>6. Which command shows the commits from the last 30 days?</strong></summary>

`git log --since="30 days ago" --oneline`. It reads the history and changes no files.

</details>

<details>
<summary><strong>7. What does a defect escape rate measure?</strong></summary>

The share of errors that were found after publication, compared with the pages published.

</details>

<details>
<summary><strong>8. Why is the number of pages published a misleading metric?</strong></summary>

It rewards volume. A team can publish more pages while the quality falls.

</details>

<details>
<summary><strong>9. Why should you not rank individual writers on error metrics without an agreed purpose?</strong></summary>

Writers may hide problems if they are judged on errors. Team-level trends help the process improve without that risk.

</details>

<details>
<summary><strong>10. What is the main goal of measuring AI work?</strong></summary>

The goal is to decide where AI helps by measuring what readers experience, not only how fast the team writes.

</details>

---

## Next lesson

Continue to **Case studies**. You will walk through the AI Release Note Generator from start to finish, and apply the lessons in this module to a real project.
