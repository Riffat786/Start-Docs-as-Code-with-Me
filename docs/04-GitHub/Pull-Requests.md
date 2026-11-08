---
title: Collaborating with GitHub Pull Requests
sidebar_position: 6
description: Learn how to use pull requests to review, collaborate on, and merge documentation changes.
---

# Collaborating with GitHub Pull Requests

> **Estimated reading time:** 22 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what pull requests are and why they matter.
- Create pull requests with good descriptions.
- Review pull requests effectively.
- Request changes and approve PRs.
- Address review feedback.
- Merge pull requests properly.
- Use PR checks and automation.
- Apply PRs in Docs-as-Code team workflows.

---

## What Are GitHub Pull Requests?

A pull request (PR) is a proposal to change code. It's how teams collaborate, review, and approve changes before merging.

### The PR Workflow

```
You make changes → Create PR → Team reviews → Address feedback → Merge
```

Think of it as: "Here's what I changed, please review before I apply it."

### Why Pull Requests Matter

**Quality:**
- Someone else reviews your work
- Catches errors, typos, formatting issues
- Ensures consistency

**Safety:**
- Changes are reviewed before going live
- Can't merge broken documentation
- Everyone sees what changed

**Learning:**
- Team learns from each other's work
- Knowledge sharing through reviews
- Mentoring new team members

**History:**
- Track who changed what
- Understand why changes were made
- Easy to revert if needed

:::important

Pull requests transform documentation from individual work to team collaboration. They ensure quality and consistency.

:::

---

## Before You Start

Make sure you have:

- A Git repository on GitHub
- Understanding of Git branches
- Understanding of commits
- A team to review your work

:::note

**For Beginners**

Pull requests are how teams work together. You'll use them for every documentation change.

:::

---

## Creating a Pull Request

### The PR Workflow

**Step 1: Create a branch**

```bash
git switch -c feature/add-examples
```

**Step 2: Make changes**

Edit documentation files locally.

**Step 3: Commit changes**

```bash
git commit -m "Add code examples to API docs"
```

**Step 4: Push branch**

```bash
git push -u origin feature/add-examples
```

**Step 5: Create PR on GitHub**

GitHub shows a prompt: "Create pull request"

### Creating the PR

1. Go to repository
2. Click "Pull Requests" tab
3. Click "New pull request"
4. Select your branch
5. GitHub shows changes
6. Click "Create pull request"
7. Fill in title and description
8. Click "Create pull request"

### PR Title

**Good titles:**

- "Add authentication examples to API docs"
- "Fix broken link on homepage"
- "Update getting started guide for v2.0"

**Bad titles:**

- "Update docs" (too vague)
- "Fix" (unclear what)
- "Changes" (not specific)

**Rule:** Title should describe the change clearly in one sentence.

### PR Description

Include:

- **What changed** - Summary of changes
- **Why** - Why is this change needed?
- **How to review** - What should reviewers look for?
- **Related issues** - Link to issue: "Closes #42"
- **Files changed** - Which documentation changed?

**Example PR:**

```markdown
## What's this PR about?

Adds code examples to the API authentication section.

## Why?

Users reported the authentication section was confusing without examples.
This adds practical examples in Python, Node.js, and Go.

## What changed

- Added 3 code examples to /docs/api/authentication.md
- Updated /docs/api/examples/ folder with full example projects
- Updated README with link to examples

## How to review

1. Read through the examples
2. Check if code is correct and follows our style
3. Verify examples are clear and helpful
4. Check formatting is consistent with other docs

## Closes #42
```

:::tip

Good PR descriptions help reviewers understand context. Spend time on the description.

:::

---

## Reviewing Pull Requests

As a reviewer, you check quality and suggest improvements.

### Reviewing Process

**Step 1: Understand the change**

1. Read PR title and description
2. Look at files changed
3. Understand what's being proposed

**Step 2: Review the content**

1. Read documentation changes
2. Check for accuracy
3. Look for typos or formatting issues
4. Verify examples work
5. Ensure consistency with existing docs

**Step 3: Leave comments**

1. Click on lines you want to comment on
2. Write constructive feedback
3. Suggest improvements
4. Praise good work

**Step 4: Submit review**

Choose one of:
- **Comment** - Just feedback, no decision
- **Approve** - Changes look good
- **Request Changes** - Need fixes before merging

### Reviewing Checklist for Docs

- [ ] Content is accurate
- [ ] Examples work correctly
- [ ] Formatting is consistent
- [ ] Links are correct
- [ ] Spelling and grammar are good
- [ ] Follows documentation style guide
- [ ] Not too wordy or unclear
- [ ] Related pages are linked correctly

### Providing Good Feedback

**Good feedback:**

- Specific (points to exact issue)
- Constructive (suggests how to fix)
- Kind (acknowledges good work)
- Timely (provided quickly)

**Example good feedback:**

```
The examples are great! One suggestion: on line 45, 
can you add a comment explaining the `auth_token` parameter? 
New users might not understand what it is.
```

**Example bad feedback:**

```
This is wrong. Fix it.
```

---

## Addressing Feedback

When you get review feedback, address it.

### How to Address Feedback

**Step 1: Read the feedback**

Understand what the reviewer is asking.

**Step 2: Make changes**

Edit the files locally.

**Step 3: Commit and push**

```bash
git add .
git commit -m "Address review feedback: Add parameter explanation"
git push origin feature/add-examples
```

The PR automatically updates with new commits.

**Step 4: Reply to comments**

In the PR, reply to each feedback comment:

```
Done! Added explanation for auth_token on line 45.
```

This shows you addressed it and explains what you did.

**Step 5: Request re-review**

Click "Re-request review" button so reviewer knows to look again.

### If You Disagree

If you think the feedback is wrong:

1. Explain your reasoning respectfully
2. Provide context or examples
3. Discuss in PR comments
4. Come to agreement together

This is collaboration, not confrontation.

:::important

Treat feedback as learning opportunity, not criticism. Stay professional and kind.

:::

---

## Approving and Merging

Once feedback is addressed and PR is approved, it's ready to merge.

### Approval

Reviewers click "Approve" when satisfied.

**What approval means:**
- Reviewer read and understood changes
- Changes look good
- Ready to merge

Usually need 1-2 approvals before merging (depends on team policy).

### Merging the PR

Once approved:

1. Click "Merge pull request" button
2. Confirm merge
3. GitHub merges changes into main
4. PR closes automatically
5. Issue closes automatically (if PR referenced it)

### After Merging

**Clean up:**

1. Delete the branch (GitHub offers button)
2. Branch is no longer needed
3. Keeps repository clean

**Verify:**

1. Check live documentation
2. Verify changes appear correctly
3. No broken links or formatting issues

---

## Common PR Scenarios

### Scenario 1: Simple Documentation Fix

**What:** Fix a typo or broken link

**PR size:** 1-2 files changed

**Review process:**
1. Create PR with clear description
2. One person reviews quickly
3. Approve and merge

**Timeline:** Minutes to hours

### Scenario 2: New Documentation Section

**What:** Add complete new guide or tutorial

**PR size:** Multiple new files

**Review process:**
1. Create PR with detailed description
2. Multiple reviewers look at structure and content
3. May request changes on examples or clarity
4. Refine and re-submit
5. Approve and merge

**Timeline:** Hours to days

### Scenario 3: Large Documentation Update

**What:** Update for major release, major rewrite

**PR size:** Many files changed

**Review process:**
1. Create PR with very detailed description
2. Multiple team members review
3. Several rounds of feedback
4. May need design/architecture discussion
5. Final approval
6. Merge

**Timeline:** Days to weeks

### Scenario 4: Team Collaboration

**What:** Multiple people contributing to same section

**PR process:**
1. Create feature branch
2. Multiple people commit to same branch
3. One person creates PR
4. Team reviews combined work
5. Approve and merge

**Tips:**
- Communicate who's doing what
- Commit frequently to avoid conflicts
- Review each other's work in PR

---

## PR Best Practices

### For Authors (People Creating PRs)

**Keep PRs focused:**
- One change per PR
- Don't mix different topics
- Easier to review
- Easier to understand

**Provide context:**
- Explain why the change matters
- Link to related issues
- Help reviewers understand

**Respond promptly:**
- Address feedback quickly
- Don't let PR sit unreviewed for days
- Keep momentum

**Use drafts for work-in-progress:**
```
Click "Convert to draft" if you're still working on it
```

### For Reviewers

**Review promptly:**
- Aim to review within 24 hours
- Don't leave PRs hanging
- Maintain team momentum

**Be thorough:**
- Read the full change, not just skimming
- Check the details
- Test if possible

**Be kind:**
- Assume good intent
- Give constructive feedback
- Praise good work
- Learn from others

**Document decisions:**
- If rejecting changes, explain why clearly
- Help author understand reasoning
- This helps future decisions

### For Teams

**Set PR expectations:**
- How many reviewers needed?
- Expected review time?
- What gets reviewed for?
- Who can merge?

**Regular reviews:**
- Don't let PRs stack up
- Multiple pending PRs slow everything down
- Schedule time for reviewing

**Learn from PRs:**
- Use PR conversations to teach
- Share knowledge in reviews
- Help team improve together

:::note

**Documentation Manager's Tip**

Treat PRs as teaching moments. Use them to help team members improve their writing and maintain consistency.

:::

---

## PR Checks and Automation

GitHub can automatically check PRs.

### Automated Checks

Common checks for documentation:

- **Link checking** - All links are valid
- **Spell check** - No misspellings
- **Format checking** - Markdown is valid
- **Build verification** - Docs build without errors
- **Preview** - Generate preview of changes

### Checking PR Status

Before merging, check:

1. All checks pass (green checkmarks)
2. No merge conflicts
3. All reviewers approved
4. Branch is up to date with main

**If checks fail:**
- Fix the issues locally
- Commit and push changes
- Checks run again automatically

### Required Checks

Some checks might be "required":
- Can't merge if check fails
- Ensures quality standards
- Protects main branch

---

## PR Templates

Create templates to standardize PR descriptions.

### Creating PR Template

1. Go to Settings → Features
2. Click "Set up templates" in Pull requests
3. Click "Add template"
4. Write template with instructions
5. Save

### Example PR Template

```markdown
## Description
What changed and why?

## Type of Change
- [ ] Bug fix
- [ ] New documentation
- [ ] Documentation update
- [ ] Formatting/style

## Related Issue
Closes #[issue number]

## How to Review
What should reviewers look for?

## Files Changed
List key files:
- docs/file1.md
- docs/file2.md

## Screenshots (if applicable)
Add screenshots of changes

## Checklist
- [ ] I've read the style guide
- [ ] Changes are consistent with existing docs
- [ ] All links are checked
- [ ] Examples have been tested
```

---

## Summary

In this lesson, you learned how to:

- Understand pull requests and their importance.
- Create PRs with clear descriptions.
- Review PRs thoroughly and constructively.
- Address feedback professionally.
- Merge PRs properly.
- Use PR automation and checks.
- Implement PR workflows for your team.

Pull requests are the heart of collaborative documentation. They ensure quality, enable learning, and keep your team aligned.

---

## Exercise

1. Create a branch: `git switch -c feature/my-changes`
2. Make changes to documentation
3. Commit your changes: `git commit -m "Descriptive message"`
4. Push to GitHub: `git push -u origin feature/my-changes`
5. Create a pull request on GitHub
6. Write detailed PR description with title, what changed, why, how to review
7. Ask a team member to review
8. Respond to any feedback with changes
9. Re-request review after addressing feedback
10. Merge PR when approved

---

## Common mistakes

<details>
<summary><strong>1. PR title and description are too vague</strong></summary>

**Cause**

Wrote generic PR title like "Update docs" without explaining what.

**Problem**

Reviewers don't know what changed or why. Confusing to understand.

**Solution**

Title should clearly describe the change in one sentence.

Description should explain context and why change matters.

Good: "Add authentication examples to API docs - closes #42"

Bad: "Update"

</details>

<details>
<summary><strong>2. PR is too big</strong></summary>

**Cause**

Made many different changes in one PR.

**Problem**

Hard to review. Easy to miss issues. Takes forever to get approved.

**Solution**

Keep PRs focused. One main change per PR.

If multiple changes needed, create multiple PRs.

Smaller PRs get reviewed faster and merged quicker.

</details>

<details>
<summary><strong>3. Ignoring review feedback</strong></summary>

**Cause**

Received feedback but didn't address it, just merged PR anyway.

**Problem**

Low quality documentation. Reviewers feel ignored. Team trust erodes.

**Solution**

Address all feedback before merging.

If you disagree, discuss in PR. Come to agreement.

Never ignore reviewer feedback.

</details>

<details>
<summary><strong>4. Taking feedback personally</strong></summary>

**Cause**

Received critical feedback and took it as personal attack.

**Problem**

Defensive responses. Arguments in PR. Bad team dynamics.

**Solution**

Feedback is about work, not you.

Assume good intent from reviewers.

They want to help improve, not attack you.

</details>

<details>
<summary><strong>5. Never reviewing others' PRs</strong></summary>

**Cause**

Only create PRs, never review others' work.

**Problem**

Others' PRs wait. Team collaboration breaks down. Unbalanced work.

**Solution**

Review others' PRs with same care you want for yours.

Spend time every day reviewing PRs.

It's part of being a team member.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a pull request?</strong></summary>

A pull request is a proposal to merge code changes. It's how teams review and approve changes before merging them into main branch.

</details>

<details>
<summary><strong>2. Why are pull requests important?</strong></summary>

PRs ensure quality through review, maintain consistency, prevent mistakes, provide learning opportunities, and create an audit trail of changes.

</details>

<details>
<summary><strong>3. What should a good PR title include?</strong></summary>

A good PR title clearly describes the change in one sentence. Someone reading just the title should understand what changed.

Example: "Add authentication examples to API docs"

</details>

<details>
<summary><strong>4. What should you include in a PR description?</strong></summary>

- What changed (summary of changes)
- Why (why is this change needed?)
- How to review (what reviewers should look for)
- Related issues (link to issue with "Closes #42")
- Files affected (which documentation changed)

</details>

<details>
<summary><strong>5. What does "approve" mean on a pull request?</strong></summary>

When a reviewer clicks "Approve," they're saying:
- They read and understood the changes
- The changes look good
- The PR is ready to merge

</details>

<details>
<summary><strong>6. What should you do if a reviewer requests changes?</strong></summary>

1. Read the feedback carefully
2. Make the requested changes locally
3. Commit and push the changes
4. Reply to feedback comments explaining what you did
5. Click "Re-request review" so reviewer knows to check again

</details>

<details>
<summary><strong>7. How should you handle disagreement with feedback?</strong></summary>

Discuss respectfully in PR comments. Explain your reasoning. Provide examples or context. Come to agreement together. Never ignore feedback - always discuss if you disagree.

</details>

<details>
<summary><strong>8. What should you do after merging a PR?</strong></summary>

- Delete the branch (GitHub offers button)
- Verify changes appear correctly in live docs
- Check for broken links or formatting issues
- Close related issues if PR referenced them

</details>

---

## Next Steps

You now understand the full Docs-as-Code workflow: Git basics, collaboration through pull requests, automation with GitHub Actions, and team coordination. Start using pull requests immediately and experience collaborative documentation!