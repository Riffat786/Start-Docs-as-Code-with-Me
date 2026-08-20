---
title: Request Bodies
sidebar_position: 4
---

A request body contains data sent to an API when creating or modifying a resource.

Request bodies are commonly used with `POST`, `PUT`, and `PATCH` requests.

## Example

A request to create a release might include:

```http
POST /releases
Content-Type: application/json
Authorization: Bearer <access-token>
```

The request body contains the release data:

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

---

## Content type

The ```Content-Type``` header identifies the format of the request body.

For JSON requests:

```http
Content-Type: application/json
```

The documentation should specify the expected content type for each endpoint that accepts a request body.

---

## Document request body fields

Document each field with enough information for the developer to construct a valid request.

| Field         | Required | Type   | Description            |
| ------------- | -------: | ------ | ---------------------- |
| `version`     |      Yes | String | Release version        |
| `status`      |      Yes | String | Current release status |
| `releaseDate` |       No | String | Planned release date   |

---

## Required and optional fields

Clearly distinguish between required and optional fields.

Example:

```json
{
  "version": "2025.9",
  "status": "draft"
}
```

If releaseDate is optional, explain what happens when it is omitted.

:::tip

Do not leave developers to infer whether a field is required from the example alone.

:::

---

## Nested objects

Some APIs use nested JSON objects.

Example:

```json
{
  "version": "2025.9",
  "owner": {
    "name": "Documentation Team",
    "email": "team@example.com"
  }
}
```

For nested structures, explain:

- Object names
- Child fields
- Data types
- Required fields
- Relationships between fields
- Arrays

Request bodies may also contain arrays.

Example:

```json
{
  "version": "2025.9",
  "components": [
    "api",
    "documentation",
    "authentication"
  ]
}
```

:::tip

Explain what each array represents and whether the array can be empty.

:::

---

## Request body examples

Use realistic examples that represent supported API behavior.

A good example should:

- Be valid JSON
- Use realistic values
- Include required fields
- Demonstrate important optional fields when useful
- Match the documented schema
- Avoid real credentials or sensitive information

---

## Request body documentation checklist

For endpoints that accept request bodies, document:

- Content type
- Request schema
- Required fields
- Optional fields
- Data types
- Valid values
- Formats
- Defaults
- Constraints
- Example request
- Validation errors

The request body documentation should allow a developer to construct a valid request without needing to inspect the API implementation.
