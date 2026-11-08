---
title: Examples
sidebar_position: 6
description: Learn how to write realistic, valid, and safe request and response examples that help developers make a successful API call.
---

# Examples

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the HTTP, REST, and JSON lessons.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain why examples are the most-used part of API documentation.
- Apply the principles of a good API example.
- Write a complete request and response example with a method, headers, and a body.
- Document a filtered and paginated collection request.
- Show error responses without inventing details that the API does not define.
- Keep example data consistent across pages.
- Review examples against the API contract before you publish.

---

## Why examples matter for technical writers

Developers often skip the reference text and copy an example. If the example works, they continue. If it fails, they leave the page or open a support request.

A good example answers the first question that a developer asks: "What does a successful call look like?"

> **Documentation Manager's Tip**
>
> Write the first example before you write the rest of the page. If you cannot write a working example, the endpoint may not be ready to document.

---

## Before you start

Make sure you have:

- Completed the HTTP, REST, and JSON lessons.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Access to `portfolio/api/release-management/openapi.yaml`.

:::note

**For beginners**

An example is a small, complete case. It shows one request and one response. It does not explain every option. The reference section explains the options.

:::

---

## What makes a good example?

Use these six principles for every example.

| Principle | What it means | Example in the Release Management API |
|---|---|---|
| Realistic | The values look like real data. | `"name": "Customer Portal Release"` |
| Valid | The values match the schema, including allowed values. | `"status": "ready_for_approval"` is in the `status` enum. |
| Complete | The example includes every required header and field. | The request includes the `Authorization` header. |
| Consistent | The same IDs and names appear on every page. | `rel_2026_08` is used on each release example. |
| Safe | The example contains no real secrets or personal data. | `Bearer <access-token>` uses a placeholder. |
| Minimal | The example shows only what the reader needs. | Optional fields are omitted unless they teach something. |

:::important

Check every example against the contract. Use only status values from the schema enum. An example with a value that the API does not accept teaches the reader the wrong thing.

:::

---

## Example data in this repository

The contract defines a `Release` object with these example values:

| Field | Example value |
|---|---|
| `id` | `rel_2026_08` |
| `version` | `"2026.08"` |
| `name` | `Customer Portal Release` |
| `status` | `ready_for_approval` |
| `targetDate` | `"2026-08-28"` |

The `status` field accepts these values only: `draft`, `in_progress`, `ready_for_approval`, `approved`, `released`, and `cancelled`.

Use these values in your examples. Do not invent a new status such as `published`.

---

## How-to: Write a first successful call

**Goal:** Show the simplest working request for `GET /v1/releases/{releaseId}`.

Markdown source:

````markdown
### Example: Get one release

Use this example to retrieve release `rel_2026_08`.

```bash
curl --request GET "https://api.release-management.test/v1/releases/rel_2026_08" \
  --header "Authorization: Bearer <access-token>" \
  --header "Accept: application/json"
```

Example response:

```json
{
  "id": "rel_2026_08",
  "version": "2026.08",
  "name": "Customer Portal Release",
  "status": "ready_for_approval",
  "targetDate": "2026-08-28"
}
```
````

**Result:** The reader can copy the command, replace `<access-token>` with a real token, and run the request. The response shows what a successful call returns.

:::note

The base URL `https://api.release-management.test/v1` comes from the `servers` section of the contract. It is a test address. Replace it with the production address when the API is published.

:::

---

## How-to: Document a filtered and paginated collection

**Goal:** Show how a developer gets the first page of released releases.

Markdown source:

````markdown
### Example: List released releases

```http
GET /v1/releases?status=released&page=1&pageSize=20
Authorization: Bearer <access-token>
Accept: application/json
```

Example response:

```json
{
  "data": [
    {
      "id": "rel_2026_08",
      "version": "2026.08",
      "name": "Customer Portal Release",
      "status": "released",
      "targetDate": "2026-08-28"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 42,
    "totalPages": 3
  }
}
```
````

**Result:** The reader sees the query parameters, the data array, and the pagination object. The example shows that the response contains one page of results, not all releases.

:::tip

Show a second request that uses `page=2`. Developers often need the next page, and an example makes the pattern clear.

:::

---

## How-to: Show an error response

**Goal:** Show what a developer receives when the access token is missing.

Markdown source:

````markdown
### Example: Missing access token

```http
GET /v1/releases/rel_2026_08
Accept: application/json
```

Response:

```text
401 Unauthorized
```

The request does not include a valid `Authorization` header. Add the header and send the request again.
````

**Result:** The reader sees the error, the cause, and the fix. The example does not invent an error body.

:::warning

The contract defines status codes for errors, such as `401 Unauthorized` and `404 Not Found`. It does not define an error response body. Do not add an error JSON body to your examples unless the API team confirms the format. Ask the team, and record the answer in the review.

:::

---

## How-to: Keep examples consistent across pages

**Goal:** Make sure that the same release looks the same on every page.

Use this checklist:

1. Use `rel_2026_08` as the example release ID on every page.
2. Use `2026.08` as the version for that release.
3. Use one of the six allowed status values.
4. Use `YYYY-MM-DD` for `targetDate`.
5. Use the same name, such as `Customer Portal Release`.

**Result:** A developer who reads three pages sees one consistent release. The developer does not wonder whether the examples describe different releases.

:::note

If you change an example, search the repository for the old value. A search for `rel_2026_08` helps you find each place that uses the example.

:::

---

## Check examples before you publish

Use this Docs-as-Code workflow:

**Step 1: Create a branch.**

```bash
git switch -c docs/api-examples
```

**Step 2: Edit the page.**

Open `docs/08-API-Documentation/Examples.md` and make your changes.

**Step 3: Validate each JSON example.**

Copy each JSON example to a temporary `.json` file. Open it in Visual Studio Code, and check the Problems panel. Follow the JSON lesson for the full method.

**Step 4: Check the rendered page.**

```bash
npm run start
```

Open the page in your browser. Check that the code blocks display correctly and the headings appear in the right order.

**Step 5: Build the site.**

```bash
npm run build
```

Expected result: The build completes with `[SUCCESS]`. Fix any error before you push the change.

:::warning

Do not commit a real access token, even in a test branch. Remove any token before you commit. Use `<access-token>` in every example.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The example uses a status value that is not in the enum. | The reader sends a value that the API rejects. | Use only the allowed values from the schema. |
| The example uses a real token. | A secret is exposed in the repository. | Use `<access-token>` as a placeholder. |
| Each page uses a different release ID. | Readers think the examples describe different releases. | Use one consistent example ID across pages. |
| The example omits the `Authorization` header. | The request fails, and the reader does not know why. | Include the header in every protected example. |
| The example shows invented error fields. | The reader expects fields that the API does not return. | Document only the status codes that the contract defines. |
| The example is long and shows every optional field. | The reader cannot find the important parts. | Show the minimum. Put the full reference in the field tables. |

---

## Summary

In this lesson, you learned that:

- Examples are often the most-used part of API documentation.
- A good example is realistic, valid, complete, consistent, safe, and minimal.
- Check every example against the contract, including allowed values.
- A complete example includes the method, path, headers, and body.
- Document only the error responses that the contract defines.
- Keep example data consistent across pages.
- Validate and build the examples before you publish.

The aim is simple:

**Give developers one example that works, and make sure every other example matches it.**

---

## Practice exercise

Use the Release Management API contract in this repository.

1. Write a first successful call for `GET /v1/releases/{releaseId}`. Use the `rel_2026_08` example from the contract.
2. Write a filtered list example for `GET /v1/releases` with `status=released`. Use only allowed values.
3. Write an error example for `404 Not Found`. Describe the cause and the fix. Do not invent an error body.
4. Check each JSON example in Visual Studio Code. Fix any errors.
5. Search the repository for `rel_2026_08`. Confirm that each example uses the same name, version, and date.
6. Run `npm run build`, and fix any errors before you push the change.

---

## Key terms

| Term | Definition |
|---|---|
| Example | A small, complete case that shows one request and one response. |
| Realistic example | An example with values that look like real data. |
| Placeholder | A value, such as `<access-token>`, that the reader replaces with a real value. |
| Enum | A fixed list of allowed values for a field. |
| Pagination | A method for returning a large collection in pages. |
| Error response | A response with a status code that shows the request failed. |
| Base URL | The address that all request paths are added to, such as `https://api.release-management.test/v1`. |
| Source of truth | The authoritative file that defines the API, such as the OpenAPI contract. |

---

## Knowledge check

<details>
<summary><strong>1. Why are examples important to developers?</strong></summary>

Developers often copy examples. A working example helps them make a successful first call. A broken example makes them stop or ask for help.

</details>

<details>
<summary><strong>2. What are the six principles of a good example?</strong></summary>

A good example is realistic, valid, complete, consistent, safe, and minimal.

</details>

<details>
<summary><strong>3. Why must an example use only allowed status values?</strong></summary>

The API accepts only the values in the enum. An example with another value teaches the reader something that the API does not support.

</details>

<details>
<summary><strong>4. What should you use instead of a real access token?</strong></summary>

Use a placeholder, such as `<access-token>`. A real token is a secret. Documentation is often public.

</details>

<details>
<summary><strong>5. Why should the same release ID appear on every page?</strong></summary>

Consistent examples help readers follow the workflow across pages. They do not need to wonder whether the examples describe different releases.

</details>

<details>
<summary><strong>6. What does the pagination object in a collection response show?</strong></summary>

It shows the current page, the page size, the total number of items, and the total number of pages.

</details>

<details>
<summary><strong>7. Why should you not invent an error response body?</strong></summary>

The contract defines the status codes but not the error body. An invented body can mislead developers. Ask the API team before you document an error format.

</details>

<details>
<summary><strong>8. What does a 401 Unauthorized example teach the reader?</strong></summary>

It shows that the request needs a valid `Authorization` header. The reader adds the header and sends the request again.

</details>

<details>
<summary><strong>9. How can you check a JSON example before you publish it?</strong></summary>

Copy the example to a temporary `.json` file, open it in Visual Studio Code, and check the Problems panel. Fix any errors before you publish.

</details>

<details>
<summary><strong>10. What is the main goal of an example?</strong></summary>

The goal is to give developers one example that works and that matches the contract. Developers can then build on it.

</details>

---

## Next lesson

Continue to **OpenAPI**. You will learn how the OpenAPI contract defines the endpoints, schemas, and examples that you document.
