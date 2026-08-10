---
sidebar_position: 3
---
# Install Cursor

> **Lesson level:** Beginner
>
> **Time to complete:** 20–30 minutes
>
> **Prerequisites:** None

---

# Learning objectives

After you complete this lesson, you will be able to:

- Understand what Cursor is.
- Understand how Cursor can support technical writing and documentation work.
- Check if your computer meets the basic requirements.
- Download and install Cursor.
- Sign in to Cursor.
- Open a documentation project in Cursor.
- Verify that Cursor is working correctly.
- Fix common installation problems.

---

# What is Cursor?

Cursor is an AI-powered code editor based on Visual Studio Code.

It provides the familiar editor experience you may already know from Visual Studio Code, but adds AI features that can help you work with files, code, and documentation.

For a Technical Writer, Cursor can be useful when your documentation is stored in a Git repository.

You can use Cursor to:

- Write Markdown files
- Edit documentation
- Search across a documentation project
- Explain unfamiliar code
- Create files
- Update files
- Work with Git repositories
- Review documentation changes
- Ask questions about a project
- Work with AI-assisted development tools

Cursor is particularly useful for Docs-as-Code because your documentation, source files, configuration files, and Git repository can all be managed from the same workspace.

> **Important**
>
> Cursor is an AI-assisted tool. It does not replace your technical writing skills or your review process.
>
> You are still responsible for checking the accuracy, structure, terminology, and quality of the content you publish.

---

# Why use Cursor for documentation?

If you work with traditional documentation tools, you may be used to editing content in a dedicated authoring application.

Docs-as-Code changes this workflow.

Your documentation may live alongside source code in a Git repository and may contain:

- Markdown files
- Configuration files
- Images
- Code examples
- API definitions
- Build files
- Scripts

Cursor gives you one place to work with these files.

For example, you can open a documentation repository and ask Cursor to help you:

```text
Explain how this documentation project is structured.
```
You can then inspect the result, make your own decisions, and update the documentation.

Cursor can also help with repetitive tasks, such as finding similar headings or identifying files that may need updating.

**Best Practice**

> Use AI to assist your work, not to make publishing decisions for you.
Always review AI-generated content before you commit or publish it.

---

# How Cursor fits into your documentation workflow

A typical Docs-as-Code workflow might look like this:

```text
Documentation Project
        │
        ▼
      Git
        │
        ▼
     Cursor
        │
        ├── Write Markdown
        ├── Edit files
        ├── Review changes
        └── Work with AI
        │
        ▼
   Pull Request
        │
        ▼
      Review
        │
        ▼
     Publish
```

Cursor is the editor in this workflow.

Git remains responsible for version control, and your team's review and publishing processes remain important.

---

# Before you begin

You need:
| Requirement          | Required            |
| -------------------- | ------------------- |
| Internet connection  | Yes                 |
| Computer             | Yes                 |
| User account         | Yes                 |
| Administrator access | Not always required |

Cursor provides desktop applications for:

- Windows
- macOS
- Linux

The available Windows installers include User and System options, as well as ARM64 versions. macOS and Linux also have platform-specific downloads.

For this lesson, the installation steps use **Windows.**

----

### Step 1 — Check your operating system

Before installing Cursor, check which version of Windows you are using.

Press:

Windows + R

Type:
```text
winver
```

Select OK.

Windows displays information about your operating system.

**Expected result:** You can see your Windows version.

---

### Step 2 — Download Cursor

1. Open your web browser.

2. Go to the official Cursor download page:

[Download Cursor](https://cursor.com/download)

3. Cursor provides separate downloads for Windows, macOS, and Linux.

4. For Windows, you will see options such as:

Windows x64 — System
Windows x64 — User
Windows ARM64 — System
Windows ARM64 — User

> If you are using a standard Windows computer with an Intel or AMD processor, select the appropriate Windows x64 installer.

> If you are not sure which installer to choose, check your Windows system information before continuing.

**Best Practice**

Download Cursor from the official Cursor website.

Avoid downloading the installer from third-party software websites.

---

### Step 3 — Install Cursor

After the download finishes:

1. Open the downloaded installer.
2. Follow the installation instructions.
3. Review the installation options.
4. Keep the default settings unless you have a reason to change them.
5. Complete the installation.

Cursor should now be available on your computer.

---

### Step 4: Start Cursor
Open the Windows Start menu.

Search for:
```text
Cursor
```

Select Cursor.

Cursor opens.

**Expected result:** You see the Cursor editor.

The first launch may display setup or sign-in options.

Follow the instructions shown in the application.

---

### Step 5 — Sign in to Cursor

Cursor provides account-based features, so you may be asked to sign in.

Follow the sign-in instructions displayed by Cursor.

> If you do not have an account, create one when prompted.

Complete any verification steps required by the application.

> **Important**
Do not share your account credentials with anyone.
If you are using Cursor as part of an organization, follow your organization's security and AI usage policies.

---

### Step 6 — Open a project

Now open a project in Cursor.

For this course, you will eventually work with a Git-based documentation project.

In Cursor:

1. Select File.
2. Select Open Folder.
3. Browse to your project folder.
4. Select the folder.
5. Select Select Folder.

Your project appears in the Explorer.

You should see the files and folders that belong to the project.

For example:

```text
my-documentation-project/
│
├── docs/
├── images/
├── README.md
└── ...
```

---

### Step 7 — Open a Markdown file

Find a Markdown file in your project.

For example:

```text
README.md
```

Select the file.

Cursor opens the file in the editor.

You can now edit the Markdown file just as you would in another code editor.

---

### Step 8 — Test Cursor with a simple question

Cursor includes AI features that can help you understand and work with your project.

For example, select a Markdown file and ask:

```text
Explain the structure of this document.
```

Review the response.

Do not make changes yet.

> The purpose of this step is simply to confirm that the AI features are available and working.

**Expected result:** Cursor responds to your question.

---

### Step 9 — Make a small documentation change

Now make a simple change to your Markdown file.

For example, add:

```text
## About this project

This project contains documentation created as part of the Docs-as-Code learning journey.
```

Save the file.

You have now used Cursor to:

1. Open a documentation project.
2. Open a Markdown file.
3. Ask an AI-assisted question.
4. Edit documentation.

---

### Step 10 — Check your Git changes

If your project is a Git repository, open the Source Control view in Cursor.

You should see the file you changed.

For example:

Changes

```text
M README.md
```

M means the file has been modified.

> This is an important part of the Docs-as-Code workflow.

**Cursor** helps you edit the documentation.

**Git** keeps track of the changes.

---
## Cursor and Git

Cursor and Git serve different purposes.

| Tool       | Purpose                               |
| ---------- | ------------------------------------- |
| Cursor     | Edit files and work with AI           |
| Git        | Track changes                         |
| GitHub     | Store and collaborate on repositories |
| Docusaurus | Build the documentation website       |

The common workflow is like this:

```text
Cursor
  │
  │ Write and edit
  ▼
Git
  │
  │ Track changes
  ▼
GitHub
  │
  │ Collaborate
  ▼
Docusaurus
  │
  │ Build
  ▼
Documentation Website
```
Understanding this distinction will become important as you continue through the course.

--- 

## Common installation problems

### Cursor does not start after installation

<details>
<summary><strong>Show answer</strong></summary>

**Cause**

The installation may not have completed correctly.

**Solution**

Try the following:

1. Close the installer.
2. Open the Windows Start menu.
3. Search for **Cursor**.
4. Start Cursor again.

If Cursor is not listed, download the installer again from the official Cursor website.

</details>

---
### Windows displays a security warning
<details>
<summary><strong>Show answer</strong></summary>

**Cause**

Windows may display a security prompt when you install software downloaded from the internet.

**Solution**

Make sure you downloaded Cursor from the official website.

If your organization manages your computer, contact your IT team before continuing.

</details>

---
### Cursor cannot open my project

<details>
<summary><strong>Show answer</strong></summary>

**Cause**

You may have selected the wrong folder.

**Solution**

Open the folder that contains your project files.

For example:

```text
C:\Projects\my-documentation-project
```
</details>

---
### The AI features are not available.
<details>
<summary><strong>Show answer</strong></summary>

**Cause**

Your account may not be signed in, or the feature may require additional configuration.

**Solution**

Check that:

- You are signed in to Cursor.
- Your internet connection works.
- Cursor is up to date.
- Your organization has not restricted AI features.

If the problem continues, check the official Cursor documentation and support resources.
</details>

---

## Best practices

When using Cursor for technical documentation:

- Keep your documentation in a Git repository.
- Work from the project folder.
- Review AI-generated content before using it.
- Check technical accuracy with the subject matter expert when required.
- Follow your organization's AI and security policies.
- Never paste confidential information into an AI tool unless your organization explicitly allows it.
- Use meaningful Git commits.
- Review your changes before creating a Pull Request.
- Keep documentation and code changes traceable.

### Documentation Manager Tip

AI can make documentation work faster, but speed is not the same as quality.

A Technical Writer still needs to understand the product, question the output, check terminology, and make sure the documentation meets the user's needs.

---

# Key Terms

| Term         | Definition                                                                               |
| ------------ | ---------------------------------------------------------------------------------------- |
| Cursor       | An AI-powered code editor used to work with software projects and files.                 |
| Editor       | The area where you view and edit files.                                                  |
| Explorer     | The part of the editor that displays project files and folders.                          |
| Git          | A version control system used to track changes to files.                                 |
| Repository   | A project managed by Git.                                                                |
| Markdown     | A lightweight markup language commonly used for technical documentation.                 |
| AI           | Artificial intelligence used to assist with tasks such as analysis, writing, and coding. |
| Pull Request | A request to review changes before they are merged into a shared repository.             |

---

# Summary

In this lesson, you learned how to:

- Understand what Cursor is.
- Understand how Cursor can support technical writing.
- Check your operating system.
- Download Cursor.
- Install Cursor.
- Start Cursor.
- Sign in to Cursor.
- Open a documentation project.
- Open and edit a Markdown file.
- Use Cursor's AI features.
- Check changes using Git.

You now have Cursor installed and ready to use as part of your Docs-as-Code workflow.

---

## Knowledge check

### What is Cursor?

<details>
<summary><strong>What is Cursor?</strong></summary>
Cursor is an AI-powered code editor that can be used to work with project files and assist with development and documentation tasks.
</details>

---

### Where should you download Cursor?

<details>
<summary><strong>Where should you download Cursor?</strong></summary>

Download Cursor from the official Cursor website.

</details>

---

### Do you need Node.js to install the Cursor desktop application?

<details>
<summary><strong>Do you need Node.js to install Cursor?</strong></summary>

No. Node.js is not required to install the Cursor desktop application.

</details>

---
### Why can Cursor be useful for Technical Writers?

<details>
<summary><strong>Why can Cursor be useful for Technical Writers?</strong></summary>

Cursor can help Technical Writers work directly with Markdown files, Git repositories, code examples, configuration files, and other files that make up a Docs-as-Code project.

</details>

---
### What is the difference between Cursor and Git?

<details>
<summary><strong>What is the difference between Cursor and Git?</strong></summary>

Cursor is an editor and AI-assisted development tool.

Git is a version control system that tracks changes to files.

</details>

---
### Should you publish AI-generated documentation without reviewing it?

<details>
<summary><strong>Should you publish AI-generated documentation without reviewing it?</strong></summary>

No, always review AI-generated content for:

- Accuracy
- Completeness
- Terminology
- Style
- Audience
- Technical correctness

</details>
---

# Practice exercise

Complete the following tasks:

1. Download Cursor from the official website.
2. Install Cursor.
3. Start Cursor.
4. Sign in or create a Cursor account.
5. Open a documentation project.
6. Open a Markdown file.
7. Ask Cursor to explain the document.
8. Make a small documentation change.
9. Save the file.
10. Open the Source Control view.
11. Review the change shown by Git.

### Optional exercise

Ask Cursor:

```text
Review this Markdown document for unclear instructions.
Do not make any changes.
List the issues you find and explain why each issue could
make the documentation difficult for a beginner to follow.
```

Review the response.

> Do not accept the suggestions automatically.

Decide which suggestions are useful and which ones should be ignored.

---

# Next lesson

Verify Your Development Environment

In the next lesson, you will check that the tools installed during the Environment Setup module are working correctly.

You will verify:

- Git
- Node.js
- npm
- Python
- Docker
- Visual Studio Code
- Cursor

**The goal is to finish the setup with a working environment before you start building your Docs-as-Code project.**