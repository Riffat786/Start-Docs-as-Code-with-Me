---
id: ai-release-note-generator
title: AI Release Note Generator
sidebar_label: AI Release Note Generator
description: Case study of a modular AI-powered documentation intelligence workflow that evolved from a release note POC into a reusable Docs-as-Code architecture.
---

## Project Overview

The **AI Release Note Generator** is a proof-of-concept exploring how AI agents, automation, and Docs-as-Code practices can transform engineering information into structured, customer-ready documentation.

The project began as a focused release-note automation POC using **mock data representing sources such as Azure DevOps and ServiceNow**.

As the architecture evolved, the focus expanded beyond generating release notes toward a more reusable **documentation intelligence platform**.

The key architectural principle is **modularity**: input sources, processing stages, and output destinations can be replaced or extended without redesigning the core workflow.

---

## Project Evolution

The project evolved through several stages:

```text
Release Note POC
      ↓
Mock Engineering Data
      ↓
Multi-Agent Documentation Workflow
      ↓
Structured Artifacts
      ↓
MCP Integration Architecture
      ↓
Reusable Documentation Intelligence Platform
```

This evolution demonstrates how a focused documentation automation experiment can provide the foundation for a broader, reusable documentation engineering architecture.

---

## 1. Starting Point: The Release Note POC

The initial goal was straightforward:

> Explore whether AI agents could automate repetitive and significant parts of the release note creation process while maintaining documentation quality and human oversight.

The first version used **mock release data** rather than direct connections to organizational systems.

This allowed the workflow, prompts, agent responsibilities, artifacts, validation, and publishing process to be developed and tested independently of production systems.

### Initial workflow

```text
Mock Release Data
       ↓
Collect Release Data
       ↓
Analyze Customer-Facing Changes
       ↓
Generate Draft Release Notes
       ↓
AI Quality Review
       ↓
Create Document360 Draft
```

### Evolved workflow with MCP

```text
1. PREPARE
   Download Release Manager attachment
        ↓
2. FETCH
   Parse manifest + retrieve Azure DevOps WIs
        ↓
   input/work-items.json
        ↓
3. CONSOLIDATE
   Combine & normalize release data
        ↓
   collected-release-data.json
        ↓
4. ANALYZE
   AI understands the changes
   + preserves authoritative metadata
        ↓
   analyzed-release.json
        ↓
5. REVIEW
   AI quality/release-readiness review
        ↓
   review-report.json / .md
        ↓
6. GENERATE
   Create audience-specific drafts
        ↓
   Customer Notes + Technical Services Notes
        ↓
Technical Writer + SME
        ↓
Final approval / publication
```

The POC therefore demonstrated the workflow without requiring direct access to production Azure DevOps or ServiceNow environments.

---

## 2. Why Mock Data?

Using mock data was an intentional architectural decision.

It allowed the project to focus first on the **documentation intelligence workflow** rather than on system-specific integrations.

This provided several advantages:

* The workflow could be developed locally.
* Agent behavior could be tested consistently.
* Input and output artifacts could be inspected.
* The architecture could be validated before introducing external integrations.
* The solution remained independent of a specific enterprise environment.

The resulting architecture is therefore designed around **interfaces and artifacts**, rather than tightly coupling every processing stage to a particular source system.

---

## 3. Modular Agent Architecture

Each stage of the workflow performs a specific responsibility.

```text
                ┌─────────────────────┐
                │   Release Sources   │
                │ Azure DevOps /      │
                │ ServiceNow / Other  │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │   Collector Agent   │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │  Analyzer Agent     │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │    Filter Agent     │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │   Reviewer Agent    │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │  Publishing Agent    │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Documentation Output│
                │ Markdown / KB / PDF │
                └─────────────────────┘
```

Each stage can evolve independently.

For example, the collection layer can change without requiring the writing or review stages to be redesigned.

**4 AI agents + deterministic components + MCP integrations**

```text

                 Azure DevOps MCP
                       │
                       ▼
                 Collector Agent
                  /            \
             Fetch            Consolidate
                │                  │
                └───────┬──────────┘
                        ▼
               collected-release-data
                        │
                        ▼
                 Analyzer Agent
                        │
              + deterministic
              metadata protection
                        │
                        ▼
                 Reviewer Agent
                        │
                        ▼
                review-report
                        │
                        ▼
                Publishing Agent
                  /            \
                 ▼              ▼
          Customer Notes    Technical Notes
```

![6 Steps Workflow](/assets/screenshots/data-ownership.png)

---

## 4. The six-Command workflow

| #     | Command                     | Input                                                                        | What happens                                                                                                                                                                                                                                  | Output                                                              | Agent / component                                 |
| ----- | --------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| **1** | `/prepare-release`          | Release tag / release source                                                 | Prepares the release workspace and **downloads/saves the Release Manager attachment** needed by the pipeline.                                                                                                                                 | `attachments/ReleaseNotes (<tag>).docx` and prepared release inputs | **Preparation step**                              |
| **2** | `/fetch-release-data`       | Prepared Release Manager `.docx`                                             | Parses the ReleaseManifest, identifies the WIs, then calls **Azure DevOps MCP** to retrieve the complete work-item data.                                                                                                                      | `input/work-items.json`                                             | **Collector Agent + Azure DevOps MCP**            |
| **3** | `/consolidate-release-data` | ReleaseManifest + `input/work-items.json` (+ ServiceNow data when available) | Combines the source information and builds the canonical release dataset.                                                                                                                                                                     | `output/artifacts/ai/collected-release-data.json`                   | **Collector Agent**                               |
| **4** | `/analyze-release-data`     | `collected-release-data.json`                                                | AI interprets the release: customer impact, change classification, grouping, technical/customer relevance, etc. The **manifest metadata restoration functionality** ensures authoritative fields are preserved/restored as part of this flow. | `output/artifacts/ai/analyzed-release.json`                         | **Analyzer Agent + deterministic metadata logic** |
| **5** | `/review-release-analysis`  | `analyzed-release.json`                                                      | Independently reviews the analysis, identifies issues, assigns readiness, and provides recommendations.                                                                                                                                       | `review-report.json` + `review-report.md`                           | **Reviewer Agent**                                |
| **6** | `/generate-release-drafts`  | Analyzed/restored release data + review context                              | Generates audience-specific Markdown release-note drafts.                                                                                                                                                                                     | `customer-release-notes.md` + `technical-services-release-notes.md` | **Publishing Agent**                              |

![6 Steps Workflow](/assets/screenshots/6-step-workflow.png)

---

## 5. Data progression

| Stage                   | File                          | What it contains                                                                              |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| **Fetch / Consolidate** | `collected-release-data.json` | **Source/authoritative data** — ReleaseManifest + Azure DevOps (+ ServiceNow when available). |
| **Analyze**             | `analyzed-release.json`       | Everything from the collected dataset **plus AI-derived analysis fields**.                    |
| **Review**              | `review-report.json/.md`      | Quality/readiness assessment and reviewer findings.                                           |
| **Generate**            | Customer & Technical drafts   | Final audience-specific Markdown content.                                                     |

![6 Steps Workflow](/assets/screenshots/6-step-workflow-input-output.png)

---

## 6. From Release Notes to Documentation Intelligence

As the architecture evolved, **MCP was identified as a potential integration layer** for connecting external information sources to the documentation workflow.

The initial POC used mock engineering data. The solution has since evolved to use MCP to connect the documentation workflow with Azure DevOps, establishing the foundation for a broader Documentation Intelligence Platform.

Instead, the architecture demonstrates how MCP could be introduced as an integration layer while keeping the core documentation-processing workflow independent of individual source systems.

This changes the scope of the solution:

```text
Before

Specific source
      ↓
Release note workflow
      ↓
Specific output


Evolving architecture

Any information source
      ↓
Documentation intelligence workflow
      ↓
Any documentation output
```

The core workflow can therefore remain intact while the surrounding integrations change.

---

## 7. Source-Agnostic Architecture

One of the central design principles is **source independence**.

The architecture is designed so that different information sources can provide input to the same processing workflow.

Potential inputs include:

* Azure DevOps work items
* ServiceNow cases
* Structured JSON
* API responses
* Other engineering systems
* Future MCP-connected sources

Likewise, the output layer can evolve independently.

Potential outputs include:

* Markdown release notes
* Knowledge-base drafts
* PDF documentation
* Documentation portals
* Other structured documentation formats

This separation makes the architecture reusable beyond release notes.

---

## 8. Documentation as a Pipeline

The project treats documentation as a transformation pipeline:

```text
Information
    ↓
Collection
    ↓
Analysis
    ↓
Classification
    ↓
Filtering
    ↓
Summarization
    ↓
Writing
    ↓
Quality Review
    ↓
Human Approval
    ↓
Publication
```

Each stage creates a structured artifact that can be inspected, validated, reviewed, or reused.

![Pipeline](/assets/screenshots/pipeline.png)

This approach makes the documentation process more **traceable, testable, and maintainable**.

---

## 9. AI + Human Review

AI-generated documentation is not treated as automatically publishable.

The workflow includes both automated quality review and human validation.

```text
AI Generation
      ↓
AI Quality Review
      ↓
Human Review
      ↓
Approval
      ↓
Publication
```

This human-in-the-loop approach is important for customer-facing documentation where accuracy, consistency, and appropriate technical language are critical.

---

## 10. Current Implementation

The project has evolved from an initial proof-of-concept using mock release data into a Documentation Intelligence Platform with MCP-based integration to Azure DevOps.

| Stage                                      | Status                                                     |
| ------------------------------------------ | ---------------------------------------------------------- |
| Initial mock-data release-note POC         | **Completed**                                              |
| Multi-agent documentation workflow         | **Implemented**                                            |
| Azure DevOps MCP integration               | **Implemented**                                            |
| Documentation Intelligence architecture    | **Implemented/evolved solution**                           |
| ServiceNow MCP integration                 | **Architecture / future integration** if not yet connected |
| Additional interchangeable sources/outputs | **Architectural extensibility**                            |

The repository also demonstrates Git-based development, Markdown artifacts, Python automation, and GitHub Actions validation.

---

## 11. Extensibility

The architecture is intentionally designed so that the core workflow does not depend on one specific input or output system.

For example:

```text
Azure DevOps ───────┐
ServiceNow ─────────┤
JSON ───────────────┤
API ────────────────┤
MCP Source ─────────┤
                    ↓
        ┌──────────────────────┐
        │ Documentation        │
        │ Intelligence Core    │
        └──────────┬───────────┘
                   ↓
Markdown ──────────┤
Document360 ───────┤
PDF ───────────────┤
Web Documentation ┤
Other KB ──────────┘
```

A new source or publishing destination can therefore be introduced without requiring the entire architecture to be rebuilt.

---

## 12. What This Project Demonstrates

This project demonstrates the combination of:

* Technical writing
* Documentation architecture
* Docs-as-Code
* AI-assisted documentation
* Agentic workflows
* Python automation
* Git and GitHub
* GitHub Actions
* MCP integration concepts
* Structured documentation artifacts
* AI quality review
* Human-in-the-loop governance
* Modular system design

:::tip

More importantly, it demonstrates an approach to **building documentation systems that can evolve as the underlying tools and information sources change**.

:::

---

## Showcase

The project's detailed implementation and demonstration are available in the site's **Showcase** section.

- [AI Release Note Generator Showcase](/docs/showcase/ai-release-note-generator/)

The Showcase focuses on **what was built and how the workflow works**.

:::note

This portfolio case study focuses on the **problem, architectural evolution, documentation approach, and extensibility of the solution**.

:::

---

## Related Documentation

### Architecture

- [AI Documentation Intelligence Architecture](/portfolio/architecture/ai-documentation-intelligence/)
- [Docusaurus Documentation Architecture](/portfolio/architecture/docusaurus-documentation-architecture/)

### Architecture Decisions

- [ADR 002: Human-in-the-Loop AI Review](/portfolio/adrs/adr-002-human-in-the-loop-ai-review/)

### Technical Guides

- [AI Release Note Generator CI Validation](/portfolio/technical-guides/ai-release-note-generator-ci-validation/)
