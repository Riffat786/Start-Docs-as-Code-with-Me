---
title: Undoing Changes in Git
sidebar_position: 10
description: Learn how to recover from mistakes in Git and undo changes safely.
---

# Undoing Changes in Git

> **Estimated reading time:** 22 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand different ways to undo changes in Git.
- Unstage files without losing changes.
- Discard uncommitted changes.
- Undo commits without losing work.
- Revert commits for shared branches.
- Reset to previous states safely.
- Recover deleted commits.
- Apply undo strategies in documentation workflows.

---

## What Does "Undo" Mean in Git?

Git offers many ways to undo. The right approach depends on what you want to undo and whether the change is committed or shared.

### Undo Scenarios

| Scenario | What Happened | What You Want |
|----------|--------------|---------------|
| Staged wrong file | File added to staging area | Remove from staging, keep changes |
| Wrong changes in working directory | Modified file locally | Discard changes, revert to saved |
| Wrong commit message | Committed with bad message | Fix the message |
| Wrong commit content | Committed wrong changes | Undo the commit, keep changes |
| Shared wrong commit | Pushed to remote | Create new commit that undoes it |
| Want to go back in time | Multiple commits ahead | Reset to older state |

Different scenarios need different commands.

### Key Principle: Data Safety

Git is designed to protect your work. Most undo operations:

- Don't permanently delete your work
- Keep changes available for recovery
- Preserve history for investigation

:::important

Nearly everything in Git can be recovered. Mistakes are recoverable. Be confident in trying undo operations.

:::

---

## Before You Start

Make sure you have:

- A Git repository with commit history
- Understanding of commits, staging, and branches
- Changes you want to undo (or a test repository)

:::note

**For Beginners**

Think of undo operations as having multiple safeguards. Most don't destroy data — they just reorganize it or create new commits to reverse changes.

:::

---

## Undoing Uncommitted Changes

These are the safest undo operations. No commits are affected.

### Scenario 1: Unstage a File

You staged a file by mistake.

**Example:**

```bash
git status
```

**Result:**

```text
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   docs/api.md
        modified:   docs/examples.md

Changes not staged for commit:
  (use "git restore <file>..." to discard changes)
        modified:   docs/wrong-file.md
```

You staged `api.md` and `examples.md`, but also made changes to `wrong-file.md`.

**How to Unstage**

```bash
git restore --staged docs/api.md
```

**What it does:**

- Removes `api.md` from staging area
- Keeps your changes in the working directory
- File moves from "staged" to "not staged"

**Result:**

```bash
git status
```

Shows:

```text
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   docs/examples.md

Changes not staged for commit:
  (use "git restore <file>..." to discard changes)
        modified:   docs/api.md
        modified:   docs/wrong-file.md
```

Your changes are safe. Just unstaged.

:::tip

Use `git restore --staged <file>` to unstage without losing changes.

:::

### Scenario 2: Discard Uncommitted Changes

You made changes to a file but want to throw them away.

**Situation:**

You modified `docs/temp.md` and now want to discard those changes completely.

**How to Discard Changes**

```bash
git restore docs/temp.md
```

**What it does:**

- Discards changes to the file
- Restores the file from the last commit
- Working directory becomes clean

**Result:**

```bash
git status
```

Shows:

```text
On branch main
nothing to commit, working tree clean
```

The file is reverted to its committed state.

:::warning

`git restore` permanently discards uncommitted changes. They cannot be recovered. Use only when certain.

:::

### Restore All Uncommitted Changes

Discard all changes in the working directory:

```bash
git restore .
```

**What it does:**

- Restores all modified files
- Working directory matches last commit
- Useful after messy experimentation

:::warning

This discards ALL uncommitted changes. Use carefully.

:::

---

## Undoing Staged Changes

You staged changes but want to keep them without committing.

### Unstage All Files

Remove everything from staging area:

```bash
git reset
```

**What it does:**

- Unstages all files
- Keeps changes in working directory
- Returns to "nothing staged" state

**Result:**

```bash
git status
```

Shows all files as "Changes not staged for commit".

:::note

`git reset` without `--staged` only unstages. It doesn't delete changes.

:::

---

## Undoing Commits

These operations change your commit history. Use carefully.

### Scenario 3: Fix Commit Message

You committed with a typo in the message.

**Current state:**

```bash
git log --oneline -3
```

Shows:

```text
abc1234 (HEAD -> main) Documenation for v1.0   # Typo here!
def5678 Add API reference
ghi9012 Update homepage
```

**How to Fix Message**

```bash
git commit --amend -m "Documentation for v1.0"
```

**What it does:**

- Changes the most recent commit message
- Doesn't affect the code changes
- Rewrites commit history locally

**Result:**

```bash
git log --oneline -3
```

Shows:

```text
xyz7890 (HEAD -> main) Documentation for v1.0   # Fixed!
def5678 Add API reference
ghi9012 Update homepage
```

:::warning

Only amend commits that haven't been pushed to remote. Amending changes commit ID, which breaks shared history.

:::

### Scenario 4: Undo Recent Commit (Keep Changes)

You committed changes but realize they're wrong. Keep the changes, undo the commit.

**Current state:**

```bash
git log --oneline -2
```

Shows:

```text
abc1234 (HEAD -> main) Add incomplete API section
def5678 (origin/main) Add homepage
```

**How to Undo (Keep Changes)**

```bash
git reset --soft HEAD~1
```

**What it does:**

- Undoes the last commit
- Keeps changes in staging area
- Doesn't delete your work

**Result:**

```bash
git status
```

Shows:

```text
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   docs/api.md
```

The commit is gone. Changes are staged, ready to recommit.

**Then recommit with corrected message:**

```bash
git commit -m "Add API section - complete draft"
```

:::tip

`git reset --soft HEAD~1` is safe. Your changes are preserved.

:::

### Scenario 5: Undo Commit, Unstage Changes

Undo commit and move changes out of staging:

```bash
git reset --mixed HEAD~1
```

Or just:

```bash
git reset HEAD~1
```

(Same thing — `--mixed` is default)

**What it does:**

- Undoes the last commit
- Moves changes to working directory (unstaged)
- Changes are preserved but not staged

**Result:**

```bash
git status
```

Shows:

```text
On branch main
Changes not staged for commit:
  (use "git restore <file>..." to discard changes)
        modified:   docs/api.md
```

Changes are there. Commit is gone. Unstaged for editing.

### Scenario 6: Completely Discard Commit

Undo commit AND delete all changes:

```bash
git reset --hard HEAD~1
```

**What it does:**

- Undoes the last commit
- Deletes all changes in that commit
- Working directory matches previous commit

**Result:**

Working directory is completely clean as if the commit never happened.

:::danger

`git reset --hard` permanently deletes changes. Only use when absolutely certain.

:::

---

## Undoing Multiple Commits

Undo several commits at once.

### Undo Last 3 Commits

```bash
git reset --soft HEAD~3
```

Undo 3 commits, keep changes staged.

```bash
git reset HEAD~3
```

Undo 3 commits, keep changes unstaged.

```bash
git reset --hard HEAD~3
```

Undo 3 commits, delete all changes.

### Reset to Specific Commit

Go back to a specific commit by ID:

```bash
git reset --hard abc1234
```

Where `abc1234` is the commit hash. Everything after that commit is gone.

:::warning

This is destructive. Only use when certain. Everything after that commit is deleted.

:::

---

## Reverting Commits (Safe for Shared Branches)

Reverting creates a NEW commit that undoes a previous commit. Safe for shared branches.

### When to Revert

- Commit is already pushed to remote
- Multiple people have the code
- Need to preserve history
- Want a record of the undo

### How to Revert a Commit

```bash
git revert abc1234
```

Where `abc1234` is the commit you want to undo.

**What it does:**

- Creates a NEW commit
- New commit reverses changes from old commit
- History is preserved
- Everyone sees the undo

**Result:**

Your git log now shows:

```text
new1234 (HEAD -> main) Revert "Add incomplete API section"
abc1234 Add incomplete API section
def5678 Add homepage
```

The old commit still exists. New commit reverses it.

### Revert Without Committing

```bash
git revert --no-commit abc1234
```

Creates the revert changes but doesn't commit yet. You can review before committing.

:::important

Use `revert` for commits already pushed to remote. It's the safe way to undo shared work.

:::

---

## Common Undo Scenarios

### Scenario 1: Pushed Wrong Commit

You pushed a commit to main, but it has errors.

```bash
# Option 1: Revert (recommended for shared branch)
git revert abc1234
git push origin main

# Option 2: Force reset (only if no one else pulled)
git reset --hard HEAD~1
git push --force origin main
```

Use `revert` unless you're certain no one else has the code.

### Scenario 2: Multiple Wrong Commits on Feature Branch

You made 3 commits on `feature/docs` but all are wrong. No one else has this branch.

```bash
git reset --hard origin/main
```

This resets your local branch to match remote main. All 3 commits are gone locally.

Then push to update the remote feature branch:

```bash
git push --force origin feature/docs
```

### Scenario 3: Staged Wrong Files, Haven't Committed Yet

```bash
git status
```

Shows files staged that shouldn't be.

```bash
git restore --staged .
git status
```

All files are unstaged. Now re-stage only what you want:

```bash
git add docs/correct-file.md
git commit -m "Update correct file"
```

### Scenario 4: Made Commit, Need to Add More Changes

```bash
git log --oneline -1
```

Shows your recent commit. But you forgot to include one file.

```bash
git add docs/forgotten-file.md
git commit --amend
```

Amends the last commit to include the forgotten file.

### Scenario 5: Completely Lost Work (Deleted Branch Accidentally)

```bash
git reflog
```

Shows recent operations. Look for your deleted branch name.

```text
abc1234 HEAD@{5}: checkout: moving from feature/docs to main
def5678 HEAD@{6}: commit: Update API documentation
ghi9012 HEAD@{7}: commit: Add examples
```

Recover the branch:

```bash
git checkout -b feature/docs abc1234
```

Creates the branch again at that commit.

---

## Undo Best Practices

### Decision Tree

**Deciding how to undo:**

1. **Is it staged but not committed?**
   - Unstage: `git restore --staged <file>`

2. **Is it committed but not pushed?**
   - Amend message: `git commit --amend`
   - Keep changes: `git reset --soft HEAD~1`
   - Unstage changes: `git reset HEAD~1`
   - Discard changes: `git reset --hard HEAD~1`

3. **Is it pushed to remote (shared)?**
   - Use revert: `git revert <commit>`
   - Never force push to shared branch

4. **Need to recover deleted work?**
   - Check reflog: `git reflog`
   - Recreate branch from reflog entry

### Team Communication

When undoing shared commits:

1. Tell your team what happened
2. Use `revert` instead of reset
3. Push the revert commit
4. Document why in commit message

:::note

**Documentation Manager's Tip**

Encourage team members to:
- Commit frequently (small commits are easier to undo)
- Write clear commit messages (easier to identify what to undo)
- Ask for help before using `--hard` reset
- Use branches for experimental work

:::

---

## Viewing Undo History

### Reflog (Reference Log)

See all Git operations, including undone commits:

```bash
git reflog
```

**Result:**

```text
abc1234 HEAD@{0}: commit: Update API docs
def5678 HEAD@{1}: reset: moving to HEAD~1
ghi9012 HEAD@{2}: commit: Add examples
xyz7890 HEAD@{3}: checkout: moving from feature/docs to main
```

This shows everything, even "lost" commits.

### Recovering from Reflog

If you reset --hard and regret it:

```bash
git reflog
```

Find the commit you want.

```bash
git reset --hard abc1234
```

Reset back to that point. Your work is recovered.

:::important

Reflog is local only. It doesn't exist on remote. For important work, always push to a branch.

:::

---

## Summary

In this lesson, you learned how to:

- Understand different undo scenarios and which command to use.
- Unstage files without losing changes.
- Discard uncommitted changes.
- Undo commits safely.
- Revert commits for shared branches.
- Reset to previous states.
- Recover deleted work from reflog.
- Apply undo strategies in team workflows.

Git's undo capabilities make it safe to experiment. Mistakes are recoverable. Choose the right undo command for your situation.

---

## Exercise

1. Create a test file: `echo "test" > test.md`
2. Stage it: `git add test.md`
3. Unstage it: `git restore --staged test.md`
4. Verify unstaged: `git status`
5. Discard changes: `git restore test.md`
6. Make a new file: `echo "content" > new.md`
7. Commit it: `git add new.md` and `git commit -m "Add test file"`
8. View history: `git log --oneline -2`
9. Undo commit, keep changes: `git reset --soft HEAD~1`
10. Verify changes are staged: `git status`
11. View reflog: `git reflog`

---

## Common mistakes

<details>
<summary><strong>1. Using reset --hard on shared branches</strong></summary>

**Cause**

Used `git reset --hard` to undo a commit on main branch with other people.

**Problem**

Destroys shared history. Team members' local repos diverge from remote. Conflicts for everyone.

**Solution**

On shared branches, always use `git revert` instead.

```bash
git revert <commit>
```

Only use `reset --hard` on local-only branches.

</details>

<details>
<summary><strong>2. Amending pushed commits</strong></summary>

**Cause**

Used `git commit --amend` on a commit already pushed to remote.

**Problem**

Changes commit ID. Push is rejected. Force push breaks others' repos.

**Solution**

Only amend local commits before pushing.

If already pushed, use `git revert` instead.

</details>

<details>
<summary><strong>3. Discarding work with git restore</strong></summary>

**Cause**

Used `git restore .` thinking it was temporary, but it deleted important changes.

**Problem**

Changes are gone permanently.

**Solution**

Use `git status` before destructive operations.

Check `git diff` to see changes before discarding.

For important work, commit first.

</details>

<details>
<summary><strong>4. Forgetting about staged changes before reset</strong></summary>

**Cause**

Used `git reset --hard` forgetting there were staged changes.

**Problem**

Staged changes are deleted along with everything else.

**Solution**

Always check `git status` before reset.

If you have valuable staged changes, stash them first:

```bash
git stash
```

</details>

<details>
<summary><strong>5. Not knowing about reflog</strong></summary>

**Cause**

Did `git reset --hard`, then thought work was lost forever.

**Problem**

Panicked unnecessarily. Thought reflog was gone too.

**Solution**

Commit is still in reflog. Recover with:

```bash
git reflog
```

Find your commit, then:

```bash
git reset --hard <commit>
```

Reflog saves you from permanent loss.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What's the difference between git restore and git reset?</strong></summary>

`git restore` works on files in working directory and staging area. It discards or unstages changes.

`git reset` works on commits. It moves HEAD to different commit, affecting what's staged.

Both don't delete commits, just rearrange or discard work.

</details>

<details>
<summary><strong>2. When should you use git revert instead of git reset?</strong></summary>

Use `git revert` when the commit is pushed to remote or shared with team. It creates a new commit that undoes the changes, preserving history.

Use `git reset` only for local commits not yet pushed.

</details>

<details>
<summary><strong>3. What does git reset --soft do?</strong></summary>

`git reset --soft HEAD~1` undoes the last commit but keeps all changes staged.

The commit is gone, but the work is still there, ready to recommit with a different message or split differently.

</details>

<details>
<summary><strong>4. What does git reset --hard do?</strong></summary>

`git reset --hard HEAD~1` undoes the last commit AND deletes all changes in that commit.

The working directory matches the previous commit. Changes are gone. Use only when certain.

</details>

<details>
<summary><strong>5. How do you recover from a git reset --hard?</strong></summary>

Use `git reflog` to see all operations. Find the commit you want.

Then use `git reset --hard <commit-hash>` to recover it.

Reflog keeps even "deleted" commits available for recovery (usually for 30 days).

</details>

<details>
<summary><strong>6. What should you do before using destructive commands like reset --hard?</strong></summary>

Always:
1. Check `git status` to see what you have staged
2. Use `git log --oneline` to verify which commit you're resetting to
3. Use `git diff` to see changes you might lose
4. Consider stashing important work first
5. Make sure you're on the right branch

</details>

<details>
<summary><strong>7. Can you undo an undo operation?</strong></summary>

Yes! If you undo something (like reset --hard) and regret it, check `git reflog` to find your commit. Then `git reset --hard <commit>` to go back.

Git is designed to preserve your work. Most operations are recoverable.

</details>

<details>
<summary><strong>8. What is reflog and why is it important?</strong></summary>

Reflog (reference log) records all HEAD movements and operations. It shows commits that might appear "lost" after reset or branch deletion.

Run `git reflog` to recover work. Reflog is local only and typically kept for 30 days.

</details>

---

## Next Lesson

You've completed the Git fundamentals module! You now know how to create repositories, make commits, work with branches, merge, rebase, stash, tag releases, and undo mistakes. These skills form the foundation for Docs-as-Code workflows. Continue practicing with your documentation projects.