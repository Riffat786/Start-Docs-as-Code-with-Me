---
sidebar_position: 2
---

# Install Claude Code

> **Lesson level:** Beginner
>
> **Time to complete:** 30–45 minutes
>
> **Prerequisites:** None

---

## Learning objectives

After you complete this lesson, you will be able to:

- Understand what Claude Code is.
- Understand why developers use Claude Code.
- Check if your computer meets the requirements.
- Install the required software.
- Install Claude Code.
- Verify that Claude Code works correctly.
- Fix common installation problems.

---

## What is Claude Code?

Claude Code is an AI coding assistant that runs inside your terminal.

Instead of opening a web browser to ask coding questions, you work directly from your project folder. Claude Code can help you:

- Explain code
- Write code
- Fix errors
- Create files
- Update files
- Generate documentation
- Answer programming questions

Claude Code understands the files inside your project. This makes it useful for software development and documentation projects.

---

## Why use Claude Code?

Many developers use Claude Code because it can:

- Work inside your project folder
- Read multiple files
- Help with Git workflows
- Generate documentation
- Help write Markdown
- Explain unfamiliar code
- Reduce repetitive work

Claude Code does **not** replace a developer. You remain responsible for reviewing every change before you commit it.

> **Best Practice**
>
> Never accept AI-generated code without reviewing it.

---

## How Claude Code works

```text
Your Computer
      │
      ▼
Terminal
      │
      ▼
Claude Code
      │
      ▼
Your Project Files
```

Claude Code works from your local computer. You start it from a terminal window.

---

## Before you begin

You need:

| Requirement | Required |
|-------------|----------|
| Internet connection | Yes |
| Administrator access | Recommended |
| Terminal | Yes |
| Node.js | Yes |
| Anthropic account | Yes |

---

## Step 1 — Check your operating system

Claude Code supports:

- Windows
- macOS
- Linux

**Windows**

Press:

**Windows + R**

Type:

```text
winver
```

Select **OK**.

You should see your Windows version.

**Expected result**

A window displays your Windows version.

---

## Step 2 — Install Node.js

Claude Code requires Node.js.

### What is Node.js?

`Node.js` allows JavaScript applications to run on your computer.

Claude Code uses `Node.js` to run.

### Install Node.js

1. Open your web browser.
2. Go to:

https://nodejs.org

3. Download the **LTS** version.
4. Run the installer.
5. Keep the default settings.
6. Finish the installation.

---

### Verify the installation

Open Command Prompt.

Run:

```bash
node --version
```

Example:

```text
v22.18.0
```

Now check npm.

```bash
npm --version
```

Example:

```text
10.9.3
```

**Expected result**

Both commands return version numbers.

---

## Step 3 — Install Git

Git is not required for Claude Code to start, but almost every software project uses Git.

Installing Git now will prevent problems later.

### Download Git

Go to:

https://git-scm.com

- Download the latest version.

- Run the installer.

- Keep the default settings.

---

### Verify Git

Open Command Prompt.

Run:

```bash
git --version
```

Example

```text
git version 2.50.1.windows.1
```

---

## Step 4 — Create an Anthropic account

Claude Code requires an Anthropic account.

1. Open your browser.
2. Go to:

https://console.anthropic.com

3. Create an account.
4. Verify your email address.
5. Sign in.

---

## Step 5 — Create an API key

Claude Code authenticates by using an API key.

### Create the key

1. Sign in to the Anthropic Console.
2. Open **API Keys**.
3. Select **Create Key**.
4. Give the key a name.
5. Copy the key.

Example:

```text
sk-ant-api03-xxxxxxxxxxxxxxxx
```

> **Important**
>
> Copy the key now.
>
> You might not be able to view it again.
> **Never** share your API key in email, chats or messages.

---

## Step 6 — Install Claude Code

Open Command Prompt.

Run:

```bash
npm install -g @anthropic-ai/claude-code
```

The installation may take several minutes.

**Expected result**

The installation completes without errors.

---

## Step 7 — Verify the installation

Run:

```bash
claude --version
```

Example

```text
1.0.x
```

**Expected result**

Claude Code displays its version.

---

## Step 8 — Start Claude Code

Open the folder that contains your project.

Example

```text
C:\Projects\MyProject
```

Open Command Prompt inside that folder.

Run:

```bash
claude
```

The first launch starts the authentication process.

Follow the on-screen instructions.

---

## Step 9 — Verify Claude Code

Ask a simple question.

Example:

```text
Explain this project.
```

Claude Code should begin responding.

---

### Installation workflow

```mermaid
flowchart TD

A[Install Node.js]
B[Install Git]
C[Create Anthropic Account]
D[Create API Key]
E[Install Claude Code]
F[Verify Installation]
G[Start Claude Code]

A --> B
B --> C
C --> D
D --> E
E --> F
F --> G

```

---

## Common installation problems

### 1. Problem

`node is not recognized`

**Cause**

Node.js is not installed or PATH is incorrect.

**Solution**

Restart the computer.

If the problem continues:

- Reinstall Node.js.
- Select the option to add Node.js to PATH.

---

### 2. Problem

`npm is not recognized`

**Cause**

Node.js installation failed.

**Solution**

Reinstall Node.js.

---

### 3. Problem

`claude is not recognized`

**Cause**

Claude Code did not install correctly.

**Solution**

Run:

```bash
npm install -g @anthropic-ai/claude-code
```

Then restart Command Prompt.

---

### 3. Problem

Authentication failed

**Cause**

The API key is invalid.

**Solution**

Create a new API key.

Try again.

---

### 4. Problem

Permission denied

**Cause**

Administrator permissions are required.

**Solution**

Open Command Prompt as Administrator.

Run the installation again.

---

## Best practices

- Install the latest LTS version of Node.js.
- Keep Git updated.
- Store API keys securely.
- Never share API keys.
- Restart the terminal after installing software.
- Verify each installation before continuing.

---

## Key terms

| Term | Definition |
|------|------------|
| Terminal | A text-based interface used to run commands. |
| Command Prompt | The Windows terminal application. |
| Node.js | Software that runs JavaScript applications. |
| npm | Node.js Package Manager. |
| Git | Version control software. |
| API Key | A secret key used for authentication. |
| PATH | An operating system setting that allows commands to run from any folder. |

---

## Summary

In this lesson, you learned how to:

- Check your operating system.
- Install `Node.js`.
- Install Git.
- Create an Anthropic account.
- Generate an API key.
- Install Claude Code.
- Verify the installation.
- Start Claude Code.

You now have a working Claude Code installation.

---

## Knowledge check

### 1. What software must you install before Claude Code?

<details>
<summary>Show answer</summary>

Install **Node.js** before installing Claude Code.

</details>

---

### 2. What command checks the Node.js version?

<details>
<summary>Show answer</summary>

```bash
node --version
```

</details>

---

### 3. Why do you need an API key?

<details>
<summary>Show answer</summary>

The API key authenticates Claude Code with your AI account so it can access the service.

</details>

---

### 4. Which command installs Claude Code?

<details>
<summary>Show answer</summary>

 ```bash
    npm install -g @anthropic-ai/claude-code
```
</details>

---

### 5. How do you verify that Claude Code is installed?
<details>
<summary>Show answer</summary>

 ```bash
    claude --version
```
</details>

---

### 6. Why should you keep your API key private?
<details>
<summary>Show answer</summary>

Anyone with your API key can use your account. Never share it or commit it to Git repositories.
</details>

---

# Practice exercise

Complete the following tasks:

1. Install Node.js.
2. Verify Node.js.
3. Install Git.
4. Verify Git.
5. Create an Anthropic account.
6. Create an API key.
7. Install Claude Code.
8. Verify the installation.
9. Start Claude Code.
10. Ask Claude Code your first question.

---

In other lessons, you will learn how to install Visual Studio Code, install Cursor IDE, understand the differences between them, and configure your development environment for working with Claude Code.