---
title: Cloning Repositories with Git
sidebar_position: 2
description: Learn how to clone repositories to your computer and start working with version-controlled documentation.
---

# Cloning Repositories with Git

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what cloning means in Git.
- Clone a repository to your computer.
- Find and copy repository URLs.
- Clone from GitHub and other remote sources.
- Understand what files are downloaded during cloning.
- Troubleshoot common cloning errors.
- Organize cloned repositories on your computer.
- Apply cloning in real documentation projects.

---

## What Is Cloning?

Cloning means downloading a complete copy of a repository to your computer. This includes all files, commit history, and branches.

### Why Clone a Repository?

As a technical writer, you clone repositories to:

- Get a local copy of documentation to work on.
- Access the complete project history.
- Work independently without internet connection (after cloning).
- Collaborate with team members on shared documentation.
- Start contributing to documentation projects.

### Clone vs. Download

**Cloning** (`git clone`) downloads the repository with Git history and metadata. You can work with Git commands.

**Downloading** (ZIP file) gets just the files, not the Git history. You can't use Git commands.

:::important

Always clone repositories instead of downloading ZIP files when you need to contribute to a project. This preserves the Git history and connection to the remote.

:::

---

## Before You Start

Make sure you have:

- Git installed on your computer
- A terminal or Git Bash open
- Visual Studio Code or a text editor
- The URL of a repository you want to clone

:::note

**For Beginners**

If you don't have a repository URL yet, you can practice cloning a public example repository. Search on GitHub for "sample documentation" to find test projects.

:::

---

## Understanding Repository URLs

Before you can clone, you need the repository URL. This is the address of the remote repository.

### Finding the Repository URL

**Scenario:** Your team has a documentation project on GitHub, and you need to work on it.

**Step 1: Go to the repository on GitHub**

Visit the repository page in your browser.

**Step 2: Find the URL**

Click the **Code** button (green button, usually in the top right).

**Step 3: Copy the URL**

You'll see options for:
- HTTPS (most common)
- SSH (requires authentication setup)
- GitHub CLI

**Example URL:**

```text
https://github.com/your-team/documentation.git
```

### HTTPS vs. SSH

| Type | Use When | Requires |
|------|----------|----------|
| HTTPS | Starting out, want easy setup | GitHub password or personal access token |
| SSH | Experienced, prefer security | SSH keys configured |

For beginners, HTTPS is simpler.

---

## Your First Clone

### How to Clone a Repository

**Command:**

```bash
git clone https://github.com/your-team/documentation.git
```

**What it does:**

- Downloads the entire repository
- Creates a new folder with the repository name
- Sets up the connection to the remote
- Checks out the main branch

**Result in your terminal:**

```text
Cloning into 'documentation'...
remote: Counting objects: 245, done.
remote: Compressing objects: 100% (120/120), done.
Receiving objects: 87% (213/245), 2.43 MiB | 1.50 MiB/s
Receiving objects: 100% (245/245), 3.12 MiB | 1.75 MiB/s
Unpacking objects: 100% (245/245), done.
```

**After cloning:**

- A new folder named `documentation` appears
- It contains all project files
- Git is configured to track the remote

:::tip

The repository name becomes the folder name. If you clone `documentation.git`, a folder called `documentation` is created.

:::

---

## Cloning Into a Specific Folder

Sometimes you want to clone into a particular folder or with a different name.

### How to Clone Into a Custom Folder

**Command:**

```bash
git clone https://github.com/your-team/documentation.git my-docs
```

**What it does:**

- Clones the repository
- Names the folder `my-docs` instead of `documentation`
- Useful when cloning multiple repositories

**Result:**

A folder named `my-docs` is created with the repository contents.

:::tip

Use meaningful folder names like `api-docs`, `user-guide-docs`, or `release-notes` to organize multiple cloned repositories.

:::

---

## Understanding What Gets Cloned

When you clone a repository, you get more than just the files.

### What's Included

**Files:**
- All documentation files (Markdown, images, etc.)
- Configuration files (README, .gitignore, etc.)
- Code samples and examples

**Git History:**
- All previous commits
- All branches
- All tags

**Remote Configuration:**
- Connection to the original repository (`origin`)
- Ability to pull updates and push changes

### The .git Folder

A hidden `.git` folder contains all Git metadata. Don't edit it manually.

**To see hidden files:**

On Windows (PowerShell):
```bash
ls -Force
```

On macOS/Linux:
```bash
ls -a
```

:::warning

Never delete the `.git` folder unless you intentionally want to remove the Git repository. This removes all history and connection to the remote.

:::

---

## Verifying Your Clone

After cloning, verify that everything worked correctly.

### How to Verify the Clone

**Step 1: Navigate into the folder**

```bash
cd documentation
```

**Step 2: Check the status**

```bash
git status
```

**Result:**

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

**Step 3: View the remote**

```bash
git remote -v
```

**Result:**

```text
origin  https://github.com/your-team/documentation.git (fetch)
origin  https://github.com/your-team/documentation.git (push)
```

This shows the connection to the remote repository.

:::tip

If `git remote -v` shows no output, the clone didn't set up the remote properly. You can manually add it with `git remote add origin <url>`.

:::

---

## Common Clone Scenarios

### Scenario 1: Clone a Public Repository

Public repositories don't require authentication. Anyone can clone them.

**Command:**

```bash
git clone https://github.com/example/public-docs.git
```

**What happens:**

- Repository downloads immediately
- No password or authentication needed
- You can read all files

You can't push changes unless you're an owner or contributor.

### Scenario 2: Clone a Private Repository

Private repositories require authentication (password, SSH key, or token).

**Command (HTTPS):**

```bash
git clone https://github.com/your-team/private-docs.git
```

**What happens:**

- Git asks for authentication
- Enter your GitHub username and password (or personal access token)
- Repository downloads if authentication succeeds

:::warning

If you get an authentication error, make sure:

- You have access to the repository
- You're using the correct URL
- Your credentials are correct
- If using HTTPS, consider using a personal access token instead of password

:::

**Command (SSH):**

```bash
git clone git@github.com:your-team/private-docs.git
```

SSH requires setting up SSH keys first. See GitHub's documentation on SSH setup.

### Scenario 3: Clone a Specific Branch

By default, clone downloads the main branch. You can clone a specific branch.

**Command:**

```bash
git clone --branch feature/docs-update https://github.com/your-team/documentation.git
```

Or shorter:

```bash
git clone -b feature/docs-update https://github.com/your-team/documentation.git
```

**Result:**

The repository is cloned and automatically switched to the `feature/docs-update` branch.

:::note

Cloning a specific branch still downloads all branches. The `--branch` flag just sets which one is checked out initially.

:::

---

## Clone with Depth (Shallow Clone)

Large repositories with long histories can take time to clone. You can clone just recent commits.

### How to Do a Shallow Clone

**Command:**

```bash
git clone --depth 1 https://github.com/your-team/documentation.git
```

**What it does:**

- Downloads only the latest commit
- Saves time and disk space
- Useful for large projects
- You get all current files but limited history

**Result:**

Much faster clone, especially for projects with thousands of commits.

:::tip

Use shallow clones for large repositories. You can get the full history later with `git fetch --unshallow`.

:::

---

## Organizing Your Cloned Repositories

When working on multiple documentation projects, organize them logically.

### Folder Structure Suggestion

```text
Home Directory
  ├── projects/
  │   ├── api-docs/
  │   ├── user-guide/
  │   ├── release-notes/
  │   └── knowledge-base/
  └── work/
      └── [other projects]
```

### Creating an Organization Folder

**Command:**

```bash
mkdir projects
cd projects
git clone https://github.com/your-team/api-docs.git
git clone https://github.com/your-team/user-guide.git
```

All documentation projects stay in one place.

:::note

**Documentation Manager's Tip**

Ask your team members to use a consistent folder structure. If everyone keeps cloned repositories in `~/projects/docs/`, finding and managing them becomes easier.

:::

---

## Troubleshooting Clone Errors

### Error: "Could not resolve host"

**Problem:** No internet connection or wrong URL.

**Solution:**

- Check internet connection
- Verify the URL is correct
- Copy URL directly from GitHub to avoid typos

### Error: "Permission denied"

**Problem:** Authentication issue or wrong permissions.

**Solution:**

- Verify you have access to the repository
- Check credentials
- For HTTPS: use personal access token instead of password
- For SSH: ensure SSH keys are configured

### Error: "Repository not found"

**Problem:** Wrong URL or repository doesn't exist.

**Solution:**

- Double-check the repository URL
- Verify the repository still exists
- Ask a team member to share the correct URL

### Error: "Destination path already exists"

**Problem:** A folder with that name already exists.

**Solution:**

- Use a different folder name: `git clone <url> new-folder-name`
- Or delete/move the existing folder first

---

## What to Do After Cloning

### Step 1: Explore the Repository

```bash
cd documentation
ls
git log --oneline -5
```

This shows recent commits and the project structure.

### Step 2: Check the README

Most repositories have a README.md file with setup instructions.

```bash
cat README.md
```

### Step 3: Create a Branch for Your Work

Never work directly on main. Create a branch:

```bash
git checkout -b feature/my-changes
```

Now you can start editing documentation files.

### Step 4: Make Changes and Commit

Edit files, then:

```bash
git status
git add .
git commit -m "Update documentation"
```

### Step 5: Push Your Changes

When ready, push to the remote:

```bash
git push origin feature/my-changes
```

Then create a pull request on GitHub.

:::tip

Always follow this workflow:

1. Clone the repository
2. Create a branch
3. Make changes
4. Commit changes
5. Push to remote
6. Create a pull request

:::

---

## Best Practices

- **Clone into organized folders.** Keep documentation projects together in a dedicated directory.
- **Verify the clone.** Run `git status` to confirm the clone was successful.
- **Use HTTPS for simplicity.** As a beginner, HTTPS is easier to set up than SSH.
- **Keep clone folders for ongoing work.** Don't delete them after making changes; you'll need them for updates.
- **Understand what you're cloning.** Read the README before cloning to understand the project.
- **Clone to a work folder.** Create a dedicated folder for cloned repositories so your home directory stays organized.
- **Check branches after cloning.** Use `git branch -a` to see all available branches.

---

## Summary

In this lesson, you learned how to:

- Understand what cloning means in Git.
- Clone repositories from remote sources.
- Find and use repository URLs.
- Clone public and private repositories.
- Verify that cloning worked correctly.
- Organize cloned repositories.
- Troubleshoot common cloning errors.
- Prepare cloned repositories for collaboration.

Cloning is your first step in working with version-controlled documentation. It connects you to the project and enables collaboration.

---

## Exercise

1. Find a public repository on GitHub (search for "sample docs").
2. Copy the HTTPS URL.
3. Clone the repository to your computer.
4. Navigate into the cloned folder.
5. Run `git status` to verify the clone.
6. Run `git remote -v` to see the remote connection.
7. Create a new branch called `practice/explore`.
8. List all branches with `git branch -a`.

---

## Common mistakes

<details>
<summary><strong>1. Trying to clone into a non-empty folder</strong></summary>

**Cause**

Attempted to clone into a folder that already contains files.

**Solution**

Use a different folder name or delete/move the existing folder first.

Clone to an empty location: `git clone <url> new-folder-name`

</details>

<details>
<summary><strong>2. Cloning with wrong URL</strong></summary>

**Cause**

Copied incorrect URL or URL has typos.

**Solution**

Copy URL directly from GitHub using the green **Code** button. Don't type it manually.

Verify the URL contains `.git` at the end.

</details>

<details>
<summary><strong>3. Authentication errors on private repositories</strong></summary>

**Cause**

No credentials provided or wrong credentials.

**Solution**

For HTTPS: Create a personal access token on GitHub and use it as the password.

For SSH: Set up SSH keys on your computer and GitHub.

Ask your team lead for help with authentication setup.

</details>

<details>
<summary><strong>4. Cloning but ignoring the README</strong></summary>

**Cause**

Cloned repository without reading setup instructions.

**Solution**

Always read README.md after cloning. It contains important setup steps.

Run: `cat README.md` to view setup instructions.

</details>

<details>
<summary><strong>5. Making changes directly on main branch after cloning</strong></summary>

**Cause**

Started working without creating a feature branch.

**Solution**

Always create a branch before making changes: `git checkout -b feature/your-work`

Never make changes on main.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What does "cloning" a repository mean?</strong></summary>

Cloning means downloading a complete copy of a repository to your computer, including all files, commit history, branches, and the connection to the remote repository.

</details>

<details>
<summary><strong>2. Why should you clone instead of downloading a ZIP file?</strong></summary>

Cloning preserves the Git history, connection to the remote repository, and allows you to use Git commands. Downloading a ZIP only gives you the files without Git functionality.

</details>

<details>
<summary><strong>3. Where do you find the repository URL to clone?</strong></summary>

On GitHub, click the green **Code** button on the repository page. Copy the HTTPS or SSH URL from there.

</details>

<details>
<summary><strong>4. What's the difference between HTTPS and SSH cloning?</strong></summary>

**HTTPS** uses your GitHub username and password (or token). It's easier to set up but slightly less secure.

**SSH** uses cryptographic keys. It's more secure but requires additional setup of SSH keys.

For beginners, HTTPS is recommended.

</details>

<details>
<summary><strong>5. What happens when you run `git clone`?</strong></summary>

Git creates a new folder, downloads all files and history, sets up the remote connection (origin), and checks out the main branch automatically.

</details>

<details>
<summary><strong>6. How do you verify that a clone was successful?</strong></summary>

Run `git status` to see the current branch, and `git remote -v` to verify the connection to the remote repository.

</details>

<details>
<summary><strong>7. What should you do immediately after cloning a repository?</strong></summary>

1. Read the README.md file
2. Run `git status` to verify
3. Create a branch for your work
4. Never work directly on main

</details>

<details>
<summary><strong>8. What does the hidden `.git` folder contain?</strong></summary>

The `.git` folder contains all Git metadata including the commit history, branches, tags, and remote configuration. It's essential to Git functionality and should never be deleted.

</details>

---

## Next Lesson

When you're comfortable with cloning, proceed to [Commits](./Commits.md) to learn how to save your documentation changes.