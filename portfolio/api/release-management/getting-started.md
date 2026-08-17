---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Get started with the Release Management API.
---

The **Release Management API** provides a REST interface for managing software releases, changes, work items, approvals, and release notes.

This guide introduces the basic information needed to understand and work with the API.

---

## Base URL

The API uses the following fictional base URL:

```text
https://api.release-management.test/v1
```

The ```/v1``` path identifies the first version of the API.

:::info

This is a fictional API created for documentation portfolio purposes. It does not represent a live production service.

:::

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
```

See Authentication for more information.

---

## Make Your First Request

The following example retrieves a list of releases:

```http
GET https://api.release-management.test/v1/releases
Authorization: Bearer <access-token>
```

A successful response returns HTTP 200 OK.

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

## Common API Operations

The API uses standard HTTP methods.

| Method   | Purpose                       | Example                        |
| -------- | ----------------------------- | ------------------------------ |
| `GET`    | Retrieve resources            | `GET /releases`                |
| `POST`   | Create or associate resources | `POST /releases`               |
| `PUT`    | Update a resource             | `PUT /releases/{releaseId}`    |
| `DELETE` | Delete a resource             | `DELETE /releases/{releaseId}` |

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

