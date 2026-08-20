---
title: Responses
sidebar_position: 5
---

An API response contains the information returned by the server after processing a request.

A complete response may include:

- HTTP status code
- Response headers
- Response body
- Error information when the request fails

---

## Successful response

A successful request to retrieve a release might return:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "2025.8",
  "version": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

---

## Response status codes

Document the status codes that an endpoint can return.

| Status code                 | Meaning                                       | Example              |
| --------------------------- | --------------------------------------------- | -------------------- |
| `200 OK`                    | Request completed successfully                | Resource retrieved   |
| `201 Created`               | Resource was created                          | New release created  |
| `204 No Content`            | Request succeeded without a response body     | Release deleted      |
| `400 Bad Request`           | Request contains invalid data                 | Invalid field value  |
| `401 Unauthorized`          | Authentication is missing or invalid          | Invalid access token |
| `403 Forbidden`             | Client does not have permission               | Insufficient scope   |
| `404 Not Found`             | Resource does not exist                       | Unknown release ID   |
| `409 Conflict`              | Request conflicts with current resource state | Duplicate release    |
| `422 Unprocessable Content` | Request fails validation                      | Invalid request data |
| `429 Too Many Requests`     | Rate limit exceeded                           | Too many requests    |
| `500 Internal Server Error` | Unexpected server-side error                  | Internal failure     |

Only document status codes that are actually supported by the API.

---

## Response headers

Some response headers provide information that developers need to understand.

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
X-RateLimit-Remaining: 42
```

> Document response headers when they are relevant to using the API.

| Header                  | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `Content-Type`          | Identifies the response format                           |
| `X-RateLimit-Remaining` | Indicates the remaining request allowance when supported |

---

## Response body

Document the structure and meaning of the response body.

Example:

```json
{
  "id": "2025.8",
  "version": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

| Field         | Type   | Description               |
| ------------- | ------ | ------------------------- |
| `id`          | String | Unique release identifier |
| `version`     | String | Release version           |
| `status`      | String | Current release status    |
| `releaseDate` | String | Release date              |

---

## Collections

An endpoint that returns multiple releases may return a collection.

Example:

```json
{
  "releases": [
    {
      "id": "2025.8",
      "version": "2025.8",
      "status": "published"
    },
    {
      "id": "2025.7",
      "version": "2025.7",
      "status": "published"
    }
  ]
}
```

Document:

- Collection name
- Item structure
- Number of items returned
- Pagination information, when applicable
- Filtering and sorting information, when applicable

---

## Empty collections

A valid request may return no matching resources.

Example:

```json
{
  "releases": []
}
```

Document this behavior so developers know that an empty collection is not necessarily an error.

---

## Empty responses

Some operations succeed without returning a response body.

For example:

```http
HTTP/1.1 204 No Content
```

The documentation should explicitly state when no response body is returned.

---

## Error responses

Error responses are part of the API contract and should be documented alongside successful responses.

Example:

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

Document the meaning of the error and provide appropriate resolution guidance.

---

## Response schema consistency

The response example must match the documented schema.

Verify:

- Field names
- Data types
- Required fields
- Optional fields
- Nested objects
- Arrays
- Date formats
- Enumerated values

Avoid using fields in examples that are not defined by the API.

---

## Response examples

Use realistic examples that represent actual API behavior.

A strong response example should:

- Use valid JSON
- Match the API schema
- Use meaningful values
- Represent the documented status code
- Include important fields
- Avoid production or sensitive information

---

## Response documentation checklist

Before publishing an endpoint, verify that its response documentation includes:

- Success status codes
- Error status codes
- Response headers where relevant
- Response schema
- Field descriptions
- Data types
- Required and optional fields
- Collections
- Pagination information
- Empty responses
- Example responses

> Accurate response documentation allows developers to understand what the API returns and how their application should process the result.
