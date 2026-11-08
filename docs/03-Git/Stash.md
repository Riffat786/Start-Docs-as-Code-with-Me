---
title: Using Git Stash for Temporary Work
sidebar_position: 8
description: Learn how to temporarily save work-in-progress changes without committing them.
---

# Using Git Stash for Temporary Work

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what stashing is and when to use it.
- Stash changes temporarily.
- Retrieve stashed work.
- Manage multiple stashes.
- Apply stashes cleanly.
- Use stash in documentation workflows.
- Recover accidentally lost stashes.

---

## What Is Git Stash?

Stashing saves your work-in-progress changes temporarily without committing them. Think of it as putting your changes in a safe box while you work on something else.

### Why Use Stash?

Stash is useful when you need to:

- Switch branches but haven't finished your current work
- Pull latest changes from remote without committing
- Quickly fix a bug on another branch
- Save work without a formal commit
- Clean up your working directory temporarily

### Stash vs. Commit

**Commit:**
- Permanent change to repository
- Creates a checkpoint with message
- Part of project history
- Visible to team members

**Stash:**
- Temporary storage
- Not part of project history
- Only visible to you
- Can be discarded or applied later

:::important

Stash is for temporary work. Important changes should be committed, not stashed.

:::

---

## Before You Start

Make sure you have:

- A Git repository with uncommitted changes
- Understanding of Git branches and commits
- Changes you want to save temporarily

:::note

**For Beginners**

Think of stash as a temporary shelf where you put your work. You can leave it there, come back to it later, or throw it away.

:::

---

## Your First Stash

### Scenario

You're working on `feature/api-docs`. A colleague asks you to quickly check something on `main` branch. You want to save your changes without committing.

### How to Stash Changes

**Step 1: Check what you're stashing**

```bash
git status
```

**Result:**

```text
On branch feature/api-docs
Changes not staged for commit:
  modified:   docs/api.md
  modified:   docs/examples.md

Untracked files:
  docs/images/diagram.png
```

**Step 2: Stash your changes**

```bash
git stash
```

**What it does:**

- Saves all modified files
- Clears your working directory
- Removes changes from tracked files
- Prepares you to switch branches

**Result:**

```text
Saved working directory and index state WIP on feature/api-docs: abc1234 Last commit message
```

**Step 3: Verify the stash**

```bash
git status
```

**Result:**

```text
On branch feature/api-docs
nothing to commit, working tree clean
```

Your changes are now safely stashed.

:::tip

After stashing, your working directory is clean. You can safely switch branches or pull changes.

:::

---

## Retrieving Stashed Work

After fixing the bug or checking on main, retrieve your work.

### How to Apply Stashed Changes

**Option 1: Apply and keep stash**

```bash
git stash apply
```

**What it does:**

- Applies stashed changes to current branch
- Keeps stash in the stash list
- Useful if you want to apply to multiple branches

**Result:**

```text
On branch feature/api-docs
Changes not staged for commit:
  modified:   docs/api.md
  modified:   docs/examples.md
```

Your changes are back.

### Option 2: Apply and remove stash

```bash
git stash pop
```

**What it does:**

- Applies stashed changes
- Removes stash from the list
- Cleaner if you only apply once

**Result:**

Same as `apply`, but stash is gone.

:::tip

Use `pop` when you're done with the stash. Use `apply` if you might need it again.

:::

---

## Stashing Untracked Files

By default, stash only saves tracked files. Untracked files (new files) are left behind.

### How to Stash Untracked Files

**Include untracked files:**

```bash
git stash -u
```

Or:

```bash
git stash --include-untracked
```

**What it does:**

- Stashes both modified AND new files
- Keeps your directory completely clean
- Best for switching branches

**Example:**

```bash
git status
```

Shows modified files and new files. Then:

```bash
git stash -u
```

All changes are stashed.

:::note

Use `-u` when you want to completely clean up your working directory before switching branches.

:::

---

## Managing Multiple Stashes

You can create multiple stashes if needed.

### Creating Named Stashes

**Default stash (no name):**

```bash
git stash
```

**Stash with description:**

```bash
git stash push -m "Work on API authentication section"
```

**What it does:**

- Creates stash with a description
- Easier to remember what's in the stash
- Helpful when you have multiple stashes

### Listing Stashes

```bash
git stash list
```

**Result:**

```text
stash@{0}: On feature/api-docs: Work on API authentication section
stash@{1}: WIP on feature/api-docs: abc1234 Last commit message
stash@{2}: On main: Update documentation homepage
```

Each stash has an ID: `stash@{0}`, `stash@{1}`, etc.

### Applying Specific Stash

Apply a stash that's not the most recent:

```bash
git stash apply stash@{1}
```

Or pop (remove after applying):

```bash
git stash pop stash@{1}
```

:::tip

Name your stashes when creating them. It makes finding the right one much easier later.

:::

---

## Common Stash Scenarios

### Scenario 1: Quick Branch Switch

You're on `feature/docs` but need to check `main`.

```bash
git stash
git switch main
# ... check something ...
git switch feature/docs
git stash pop
```

Your work is safely saved.

### Scenario 2: Pull Latest Changes

You have uncommitted work and need to pull.

```bash
git stash
git pull origin main
git stash pop
```

Your changes are preserved.

### Scenario 3: Fix Bug on Different Branch

You're working on feature but find a bug in main.

```bash
git stash push -m "WIP: API documentation updates"
git switch main
git switch -c fix/critical-bug
# ... fix bug, commit ...
git switch feature/api-docs
git stash pop
```

Your feature work is safe while you fix the bug.

### Scenario 4: Multiple Stashes for Multiple Branches

```bash
git stash push -m "Incomplete: API section"
git switch different-branch
git stash push -m "Incomplete: Examples section"
git switch first-branch
git stash pop
# Apply the first stash
```

Each branch has its own work saved.

---

## Cleaning Up Stashes

Remove stashes you no longer need.

### Delete a Specific Stash

```bash
git stash drop stash@{0}
```

**What it does:**

- Removes the stash permanently
- Cannot be recovered
- Use carefully

### Delete All Stashes

```bash
git stash clear
```

**What it does:**

- Removes ALL stashes
- Cannot be undone
- Only do if you're sure

:::warning

Once deleted, stashes cannot be recovered. Be certain before deleting.

:::

---

## Viewing Stashed Changes

See what's in a stash before applying it.

### View Stash Contents

```bash
git stash show stash@{0}
```

**Result:**

```text
 docs/api.md      | 45 ++++++++++++++++++
 docs/examples.md | 12 +++++
 2 files changed, 57 insertions(+)
```

Shows files and changes count.

### View Detailed Diff

```bash
git stash show -p stash@{0}
```

**What it does:**

- Shows actual line changes
- `-p` means "patch" (full details)
- Helpful to verify before applying

**Result:**

```text
diff --git a/docs/api.md b/docs/api.md
index abc1234..def5678 100644
--- a/docs/api.md
+++ b/docs/api.md
@@ -10,3 +10,48 @@
+
+## New Section
+Content here...
```

---

## Stash Best Practices

### When to Stash

- Switching branches with uncommitted work
- Pulling changes when you have local work
- Temporarily saving incomplete work
- Quick context switches

### When NOT to Stash

- ❌ Don't stash important work permanently (commit instead)
- ❌ Don't rely on stash as your only backup (push to remote)
- ❌ Don't stash work and forget about it
- ❌ Don't use stash instead of branches

### Stash Workflow

1. **Stash with a name** - Always use `-m "description"`
2. **Do other work** - Switch branches, pull, etc.
3. **Apply quickly** - Don't leave stashes sitting for weeks
4. **Clean up** - Remove stashes you don't need

:::note

**Documentation Manager's Tip**

Encourage team members to name stashes clearly. Stashes with generic names like "WIP" can be confusing weeks later.

:::

---

## Troubleshooting Stash Issues

### Stash Apply Has Conflicts

When applying stash causes conflicts:

```bash
git stash show -p stash@{0}
```

View what's in the stash, then resolve manually.

Or use:

```bash
git stash drop stash@{0}
```

Remove it if no longer needed.

### Accidentally Dropped Stash

If you accidentally deleted a stash:

```bash
git reflog
```

Shows recent operations. Stashes that were dropped still appear here with their ID. You might be able to recover it within a short time window.

### Stash Contains Wrong Changes

Applied the wrong stash?

```bash
git reset --hard HEAD
git stash pop stash@{correct-one}
```

Reset and apply the correct stash.

---

## Stash vs. Branches

Sometimes a branch is better than a stash.

### Use Stash When

- Interruption is brief
- Just switching context for minutes
- Don't need to share work
- Temporary pause only

### Use Branch When

- Work takes hours or days
- Multiple commits needed
- Work might be shared later
- Needs to be part of history

:::important

For significant work, create a branch instead of stashing. Branches are meant for this.

:::

---

## Summary

In this lesson, you learned how to:

- Understand what stashing is and why it matters.
- Stash changes temporarily.
- Retrieve stashed work.
- Manage multiple stashes.
- Use stash in real workflows.
- Clean up stashes safely.

Stash is a powerful tool for managing interruptions and context switches. Use it for temporary work, but commit important changes.

---

## Exercise

1. Make changes to at least 2 files: `git status`
2. Create a named stash: `git stash push -m "WIP: Documentation updates"`
3. Verify stash created: `git stash list`
4. Check status is clean: `git status`
5. View stash contents: `git stash show -p stash@{0}`
6. Apply stash: `git stash apply stash@{0}`
7. Create another stash with different changes
8. List all stashes: `git stash list`
9. Apply a specific stash: `git stash pop stash@{1}`
10. Delete remaining stash: `git stash drop stash@{0}`

---

## Common mistakes

<details>
<summary><strong>1. Stashing and forgetting about it</strong></summary>

**Cause**

Created stash to fix something quickly, then forgot it existed.

**Solution**

Check `git stash list` regularly. Apply or delete stashes you don't need.

Better: Name stashes clearly so you remember what's in them.

</details>

<details>
<summary><strong>2. Stashing instead of committing important work</strong></summary>

**Cause**

Saved work in stash thinking it's safe, then accidentally deleted it.

**Solution**

Stash is temporary only. Important work must be committed.

If work is significant, create a branch instead.

</details>

<details>
<summary><strong>3. Applying stash to wrong branch</strong></summary>

**Cause**

Switched branches and applied stash meant for different branch.

**Problem**

Changes end up in wrong place, merge conflicts possible.

**Solution**

Check current branch with `git branch` before applying.

View stash contents first: `git stash show -p stash@{0}`

</details>

<details>
<summary><strong>4. Stashing untracked files accidentally</strong></summary>

**Cause**

New files not stashed because default stash doesn't include untracked.

**Problem**

Switch branches expecting clean directory, but new files remain.

**Solution**

Use `-u` flag when creating stash: `git stash -u`

</details>

<details>
<summary><strong>5. Losing stash due to disk space or cleanup</strong></summary>

**Cause**

Stash stored locally only. If repo deleted or git gc runs, stash lost.

**Problem**

Important temporary work is gone.

**Solution**

Don't rely on stash as backup. For important work, commit to a branch.

Push to remote if sharing with team.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is Git stash used for?</strong></summary>

Git stash temporarily saves your work-in-progress changes without committing them. It's useful for saving work when you need to switch branches, pull changes, or quickly work on something else.

</details>

<details>
<summary><strong>2. What's the difference between stash and commit?</strong></summary>

**Commit** is permanent and creates a checkpoint in project history. **Stash** is temporary storage that's only visible to you and not part of history. Use commits for important work and stash for temporary pauses.

</details>

<details>
<summary><strong>3. How do you create a stash?</strong></summary>

Use `git stash` to save uncommitted changes. To create a named stash: `git stash push -m "Description of work"`

Named stashes are easier to remember later.

</details>

<details>
<summary><strong>4. How do you retrieve stashed work?</strong></summary>

Use `git stash apply` to apply stash without removing it, or `git stash pop` to apply and remove it. To apply a specific stash: `git stash apply stash@{0}`

</details>

<details>
<summary><strong>5. What does the `-u` flag do when stashing?</strong></summary>

The `-u` or `--include-untracked` flag includes untracked files (new files) in the stash. By default, stash only saves tracked files. Use `-u` when you want to completely clean your directory.

</details>

<details>
<summary><strong>6. How do you see what's in a stash before applying it?</strong></summary>

Use `git stash show stash@{0}` to see files changed, or `git stash show -p stash@{0}` to see actual line changes.

</details>

<details>
<summary><strong>7. How do you delete a stash?</strong></summary>

Use `git stash drop stash@{0}` to delete a specific stash, or `git stash clear` to delete all stashes. Deleted stashes cannot be recovered, so be careful.

</details>

<details>
<summary><strong>8. When should you use stash vs. creating a branch?</strong></summary>

Use stash for brief interruptions (minutes to hours). Use a branch for significant work that takes hours or days, or if you might share it later. Branches are better for substantial work.

</details>

---

## Next Lesson

When you're comfortable with stash, proceed to [Undo](./Undo.md) to learn how to recover from mistakes in Git.