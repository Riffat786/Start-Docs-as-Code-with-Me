---
title: CLI commands
description: Reference for the command-line tools used in the course, with what each one does and when to use it.
---

# CLI commands

This page lists the command-line tools used in this course. Run each command from the project folder, unless the table says otherwise.

**Last checked:** November 2026

---

## Git

| Command | Purpose |
|---|---|
| `git --version` | Check that Git is installed |
| `git config --global user.name "Your Name"` | Set your name for commits |
| `git clone <url>` | Copy a repository to your computer |
| `git status` | Show changed files |
| `git switch -c <branch>` | Create and switch to a new branch |
| `git add <file>` | Stage a file for the next commit |
| `git commit -m "<message>"` | Save staged changes |
| `git push -u origin <branch>` | Send a new branch to GitHub |
| `git pull origin main` | Get the latest `main` branch |
| `git log --oneline` | Show a short history |
| `git diff` | Show changes that are not staged |
| `git grep -n "<text>"` | Find text in tracked files |

---

## npm and npx

| Command | Purpose |
|---|---|
| `node --version` | Check the Node.js version |
| `npm --version` | Check the npm version |
| `npm ci` | Install the exact versions in `package-lock.json` |
| `npm install <package>` | Add a package to the project |
| `npm run` | List the scripts in `package.json` |
| `npx redocly lint <file>` | Check an OpenAPI file for errors |

---

## Docusaurus scripts

These scripts are defined in the project's `package.json`.

| Command | Purpose |
|---|---|
| `npm run start` | Start the development server |
| `npm run build` | Build the site |
| `npm run serve` | Serve the built site |
| `npm run clear` | Clear the cache |
| `npm run typecheck` | Run the TypeScript checker |
| `npm run write-translations` | Create translation files for theme labels |
| `npm run deploy` | Publish the site. Use only when the team approves. |

---

## Tools with command-line options

| Tool | Command to check the installation | Notes |
|---|---|---|
| Visual Studio Code | `code --version` | The command is available after you enable it in VS Code |
| Cursor | `cursor --version` | The command may not be configured. See the Verify Installation lesson in Module 2. |
| Claude Code | `claude --version` | Start Claude Code from the project folder |
| GitHub CLI | `gh --version` | Optional. Install it from the official GitHub CLI site. |

---

## Tips

- Run `npm run` before you guess a script name.
- Read a command before you press Enter. Check the folder, the target, and whether it changes files.
- Use `git status` before and after each step.
