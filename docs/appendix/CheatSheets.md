---
title: Cheat sheets
description: Quick references for Markdown, MDX, Git, the project's npm scripts, and AI prompt structure, for use while you work.
---

# Cheat sheets

Use these quick references while you work. Each section covers one tool or task. For full explanations, use the lessons in the course.

**Last checked:** November 2026

---

## Markdown

| Element | Syntax | Notes |
|---|---|---|
| Heading | `## Heading` | One main title per page. Do not skip levels. |
| Bold and italic | `**bold**`, `*italic*` | Use bold for UI labels and key terms |
| Inline code | `` `command` `` | Use for commands, file names, and values |
| Code block | Three backticks, then a language name | Always name the language, such as `bash` or `json` |
| Link | `[text](url)` | Describe the destination in the text |
| Image | `![alt text](/img/file.png)` | Describe the purpose of the image in the alt text |
| Table | Pipes and a header separator row | Keep columns short |
| List | `-` for bullets, `1.` for numbers | Use numbers only for ordered steps |

---

## MDX and Docusaurus pitfalls

| Pitfall | Example | Fix |
|---|---|---|
| Angle bracket in normal text | `under <5 minutes` | Write the words, or put the text in code |
| Unclosed tag | `<div>` without `</div>` | Close every tag |
| Placeholder outside code | `<access-token>` in a sentence | Put placeholders in code blocks |
| Admonition | `:::note`, a blank line, the text, a blank line, `:::` | Close every admonition |

---

## Git

| Task | Command |
|---|---|
| See changed files | `git status` |
| Create and switch to a branch | `git switch -c docs/topic-name` |
| Stage a file | `git add path/to/file.md` |
| Commit | `git commit -m "Describe the change"` |
| Push a new branch | `git push -u origin docs/topic-name` |
| Read recent history | `git log --oneline` |
| See line changes | `git diff` |
| Move a file and keep history | `git mv old/path.md new/path.md` |
| Find text in the repository | `git grep -n "text"` |
| Undo a commit safely | `git revert <commit-hash>` |

:::warning

Do not use `git push --force` on `main`. Use `git revert` to undo a change, so that the history stays intact.

:::

---

## Project npm scripts

| Script | Purpose |
|---|---|
| `npm run start` | Start the local development server |
| `npm run build` | Build the static site |
| `npm run serve` | Serve the last build locally |
| `npm run clear` | Clear the Docusaurus cache |
| `npm run typecheck` | Check TypeScript files |
| `npm run write-translations` | Create theme translation files |
| `npm run deploy` | Publish the site. Do not use this to test a change. |

---

## AI prompt structure (RTCCO)

```text
Role: Who the AI should act as
Task: What it should do
Context: Background it needs
Constraints: What it must not do
Output: The format of the result
```

Use a Constraints line in every prompt, and check the result against its source.

---

## Related lessons

- Git commands in depth: the Cheat-Sheet lesson in Module 4
- Markdown in depth: the Markdown module
- Commands in depth: the Commands lesson in Module 10
