---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
description: Get started with the Release Management API.
---

The **Release Management API** provides a REST interface for managing software releases, engineering changes, work items, approvals, and release notes.

This guide provides the information needed to understand the API and make your first request.

---

## Prerequisites

Before working with the API, you should have:

- Basic knowledge of HTTP and REST APIs
- An API client such as Postman, cURL, or Swagger UI
- A valid access token for the target environment
- Access to the API's OpenAPI specification

---

## Base URL

The API uses the following fictional base URL:

```text
https://api.release-management.test/v1
```

The ```/v1``` path identifies the first version of the API.

:::info

The Release Management API is a fictional API created specifically for this documentation portfolio. It does not represent a live production service.

:::

All endpoint examples in this documentation use this base URL unless otherwise specified.

---

## Authentication

All API requests require Bearer token authentication unless an operation explicitly states otherwise.

Include the access token in the Authorization header:

```http
Authorization: Bearer <access-token>
```

For example:

```http
GET /v1/releases
Authorization: Bearer <access-token>
Accept: application/json
```

See Authentication for more information about authentication requirements and security considerations.

---

## Make Your First Request

The following example retrieves a list of releases:

```http
GET https://api.release-management.test/v1/releases
Authorization: Bearer <access-token>
Accept: application/json
```

A successful response returns HTTP 200 OK.

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

Example:

```json
{
  "data": [
    {
      "id": "rel_2026_08",
      "version": "2026.08",
      "name": "Customer Portal Release",
      "status": "released",
      "targetDate": "2026-08-28",
      "description": "Improvements to customer portal navigation and reporting.",
      "createdAt": "2026-08-10T09:30:00Z",
      "updatedAt": "2026-08-15T14:20:00Z"
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

---

## Understand the Response

The response contains two main sections:

| Property     | Description                                          |
| ------------ | ---------------------------------------------------- |
| `data`       | Collection containing the returned releases          |
| `pagination` | Information about the result set and available pages |

Each release contains information such as:

| Field         | Description                                |
| ------------- | ------------------------------------------ |
| `id`          | Unique release identifier                  |
| `version`     | Release version                            |
| `name`        | Release name                               |
| `status`      | Current release status                     |
| `targetDate`  | Planned release date                       |
| `description` | Description of the release                 |
| `createdAt`   | Date and time the release was created      |
| `updatedAt`   | Date and time the release was last updated |

---

## Common API Operations

The API uses standard HTTP methods.

| Method   | Purpose                       | Example                        |
| -------- | ----------------------------- | ------------------------------ |
| `GET`    | Retrieve resources            | `GET /releases`                |
| `POST`   | Create or associate resources | `POST /releases`               |
| `PUT`    | Update a resource             | `PUT /releases/{releaseId}`    |
| `DELETE` | Delete a resource             | `DELETE /releases/{releaseId}` |

The API reference provides the complete request and response details for each operation.

---

## Main Resources

The API is organized into the following resource areas:

### Releases

Manage the software release lifecycle.

```text
/release
```

Examples:

```text
GET    /releases
POST   /releases
GET    /releases/{releaseId}
PUT    /releases/{releaseId}
DELETE /releases/{releaseId}
```

### Changes

Retrieve and associate engineering or customer-facing changes.

```text
/changes
```

### Work Items

Retrieve engineering work associated with releases.

```text
/work-items
```

### Approvals

Manage release approval workflows.

```text
/approvals
```

### Release Notes

Generate, retrieve, and publish release notes.

```text
/release-notes
```

---

## Example Workflow

A typical release workflow could look like:

```text
Create Release
      ↓
Associate Changes
      ↓
Associate Work Items
      ↓
Request Approval
      ↓
Approve Release
      ↓
Generate Release Notes
      ↓
Publish Release Notes
```

The API is designed around this workflow so that related resources can be managed independently while remaining connected to the release lifecycle.

---

## Using an API Client

The API can be explored using tools such as:

- cURL
- Postman
- Swagger UI
- Other HTTP/API clients

For example, the following cURL command retrieves releases:

```bash
curl --request GET \
  --url https://api.release-management.test/v1/releases \
  --header 'Authorization: Bearer <access-token>' \
  --header 'Accept: application/json'
```

The same request can be configured in an API client by providing:

| Request setting | Value                                             |
| --------------- | ------------------------------------------------- |
| Method          | `GET`                                             |
| URL             | `https://api.release-management.test/v1/releases` |
| Authorization   | Bearer token                                      |
| Accept          | `application/json`                                |

---

## API Specification

The complete API contract is defined using OpenAPI 3.0.3.

The OpenAPI specification contains the machine-readable definition of the API, including:

- endpoints
- parameters
- request bodies
- response schemas
- authentication
- status codes
- examples

The specification is maintained in:

```text
portfolio/api/release-management/openapi.yaml
```

The specification is also validated using Redocly:

```bash
npm run validate:api
```

---

## Documentation Workflow

The API documentation is maintained using a Docs-as-Code workflow.

The workflow is:

```text
OpenAPI specification
        ↓
Markdown documentation
        ↓
Git version control
        ↓
Review
        ↓
Automated validation
        ↓
Docusaurus build
        ↓
Published documentation
```

This approach keeps the API contract and developer-facing documentation versioned, reviewable, and maintainable.
