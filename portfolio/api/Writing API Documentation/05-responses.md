---
title: Responses
sidebar_position: 5
---

An API response contains the information returned by the server after processing a request.

A response typically includes:

- HTTP status code
- Response headers
- Response body

---

## Successful response

For example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

The status code indicates that the request was successful, while the response body contains the requested resource.

---

## Document the response status

API documentation should identify the status codes that an endpoint can return.

For example:

| Status code                 | Meaning                                           |
| --------------------------- | ------------------------------------------------- |
| `200 OK`                    | Request completed successfully                    |
| `201 Created`               | Resource was successfully created                 |
| `204 No Content`            | Request succeeded without a response body         |
| `400 Bad Request`           | Request contains invalid data                     |
| `401 Unauthorized`          | Authentication is missing or invalid              |
| `403 Forbidden`             | Client does not have permission                   |
| `404 Not Found`             | Requested resource does not exist                 |
| `409 Conflict`              | Request conflicts with the current resource state |
| `429 Too Many Requests`     | Rate limit has been exceeded                      |
| `500 Internal Server Error` | Server encountered an unexpected error            |

:::note

Only document status codes that the API can actually return for the endpoint.

:::

---

## Response body

Describe the structure of the response body and its fields.

Example:

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

| Field         | Type   | Description               |
| ------------- | ------ | ------------------------- |
| `id`          | String | Unique release identifier |
| `status`      | String | Current release status    |
| `releaseDate` | String | Release date              |

---

## Collections

Endpoints that return multiple resources commonly return an array or collection.

Example:

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

Document how the collection is structured and identify any pagination or metadata fields.

---

## Empty responses

Some successful requests return no response body.

For example:

```http
HTTP/1.1 204 No Content
```

Document this behavior explicitly so developers do not expect JSON when none is returned.

---

## Error responses

:::info

Successful responses are only part of the API contract.

:::

Document the error responses that developers may encounter.

For example:

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

:::note

Explain the meaning of the error and, where appropriate, how the developer can resolve it.

:::

---

## Response examples

Use examples that reflect actual API behavior.

A good response example should:

- Use valid JSON
- Match the documented schema
- Use realistic values
- Include important fields
- Represent the actual status code
- Avoid sensitive or production data
- Response documentation checklist

For each endpoint, document:

- Success status codes
- Response headers when relevant
- Response body
- Field names
- Data types
- Required or optional fields
- Nested structures
- Collections and pagination
- Empty responses
- Error responses
- Example responses

:::tip

Accurate response documentation allows developers to understand not only whether a request succeeded, but also how to process the information returned by the API.

:::
