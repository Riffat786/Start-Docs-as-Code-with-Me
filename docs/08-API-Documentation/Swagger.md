---
title: Swagger
sidebar_position: 8
description: Learn how Swagger UI and Swagger Editor display and test an OpenAPI contract, and how they differ from the reference generator used in this repository.
---

# Swagger

> **Lesson level:** Beginner
>
> **Time to complete:** 25–35 minutes
>
> **Prerequisites:** Complete the OpenAPI lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain the difference between Swagger, OpenAPI, and Swagger UI.
- Identify the parts of an operation in Swagger UI.
- Open an OpenAPI contract in Swagger Editor and find validation errors.
- Explain what the Try it out feature does, and what it cannot do with the fictional server.
- Describe when to use Swagger UI, Swagger Editor, and the Redocly reference.
- Protect real access tokens when you test an API in a browser.
- Use the Release Management API in this repository as a real example.

---

## Why Swagger matters for technical writers

Developers often open an interactive API page before they read the reference text. A Swagger page shows each operation as a form. A developer can fill in parameters and send a request from the browser.

Writers need to know what the interactive page shows, what it hides, and what it cannot test.

> **Documentation Manager's Tip**
>
> An interactive page does not replace written guidance. Explain the authentication steps, the errors, and the test values in your own words. Readers should not need to guess from the form fields.

---

## Before you start

Make sure you have:

- Completed the OpenAPI lesson.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Docker Desktop installed, if you want to run the tools locally. This step is optional.

:::note

**For beginners**

Swagger is a family of tools. OpenAPI is the standard. Swagger UI and Swagger Editor are tools that read an OpenAPI file. The OpenAPI lesson explains the file format.

:::

---

## Swagger, OpenAPI, and the tools

The names are easy to confuse. Use this table to keep them apart.

| Name | What it is | Role in this repository |
|---|---|---|
| OpenAPI | A specification and file format | The contract in `portfolio/api/release-management/openapi.yaml` |
| Swagger UI | A browser page that shows an OpenAPI contract as an interactive reference | An optional test view. It is not used to build the reference. |
| Swagger Editor | A browser editor that checks and edits an OpenAPI file | An optional tool to find validation errors |
| Redocly | A tool that builds a static reference from an OpenAPI file | The tool that builds `api-reference.html` for this project |

The repository uses Redocly for the published reference. Swagger UI and Swagger Editor help you test and check the contract.

---

## What Swagger UI shows

Swagger UI reads the contract and shows each operation. Each operation has these parts:

| Part | What it shows | OpenAPI source |
|---|---|---|
| Method and path | The HTTP method and the endpoint | The path key and the method |
| Summary | A short description | `summary` |
| Parameters | A form field for each parameter | `parameters` |
| Request body | An editor with an example body | `requestBody` and `example` |
| Responses | Each status code and its example | `responses` |
| Authorize button | A place to enter a token | `securitySchemes` |
| Try it out | A button that sends a real request | The server address in `servers` |

The Release Management contract defines the `bearerAuth` security scheme. Swagger UI shows an Authorize button for this scheme.

---

## How-to: Read an operation in Swagger UI

**Goal:** Find the information a developer needs for `GET /releases/{releaseId}`.

**Step 1: Open the contract in Swagger UI.**

Use a running Swagger UI instance that loads `portfolio/api/release-management/openapi.yaml`. Follow the official Swagger UI instructions for your setup.

**Step 2: Find the operation.**

Find the path `/releases/{releaseId}`. Expand the `GET` operation.

**Step 3: Check the parameters.**

Find `releaseId`. Check that it is a required path parameter, and that the example value is `rel_2026_08`.

**Step 4: Check the responses.**

Find the `200` response. Compare the example with the Release schema in the OpenAPI lesson.

**Result:** You can describe the operation in your own words, and you know which parts of the reference the interactive page repeats.

---

## How-to: Find errors with Swagger Editor

**Goal:** Use Swagger Editor to find problems in the contract before you publish.

Swagger Editor highlights errors in the YAML and shows a list of problems. Use it to check changes you make.

**Step 1: Start Swagger Editor locally.**

```bash
docker run -p 8080:8080 swaggerapi/swagger-editor
```

Open `http://localhost:8080` in your browser.

**Step 2: Load the contract.**

Copy the contents of `portfolio/api/release-management/openapi.yaml` into the editor. Do not upload the file to a public website if it contains work that is not yet approved.

**Step 3: Read the error list.**

Each error shows a line number. Fix the error in the source file, and copy the corrected file again.

**Result:** The editor shows no errors for the file.

:::warning

Public online editors store or process the content that you paste. Use a local tool for draft contracts, and check the privacy terms of any online service before you paste content.

:::

---

## Try it out: what it does and what it cannot do

The Try it out feature sends a real HTTP request from the browser to the server in the `servers` section. The Release Management contract uses this server:

```text
https://api.release-management.test/v1
```

This address is a reserved test domain. No real API runs at this address. A request with Try it out will fail, usually with a network error. This is expected for this portfolio project.

**What you can still learn from the page:**

- How the form fields map to the path, query, and body.
- Which request headers the page adds.
- What the example responses look like.

:::important

Never paste a real access token into a public Swagger UI page. The token can be stored in the browser, and it can be sent to any server that the page calls. Use a placeholder value, and only enter a real token in a private, approved environment.

:::

---

## How-to: Write Try it out guidance

**Goal:** Tell readers what to expect when they use the interactive page.

Markdown source:

````markdown
### Try the endpoint

You can send a test request from the interactive reference.

1. Select **Authorize**, and enter your access token.
2. Enter `rel_2026_08` in the `releaseId` field.
3. Select **Execute**.

Expected result: A `200 OK` response with one release.

If you see a network error, check the server address for your environment. The example server in this reference is for demonstration only.
````

**Result:** The reader knows the steps, the expected result, and what a failure means. The guidance does not depend on the interactive page alone.

---

## Choose the right tool

| Task | Use | Why |
|---|---|---|
| Check the contract for errors | Swagger Editor | It highlights YAML and schema errors as you type. |
| Explore an operation interactively | Swagger UI | Developers can see forms and examples in one place. |
| Publish a static reference | Redocly | It builds a stable page that does not depend on a running server. |
| Send requests with saved collections | Postman | It keeps requests, variables, and tests in one collection. (Covered in the Postman lesson.) |

:::tip

Keep the published reference as the main source for readers. Use interactive pages as a helpful extra, not as the only source of information.

:::

---

## Docs-as-Code workflow for interactive API pages

Use this workflow when you change the contract:

```text
Update the OpenAPI contract
    ↓
Check the file in Swagger Editor
    ↓
Run the linter
    ↓
Check the operation in Swagger UI
    ↓
Update the written guidance
    ↓
Review in a pull request
```

Use a branch for the change:

```bash
git switch -c docs/swagger-try-it-guidance
```

Commit only the files that you changed:

```bash
git add docs/08-API-Documentation/Swagger.md
git commit -m "Add Swagger lesson and Try it out guidance"
git push -u origin docs/swagger-try-it-guidance
```

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The page treats Swagger UI as the only reference. | Readers without a browser or a running server cannot use the API docs. | Keep the written reference and the static reference as the main sources. |
| A real token is pasted into a public page. | The token can be exposed. | Use a placeholder. Use a private environment for real tests. |
| The page does not say that Try it out needs a live server. | Readers think the API is broken when the test domain does not respond. | Explain the server address and the expected result. |
| The YAML has an error, and nobody checks it. | The interactive page does not load. | Check the file in Swagger Editor, and run the linter. |
| The page confuses Swagger with OpenAPI. | Readers cannot tell the standard from the tool. | Use OpenAPI for the file format. Use Swagger for the tools. |

---

## Summary

In this lesson, you learned that:

- OpenAPI is the standard. Swagger UI and Swagger Editor are tools that read it.
- Swagger UI shows operations as interactive forms and examples.
- Swagger Editor helps you find errors in the contract.
- Try it out sends real requests, so use placeholders and private environments.
- The Release Management server is a test domain. Try it out cannot reach a live API.
- Redocly builds the published reference for this project.

The aim is simple:

**Use interactive tools to help readers, and keep the written guidance accurate on its own.**

---

## Practice exercise

Use `portfolio/api/release-management/openapi.yaml`.

1. Open the contract in Swagger Editor, or in a local editor with the Swagger extension. Record any errors.
2. Find the `DELETE /releases/{releaseId}` operation. List its parameters, responses, and security requirement.
3. Write a Try it out section for this operation. Include the steps, the expected result, and a note about the test server.
4. Check that your section uses a placeholder for the token.
5. Compare your section with the Redocly reference in `portfolio/api/release-management/api-reference.html`.

---

## Key terms

| Term | Definition |
|---|---|
| Swagger | A family of tools for working with OpenAPI files. |
| Swagger UI | A browser page that shows an OpenAPI contract as an interactive reference. |
| Swagger Editor | A browser editor that checks and edits OpenAPI files. |
| Try it out | A feature that sends a real request from the browser to the server in the contract. |
| Authorize | A button that stores a token for the current browser session. |
| Server | The base URL that Try it out calls. |
| Redocly | A tool that builds a static API reference from an OpenAPI file. |
| Placeholder | A value, such as `<access-token>`, that the reader replaces with a real value. |

---

## Knowledge check

<details>
<summary><strong>1. What is the difference between OpenAPI and Swagger UI?</strong></summary>

OpenAPI is the standard file format for describing an API. Swagger UI is a tool that displays an OpenAPI file as an interactive page.

</details>

<details>
<summary><strong>2. What is Swagger Editor used for?</strong></summary>

It checks and edits an OpenAPI file. It shows errors in the YAML and in the contract, which helps you fix problems before you publish.

</details>

<details>
<summary><strong>3. Does this repository use Swagger UI to build the published reference?</strong></summary>

No. The repository uses Redocly to build the static reference. Swagger UI is an optional test view.

</details>

<details>
<summary><strong>4. What does the Try it out feature do?</strong></summary>

It sends a real HTTP request from the browser to the server listed in the `servers` section of the contract.

</details>

<details>
<summary><strong>5. Why will Try it out fail for the Release Management API?</strong></summary>

The server address `api.release-management.test` is a reserved test domain. No live API runs at that address, so the request fails with a network error.

</details>

<details>
<summary><strong>6. What should you never paste into a public Swagger UI page?</strong></summary>

A real access token. The token can be stored in the browser and sent to the server that the page calls. Use a placeholder instead.

</details>

<details>
<summary><strong>7. What does the Authorize button use?</strong></summary>

It uses the security scheme defined in the contract. For this API, that scheme is `bearerAuth`.

</details>

<details>
<summary><strong>8. Why should you not upload a draft contract to a public online editor?</strong></summary>

A public service can store or process the content. Use a local tool for draft contracts that are not yet approved.

</details>

<details>
<summary><strong>9. What should you write next to a Try it out feature?</strong></summary>

Write the steps, the expected result, and a note about what a failure means. Readers should not depend on the interactive page alone.

</details>

<details>
<summary><strong>10. Which tool should you use to publish a static reference?</strong></summary>

Use a reference generator such as Redocly. It builds a stable page that does not depend on a running server.

</details>

---

## Next lesson

Continue to **Postman**. You will learn how to save API requests in a collection and use them to test an API.
