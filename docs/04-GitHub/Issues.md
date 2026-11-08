---
title: Tracking Documentation Work with GitHub Issues
sidebar_position: 4
description: Learn how to use GitHub Issues to manage documentation tasks, bugs, and improvements.
---

# Tracking Documentation Work with GitHub Issues

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand GitHub Issues and their role in documentation.
- Create clear, detailed issues.
- Use labels to organize issues.
- Assign issues to team members.
- Use milestones to track progress.
- Link issues to pull requests.
- Close issues properly.
- Apply Issues in Docs-as-Code workflows.

---

## What Are GitHub Issues?

GitHub Issues are a way to track work, bugs, and tasks in your repository. Think of them as a to-do list for your documentation team.

### What You Track with Issues

**Bugs and Errors:**
- "Link on page X is broken"
- "Code example doesn't work"
- "Typo in introduction"

**Feature Requests and Improvements:**
- "Add video tutorial to installation guide"
- "Improve code examples in API docs"
- "Create glossary of terms"

**Tasks and Work:**
- "Update documentation for new feature"
- "Review API documentation"
- "Add more examples to getting started guide"

### Issues vs. Discussions

**Issues:**
- Track specific work
- Have clear status (open/closed)
- Assigned to people
- Tracked in milestones
- Goal: solve the problem

**Discussions:**
- Open-ended conversations
- No ownership or deadline
- Community engagement
- Goal: share knowledge

**Use Issues for:** Work you need to complete.

**Use Discussions for:** Questions and conversations.

:::important

Issues are your documentation team's task list. They keep everyone organized and on track.

:::

---

## Before You Start

Make sure you have:

- A GitHub repository
- Admin or write access
- Understanding of Git and pull requests
- Team members who will use issues

:::note

**For Beginners**

GitHub Issues is free and built into every repository. No extra setup needed. Start using it immediately.

:::

---

## Creating an Issue

### How to Create an Issue

**Method 1: Via GitHub Web**

1. Go to repository → Issues tab
2. Click "New issue"
3. Enter title and description
4. Click "Submit new issue"

**Method 2: Quick Link**

Go directly to: `github.com/your-org/your-repo/issues/new`

### Writing a Good Issue Title

**Good titles:**

- "Add code examples to API authentication guide"
- "Fix broken link on homepage"
- "Update getting started guide for new version"

**Bad titles:**

- "Fix docs" (too vague)
- "Something broken" (unclear what)
- "Help!" (no context)

**Rule:** Someone reading the title should understand the work without reading the description.

### Writing a Good Issue Description

Include:

- **What's the problem or task?** - Clear description
- **Why does it matter?** - Why should this be done?
- **Expected result** - What should happen after fixing?
- **Context** - Links to relevant pages or issues
- **Steps to reproduce** (for bugs) - How to see the problem

**Example Bug Report:**

```
Title: Broken link in API documentation

Description:
The link to "Authentication Guide" on the API reference page is broken.

**Where:**
Page: https://your-docs.com/api-reference
Link text: "See Authentication Guide"

**What should happen:**
Link should go to https://your-docs.com/guides/authentication

**Current behavior:**
Link goes to https://your-docs.com/guides/auth (wrong URL)

**Impact:**
Users can't find authentication documentation easily.
```

**Example Feature Request:**

```
Title: Add video tutorial to installation guide

Description:
**What:**
Add a short video tutorial showing how to install and set up locally.

**Why:**
Some users find video easier than reading text instructions.
Video walkthrough helps new users get started faster.

**What it would include:**
- Installation steps
- Configuration
- Running first example
- Troubleshooting common issues

**Reference:**
- Installation guide: /docs/installation
- Existing screenshots: [link to repo image folder]
```

**Example Task:**

```
Title: Review and update API documentation

Description:
**What:**
The API documentation needs review and updates for the new v2.0 release.

**What needs updating:**
- Endpoint changes and deprecations
- New authentication method
- Rate limit changes
- Error codes and responses

**Related PR:**
[Link to PR with API changes]

**Due by:**
End of sprint (2024-11-15)

**Checklist:**
- [ ] Review endpoint documentation
- [ ] Update examples
- [ ] Add v2.0 migration guide
- [ ] Test all examples work
```

:::tip

Good issue descriptions help everyone understand what needs to be done without back-and-forth questions.

:::

---

## Using Labels

Labels organize issues by type, priority, and status.

### Common Labels for Documentation

| Label | Color | Purpose |
|-------|-------|---------|
| bug | red | Something is broken |
| enhancement | green | Improvement or feature |
| documentation | blue | Needs better documentation |
| good first issue | purple | Good for new team members |
| high priority | orange | Urgent, needs attention soon |
| help wanted | pink | Need team input or help |
| question | light blue | Needs clarification |
| on hold | gray | Blocked or waiting |

### Creating Labels

1. Go to Issues tab
2. Click "Labels" (right sidebar)
3. Click "New label"
4. Enter name and choose color
5. Click "Create label"

### Applying Labels to Issues

When creating or editing an issue:

1. Click "Labels" on the right
2. Select relevant labels
3. Save

An issue can have multiple labels.

:::tip

Use labels consistently. It helps with searching and filtering later.

:::

---

## Assigning Issues

Assign issues to specific team members so everyone knows who's responsible.

### How to Assign an Issue

1. Open the issue
2. Click "Assignees" (right sidebar)
3. Search for team member name
4. Click to assign
5. Issue updates automatically

### Good Assignment Practices

- **Assign to person doing the work** - Not the person asking for work
- **Ask before assigning** - Make sure person can work on it
- **Unassign when blocked** - If waiting for something, unassign temporarily
- **Assign to one or two people maximum** - Too many assignees is confusing

:::note

**Documentation Manager's Tip**

Assign issues during team meetings or planning sessions. Confirm person can work on it before assigning.

:::

---

## Using Milestones

Milestones group issues into releases or project phases.

### Creating Milestones

1. Go to Issues tab
2. Click "Milestones" (right sidebar)
3. Click "Create a milestone"
4. Enter title (e.g., "v2.0 Release", "Q4 Documentation Update")
5. Set due date (optional)
6. Click "Create milestone"

### Adding Issues to Milestones

1. Open issue
2. Click "Milestone" (right sidebar)
3. Select milestone
4. Issue is now part of that milestone

### Tracking Milestone Progress

1. Go to Issues → Milestones
2. See progress bar showing % complete
3. See how many issues are open/closed
4. Plan for milestone release

**Example milestones:**

- "v1.0 Documentation" - Initial docs for first release
- "Q1 2024 Updates" - Updates planned for first quarter
- "API Reference Complete" - Complete API documentation
- "Getting Started Guide" - New user onboarding docs

:::tip

Use milestones for major documentation releases or time-based projects.

:::

---

## Linking Issues to Pull Requests

Connect issues to the pull requests that fix them.

### Auto-Link with Commit Messages

When you commit code that fixes an issue, reference it:

```bash
git commit -m "Add authentication examples to API docs - Closes #42"
```

When you push and create a pull request, GitHub automatically:
- Links PR to issue #42
- Shows issue as "linked" on PR
- Shows PR on issue page

**Keywords that auto-close issues:**

- `close`, `closes`, `closed`
- `fix`, `fixes`, `fixed`
- `resolve`, `resolves`, `resolved`

**Example commits:**

```
git commit -m "Fix broken link in getting started - Fixes #15"
git commit -m "Add video tutorial to installation guide - Closes #8"
git commit -m "Update API docs for v2.0 - Resolves #42"
```

### Manual Linking

If commit message doesn't include issue reference:

1. Open PR
2. Scroll to "Linked issues" section
3. Click "Link issue"
4. Search for issue number
5. Select to link

---

## Closing Issues

Close issues when the work is complete.

### How to Close an Issue

**Method 1: From PR**

When PR is merged and mentions the issue, GitHub auto-closes it.

**Method 2: Manual**

1. Open issue
2. Click "Close issue" button
3. Comment about the work (optional)
4. Issue is closed

### Before Closing, Verify

- **Work is actually complete** - Did we solve the problem?
- **Tests pass** - If applicable, tests verify the fix
- **PR is merged** - If work was in a PR, is it merged?
- **Related issues are handled** - Are there follow-ups?

:::important

Don't close issues prematurely. Close only when work is truly done.

:::

---

## Issue Workflows for Documentation Teams

### Workflow 1: Bug Fix Process

```
1. User reports bug (creates issue)
2. Triage: Confirm bug, add label "bug"
3. Assign to person who will fix
4. Person fixes and creates PR
5. PR references issue: "Fixes #42"
6. PR reviewed and merged
7. GitHub auto-closes issue
```

### Workflow 2: Documentation Enhancement

```
1. Team member suggests enhancement (creates issue)
2. Discuss in issue comments
3. Plan: Add to milestone
4. Create PR with the enhancement
5. PR references issue: "Closes #15"
6. PR reviewed, merged
7. Issue auto-closes
```

### Workflow 3: Documentation Audit

```
1. Create issue: "Documentation audit - Q4"
2. Create sub-issues for each section:
   - "Review API documentation"
   - "Update getting started guide"
   - "Check all code examples"
3. Assign each sub-issue
4. Track progress with milestone
5. Close main issue when all sub-issues closed
```

### Workflow 4: Planning New Documentation

```
1. Create issue: "Plan: User onboarding documentation"
2. Team discusses in comments
3. Create multiple issues for each part:
   - "Write getting started guide"
   - "Create installation instructions"
   - "Add first steps tutorial"
4. Add all to same milestone
5. Assign and track progress
```

---

## Best Practices

### For Issue Creators

**Be specific:**
- Describe exactly what needs to change
- Include links to affected pages
- Provide examples or screenshots

**Provide context:**
- Why is this needed?
- Who is affected?
- What's the impact?

**Add labels immediately:**
- Helps others understand priority
- Makes searching easier

### For Issue Assignees

**Communicate progress:**
- Comment with updates
- Ask questions in issue if blocked
- Mention if timeline changes

**Link related work:**
- Reference related issues: "Related to #12"
- Link to PRs that work on the issue
- Keep discussion in one place

**Close properly:**
- Verify work is done
- Summarize what was done
- Link to merged PR

### For Issue Managers

**Triage regularly:**
- Check new issues weekly
- Add labels and assign
- Ask for clarity if needed
- Close stale issues

**Keep milestones updated:**
- Review progress weekly
- Adjust if needed
- Close completed milestones
- Plan next milestones

:::note

**Documentation Manager's Tip**

Assign one person to triage new issues weekly. This keeps the backlog organized and prevents issues from being ignored.

:::

---

## Using Issue Templates

Templates help contributors create consistent issues.

### Creating Issue Template

1. Go to Settings → Features
2. Click "Set up templates" in Issues section
3. Click "Add template" → "Custom issue"
4. Write template with instructions
5. Save

### Example Template

```markdown
---
name: Documentation Bug
about: Report an error or problem in documentation
---

## Where is the problem?
[Link to the page or file]

## What's the problem?
[Describe the error or issue]

## What should happen?
[Describe the correct behavior]

## Environment
- Page URL: 
- Browser: 
- Operating System:
```

---

## Summary

In this lesson, you learned how to:

- Create clear, detailed issues.
- Use labels to organize work.
- Assign issues to team members.
- Use milestones to track releases.
- Link issues to pull requests.
- Close issues properly.
- Implement issue workflows for your team.

GitHub Issues keep your documentation team organized, transparent, and focused on what matters.

---

## Exercise

1. Create at least 5 issues:
   - 1 bug report
   - 1 enhancement request
   - 1 documentation task
   - 2 items you'll work on this week

2. Apply labels to each issue (bug, enhancement, high-priority, etc.)

3. Create a milestone called "This Month's Docs"

4. Add 3 issues to the milestone

5. Assign issues to team members

6. Create a PR that references one issue

7. Merge PR and verify issue auto-closes

8. Create an issue template for your repository

9. Close issues that are completed

10. Review milestone progress

---

## Common mistakes

<details>
<summary><strong>1. Creating vague issue titles</strong></summary>

**Cause**

Wrote issue title without clear description of work.

**Problem**

Team members don't understand what needs to be done. Confusion in comments.

**Solution**

Title should answer: "What specific work needs to be done?"

Good: "Add examples to API authentication section"

Bad: "Fix documentation"

</details>

<details>
<summary><strong>2. Not adding labels</strong></summary>

**Cause**

Created issues without labels.

**Problem**

Can't filter or find issues by type. Hard to prioritize work.

**Solution**

Add at least one label to every issue:
- bug, enhancement, documentation, question

Helps organize and search.

</details>

<details>
<summary><strong>3. Assigning without asking</strong></summary>

**Cause**

Assigned issue to team member without checking if they can work on it.

**Problem**

Person is overloaded or has other priorities. Work doesn't get done.

**Solution**

Before assigning, ask: "Can you work on this?"

Confirm timeline and priority.

</details>

<details>
<summary><strong>4. Not linking issues to PRs</strong></summary>

**Cause**

Fixed an issue but didn't reference it in PR.

**Problem**

Issue stays open even though work is done. Duplicate effort possible.

**Solution**

Use "Closes #42" in PR commit message or description.

GitHub auto-closes issue when PR is merged.

</details>

<details>
<summary><strong>4. Leaving issues open forever</strong></summary>

**Cause**

Created issue, worked on it, but forgot to close.

**Problem**

Backlog gets cluttered. Can't see actual open work.

**Solution**

Close issues promptly when work is complete.

If issue still relevant but no active work, add label "on hold" and close.

Reopen if work resumes.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What's the difference between Issues and Discussions?</strong></summary>

Issues track specific work and tasks. They have clear ownership, status, and due dates.

Discussions are open-ended conversations for questions and feedback.

Use Issues for work to be completed. Use Discussions for questions and conversations.

</details>

<details>
<summary><strong>2. What should a good issue title include?</strong></summary>

A good title clearly describes the specific work needed.

Someone reading only the title should understand what needs to be done.

Example: "Add code examples to API authentication guide"

</details>

<details>
<summary><strong>3. What are labels and why do you need them?</strong></summary>

Labels are tags that organize issues by type (bug, enhancement, etc.) and priority.

They help filter and find issues quickly, and show team the type of work at a glance.

</details>

<details>
<summary><strong>4. How do you auto-close an issue with a PR?</strong></summary>

In the PR commit message or description, use keywords like "Closes #42" or "Fixes #15".

When the PR is merged, GitHub automatically closes the linked issue.

</details>

<details>
<summary><strong>5. What are milestones used for?</strong></summary>

Milestones group issues into releases or project phases.

Use them to track progress toward a documentation release or time-based goal.

</details>

<details>
<summary><strong>6. What should you include in a bug report issue?</strong></summary>

- Where the problem is (link to page)
- What the problem is (clear description)
- What should happen (expected behavior)
- Steps to reproduce (how to see the bug)
- Impact (who is affected)

</details>

<details>
<summary><strong>7. When should you assign an issue to someone?</strong></summary>

Assign when someone commits to doing the work.

Ask them first before assigning. Make sure they have bandwidth.

Unassign if work gets blocked and you're waiting on something else.

</details>

<details>
<summary><strong>8. What does it mean to triage an issue?</strong></summary>

Triaging means reviewing new issues to:
- Verify they're valid
- Add appropriate labels
- Assign to someone if needed
- Answer any clarifying questions

Keeps backlog organized and issues moving.

</details>

---

## Next Steps

Start using GitHub Issues today to track your documentation work. Begin with simple issues and templates, then refine based on your team's workflow.