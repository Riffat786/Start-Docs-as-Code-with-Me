---
title: Parameters
sidebar_position: 3
---

Parameters provide additional information that an API needs to process a request.

Depending on the API, parameters can be provided in the URL, query string, headers, or request body.

## Path parameters

Path parameters identify a specific resource.

Example:

```http
GET /releases/{releaseId}
```

A request for a specific release might be:

```http
GET /releases/2025.8
```

Document path parameters with their name, location, type, requirement, and purpose.

| Parameter   | Location | Required | Type   | Description               |
| ----------- | -------- | -------: | ------ | ------------------------- |
| `releaseId` | Path     |      Yes | String | Unique release identifier |

---

## Query parameters

Query parameters modify or filter a request.

Example:

```http
GET /releases?status=published
```

Here, status is a query parameter.

| Parameter | Location | Required | Type   | Description                |
| --------- | -------- | -------: | ------ | -------------------------- |
| `status`  | Query    |       No | String | Filters releases by status |

A request can contain multiple query parameters:

```http
GET /releases?status=published&limit=10
```

---

## Header parameters

Headers provide additional information about a request.

For example:

```http
Authorization: Bearer <access-token>
Accept: application/json
```

Authentication headers should be documented clearly, including the required format.

---

## Request body fields

Data sent in a request body is different from URL parameters, but individual fields in the body also need to be documented.

Example:

```json
{
  "version": "2025.9",
  "status": "draft"
}
```

| Field     | Required | Type   | Description            |
| --------- | -------: | ------ | ---------------------- |
| `version` |      Yes | String | Release version        |
| `status`  |      Yes | String | Current release status |

---

## Required and optional parameters

Clearly identify whether each parameter is required.

For example:

| Parameter   | Required | Description                  |
| ----------- | -------: | ---------------------------- |
| `releaseId` |      Yes | Identifies the release       |
| `status`    |       No | Filters releases by status   |
| `limit`     |       No | Limits the number of results |

:::important

Do not assume that a parameter is optional simply because the API accepts a default value. Document the behavior defined by the API contract.

:::

---

## Valid values

If a parameter accepts a defined set of values, document those values.

For example:

```text
status = draft | published | archived
```
A table can make these values easier to understand:

| Value       | Description                 |
| ----------- | --------------------------- |
| `draft`     | Release is being prepared   |
| `published` | Release is available        |
| `archived`  | Release is no longer active |

---

## Parameter documentation checklist

For each parameter, provide:

- Name
- Location
- Data type
- Required or optional status
- Description
- Valid values, when applicable
- Default value, when applicable
- Format requirements
- Example value

Clear parameter documentation helps developers construct valid API requests without needing to inspect the implementation.
