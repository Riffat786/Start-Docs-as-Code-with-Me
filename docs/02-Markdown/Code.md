---
title: Markdown Code
sidebar_label: Code
sidebar_position: 5
description: Learn how to format commands, code examples, file names, paths, and technical values clearly in Markdown.
---

> **Lesson level:** Beginner
>
> **Time to complete:** 15–20 minutes
>
> **Prerequisites:** Complete [Markdown Basics](./Basics.md).

---

## Learning objectives

After you complete this lesson, you will be able to:

- Understand when to use inline code.
- Create code blocks.
- Format commands correctly.
- Use language identifiers.
- Format file names and folder paths.
- Format configuration values and variables.
- Use placeholders in technical examples.
- Show command output clearly.
- Create code examples that readers can copy and use.
- Avoid common code-formatting mistakes.

---

## Why code formatting matters

Technical documentation often contains commands, file names, folder paths, configuration values, and code examples.

Readers need to be able to distinguish these technical elements from normal text.

For example:

```markdown
Run `git status` to check the current repository status.
```

The command is visually different from the rest of the sentence.

Without code formatting, the same instruction is less clear:

```text
Run git status to check the current repository status.
```

Both may be understandable, but consistent formatting makes technical documentation easier to scan.

> **Documentation Manager's Tip**
>
> Code formatting is not decoration.
>
> Use it to show the reader which parts of the text are technical values that they may need to copy, enter, or identify.

---

## Inline code

Use inline code when a technical value appears within a sentence.

The basic syntax is:

```markdown
`technical value`
```

For example:

```markdown
Run `git status` to check the current repository status.
```

This renders as:

Run `git status` to check the current repository status.

---

## When to use inline code

Use inline code for short technical values such as:

- Commands
- File names
- Folder names
- File extensions
- Variables
- Configuration values
- Environment variables
- Package names
- Code elements

For example:

```markdown
Open `package.json`.

The documentation files are stored in the `docs` folder.

The project uses the `.md` file extension.

Run `npm install`.

Set the `NODE_ENV` variable.
```

---

## Commands in inline code

When a command appears inside normal text, format it as inline code.

For example:

```markdown
Run `git --version` to check the Git installation.
```

Another example:

```markdown
Use `npm run start` to start the local Docusaurus site.
```

This makes it clear that the reader needs to enter or run the value.

---

## File names in inline code

Use inline code for file names.

For example:

```markdown
Open `docusaurus.config.ts`.
```

Another example:

```markdown
Update `index.tsx` to change the homepage.
```

File extensions can also be formatted this way:

```markdown
Markdown files use the `.md` extension.
```

---

## Folder names in inline code

Use inline code for folder names when referring to a specific folder.

For example:

```markdown
The documentation files are stored in the `docs` folder.
```

You can also show a folder path:

```markdown
The file is located in `docs/01-Environment-Setup/`.
```

---

## Configuration values

Configuration values should normally use inline code when they appear in a sentence.

For example:

```markdown
Set `baseUrl` to `/Start-Docs-as-Code-with-Me/`.
```

Another example:

```markdown
The `title` property controls the site title.
```

This helps distinguish configuration names from normal text.

---

## Variables

Use inline code for variables and environment variables.

For example:

```markdown
Set the `NODE_ENV` variable before running the application.
```

If the reader needs to replace a value, make that clear.

For example:

```markdown
Replace `YOUR_PROJECT_NAME` with the name of your project.
```

---

## Code blocks

Use a code block when the reader needs to see or copy multiple lines of code or commands.

The basic syntax is:

````markdown
```text
Content goes here.
```
```text
Hello World
```
````

This creates a separate block of technical content.

---

## Code blocks for commands

Use a code block when you want the reader to copy one or more commands.

For example:

```bash
git status
git branch
git log
```

The rendered page displays the commands as a separate code block.

This is easier to copy than placing several commands inside a paragraph.

One command or several?

There is no need to create a code block for every command.

For example, this is fine:

Run `git --version` to verify the installation.

Use a code block when the command needs to stand out or when the reader needs to copy several lines.

For example:

Run the following commands:

```bash
git status
git branch
git log
```

Use your judgement based on how the reader will use the information.

Add a language identifier

When possible, specify the language used by the code block.

For example:

```bash
git --version
```

The bash identifier tells the documentation system what type of code or command is being displayed.

For JavaScript:

```javascript
const projectName = "documentation-project";
console.log(projectName);
```

For TypeScript:

```typescript
const projectName: string = "documentation-project";
console.log(projectName);
```

For Python:

```python
print("Hello from Python")
```

For JSON:

```json
{
  "name": "documentation-project",
  "version": "1.0.0"
}
```

For YAML:

```yaml
title: Documentation Project
description: A Docs-as-Code project
```

For Markdown:

```markdown
# Markdown heading

This is a paragraph.
```

Using the correct language identifier can improve syntax highlighting and make examples easier to read.

---

## Common language identifiers

Some language identifiers you may use in this project include:

| Content                | Identifier   |
| ---------------------- | ------------ |
| Bash or shell commands | `bash`       |
| PowerShell             | `powershell` |
| JavaScript             | `javascript` |
| TypeScript             | `typescript` |
| Python                 | `python`     |
| JSON                   | `json`       |
| YAML                   | `yaml`       |
| Markdown               | `markdown`   |
| HTML                   | `html`       |
| CSS                    | `css`        |
| SQL                    | `sql`        |
| XML                    | `xml`        |
| Plain text             | `text`       |

Use the identifier that best represents the content.

---

## PowerShell commands

Because this project is being developed on Windows, you will often see PowerShell commands.

Use:

```powershell
Get-ChildItem
```

For example:

Run:

```powershell
Get-ChildItem
```

This tells the reader which terminal environment the command is intended for.

---

## Windows paths

Windows paths can be shown using inline code.

For example:

Open `C:\Projects\documentation-project`.

For a longer path, you can use a code block:

```text
C:\Projects\Start-Docs-as-Code-with-Me\docs\
```

Use a code block when the path is long or when the reader needs to copy it.

---

## Linux and macOS paths

Unix-style paths can also be formatted as inline code.

For example:

The project is located in `/Users/example/projects/documentation`.

Or:

```text
/home/example/projects/documentation
```

The important point is to make technical paths visually distinct from normal text.

File paths and commands together

You can combine normal text and code formatting.

For example:

Open `docs/01-Environment-Setup/Install-Git.md` and run `npm run start` from the project folder.

This is useful when giving short instructions.

:::note

If the instruction becomes difficult to scan, separate the actions into steps.

:::

---

## Placeholders

Documentation often contains values that the reader needs to replace.

For example:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Make the placeholder obvious.

For example:
```text

USERNAME
REPOSITORY
```

You can then explain:

Replace `USERNAME` with your GitHub user name and `REPOSITORY` with the name of your repository.

:::important

Avoid using real credentials or secrets in examples.

Never include secrets

Do not place real passwords, API keys, access tokens, or other secrets in documentation.

:::

Never use:

```text
sk-ant-api03-real-secret-key
```

Use a clearly fake placeholder instead:

```text
YOUR_API_KEY
```

Or:

```text
sk-example-xxxxxxxx
```

:::important

Never commit real credentials to a Git repository, even if the repository is private.

:::

---

## Show command output separately

Sometimes it is useful to show what the terminal returns.

Use a separate code block for output.

For example:

Run:

```bash
git --version
```

Example output:

```text
git version 2.50.1.windows.1
```

This makes the distinction between the command and the result clear.

:::info

Do not make output look like a command

Keep commands and results separate.

:::

Prefer:

Run:

```bash
git --version
```

Example output:

```text
git version 2.50.1.windows.1
```

This makes it clear which content the reader needs to enter.

:::important

Do not add the terminal prompt to a command

:::

When documenting a terminal command, you normally do not need to include the prompt.

Prefer:

```powershell
npm install
```

rather than:

```powershell
PS C:\Projects\my-project> npm install
```

The shorter version is easier to copy.

If the directory matters, explain it outside the code block:

From the project folder, run:

```powershell
npm install
```

````markdown
# Keep code examples focused

A code example should demonstrate the point you are explaining.

For example, if you are teaching how to check a Git installation, you do not need to show a complete Git workflow.

Use:

```bash
git --version
```
````

````markdown
Then explain the expected result.

Keeping examples focused makes them easier to understand and maintain.

---

# Explain code when necessary

Do not assume that the reader understands every command or code example.

For example:

Run:

```bash
git status
```

The command shows the current state of your Git working tree.

````

The explanation tells the reader what the command does.

For more complex examples, explain the important parts below the code block.

---

## Code and configuration files

When showing part of a configuration file, include enough context for the reader to understand where the change belongs.

For example:
```yaml
site_name: Start Docs-as-Code with Me
theme:
  name: material
```
Then explain what the reader needs to change.

Do not provide an entire configuration file if only two lines are relevant.

---

## Code formatting in tables

You can use inline code inside tables.

For example:

| Command | Purpose |
| --- | --- |
| `git status` | Show repository status |
| `git branch` | Show branches |
| `git log` | Show commit history |

This works well for command references.

Avoid putting very long code blocks inside tables.

They are usually difficult to read.

---

## Code formatting in links

You can combine inline code with links when appropriate.

For example:

See the [`package.json`](https://github.com/Riffat786/Start-Docs-as-Code-with-Me/blob/main/package.json) file for the project configuration.

This can be useful when the reader needs to understand that the linked item is a technical file.

---

## Code and accessibility

Code examples should be understandable from the surrounding text.

Do not assume that colour or syntax highlighting is enough to communicate meaning.

For example:

Run `git status` to check the current state of the repository.

The explanation remains understandable even without syntax highlighting.

Keep code examples readable and avoid unnecessary complexity.

---

## Common code-formatting mistakes

<details> 

<summary><strong>1. A command is difficult to distinguish from normal text</strong></summary>

<div>

Cause

The command has not been formatted as inline code or a code block.

Solution

Use inline code for a short command:

Run `git status`.

Use a code block for multiple commands:

```bash
git status
git branch
```

</div>

</details> 

<details> 

<summary><strong>2. The code block does not render correctly</strong></summary>

<div>
Cause

The code fence may not have been closed.

Solution

Make sure the opening and closing fences are present.

Correct:

```bash
git status
```

The three backticks must be closed.

</div>

</details> 

<details> 

<summary><strong>3. The wrong language identifier is used</strong></summary>

<div>

Cause

The language identifier does not match the content.

Solution

Use the appropriate identifier.

For example:

```python
print("Hello")
```

Use powershell for PowerShell commands and bash for Bash or shell examples where appropriate.

</div>

</details> 

<details> 

<summary><strong>4. The command includes the terminal prompt</strong></summary>

<div>

Cause

The writer copied the entire terminal line into the documentation.

Solution

Usually, remove the prompt.

Prefer:

```powershell
npm install
```

instead of:

```powershell
PS C:\Projects\my-project> npm install
```

Explain the project folder outside the code block if necessary.

</div>

</details> 

<details> 

<summary><strong>5. The example contains a real API key or password</strong></summary>

<div>

Cause

A real value was copied into the documentation.

Solution

Remove the secret immediately.

Replace it with a placeholder such as:

YOUR_API_KEY

Never commit real credentials to the repository.

</div>

</details> 

<details> 

<summary><strong>6. The code example is too long</strong></summary>

<div>

Cause

The writer included more code than the reader needs.

Solution

Show only the relevant section.

If the complete example is required, explain why and provide enough context for the reader to use it correctly.

</div>

</details>

---

## Review technical examples

Technical Writers do not always need to be software developers to review code examples.

However, you should know what to check.

For a command, ask:

Is the command complete?
Is it appropriate for the operating system?
Is it safe to run?
Is it still supported?
Does it produce the expected result?
Is the reader in the correct folder?
Does the command require permissions?
Does the documentation explain required placeholders?

If you are not qualified to verify a technical detail, work with the relevant developer or subject matter expert.

> **Documentation Manager's Tip**
>
> Do not guess when a technical example affects the user's environment.
>
> Ask the SME or developer to verify it and keep the review traceable in your normal documentation workflow.

---

## Code and the Docs-as-Code workflow

Code examples are part of the documentation source.

They are stored in Git along with the Markdown.

A writer can therefore make a change such as:

- npm install package-name
+ npm install new-package-name

The change can then be reviewed before it reaches the published documentation.

This is one of the advantages of treating documentation as code.

Technical examples become part of the same review and version-control process as the rest of the documentation.

---

## Review AI-generated code examples

AI tools can generate commands and code quickly.

That can be useful when drafting documentation.

However, an AI-generated example may be:

- Syntactically incorrect.
- Based on an outdated version.
- Unsafe.
- Missing a required option.
- Incompatible with the user's operating system.
- Technically correct but inappropriate for your product.

Always test important commands and code examples before publishing them.

Always review AI-generated content for:

- Accuracy
- Completeness
- Terminology
- Style
- Audience
- Technical correctness

> **Documentation practice**
>
> Treat an AI-generated code example as a draft until it has been reviewed and, where necessary, tested.

---

## Code review checklist

Before committing a page containing code, check:

□ Are commands formatted correctly?

□ Are file names and paths formatted consistently?

□ Are code blocks properly opened and closed?

□ Is the language identifier correct?

□ Can the reader copy the command directly?

□ Is the command complete?

□ Is the example tested?

□ Is the expected result documented?

□ Are placeholders clearly identified?

□ Does the example contain any real secrets?

□ Is unnecessary code removed?

□ Does the rendered page display correctly?

---

## Best practices

- Use inline code for short technical values.
- Use code blocks for commands and multi-line examples.
- Use the correct language identifier.
- Keep examples focused.
- Explain what commands do.
- Include expected results where useful.
- Keep commands easy to copy.
- Do not include terminal prompts unless they provide useful context.
- Use placeholders instead of real credentials.
- Never include API keys, passwords, or access tokens.
- Test important commands before publishing.
- Keep code examples up to date.
- Review AI-generated code carefully.
- Keep the source Markdown readable.

---

## Key terms

| Term                | Definition                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------- |
| Inline code         | A short technical value displayed within normal text.                                       |
| Code block          | A separate block used to display commands, code, configuration, or other technical content. |
| Language identifier | The value after the opening code fence that identifies the language used in the code block. |
| Code fence          | The three backticks used to open and close a Markdown code block.                           |
| Command             | An instruction entered into a terminal or command-line interface.                           |
| Placeholder         | Example text that the reader replaces with their own value.                                 |
| Terminal            | A text-based interface used to run commands.                                                |
| Syntax highlighting | Visual formatting that helps readers distinguish different parts of code.                   |
| API key             | A secret value used to authenticate access to an API or service.                            |
| Configuration       | Settings that control how an application or system behaves.                                 |

---

## Summary

In this lesson, you learned how to:

- Use inline code.
- Create code blocks.
- Format commands.
- Format file names and folder paths.
- Format configuration values and variables.
- Use language identifiers.
- Show command output.
- Use placeholders.
- Keep secrets out of documentation.
- Write focused code examples.
- Include expected results.
- Review technical examples.
- Keep code examples maintainable.
- Review AI-generated code before publishing it.

The main principle is simple:

Make technical content easy for the reader to identify, understand, copy, and use.