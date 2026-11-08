---
title: AI agents
sidebar_position: 2
description: Learn what AI agents are, how a multi-agent workflow divides documentation tasks, and how to document agent roles, inputs, outputs, and human review checkpoints.
---

# AI agents

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the Prompt Engineering lesson, or have a basic understanding of prompts.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what an AI agent is, and how it differs from a single prompt.
- Describe the role, inputs, tools, and outputs of an agent.
- Identify which steps in a workflow need AI and which need deterministic code.
- Explain the human review checkpoint in a multi-agent documentation workflow.
- Document agent roles and outputs in Markdown.
- Use the AI Release Note Generator in this repository as a real example.
- Apply a Docs-as-Code workflow to an AI agent page.

---

## Why AI agents matter for technical writers

Many documentation tasks follow the same steps every time. You collect information, sort it, write a draft, check the draft, and publish it. An AI agent can perform one of these steps, and a workflow can connect several agents.

Writers must understand how these workflows work. You need to document what each agent does, what it can change, and where a person must approve the result.

> **Documentation Manager's Tip**
>
> Before you document an agent, ask: "What does this agent receive, what does it produce, and who checks the result?" If you cannot answer all three questions, the workflow is not ready to document.

---

## Before you start

Make sure you have:

- Completed the Prompt Engineering lesson, or have a basic understanding of prompts.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Read the case study at `portfolio/case-studies/ai-release-note-generator/index.md`.

:::note

**For beginners**

You do not need to build an AI agent to document one. This lesson teaches you how to read a workflow, describe each step, and show where people review the work.

:::

---

## What is an AI agent?

An AI agent is an AI model that works toward a specific task. It receives an input, uses tools when it needs them, and produces an output.

A single prompt answers one question. An agent completes a task in steps. It can read data, call a tool, check its own result, and pass the result to the next step.

| Item | Single prompt | AI agent |
|---|---|---|
| Scope | One request and one response | One task, with defined inputs and outputs |
| Tools | Usually none | Can use tools, such as an API connector |
| Output | Text in a chat window | A file or data artifact that another step can read |
| Review | The user reads the answer | A defined review step, and often a person |

:::important

An agent does not make publication decisions. In this repository, a person approves each release note before publication. The next section explains why.

:::

---

## Parts of an agent

Every agent in a documentation workflow has the same five parts. Document each part.

| Part | Question it answers | Example from this repository |
|---|---|---|
| Role | What is the agent responsible for? | The Analyzer Agent interprets release data. |
| Input | What does the agent receive? | `collected-release-data.json` |
| Tools | What external systems does it use? | Azure DevOps MCP, used by the Collector Agent |
| Output | What does the agent produce? | `analyzed-release.json` |
| Guardrails | What must the agent not do? | Authoritative fields are restored by deterministic logic. |

---

## AI and deterministic steps

A good workflow separates AI work from fixed logic. AI handles tasks that need language understanding, such as classification and drafting. Deterministic code handles tasks that must produce the same result every time, such as file handling and field restoration.

The case study uses the phrase "4 AI agents + deterministic components". This means the workflow mixes both types of step.

| Task | Type | Why |
|---|---|---|
| Download the release attachment | Deterministic | The file must be the same every time. |
| Fetch work items through the Azure DevOps connector | Tool call | The data comes from an external system. |
| Classify changes as customer-facing or technical | AI | The task needs language understanding. |
| Restore authoritative metadata fields | Deterministic | The field values must not change. |
| Write the release note drafts | AI | The task needs clear, customer-friendly language. |

:::warning

Do not let an agent change data that must stay fixed, such as a release date, a version number, or an approval status. Document which fields the agent may change and which fields the code protects.

:::

---

## The multi-agent workflow in this repository

The AI Release Note Generator divides its work across agents. Each agent does one job, and its output becomes the input for the next step.

![Six-step workflow for the AI Release Note Generator](/assets/screenshots/6-step-workflow.png)

The case study describes the workflow as six commands. The table shows how each command maps to an agent or a component.

| Step | Command | Input | Output | Agent or component |
|---|---|---|---|---|
| 1 | `/prepare-release` | Release tag and release source | Prepared release workspace | Preparation step |
| 2 | `/fetch-release-data` | Release Manager `.docx` file | `input/work-items.json` | Collector Agent with Azure DevOps MCP |
| 3 | `/consolidate-release-data` | Manifest and work items | `collected-release-data.json` | Collector Agent |
| 4 | `/analyze-release-data` | `collected-release-data.json` | `analyzed-release.json` | Analyzer Agent and deterministic metadata logic |
| 5 | `/review-release-analysis` | `analyzed-release.json` | `review-report.json` and `review-report.md` | Reviewer Agent |
| 6 | `/generate-release-drafts` | Analyzed data and review context | Customer and technical release note drafts | Publishing Agent |

:::note

The architecture documents in `portfolio/architecture/` also describe a Filter Agent. The case study's implemented workflow lists four AI agents: Collector, Analyzer, Reviewer, and Publishing. When you document the workflow, use the agent list that matches the current implementation. Check with the project owner if the two documents disagree.

:::

---

## Human review checkpoint

The workflow includes a human review step before publication. The Architecture Decision Record (ADR) for this project sets this rule:

```text
Engineering information
        ↓
AI processing
        ↓
Generated documentation
        ↓
AI quality review
        ↓
Review report
        ↓
Human review
        ↓
Approval
        ↓
Publication
```

The ADR states that AI can assist with generation and quality checks, but it does not authorize customer-facing publication. The Reviewer Agent produces a report. A person decides what happens next.

:::important

Human review is the final approval point for customer-facing documentation. An AI review score is an input to the decision. It is not the decision.

:::

---

## How-to: Describe an agent as a role card

**Goal:** Document one agent so that a reader understands its role, input, output, and limits.

Markdown source:

```markdown
### Analyzer Agent

| Item | Description |
|---|---|
| Role | Interprets release data for customer impact and change type. |
| Input | `collected-release-data.json` |
| Output | `analyzed-release.json` |
| Tools | None. The agent works on the input file. |
| Guardrails | Authoritative manifest fields are restored by deterministic logic. |
| Human check | A reviewer checks the analysis before drafting. |
```

**Result:** The reader sees the agent in one table. The reader can find the input, the output, and the limits without reading the whole workflow.

:::tip

Keep one role card for each agent. Use the same row names in every card. Readers compare agents more easily when the structure is the same.

:::

---

## How-to: Document a workflow step with inputs and outputs

**Goal:** Describe one step so that a reader can run it, or check its output.

Markdown source:

````markdown
### Step 3: Consolidate release data

Command: `/consolidate-release-data`

**Input:**

- ReleaseManifest
- `input/work-items.json`

**Output:**

- `output/artifacts/ai/collected-release-data.json`

**Expected result:** A single dataset that combines the manifest and the work-item data.
````

**Result:** The reader knows the command, the input files, the output file, and the expected result. The reader can check the output before the next step runs.

---

## How-to: Document review artifacts

**Goal:** Explain what a reviewer reads in the review report.

The ADR lists the fields in a review artifact. Use these fields in your documentation:

| Field | Purpose |
|---|---|
| Overall quality assessment | Shows the result of the automated review. |
| Score breakdown | Shows the score for each criterion. |
| Review summary | Explains the main findings. |
| Recommendations | Lists suggested changes. |
| Reviewer Agent version | Identifies the agent version that produced the review. |
| Prompt version | Identifies the prompt version that the agent used. |
| Review timestamp | Shows when the review ran. |

:::note

Version fields help you find out which agent and prompt produced a result. Without them, you cannot explain why a result changed between two runs.

:::

---

## Docs-as-Code workflow for an agent page

Use this workflow when you update an agent page.

**Step 1: Create a branch.**

```bash
git switch -c docs/ai-agents-roles
```

**Step 2: Edit the page.**

Open `docs/09-AI/AI-Agents.md` in Visual Studio Code or Cursor. Update the role cards, tables, and callouts.

**Step 3: Preview the page.**

```bash
npm run start
```

Open the AI Agents page in your browser. Check the tables, the images, and the callouts.

**Step 4: Build the site.**

```bash
npm run build
```

Expected result: The build completes with `[SUCCESS]`.

**Step 5: Commit and open a pull request.**

```bash
git add docs/09-AI/AI-Agents.md
git commit -m "Update AI agents lesson with workflow roles"
git push -u origin docs/ai-agents-roles
```

Ask a peer writer and a technical reviewer to check the agent descriptions. A technical reviewer confirms that the roles match the implementation.

:::warning

Do not document an agent that does not exist in the current implementation. Check the workflow commands and the output files before you publish the page.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The page describes an agent as the final publisher. | Readers think the workflow needs no human approval. | Show the human review checkpoint in the workflow. |
| The page does not name the input or output of each agent. | Readers cannot check the result. | Use a role card or a step table for each agent. |
| The page mixes AI steps and deterministic steps. | Readers cannot tell which results can vary. | Label each step as AI or deterministic. |
| The page lists agents that the implementation does not use. | Readers build the wrong mental model. | Check the implementation, and document only the agents that exist. |
| The page shows a real token or secret. | A secret is exposed. | Use placeholders for all credentials. |
| The page omits the version fields in review artifacts. | Results cannot be traced to a version. | Document the version fields and why they matter. |

---

## Summary

In this lesson, you learned that:

- An AI agent completes a task in steps, using inputs, tools, and outputs.
- A multi-agent workflow divides work into roles, and each role has a clear output.
- AI and deterministic steps must be documented separately.
- A human review checkpoint controls publication.
- Role cards and step tables make agents easier to understand and maintain.
- Documentation must match the current implementation.

The aim is simple:

**Show readers what each agent does, what it produces, and where a person decides.**

---

## Practice exercise

Use the AI Release Note Generator in this repository.

1. Read `portfolio/case-studies/ai-release-note-generator/index.md`. Find the six-command workflow table.
2. Choose one agent. Write a role card with the role, input, output, tools, guardrails, and human check.
3. Find the step where the output becomes the input for the next step. Write a short description of that handoff.
4. List the steps that are deterministic. Explain why each one should not use AI.
5. Read `portfolio/adrs/adr-002-human-in-the-loop-ai-review.md`. Write one sentence that explains where the human review happens.
6. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is an AI agent?</strong></summary>

An AI agent is an AI model that completes a task in steps. It receives an input, uses tools when it needs them, and produces an output.

</details>

<details>
<summary><strong>2. How does an agent differ from a single prompt?</strong></summary>

A single prompt returns one answer in a chat window. An agent works toward a defined task, uses tools, and produces an artifact that another step can read.

</details>

<details>
<summary><strong>3. What are the five parts of an agent?</strong></summary>

Role, input, tools, output, and guardrails.

</details>

<details>
<summary><strong>4. Why should you label each step as AI or deterministic?</strong></summary>

Readers need to know which results can vary and which results must stay the same. For example, a restored metadata field must not change between runs.

</details>

<details>
<summary><strong>5. Which agent reads the analyzed release data and produces the review report?</strong></summary>

The Reviewer Agent. It runs the `/review-release-analysis` command and produces `review-report.json` and `review-report.md`.

</details>

<details>
<summary><strong>6. Who approves customer-facing publication in this project?</strong></summary>

A person. The ADR states that AI does not authorize customer-facing publication. Human review remains the final approval point.

</details>

<details>
<summary><strong>7. Why is it important to document version fields in a review artifact?</strong></summary>

Version fields show which agent and prompt produced a result. Without them, you cannot explain why a result changed between two runs.

</details>

<details>
<summary><strong>8. What should you do when the architecture documents and the case study list different agents?</strong></summary>

Document the agents in the current implementation. Check with the project owner to resolve the difference.

</details>

<details>
<summary><strong>9. What belongs in a role card?</strong></summary>

A role card describes the agent's role, input, output, tools, guardrails, and human check. Use the same rows for every agent.

</details>

<details>
<summary><strong>10. What is the main goal of documenting an AI agent?</strong></summary>

The goal is to show readers what the agent does, what it produces, what it cannot change, and where a person decides before publication.

</details>

---

## Next lesson

Continue to **Prompt engineering**. You will learn how to write prompts that give clear, consistent, and reviewable results.
