---
title: HTTP
sidebar_position: 3
description: Learn how HTTP requests and responses work, and how to document them clearly for developers.
---

# HTTP

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the API Documentation overview and the Markdown module.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain how HTTP requests and responses work.
- Identify the parts of an HTTP request and response.
- Describe the common HTTP methods and when to use each one.
- Explain common status codes in plain language.
- Document headers, request bodies, and responses in Markdown.
- Use the Release Management API in this repository as a real example.
- Apply a Docs-as-Code workflow to an API page.

---

## Why HTTP matters for technical writers

Developers use HTTP to call an API. Each call is a request. The server sends back a response.

Your documentation must show developers exactly what to send and what they will receive. If the HTTP details are unclear, developers guess. Guessing leads to failed calls and support requests.

For example, this request lists releases in the Release Management API:

```http
GET /v1/releases?status=released&page=1&pageSize=20
Authorization: Bearer <access-token>
```

A developer needs to know the method, the path, the query parameters, and the header. Your documentation gives them all of this in one place.

> **Documentation Manager's Tip**
>
> For every API page, ask: "Can a developer make a successful call by using only this page?" If the answer is no, add the missing HTTP detail.

---

## Before you start

Make sure you have:

- Git installed and configured. See Module 2 · Environment Setup.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Node.js installed, so that you can run the site locally.

:::note

**For beginners**

You do not need to write code to learn HTTP. You need to read the examples and understand the parts of a request and a response.

:::

---

## What is HTTP?

HTTP (Hypertext Transfer Protocol) is a set of rules. Clients and servers use these rules to exchange data over the web.

In API work:

- The **client** sends the request. A client can be a browser, Postman, or a developer's script.
- The **server** processes the request and sends the response. The API runs on the server.

HTTP follows a simple pattern:

```text
Client sends request
        ↓
Server processes request
        ↓
Server sends response
```

---

## Parts of an HTTP request

A request can contain five parts.

| Part | Purpose | Example |
|---|---|---|
| Method | The action to perform | `GET` |
| URL | The resource to act on | `/v1/releases/rel_2026_08` |
| Headers | Extra information about the request | `Authorization: Bearer <access-token>` |
| Parameters | Filters, page numbers, or IDs | `status=released` |
| Body | Data to send to the server | A JSON object |

This request retrieves one release. It has a method, a URL, and a header:

```http
GET /v1/releases/rel_2026_08
Authorization: Bearer <access-token>
```

:::important

Method, URL, and headers are required for most requests. If one is missing or wrong, the server returns an error, even when the rest of the request is correct.

:::

---

## Parts of an HTTP response

A response can contain three parts:

- **Status code:** A three-digit number that shows the result.
- **Headers:** Information about the response, such as the content type.
- **Body:** The data that the server returns.

This response shows a successful retrieval:

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

The body is shortened for this lesson. The full response in the API contract also includes the description and timestamps.

The generated API reference shows the same response as a sample:

![Response sample for GET /releases/{releaseId} in the generated API reference](/img/portfolio/api/HTTP-response.png)

---

## Common HTTP methods

Each method describes a different action. The table shows how the Release Management API uses each method.

| Method | Purpose | Example in this API | Success response |
|---|---|---|---|
| `GET` | Retrieve data. It does not change data. | `GET /v1/releases` | `200 OK` |
| `POST` | Create a resource. | `POST /v1/releases` | `201 Created` |
| `PUT` | Replace an existing resource. | `PUT /v1/releases/{releaseId}` | `200 OK` |
| `PATCH` | Update part of a resource. | Not used in this API | Depends on the API |
| `DELETE` | Remove a resource. | `DELETE /v1/releases/{releaseId}` | `204 No Content` |

:::warning

Never document a `GET` request that changes data. Developers rely on `GET` to be safe to repeat. A wrong method can cause data loss.

:::

:::tip

Check the method in the API contract before you write the page. Do not rely on the method name in the endpoint title.

:::

---

## Common status codes

A status code tells the developer what happened. Document every code that an endpoint can return, not only the success code.

| Status code | Meaning | Where it appears in the Release Management API |
|---|---|---|
| `200 OK` | The request succeeded. | GET, PUT |
| `201 Created` | A new resource was created. | POST |
| `204 No Content` | The request succeeded. No body is returned. | DELETE |
| `400 Bad Request` | The request contains invalid data. | POST, PUT |
| `401 Unauthorized` | Authentication is missing or invalid. | All endpoints |
| `404 Not Found` | The resource does not exist. | GET by ID, PUT, DELETE |
| `409 Conflict` | The request conflicts with the current state. | POST, DELETE |
| `422 Unprocessable Content` | The request fails validation. | POST, PUT |

:::note

Status codes are grouped by their first digit:

- `2xx`: Success
- `4xx`: The client must change the request
- `5xx`: The server failed

:::

---

## Headers

Headers carry extra information. The Release Management API uses three common headers.

| Header | Purpose | Example |
|---|---|---|
| `Authorization` | Sends the access token. | `Authorization: Bearer <access-token>` |
| `Content-Type` | Describes the format of the request body. | `Content-Type: application/json` |
| `Accept` | Describes the format that the client expects. | `Accept: application/json` |

This POST request uses all three headers:

```http
POST /v1/releases

Authorization: Bearer <access-token>
Content-Type: application/json
Accept: application/json
```

:::warning

Never show a real access token in documentation. Use a placeholder such as `<access-token>`. Store real tokens outside the repository.

:::

---

## How-to: Document a GET request in Markdown

**Goal:** Document `GET /releases/{releaseId}`.

**Step 1: Write the heading and the endpoint line.**

Markdown source:

````markdown
## Get a release

<span className="http-method http-get">GET</span> `/releases/{releaseId}`

**Purpose:** Returns one release by its unique identifier.
````

The `span` element displays the green GET badge. The class is defined in `src/css/custom.css`.

**Step 2: Add the request.**

Markdown source:

````markdown
### Request

```http
GET /v1/releases/rel_2026_08
Authorization: Bearer <access-token>
```
````

**Step 3: Add the success response.**

Markdown source:

````markdown
### Successful response

```text
200 OK
```
````

**Result:** The page shows a heading, a green GET badge, a short purpose statement, and two code blocks. A developer can copy the request and check the response.

The generated reference for this endpoint looks like this:

![GET release endpoint in the generated API reference](/img/portfolio/api/release-management-api-get-release.png)

:::tip

Keep the endpoint line, request, and response in the same order for every endpoint. Consistent structure helps developers find information quickly.

:::

---

## How-to: Document error responses

**Goal:** Show the errors that a developer can receive from `DELETE /releases/{releaseId}`.

Markdown source:

```markdown
### Other responses

| Status code | Description |
|---|---|
| `401 Unauthorized` | Authentication is missing or invalid. |
| `404 Not Found` | Release does not exist. |
| `409 Conflict` | Release can not be deleted in its current state. |
```

**Result:** A table lists each error and what causes it. The developer knows what to fix.

:::important

Describe the cause and the fix for each error. Do not only list the status code. For example, say "Release is in the released state. Change the status before you delete it."

:::

---

## How-to: Document a request body

**Goal:** Show the request body for `POST /releases`.

Markdown source:

````markdown
### Request body

| Field | Type | Required | Description |
|---|---|---|---|
| `version` | string | Yes | Release version. |
| `name` | string | Yes | Name of the release. |
| `targetDate` | string | Yes | Planned release date. |

Example request body:

```json
{
  "version": "2026.09",
  "name": "Customer Portal Release",
  "status": "draft",
  "targetDate": "2026-09-30"
}
```
````

**Result:** A table shows the required fields. The JSON example shows a valid body that the developer can copy.

:::note

Show required fields and optional fields clearly. The table is the reference. The example is the starting point.

:::

---

## Docs-as-Code workflow for an API page

Use this workflow to update the HTTP page. You do not need to publish directly from the website.

**Step 1: Create a branch.**

```bash
git switch -c docs/http-basics
```

Expected result:

```text
Switched to a new branch 'docs/http-basics'
```

**Step 2: Edit the file.**

Open `docs/08-API-Documentation/HTTP.md` in Visual Studio Code or Cursor. Make your changes and save the file.

**Step 3: Preview the site locally.**

```bash
npm run start
```

Expected result: The site opens in your browser at `http://localhost:3000/Start-Docs-as-Code-with-Me/`. Open the HTTP page and check your changes.

**Step 4: Commit and push.**

```bash
git add docs/08-API-Documentation/HTTP.md
git commit -m "Add HTTP lesson for API documentation"
git push -u origin docs/http-basics
```

**Step 5: Open a pull request.**

On GitHub, select **Compare & pull request**. Ask a peer writer to review the change. Merge the pull request after the review is complete.

:::warning

Run `npm run build` before you push. If the build fails, fix the error first. A failed build stops the site from publishing.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The page does not show the `Authorization` header. | Developers do not know how to authenticate. | Add an Authentication section, and show the header in each protected request. |
| The page lists only the `200` response. | Developers do not know how to handle errors. | Document every status code that the endpoint can return. |
| The example uses a real token. | A secret is exposed in the repository. | Use `<access-token>` as a placeholder. |
| The page uses `GET` for an action that changes data. | Developers can change data by accident. | Use the correct method, such as `POST`, `PUT`, or `DELETE`. |
| An HTML element is not closed. | The Docusaurus build fails. | Check that every opening tag has a closing tag. Run `npm run build` before you push. |

---

## Summary

In this lesson, you learned that:

- HTTP sends a request from a client to a server, and the server sends a response.
- A request contains a method, a URL, headers, parameters, and sometimes a body.
- A response contains a status code, headers, and a body.
- Each method has a purpose, and the method must match the action.
- Status codes must be documented for every endpoint.
- Headers and tokens need clear examples, and tokens must always be placeholders.
- A Docs-as-Code workflow lets you review, preview, and publish HTTP content safely.

The aim is simple:

**Show developers exactly what to send, and exactly what they will receive.**

---

## Practice exercise

Use the Release Management API in this repository.

1. Open `portfolio/api/release-management/openapi.yaml`. Find the `DELETE /releases/{releaseId}` operation.
2. Write a Markdown section for this endpoint with these parts: heading, endpoint line, purpose, authentication, request, successful response, and other responses.
3. Compare your section with the DELETE example in `portfolio/api/Real-World API Example` or the generated API reference.
4. Check that every status code in the contract appears in your section.
5. Run `npm run start` and check how your section renders.
6. Commit your change to a new branch, and open a pull request.

---

## Key terms

| Term | Definition |
|---|---|
| HTTP | A set of rules that clients and servers use to exchange data over the web. |
| Client | The app or tool that sends an API request. |
| Server | The system that processes an API request and sends a response. |
| Method | The action that a request performs, such as `GET` or `POST`. |
| Header | Extra information sent with a request or response. |
| Status code | A three-digit number that shows the result of a request. |
| Request body | The data sent to the server, usually in JSON. |
| Response body | The data returned by the server. |
| Access token | A secret value that proves the client can use the API. |
| Idempotent | A request that gives the same result when repeated. For example, `PUT` and `DELETE` are idempotent. |

---

## Knowledge check

<details>
<summary><strong>1. What is the difference between a client and a server?</strong></summary>

The client sends the request. The server receives the request, processes it, and sends the response.

</details>

<details>
<summary><strong>2. What are the five parts of an HTTP request?</strong></summary>

A request can contain a method, a URL, headers, parameters, and a body. The body is used mainly for `POST` and `PUT`.

</details>

<details>
<summary><strong>3. Why must you document every status code?</strong></summary>

Developers need to know how to handle each result. A page that shows only the success code leaves them unprepared for errors.

</details>

<details>
<summary><strong>4. Which method should you use to retrieve a release without changing it?</strong></summary>

Use `GET`. The `GET` method retrieves data and does not change it.

</details>

<details>
<summary><strong>5. What does the status code `201 Created` mean?</strong></summary>

The server created a new resource. The Release Management API returns `201 Created` after a successful `POST /releases` request.

</details>

<details>
<summary><strong>6. Why should you use a placeholder for an access token?</strong></summary>

A real token gives access to the API. Documentation is often public. A placeholder protects the secret and still shows the developer where to add their own token.

</details>

<details>
<summary><strong>7. What does a 204 No Content response mean?</strong></summary>

The request succeeded, and the server does not return a body. The Release Management API returns `204 No Content` after a successful `DELETE` request.

</details>

<details>
<summary><strong>8. Why should a request body include a Content-Type header?</strong></summary>

The `Content-Type` header tells the server the format of the body. For JSON, use `Content-Type: application/json`.

</details>

<details>
<summary><strong>9. What should you check before you push an HTTP page?</strong></summary>

Check that:

- The method and URL match the API contract.
- Required headers are shown.
- Every status code is documented.
- Examples do not contain real tokens.
- The local preview renders correctly.
- The build completes without errors.

</details>

<details>
<summary><strong>10. What is the main goal of documenting HTTP?</strong></summary>

The goal is to show developers exactly what to send and what they will receive. Clear HTTP documentation reduces failed calls and support requests.

</details>

---

## Next lesson

Continue to **REST**. You will learn how REST uses HTTP methods and resources to design an API.
