---
title: Case studies
sidebar_position: 12
description: Walk through the AI Release Note Generator from start to finish, see how each lesson in Module 12 applies to a real project, and plan the same design for your own team.
---

# Case studies

> **Lesson level:** Advanced
>
> **Time to complete:** 45–60 minutes
>
> **Prerequisites:** Complete the lessons in Module 12 · AI for Technical Writers from AI writing to Measuring AI work.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Describe the business problem, the solution, and the current status of the AI Release Note Generator.
- Trace each stage of the workflow from its source to its output file.
- Map each stage to the lesson in this module that explains its design.
- Explain where the human checkpoints are, and why each one exists.
- Identify which parts are implemented, and which are planned.
- Evaluate the design against the principles in this module.
- Plan the same design for a documentation workflow in your own team.

---

## Why a case study matters

A lesson explains one idea. A case study shows how the ideas work together in a real project, with its trade-offs, its limits, and its decisions.

The AI Release Note Generator is the project that this module returns to most often. It shows agents, a fixed workflow, deterministic steps, human approval, and traceable outputs in one design.

> **Documentation Manager's Tip**
>
> Read a case study the way an auditor reads a file. For each decision, ask what problem it solved, what it cost, and what would have happened without it.

---

## Before you start

Make sure you have:

- Completed the lessons in Module 12 · AI for Technical Writers, from AI writing to Measuring AI work.
- Read the full case study at `portfolio/case-studies/ai-release-note-generator/index.md`.
- Read the human-in-the-loop decision in `portfolio/adrs/adr-002-human-in-the-loop-ai-review.md`.
- Read the architecture document at `portfolio/architecture/ai-documentation-intelligence.md`.

---

## The project at a glance

The table summarizes the project. Each row links to a lesson or a document you have already read.

| Item | Summary |
|---|---|
| Business problem | Release notes are manual, slow, and inconsistent. Engineers write for engineers, not for customers. |
| Solution | A multi-step workflow with four AI agents and deterministic components, which produces release-note drafts for two audiences. |
| Outputs | Customer release notes, technical services release notes, and a review report. |
| Human approval | Required before publication. The ADR states that AI does not authorize customer-facing publication. |
| Source connection | Azure DevOps through MCP is implemented. ServiceNow is documented as architecture or future integration. |
| Development approach | A proof of concept with mock data first, then a connection to a live source. |

---

## Walk through the stages

The workflow has six commands. Each command reads one file and writes the next. Follow the stages in order.

| Stage | Command | Input | Output | Lesson that explains the design |
|---|---|---|---|---|
| 1 | `/prepare-release` | Release tag and source | Prepared release workspace | Automation overview, and Validation |
| 2 | `/fetch-release-data` | Prepared release file | `input/work-items.json` | MCP in Module 10 |
| 3 | `/consolidate-release-data` | Manifest and work items | `collected-release-data.json` | Content migration, for mapping source data to one format |
| 4 | `/analyze-release-data` | Collected data | `analyzed-release.json` | AI agents in Module 10, and Agentic AI |
| 5 | `/review-release-analysis` | Analyzed data | `review-report.json` and `review-report.md` | Measuring AI work, for the review findings |
| 6 | `/generate-release-drafts` | Analyzed data and review context | Customer and technical drafts | Release notes |

The case study presents the same stages as a data progression. Each stage moves the data from source data to a document that a reader sees.

---

## Stage by stage: what to notice

Use this section to study each stage. For each one, answer the same three questions.

### Stage 1: Prepare the release

The preparation step saves the release manager's attachment, so that the pipeline has a stable input. The design choice is to start from a fixed file, not from a live query. A fixed file is repeatable, and it can be checked before the rest of the workflow runs.

### Stage 2: Fetch the work items

This stage calls Azure DevOps through MCP. The collector agent retrieves the work items, and the workflow saves them to a file. The MCP connection separates the source system from the rest of the workflow, so the source can change without redesigning the writing stages.

### Stage 3: Consolidate the data

Consolidation combines the manifest and the work items into one dataset. It is a deterministic step, so the same input gives the same output. This is where the workflow keeps the authoritative fields, such as the release identity, separate from the text that an AI agent may change.

### Stage 4: Analyze the release

The analyzer agent interprets the changes. It classifies each change by customer impact and groups them. A deterministic step restores the authoritative fields after the AI step, so that an AI result cannot change a release identifier.

### Stage 5: Review the analysis

The reviewer agent checks the analysis independently. It produces a report with an assessment, findings, and recommendations. The report is a separate file, so a person can read it without changing the analysis.

### Stage 6: Generate the drafts

The publishing agent writes two drafts from the same analysis. The customer draft keeps internal details out. The technical draft keeps the detail that support teams need. The drafts go to a person for approval before publication.

---

## Where the human checkpoints are

The design places a person at the points where a mistake would reach readers.

| Checkpoint | Question the person answers | Why it is there |
|---|---|---|
| After the analysis | Does the classification match the changes? | A wrong classification changes what customers are told |
| After the review report | Are the findings addressed? | The reviewer agent can miss context a person knows |
| Before publication | Is the content correct for each audience? | ADR-002 keeps publication decisions with a person |

:::important

The checkpoints are part of the design, not an afterthought. A workflow that removes them is a different design, and it needs a new decision record.

:::

---

## What is implemented, and what is planned

Document the status of each part of the design. Readers must not assume that a planned part already works.

| Part | Status in the case study | What it means for you |
|---|---|---|
| Azure DevOps through MCP | Implemented | The workflow reads work items from the live source |
| ServiceNow through MCP | Architecture or future integration | Describe it as planned until it is connected |
| Mock data | Used in the first proof of concept | Useful for testing, and not a live source |
| Human approval | Required by the ADR | Part of every release |

---

## Apply the design to your own team

Use the same stages to plan a workflow for your own team. Start with the decision, not the tool.

| Step | Question | Your answer |
|---|---|---|
| 1. Problem | Which repeated task costs the most time or causes the most errors? | Add your answer |
| 2. Sources | Where does the information come from, and can you read it through a fixed file? | Add your answer |
| 3. Stages | Which steps are AI, and which are deterministic? | Add your answer |
| 4. Outputs | What file does each step produce, and who reads it? | Add your answer |
| 5. Checkpoints | Where must a person approve before the work continues? | Add your answer |
| 6. Measures | Which metrics show whether the design helps? | Add your answer |
| 7. Governance | Which data may go to which tools, and who owns each decision? | Add your answer |

:::tip

Write the answers in a Markdown file in your repository, and review the file through a pull request. A design that is written down can be questioned, improved, and handed over.

:::

---

## Docs-as-Code workflow for a case study

Use this workflow when you write or update a case study.

```text
Read the source case study and the ADR
    ↓
Trace each stage to its output file
    ↓
Map each stage to a lesson or a decision
    ↓
Write the analysis in a branch
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Review by a technical reviewer and a documentation manager
    ↓
Merge
```

**Step 1: Create a branch.**

```bash
git switch -c docs/case-studies-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/11-AI-For-Technical-Writers/Case-Studies.md
git commit -m "Add case studies lesson"
git push -u origin docs/case-studies-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The case study is summarized without its trade-offs. | Readers copy the design without understanding its limits. | Describe what each decision cost, and what it protects against. |
| A planned connection is described as live. | Readers expect a feature that does not work. | Show the status of each part. |
| The checkpoints are described as optional. | The design loses the controls that the ADR requires. | Describe each checkpoint as part of the design. |
| The stages are described without their files. | Readers cannot check the output of each stage. | Name the input and the output of each stage. |
| The design is copied to a different context without review. | The design does not fit the team's data, tools, or risks. | Use the planning table, and review the design for your context. |

---

## Summary

In this lesson, you learned that:

- The AI Release Note Generator divides a release workflow into six stages, each with a file as its output.
- Deterministic steps protect the authoritative fields, and AI steps do the interpretive work.
- Human checkpoints sit where a mistake would reach readers, and the ADR requires them.
- Implemented and planned parts must be described with their real status.
- The same design can be planned for your own team, using the planning table.

The aim is simple:

**Learn from a real design by tracing each decision to its reason, and apply the reasons, not only the tools, to your own work.**

---

## Practice exercise

Use this repository.

1. Read the full case study at `portfolio/case-studies/ai-release-note-generator/index.md`. Write one sentence for each of the six stages that says what the stage produces.
2. Choose one human checkpoint. Write the question a person must answer at that point, and explain what would happen without it.
3. Find one part of the design that is planned, not implemented. Write how you would describe it in the documentation.
4. Complete the planning table for a workflow in your own team, with at least five of the seven answers.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What problem does the AI Release Note Generator solve?</strong></summary>

Release notes are manual, slow, and inconsistent. Engineers write change records for engineers, not for customers.

</details>

<details>
<summary><strong>2. How many AI agents does the case study describe in its implemented design?</strong></summary>

Four AI agents, combined with deterministic components and MCP integrations.

</details>

<details>
<summary><strong>3. What does each stage of the workflow produce?</strong></summary>

A file, which the next stage reads. The files give each stage a defined input and output.

</details>

<details>
<summary><strong>4. Why does the design keep a deterministic step for the authoritative fields?</strong></summary>

So that an AI result cannot change a release identifier or other fields that must stay fixed.

</details>

<details>
<summary><strong>5. Why is the review report a separate file?</strong></summary>

A person can read the report without changing the analysis, and the report can be traced to the version that produced it.

</details>

<details>
<summary><strong>6. Which source connection is implemented in the case study?</strong></summary>

Azure DevOps through MCP. ServiceNow is documented as architecture or future integration.

</details>

<details>
<summary><strong>7. What does the ADR say about customer-facing publication?</strong></summary>

AI does not authorize customer-facing publication. A person must approve it.

</details>

<details>
<summary><strong>8. Why should the status of each part of the design be shown?</strong></summary>

Readers must not assume that a planned part already works. A planned connection described as live will fail when they try it.

</details>

<details>
<summary><strong>9. Which lesson in this module explains the design of the review step?</strong></summary>

Measuring AI work explains how to measure review findings, and Governance explains the approval rules for the output.

</details>

<details>
<summary><strong>10. What is the main goal of studying a case study?</strong></summary>

The goal is to learn from the decisions in a real design, by tracing each decision to its reason, and to apply those reasons to your own work.

</details>

---

## Next module

Continue to **Module 13 · Real-World Projects**. You will apply the workflows from the earlier modules to a project of your own.
