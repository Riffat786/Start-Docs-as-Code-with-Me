---
title: REST
sidebar_position: 4
description: Learn how REST APIs use resources, URLs, and HTTP methods, and how to document them clearly for developers.
---

# REST

> **Lesson level:** Beginner
>
> **Time to complete:** 25–30 minutes
>
> **Prerequisites:** Complete the HTTP lesson.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what REST means in plain language.
- Identify resources, collections, and sub-resources in a URL.
- Name resources consistently in API paths.
- Map common actions to HTTP methods.
- Explain why REST APIs are stateless.
- Document a REST endpoint with a clear structure.
- Review an API design for consistent naming.
- Use the Release Management API in this repository as a real example.

---

## Why REST matters for technical writers

Most web APIs follow REST principles. When you understand REST, you can predict how an API works before you read every endpoint.

For example, if you know that `/v1/releases` lists releases, you can guess that `/v1/releases/{releaseId}` returns one release. Your documentation should make this pattern easy to see.

> **Documentation Manager's Tip**
>
> Readers learn the pattern from the first endpoint. Document the pattern clearly once. Then keep every later endpoint consistent with it.

---

## Before you start

Make sure you have:

- Completed the HTTP lesson.
- Visual Studio Code or Cursor.
- The course repository cloned to your computer.
- Access to `portfolio/api/release-management/openapi.yaml`.

:::note

**For beginners**

REST is a design style, not a protocol or a product. It describes how to organize URLs and methods. Developers follow these rules when they build an API.

:::

---

## What is REST?

REST (Representational State Transfer) is a style for designing web APIs. A REST API uses three main ideas:

- **Resources:** Objects that the API manages, such as releases or changes.
- **URLs:** Addresses that identify each resource.
- **HTTP methods:** Actions that you apply to a resource.

In a REST API, the URL names the thing. The method names the action.

```text
URL      identifies the resource   →  /v1/releases/rel_2026_08
Method   describes the action      →  GET
Result   the server returns data   →  200 OK with a release
```

---

## Resources, collections, and items

A resource is a noun. A collection holds many resources of the same type. An item is one resource in the collection.

| Term | Example | Meaning |
|---|---|---|
| Collection | `/v1/releases` | All releases |
| Item | `/v1/releases/rel_2026_08` | One release |
| Sub-resource | `/v1/releases/rel_2026_08/changes` | The changes that belong to one release |

The Release Management API in this repository uses these patterns:

- `/releases` is a collection.
- `/releases/{releaseId}` is an item.
- `/releases/{releaseId}/changes` is a sub-resource. It belongs to one release.

The `{releaseId}` part is a path parameter. A developer replaces it with a real value, such as `rel_2026_08`.

:::important

Use nouns in URLs. Do not use verbs. The method already says what action happens.

:::

---

## Name resources consistently

Consistent names help developers guess the correct URL. Follow these rules:

- Use plural nouns for collections, such as `releases` and `changes`.
- Use lowercase letters.
- Use hyphens to join words, such as `work-items`.
- Keep the same name in every part of the documentation.

The Release Management API uses `/work-items` for the Work Items resource. The name uses lowercase letters and a hyphen.

### How-to: Compare action-based and resource-based URLs

**Goal:** Choose the correct URL design.

Action-based URL (avoid):

```http
GET /getRelease?id=rel_2026_08
```

Resource-based URL (use):

```http
GET /v1/releases/rel_2026_08
```

**Result:** The second URL names the resource. The method `GET` names the action. Developers can use the same pattern for other resources, such as `/v1/changes/{changeId}`.

---

## Map actions to HTTP methods

Each action uses one HTTP method. The table shows how the Release Management API uses the methods.

| Action | Method | Path | Success response |
|---|---|---|---|
| List releases | `GET` | `/v1/releases` | `200 OK` |
| Get one release | `GET` | `/v1/releases/{releaseId}` | `200 OK` |
| Create a release | `POST` | `/v1/releases` | `201 Created` |
| Replace a release | `PUT` | `/v1/releases/{releaseId}` | `200 OK` |
| Delete a release | `DELETE` | `/v1/releases/{releaseId}` | `204 No Content` |
| Add a change to a release | `POST` | `/v1/releases/{releaseId}/changes` | Depends on the contract |

The last row shows a sub-resource. The `POST` method adds a new link between a release and a change.

:::warning

Do not use `GET` to create, change, or delete data. A developer who reruns a `GET` request must not change the data a second time.

:::

---

## Stateless requests

REST APIs are stateless. The server does not keep track of the client between requests. Each request must contain all the information the server needs.

For example, every protected request in the Release Management API includes the `Authorization` header:

```http
GET /v1/releases/rel_2026_08
Authorization: Bearer <access-token>
```

If the developer leaves out the header in the second request, the server treats it as a new request. The server returns `401 Unauthorized`.

:::note

Document the authentication requirement on every protected endpoint. Do not assume that developers remember the token from an earlier request.

:::

---

## Representations and JSON

A REST API sends a representation of a resource. In most APIs, the representation is JSON.

The client tells the server the format it expects with the `Accept` header. The server describes the format it sends with the `Content-Type` header.

```json
{
  "id": "rel_2026_08",
  "version": "2026.08",
  "name": "Customer Portal Release",
  "status": "ready_for_approval",
  "targetDate": "2026-08-28"
}
```

The JSON example above is a representation of one release. The contract defines the fields and their types.

---

## Pagination in collections

A collection can contain many items. The API returns a page of items and information about the other pages.

The Release Management API returns a `pagination` object in the collection response:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 42,
    "totalPages": 3
  }
}
```

:::tip

Document the query parameters that control pagination, such as `page` and `pageSize`. Show the default values and the maximum page size.

:::

---

## How-to: Document a REST resource

**Goal:** Write a short resource overview before you document each endpoint.

Markdown source:

````markdown
## Releases

A release represents one planned software release.

| Operation | Method | Path |
|---|---|---|
| List releases | GET | /v1/releases |
| Get one release | GET | /v1/releases/{releaseId} |
| Create a release | POST | /v1/releases |

Each operation requires Bearer authentication. See [Authentication](./Authentication.md).
````

**Result:** The reader sees the resource, its operations, and the URL pattern before reading the endpoint details. The overview table gives a quick reference.

:::note

Link to a page that exists. Check every link before you commit the change. A broken link fails the build.

:::

---

## How-to: Document a sub-resource endpoint

**Goal:** Document `POST /v1/releases/{releaseId}/changes`.

Markdown source:

````markdown
## Add a change to a release

<span className="http-method http-post">POST</span> `/releases/{releaseId}/changes`

**Purpose:** Associates an existing change with a specific release.

### Path parameter

| Parameter | Type | Required | Description |
|---|---|---|---|
| `releaseId` | string | Yes | Unique identifier of the release. |

### Request

```http
POST /v1/releases/rel_2026_08/changes
Authorization: Bearer <access-token>
Content-Type: application/json
```
````

**Result:** The heading, the method badge, the path, the parameter table, and the request appear in a fixed order. The reader can see that the change belongs to the release.

The contract for this operation is in `portfolio/api/release-management/openapi.yaml`, under `/releases/{releaseId}/changes`.

---

## Review a REST design

Use this checklist before you publish a REST reference page.

| Check | Question | Example |
|---|---|---|
| Nouns | Does each path name a resource? | `/v1/releases`, not `/v1/getReleases` |
| Plurals | Are collection names plural? | `/work-items`, not `/work-item` |
| Casing | Are names lowercase? | `/work-items`, not `/WorkItems` |
| Methods | Does each method match the action? | `DELETE` removes a release |
| Parameters | Are path parameters clearly named? | `{releaseId}` |
| Consistency | Does the same pattern repeat? | Every item path uses an ID |

:::tip

Ask a developer to review the naming. Developers can spot a design problem faster than a writer can. Document the decision when the team agrees on a name.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| The URL contains a verb, such as `/getRelease`. | Developers expect a different pattern for each action. | Use a noun in the path and the method for the action. |
| Plural and singular names are mixed. | Developers cannot guess the correct URL. | Use plural names for collections. |
| The page does not explain the relationship between resources. | Developers miss sub-resource endpoints. | Document sub-resources next to the parent resource. |
| The page uses one example, and the example is out of date. | Developers copy an example that does not work. | Check examples against the contract before you publish. |

:::warning

The repository has two versions of the Release Management API examples. The OpenAPI contract uses `targetDate` and `pagination`. The Real-World API Example pages use `releaseDate` and `limit` and `offset`. Always check the contract first. Report any difference to the API team.

:::

---

## Summary

In this lesson, you learned that:

- REST uses resources, URLs, and HTTP methods.
- A collection holds many resources. An item identifies one resource.
- A sub-resource belongs to a parent resource.
- Resource names use plural nouns, lowercase letters, and hyphens.
- Methods describe the action. URLs do not contain verbs.
- Each request is stateless and must include the authentication header.
- Consistent naming makes an API easier to learn and document.

The aim is simple:

**Let developers predict the correct URL and method from the patterns you document.**

---

## Practice exercise

Use the Release Management API contract in this repository.

1. Open `portfolio/api/release-management/openapi.yaml`. List every path in the `paths` section.
2. Group the paths by resource. Identify each collection, item, and sub-resource.
3. Check that every path uses plural nouns, lowercase letters, and hyphens.
4. Choose one sub-resource endpoint. Write a Markdown section for it with a heading, a method badge, a path parameter table, and a request example.
5. Compare your section with the contract. Check that the method, path, and parameters match.
6. Run `npm run start`, and check how your section renders.

---

## Key terms

| Term | Definition |
|---|---|
| REST | A design style for web APIs that uses resources, URLs, and HTTP methods. |
| Resource | An object that an API manages, such as a release or a change. |
| Collection | A group of resources of the same type, such as all releases. |
| Item | One resource in a collection, identified by a path parameter. |
| Sub-resource | A resource that belongs to another resource, such as the changes in one release. |
| Path parameter | A value in the URL that identifies a resource, such as `{releaseId}`. |
| Stateless | A design where each request contains all the information the server needs. |
| Representation | The data that the server returns for a resource, usually in JSON. |
| Pagination | A method for returning a large collection in pages. |

---

## Knowledge check

<details>
<summary><strong>1. What is REST?</strong></summary>

REST is a design style for web APIs. It uses resources, URLs that identify the resources, and HTTP methods that describe the actions.

</details>

<details>
<summary><strong>2. What is the difference between a collection and an item?</strong></summary>

A collection is a group of resources, such as `/v1/releases`. An item is one resource in the collection, such as `/v1/releases/rel_2026_08`.

</details>

<details>
<summary><strong>3. Why should URLs not contain verbs?</strong></summary>

The HTTP method already describes the action. A verb in the URL repeats that information and makes the API harder to learn.

</details>

<details>
<summary><strong>4. Which URL follows REST naming rules best?</strong></summary>

`/v1/work-items` follows the rules. It uses a plural noun, lowercase letters, and a hyphen.

</details>

<details>
<summary><strong>5. What is a sub-resource?</strong></summary>

A sub-resource belongs to another resource. For example, `/v1/releases/{releaseId}/changes` returns the changes that belong to one release.

</details>

<details>
<summary><strong>6. Why is a REST API described as stateless?</strong></summary>

The server does not keep track of the client between requests. Each request must include all the information the server needs, such as the authentication header.

</details>

<details>
<summary><strong>7. Which method should you use to remove a release?</strong></summary>

Use `DELETE /v1/releases/{releaseId}`. A successful request returns `204 No Content`.

</details>

<details>
<summary><strong>8. What does the pagination object help developers do?</strong></summary>

It shows the current page, the page size, the total number of items, and the total number of pages. Developers use this information to request the next page.

</details>

<details>
<summary><strong>9. What should you do when two files in the repository show different field names for the same API?</strong></summary>

Use the OpenAPI contract as the source of truth. Report the difference to the API team. Do not copy the field names from the outdated example.

</details>

<details>
<summary><strong>10. What is the main goal of a REST naming review?</strong></summary>

The goal is to make the URL pattern predictable. Developers should be able to guess the correct URL and method from the patterns you document.

</details>

---

## Next lesson

Continue to **JSON**. You will learn how JSON structures the request and response data that REST APIs use.
