## Why We Chose Docusaurus and Docs-as-Code

When I started building this learning platform, I did not want to create another documentation website just for the sake of demonstrating a static site generator.

I wanted the project itself to demonstrate how a modern documentation workflow can work.

That meant making some deliberate choices about where content lives, how changes are managed, how reviews happen, how documentation is published, and how we can keep a record of what changed and why.

This is why the project uses **Docs-as-Code with GitHub as the source of truth and Docusaurus as the publishing layer**.

---

## Why Docusaurus?

There are many good tools for building documentation websites.

MkDocs, GitBook, Mintlify, Fern, and other platforms all have strengths. The right choice depends on the team, the content, the publishing requirements, and the amount of control you need.

For this project, I chose **Docusaurus** for a few practical reasons.

### 1. It works well with Markdown and Git

The source content is Markdown.

That means the documentation can live directly in the Git repository alongside the configuration, images, components, and other project files.

For a Technical Writer, this is important because the content is no longer locked inside a proprietary authoring environment.

You can:

* Edit Markdown in VS Code or Cursor.
* Track changes with Git.
* Review changes in GitHub.
* Create Pull Requests.
* Build the website automatically.
* Publish the approved content.

The documentation becomes part of the same development workflow used by the engineering team.

---

### 2. It gives us control over the publishing layer

One of the reasons I did not want to make the documentation platform itself the single source of truth is that publishing needs can change.

Today, we may want a documentation website.

Tomorrow, we may need:

* A different web experience.
* Offline documentation.
* PDF output.
* A knowledge base.
* In-product help.
* Localized documentation.
* Documentation for a particular product version.

Keeping the source content in Markdown and Git gives us more flexibility.

Docusaurus becomes the **publishing layer**, rather than the place where the only copy of the content exists.

The basic model is:

```text
                    SOURCE
                      │
                      ▼
                 Markdown
                      │
                      ▼
                    Git
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
     Review & Approval       Localization
          │                       │
          └───────────┬───────────┘
                      │
                      ▼
                 Docusaurus
                      │
                      ▼
              Documentation Web
```

This separation is important.

If we change the publishing technology later, the underlying content does not have to be recreated from scratch.

---

### 3. It gives Technical Writers more control

Docs-as-Code can initially feel like a developer workflow.

There are terminals, branches, commits, Pull Requests, builds, and CI/CD pipelines.

But there is a good reason for bringing these practices into documentation.

Technical Writers already manage structured content, revisions, reviews, terminology, releases, and approvals.

Docs-as-Code gives us tools to manage those activities with greater visibility and traceability.

For example, instead of:

```text
Writer → Word document → Email → Review → Final document
```

we can have:

```text
Writer
  ↓
Markdown
  ↓
Git branch
  ↓
Pull Request
  ↓
Technical Review
  ↓
Approval
  ↓
Merge
  ↓
Build
  ↓
Publish
```

The second workflow gives the team a much clearer record of what happened.

---

## How Docs-as-Code Fits into the Documentation Lifecycle

Docs-as-Code is not just about writing Markdown.

It can support the complete documentation lifecycle.

```text
Plan
  ↓
Create
  ↓
Review
  ↓
Approve
  ↓
Translate
  ↓
Build
  ↓
Publish
  ↓
Maintain
  ↓
Archive
```

Git and the surrounding tools provide the controls that connect these activities.

Let's look at each part.

---

### 1. Content creation

The Technical Writer creates or updates content in Markdown.

The content is stored in the Git repository.

For example:

```text
docs/
├── getting-started.md
├── installation.md
├── configuration.md
└── troubleshooting.md
```

The Writer can work locally using tools such as:

* Visual Studio Code
* Cursor
* Claude Code

The important point is that the **source content remains in the repository**.

---

### 2. Versioning

Git provides version control.

Every meaningful change can be recorded as a commit.

For example:

```text
Add installation requirements
Fix authentication example
Update API response example
Add troubleshooting steps
```

This gives us a history of how the documentation changed.

If we need to understand when something changed, we can inspect the Git history.

If we need to recover an earlier version, Git can also help us do that.

This is very different from having a folder containing files such as:

```text
final.docx
final-v2.docx
final-v2-reviewed.docx
final-v3-final.docx
final-v3-final-approved.docx
```

Git gives us a structured history instead of relying on file names to communicate version information.

---

### 3. Review

Documentation changes can be submitted through a Pull Request.

A Pull Request gives reviewers a place to see:

* What changed.
* Which files changed.
* Who made the change.
* When the change was made.
* Comments from reviewers.
* Requested changes.
* The final approved version.

This is particularly useful when Technical Writers work with:

* Developers
* Product Managers
* Subject Matter Experts
* QA
* Regulatory teams
* Other Technical Writers

The review happens against the actual proposed change rather than against a separate copy of the document.

---

### 4. Approval

Approval can be built into the GitHub workflow.

For example:

```text
Writer creates Pull Request
          ↓
Technical review
          ↓
SME review
          ↓
Changes requested?
      ↙       ↘
    Yes        No
     ↓          ↓
Update      Approval
     ↓          ↓
     └──────→ Merge
```

The exact approval process depends on the organization.

For a regulated environment, you would normally need to define who can approve content, what evidence is required, and what controls apply before publication.

The important point is that the **workflow can be defined rather than relying on an informal email approval**.

---

### 5. Translation

Localization can also be connected to the source repository.

For example:

```text
English Source
      ↓
Git Repository
      ↓
Localization Workflow
      ↓
Translation
      ↓
Review
      ↓
Localized Content
      ↓
Build
      ↓
Publish
```

A localization platform such as Crowdin can be introduced into this workflow.

The exact implementation depends on the team's localization process.

The important principle is that the English source remains controlled and the translation process is connected to that source.

This reduces the risk of maintaining unrelated copies of the same content.

---

### 6. Building the documentation

Once approved changes are merged, the documentation can be built automatically.

For this project, Docusaurus takes the Markdown source and generates the documentation website.

```text
Markdown
   ↓
Docusaurus
   ↓
Build
   ↓
Static Website
```

GitHub Actions can be used to automate the build.

This means the Writer does not need to manually copy files to a publishing system every time documentation changes.

---

### 7. Publishing

Docusaurus is the publishing layer for this project.

The source remains in Git.

Docusaurus takes that source and creates the web experience.

For this project, the website is published using GitHub Pages.

The flow is:

```text
Writer
  ↓
Markdown
  ↓
Git
  ↓
GitHub
  ↓
GitHub Actions
  ↓
Docusaurus Build
  ↓
GitHub Pages
  ↓
Documentation Website
```

This gives us a clear separation between **authoring** and **publishing**.

---

### 8. Traceability and audit history

This is one of the areas where Docs-as-Code becomes particularly interesting for documentation teams.

Git can provide a history of:

* Who changed a file.
* What was changed.
* When it was changed.
* Which Pull Request contained the change.
* Who reviewed the change.
* When the change was merged.
* Which release or commit contained the change.

For example:

```text
Requirement
     ↓
Documentation Change
     ↓
Git Commit
     ↓
Pull Request
     ↓
Review
     ↓
Approval
     ↓
Merge
     ↓
Build
     ↓
Release
```

This creates a useful chain of evidence.

However, there is an important distinction:

>[!CAUTION]
> **Git and Docusaurus do not automatically make documentation compliant with a particular regulation.**

If documentation is used in a regulated environment, the organization must define the required controls.

Depending on the environment, those controls may include:

* Controlled review and approval.
* User permissions.
* Electronic records.
* Release identification.
* Version control.
* Change history.
* Retention requirements.
* Sign-off requirements.
* Translation controls.
* Evidence that the published document corresponds to an approved source.

The tools support the process. **The process and governance determine whether the overall system meets the required controls.**

---

## Why this matters for Technical Writers

For many years, documentation has sometimes been treated as the final step in a software release.

The product changes first.

Then someone tells the Technical Writer what changed.

The Writer updates a document.

The document is reviewed separately.

Finally, someone publishes it.

Docs-as-Code moves documentation closer to the product development process.

```text
Traditional approach

Development
     ↓
Product release
     ↓
Documentation update
     ↓
Review
     ↓
Publish


Docs-as-Code approach

Development ──────────────┐
                           ↓
                    Documentation
                           ↓
                         Git
                           ↓
                    Review / PR
                           ↓
                       Approval
                           ↓
                        Build
                           ↓
                       Publish
```

The second model gives Technical Writers more visibility into the change and makes documentation part of the product workflow rather than an activity that happens after development.

---

## What We Are Demonstrating in This Project

This learning platform is itself an example of the workflow it teaches.

The content is written in Markdown.

The source is managed with Git and GitHub.

The website is built with Docusaurus.

The project uses React components where a richer user experience is useful.

GitHub Actions can automate parts of the build and publishing process.

AI tools are also being used during development to demonstrate how AI can support a Technical Writer working with code, documentation, and automation.

The point is not to use every tool available.

The point is to understand how the pieces fit together.

```text
                CONTENT
                   │
                   ▼
               Markdown
                   │
                   ▼
                  Git
                   │
          ┌────────┴────────┐
          ▼                 ▼
       Review          Localization
          │                 │
          └────────┬────────┘
                   ▼
               Approval
                   │
                   ▼
              Automation
                   │
                   ▼
              Docusaurus
                   │
                   ▼
              Publication
                   │
                   ▼
             Documentation
```

That is the approach I want this learning platform to demonstrate.

---

## A Note About Choosing Tools

There is no single "best" Docs-as-Code tool.

Docusaurus is a good fit for this project because it gives us:

* Markdown-based authoring.
* Git-based source control.
* A React-based publishing framework.
* Flexible website customization.
* Versioning capabilities.
* Search and navigation options.
* Integration with modern development workflows.
* The ability to extend the site when we need something beyond standard documentation pages.

Another organization may make a different choice.

For example, MkDocs may be a better fit for a Python-focused team. GitBook may be preferable for a team that wants a managed documentation platform. Another organization may choose a commercial knowledge base or a different static site generator.

The important skill is not memorizing the name of one tool.

The important skill is being able to ask:
>[!IMPORTANT]
> **What does our documentation workflow need, and which tools support that workflow?**

---

## The Principle Behind This Project

The technology will change.

The workflow principles are more durable.

I want this project to demonstrate a documentation process where:

* Writers own the content.
* Content is stored as a controlled source.
* Changes are versioned.
* Reviews are visible.
* Approvals are traceable.
* Translation is part of the workflow.
* Builds can be automated.
* Publishing is repeatable.
* AI can assist the Writer without replacing professional judgement.

That is what I mean by **Docs-as-Code** in this learning platform.

It is not simply:

> [!Tip]
> "Write documentation in Markdown."

It is a way of bringing documentation into a more structured, collaborative, version-controlled, and repeatable software workflow.
