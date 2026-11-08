---
title: Git Commands Cheat Sheet
sidebar_position: 11
description: Quick reference guide for essential Git commands for documentation teams.
---

# Git Commands Cheat Sheet

> **Quick reference for Git commands covered in this module**

This cheat sheet provides quick access to Git commands you learned in the Git module. Organized by task for easy lookup.

:::note

**How to use this guide**

Scan the section that matches your task. Copy the command and adjust file/branch names as needed.

:::

---

## Repository Setup

| Task | Command | What It Does |
|------|---------|-------------|
| Create new repository | `git init` | Initialize Git in current folder |
| Clone remote repository | `git clone <url>` | Copy remote repo to your computer |
| Clone to custom folder | `git clone <url> <folder-name>` | Clone into specific folder name |
| Add remote connection | `git remote add origin <url>` | Connect local repo to remote |
| View remote details | `git remote -v` | Show remote URLs (fetch and push) |
| Change remote URL | `git remote set-url origin <new-url>` | Update remote connection |
| Check repository status | `git status` | Show current branch, staged, unstaged files |
| View commit history | `git log --oneline -10` | Show last 10 commits |
| View detailed history | `git log --oneline --decorate` | Show commits with branch info |

---

## Configuration

| Task | Command | What It Does |
|------|---------|-------------|
| Set user name (local) | `git config user.name "Your Name"` | Set author name for this repo |
| Set user email (local) | `git config user.email "email@example.com"` | Set author email for this repo |
| Set user name (global) | `git config --global user.name "Your Name"` | Set author name for all repos |
| Set user email (global) | `git config --global user.email "email@example.com"` | Set author email for all repos |
| View configuration | `git config --list` | Show all current settings |
| Configure auto-push tags | `git config --global push.followTags true` | Push tags automatically with commits |

---

## Branches

| Task | Command | What It Does |
|------|---------|-------------|
| List all branches | `git branch` | Show all local branches |
| List remote branches | `git branch -r` | Show all remote branches |
| Create new branch | `git branch feature-name` | Create branch (doesn't switch) |
| Create and switch | `git switch -c feature-name` | Create branch and switch to it |
| Switch to branch | `git switch main` | Switch to existing branch |
| Switch to previous branch | `git switch -` | Switch to branch you were just on |
| Delete branch | `git branch -d feature-name` | Delete branch (safe, warns if not merged) |
| Force delete branch | `git branch -D feature-name` | Force delete branch (dangerous) |
| Rename current branch | `git branch -m new-name` | Rename branch you're on |
| Rename other branch | `git branch -m old-name new-name` | Rename a different branch |
| Set upstream branch | `git branch -u origin/main` | Set tracking branch |

---

## Staging and Committing

| Task | Command | What It Does |
|------|---------|-------------|
| Stage all files | `git add .` | Add all changed files to staging |
| Stage specific file | `git add filename.md` | Stage only one file |
| View changes (unstaged) | `git diff` | Show what changed in working directory |
| View changes (staged) | `git diff --staged` | Show what's staged but not committed |
| Unstage file | `git restore --staged filename.md` | Remove from staging, keep changes |
| Unstage all files | `git reset` | Unstage everything |
| Create commit | `git commit -m "message"` | Save staged changes with message |
| Commit with editor | `git commit` | Open editor for detailed commit message |
| Amend last commit | `git commit --amend -m "new message"` | Fix recent commit message |
| Amend and add files | `git add filename.md` then `git commit --amend` | Add files to last commit |

---

## Viewing Changes

| Task | Command | What It Does |
|------|---------|-------------|
| Show specific commit | `git show abc1234` | View commit details and changes |
| Show specific commit (file) | `git show abc1234:docs/file.md` | View file contents from old commit |
| Compare branches | `git diff main feature-branch` | Show differences between branches |
| Compare with remote | `git diff main origin/main` | Show unpushed commits |
| View who changed lines | `git blame filename.md` | Show author and commit for each line |

---

## Pushing and Pulling

| Task | Command | What It Does |
|------|---------|-------------|
| Push to remote | `git push` | Upload commits to remote |
| Push new branch | `git push -u origin branch-name` | Push branch and set upstream |
| Push to specific branch | `git push origin main` | Push to specific remote branch |
| Push all branches | `git push origin --all` | Push all local branches |
| Push all tags | `git push origin --tags` | Push all local tags |
| Push single tag | `git push origin tag-name` | Push specific tag |
| Pull from remote | `git pull` | Fetch and merge remote changes |
| Pull from specific branch | `git pull origin main` | Pull specific remote branch |
| Fetch only (no merge) | `git fetch` | Download remote changes without merging |
| Force push (dangerous) | `git push --force origin branch` | Overwrite remote (only if necessary) |

---

## Merging

| Task | Command | What It Does |
|------|---------|-------------|
| Merge branch | `git merge feature-branch` | Merge feature-branch into current branch |
| Abort merge | `git merge --abort` | Cancel merge during conflicts |
| Continue after resolve | `git add .` then `git commit` | Complete merge after resolving conflicts |
| Merge with squash | `git merge --squash feature-branch` | Combine all commits into one |
| Show merge conflicts | `git status` | Show files with conflicts |

---

## Rebasing

| Task | Command | What It Does |
|------|---------|-------------|
| Rebase on main | `git rebase main` | Replay commits on top of main |
| Interactive rebase | `git rebase -i HEAD~3` | Edit, squash, or reorder last 3 commits |
| Abort rebase | `git rebase --abort` | Cancel rebase in progress |
| Continue after resolve | `git rebase --continue` | Continue rebase after resolving conflicts |
| Rebase and merge | `git rebase main` then `git push` | Rebase before merging to keep linear history |

:::warning

Never rebase commits already pushed to a shared branch. Rebase only local commits.

:::

---

## Stashing

| Task | Command | What It Does |
|------|---------|-------------|
| Stash changes | `git stash` | Save work without committing |
| Stash with message | `git stash push -m "description"` | Save work with descriptive name |
| List all stashes | `git stash list` | Show all saved stashes |
| Apply stash | `git stash apply` | Restore stash (keep it) |
| Apply and remove | `git stash pop` | Restore stash and delete it |
| Apply specific stash | `git stash apply stash@{0}` | Restore particular stash |
| View stash contents | `git stash show stash@{0}` | See what's in a stash |
| View stash details | `git stash show -p stash@{0}` | See actual line changes in stash |
| Delete stash | `git stash drop stash@{0}` | Remove stash permanently |
| Delete all stashes | `git stash clear` | Remove all stashes |
| Stash untracked files | `git stash -u` | Include new files in stash |

---

## Tagging

| Task | Command | What It Does |
|------|---------|-------------|
| Create lightweight tag | `git tag version-1.0` | Simple tag at current commit |
| Create annotated tag | `git tag -a v1.0 -m "Release message"` | Tag with metadata and message |
| Tag specific commit | `git tag version-1.0 abc1234` | Tag an old commit |
| List all tags | `git tag` | Show all tags |
| List tags by pattern | `git tag -l "v1*"` | Show tags matching pattern |
| View tag details | `git show version-1.0` | Show tag message and commit |
| Push single tag | `git push origin version-1.0` | Upload tag to remote |
| Push all tags | `git push origin --tags` | Upload all tags |
| Delete local tag | `git tag -d version-1.0` | Remove tag from your computer |
| Delete remote tag | `git push origin --delete version-1.0` | Remove tag from remote |

---

## Undoing Changes

| Task | Command | What It Does |
|------|---------|-------------|
| Discard changes (file) | `git restore filename.md` | Revert file to last commit |
| Discard all changes | `git restore .` | Revert working directory to last commit |
| Unstage file | `git restore --staged filename.md` | Remove from staging, keep changes |
| Unstage all | `git reset` | Unstage everything |
| Undo recent commit (keep changes) | `git reset --soft HEAD~1` | Undo commit, changes staged |
| Undo commit (unstaged) | `git reset HEAD~1` | Undo commit, changes unstaged |
| Undo commit (delete changes) | `git reset --hard HEAD~1` | Undo commit and delete changes |
| Undo multiple commits | `git reset --soft HEAD~3` | Undo last 3 commits, keep changes |
| Reset to specific commit | `git reset --hard abc1234` | Go back to specific commit |
| Revert commit (safe) | `git revert abc1234` | Create commit that undoes changes |
| Revert without commit | `git revert --no-commit abc1234` | Revert changes, don't commit yet |
| View all operations | `git reflog` | Show all Git operations (for recovery) |
| Recover deleted branch | `git checkout -b branch-name commit-hash` | Recreate branch from reflog entry |

:::danger

`git reset --hard` deletes changes permanently. Only use when certain. `git revert` is safer for shared branches.

:::

---

## Checking Status

| Task | Command | What It Does |
|------|---------|-------------|
| Quick status | `git status` | Show current state |
| Status with branch info | `git status -b` | Show branch tracking info |
| Short status | `git status -s` | Condensed status output |

---

## Useful Shortcuts

| Task | Command | What It Does |
|------|---------|-------------|
| View last 5 commits | `git log --oneline -5` | Quick commit history |
| One-line detailed log | `git log --oneline --graph --all` | Visual tree of all commits |
| See unpushed commits | `git log --oneline origin/main..HEAD` | Commits not yet pushed |
| See changes since last tag | `git log tag-name..HEAD` | What changed since release |
| Show commit statistics | `git log --stat` | Files changed per commit |

---

## Common Workflow Patterns

### Create and Push New Feature Branch

```bash
git switch -c feature/new-docs
# Make changes
git add .
git commit -m "Add new documentation"
git push -u origin feature/new-docs
```

### Update Feature Branch from Main

```bash
git switch main
git pull origin main
git switch feature/docs
git rebase main
git push --force-with-lease origin feature/docs
```

### Merge Feature Branch

```bash
git switch main
git pull origin main
git merge --squash feature/docs
git commit -m "Merge documentation feature"
git push origin main
git branch -d feature/docs
```

### Create Release Tag

```bash
git switch main
git pull origin main
git tag -a v1.0.0 -m "Release v1.0.0 - Documentation complete"
git push origin v1.0.0
```

### Fix Mistake Before Pushing

```bash
git log --oneline -3  # Check what you did
git reset --soft HEAD~1  # Undo last commit, keep changes
git add correct-file.md
git commit -m "Corrected message"
```

### Fix Mistake After Pushing (Shared Branch)

```bash
git log --oneline -3  # Find commit to undo
git revert abc1234  # Create new commit that undoes it
git push origin main
```

---

## Emergency Commands (Use Carefully)

| Situation | Command | Warning |
|-----------|---------|---------|
| Recover lost commit | `git reflog` then `git reset --hard <commit>` | Use after accidentally deleting branches |
| Completely reset branch | `git reset --hard origin/main` | Discards all local changes |
| Clean untracked files | `git clean -fd` | Permanently deletes files |
| Force push (override remote) | `git push --force origin branch` | Only on non-shared branches |

:::danger

Emergency commands are destructive. Use `git reflog` to verify before recovering. Ask your team lead for help if unsure.

:::

---

## Tips for Success

:::important

**Always before destructive operations:**
1. Run `git status` to see what you have
2. Run `git log --oneline -5` to verify you're on right branch
3. Run `git diff` to see changes you might lose
4. For important work, stash first: `git stash`

:::

:::tip

**Save these favorites:**
- `git status` — Use constantly, it's your best friend
- `git log --oneline` — Understand what you're working with
- `git diff` — Verify before committing
- `git reflog` — Recovery safety net

:::

:::note

**Pro tips:**

- Use branch names that describe the work: `feature/api-docs`, `fix/broken-link`, `docs/update-2024`
- Write commit messages that explain WHY, not just WHAT
- Commit frequently with small, logical changes
- Push to remote regularly so work is backed up
- Use tags for all releases

:::

---

## Next Steps

Bookmark this page and return when you need command syntax. With practice, these commands become second nature. You're now ready to use Git confidently in your documentation workflows!

For detailed explanations, refer back to the lesson modules. For troubleshooting, check the "Common mistakes" sections in each lesson.