---
title: MCP
sidebar_position: 5
description: Learn how the Model Context Protocol (MCP) connects AI tools to external systems, such as Azure DevOps, and how to document MCP connections safely.
---

# MCP

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the AI Agents lesson, and the Claude Code lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what the Model Context Protocol (MCP) is, in plain language.
- Describe the parts of an MCP connection: a client, a server, and a source.
- Explain why the release note project uses MCP as an integration layer.
- Identify which connections in the project are implemented, and which are planned.
- Document an MCP connection, including its access and its limits.
- Protect credentials and limit access when you use an MCP connection.
- Apply a Docs-as-Code workflow to MCP documentation.

---

## Why MCP matters for technical writers

An AI tool can only use information it can reach. Without a connection, the AI works only with the files you give it. With MCP, the AI can read data from an external system, such as a work-item tracker.

Writers need to know what a connection can read, what it can change, and who controls its access. A connection that is not documented can expose data that readers should not see.

> **Documentation Manager's Tip**
>
> Document every MCP connection with three facts: the system it reaches, the actions it allows, and who approves its access. If you cannot answer all three, the connection is not ready for the team.

---

## Before you start

Make sure you have:

- Completed the AI Agents lesson, and the Claude Code lesson.
- Read the MCP section of the case study at `portfolio/case-studies/ai-release-note-generator/index.md`.
- Read `portfolio/architecture/ai-documentation-intelligence.md`.

:::note

**For beginners**

MCP stands for Model Context Protocol. It is a standard way for an AI tool to connect to an outside system. Think of it as a common plug that many AI tools can use.

:::

---

## What is MCP?

The Model Context Protocol (MCP) defines how an AI tool, called the client, talks to a connector, called the server. The server gives the client access to a system, such as Azure DevOps, through a set of defined actions.

```text
AI tool (client)
      │
      ▼
MCP server (connector)
      │
      ▼
External system (source)
```

| Part | Role | Example in this repository |
|---|---|---|
| Client | The AI tool that asks for information | Claude Code |
| Server | The connector that offers defined actions | Azure DevOps MCP |
| Source | The system that holds the data | Azure DevOps work items |

:::important

An MCP server decides what the client may do. Check the server's list of actions before you grant access. A connection that allows changes can modify data in the source system.

:::

---

## Why the project uses MCP

The case study describes how the release note project changed over time:

1. The first version used mock engineering data. This let the team test the workflow without a live system.
2. The architecture then identified MCP as an integration layer, so that the workflow does not depend on one source system.
3. The project connected Azure DevOps through MCP. The `/fetch-release-data` step calls the Azure DevOps MCP server to retrieve work items.

The case study separates the workflow from the source. The output of each step is a file, so the collection step can change without changing the writing or review steps.

---

## Implemented and planned connections

Not every connection in the architecture is live. Document each one with its current status.

| Connection | Status in the case study | What it means for documentation |
|---|---|---|
| Azure DevOps MCP | Implemented | The release workflow reads work items through MCP. |
| ServiceNow MCP | Architecture or future integration | Describe it as planned until it is connected. |
| Other sources | Future | Do not describe them as available. |

:::warning

Do not describe a planned connection as if it works today. Readers who try a planned connection will fail, and they will lose trust in the documentation.

:::

---

## Access and limits

Every MCP connection needs clear limits. Document these points for each connection.

| Question | What to document |
|---|---|
| What data can it read? | The fields or the types of records it can return |
| Can it change data? | Each action that writes or deletes data |
| Who controls access? | The account, the token, and the owner who approves it |
| Where are credentials stored? | The secure location, not the repository |
| How is access removed? | The steps to revoke a token or disable the connection |

:::note

Use the smallest set of permissions that the workflow needs. A read-only connection is safer than a connection that can change work items.

:::

---

## How-to: Document an MCP connection

**Goal:** Describe a connection so that a reader knows its purpose, its status, and its limits.

Markdown source:

````markdown
### Azure DevOps MCP

| Item | Description |
|---|---|
| Status | Implemented |
| Purpose | Retrieves work items for the release workflow |
| Client | The AI tool that runs the `/fetch-release-data` step |
| Data read | Work-item fields needed for release notes |
| Data changed | None in this workflow |
| Access owner | Name the team or role that approves access |
| Credentials | Stored in a secure location, never in the repository |
````

**Result:** The reader sees the status, the purpose, what the connection reads and changes, and who approves access. The credentials row confirms where secrets are kept.

---

## How-to: Explain an MCP step in a workflow

**Goal:** Show how an MCP call fits into a workflow with clear inputs and outputs.

Markdown source:

````markdown
### Step 2: Fetch release data

| Item | Description |
|---|---|
| Command | `/fetch-release-data` |
| Input | The prepared release file |
| MCP call | Retrieves the work items from Azure DevOps |
| Output | `input/work-items.json` |
| Check | Compare the number of work items with the manifest |
````

**Result:** The reader sees where MCP is used, what it returns, and how to check the result before the next step runs.

:::tip

Add a check row to every step that uses an external source. A count check or a sample check catches many connection errors early.

:::

---

## Protect credentials and data

An MCP connection often uses a token or account. Treat it like any other secret.

| Rule | Reason |
|---|---|
| Store tokens in a secure location. | A token in a file can be shared or committed. |
| Use a test account for demonstrations. | A test account limits the data that can be exposed. |
| Do not paste MCP output that contains private data into a public page. | Work items can include internal details. |
| Revoke a token that was exposed. | An exposed token gives access until it is revoked. |

:::warning

If a token reaches a commit, Git keeps it in the history. Revoke the token first, then remove it from the repository. Deleting the file alone does not remove the token from the history.

:::

---

## Docs-as-Code workflow for MCP documentation

Use this workflow when you add or change an MCP page.

```text
Confirm the connection status with the owner
    ↓
Document the purpose, data, and limits
    ↓
Check the page for secrets and private data
    ↓
Run npm run start to preview
    ↓
Run npm run build
    ↓
Commit, push, and open a pull request
    ↓
Technical review of the connection details
    ↓
Peer review
```

**Step 1: Create a branch.**

```bash
git switch -c docs/mcp-lesson
```

**Step 2: Check the page for secrets.**

Search the file for tokens, account names, and internal URLs. Replace each one with a placeholder.

**Step 3: Build the site.**

```bash
npm run build
```

**Step 4: Commit and push.**

```bash
git add docs/09-AI/MCP.md
git commit -m "Add MCP lesson"
git push -u origin docs/mcp-lesson
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| A planned connection is described as live. | Readers fail when they try it. | Show the status for each connection. |
| The page does not name the access owner. | Nobody knows who can approve or revoke access. | Name the owner or role. |
| A token is stored in the repository. | The token is exposed. | Revoke the token, and store credentials securely. |
| The connection can change data, but the page does not say so. | Readers grant more access than they need. | List every action that writes or deletes data. |
| MCP output with private data is pasted into a public page. | Internal details are exposed. | Use mock or sanitized examples. |

---

## Summary

In this lesson, you learned that:

- MCP connects an AI tool to an external system through a server.
- The release note project uses Azure DevOps MCP, and the ServiceNow connection is planned.
- Document the status, purpose, data, actions, owner, and credentials of each connection.
- Use the smallest set of permissions, and protect every token.
- Review MCP documentation with a technical reviewer before you publish it.

The aim is simple:

**Show readers what each connection can reach, what it can change, and who controls it.**

---

## Practice exercise

Use this repository.

1. Read the MCP section of the case study. List each connection, and mark it as implemented or planned.
2. Choose the Azure DevOps MCP connection. Write a table with the status, purpose, data read, data changed, access owner, and credentials row.
3. Write a step table for `/fetch-release-data`, with a check row.
4. Search your Markdown for any token, account name, or internal URL. Replace each one with a placeholder.
5. Run `npm run build` to check your Markdown before you commit.

---

## Knowledge check

<details>
<summary><strong>1. What does MCP stand for?</strong></summary>

Model Context Protocol. It is a standard way for an AI tool to connect to an external system.

</details>

<details>
<summary><strong>2. What are the three parts of an MCP connection?</strong></summary>

A client, a server, and a source. The client asks for information, the server offers defined actions, and the source holds the data.

</details>

<details>
<summary><strong>3. Which connection in the release note project is implemented?</strong></summary>

The Azure DevOps MCP connection. The ServiceNow connection is documented as architecture or future integration.

</details>

<details>
<summary><strong>4. Why did the project use MCP as an integration layer?</strong></summary>

So that the documentation workflow does not depend on one source system. The collection step can change without changing the writing or review steps.

</details>

<details>
<summary><strong>5. Why should you describe the status of each connection?</strong></summary>

A planned connection that is described as live will fail when readers try it, and they will lose trust in the page.

</details>

<details>
<summary><strong>6. What must an MCP page say about data changes?</strong></summary>

It must list every action that writes or deletes data, so that readers grant only the access they need.

</details>

<details>
<summary><strong>7. Who should be named as the access owner?</strong></summary>

The team or role that approves the access and can revoke it.

</details>

<details>
<summary><strong>8. Why should you use a test account for demonstrations?</strong></summary>

A test account limits the data that can be exposed, if the demonstration is shared.

</details>

<details>
<summary><strong>9. What should you do if a token reaches a commit?</strong></summary>

Revoke the token first. Then remove it from the repository. Deleting the file alone does not remove the token from the Git history.

</details>

<details>
<summary><strong>10. What is the main goal of documenting an MCP connection?</strong></summary>

The goal is to show readers what the connection can reach, what it can change, and who controls its access.

</details>

---

## Next lesson

Continue to **Plugins**. You will learn how plugins package commands, skills, and connections into one installable unit, and how to review them before use.
