---
title: Examples
sidebar_position: 6
---

API examples show developers how to use an endpoint in a practical scenario.

A good example should be **realistic, valid, and directly related to the task** the developer is trying to complete.

---

## Basic request example

For example, to retrieve a specific release:

```http
GET /releases/2025.8
Authorization: Bearer <access-token>
Accept: application/json
```

A successful response might look like:

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

---

## Show complete requests

When possible, show the information required to make the request successfully.

For example:

```bash
curl --request GET \
  --url https://api.example.com/releases/2025.8 \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <access-token>'
```

Avoid unnecessary headers or configuration that could distract from the example.

---

## Use realistic values

Compare:

```json
{
  "version": "string",
  "status": "string"
}
```

with:

```json
{
  "version": "2025.9",
  "status": "draft"
}
```

The second example gives the reader a clearer understanding of how the API is actually used.

---

## Show common use cases

Examples should focus on realistic developer tasks.

For a release management API, examples might include:

- Retrieve all releases
- Retrieve a specific release
- Filter releases by status
- Create a release
- Update a release
- Delete a release
- Handle an unavailable release

---

## Example: filtering results

A developer may need to retrieve only published releases:

```http
GET /releases?status=published
```

Example response:

```json
{
  "releases": [
    {
      "id": "2025.8",
      "status": "published"
    },
    {
      "id": "2025.7",
      "status": "published"
    }
  ]
}
```

The example demonstrates both the query parameter and the resulting response.

---

## Example: creating a resource

A ```POST``` request may include a JSON request body:

```http
POST /releases
Content-Type: application/json
Authorization: Bearer <access-token>
```

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

Example response:

```http
HTTP/1.1 201 Created
Content-Type: application/json
```

```json
{
  "id": "2025.9",
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

---

## Include error examples

Developers also need to understand what happens when a request fails.

For example:

```http
GET /releases/2024.1
```

```http
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "code": "RELEASE_NOT_FOUND",
  "message": "The requested release was not found."
}
```

Explain what caused the error and, when appropriate, how the developer can resolve it.

---

### Keep examples maintainable

Examples are part of the documentation and must be updated when the API changes.

Validate examples against the current API behavior whenever possible.

Avoid:

- Fake fields that the API does not support
- Deprecated parameters
- Invalid JSON
- Placeholder values that obscure the meaning
- Real credentials or sensitive data

The examples in this portfolio use a consistent Release Management API scenario so that concepts remain connected across the documentation.
