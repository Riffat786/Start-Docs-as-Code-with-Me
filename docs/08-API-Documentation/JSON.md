---
title: JSON
sidebar_position: 5
description: Learn how JSON structures API request and response data, and how to document JSON fields clearly for developers.
---

# JSON

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the HTTP and REST lessons.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what JSON is and where it appears in API documentation.
- Identify objects, arrays, strings, numbers, booleans, and null values.
- Write valid JSON examples with the correct syntax.
- Document fields with names, types, required status, and descriptions.
- Explain why some values must be strings, such as versions and dates.
- Validate a JSON example in Visual Studio Code.
- Use the Release Management API in this repository as a real example.

---

## Why JSON matters for technical writers

Most REST APIs send and receive data in JSON. Developers read JSON examples to learn what the API expects and what it returns.

A small syntax error in an example can cause a developer's request to fail. For example, one extra comma can make the whole body invalid. Your examples must be correct.

> **Documentation Manager's Tip**
>
> Treat every JSON example as code. Validate it before you publish. Developers copy examples directly into their applications.

---

## Before you start

Make sure you have:

- Completed the HTTP and REST lessons.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Access to `portfolio/api/release-management/openapi.yaml`.

:::note

**For beginners**

JSON is a text format for data. It uses simple rules. You do not need to be a developer to read it or write it correctly.

:::

---

## What is JSON?

JSON (JavaScript Object Notation) is a text format that stores data in a structured way. Most APIs use JSON for request bodies and response bodies.

This is a complete JSON document for one release:

```json
{
  "id": "rel_2026_08",
  "version": "2026.08",
  "name": "Customer Portal Release",
  "status": "ready_for_approval",
  "targetDate": "2026-08-28"
}
```

The document has one object. The object contains five fields. Each field has a name and a value.

---

## JSON building blocks

JSON uses six types of values.

| Type | Example | Notes |
|---|---|---|
| Object | `{ "id": "rel_2026_08" }` | A group of fields inside curly braces |
| Array | `[ "released", "draft" ]` | An ordered list inside square brackets |
| String | `"Customer Portal Release"` | Text inside double quotes |
| Number | `42` | A whole number or a decimal, without quotes |
| Boolean | `true` or `false` | Lowercase, without quotes |
| Null | `null` | Means no value, without quotes |

The Release Management API returns a collection inside an array:

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

The `data` field is an array. Each item in the array is an object. The `pagination` field is an object.

---

## Syntax rules

JSON is strict. These rules cause most errors in API examples.

| Rule | Correct | Incorrect |
|---|---|---|
| Use double quotes for strings and field names. | `"name": "Release"` | `'name': 'Release'` |
| Do not add a trailing comma after the last item. | `"status": "draft"` | `"status": "draft",` |
| Do not add comments. | Use a description in the documentation. | `// The release status` |
| Write booleans and null in lowercase. | `true`, `null` | `True`, `NULL` |
| Keep numbers without quotes. | `"pageSize": 20` | `"pageSize": "20"` |

:::warning

JSON does not support comments. Do not add comments inside a JSON example, even if you want to explain a field. Put the explanation in the field table or in the text around the example.

:::

---

## Strings, numbers, and version values

Some values look like numbers but must be strings. A version such as `2026.08` is a string. If you write it without quotes, the value becomes a number, and the number `2026.08` loses the trailing zero.

Correct:

```json
{
  "version": "2026.08"
}
```

Incorrect:

```json
{
  "version": 2026.08
}
```

:::important

Put version numbers, identifiers, and dates in quotes. Write them as strings. Use the same format that the contract defines.

:::

Dates use the ISO 8601 format. The Release Management API uses `YYYY-MM-DD` for `targetDate`, and a full timestamp for `createdAt` and `updatedAt`:

```json
{
  "targetDate": "2026-08-28",
  "createdAt": "2026-08-10T09:30:00Z",
  "updatedAt": "2026-08-15T14:20:00Z"
}
```

---

## Required, optional, and null fields

A field can be required, optional, or nullable. Show the difference in your documentation.

- **Required:** The request must include the field. The API returns an error if the field is missing.
- **Optional:** The request can leave out the field.
- **Nullable:** The field can contain `null`. This means the field exists, but it has no value.

Do not use `null` to mean "not provided" unless the contract says so. Check the contract before you document nullable fields.

---

## How-to: Document a JSON request body

**Goal:** Document the request body for `POST /v1/releases`.

Markdown source:

````markdown
### Request body

| Field | Type | Required | Description |
|---|---|---|---|
| `version` | string | Yes | Release version, such as `2026.09`. |
| `name` | string | Yes | Name of the release. |
| `status` | string | No | Initial release status. |
| `targetDate` | string | Yes | Planned release date in `YYYY-MM-DD` format. |
| `description` | string | No | Description of the release. |

Example request body:

```json
{
  "version": "2026.09",
  "name": "Customer Portal Release",
  "status": "draft",
  "targetDate": "2026-09-30",
  "description": "Improvements to customer portal navigation and reporting."
}
```
````

**Result:** The table explains each field. The example shows a valid request body. A developer can copy the example and change the values.

:::tip

Use the same field order in the table and in the example. Readers compare the two, and matching order makes the comparison easier.

:::

---

## How-to: Document a JSON response

**Goal:** Document the response for `GET /v1/releases/{releaseId}`.

Markdown source:

````markdown
### Successful response

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

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

**Result:** The reader sees the status line, the content type, and a complete response body. The `Content-Type` header tells the developer that the body is JSON.

The generated reference in this repository shows the same kind of sample:

![Response sample for GET /releases/{releaseId} in the generated API reference](/img/portfolio/api/HTTP-response.png)

---

## How-to: Check a JSON example before you publish

**Goal:** Find syntax errors in a JSON example.

**Step 1: Create a JSON file.**

Create a file named `example.json` in a temporary folder. Paste your example into the file. Do not commit this file to the repository.

**Step 2: Open the file in Visual Studio Code.**

VS Code shows a red underline where the JSON is invalid. The **Problems** panel lists each error with its line number.

**Step 3: Fix each error.**

Common errors include a missing quote, an extra comma, or a missing closing brace.

**Step 4: Copy the corrected example into your Markdown page.**

**Result:** The example is valid JSON. The Problems panel shows no errors for the file.

:::note

Use the Problems panel to check examples in other files too. Open the Markdown file, select the JSON block, and copy it to a temporary JSON file for checking.

:::

---

## How-to: Use a field table with a JSON example

Use a table for the reference, and the example for the starting point. Show both on the same page.

Markdown source:

```markdown
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Unique identifier of the release. |
| `status` | string | Yes | Lifecycle status, such as `draft` or `released`. |
| `createdAt` | string | Yes | Timestamp when the release was created. |
```

**Result:** The reader can find each field quickly. The table explains the rules, and the example shows the values.

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| A trailing comma after the last field. | The developer's request fails. | Remove the comma. Validate the example. |
| A version written as a number. | The value changes, and the request can fail. | Put the version in quotes. |
| Single quotes around strings. | The example is not valid JSON. | Use double quotes. |
| A comment inside the example. | The example is not valid JSON. | Move the explanation to the text or the table. |
| A field in the example that does not appear in the table. | Readers do not know whether the field is required. | Add the field to the table, or remove it from the example. |
| An example that uses an old field name. | The developer uses a field that the API no longer accepts. | Check the field names against the contract before you publish. |

---

## Summary

In this lesson, you learned that:

- JSON stores data in objects, arrays, strings, numbers, booleans, and null.
- JSON syntax is strict. Use double quotes, avoid trailing commas, and do not add comments.
- Versions, identifiers, and dates are strings. Put them in quotes.
- Field tables explain the rules. Examples show the values.
- You can validate a JSON example in Visual Studio Code before you publish it.

The aim is simple:

**Give developers JSON examples that they can copy and use without changes.**

---

## Practice exercise

Use the Release Management API contract in this repository.

1. Open `portfolio/api/release-management/openapi.yaml`. Find the schema for the release object.
2. List each field, its type, and whether it is required.
3. Write a field table for the release object in Markdown.
4. Write a valid JSON example for one release. Use the field names from the contract.
5. Copy the example to a temporary `.json` file. Open it in Visual Studio Code, and check the Problems panel. Fix any errors.
6. Add the table and the example to a Markdown page, and run `npm run start` to check the rendered result.

---

## Key terms

| Term | Definition |
|---|---|
| JSON | A text format that stores data in objects, arrays, and values. |
| Object | A group of fields inside curly braces. |
| Array | An ordered list of values inside square brackets. |
| String | Text inside double quotes. |
| Number | A numeric value without quotes. |
| Boolean | A value that is either `true` or `false`. |
| Null | A value that means no value. |
| Field | A named value inside an object. |
| Schema | A description of the fields, types, and rules for a data structure. |
| Validation | A check that confirms a JSON example follows the syntax rules. |

---

## Knowledge check

<details>
<summary><strong>1. What is JSON?</strong></summary>

JSON is a text format that stores data in objects, arrays, and values. Most REST APIs use JSON for request and response bodies.

</details>

<details>
<summary><strong>2. What are the six types of values in JSON?</strong></summary>

Object, array, string, number, boolean, and null.

</details>

<details>
<summary><strong>3. Why can you not add comments to a JSON example?</strong></summary>

JSON does not support comments. A comment makes the example invalid, and a developer who copies the example gets an error.

</details>

<details>
<summary><strong>4. Why should a version such as 2026.08 be written as a string?</strong></summary>

If you write the version without quotes, JSON treats it as a number. The number loses the trailing zero, and the value can change. Put the version in quotes.

</details>

<details>
<summary><strong>5. What is the difference between a required field and a nullable field?</strong></summary>

A required field must be present in the request. A nullable field can be present with a `null` value. Check the contract before you document nullable fields.

</details>

<details>
<summary><strong>6. What format does the Release Management API use for targetDate?</strong></summary>

It uses the `YYYY-MM-DD` format. For example, `2026-08-28`.

</details>

<details>
<summary><strong>7. Which syntax error appears most often in JSON examples?</strong></summary>

A trailing comma after the last field is one of the most common errors. Other common errors include single quotes and missing closing braces.

</details>

<details>
<summary><strong>8. How can you check a JSON example before you publish it?</strong></summary>

Copy the example into a temporary `.json` file and open it in Visual Studio Code. Check the Problems panel for errors, and fix them before you copy the example back into the Markdown page.

</details>

<details>
<summary><strong>9. Why should you use both a field table and an example?</strong></summary>

The table explains the rules for each field, such as the type and whether it is required. The example shows the values. Readers need both to use the API correctly.

</details>

<details>
<summary><strong>10. What is the main goal of JSON documentation?</strong></summary>

The goal is to give developers JSON examples that are valid, match the contract, and can be copied without changes.

</details>

---

## Next lesson

Continue to **Examples**. You will learn how to write request and response examples that help developers succeed on their first call.
