---
title: Endpoints
sidebar_position: 2
---

An API endpoint is a specific URL through which a client can access a resource or perform an operation.

An endpoint is usually defined by a combination of:

- HTTP method
- URL path
- Parameters
- Authentication requirements

## Example

A Release Management API might provide the following endpoint:

```http
GET /releases
```

This endpoint retrieves a collection of releases.

A specific release can be retrieved using:

```http
GET /releases/{releaseId}
```

Here, ```{releaseId}``` identifies the release to retrieve.

---

## Endpoint components

Consider:

```http
GET /releases/2025.8
```

| Component           | Value       | Purpose                         |
| ------------------- | ----------- | ------------------------------- |
| HTTP method         | `GET`       | Specifies the operation         |
| Resource            | `/releases` | Identifies the release resource |
| Resource identifier | `2025.8`    | Identifies a specific release   |

---

## Collection and resource endpoints

APIs commonly distinguish between collection and individual resource endpoints.

### Collection

```http
GET /releases
```

Returns multiple releases.

### Individual resource

```http
GET /releases/2025.8
```

Returns a specific release.

The same pattern can apply to other operations:

```http
POST /releases
PUT /releases/2025.8
PATCH /releases/2025.8
DELETE /releases/2025.8
```

## Path parameters

Path parameters identify a specific resource.

Example:

```http
GET /releases/{releaseId}
```

A real request might be:

```http
GET /releases/2025.8
```

The documentation should explain:

- Parameter name
- Data type
- Whether it is required
- Expected format
- Valid values
- Example value

---

## Documenting an endpoint

Each endpoint should provide enough information for a developer to make a successful request.

At minimum, document:

- HTTP method
- Endpoint path
- Description
- Authentication
- Parameters
- Request body, when applicable
- Successful responses
- Error responses
- Examples

---

## Endpoint naming

Use the API's actual endpoint names consistently.

Do not change endpoint paths simply to make them sound more natural in documentation.

For example, if the API defines:

```http
GET /releases/{releaseId}
```

document that exact path.

The endpoint reference should reflect the API contract accurately.

---

## Related endpoints

Where endpoints are closely related, link them together.

For example:

```http
GET /releases
GET /releases/{releaseId}
POST /releases
PUT /releases/{releaseId}
DELETE /releases/{releaseId}
```

This helps developers understand the available operations for the same resource.

The **Release Management API** provides the concrete endpoint reference used throughout this portfolio.
