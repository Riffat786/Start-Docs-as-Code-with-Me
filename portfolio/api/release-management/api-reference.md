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

The generated reference provides the developer-facing view of the API, including:

- Operations
- Authentication requirements
- Parameters
- Request bodies
- Responses
- Schemas
- Status codes
- Examples

The purpose of this approach is to maintain the API contract as a structured source and generate consistent reference documentation from it.

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

The following screenshot shows the Redocly-generated API reference from the project's OpenAPI specification.

![Generated Release Management API reference](/img/portfolio/api/release-management-api-reference.png)

The generated reference provides navigation across the API resources and exposes the endpoint definitions, parameters, authentication requirements, responses, schemas, and examples defined in the OpenAPI contract.

---

## Endpoint Example: `GET /releases`

```text
GET /releases
```

**Purpose**: Returns a paginated list of software releases.

![GET releases endpoint](/img/portfolio/api/release-management-api-list-releases.png)

The generated documentation exposes the endpoint together with its authentication requirements, query parameters, responses, and response example.

Generated documentation for `GET /releases`.

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

The `data array` contains Release resources.

The `pagination` object provides:

| Property     | Description                          |
| ------------ | ------------------------------------ |
| `page`       | Current page number.                 |
| `pageSize`   | Number of results returned per page. |
| `totalItems` | Total number of matching releases.   |
| `totalPages` | Total number of available pages.     |

### Other response

```text
401 Unauthorized
```

Returned when the request does not contain valid authentication.

---

## Endpoint Example: `GET /releases/{releaseId}`

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

This approach reduces duplication because API reference information does not need to be manually copied into a separate reference format.

The OpenAPI specification provides the structured API contract, while the generated reference presents that contract in a format that developers can navigate and use.

> The screenshots above are taken from the actual generated reference for this portfolio project.

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

The workflow separates two related documentation responsibilities:

---

## API contract

The OpenAPI specification defines the technical API contract, including:

- Endpoints
- Methods
- Parameters
- Schemas
- Security
- Responses

---

## Developer documentation

The surrounding documentation explains how developers understand and use the API, including:

- Getting started
- Authentication
- Common workflows
- Examples
- Error handling
- API concepts

This separation helps avoid duplicating the same technical information across multiple manually maintained reference pages.

---

## Documentation Source of Truth

For the generated API reference, the OpenAPI specification is the primary technical source.

```text
portfolio/api/release-management/openapi.yaml
```

Changes to the API contract should therefore be reflected in the OpenAPI specification before the generated reference is rebuilt.

A documentation review should verify that:

- The OpenAPI specification is current.
- Endpoint definitions match the implemented API.
- Parameters are accurate.
- Request schemas are accurate.
- Response schemas are accurate.
- Authentication requirements are current.
- Examples are valid.
- Deprecated operations are identified.
- Generated documentation renders correctly.

---

## Current Coverage

The generated API reference currently includes:

- Releases
- Changes
- Work Items
- Approvals
- Release Notes

The endpoint examples above demonstrate two different API patterns:

### Collection Resource

```TEXT
GET /releases
        ↓
Collection resource
        ↓
Query parameters
        ↓
Paginated response
```

### Individual Resource

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

These patterns are common in REST API documentation and provide a useful basis for demonstrating how endpoint reference information can be structured and presented.

---

## Documentation Quality Checks

Before publishing a generated API reference, verify:

| Check              | Expected result                                       |
| ------------------ | ----------------------------------------------------- |
| OpenAPI validation | Specification passes validation                       |
| Endpoint coverage  | Documented operations match the API contract          |
| Authentication     | Security requirements are displayed correctly         |
| Parameters         | Names, types, and requirements are accurate           |
| Request examples   | Examples match the defined schemas                    |
| Response examples  | Examples match the response schemas                   |
| Status codes       | Documented responses reflect the API contract         |
| Links              | Internal and external links work                      |
| Screenshots        | Screenshots represent the current generated reference |
| Rendering          | Generated documentation displays correctly            |
| Version            | Reference corresponds to the intended API version     |

---

## Maintaining the Generated Reference

The generated API reference should not be treated as a static artifact.

When the API changes:

```TEXT
API change
    ↓
Update OpenAPI contract
    ↓
Validate specification
    ↓
Regenerate reference
    ↓
Review rendered output
    ↓
Update supporting documentation
    ↓
Publish
```

This workflow makes API documentation part of the API lifecycle rather than a separate activity performed after development is complete.

---

## Documentation Management Perspective

A generated API reference solves only part of the documentation problem.

Automation is valuable for keeping technical reference information synchronized with the API contract, but developers also need task-oriented and conceptual documentation.

A complete API documentation experience therefore combines:

```text
API Contract
     +
Generated Reference
     +
Getting Started
     +
Authentication
     +
Examples
     +
Error Guidance
     +
Developer Workflows
```

The **Release Management API** demonstrates this combined approach by using an OpenAPI contract for structured reference information while maintaining supporting documentation for developers.
