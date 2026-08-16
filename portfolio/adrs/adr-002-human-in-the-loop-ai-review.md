---

id: adr-002-human-in-the-loop-ai-review
title: "ADR 002: Human-in-the-Loop AI Review"
sidebar_label: "ADR 002: Human-in-the-Loop AI Review"
description: Architectural decision record documenting human review and quality controls for AI-generated documentation.
------------------------------------------------------------------------------------------------------------------------


## Status

**Accepted**

## Context

The AI Release Note Generator uses AI to transform engineering information into customer-facing documentation.

AI can accelerate activities such as:

* Content analysis
* Classification
* Summarization
* Draft generation
* Content review

However, generated documentation can still contain incorrect, incomplete, misleading, or inappropriate information.

Customer-facing documentation therefore cannot be treated as automatically publishable simply because it was generated or reviewed by an AI system.

:::info

The architecture needed a clear quality-control boundary between **AI-generated content** and **published documentation**.

:::

---

## Decision

**AI-generated documentation must pass through both automated quality review and human validation before publication.**

The workflow is therefore:

```text
Engineering Information
        ↓
AI Processing
        ↓
Generated Documentation
        ↓
AI Quality Review
        ↓
Review Report
        ↓
Human Review
        ↓
Approval
        ↓
Publication
```

:::important

Human review remains the final approval point for customer-facing documentation.

:::

---

## Why Human Review?

AI systems can generate fluent and plausible documentation without necessarily guaranteeing that the information is correct or appropriate for the intended audience.

Human review provides a final validation layer for areas such as:

* Technical accuracy
* Customer relevance
* Completeness
* Terminology
* Product context
* Appropriate level of detail
* Potentially misleading statements
* Publication readiness

The human reviewer therefore remains accountable for the final documentation decision.

---

## Role of the AI Reviewer

The AI Reviewer is not the final approval authority.

Its purpose is to provide an additional automated quality-control layer before human review.

The reviewer can evaluate generated content against defined criteria such as:

* Completeness
* Clarity
* Customer-facing language
* Consistency
* Technical accuracy
* Release-note requirements

The result is stored as a separate review artifact.

Conceptually:

```text
Release Notes
      ↓
AI Reviewer
      ↓
Review Report
      ↓
Human Reviewer
```

This allows the human reviewer to use the automated assessment as an input to the final review rather than having to rely on the generated content alone.

---

## Review Artifact

The workflow produces a separate review report rather than modifying the release notes invisibly.

The review artifact contains information such as:

* Overall quality assessment
* Score breakdown
* Review summary
* Recommendations
* Reviewer Agent Version
* Prompt Version
* Review Timestamp
* Input Artifact
* Output Artifact

This creates greater transparency around how the AI-generated content was evaluated.

---

## Quality-Control Boundary

The architecture establishes a clear boundary:

```text
┌──────────────────────────────────┐
│          AI Processing           │
│                                  │
│ Collection → Analysis → Writing  │
│                                  │
└────────────────┬─────────────────┘
                 ↓
        AI Quality Review
                 ↓
┌──────────────────────────────────┐
│          Human Review            │
│                                  │
│ Accuracy                         │
│ Context                          │
│ Customer relevance               │
│ Publication readiness             │
│                                  │
└────────────────┬─────────────────┘
                 ↓
            Publication
```

AI can automate and accelerate documentation work, but the publication boundary remains controlled by human review.

---

## Alternatives Considered

### Option 1 — Fully Automated Publication

Under this model, AI-generated documentation would be published automatically after generation.

**Advantages**

* Maximum automation
* Faster publication
* Minimal manual intervention

**Disadvantages**

* Higher risk of inaccurate documentation
* No final contextual review
* Difficult to guarantee customer-facing quality
* Reduced accountability at the publication boundary

**Decision:** Rejected.

---

### Option 2 — AI Review Only

Under this model, an AI reviewer would evaluate generated content and automatically approve content that meets the defined quality criteria.

**Advantages**

* More automation
* Faster than full manual review
* Consistent automated checks

**Disadvantages**

* AI remains the final authority
* AI can fail to identify contextual issues
* Does not provide independent human validation

**Decision:** Rejected for customer-facing publication.

---

### Option 3 — AI Review + Human Approval

Under this model, AI performs generation and automated quality assessment, followed by human validation.

**Advantages**

* Combines automation with human judgment
* Provides an additional quality-control layer
* Supports traceability through review artifacts
* Maintains human accountability
* Allows AI to reduce repetitive review work without removing human oversight

**Decision:** Selected.

---

## Consequences

### Positive Consequences

* Human accountability remains at the publication boundary.
* AI can automate repetitive documentation tasks.
* Automated review can identify potential quality issues earlier.
* Review artifacts improve transparency.
* The workflow can evolve as AI capabilities improve without removing governance controls.

### Negative Consequences

* Human review remains necessary.
* Publication may take longer than a fully automated workflow.
* Review criteria and prompts require maintenance.
* AI review results still need to be interpreted rather than treated as absolute truth.

---

## Governance Implications

The workflow establishes a governance principle:

:::important

AI may assist with documentation generation and quality assessment, but it does not independently authorize customer-facing publication.

:::

This principle can be applied beyond release notes to other AI-assisted documentation workflows.

---

## Traceability

The workflow maintains intermediate artifacts so that the documentation transformation can be inspected.

Conceptually:

```text
Input
  ↓
Analysis
  ↓
Generated Content
  ↓
Review Report
  ↓
Human Approval
  ↓
Published Documentation
```

This supports investigation when questions arise about how a particular piece of documentation was generated or reviewed.

---

## Relationship to Documentation Intelligence

The human-in-the-loop model is an important part of the broader **Documentation Intelligence** architecture.

The goal is not simply to automate writing.

The goal is to create a controlled system that can:

```text
Understand information
        ↓
Transform information
        ↓
Evaluate documentation
        ↓
Support human decision-making
        ↓
Produce trusted documentation
```

This distinction is important because documentation quality depends on more than language generation.

---

## Decision Outcome

The AI Release Note Generator will use a **human-in-the-loop review model**.

:::note

AI is responsible for accelerating analysis, transformation, generation, and automated quality checks.

Human reviewers remain responsible for final validation and publication approval.

:::

This approach balances the efficiency of AI with the accountability and contextual judgment required for professional technical documentation.
