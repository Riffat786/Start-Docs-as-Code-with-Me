---
title: Portfolio development
sidebar_position: 8
description: A real-world project to select, document, and present your Docs-as-Code and AI documentation work as a professional portfolio, with accurate status, clear evidence, and no confidential information.
---

# Portfolio development

> **Project level:** Intermediate to Advanced
>
> **Time to complete:** 4–6 hours across several sessions
>
> **Prerequisites:** Complete the Release notes automation, Azure DevOps MCP, Documentation assistant, Complete architecture, ServiceNow MCP, and Docs-as-Code project pages in this module. Read the Documentation Portfolio section of the Docs-as-Code platform case study in the portfolio.

---

## Project goal

A portfolio answers one question for a reader: can this person do the work I need done? A list of tools does not answer that question. A portfolio answers it with evidence: a real problem, the decisions you made, the artifacts you produced, what changed as a result, and what you would do differently.

In this project you will assemble a documentation portfolio from your own work. You will choose three pieces of work, write a case study for each, add one architecture page and one decision record, and prepare a short presentation. The portfolio can be a section of this site, a separate site, or a document you share directly.

Build the portfolio so that it stays accurate. A portfolio with an overstated claim is a risk to you. A portfolio with clear limits is a strength.

---

## Learning objectives

After you complete this project, you will be able to:

- Select the work that best shows your documentation skills, and explain why you chose it.
- Write a case study that shows the problem, your role, your decisions, and the results.
- Label the status of each claim, so that readers can tell what is built, planned, or future.
- Remove confidential information from your work, and describe it in general terms when needed.
- Present a portfolio piece in two minutes and in ten minutes.
- Keep a portfolio up to date, and retire work that no longer reflects your skills.

---

## Showcase or portfolio?

The course site separates two kinds of content. Keep the difference in mind when you plan your own portfolio.

| Area | The question it answers | What it contains |
|---|---|---|
| Showcase | What have I built? | Demonstrations and implementation details of a project |
| Portfolio | Can I do this work well? | Case studies, architecture, decision records, and technical guides |

A reader who wants to see the working project goes to the showcase. A reader who wants to judge your documentation judgment goes to the portfolio. Build both if you can, but do not let the showcase replace the portfolio's explanation of your decisions.

---

## Step 1: Select three pieces of work

Choose three pieces of work from this module or from your own experience. Use these criteria to decide.

| Criterion | Question to ask |
|---|---|
| Real problem | Did the work solve a problem someone had? |
| Your role | Can you describe exactly what you did, not what the team did? |
| Evidence | Do you have artifacts, such as drafts, diagrams, records, or pages? |
| Shareable | Can you show it without confidential data or approval problems? |
| Relevant | Does it match the kind of role you want next? |

Aim for variety. For example, choose one documentation website project, one AI-assisted workflow, and one architecture or governance piece. Three similar projects show less than three different ones.

:::note

If the best piece of work is confidential, use it as the basis for a general case study. Remove names, systems, data, and screens, and describe the approach in general terms. Get written approval from your employer before you publish anything more specific.

:::

---

## Step 2: Write each case study

Use the same structure for each case study. The structure makes it easy for a reader to compare your pieces.

| Section | What to write |
|---|---|
| Overview | The problem, the audience, and the result in two or three sentences |
| Context | The situation before the work, and why it mattered |
| Your role | The tasks you did, and the tasks you did not do |
| Approach | The steps you took, and the tools you used |
| Decisions | Two or three decisions, with the reasons and the alternatives you rejected |
| Artifacts | The files, diagrams, or pages that show the work |
| Results | What changed, with numbers only where you can verify them |
| Limits | What the work does not do, or what you would not claim |
| Next steps | What you would improve if you did it again |

:::important

Write your role precisely. Use "I" for what you did, and "the team" for what the team did. A reader who thinks you did everything will ask detailed questions in an interview, and you need the answers to be yours.

:::

---

## Step 3: Label the status of every claim

Every part of a portfolio needs a status. Use the same three labels as the Complete architecture project.

| Label | Meaning | Example |
|---|---|---|
| Implemented | Built and used | A published documentation site |
| Planned | Approved, not built | A connection that is designed but not yet built |
| Future | An idea, not yet approved | A translation step that is not yet approved |

Check each status before you publish, and add a "last reviewed" date to each page. A status without a date becomes wrong over time.

---

## Step 4: Add evidence

A claim without evidence is an opinion. Add the evidence that supports each important claim.

| Claim | Evidence to add |
|---|---|
| "I built a documentation site that publishes automatically." | A link to the live site and the workflow file, with the pipeline diagram |
| "I reduced the time to publish a release note." | The measurement method and the before and after figures, or a plain statement that no measurement was made |
| "I designed a review process." | The review checklist and one example of a finding it caught |
| "I used AI safely." | The governance rule, the review record, and a note on what the AI did not decide |

:::warning

Do not invent metrics. If you did not measure something, say so. "The team felt the process was faster" is honest. "Reduced publishing time by 40 percent" needs a method and a record behind it.

:::

---

## Step 5: Add an architecture page and a decision record

Choose one piece of work and add two supporting pages:

- An **architecture page** with the system context and container diagrams, and the status labels from the Complete architecture project.
- A **decision record** that explains one important choice. Use the same format as ADR 001 and ADR 002: the context, the decision, the alternatives considered, and the consequences.

These two pages show a reader how you think. A list of tools shows what you know. A decision record shows how you decide.

---

## Step 6: Write one technical guide

Write one short guide that teaches a reader to do one task from your work. For example, "How to check a release note against its source records" or "How to document an API connection." A technical guide shows that you can explain a process clearly, which is a core part of a technical writer's work.

Use the Mermaid diagrams and the table formats from the course pages. Keep the guide short, and test it: ask a colleague to follow it and record where they got stuck.

---

## Step 7: Organize the portfolio

Organize the portfolio so that a reader can find each kind of evidence quickly. The course site uses this structure, and you can use the same one.

```text
portfolio/
├── index.md
├── case-studies/
│   ├── case-study-one/
│   ├── case-study-two/
│   └── case-study-three/
├── architecture/
├── adrs/
└── technical-guides/
```

Give the front page three things: who you are, what kind of work you do, and the three case studies with one sentence each. A reader should understand your focus within thirty seconds.

---

## Step 8: Prepare the presentation

Prepare two versions of the presentation for a portfolio piece.

| Version | Length | Content |
|---|---|---|
| Summary | 2 minutes | The problem, your role, the approach, and one result with its limit |
| Walkthrough | 10 minutes | The problem, the approach, one decision, the artifacts, the results, and what you would change |

Practice the summary until you can say it without notes. For an event, use the summary, then offer the walkthrough during questions.

:::tip

End every presentation with the limit of the work. Saying "This does not handle X yet, and that is my next step" is more convincing than a claim that nothing is missing.

:::

---

## Step 9: Review and maintain the portfolio

Set a review schedule. Every three months, check each page for three things:

1. Is every status still accurate?
2. Is every link still working?
3. Does this piece still show the skill I want to be known for?

Remove or replace any piece that no longer fits. A short portfolio with current work is stronger than a long one with old work.

---

## Portfolio checklist

Use this checklist before you share the portfolio.

| Check | Done |
|---|---|
| Three case studies, each with the full structure | |
| A status label on every claim, and a "last reviewed" date | |
| One architecture page and one decision record | |
| One technical guide, tested by a colleague | |
| Evidence for each important claim, or a clear statement that none was measured | |
| No confidential names, systems, data, or screens | |
| Written approval for any employer-related detail | |
| A two-minute summary and a ten-minute walkthrough, both practiced | |
| Links checked, and the build passing if the portfolio is on a site | |

---

## Common mistakes

| Mistake | Why it matters | What to do instead |
|---|---|---|
| Listing tools without showing decisions | A tool list does not show judgment | Add a decision record and the reasons behind each choice |
| Claiming results you did not measure | A reader who asks for the method will find the gap | State the result plainly, or say no measurement was made |
| Describing the team's work as yours | Interview questions will expose it | Separate "I" from "the team" in every case study |
| Publishing confidential material | It can breach an employer's agreement and expose people | Generalize the work, and get written approval for any detail |
| Leaving outdated pages up | Old status labels mislead readers | Set a review date, and retire work that no longer fits |

---

## Summary

A documentation portfolio is an argument that you can do the work. It is strongest when each claim has a status, each result has evidence, and each limit is stated. Choose three pieces of work that show different skills, write them up with precise roles and decisions, and keep them accurate. A portfolio built this way shows a reader how you think, which is what a hiring manager or a client is trying to judge.

Congratulations on reaching the end of Module 13. You have now worked through the release notes, Azure DevOps and ServiceNow connections, the documentation assistant, the complete architecture, the Docs-as-Code project, and your portfolio.

---

## Next step

Continue to the appendix, which includes [interview questions](../appendix/Interview-Questions.md) and a list of [certifications and resources](../appendix/Certifications.md) to support your next steps.
