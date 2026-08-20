---
id: api-reference
title: API Reference
sidebar_label: API Reference
sidebar_position: 3
description: Generated API reference and endpoint examples for the Release Management API.
---

The API reference is generated directly from the project's OpenAPI specification using **Redocly CLI**.

The workflow is:

```text
OpenAPI specification
        ↓
Redocly validation
        ↓
Redocly API documentation
        ↓
Rendered endpoint reference
```

The generated reference provides the developer-facing view of the API, including operations, authentication, parameters, responses, schemas, and examples.

---

## Generated API Documentation

The complete API reference was generated from:

```text
portfolio/api/release-management/openapi.yaml
```

using:

```bash
npx redocly build-docs portfolio/api/release-management/openapi.yaml \
  -o portfolio/api/release-management/api-reference.html
```

### Generated reference

Redocly-generated API reference from the project's OpenAPI specification.

![Generated Release Management API reference](/img/portfolio/api/release-management-api-reference.png)

---

## Endpoint Example: List Releases

```text
GET /releases
```

**Purpose**: Returns a paginated list of software releases.

![GET releases endpoint](/img/portfolio/api/release-management-api-list-releases.png)

The generated documentation exposes the endpoint together with its authentication requirements, query parameters, responses, and response example.

Generated documentation for ```GET /releases```.

### Authentication

The endpoint requires Bearer authentication.

```http
Authorization: Bearer <access-token>
```

### Query Parameters

| Parameter  | Type    | Required | Description                            |
| ---------- | ------- | -------- | -------------------------------------- |
| `status`   | string  | No       | Filter releases by lifecycle status.   |
| `page`     | integer | No       | Page number to return.                 |
| `pageSize` | integer | No       | Number of releases to return per page. |

The generated reference also displays the allowed values for status, together with the defaults and examples defined in the OpenAPI specification.

### Request

```http
GET /v1/releases?status=released&page=1&pageSize=20
Authorization: Bearer <access-token>
```

### Response

A successful request returns:

```text
200 OK
```

The response contains the releases for the requested page and pagination information.

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

### Response structure

The data array contains Release resources.

The pagination object provides:

```page``` — Current page.
```pageSize``` — Number of results returned.
```totalItems``` — Total number of matching releases.
```totalPages``` — Total number of available pages.

### Other response

```text
401 Unauthorized
```

Returned when the request does not contain valid authentication.

---

## Endpoint Example: Get a Release

```text
GET /releases/{releaseId}
```

**Purpose**: Returns a specific software release by its unique identifier.

![GET release endpoint](/img/portfolio/api/release-management-api-get-release.png)

Generated documentation for `GET /releases/{releaseId}`.

### Authentication

Bearer authentication is required.

### Path parameter

| Parameter   | Type   | Required | Description                       |
| ----------- | ------ | -------- | --------------------------------- |
| `releaseId` | string | Yes      | Unique identifier of the release. |

Example:

```text
releaseId = rel_2026_08
```

### Request

```http
GET /v1/releases/rel_2026_08
Authorization: Bearer <access-token>
```

### Successful Response

```text
200 OK
```

Example response:

```JSON
{
  "id": "rel_2026_08",
  "version": "2026.08",
  "name": "Customer Portal Release",
  "status": "ready_for_approval",
  "targetDate": "2026-08-28",
  "description": "Improvements to customer portal navigation and reporting.",
  "createdAt": "2026-08-10T09:30:00Z",
  "updatedAt": "2026-08-15T14:20:00Z"
}
```

The response represents a single ```Release``` resource defined in the OpenAPI schema.

### Other responses

```TEXT
401 Unauthorized
```

Authentication is required.

```TEXT
404 Not Found
```

The requested release does not exist.

---

## What the Generated Reference Demonstrates

These examples show how information defined once in the OpenAPI contract becomes developer-facing documentation.

For example:

```TEXT
OpenAPI
  │
  ├── operation
  ├── parameters
  ├── security
  ├── responses
  ├── schemas
  └── examples
        ↓
     Redocly
        ↓
API Reference
```

This avoids maintaining separate, manually copied descriptions of the same API information.

> The screenshots above are taken from the actual generated reference for this project.

---

## API Documentation Workflow

The API documentation workflow used for this project is:

```TEXT
Design API
    ↓
Define OpenAPI contract
    ↓
Validate with Redocly
    ↓
Generate API reference
    ↓
Review rendered documentation
    ↓
Document developer workflows
    ↓
Publish
```

The API reference is therefore generated from the same source that defines the API contract.

---

## Current Coverage

The generated API reference currently includes:

- Releases
- Changes
- Work Items
- Approvals
- Release Notes

The endpoint examples above demonstrate two different API patterns:

```TEXT
GET /releases
        ↓
Collection resource
        ↓
Query parameters
        ↓
Paginated response
```

and:

```TEXT
GET /releases/{releaseId}
        ↓
Individual resource
        ↓
Path parameter
        ↓
Single-resource response
```

Additional operations will be documented as the API contract evolves.
