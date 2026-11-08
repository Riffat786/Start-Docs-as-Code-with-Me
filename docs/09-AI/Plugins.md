---
title: Plugins
sidebar_position: 6
description: Learn what AI plugins are, what they can bundle, and how to review, install, document, and remove them safely in a Docs-as-Code team.
---

# Plugins

> **Lesson level:** Intermediate
>
> **Time to complete:** 30–40 minutes
>
> **Prerequisites:** Complete the Skills lesson, and the MCP lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what an AI plugin is, and what it can bundle.
- Distinguish an AI plugin from a Docusaurus plugin.
- Describe the risks of installing a plugin.
- Review a plugin before your team uses it.
- Document the installation, purpose, and permissions of a plugin.
- Remove a plugin and its access cleanly.
- Apply a Docs-as-Code workflow to plugin documentation.

---

## Why plugins matter for technical writers

A plugin adds features to an AI tool. A plugin can add a set of commands, a skill, a connection to an outside system, or a hook. Teams use plugins to share one tested setup, instead of configuring each tool by hand.

A plugin also runs code or instructions that someone else wrote. Writers need to know what a plugin changes, what it can reach, and who maintains it.

> **Documentation Manager's Tip**
>
> Treat every plugin as third-party software. Ask: "Who wrote it, what can it access, and how do we remove it?" If the answers are unclear, do not install it for the team.

---

## Before you start

Make sure you have:

- Completed the Skills lesson, and the MCP lesson.
- Access to the AI tool that your team uses.
- Permission to install software in your environment, if your organization requires it.
- The course repository cloned to your computer.

:::note

**For beginners**

A plugin is a package. It bundles features that you would otherwise set up one by one. Installing a plugin is like installing a set of tools in one step.

:::

---

## What is a plugin?

An AI plugin is a package that extends an AI tool. Depending on the tool, a plugin can bundle some or all of these parts:

| Part | What it adds | Related lesson |
|---|---|---|
| Commands | Shortcuts that start a workflow | Commands |
| Skills | Reusable instructions for a task | Skills |
| Connections | Access to an outside system | MCP |
| Hooks | Automated actions at tool events | Hooks |

A plugin installs as one unit. Its parts can then work together, but each part still needs review.

---

## Plugins and Docusaurus plugins

This site uses Docusaurus plugins. The name is similar, but the two are different.

| Item | Docusaurus plugin | AI plugin |
|---|---|---|
| Purpose | Adds features to the documentation site | Adds features to an AI tool |
| Where it is configured | In the Docusaurus configuration file | In the AI tool's settings |
| Example in this project | The portfolio docs instance | Depends on the AI tool and the plugin |
| Effect on readers | Changes the published site | Changes how writers work with the AI |

:::important

When you write about plugins, say "AI plugin" or "Docusaurus plugin" each time. Readers can confuse the two, and a Docusaurus plugin change can affect every page on the site.

:::

---

## Risks of installing a plugin

A plugin can change how the AI tool behaves, and it can reach data that you did not expect. These risks apply to every plugin.

| Risk | What it can cause |
|---|---|
| Unknown author | Malicious or unreviewed code |
| Broad permissions | Access to files, accounts, or systems that the plugin does not need |
| Hidden instructions | Changes to how the AI behaves, without your knowledge |
| Outdated version | Known problems that were fixed in a later version |
| Connection to an outside system | Data sent outside your organization |

:::warning

Do not install a plugin that you have not reviewed. A plugin that can read your project files can also read any secret stored in them.

:::

---

## How-to: Review a plugin before use

**Goal:** Check a plugin before your team installs it.

**Step 1: Identify the author and the source.**

Record the name, the author, the version, and the place where you downloaded it. Use only official or approved sources.

**Step 2: List the parts.**

Check which commands, skills, connections, and hooks the plugin includes.

**Step 3: Check the permissions.**

For each connection or hook, record what it can read and what it can change.

**Step 4: Read the instructions.**

Read every skill and command. Look for instructions that send data outside the project, or that ask the AI to hide its actions.

**Step 5: Test in a safe folder.**

Install the plugin in a test project with no real data. Run each command, and record the results.

**Result:** You know what the plugin does, what it can reach, and whether it is safe for the team.

---

## How-to: Document a plugin

**Goal:** Describe a plugin so that writers can install it, use it, and remove it.

Markdown source:

````markdown
### Plugin: Documentation review tools

| Item | Description |
|---|---|
| Purpose | Adds a style-check skill and a review command |
| Version | Record the version number |
| Author | Record the author and the approved source |
| Parts | One skill, one command, no connections, no hooks |
| Permissions | Reads Markdown files in the project. Changes no files. |
| Approved by | Name the reviewer who approved the plugin |
| Install | Follow the approved install steps for your AI tool |
| Remove | Uninstall the plugin, then remove its settings and any stored tokens |
````

**Result:** The reader sees what the plugin does, what it can access, who approved it, and how to remove it. The removal row prevents leftover access.

---

## How-to: Remove a plugin cleanly

**Goal:** Remove a plugin and the access that it granted.

**Step 1: Uninstall the plugin.**

Use the uninstall option in your AI tool. Do not only delete the folder that contains it.

**Step 2: Remove its settings.**

Check the project and user settings for entries that the plugin added, such as commands or connection details.

**Step 3: Revoke its access.**

If the plugin used a token or an account, revoke that token or account. Confirm that the token no longer works.

**Step 4: Record the removal.**

Update the plugin page, and note the date and the reviewer.

**Result:** The plugin is gone, and no access remains. The page shows that the plugin is no longer in use.

:::important

Removing a plugin does not revoke a token it used. Revoke the token separately, in the system that issued it.

:::

---

## Docs-as-Code workflow for plugin documentation

Use this workflow when you add or change a plugin page.

```text
Review the plugin
    ↓
Test it in a safe folder
    ↓
Document the purpose, parts, and permissions
    ↓
Check the page for secrets
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Technical review and approval
    ↓
Announce the change to the team
```

**Step 1: Create a branch.**

```bash
git switch -c docs/plugins-lesson
```

**Step 2: Build the site.**

```bash
npm run build
```

**Step 3: Commit and push.**

```bash
git add docs/09-AI/Plugins.md
git commit -m "Add plugins lesson"
git push -u origin docs/plugins-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The plugin is installed without a review. | Unknown code or access is added to the team's tools. | Review the plugin, and record the approval. |
| The page confuses an AI plugin with a Docusaurus plugin. | Readers change the wrong configuration. | Name the type each time. |
| The plugin is removed by deleting its folder only. | Settings and access remain. | Uninstall the plugin, remove its settings, and revoke its tokens. |
| The permissions are not recorded. | Nobody knows what the plugin can reach. | List what each part can read and change. |
| The plugin is tested with real data. | Real data is exposed to an unreviewed tool. | Test in a safe folder with mock data. |
| The version is not recorded. | Known problems stay in place after an update. | Record the version, and review each update. |

---

## Summary

In this lesson, you learned that:

- An AI plugin bundles commands, skills, connections, and hooks into one unit.
- An AI plugin is different from a Docusaurus plugin.
- Plugins are third-party code, and they need review before use.
- Test a plugin in a safe folder, and document its permissions.
- Remove a plugin by uninstalling it, removing its settings, and revoking its access.

The aim is simple:

**Install only the plugins you have reviewed, and know exactly what each one can reach.**

---

## Practice exercise

Use this repository.

1. Write a table that compares an AI plugin and a Docusaurus plugin. Use the items from this lesson, and add one more row.
2. Look at `docusaurus.config.ts`. Find one Docusaurus plugin. Write one sentence that says what it does.
3. Write a plugin page for an imaginary style-check plugin, using the documentation table in this lesson. Mark it as illustrative.
4. List three questions that a reviewer should ask before the plugin is approved.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What is an AI plugin?</strong></summary>

A package that extends an AI tool. It can bundle commands, skills, connections, and hooks, and it installs as one unit.

</details>

<details>
<summary><strong>2. How does an AI plugin differ from a Docusaurus plugin?</strong></summary>

An AI plugin extends an AI tool. A Docusaurus plugin extends the documentation site, and it changes the published pages.

</details>

<details>
<summary><strong>3. Why should you treat a plugin as third-party software?</strong></summary>

Someone else wrote it. It can contain unreviewed code, and it can reach files, accounts, or systems that you did not expect.

</details>

<details>
<summary><strong>4. What should you test a plugin with?</strong></summary>

A test project with no real data. Use mock data, and record the results.

</details>

<details>
<summary><strong>5. What should a plugin page record about permissions?</strong></summary>

What each part can read and change, and whether it sends data outside the project.

</details>

<details>
<summary><strong>6. Why is deleting a plugin's folder not enough to remove it?</strong></summary>

Settings and access can remain. Uninstall the plugin, remove its settings, and revoke any tokens it used.

</details>

<details>
<summary><strong>7. Does removing a plugin revoke its token?</strong></summary>

No. Revoke the token separately, in the system that issued it.

</details>

<details>
<summary><strong>8. Why should the version of a plugin be recorded?</strong></summary>

A known problem can be fixed in a later version. The record shows which version the team uses, and when to review an update.

</details>

<details>
<summary><strong>9. Who should approve a plugin before the team uses it?</strong></summary>

A reviewer who can judge the plugin's permissions and risks. Record the approval on the plugin page.

</details>

<details>
<summary><strong>10. What is the main goal of documenting a plugin?</strong></summary>

The goal is to show readers what the plugin does, what it can access, who approved it, and how to remove it.

</details>

---

## Next lesson

Continue to **Claude Code**. You will learn how to use Claude Code to draft, review, and update documentation safely.
