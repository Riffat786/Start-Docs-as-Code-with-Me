---
title: Rebasing Branches in Git
sidebar_position: 6
description: Learn how to rebase branches to maintain a clean project history and update feature branches.
---

# Rebasing Branches in Git

> **Estimated reading time:** 24 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what rebasing means and when to use it.
- Rebase a feature branch onto the main branch.
- Understand how rebasing differs from merging.
- Resolve conflicts during rebase.
- Use interactive rebase to clean up commits.
- Apply rebasing in documentation projects.
- Understand when NOT to rebase.
- Follow rebase best practices.

---

## What Is Rebasing?

Rebasing replays your commits on top of another branch. It rewrites your project history to create a linear timeline instead of branching lines.

### Rebase vs. Merge

**Merge:**
- Creates a merge commit
- History shows branches merging together
- Non-destructive (doesn't change existing commits)
- Recommended for team work

**Rebase:**
- Replays commits one by one
- Creates a linear history
- Changes commit IDs (rewrites history)
- Riskier in teams, better for personal work

### Visual Comparison

**With Merge:**
```
main:    A ─── B ─── M (merge commit)
              ╱       ╲
feature:    C ─── D
```

**With Rebase:**
```
main:    A ─── B
feature:            C' ─── D' (replayed commits)
```

:::important

Rebasing changes commit history. Never rebase commits that have been pushed to a shared branch. This can break other team members' work.

:::

---

## Before You Start

Make sure you have:

- A Git repository with branches
- Understanding of Git branches and commits
- A feature branch with commits ready to update
- Familiarity with Git merge (see [Merge lesson](./Merge.md))

:::warning

Rebasing is more advanced than merging. If you're new to Git, stick with merging first. Only use rebase when you understand the consequences.

:::

---

## When to Use Rebase

### Good Use Cases

**Personal branches:**

You're working alone on a feature branch that hasn't been shared.

```bash
git rebase main
```

This updates your branch with latest changes from main.

**Keeping history clean:**

Before merging, rebase to get a linear history.

**Cleaning up commits:**

Use interactive rebase to organize commits before sharing.

### Bad Use Cases

**Shared branches:**

❌ Never rebase a branch that multiple people are working on.

❌ Never rebase a branch that's already been pushed and shared.

❌ Never rebase branches that others depend on.

:::danger

Rebasing shared commits breaks other team members' work. It can cause severe collaboration problems.

:::

---

## Your First Rebase

### Scenario

You're working on `feature/update-docs`. Meanwhile, the main branch received new commits. You want to update your branch with those changes.

### How to Rebase a Branch

**Step 1: Fetch latest changes**

```bash
git fetch origin
```

Gets the latest changes from remote without merging.

**Step 2: Switch to your feature branch**

```bash
git switch feature/update-docs
```

**Step 3: Rebase onto main**

```bash
git rebase origin/main
```

**What it does:**

- Takes each commit from `feature/update-docs`
- Removes them temporarily
- Updates your branch to the latest `main`
- Replays each commit on top of `main`
- Updates your local branch

**Result:**

```text
Successfully rebased and updated refs/heads/feature/update-docs.
```

Your commits now appear on top of the latest main branch.

:::tip

Use `git rebase origin/main` to rebase onto the remote version. This ensures you have the absolute latest.

:::

### Verify the Rebase

Check the history:

```bash
git log --oneline -5
```

**Result:**

```text
abc1234 Update API documentation
def5678 Add new examples
ghi9012 Fix formatting
jkl3456 Latest commit from main
mno7890 Another main branch commit
```

Your commits are now on top of main's commits.

---

## Understanding Rebase Conflicts

Just like merging, rebasing can create conflicts.

### When Conflicts Happen During Rebase

Git tries to replay each commit. If a commit conflicts with changes from main, it stops.

**Example:**

- Main: Changed line 10 of `api.md` to version 2.0
- Your commit: Also changed line 10 to version 3.0
- Result: Conflict (both changed the same line)

### Conflict During Rebase

When conflict occurs:

```text
CONFLICT (content): Merge conflict in docs/api.md
error: could not apply def5678... Add authentication section
hint: Resolve all conflicts manually, then run "git rebase --continue".
```

Git stops and waits for you to resolve the conflict.

:::warning

During rebase, conflicts need to be resolved for each conflicting commit. This can be tedious with many conflicts.

:::

---

## Resolving Rebase Conflicts

### Step-by-Step Resolution

**Step 1: Identify the conflicting file**

Git tells you which file has conflicts.

**Step 2: Open the file and resolve**

Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

Choose which version to keep or combine.

**Step 3: Remove conflict markers**

Clean up the file completely.

**Step 4: Stage the resolved file**

```bash
git add docs/api.md
```

**Step 5: Continue the rebase**

```bash
git rebase --continue
```

Git replays the next commit (if any conflicts exist, repeat).

**Step 6: Rebase completes**

When all commits are replayed:

```text
Successfully rebased and updated refs/heads/feature/update-docs.
```

### Aborting a Rebase

If conflicts are too complex, abort and go back:

```bash
git rebase --abort
```

Your branch returns to its original state before the rebase.

:::tip

It's okay to abort. If rebase seems problematic, stop and use merge instead.

:::

---

## Interactive Rebase

Interactive rebase lets you edit, reorder, or combine commits before applying them.

### When to Use Interactive Rebase

- Clean up messy commit history
- Combine related commits
- Improve commit messages
- Remove accidental commits
- Prepare for pull request review

### How to Use Interactive Rebase

**Command:**

```bash
git rebase -i origin/main
```

The `-i` flag means "interactive."

**What happens:**

Git opens an editor showing all commits between your branch and main:

```text
pick abc1234 Update API documentation
pick def5678 Add new examples
pick ghi9012 Fix formatting

# Rebase mno7890..ghi9012 onto mno7890 (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
```

### Interactive Rebase Commands

| Command | What it does |
|---------|-------------|
| `pick` | Use the commit as-is |
| `reword` | Use commit but edit message |
| `squash` (or `s`) | Combine with previous commit |
| `fixup` (or `f`) | Combine, discard message |
| `drop` (or `d`) | Remove the commit |

### Example: Squash Commits

You have three commits but want to combine them:

**Before interactive rebase:**

```text
pick abc1234 Update API documentation
pick def5678 Add new examples
pick ghi9012 Fix formatting
```

**Change to:**

```text
pick abc1234 Update API documentation
squash def5678 Add new examples
squash ghi9012 Fix formatting
```

**Result:**

All three commits combine into one.

### Example: Reword Commit Message

**Before:**

```text
pick abc1234 update docs
```

**Change to:**

```text
reword abc1234 update docs
```

Save and close. Git opens an editor for the message. Update it:

```text
Update API documentation with new endpoints and authentication section
```

Save. The commit message is updated.

---

## Common Rebase Scenarios

### Scenario 1: Update Feature Branch with Latest Main

You started work on `feature/new-docs` but main has advanced.

```bash
git switch feature/new-docs
git rebase origin/main
```

Your commits are now on top of the latest main.

### Scenario 2: Clean Up Commits Before Merging

You have messy commits: "WIP", "typo fix", "more updates".

```bash
git rebase -i origin/main
```

Squash related commits into logical chunks.

### Scenario 3: Reorder Commits

You committed in wrong order:

1. Add feature (commit A)
2. Fix bug (commit B)
3. Add related feature (commit C)

Better order:

1. Add feature (A)
2. Add related feature (C)
3. Fix bug (B)

Use interactive rebase:

```bash
git rebase -i origin/main
```

Reorder:

```text
pick abc1234 Add feature
pick ghi9012 Add related feature
pick def5678 Fix bug
```

### Scenario 4: Remove a Commit

You accidentally committed something you don't want.

```bash
git rebase -i origin/main
```

Change the commit:

```text
drop abc1234 Accidental commit
```

The commit is removed.

---

## Rebase Best Practices

### Safe Rebase Rules

- **Only rebase local branches.** Never rebase commits already on remote.
- **Rebase before pushing.** Rebase locally, then push once.
- **Communicate with teammates.** If others are on the branch, tell them before rebasing.
- **Never force-push without agreement.** Rebase changes history; force-push can break collaboration.
- **Use merge for shared branches.** Keep public history stable.

:::note

**Documentation Manager's Tip**

For team documentation projects, establish a rule: only rebase on personal branches. Use merge for anything shared. This prevents accidents and keeps collaboration smooth.

:::

### When in Doubt

If you're unsure:

- Use merge instead of rebase
- Merge is safer and simpler for teams
- Rebase is for personal optimization

### Before and After Rebase

**Before rebase:**

```bash
git log --oneline
```

Note the commit IDs.

**After rebase:**

```bash
git log --oneline
```

Commit IDs will have changed. This is normal; rebasing changes commits.

:::warning

If you've already pushed your branch with the old commit IDs, rebasing locally means you'll need to force-push. This is dangerous in teams.

:::

---

## Rebase vs. Merge in Practice

### Use Merge When

- Working in a team
- Branch has been shared
- Commits have been pushed to remote
- You want to preserve complete history
- Collaboration is key

```bash
git merge feature/branch
```

### Use Rebase When

- Working alone
- Branch is local only
- Commits haven't been pushed
- You want a clean, linear history
- Preparing for pull request review

```bash
git rebase main
```

---

## Common Rebase Mistakes

<details>
<summary><strong>1. Rebasing a shared branch</strong></summary>

**Cause**

Rebased a branch that teammates are also working on.

**Problem**

Their local copies become out of sync with remote. They get confusing error messages.

**Solution**

Only rebase branches you're working on alone. Use merge for anything shared.

**If it happened:**

Tell teammates to run:

```bash
git pull --rebase
```

Or have them reset their local branch to remote.

</details>

<details>
<summary><strong>2. Force-pushing after rebase without warning</strong></summary>

**Cause**

Rebased locally and force-pushed without telling the team.

**Problem**

Teammates' branches become broken. Their commits are "lost."

**Solution**

Before force-pushing:

1. Tell the team
2. Make sure no one else is on the branch
3. Document why you're force-pushing

Better yet, use merge instead.

</details>

<details>
<summary><strong>3. Losing commits during rebase</strong></summary>

**Cause**

Used `drop` in interactive rebase and removed important commits.

**Problem**

Commits are gone from history.

**Solution**

If you haven't pushed:

```bash
git rebase --abort
```

Redo the rebase more carefully.

If already pushed, create a revert commit (if needed).

</details>

<details>
<summary><strong>4. Getting stuck in rebase**</strong></summary>

**Cause**

Rebase conflict occurred and you're not sure what to do.

**Problem**

The rebase is paused waiting for resolution.

**Solution**

You have options:

1. Resolve the conflict and `git rebase --continue`
2. Abort the rebase: `git rebase --abort`

It's okay to abort. Use merge instead if rebase is too complex.

</details>

<details>
<summary><strong>5. Rebasing main branch**</strong></summary>

**Cause**

Accidentally ran `git rebase` while on main.

**Problem**

Can disrupt the main branch history that others depend on.

**Solution**

Don't rebase main. Main should only be updated via merges.

Check your current branch before rebasing:

```bash
git branch
```

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is rebasing?</strong></summary>

Rebasing replays your commits on top of another branch. It rewrites history to create a linear timeline instead of showing branches merging together. Unlike merge, rebase changes commit IDs because it's rewriting history.

</details>

<details>
<summary><strong>2. What's the difference between rebase and merge?</strong></summary>

**Merge:**
- Creates a merge commit
- Preserves all history including branches
- Non-destructive
- Safe for shared work

**Rebase:**
- Replays commits one by one
- Creates a linear history
- Changes commit IDs (rewrites history)
- Risky for shared branches

</details>

<details>
<summary><strong>3. When should you use rebase instead of merge?</strong></summary>

Use rebase when:

- Working alone on a personal branch
- Branch hasn't been pushed to remote
- You want a clean, linear history
- Preparing commits for a pull request

Never rebase if the branch is shared or has been pushed.

</details>

<details>
<summary><strong>4. What happens if you rebase a shared branch?</strong></summary>

It breaks other team members' work. Their local copies become out of sync with the remote. They get confusing error messages. Their commits may appear "lost" or duplicated.

Only rebase branches you're working on alone.

</details>

<details>
<summary><strong>5. How do you resolve conflicts during rebase?</strong></summary>

1. Git stops and shows the conflicting file
2. Open the file and resolve conflicts (remove markers)
3. Stage the file: `git add filename`
4. Continue rebase: `git rebase --continue`
5. Repeat for any additional conflicts
6. When done, the rebase completes

You can abort at any time with `git rebase --abort`.

</details>

<details>
<summary><strong>6. What is interactive rebase?</strong></summary>

Interactive rebase (using `-i` flag) lets you edit, reorder, combine, or remove commits before applying them. It's useful for cleaning up commit history before sharing work.

Example: `git rebase -i origin/main`

</details>

<details>
<summary><strong>7. What does "squash" mean in interactive rebase?</strong></summary>

Squash combines a commit with the previous one. The commits merge into one, and you can choose which message to keep or combine messages.

Useful for grouping related commits together before a pull request.

</details>

<details>
<summary><strong>8. What should you do if you accidentally rebased the wrong branch?</strong></summary>

If you haven't pushed yet, abort:

```bash
git rebase --abort
```

Your branch returns to before the rebase.

If already pushed, it's more complicated. Don't force-push without understanding the consequences. Talk to your team.

</details>

---

## Summary

In this lesson, you learned how to:

- Understand what rebasing means and how it differs from merging.
- Rebase a feature branch onto the main branch.
- Resolve conflicts during rebase.
- Use interactive rebase to clean up commits.
- Understand when to use (and NOT use) rebase.
- Follow rebase best practices.

Rebasing is a powerful tool for keeping history clean, but it's best used on personal branches. For team documentation work, merge is usually the safer choice.

---

## Exercise

1. Create a new branch: `git switch -c practice/rebase-test`
2. Make 2-3 commits to your branch
3. Switch to main: `git switch main`
4. Make 1 new commit on main
5. Switch back to your branch: `git switch practice/rebase-test`
6. Rebase onto main: `git rebase origin/main`
7. View the history: `git log --oneline -5`
8. Try interactive rebase: `git rebase -i origin/main`
9. In the editor, try changing `pick` to `reword` for one commit
10. Update the commit message and save
11. View final history: `git log --oneline -5`

---

## Common mistakes

<details>
<summary><strong>1. Rebasing without fetching latest**</strong></summary>

**Cause**

Rebased onto local main that's outdated. Remote main has newer commits.

**Solution**

Always fetch first:

```bash
git fetch origin
git rebase origin/main
```

This ensures you rebase onto the absolute latest version.

</details>

<details>
<summary><strong>2. Force-pushing without communication**</strong></summary>

**Cause**

Rebased and force-pushed without telling teammates that the branch history changed.

**Problem**

Breaks other team members' work on the same branch.

**Solution**

Communicate! Before force-pushing after a rebase:

1. Tell the team the branch will be rebased
2. Ensure no one else is actively using it
3. Give them time to back up their work

Better: Don't rebase shared branches at all.

</details>

<details>
<summary><strong>3. Getting lost in interactive rebase**</strong></summary>

**Cause**

Interactive rebase opened in editor and changes were confusing.

**Problem**

Made unintended changes to commits.

**Solution**

Don't save if unsure. Close the editor without changes:

- Vim: `:q!` (quit without saving)
- Nano: `Ctrl+X` then `N` (don't save)

Rebase is cancelled. Try again.

Or simply abort:

```bash
git rebase --abort
```

</details>

<details>
<summary><strong>4. Rebasing main branch**</strong></summary>

**Cause**

Accidentally ran rebase while on main branch.

**Problem**

Can disrupt shared main branch history.

**Solution**

Always check current branch:

```bash
git branch
```

Before rebasing, switch to your feature branch:

```bash
git switch feature/branch
git rebase main
```

Never rebase main itself.

</details>

<details>
<summary><strong>5. Confusing rebase conflicts with merge conflicts**</strong></summary>

**Cause**

Rebase conflicts look similar to merge conflicts but behave differently.

**Problem**

Resolving them incorrectly or misunderstanding the rebase process.

**Solution**

Remember: rebase replays each commit. Each conflict is for one specific commit. Resolve and continue.

When in doubt, abort and use merge instead.

</details>

---

## When NOT to Rebase

This is important. Never rebase if:

- ❌ The branch has been pushed to remote
- ❌ Multiple people are working on the branch
- ❌ The branch is the main/master branch
- ❌ You don't understand the consequences
- ❌ You're in a shared repository and unsure of the rules

**When NOT to rebase, use merge instead:**

```bash
git merge feature/branch
```

Merge is safer, simpler, and preserves history.

:::danger

Rebase is powerful but dangerous in teams. When in doubt, merge.

:::

---

## Next Lesson

When you're comfortable with merging and rebasing, proceed to [Tags](./Tags.md) to learn how to mark important versions of your documentation project.