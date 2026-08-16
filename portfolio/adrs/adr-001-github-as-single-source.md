---
id: adr-001-github-as-single-source
title: "ADR 001: GitHub as the Single Source of Truth"
sidebar_label: "ADR 001: GitHub as Single Source"
description: Architectural decision record documenting the use of GitHub and Markdown as the authoritative source for documentation.
------------------------------------------------------------------------------------------------------------------------------------

## Status

**Accepted**

## Context

Modern documentation may be created, reviewed, localized, published, and maintained across multiple tools.

A documentation environment may include:

* GitHub
* Markdown
* Documentation platforms
* Static site generators
* Knowledge bases
* Localization tools
* CI/CD pipelines
* AI-powered documentation workflows

When multiple systems become authoritative sources, documentation can become difficult to synchronize and maintain.

:::note

This project therefore needed to establish a clear distinction between the **documentation source** and the **publishing layer**.

:::

---

## Decision

**GitHub is the authoritative source of documentation content, with Markdown used as the primary authoring format.**

Publishing platforms are treated as downstream consumers of the documentation source rather than the authoritative location of the content.

Conceptually:

```text
Markdown
   ↓
Git
   ↓
GitHub
   ↓
Build / Transformation
   ↓
Publishing Platform
```

The publishing layer can therefore change without making the publishing platform the master copy of the documentation.

---

## Why GitHub?

GitHub provides capabilities that align naturally with a Docs-as-Code workflow:

* Version control
* Change history
* Branching
* Pull requests
* Review workflows
* Collaboration
* Automated validation
* CI/CD integration
* Repository-based ownership
* Integration with development workflows

:::info

This allows documentation changes to follow a controlled, traceable process.

:::

---

## Why Markdown?

Markdown provides a lightweight, portable authoring format that works well with Git-based workflows.

It allows documentation to be:

* Version controlled
* Reviewed as text
* Diffed between versions
* Processed automatically
* Transformed into different publishing formats
* Maintained alongside technical source material

Markdown is therefore treated as the **content source**, rather than as a feature belonging to one specific documentation platform.

---

## Source vs. Publishing Layer

A central architectural distinction is:

```text
SOURCE
│
├── Markdown
├── Images / assets
├── Metadata
└── Documentation structure
        │
        ↓
   Git / GitHub
        │
        ↓
PUBLISHING LAYER
│
├── Docusaurus
├── MkDocs
├── Fern
├── Mintlify
├── Knowledge bases
└── Other documentation platforms
```

The exact transformation required by each platform may differ.

The architectural principle is that the **source remains independent from the publishing destination**.

---

## Alternatives Considered

### Option 1 — Documentation Platform as the Source

Under this model, writers author directly in a documentation platform and the platform becomes the primary source of truth.

**Advantages**

* Familiar web-based authoring experience
* Built-in publishing capabilities
* Potentially lower initial technical overhead

**Disadvantages**

* Content becomes more tightly coupled to the platform
* Version control capabilities may differ from Git workflows
* Moving to another platform can require migration
* Documentation changes may be separated from engineering workflows

---

### Option 2 — GitHub + Markdown as the Source

Under this model, Markdown files stored in GitHub are authoritative and publishing systems consume the source.

**Advantages**

* Strong version control
* Transparent change history
* Pull-request-based review
* Automation and CI/CD integration
* Greater publishing flexibility
* Easier integration with Docs-as-Code workflows

**Disadvantages**

* Requires Technical Writers to understand Git-based workflows
* Initial setup is more technical
* Publishing systems may require platform-specific configuration

**Decision:** Selected.

---

## Publishing Flexibility

The decision does not require the organization to use Docusaurus permanently.

The same Docs-as-Code principles can support different publishing approaches.

For example:

```text
                 GitHub
                    │
                 Markdown
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
   Docusaurus     MkDocs      Other
        │           │           │
        ↓           ↓           ↓
     Web Docs    Web Docs    Web Docs
```

This creates a separation between **content ownership** and **publishing technology**.

---

## Consequences

### Positive Consequences

* Documentation has a clear authoritative source.
* Changes are version controlled.
* Documentation can use pull-request review.
* Documentation can participate in CI/CD workflows.
* Publishing technologies can evolve independently.
* Documentation can be reused across different publishing environments.
* Technical Writers can work within the same version-controlled ecosystem as development teams.

### Negative Consequences

* Technical Writers need Git and GitHub skills.
* Documentation workflows require initial configuration.
* Different publishing platforms may require different Markdown extensions or metadata.
* Contributors need to understand repository structure and contribution workflows.

---

## Governance Implications

Establishing GitHub as the source of truth also creates a governance boundary.

The source repository should contain the authoritative documentation content and its history.

Published systems should not become independently edited copies of the same content without an agreed synchronization process.

Where a downstream system requires transformation, the transformation should be treated as part of the publishing workflow.

---

## Relationship to Docs-as-Code

This ADR establishes one of the foundational principles of the project's Docs-as-Code approach:

:::tip

Documentation should be treated as a version-controlled engineering asset.

:::

The workflow becomes:

```text
Author
  ↓
Review
  ↓
Commit
  ↓
Build
  ↓
Validate
  ↓
Publish
```

Rather than:

```text
Author
  ↓
Copy content into publishing platform
  ↓
Publish
```

---

## Decision Outcome

GitHub and Markdown are established as the authoritative documentation source for this project.

Docusaurus is currently used as the primary publishing implementation for the site, while the architecture remains open to other publishing technologies.

:::note

This decision supports the broader objective of teaching Technical Writers a **transferable Docs-as-Code workflow rather than a single documentation tool**.

:::
