---
title: Documentation Lifecycle in Docs-as-Code
sidebar_position: 4
description: Learn how to manage the complete lifecycle of documentation from planning through archiving.
---

# Documentation Lifecycle in Docs-as-Code

> **Estimated reading time:** 24 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand the documentation lifecycle stages.
- Plan documentation before writing.
- Write documentation efficiently.
- Establish quality review processes.
- Publish documentation confidently.
- Maintain documentation over time.
- Archive outdated documentation.
- Apply lifecycle practices in team workflows.

---

## The Documentation Lifecycle

Documentation has a complete lifecycle: Plan → Write → Review → Publish → Maintain → Archive.

### Lifecycle Overview

```
PLAN
  ↓ (Research, outline, plan)
WRITE
  ↓ (Draft, examples, formatting)
REVIEW
  ↓ (Quality check, feedback, revisions)
PUBLISH
  ↓ (Release, announcement, monitoring)
MAINTAIN
  ↓ (Updates, fixes, feedback integration)
ARCHIVE
  ↓ (Deprecate old versions, retire)
```

Each stage has clear activities and outputs. Understanding the full lifecycle helps you:

- Know what to do and when
- Plan team capacity
- Estimate timelines
- Maintain quality throughout
- Handle documentation sustainably

:::important

Every piece of documentation goes through this lifecycle. Understanding it helps you manage documentation professionally.

:::

---

## Before You Start

Make sure you have:

- Understanding of Docs-as-Code basics
- Documentation repository set up
- Team committed to the process
- Tools in place (editor, version control, build system)

:::note

**For Beginners**

The lifecycle is simple: plan it, write it, check it, publish it, keep it updated, then retire it. That's the flow.

:::

---

## Stage 1: Planning

Before writing a single word, plan your documentation.

### Why Planning Matters

Poor planning leads to:
- Wasted time writing wrong content
- Incomplete documentation
- Confusing structure
- Rework and frustration

Good planning leads to:
- Clear, focused documentation
- Faster writing
- Better user experience
- Less rework

### Planning Activities

**1. Identify the Need**

Ask:
- What do users need to know?
- What problem does this solve?
- Who is the audience?
- Is there existing documentation?

**2. Define Scope**

Decide:
- What will this documentation cover?
- What's out of scope?
- How detailed should it be?
- Related topics to link to?

**3. Create Outline**

Structure before writing:
```
# Getting Started
  ## Prerequisites
  ## Installation
    ### Windows
    ### macOS
    ### Linux
  ## First Steps
  ## Next Steps
```

**4. Assign Owner**

Who will:
- Write it?
- Review it?
- Keep it updated?
- Answer questions about it?

**5. Set Timeline**

Estimate:
- Time to write (4 hours? 1 day? 1 week?)
- Review time (1-2 days)
- Publish date
- Deadline for updates

### How-To: Create a Documentation Plan

**Step 1: Create planning issue**

On GitHub, create issue:

```
Title: Document: Getting Started Guide

Body:
## What
Document how to get started with our product

## Audience
New users, first-time installation

## Scope
- System requirements
- Installation steps (Windows, Mac, Linux)
- First command to verify installation
- Next steps (link to tutorials)

## Owner
Sarah (writer), Marcus (reviewer)

## Outline
1. Prerequisites
2. Installation
3. Verification
4. Troubleshooting
5. Next Steps

## Timeline
- Draft: 2 days
- Review: 1 day
- Publish: 1 day
Total: 4 days
```

**Result:** Clear plan documented, team aligned.

**Step 2: Review plan with team**

- Share outline
- Get feedback
- Adjust scope if needed
- Confirm timeline

**Result:** No surprises, everyone knows what's happening.

**Step 3: Assign to writer**

Add to GitHub Issues:
- Assign to writer
- Add to project board
- Set due date

**Result:** Writer knows this is their task.

---

## Stage 2: Writing

Now write the documentation.

### Writing Best Practices

**Start with outline, not blank page**
- Use outline from planning
- Fills in sections
- Keeps you organized

**Write for your audience**
- Use their terminology
- Match their knowledge level
- Answer their questions
- Show them what they care about

**Include examples**
- Real, working examples
- Show input and output
- Make them copy-paste ready
- Test them before publishing

**Use consistent voice and style**
- Follow style guide
- Use active voice
- Be friendly
- Avoid jargon

**Structure for scanning**
- Clear headings
- Short paragraphs
- Bullet lists
- Bold key terms

### How-To: Write Documentation

**Step 1: Set up writing environment**

```bash
git switch -c feature/add-getting-started
```

**Create file:** `docs/getting-started/index.md`

**Result:** You're ready to write.

**Step 2: Write outline in file**

```markdown
# Getting Started

## Prerequisites

## Installation

### Windows

### macOS

### Linux

## First Steps

## Next Steps
```

**Result:** Structure in place, easy to see what needs filling in.

**Step 3: Fill in each section**

**Prerequisites section:**

```markdown
## Prerequisites

Before installing, make sure you have:

- Internet connection
- Administrator access on your computer
- 500 MB free disk space
- 5 minutes for installation

Not sure if you meet these? We'll help:
- No admin access? [Run in user mode](../guides/user-mode.md)
- Limited disk space? [Minimal installation](../guides/minimal-install.md)
```

**Result:** Complete section with helpful links.

**Step 4: Add examples**

Before and after:

```markdown
## First Steps

After installation, let's run a basic command:

```bash
myapp --version
```

You should see:
```
myapp version 2.1.0
```

If you see something different, check [Troubleshooting](#troubleshooting).
```

**Result:** Readers know exactly what to expect.

**Step 5: Proofread locally**

```bash
npm run build
npm run serve
```

Open browser, read your documentation:
- Do links work?
- Do examples run?
- Does formatting look right?
- Is it easy to follow?

**Result:** You catch issues before team review.

**Step 6: Commit and push**

```bash
git add docs/getting-started/index.md
git commit -m "Add Getting Started guide with installation steps"
git push origin feature/add-getting-started
```

**Result:** Ready for review.

:::tip

Write in drafts. First draft doesn't have to be perfect. You'll refine it during review.

:::

---

## Stage 3: Review

Quality review ensures your documentation is accurate and helpful.

### Who Reviews?

**Internal review:**
- Peer (technical writer)
- Subject matter expert (engineer, product)
- Manager (strategy, consistency)

**Typical review:**
One technical writer + one subject matter expert

### What Reviewers Check

**Accuracy:**
- Is information correct?
- Are examples accurate?
- Do links work?

**Completeness:**
- Is anything missing?
- Are there gaps?
- Are edge cases covered?

**Clarity:**
- Is it easy to understand?
- Is jargon explained?
- Are there confusing parts?

**Consistency:**
- Follows style guide?
- Matches tone of other docs?
- Formatting consistent?

**Usability:**
- Would a new user understand?
- Are examples helpful?
- Easy to follow?

### How-To: Review Documentation

**Step 1: Reviewers access PR**

On GitHub:
- Go to Pull Requests
- Click the documentation PR
- Click "Files changed"

**Result:** Reviewers see your changes.

**Step 2: Build and preview locally**

```bash
git fetch origin
git switch feature/add-getting-started
npm run build
npm run serve
```

**Result:** Reviewers see actual rendered documentation.

**Step 3: Leave comments**

On GitHub, click specific lines to comment:

```
Great overview! One question: do users need 
administrator access on Mac? That might help 
folks upfront.
```

**Result:** Clear, specific feedback.

**Step 4: Approve or request changes**

If good:
- Click "Approve" button
- Great job!

If needs work:
- Click "Request changes" button
- Explain what needs fixing
- Suggest solutions

**Result:** Author knows next steps.

### How-To: Address Review Feedback

**Step 1: Read feedback carefully**

Understand what reviewers are asking.

**Step 2: Make changes**

```bash
# Still on feature branch
# Edit the file based on feedback
```

**Step 3: Commit changes**

```bash
git commit -m "Address review feedback: clarify admin requirements"
git push origin feature/add-getting-started
```

**Result:** Changes visible in PR.

**Step 4: Reply to comments**

On GitHub, reply:

```
Done! Added note that Mac users need admin access.
Also tested on Mac - works great.
```

**Result:** Reviewers know you addressed feedback.

**Step 5: Request re-review**

Click "Re-request review" button.

**Result:** Reviewer knows to look again.

---

## Stage 4: Publishing

After approval, time to publish.

### Pre-Publication Checklist

Before merging, verify:

- [ ] All reviews approved
- [ ] All automated checks pass
- [ ] No broken links
- [ ] Examples tested and work
- [ ] Formatting looks good
- [ ] SEO tags added (if applicable)
- [ ] Table of contents updated

### How-To: Publish Documentation

**Step 1: Merge to main**

On GitHub PR page:
- Click "Merge pull request"
- Confirm merge
- Click "Delete branch"

**Result:** Changes on main branch.

**Step 2: Automatic deployment**

GitHub Actions automatically:
1. Builds documentation
2. Runs checks
3. Deploys to production
4. Notifies team

**Result:** Documentation is live!

**Step 3: Verify on live site**

- Visit your documentation site
- Find your new documentation
- Click links, verify they work
- Read through it

**Result:** Documentation is live and working.

**Step 4: Announce to team/users**

Tell people:

```
📚 New documentation published!

Added Getting Started Guide with:
- Complete installation instructions for all platforms
- First steps to verify installation
- Links to troubleshooting

Read it: https://docs.example.com/getting-started
```

Share in:
- Team Slack channel
- Email to users
- GitHub Discussions
- Release notes

**Result:** Users know about new documentation.

---

## Stage 5: Maintenance

Documentation needs ongoing care.

### Maintenance Activities

**Regular Reviews (Monthly)**
- Read documentation
- Check if still accurate
- Look for outdated information
- Find confusing parts

**User Feedback**
- Monitor support channels
- Collect questions users ask
- Note confusing parts
- Update docs based on feedback

**Updates for Changes**
- When features change
- When product updates
- When processes change
- When best practices evolve

**Link Maintenance**
- Check for broken links
- Update changed URLs
- Verify external links still work

**Example Maintenance**

If product adds new feature:

```bash
git switch -c feature/update-docs-for-v2.1

# Edit: docs/guides/advanced-features.md
# Add section about new feature
# Add example
# Add link from related docs

git commit -m "Add documentation for new v2.1 feature"
git push origin feature/update-docs-for-v2.1

# Create PR, get review, publish
```

### Ownership Model

Assign documentation owners:

- **Getting Started** - Sarah
- **API Reference** - Marcus
- **Troubleshooting** - Lisa

Owners are responsible for keeping their section up-to-date.

:::note

**Documentation Manager's Tip**

Assign clear ownership. Without owners, documentation goes stale. Owners are responsible for updates and accuracy.

:::

---

## Stage 6: Archiving

When documentation is no longer needed, properly retire it.

### When to Archive

- Feature is removed
- Support for version ends
- Better documentation replaces it
- Outdated information that confuses users

### How-To: Archive Documentation

**Option 1: Remove and redirect**

```markdown
# ⚠️ This page is no longer maintained

This documentation is for v1.0, which is no longer supported.

For current documentation, see:
- [Getting Started with v2.0](../getting-started-v2.md)
- [Migration Guide from v1 to v2](../migrate-v1-to-v2.md)
```

**Option 2: Move to archive section**

Create section:
```
docs/
├── current/      (Latest docs)
├── archive/      (Old docs)
│   ├── v1.0/
│   ├── v2.0/
└── guides/
```

**Option 3: Complete removal**

When documentation is truly irrelevant:

```bash
git switch -c feature/remove-old-docs

# Delete files
git rm docs/old-feature.md

# Commit with clear message
git commit -m "Remove docs for feature-x (deprecated in v3.0)"

# Create PR, review, merge
```

### Updating Links

When removing, update all links:

```bash
# Find files that link to removed doc
git grep "old-feature.md"

# Update those files
# Link to new location or remove reference
```

---

## Documentation Lifecycle Timeline

### Example: Planning to Publishing

**Day 1: Planning**
- Identify need
- Create plan
- Team reviews outline
- Assign to writer

**Days 2-3: Writing**
- Draft documentation
- Add examples
- Test locally
- Create PR

**Days 4-5: Review**
- Technical writer reviews
- Subject matter expert reviews
- Gather feedback
- Writer addresses feedback

**Day 6: Publishing**
- Final checks
- Merge to main
- Automatic deployment
- Verify on live site
- Announce to users

**Result:** Complete documentation lifecycle from start to publication in 1 week.

### Ongoing Maintenance

After publishing:
- Monthly review for accuracy
- Update when product changes
- Monitor user questions
- Fix issues as they arise
- Plan next version updates

---

## Summary

In this lesson, you learned:

- The six stages of documentation lifecycle
- What happens in each stage
- Activities and best practices
- How-to implement each stage
- Timeline and responsibility
- Sustainable documentation practices

Understanding the full lifecycle helps you manage documentation professionally and sustainably.

---

## Exercise

1. Identify a documentation need in your organization
2. Create planning document with scope and outline
3. Write documentation following best practices
4. Ask two people to review (peer + SME)
5. Address all feedback
6. Merge to main and publish
7. Announce to team
8. Schedule monthly review
9. Assign permanent owner
10. Document the lifecycle process in CONTRIBUTING.md

---

## Knowledge check

<details>
<summary><strong>1. What are the six stages of documentation lifecycle?</strong></summary>

1. **Plan** - Identify need, define scope, create outline, assign owner
2. **Write** - Draft, add examples, test
3. **Review** - Quality check, get feedback, revise
4. **Publish** - Merge, deploy, verify, announce
5. **Maintain** - Keep updated, fix issues, collect feedback
6. **Archive** - Deprecate or remove when no longer needed

</details>

<details>
<summary><strong>2. Why is planning important before writing?</strong></summary>

Planning:
- Saves writing time (know what to write)
- Ensures completeness (nothing forgotten)
- Creates clear structure (easy to follow)
- Aligns team (everyone knows the plan)
- Prevents rework (write once, right)

</details>

<details>
<summary><strong>3. What should be included in a documentation plan?</strong></summary>

A good plan includes:
- Identified need (why write this?)
- Target audience (who reads it?)
- Scope (what's covered, what's not)
- Outline (structure of content)
- Owner (who writes, who reviews)
- Timeline (when due)

</details>

<details>
<summary><strong>4. What do reviewers check in documentation?</strong></summary>

Reviewers verify:
- **Accuracy** - Is information correct?
- **Completeness** - Is anything missing?
- **Clarity** - Is it easy to understand?
- **Consistency** - Does it match style guide?
- **Usability** - Would new user understand?

</details>

<details>
<summary><strong>5. What should happen before publishing?</strong></summary>

Before publishing, verify:
- All reviews approved
- All automated checks pass
- No broken links
- Examples tested
- Formatting correct
- Table of contents updated

</details>

<details>
<summary><strong>6. What is documentation maintenance?</strong></summary>

Maintenance includes:
- Regular reviews (monthly)
- User feedback collection
- Updates when product changes
- Link checking
- Fixing issues
- Keeping information current

</details>

<details>
<summary><strong>7. Who should own documentation?</strong></summary>

Assign clear owners for each section:
- One person responsible per section
- Responsible for accuracy and updates
- Go-to person for questions
- Schedules regular reviews

</details>

<details>
<summary><strong>8. When should you archive documentation?</strong></summary>

Archive when:
- Feature is removed
- Support for version ends
- Better documentation replaces it
- Information is outdated and confuses users

Use redirects or move to archive section when possible.

</details>

---

## Next Lesson

Now that you understand the complete documentation lifecycle, explore how to build a sustainable documentation team and culture that maintains quality over time.