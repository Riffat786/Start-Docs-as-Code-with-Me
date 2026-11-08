---
title: OpenAPI
sidebar_position: 7
description: Learn how the OpenAPI specification defines an API contract, and how to read and write it to produce accurate API reference documentation.
---

# OpenAPI

> **Lesson level:** Intermediate
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the HTTP, REST, JSON, and Examples lessons.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what the OpenAPI Specification is and why it matters.
- Identify the main sections of an OpenAPI file.
- Read an operation and map it to the HTTP lesson concepts.
- Describe authentication with a security scheme.
- Define a reusable schema and reference it with `$ref`.
- Explain how an enum affects the documentation.
- Validate an OpenAPI file before you generate documentation.
- Use the Release Management API in this repository as a real example.

---

## Why OpenAPI matters for technical writers

An OpenAPI file describes the API contract. The contract lists every endpoint, parameter, request body, response, and schema.

Tools read the contract to create reference documentation. When the contract changes, the reference can change too. This reduces the risk that the documentation and the API disagree.

> **Documentation Manager's Tip**
>
> Treat the OpenAPI file as the source of truth for the reference. If the docs and the contract disagree, the contract is correct until the API team says otherwise.

---

## Before you start

Make sure you have:

- Completed the HTTP, REST, JSON, and Examples lessons.
- Visual Studio Code or Cursor, with a YAML extension installed.
- The course repository cloned to your computer.
- Node.js installed, so that you can run the Redocly command.

:::note

**For beginners**

OpenAPI files use YAML. YAML uses indentation to show structure. Use spaces, not tabs. Two spaces per level is the common style in this repository.

:::

---

## What is OpenAPI?

The OpenAPI Specification is a standard format for describing HTTP APIs. This repository uses OpenAPI version `3.0.3`.

The file is written in YAML or JSON. This repository uses YAML:

```text
portfolio/api/release-management/openapi.yaml
```

Each OpenAPI file has the same main sections.

---

## Main sections of an OpenAPI file

| Section | Purpose | Example in this repository |
|---|---|---|
| `openapi` | The version of the specification | `3.0.3` |
| `info` | The name, version, and description of the API | Release Management API, version `1.0.0` |
| `servers` | The base URLs of the API | `https://api.release-management.test/v1` |
| `tags` | Groups of operations for the navigation | Releases, Changes, Work Items |
| `paths` | Endpoints and their operations | `/releases`, `/releases/{releaseId}` |
| `components` | Reusable definitions | `bearerAuth` and `Release` |
| `security` | The default authentication for operations | `bearerAuth` |

---

## Info and servers

The `info` section identifies the API. The `servers` section tells tools where the API runs.

```yaml
info:
  title: Release Management API
  version: 1.0.0
  description: |
    A fictional REST API for managing software releases,
    tracking changes and work items, coordinating approvals,
    and preparing release notes.

servers:
  - url: https://api.release-management.test/v1
    description: Fictional API server for portfolio demonstration
```

The `description` uses the pipe character (`|`). This keeps the line breaks. The `version` in `info` describes the API version. The `/v1` in the server URL is part of the base URL.

:::note

The server address ends in `.test`. This is a reserved test domain. It shows the structure of a real address without pointing to a real service.

:::

---

## Tags

Tags group operations. The generated reference uses tags to build the navigation.

```yaml
tags:
  - name: Releases
    description: Manage software releases.

  - name: Changes
    description: Track changes associated with releases.

  - name: Work Items
    description: Manage work items associated with releases.
```

The contract also defines `Approvals` and `Release Notes` tags. These tags do not have operations yet. The navigation for those groups stays empty until operations are added.

:::warning

A tag without operations can make the documentation look complete when it is not. Before you publish, check that every tag has at least one operation, or remove the tag.

:::

---

## Paths and operations

The `paths` section lists each endpoint. Each endpoint can have several operations, one for each HTTP method.

| Path | Method | Operation ID | Tag |
|---|---|---|---|
| `/releases` | `GET` | `listReleases` | Releases |
| `/releases` | `POST` | `createRelease` | Releases |
| `/releases/{releaseId}` | `GET` | `getRelease` | Releases |
| `/releases/{releaseId}` | `PUT` | `updateRelease` | Releases |
| `/releases/{releaseId}` | `DELETE` | `deleteRelease` | Releases |
| `/changes` | `GET` | `listChanges` | Changes |
| `/changes/{changeId}` | `GET` | `getChange` | Changes |
| `/releases/{releaseId}/changes` | `POST` | `associateChangeWithRelease` | Changes |
| `/work-items` | `GET` | `listWorkItems` | Work Items |
| `/work-items/{workItemId}` | `GET` | `getWorkItem` | Work Items |

The HTTP and REST lessons explain each method. The OpenAPI file describes the same methods in a structured format.

### Read an operation

This excerpt shows how an operation starts:

```yaml
  /releases/{releaseId}/changes:
    post:
      tags:
        - Changes
      summary: Associate a change with a release
      description: Associates an existing change with a specific release.
      operationId: associateChangeWithRelease

      parameters:
        - name: releaseId
          in: path
          required: true
          description: Unique identifier of the release.
          schema:
            type: string
          example: rel_2026_08
```

Map each line to a part of the documentation:

| OpenAPI field | Documentation part |
|---|---|
| `summary` | The heading for the operation |
| `description` | The purpose statement |
| `operationId` | A stable name that tools and links can use |
| `parameters` | The parameter table |
| `example` | The example value in the reference |

:::tip

The `summary` should be short. Use a verb and an object, such as "Associate a change with a release". The `description` can add one or two sentences.

:::

---

## Components

The `components` section holds definitions that you reuse. The two most common types are security schemes and schemas.

### Security schemes

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

This definition tells tools that:

- Authentication uses the HTTP `Authorization` header.
- The scheme is `bearer`.
- The token format is JWT.

The request looks like this:

```http
Authorization: Bearer <access-token>
```

### Schemas

A schema describes the structure of data. The Release schema in this repository has these fields:

```yaml
components:
  schemas:
    Release:
      type: object
      required:
        - id
        - version
        - name
        - status
        - targetDate
      properties:
        id:
          type: string
          example: rel_2026_08
        version:
          type: string
          example: "2026.08"
        status:
          type: string
          enum:
            - draft
            - in_progress
            - ready_for_approval
            - approved
            - released
            - cancelled
          example: ready_for_approval
        targetDate:
          type: string
          format: date
          example: "2026-08-28"
```

The `required` list shows which fields the API must return or receive. The `enum` list shows the only allowed values for `status`.

---

## Reference a schema with `$ref`

Use `$ref` to reuse a schema. Without `$ref`, you copy the same definition into every operation. With `$ref`, you change the definition in one place.

Before (copied definition, avoid):

```yaml
responses:
  '200':
    description: Release retrieved successfully.
    content:
      application/json:
        schema:
          type: object
          properties:
            id:
              type: string
```

After (reference, use):

```yaml
responses:
  '200':
    description: Release retrieved successfully.
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Release'
```

**Result:** The response uses the full Release schema. If you add a field to `Release`, every operation that references it shows the new field.

---

## Security: global and per-operation

The contract applies Bearer authentication to every operation:

```yaml
security:
  - bearerAuth: []
```

This setting is global. If one operation does not need authentication, you can override it for that operation. The example below is hypothetical. This contract does not define a public endpoint:

```yaml
  /health:
    get:
      security: []
```

An empty list (`[]`) means that the operation does not require authentication.

:::important

Check the security setting for every operation. If an operation is public and the contract does not say so, the reference will show that the operation needs a token. Developers will then try to call it with a token it does not need, and they may be confused.

:::

---

## How-to: Check an operation against the lessons

**Goal:** Confirm that a documented operation matches the contract.

Use this table for each operation:

| Question | Where to check in OpenAPI |
|---|---|
| What is the method and path? | The path key and the method under it |
| Is authentication required? | `security`, or an override on the operation |
| Which parameters are required? | `parameters`, with `required: true` |
| What is in the request body? | `requestBody`, and its `schema` |
| Which responses are possible? | `responses`, with each status code |
| Which fields are allowed? | The `schema` and its `enum` values |

**Result:** You know which parts of the documentation to write, and where each part comes from.

---

## How-to: Validate the contract before you generate documentation

**Goal:** Find errors in the OpenAPI file before you build the reference.

**Step 1: Run the linter.**

```bash
npx redocly lint portfolio/api/release-management/openapi.yaml
```

Expected result: The command reports no errors. Warnings can appear. Read each warning, and fix the ones that affect documentation.

**Step 2: Preview the reference outside the repository.**

Build the reference to a folder outside the repository, so that the repository files do not change:

```bash
npx redocly build-docs portfolio/api/release-management/openapi.yaml -o ../preview/api-reference.html
```

Open `../preview/api-reference.html` in your browser. Check each operation, schema, and example.

:::warning

The repository's own build command writes to `portfolio/api/release-management/api-reference.html`. Do not run that command as a test. Use a preview path, and run the repository command only when you intend to update the generated file.

:::

---

## Docs-as-Code workflow for an API change

Use this workflow when the API team changes an endpoint:

```text
API change
    ↓
Update the OpenAPI contract
    ↓
Run the linter
    ↓
Preview the reference
    ↓
Update the supporting pages
    ↓
Review in a pull request
    ↓
Publish
```

Use a branch for each change:

```bash
git switch -c docs/openapi-release-status
```

Commit only the files that you changed:

```bash
git add portfolio/api/release-management/openapi.yaml
git commit -m "Document release status values in OpenAPI contract"
git push -u origin docs/openapi-release-status
```

:::note

If the change comes from the API team, ask them to update the contract. Writers review the contract and the wording. Do not change the API behavior in the documentation.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| Indentation uses tabs or the wrong number of spaces. | The file does not parse, and the reference fails to build. | Use spaces only. Use the linter to find the error line. |
| A schema is copied instead of referenced with `$ref`. | Changes to the schema do not reach every operation. | Move the definition to `components/schemas` and reference it. |
| An enum in the schema does not match the docs. | Readers use values that the API rejects. | Update the enum or the docs so that they match. |
| A tag has no operations. | The navigation shows an empty group. | Add operations, or remove the tag. |
| `security` is missing from a public operation. | The reference shows a token requirement that does not exist. | Add `security: []` to the operation. |
| The `example` does not match the schema. | Readers copy an invalid value. | Check each example against its schema. |

---

## Summary

In this lesson, you learned that:

- OpenAPI is a standard format for describing an API contract.
- The main sections are `info`, `servers`, `tags`, `paths`, `components`, and `security`.
- Each operation maps to a part of the reference: heading, purpose, parameters, body, and responses.
- Security schemes describe how to authenticate.
- Schemas describe data. Use `$ref` to reuse them.
- An enum lists the only allowed values for a field.
- Lint and preview the contract before you publish.

The aim is simple:

**Keep the contract accurate, and let the documentation follow it.**

---

## Practice exercise

Use `portfolio/api/release-management/openapi.yaml`.

1. Find the `Release` schema under `components`. List each required field and each enum value.
2. Find the `getRelease` operation under `/releases/{releaseId}`. List its parameters, responses, and security setting.
3. Find a place where a schema is referenced with `$ref`. Explain what the reference points to.
4. Identify the tags that have no operations. Write one sentence about how you would handle each tag.
5. Run `npx redocly lint portfolio/api/release-management/openapi.yaml`. Record any warnings.
6. Build a preview to `../preview/api-reference.html`. Compare one operation in the preview with its contract entry.

---

## Key terms

| Term | Definition |
|---|---|
| OpenAPI Specification | A standard format for describing HTTP APIs. |
| Contract | The API definition that lists endpoints, parameters, schemas, and responses. |
| Operation | One method on one path, such as `GET /releases`. |
| `operationId` | A unique name for an operation. |
| Tag | A label that groups operations in the reference. |
| Schema | A description of the structure and rules of data. |
| `$ref` | A reference to a definition in `components`. |
| Enum | A fixed list of allowed values. |
| Security scheme | A definition of how clients authenticate. |
| Linter | A tool that checks a file for errors and rule violations. |

---

## Knowledge check

<details>
<summary><strong>1. What is the OpenAPI Specification?</strong></summary>

It is a standard format for describing HTTP APIs. An OpenAPI file describes the endpoints, parameters, schemas, responses, and authentication of an API.

</details>

<details>
<summary><strong>2. Which sections are the main sections of an OpenAPI file?</strong></summary>

`openapi`, `info`, `servers`, `tags`, `paths`, `components`, and `security`.

</details>

<details>
<summary><strong>3. What does the `operationId` do?</strong></summary>

It gives each operation a unique name. Tools and links can use the name to refer to the operation.

</details>

<details>
<summary><strong>4. Why should you use `$ref` for a schema?</strong></summary>

A reference lets many operations use one definition. If you change the definition, every operation that references it shows the change.

</details>

<details>
<summary><strong>5. What does `required` mean in a schema?</strong></summary>

It lists the fields that the API must include. A request without a required field fails validation.

</details>

<details>
<summary><strong>6. What does an enum show in the documentation?</strong></summary>

It shows the only allowed values for a field. For example, the `status` field accepts `draft`, `in_progress`, `ready_for_approval`, `approved`, `released`, and `cancelled`.

</details>

<details>
<summary><strong>7. How does the global `security` setting work?</strong></summary>

It applies Bearer authentication to every operation by default. An operation can override the setting. An empty list means the operation requires no authentication.

</details>

<details>
<summary><strong>8. What is a common cause of a broken OpenAPI file?</strong></summary>

Incorrect indentation. YAML uses indentation to show structure. Use spaces only, and use the linter to find the error.

</details>

<details>
<summary><strong>9. Why should you preview the reference before you publish it?</strong></summary>

A preview shows how the operations, schemas, and examples render. It helps you find layout and content problems before readers see them.

</details>

<details>
<summary><strong>10. Who should change the API behavior in the contract?</strong></summary>

The API team. Writers review the contract and the wording, and they ask the API team to make changes to the behavior.

</details>

---

## Next lesson

Continue to **Swagger**. You will learn how Swagger UI displays an OpenAPI contract as an interactive reference.
