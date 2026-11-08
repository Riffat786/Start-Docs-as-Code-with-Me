---
title: Creating and Managing Git Repositories
sidebar_position: 1
description: Learn how to create and manage Git repositories for your documentation projects.
---

# Creating and Managing Git Repositories

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what a Git repository is.
- Create a new Git repository.
- Initialize Git in an existing project.
- Understand repository structure and the `.git` folder.
- Connect to remote repositories.
- Work with repositories locally and remotely.
- Manage repository settings.
- Apply repositories in documentation projects.

---

## What Is a Git Repository?

A Git repository is a folder that Git tracks. It contains your project files and a hidden `.git` folder with all version control information.

### Repository Anatomy

```
my-documentation/
├── docs/
│   ├── guide.md
│   ├── api.md
│   └── images/
├── .git/                    (Hidden Git folder)
│   ├── objects/
│   ├── refs/
│   └── config
├── .gitignore              (Files to ignore)
└── README.md
```

### What `.git` Folder Contains

The hidden `.git` folder contains:

- **objects/** - All commits, blobs, and trees
- **refs/** - Branch and tag references
- **config** - Repository configuration
- **HEAD** - Current branch pointer
- **logs/** - History of reference changes

:::warning

Never edit files in the `.git` folder manually. Never delete the `.git` folder unless you want to remove Git entirely from the project.

:::

### Local vs. Remote Repository

**Local Repository:**

- On your computer
- Where you work and make commits
- Contains complete history

**Remote Repository:**

- On a server (GitHub, GitLab, etc.)
- Shared with team members
- Source of truth for team

Most projects have both: a local copy for work and a remote for collaboration.

:::important

A local repository without a remote is fine for personal projects. A shared project needs both local and remote repositories.

:::

---

## Before You Start

Make sure you have:

- Git installed on your computer
- A folder where you want to create the repository
- Terminal or Git Bash open
- Visual Studio Code or text editor

If you need to install Git, see your system's instructions or ask your team lead.

:::note

**For Beginners**

Think of a repository as a project folder that Git watches. Every change you make gets tracked by Git.

:::

---

## Creating a New Repository

### Scenario 1: Start Fresh

You want to create a new documentation project from scratch.

### How to Create a New Repository

**Step 1: Create a folder**

```bash
mkdir my-documentation
cd my-documentation
```

**What it does:**

- `mkdir` creates a new folder
- `cd` enters that folder

**Step 2: Initialize Git**

```bash
git init
```

**What it does:**

- Creates a hidden `.git` folder
- Initializes an empty Git repository
- Sets up Git to track this folder

**Result:**

```text
Initialized empty Git repository in /Users/username/my-documentation/.git/
```

**Step 3: Verify the repository**

```bash
git status
```

**Result:**

```text
On branch main

No commits yet

nothing to commit
```

This confirms the repository is ready.

:::tip

You can check for the `.git` folder with:

```bash
ls -la
```

On Windows (PowerShell):

```bash
ls -Force
```

:::

---

## Adding Files to a New Repository

After creating a repository, add your documentation files.

### Step 1: Add Documentation Files

Create or copy your markdown files:

```bash
echo "# My Documentation" > README.md
echo "## Getting Started" > getting-started.md
```

### Step 2: Check Repository Status

```bash
git status
```

**Result:**

```text
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
        getting-started.md

nothing added to commit but untracked files present (use "git add" to track)
```

Red text means files aren't tracked yet.

### Step 3: Stage the Files

```bash
git add .
```

This stages all files for the first commit.

### Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: add documentation files"
```

**Result:**

```text
[main (root-commit) abc1234] Initial commit: add documentation files
 2 files changed, 5 insertions(+)
 create mode 100644 README.md
 create mode 100644 getting-started.md
```

Your repository now has its first commit.

---

## Initializing Git in Existing Projects

### Scenario 2: Add Git to Existing Project

You have documentation files already in a folder, and you want to add Git version control.

### How to Initialize Git in an Existing Folder

**Step 1: Navigate to the project folder**

```bash
cd path/to/my-existing-project
```

**Step 2: Initialize Git**

```bash
git init
```

**Step 3: Create .gitignore (optional but recommended)**

Create a `.gitignore` file to exclude files Git shouldn't track:

```bash
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
```

**What `.gitignore` does:**

- Tells Git which files to ignore
- Prevents tracking temporary or build files
- Keeps repository clean

### Step 4: Stage and commit existing files

```bash
git add .
git commit -m "Initial commit: import existing documentation"
```

Now your existing project is under Git version control.

:::note

**For Documentation Projects**

Consider adding to `.gitignore`:

```text
# Build output
_build/
dist/
*.pdf

# Temporary files
*.tmp
.DS_Store

# Editor files
.vscode/
.idea/
*.swp
```

:::

---

## Understanding .gitignore

The `.gitignore` file tells Git which files to ignore.

### Why Use .gitignore?

- Prevents tracking temporary files
- Keeps repository clean
- Avoids committing build artifacts
- Prevents accidentally committing secrets

### Example .gitignore for Documentation

```text
# Build directories
_build/
dist/
site/

# Generated files
*.pdf
*.epub

# Dependencies
node_modules/
venv/

# Editor files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.bak
*~
```

### Global .gitignore

You can create a global `.gitignore` that applies to all your repositories:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

Then add common patterns to `~/.gitignore_global`.

:::tip

Different projects need different `.gitignore` files. Documentation projects ignore different files than code projects. Customize your `.gitignore` for each project.

:::

---

## Connecting to a Remote Repository

After creating a local repository, connect it to a remote (like GitHub).

### How to Add a Remote Connection

**Step 1: Create repository on GitHub**

On GitHub website:
1. Click "New Repository"
2. Name it: `my-documentation`
3. Don't initialize with README (you have local files)
4. Click "Create"

GitHub shows a URL: `https://github.com/username/my-documentation.git`

**Step 2: Add remote connection locally**

```bash
git remote add origin https://github.com/username/my-documentation.git
```

**What it does:**

- `origin` is the remote's name (standard name for primary remote)
- URL points to your GitHub repository

**Step 3: Verify the connection**

```bash
git remote -v
```

**Result:**

```text
origin  https://github.com/username/my-documentation.git (fetch)
origin  https://github.com/username/my-documentation.git (push)
```

This confirms the connection is set up.

**Step 4: Push your local commits**

```bash
git push -u origin main
```

**What it does:**

- `-u` sets `origin/main` as the tracking branch
- Uploads your local commits to GitHub
- Creates `main` branch on remote

**Result:**

```text
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 287 bytes | 287.00 B/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/username/my-documentation.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Your local repository is now connected to GitHub.

:::tip

After the first push with `-u`, future pushes are simpler:

```bash
git push
```

Git remembers the tracking relationship.

:::

---

## Repository Configuration

Configure your repository settings.

### Setting User Information

Configure who you are (for commits):

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

This information appears in every commit.

### Global vs. Local Configuration

**Local (current repository):**

```bash
git config user.name "Your Name"
```

Applies only to this repository.

**Global (all your repositories):**

```bash
git config --global user.name "Your Name"
```

Applies to all repositories on this computer.

:::note

Set global configuration once. Use local configuration to override for specific projects.

:::

### View Repository Configuration

```bash
git config --list
```

Shows all configuration settings.

---

## Common Repository Operations

### Checking Repository Status

```bash
git status
```

Shows current branch, untracked files, staged changes.

### Viewing Repository History

```bash
git log --oneline -10
```

Shows 10 most recent commits.

### Renaming the Default Branch

The default branch is usually `main` or `master`. To rename:

```bash
git branch -M main
```

Then push:

```bash
git push -u origin main
```

### Removing a Repository

To stop tracking the project with Git (keep files):

```bash
rm -rf .git
```

This deletes the `.git` folder. The project files remain.

:::warning

Once `.git` is deleted, all Git history is lost. Only do this if you're sure.

:::

---

## Repository Best Practices

### Initial Setup

- **Create `.gitignore` immediately.** Before committing, exclude files you don't want tracked.
- **Add a README.** Describe the project, how to set it up, how to contribute.
- **Add a LICENSE.** Specify how others can use the project.
- **Write clear initial commit message.** "Initial commit" describes everything, but be specific when possible.

### Ongoing Management

- **Keep `.git` folder safe.** Never delete or manually edit it.
- **Commit regularly.** Don't wait until the end of the day.
- **Use meaningful commit messages.** Help future readers understand changes.
- **Keep remote in sync.** Push frequently so team members have latest work.
- **Review `.gitignore` periodically.** Add new file types as your project evolves.

:::note

**Documentation Manager's Tip**

When setting up a new documentation repository:

1. Create `.gitignore` with doc-specific exclusions
2. Add CONTRIBUTING.md with team guidelines
3. Add README.md explaining the documentation structure
4. Set up team members as collaborators
5. Establish branch naming conventions
6. Create the initial commit cleanly

:::

---

## Troubleshooting Repository Issues

### "fatal: not a git repository"

**Problem:** Running Git commands in a folder without `.git`.

**Solution:**

```bash
git init
```

Or navigate to a folder that has Git initialized.

### "fatal: No remote repository specified"

**Problem:** Trying to push/pull without configuring remote.

**Solution:**

```bash
git remote add origin <url>
git push -u origin main
```

### "error: could not lock config file"

**Problem:** Permission issue or file is in use.

**Solution:**

Close other Git tools (IDE extensions, GitHub Desktop). Then retry.

---

## Summary

In this lesson, you learned how to:

- Understand what a Git repository is and its structure.
- Create a new repository with `git init`.
- Add files and make initial commits.
- Connect to remote repositories on GitHub.
- Configure repository settings.
- Manage repositories with best practices.

Creating a repository is the first step in version control. A well-organized repository makes collaboration smooth and project maintenance easier.

---

## Exercise

1. Create a new folder: `mkdir test-docs`
2. Navigate into it: `cd test-docs`
3. Initialize Git: `git init`
4. Create a `.gitignore` file with common exclusions
5. Create README.md with project description
6. Create a docs/ folder with 2 markdown files
7. Check status: `git status`
8. Stage files: `git add .`
9. Create initial commit: `git commit -m "Initial commit: setup documentation project"`
10. View history: `git log --oneline`
11. Create a repository on GitHub
12. Add remote connection: `git remote add origin <your-url>`
13. Push to remote: `git push -u origin main`

---

## Common mistakes

<details>
<summary><strong>1. Initializing Git in the wrong folder</strong></summary>

**Cause**

Ran `git init` in a parent folder instead of the project folder.

**Solution**

Check your location with `pwd`. Navigate to the correct project folder, then `git init`.

Only initialize Git at the project root, not in parent directories.

</details>

<details>
<summary><strong>2. Committing files that should be ignored</strong></summary>

**Cause**

Added `.gitignore` after initial commit, but unwanted files were already committed.

**Solution**

Create `.gitignore` BEFORE making first commit.

If already committed:

```bash
git rm --cached filename
git commit -m "Remove unwanted file"
```

</details>

<details>
<summary><strong>3. Not configuring user information</strong></summary>

**Cause**

Made commits without setting user name/email.

**Problem**

Commits show unknown author or incorrect information.

**Solution**

Configure user information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

</details>

<details>
<summary><strong>4. Deleting .git folder accidentally</strong></summary>

**Cause**

Accidentally deleted `.git` folder thinking it was safe.

**Problem**

All Git history is lost permanently.

**Solution**

If backed up to remote, clone again:

```bash
git clone <remote-url>
```

If not backed up, the history is gone. Always push to remote regularly.

</details>

<details>
<summary><strong>5. Connecting to wrong remote</strong></summary>

**Cause**

Added wrong URL for remote repository.

**Solution**

Check remote:

```bash
git remote -v
```

Remove wrong remote:

```bash
git remote remove origin
```

Add correct remote:

```bash
git remote add origin <correct-url>
```

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a Git repository?</strong></summary>

A Git repository is a folder that Git tracks and manages. It contains your project files and a hidden `.git` folder with all version control information including commit history, branches, and configuration.

</details>

<details>
<summary><strong>2. What does `git init` do?</strong></summary>

`git init` initializes Git in a folder by creating a hidden `.git` directory. This converts a regular folder into a Git repository that can track changes.

</details>

<details>
<summary><strong>3. What is the `.git` folder?</strong></summary>

The `.git` folder is a hidden directory that contains all Git metadata: commits, branches, tags, configuration, and history. Never manually edit or delete it unless you want to remove Git from the project entirely.

</details>

<details>
<summary><strong>4. What is `.gitignore` and why is it important?</strong></summary>

`.gitignore` is a file that tells Git which files to ignore (not track). It's important for excluding temporary files, build artifacts, secrets, and other files that shouldn't be in version control.

</details>

<details>
<summary><strong>5. What's the difference between a local and remote repository?</strong></summary>

A **local repository** is on your computer where you work and make commits. A **remote repository** is on a server (like GitHub) shared with team members. Most projects have both for collaboration.

</details>

<details>
<summary><strong>6. How do you connect a local repository to a remote?</strong></summary>

Use the command:

```bash
git remote add origin <url>
```

This creates a connection named "origin" to the remote repository. Then push your commits with:

```bash
git push -u origin main
```

</details>

<details>
<summary><strong>7. What should `.gitignore` include for documentation projects?</strong></summary>

Common patterns for documentation:

- Build directories: `_build/`, `dist/`, `site/`
- Generated files: `*.pdf`, `*.epub`
- Dependencies: `node_modules/`, `venv/`
- Editor files: `.vscode/`, `.idea/`
- Temporary files: `*.tmp`, `*.bak`
- OS files: `.DS_Store`, `Thumbs.db`

</details>

<details>
<summary><strong>8. What do you do after creating a repository but before making commits?</strong></summary>

1. Create `.gitignore` file to exclude unwanted files
2. Add your documentation files to the folder
3. Configure user information (name, email) if not done globally
4. Create initial commit with `git init`, `git add .`, `git commit`
5. Connect to remote (if collaborative) with `git remote add origin <url>`

</details>

---

## Next Lesson

When you're ready to track changes, proceed to [Commits](./Commits.md) to learn how to save your documentation with meaningful messages.