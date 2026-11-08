---
title: Working with Git Branches
sidebar_position: 3
description: Learn how to create and manage branches in Git for organizing documentation work.
---

# Working with Git Branches

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what branches are and why they matter.
- Create new branches for documentation work.
- Switch between branches.
- Use branch naming conventions.
- Delete branches when finished.
- Understand branch workflows.
- Recover accidentally deleted branches.
- Apply branching in real documentation projects.

---

## What Are Git Branches?

A branch is a separate line of development in a Git repository. Think of it as a copy of your project where you can make changes without affecting the main version.

### Why Branches Matter

Branches allow documentation teams to:

- Work on different features or sections independently.
- Keep the main branch stable and production-ready.
- Collaborate without overwriting each other's changes.
- Organize work logically.
- Prepare changes for review before merging.

### The Main Branch

By default, Git creates a branch called `main` (or `master` in older repositories). This is your primary branch and should always contain stable, production-ready documentation.

:::important

Never work directly on the main branch. Always create a separate branch for your work.

:::

This protects the main documentation from accidental changes and incomplete work.

---

## Before You Start

Make sure you have:

- Git installed on your computer
- A Git repository created
- Visual Studio Code or a terminal open
- Basic understanding of Git commits

If you need to set up a repository, see [Create a Repository](./Repository.md).

:::note

**For Beginners**

If this is your first time using Git branches, practice on a test repository first. Create branches, switch between them, and delete them to get comfortable before working on your real documentation project.

:::

---

## Creating Your First Branch

### Scenario: You're Starting Fresh

Imagine you're a technical writer who needs to work on a new installation guide. You don't want to change the main documentation yet. You'll create a branch.

### How to Create a Branch

**Command:**

```bash
git branch feature/installation-guide
```

**What it does:**

- Creates a new branch called `feature/installation-guide`
- The branch is a copy of the current branch (usually `main`)
- You are still on the current branch (not switched yet)

**Result:**

The branch now exists in your repository, but you're still on the previous branch.

---

## Switching to a Branch

After creating a branch, you need to switch to it to start working.

### How to Switch Branches

**Command:**

```bash
git checkout feature/installation-guide
```

**What it does:**

- Switches your working directory to the `feature/installation-guide` branch
- Updates files to match the branch state
- All your changes now go to this branch

**Result in your terminal:**

```text
Switched to branch 'feature/installation-guide'
```

### Alternative Command (Newer Git Versions)

Modern versions of Git use `switch` instead of `checkout`:

```bash
git switch feature/installation-guide
```

Both commands work the same way.

:::important

Always verify which branch you're on before making changes. Use `git branch` to see the current branch (marked with `*`).

:::

---

## Creating and Switching in One Command

You can create a branch and switch to it at the same time.

### How to Create and Switch Together

**Command:**

```bash
git checkout -b feature/api-reference
```

Or with newer Git:

```bash
git switch -c feature/api-reference
```

**What it does:**

- Creates a new branch called `feature/api-reference`
- Switches to that branch immediately
- You're ready to start working

**Result in your terminal:**

```text
Switched to a new branch 'feature/api-reference'
```

---

## Viewing Your Branches

You need to see what branches exist and which one you're currently on.

### How to List Branches

**Command:**

```bash
git branch
```

**What it does:**

- Shows all branches in your repository
- Marks the current branch with an asterisk (`*`)

**Example result:**

```text
* feature/installation-guide
  feature/api-reference
  main
```

The asterisk shows you're on `feature/installation-guide`.

### See Remote Branches Too

**Command:**

```bash
git branch -a
```

**What it does:**

- Shows all branches (local and remote)
- Local branches are unmarked
- Remote branches start with `remotes/`

:::tip

Use `git branch -a` when working in a team to see branches that other writers have pushed to the remote repository.

:::

**Example result:**

```text
* feature/installation-guide
  feature/api-reference
  main
  remotes/origin/main
  remotes/origin/feature/api-reference
```

---

## Branch Naming Conventions

Good branch names are descriptive and organized. They help your team understand what work is being done.

### Naming Patterns

Use these patterns for branch names:

| Pattern | Purpose | Example |
|---------|---------|---------|
| `feature/` | New documentation or features | `feature/installation-guide` |
| `fix/` | Bug fixes or corrections | `fix/typo-in-readme` |
| `update/` | Updates to existing content | `update/api-docs` |
| `docs/` | Documentation improvements | `docs/add-examples` |

### Good Branch Names

```text
feature/user-authentication-guide
fix/broken-links-chapter-3
update/installation-steps
docs/add-code-examples
```

### Avoid These

```text
new-stuff                # Too vague
temp                     # Sounds temporary
my-work                  # Not descriptive
asdf123                  # Meaningless
```

### Rules for Branch Names

- Use lowercase letters
- Use hyphens to separate words
- Keep names short but descriptive
- Avoid special characters except hyphens

:::note

**Documentation Manager's Tip**

Establish branch naming conventions for your team. Document them in your README or contribution guide. This helps new team members follow the same pattern and keeps the repository organized.

:::

---

## Making Changes on a Branch

Once you're on a branch, all your work stays on that branch.

### Typical Workflow

**Step 1: Switch to your branch**

```bash
git switch feature/installation-guide
```

**Step 2: Edit your documentation files**

Use your editor to make changes.

**Step 3: Check what changed**

```bash
git status
```

**Result:**

```text
On branch feature/installation-guide
Changes not staged for commit:
  modified:   docs/install.md

Untracked files:
  new file:   docs/install-windows.md
```

**Step 4: Stage and commit your changes**

```bash
git add docs/install.md docs/install-windows.md
git commit -m "Add Windows installation guide"
```

**Step 5: Continue working**

Make more changes, commit, repeat.

All changes stay on this branch until you merge.

:::tip

Commit frequently as you make progress. Small, logical commits are easier to review and undo if needed. A good rule of thumb: one commit per feature or fix.

:::

---

## Switching Between Branches

You might need to switch branches to work on different tasks.

### How to Switch Branches While Working

**Scenario:** You're working on `feature/installation-guide` but need to fix a bug on `main`.

**Command:**

```bash
git switch main
```

**What happens:**

- Your changes on `feature/installation-guide` stay saved on that branch
- Your working directory now shows the `main` branch files
- You can make different changes here

**Result:**

```text
Switched to branch 'main'
```

### Important: Commit Before Switching

:::warning

Always commit your changes before switching branches. If you have uncommitted changes, Git will prevent the switch.

:::

If you have uncommitted changes, Git warns you:

```text
error: Your local changes to the following files would be overwritten by checkout:
  docs/install.md
Please commit your changes or stash them before you switch branches.
```

**Solution:** Commit or stash your changes first.

```bash
git commit -m "Work in progress on installation guide"
```

---

## Deleting Branches

When you finish with a branch, you can delete it to keep your repository clean.

### How to Delete a Local Branch

**Command:**

```bash
git branch -d feature/installation-guide
```

**What it does:**

- Deletes the local branch
- Only works if the branch is fully merged
- Prevents accidental deletion of important work

**Result:**

```text
Deleted branch feature/installation-guide (was abc1234).
```

### Force Delete a Branch

If you want to delete a branch that hasn't been merged:

```bash
git branch -D feature/old-work
```

:::danger

Use `-D` carefully. Force-deleting an unmerged branch permanently removes work that hasn't been saved anywhere else.

Only use force delete if you're absolutely sure the branch work is not needed.

:::

---

## Common Branch Workflows

### Workflow 1: Feature Branch Workflow

This is the most common workflow for documentation teams.

**Step 1: Create a feature branch**

```bash
git switch -c feature/new-section
```

**Step 2: Make changes**

Edit documentation files, commit changes.

**Step 3: Get review**

Push branch to GitHub, create a pull request.

**Step 4: Merge when approved**

After review, merge to `main`.

**Step 5: Delete the branch**

```bash
git branch -d feature/new-section
```

### Workflow 2: Multiple Branches

Work on several documentation projects simultaneously.

```bash
# Start on main
git switch main

# Create branch for API docs
git switch -c feature/api-docs
# Make changes, commit

# Switch back to main
git switch main

# Create branch for user guide
git switch -c feature/user-guide
# Make changes, commit

# Switch between branches as needed
git switch feature/api-docs
git switch feature/user-guide
```

### Workflow 3: Bug Fix Branch

Fix issues quickly without disrupting other work.

```bash
git switch main
git switch -c fix/broken-link
# Fix the link, commit
git switch main
# Merge when ready
```

---

## Understanding Branch Safety

Git protects you from losing work.

### Git Won't Let You Lose Work

If you switch branches with uncommitted changes, Git stops you:

```text
error: Your local changes to the following files would be overwritten by checkout:
  docs/guide.md
```

**Solution:**

- Commit the changes, or
- Stash the changes temporarily (see [Stash](./Stash.md))

### Recovering Deleted Branches

If you accidentally delete a branch, don't panic. Git keeps a record.

:::tip

Git has a safety net. Deleted branches can often be recovered using `git reflog` as long as they were pushed to the remote or had commits made to them.

:::

**Command to see recent branch deletions:**

```bash
git reflog
```

**To recover a deleted branch:**

```bash
git checkout -b feature/installation-guide abc1234
```

Where `abc1234` is the commit hash from reflog.

---

## Best Practices

- **Create a branch for each task.** Don't mix different work on the same branch.
- **Use descriptive names.** Other writers should understand what you're working on.
- **Commit frequently.** Small, logical commits are easier to review and undo.
- **Merge when ready.** Don't leave branches unmerged for weeks.
- **Delete merged branches.** Keep your repository organized.
- **Never force-push to main.** Respect the shared main branch.
- **Use branches for collaboration.** Let others review your work before merging.

:::note

**Documentation Manager's Advice**

In a team, agree on branch naming conventions and deletion policies. Some teams keep release branches permanently, while others delete them after merging. Document your team's workflow in a contribution guide.

:::

---

## Summary

In this lesson, you learned how to:

- Create branches for independent work.
- Switch between branches.
- Name branches clearly.
- Make changes on branches.
- Delete branches when finished.
- Understand branch workflows.
- Protect your work with Git safety features.

Branches are the foundation of collaborative documentation work. They keep the main documentation stable while allowing your team to work independently.

---

## Exercise

1. Create a new branch called `feature/my-section`.
2. Switch to that branch.
3. Create or edit a documentation file.
4. Commit the changes.
5. Switch back to `main`.
6. Create another branch called `fix/typo-in-readme`.
7. Make a small change and commit.
8. List all branches.
9. Delete one of the branches.

---

## Common mistakes

<details>
<summary><strong>1. Forgetting to switch to the branch</strong></summary>

**Cause**

Created a branch but made changes on `main` instead.

**Solution**

Always verify which branch you're on with `git branch`. The current branch has an asterisk.

Switch to the correct branch before making changes.

</details>

<details>
<summary><strong>2. Branch names with spaces or special characters</strong></summary>

**Cause**

Branch name used spaces: `feature/new guide` or special characters.

**Solution**

Use lowercase letters and hyphens only: `feature/new-guide`.

Rename the branch if needed: `git branch -m old-name new-name`.

</details>

<details>
<summary><strong>3. Deleting the wrong branch</strong></summary>

**Cause**

Accidentally deleted a branch with important work.

**Solution**

Use `git reflog` to find the commit hash and restore the branch.

Always verify branch names before deleting.

</details>

<details>
<summary><strong>4. Switching branches with uncommitted changes</strong></summary>

**Cause**

Git prevented switching because of unsaved changes.

**Solution**

Commit or stash changes before switching: `git commit -m "message"`.

If you have temporary work, use stash: `git stash`.

</details>

<details>
<summary><strong>5. Creating too many branches</strong></summary>

**Cause**

Created many branches without merging or cleaning up.

**Solution**

Merge and delete branches regularly. Keep only active branches.

Use branch naming patterns to organize work.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a Git branch?</strong></summary>

A branch is a separate line of development in a Git repository. It allows you to work independently without affecting other branches, especially the main branch.

</details>

<details>
<summary><strong>2. How do you create and switch to a branch at the same time?</strong></summary>

Use this command:

```bash
git checkout -b branch-name
```

Or with newer Git versions:

```bash
git switch -c branch-name
```

</details>

<details>
<summary><strong>3. Why should you always commit before switching branches?</strong></summary>

If you have uncommitted changes, switching branches could overwrite your work. Git requires you to commit or stash changes first to protect your work.

</details>

<details>
<summary><strong>4. What is a good branch naming convention?</strong></summary>

Use patterns like:

- `feature/description` - for new work
- `fix/description` - for bug fixes
- `update/description` - for updates
- `docs/description` - for documentation improvements

Use lowercase, hyphens for spaces, and descriptive names.

</details>

<details>
<summary><strong>5. How do you see all branches in your repository?</strong></summary>

Use:

```bash
git branch
```

To see local branches only, or:

```bash
git branch -a
```

To see all branches including remote branches.

</details>

<details>
<summary><strong>6. What does the asterisk (*) mean in `git branch` output?</strong></summary>

The asterisk marks the branch you're currently on. For example, if you see `* feature/guide`, you're on the `feature/guide` branch.

</details>

<details>
<summary><strong>7. How do you delete a branch?</strong></summary>

Use:

```bash
git branch -d branch-name
```

This only works if the branch is merged. To force delete an unmerged branch:

```bash
git branch -D branch-name
```

</details>

<details>
<summary><strong>8. Can you recover a deleted branch?</strong></summary>

Yes. Use `git reflog` to see recent deletions, find the commit hash, and restore the branch with:

```bash
git checkout -b branch-name commit-hash
```

</details>

---

## Next Lesson

When ready, proceed to the next lesson on [Commits](./Commits.md) to learn how to save your documentation changes.