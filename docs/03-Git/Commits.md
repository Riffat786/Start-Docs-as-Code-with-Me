---
title: Making Commits in Git
sidebar_position: 4
description: Learn how to save documentation changes as commits and maintain a clear project history.
---

# Making Commits in Git

> **Estimated reading time:** 22 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what commits are and why they matter.
- Stage documentation changes for committing.
- Create commits with meaningful messages.
- Write good commit messages that other writers understand.
- View commit history.
- Understand the commit workflow.
- Fix commits when needed.
- Apply commits in real documentation projects.

---

## What Is a Commit?

A commit is a snapshot of your documentation changes at a specific point in time. It's like saving a version of your work with a message explaining what changed.

### Why Commits Matter

Commits allow your documentation team to:

- Track who made what changes and when.
- Understand why changes were made (through commit messages).
- Revert to previous versions if needed.
- Review changes before merging them.
- Maintain a complete history of the documentation.

Think of commits as checkpoints in your documentation project.

### Commit vs. Save

- **Save** (Ctrl+S) - Stores changes on your computer in the current branch.
- **Commit** - Creates a permanent checkpoint with a message explaining the changes.

:::important

Saving and committing are different. You must both save your file AND commit to Git.

:::

---

## Before You Start

Make sure you have:

- A cloned Git repository on your computer
- Documentation files you want to edit
- A text editor (VS Code, Cursor, or similar)
- Familiarity with Git branches (see [Branches lesson](./Branches.md))

:::note

**For Beginners**

If you're new to Git, think of commits as creating save points in a video game. Each commit saves your progress with a description.

:::

---

## The Commit Workflow

Every time you make changes, follow this workflow:

```text
1. Edit your documentation files
         ↓
2. Check what changed (git status)
         ↓
3. Stage changes (git add)
         ↓
4. Create a commit (git commit)
         ↓
5. Verify the commit (git log)
```

Let's learn each step.

---

## Step 1: Check What Changed

Before committing, see what files you've modified.

### How to Check Changed Files

**Command:**

```bash
git status
```

**What it does:**

- Shows all changes in your working directory
- Displays which files are staged or unstaged
- Shows untracked files

**Example result:**

```text
On branch feature/update-api-docs
Changes not staged for commit:
  modified:   docs/api-reference.md
  modified:   docs/installation.md

Untracked files:
  new file:   docs/examples.md

nothing added to commit but untracked changes present
```

**What this means:**

- `modified` - File was edited
- `new file` - New file not yet added to Git
- `nothing added to commit` - Changes are not staged yet

:::tip

Run `git status` frequently. It shows exactly what state your repository is in.

:::

---

## Step 2: Stage Your Changes

Before committing, you must stage (prepare) the files you want to include.

### How to Stage Files

**Stage one file:**

```bash
git add docs/api-reference.md
```

**Stage multiple files:**

```bash
git add docs/api-reference.md docs/installation.md
```

**Stage all changes:**

```bash
git add .
```

**What it does:**

- Prepares files for the next commit
- Only staged files go into the commit
- Allows you to choose which changes to commit

:::warning

Be careful with `git add .` - it stages all changes. Make sure you want all changes in this commit.

:::

### Verify Staged Files

After staging, check with `git status`:

```bash
git status
```

**Expected result:**

```text
On branch feature/update-api-docs
Changes to be committed:
  modified:   docs/api-reference.md
  modified:   docs/installation.md
```

Green text means staged. Red text means not staged.

---

## Step 3: Create Your First Commit

Now you create the commit with your staged changes.

### How to Make a Commit

**Command:**

```bash
git commit -m "Update API documentation with new endpoints"
```

**What it does:**

- Creates a permanent checkpoint with your staged changes
- Includes the message you provide
- Records your username and timestamp
- Assigns a unique commit ID (hash)

**Result:**

```text
[feature/update-api-docs abc1234] Update API documentation with new endpoints
 2 files changed, 15 insertions(+), 3 deletions(-)
```

**What this means:**

- `abc1234` - Unique ID for this commit
- `2 files changed` - Number of files modified
- `15 insertions(+), 3 deletions(-)` - Lines added and removed

:::tip

The commit message in quotes is what appears in the project history. Make it clear and helpful for other writers.

:::

---

## Writing Good Commit Messages

Commit messages are crucial. Other writers read them to understand what changed and why.

### Message Format

A good commit message has two parts:

**Part 1: Subject line (50 characters maximum)**

Short, clear description of what changed.

**Part 2: Body (optional)**

More details if needed.

### Examples of Good Messages

```text
Add configuration guide for Windows users
```

```text
Fix typo in installation steps
```

```text
Update API endpoint documentation
```

```text
Add code examples to REST API section
```

### Examples of Poor Messages

```text
Update stuff                    ❌ Too vague
```

```text
asdf                           ❌ Meaningless
```

```text
Fixed it                       ❌ No details
```

```text
Documentation                  ❌ Not descriptive
```

### Using the Imperative Mood

Write messages as commands:

- ✅ "Add examples to API docs" (not "Added examples")
- ✅ "Fix broken link in README" (not "Fixed broken link")
- ✅ "Update installation guide" (not "Updated installation guide")

:::note

**Documentation Manager's Tip**

Establish commit message conventions for your team. Examples:

- `Add [feature]` - New documentation or content
- `Fix [issue]` - Corrections or bug fixes
- `Update [section]` - Improvements to existing content
- `Refactor [area]` - Reorganization without changing content

:::

### Multi-line Commit Messages

For more detail, use a text editor instead of `-m`:

```bash
git commit
```

This opens your default editor where you can write multiple lines:

```text
Update API reference documentation

- Add new endpoint examples
- Fix parameter descriptions
- Add authentication section
```

---

## Understanding Staging

Staging lets you choose exactly which changes go into each commit.

### Why Staging Matters

**Scenario:** You edited two files but only want to commit one.

**Option 1: Stage selectively**

```bash
git add docs/api-reference.md
git commit -m "Update API documentation"
```

Now only `api-reference.md` is committed. The other file stays modified but uncommitted.

**Option 2: Commit everything at once**

```bash
git add .
git commit -m "Update documentation"
```

Both files are committed together.

### View Staged vs. Unstaged Changes

```bash
git diff
```

Shows unstaged changes (red = removed, green = added).

```bash
git diff --staged
```

Shows only staged changes.

:::tip

Review your changes with `git diff` before committing. This catches typos and accidental changes.

:::

---

## Viewing Commit History

After committing, see your project's history.

### How to View Recent Commits

**Command:**

```bash
git log --oneline -5
```

**What it does:**

- Shows the 5 most recent commits
- `--oneline` makes output concise
- Shows commit ID, author, date, and message

**Example result:**

```text
abc1234 Update API documentation with new endpoints
def5678 Add configuration guide for Windows users
ghi9012 Fix typo in installation steps
jkl3456 Add code examples to REST API section
mno7890 Initial documentation setup
```

### View Detailed Commit Information

```bash
git log
```

Shows full commit details including:

- Commit ID (hash)
- Author name and email
- Date and time
- Full commit message
- Changes in that commit

### View Changes in a Specific Commit

```bash
git show abc1234
```

Shows all changes in the commit with ID `abc1234`.

---

## Commit Best Practices

### Make Commits Logical

Each commit should represent one logical change.

**Good:**
- Commit 1: "Add installation guide"
- Commit 2: "Fix formatting issues"
- Commit 3: "Add troubleshooting section"

**Poor:**
- Commit 1: "Update documentation" (includes installation, formatting, and troubleshooting)

### Commit Frequently

Make commits as you complete work, not all at the end.

**Benefits:**
- Easier to track changes
- Simpler to review
- Easier to revert if needed

:::tip

A good rule: One commit per feature, section, or fix.

:::

### Always Write Clear Messages

Messages are for other writers (and future you). Be specific.

**Good:**
```text
Add authentication section to API docs
```

**Poor:**
```text
update
```

### Commit Before Switching Branches

Always commit or stash work before switching branches.

```bash
git commit -m "Work in progress on API docs"
git checkout main
```

### Don't Skip the Message

Never commit without a message. Every commit needs one.

```bash
git commit -m "message"   ✅ Correct
git commit                ❌ Opens editor (confusing)
git commit --allow-empty-message   ❌ Bad practice
```

### Review Before Committing

Always check `git status` and `git diff` before committing.

```bash
git status
git diff --staged
git commit -m "Your message"
```

---

## Common Commit Scenarios

### Scenario 1: Update One File

```bash
git add docs/api-reference.md
git commit -m "Add new endpoint documentation"
```

### Scenario 2: Create Multiple New Files

```bash
git add docs/examples/
git commit -m "Add code examples to documentation"
```

### Scenario 3: Mix of Changes

```bash
git add docs/install.md docs/config.md
git commit -m "Update installation and configuration guides"
```

### Scenario 4: Partial Changes in a File

Only stage specific changes:

```bash
git add -p
```

This opens interactive mode where you choose which changes to stage.

---

## Fixing Commits

Sometimes you make a mistake. Git provides ways to fix it.

### Fixing the Last Commit Message

Forgot to add important details to your message?

```bash
git commit --amend -m "New message"
```

**What it does:**

- Changes the message of the most recent commit
- Doesn't change the files in that commit

**Result:**

The commit message is updated. The commit ID changes.

:::warning

Only amend commits that haven't been pushed to the remote. Amending changes the commit history.

:::

### Adding Forgotten Files to Last Commit

Forgot to stage a file before committing?

```bash
git add forgotten-file.md
git commit --amend --no-edit
```

**What it does:**

- Adds the forgotten file to the last commit
- Keeps the same commit message (`--no-edit`)
- Updates the commit

### Undoing the Last Commit (Keeping Changes)

Committed too early? Keep your changes but undo the commit:

```bash
git reset --soft HEAD~1
```

**What it does:**

- Removes the last commit
- Keeps your changes staged
- Allows you to recommit with a better message

---

## Commit Workflow Example

Here's a complete real-world example:

**Step 1: Start working on your branch**

```bash
git checkout -b feature/api-docs-update
```

**Step 2: Edit documentation files**

Edit `docs/api-reference.md` and `docs/authentication.md` in your text editor.

**Step 3: Check what changed**

```bash
git status
```

Result shows `api-reference.md` and `authentication.md` modified.

**Step 4: Stage the changes**

```bash
git add docs/api-reference.md docs/authentication.md
```

**Step 5: Verify staging**

```bash
git status
```

Files show as "Changes to be committed" in green.

**Step 6: Create the commit**

```bash
git commit -m "Update API documentation with authentication details"
```

**Step 7: Verify the commit**

```bash
git log --oneline -3
```

Your new commit appears at the top.

**Step 8: Continue working or push**

Make more changes and commits, or:

```bash
git push origin feature/api-docs-update
```

---

## Best Practices Summary

- **Commit logically.** One commit = one logical change.
- **Commit frequently.** Don't wait until the end of the day.
- **Write clear messages.** Be specific about what changed and why.
- **Stage intentionally.** Choose which changes go into each commit.
- **Review before committing.** Use `git status` and `git diff`.
- **Never force-push.** Don't rewrite history on shared branches.
- **Commit before switching.** Don't leave uncommitted work when changing branches.

---

## Summary

In this lesson, you learned how to:

- Understand what commits are and why they matter.
- Stage files before committing.
- Create commits with clear messages.
- Write commit messages other writers understand.
- View commit history.
- Fix commits when needed.
- Follow commit best practices.

Commits are the foundation of version control. Clear, frequent commits make your documentation team more effective.

---

## Exercise

1. Clone or navigate to a Git repository.
2. Create a new branch: `git checkout -b practice/learn-commits`
3. Create or edit at least two documentation files.
4. Check status: `git status`
5. Stage files: `git add .`
6. Verify staged changes: `git status`
7. Create a commit: `git commit -m "Add documentation content"`
8. View history: `git log --oneline -5`
9. Create another commit with a different message.
10. View the commit history again.

---

## Common mistakes

<details>
<summary><strong>1. Committing without staging</strong></summary>

**Cause**

Tried to commit without running `git add` first.

**Solution**

Always stage files before committing:

```bash
git add .
git commit -m "message"
```

Verify with `git status` that files show as "Changes to be committed".

</details>

<details>
<summary><strong>2. Writing vague commit messages</strong></summary>

**Cause**

Commit message doesn't explain what changed: "update", "fix", "changes".

**Solution**

Write specific messages:

- ✅ "Add installation guide for macOS"
- ❌ "update"

Be clear about what changed and why.

</details>

<details>
<summary><strong>3. Committing too much at once</strong></summary>

**Cause**

Multiple unrelated changes in one commit.

**Solution**

Stage and commit related changes together. Use `git add` selectively.

```bash
git add docs/api-reference.md
git commit -m "Update API docs"

git add docs/install.md
git commit -m "Update installation guide"
```

</details>

<details>
<summary><strong>4. Forgetting to stage changes</strong></summary>

**Cause**

Edited files but forgot `git add` before committing.

**Solution**

Always run `git status` before committing. Files in red need to be staged.

```bash
git status
git add .
git commit -m "message"
```

</details>

<details>
<summary><strong>5. Amending commits that were already pushed</strong></summary>

**Cause**

Used `git commit --amend` on a commit already on the remote.

**Solution**

Only amend local commits. If you've pushed, create a new commit instead:

```bash
git add .
git commit -m "Fix: add missing information"
```

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a commit?</strong></summary>

A commit is a permanent checkpoint that saves your changes with a description. It includes the files that changed, who made the changes, when they were made, and a message explaining why.

</details>

<details>
<summary><strong>2. What's the difference between saving and committing?</strong></summary>

**Saving** (Ctrl+S) stores your file on disk. **Committing** creates a Git checkpoint with all changes tracked and a message explaining them. You must both save AND commit.

</details>

<details>
<summary><strong>3. What does staging do?</strong></summary>

Staging (using `git add`) prepares files for the next commit. It lets you choose exactly which changes go into each commit, even if you've modified multiple files.

</details>

<details>
<summary><strong>4. How do you view your commit history?</strong></summary>

Use `git log` to see detailed commit history, or `git log --oneline -5` to see the 5 most recent commits in a concise format.

</details>

<details>
<summary><strong>5. What makes a good commit message?</strong></summary>

A good commit message is:

- Short and specific (under 50 characters)
- Written as a command: "Add" or "Fix", not "Added" or "Fixed"
- Clear about what changed and why
- Helpful for other writers reading the history

Example: "Add authentication section to API docs"

</details>

<details>
<summary><strong>6. What's the correct workflow for making a commit?</strong></summary>

1. Edit files in your text editor
2. Run `git status` to see what changed
3. Run `git add` to stage files
4. Run `git commit -m "message"` to create the commit
5. Run `git log` to verify

</details>

<details>
<summary><strong>7. How do you fix a commit message after committing?</strong></summary>

If the commit hasn't been pushed, use:

```bash
git commit --amend -m "New message"
```

This changes the message of the most recent commit. Only do this for local commits.

</details>

<details>
<summary><strong>8. When should you make commits?</strong></summary>

Commit frequently as you complete logical units of work. A good rule of thumb: one commit per section, feature, or fix. Don't wait until the end of the day or project.

</details>

---

## Next Lesson

When you're comfortable making commits, proceed to [Merge](./Merge.md) to learn how to combine changes from different branches.