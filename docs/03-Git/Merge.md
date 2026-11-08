---
title: Merging Branches in Git
sidebar_position: 5
description: Learn how to combine documentation changes from different branches and resolve conflicts.
---

# Merging Branches in Git

> **Estimated reading time:** 25 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what merging means and why it matters.
- Merge branches into the main branch.
- Understand merge conflicts.
- Resolve merge conflicts safely.
- Use different merge strategies.
- Apply merges in team documentation workflows.
- Recover from merge mistakes.
- Follow best practices for merging.

---

## What Is Merging?

Merging combines changes from one branch into another. It's how you bring documentation updates from your feature branch back into the main branch.

### Why Merging Matters

Merging allows documentation teams to:

- Integrate completed work into the main documentation.
- Combine changes from multiple writers.
- Review changes before making them official.
- Keep the main branch stable until changes are ready.
- Maintain a clear project history.

Think of merging as saying "The work on this branch is done, now include it in the main documentation."

### Merge Workflow

```text
1. Work on a feature branch
        ↓
2. Commit your changes
        ↓
3. Push to remote
        ↓
4. Create a Pull Request
        ↓
5. Get review/approval
        ↓
6. Merge into main
        ↓
7. Delete feature branch
```

:::important

In a team environment, merging usually happens through Pull Requests on GitHub, not directly on your computer. A Pull Request lets others review your work first.

:::

---

## Before You Start

Make sure you have:

- A Git repository with multiple branches
- Understanding of Git branches and commits
- A branch with completed changes ready to merge
- Access to the main branch

If you need to review branches or commits, see:
- [Branches lesson](./Branches.md)
- [Commits lesson](./Commits.md)

:::note

**For Beginners**

Think of merging like combining two versions of a document. Git automatically combines the changes if they don't conflict. If they do conflict, you choose which changes to keep.

:::

---

## Your First Merge

### How to Merge a Branch

**Scenario:** You finished updating API documentation on the `feature/api-update` branch. Now you want to merge it into `main`.

**Step 1: Switch to the target branch**

```bash
git switch main
```

You're now on the main branch (where you want to merge changes into).

**Step 2: Make sure main is up to date**

```bash
git pull origin main
```

This gets the latest changes from the remote.

**Step 3: Merge the feature branch**

```bash
git merge feature/api-update
```

**What it does:**

- Combines all commits from `feature/api-update` into `main`
- Creates a new merge commit (unless a fast-forward happens)
- Updates your local main branch

**Result:**

```text
Merge made by the 'recursive' strategy.
 docs/api-reference.md | 45 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 45 insertions(+)
```

This shows the merge was successful.

:::tip

Always pull before merging to ensure you have the latest version of the target branch.

:::

### Verify the Merge

Check the merge was successful:

```bash
git log --oneline -5
```

**Result:**

```text
abc1234 Merge branch 'feature/api-update' into main
def5678 Add new API endpoints
ghi9012 Update authentication section
jkl3456 Add example requests
mno7890 Initial API documentation
```

You should see a merge commit message.

---

## Understanding Merge Conflicts

A merge conflict happens when Git can't automatically combine changes. This occurs when the same lines in a file were modified on both branches.

### When Conflicts Happen

**Scenario 1: Different sections modified**

- Main branch: Updated the introduction
- Feature branch: Updated the troubleshooting section
- Result: No conflict (different parts of the file)

**Scenario 2: Same section modified**

- Main branch: Changed API endpoint from `/api/v1/users` to `/api/v2/users`
- Feature branch: Changed the same endpoint to `/api/latest/users`
- Result: Conflict (both changed the same line)

### Understanding Conflict Markers

When a conflict occurs, Git marks the conflicting sections:

```text
<<<<<<< HEAD
/api/v2/users
=======
/api/latest/users
>>>>>>> feature/api-update
```

**What this means:**

- `<<<<<<< HEAD` - Your current branch (main)
- `=======` - The separator
- `>>>>>>> feature/api-update` - The branch being merged
- The conflicting content is between the markers

:::warning

Merge conflicts require manual resolution. You must choose which changes to keep.

:::

---

## Resolving Merge Conflicts

### How to Resolve Conflicts

**Step 1: Identify conflicts**

After running `git merge`, Git tells you which files have conflicts:

```text
Auto-merging docs/api-reference.md
CONFLICT (content): Merge conflict in docs/api-reference.md
Automatic merge failed; fix conflicts and then commit the result.
```

**Step 2: Open the conflicted file**

Open `docs/api-reference.md` in your text editor. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

**Step 3: Decide which changes to keep**

You have three options:

**Option 1: Keep only your changes (HEAD)**

Delete everything between `=======` and `>>>>>>>`:

```text
/api/v2/users
```

**Option 2: Keep only the incoming changes**

Delete everything between `<<<<<<<` and `=======`:

```text
/api/latest/users
```

**Option 3: Keep both (combine)**

Delete the markers and combine both:

```text
The endpoint can be accessed at /api/v2/users or /api/latest/users
```

**Option 4: Use a different approach entirely**

Think about what makes sense for documentation:

```text
Current version: /api/v2/users
Latest version: /api/latest/users
```

### Remove Conflict Markers

After deciding what to keep, remove all conflict markers:

```text
❌ <<<<<<< HEAD
✅ /api/v2/users
❌ =======
❌ /api/latest/users
❌ >>>>>>> feature/api-update
```

### Step 4: Stage the resolved file

```bash
git add docs/api-reference.md
```

### Step 5: Complete the merge

```bash
git commit -m "Merge branch 'feature/api-update': resolved API version conflict"
```

**Result:**

```text
[main abc1234] Merge branch 'feature/api-update': resolved API version conflict
```

The merge is now complete.

:::note

**Documentation Manager's Tip**

When multiple people edit the same documentation, conflicts are common. Establish guidelines: who owns which sections? When should people notify teammates about major changes?

:::

---

## Using Git Tools to Resolve Conflicts

Git provides tools to make conflict resolution easier.

### View Conflicted Files

See which files have unresolved conflicts:

```bash
git status
```

**Result:**

```text
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  both modified:   docs/api-reference.md
```

Red-colored files have conflicts.

### Visual Merge Tools

Some editors have built-in merge conflict helpers:

**Visual Studio Code:**
- Conflicts appear with "Accept Current Change", "Accept Incoming Change", "Accept Both Changes"
- Click the option you want

**GitHub (Web Editor):**
- Shows conflicts inline with easy buttons to choose
- Easier than command-line for many people

### Abort a Merge

If the merge gets too complicated, abort it:

```bash
git merge --abort
```

This cancels the merge and returns to your previous state.

:::tip

If you're overwhelmed by conflicts, `git merge --abort` lets you start over. Talk to your team about the best approach.

:::

---

## Common Merge Scenarios

### Scenario 1: Simple Merge (No Conflicts)

**Setup:**

- Main branch: Documentation stable
- Feature branch: New installation guide
- No overlapping changes

**Command:**

```bash
git switch main
git pull origin main
git merge feature/installation-guide
```

**Result:**

```text
Updating abc1234..def5678
Fast-forward
 docs/install.md | 150 ++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 150 insertions(+)
```

The merge completes automatically. Fast-forward means no merge commit was needed.

### Scenario 2: Conflict on One File

**Setup:**

- Main branch: Updated API reference
- Feature branch: Also updated API reference (different sections)
- One file has conflicts

**Steps:**

1. Merge: `git merge feature/api-update`
2. Conflicts appear in `docs/api-reference.md`
3. Open file, resolve conflicts, save
4. Stage: `git add docs/api-reference.md`
5. Commit: `git commit -m "Merge API updates, resolved conflicts"`

### Scenario 3: Conflicts on Multiple Files

**Setup:**

- Multiple files edited on both branches
- Multiple conflicts

**Steps:**

1. Merge: `git merge feature/branch`
2. For each conflicted file:
   - Open the file
   - Resolve conflicts
   - Save the file
   - Stage: `git add filename`
3. Commit: `git commit -m "Merge and resolve conflicts"`

:::warning

With multiple conflicted files, resolve them systematically. Check all conflicts before committing.

:::

### Scenario 4: Merge Conflict on the Same Lines

**Setup:**

- Main: "The API version is v2"
- Feature: "The API version is v3"
- Same line, different content

**File after merge:**

```text
<<<<<<< HEAD
The API version is v2
=======
The API version is v3
>>>>>>> feature/api-update
```

**Resolution:**

Decide which version is correct:

```text
The API version is v3 (updated)
```

Or combine:

```text
The current API version is v3 (updated from v2)
```

---

## Merge Workflows

### Workflow 1: Simple Feature Branch Merge

```bash
# Create and work on feature branch
git checkout -b feature/new-docs
# ... make changes, commit ...

# Switch to main and merge
git switch main
git pull origin main
git merge feature/new-docs

# Push merged changes
git push origin main

# Delete feature branch (cleanup)
git branch -d feature/new-docs
```

### Workflow 2: Merge with Pull Request (Recommended for Teams)

```bash
# Push feature branch
git push origin feature/new-docs

# On GitHub:
# 1. Create Pull Request
# 2. Reviewers check changes
# 3. Address feedback (more commits)
# 4. Approve
# 5. Merge via GitHub (creates merge commit)
# 6. Delete branch via GitHub

# Pull the merge locally
git switch main
git pull origin main
```

### Workflow 3: Handling Conflicts During Merge

```bash
# Attempt merge
git merge feature/conflicted

# Conflicts appear
# Resolve in editor
# Stage resolved files
git add .

# Complete merge
git commit -m "Merge feature branch, resolved conflicts"

# Push to remote
git push origin main
```

---

## Best Practices for Merging

### Before Merging

- **Pull latest changes.** Ensure target branch is up to date: `git pull origin main`
- **Test your work.** Make sure the documentation builds correctly
- **Review your commits.** Verify commit messages are clear
- **Create a Pull Request.** Let others review before merging

### During Merging

- **Resolve conflicts carefully.** Understand both versions before deciding
- **Keep documentation in mind.** Ask: "Does this make sense to readers?"
- **Communicate with teammates.** If conflicts are complex, discuss approaches

### After Merging

- **Verify the merge.** Check `git log` to confirm merge commit
- **Delete the feature branch.** Keep repository organized: `git branch -d feature-name`
- **Push to remote.** Make sure everyone has the changes: `git push origin main`
- **Test merged documentation.** Build and preview the documentation site

:::tip

Always follow the same merge workflow. Consistency helps avoid mistakes in a team.

:::

---

## Common Merge Mistakes

### Mistake 1: Forgetting to Pull Before Merging

**Problem:**

Main branch on your computer is outdated. Merge conflicts appear unexpectedly.

**Solution:**

Always pull before merging:

```bash
git switch main
git pull origin main
git merge feature/branch
```

### Mistake 2: Merging Into the Wrong Branch

**Problem:**

Accidentally merged into the wrong branch.

**Solution:**

If merge hasn't been pushed, undo it:

```bash
git reset --hard HEAD~1
```

This removes the merge commit. The branch is back to before the merge.

:::warning

Only do this if the merge hasn't been pushed to remote. Once pushed, undo it differently.

:::

### Mistake 3: Resolving Conflicts Wrong

**Problem:**

Chose the wrong version when resolving conflicts.

**Solution:**

If the merge hasn't been pushed, undo and redo:

```bash
git merge --abort
git merge feature/branch
# Resolve conflicts again, carefully
```

### Mistake 4: Not Testing After Merge

**Problem:**

Merged changes but didn't test. Conflicts were misresolved.

**Solution:**

Always test after merging:

```bash
# After merge, test your documentation
npm run build
# or
make build
```

---

## Merge vs. Rebase

Git offers two ways to combine branches: merge and rebase.

### Merge

- Creates a merge commit
- Preserves complete history
- Easier to understand what happened
- Recommended for team collaboration

```bash
git merge feature/branch
```

### Rebase

- Replays your commits on top of the target branch
- Creates a cleaner, linear history
- More complex to resolve conflicts
- Better for personal work, riskier in teams

```bash
git rebase main
```

:::important

For documentation teams, use merge. It's safer and the history is clearer.

:::

---

## Summary

In this lesson, you learned how to:

- Understand what merging is and why it matters.
- Merge branches into the main branch.
- Understand merge conflicts.
- Resolve conflicts carefully.
- Handle common merge scenarios.
- Follow merge best practices.

Merging is how your documentation team combines work. Clear communication and careful conflict resolution keep the documentation quality high.

---

## Exercise

1. Create two branches from main: `feature/section-a` and `feature/section-b`
2. On `feature/section-a`: Edit the same file as you'll edit on `feature/section-b`
3. Make different changes to the same lines
4. Switch to main: `git switch main`
5. Merge `feature/section-a`: `git merge feature/section-a`
6. Try to merge `feature/section-b`: `git merge feature/section-b`
7. This should create a conflict
8. Resolve the conflict manually
9. Stage and commit the merge
10. View the merge in history: `git log --oneline -5`

---

## Common mistakes

<details>
<summary><strong>1. Merging without pulling first</strong></summary>

**Cause**

Merged into an outdated branch. Local main is behind remote main.

**Solution**

Always pull before merging:

```bash
git switch main
git pull origin main
git merge feature/branch
```

This ensures you're merging with the latest version.

</details>

<details>
<summary><strong>2. Resolving conflicts incorrectly</strong></summary>

**Cause**

Chose the wrong version when conflicts appeared or accidentally removed both versions.

**Solution**

Understand both versions before deciding. If unsure, talk to the other writer who made the changes.

Abort and redo if needed:

```bash
git merge --abort
git merge feature/branch
```

</details>

<details>
<summary><strong>3. Merging into the wrong branch</strong></summary>

**Cause**

Not paying attention to which branch is active. Merged into main when meant to merge into another branch.

**Solution**

Always check current branch: `git branch` (shows current with `*`)

Switch before merging:

```bash
git switch correct-branch
git merge feature/branch
```

</details>

<details>
<summary><strong>4. Not testing after merge</strong></summary>

**Cause**

Merged and pushed without verifying the changes work together. Documentation build fails or looks wrong.

**Solution**

Test after every merge:

```bash
git merge feature/branch
# Build and test
npm run build
# Preview locally
npm start
# If everything looks good, push
git push origin main
```

</details>

<details>
<summary><strong>5. Merge conflicts with no clear resolution</strong></summary>

**Cause**

Multiple changes to the same content, unclear which version is correct.

**Solution**

Communicate with teammates. The person who made the other change should help decide.

If still unsure, keep both versions:

```text
Version in main: ...text...
Version in feature branch: ...other text...
```

Or discuss and create a combined version.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is merging in Git?</strong></summary>

Merging is combining changes from one branch into another. You take the work from a feature branch and integrate it into the main branch (or another target branch).

</details>

<details>
<summary><strong>2. What should you do before merging?</strong></summary>

Before merging:

1. Switch to the target branch (usually main): `git switch main`
2. Pull the latest changes: `git pull origin main`
3. Then merge: `git merge feature/branch`

Always pull first to avoid complications.

</details>

<details>
<summary><strong>3. What is a merge conflict?</strong></summary>

A merge conflict happens when the same lines in a file were modified on both branches differently. Git can't automatically combine them, so you must choose which changes to keep.

</details>

<details>
<summary><strong>4. How do you resolve a merge conflict?</strong></summary>

1. Git marks conflicts with `<<<<<<<`, `=======`, and `>>>>>>>`
2. Open the file and decide which changes to keep
3. Remove the conflict markers and choose the correct version
4. Stage the file: `git add filename`
5. Complete the merge: `git commit -m "Merge message"`

</details>

<details>
<summary><strong>5. What do the conflict markers mean?</strong></summary>

- `<<<<<<< HEAD` - Your current branch (what you're merging into)
- `=======` - Separator between the two versions
- `>>>>>>> branch-name` - The branch being merged in

Content between `<<<<<<<` and `=======` is from your branch. Content between `=======` and `>>>>>>>` is from the branch being merged.

</details>

<details>
<summary><strong>6. Can you undo a merge?</strong></summary>

Yes, if the merge hasn't been pushed:

```bash
git reset --hard HEAD~1
```

This removes the merge commit and returns to before the merge. Only do this for local commits.

If the merge was already pushed, create a new commit to undo it.

</details>

<details>
<summary><strong>7. What should you do after merging?</strong></summary>

After merging:

1. Verify the merge: `git log --oneline -3`
2. Test the documentation: `npm run build`
3. Push to remote: `git push origin main`
4. Delete the feature branch: `git branch -d feature-name`

Testing is especially important to catch merge mistakes.

</details>

<details>
<summary><strong>8. Why is it better to use Pull Requests for merging in a team?</strong></summary>

Pull Requests allow:

- Code review before merging
- Discussion about changes
- Automated tests to run
- Clear documentation of why changes were made
- Protection of the main branch

This prevents problematic changes from reaching production documentation.

</details>

---

## Next Lesson

When you're comfortable with merging, proceed to [Tags](./Tags.md) to learn how to mark important releases in your documentation project.