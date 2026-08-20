---
title: Error Handling
sidebar_position: 7
---

API errors occur when a request cannot be completed successfully.

Good API documentation helps developers understand:

- What went wrong
- Why it happened
- Which status code was returned
- What information is included in the error response
- How the problem can be resolved

---

## HTTP status codes

HTTP status codes provide the first indication of the result of a request.

Common API error codes include:

| Status code | Meaning | Typical cause |
|---|---|---|
| `400 Bad Request` | Request is invalid | Invalid or missing data |
| `401 Unauthorized` | Authentication failed | Missing or invalid credentials |
| `403 Forbidden` | Access is denied | Insufficient permissions |
| `404 Not Found` | Resource does not exist | Invalid resource identifier |
| `409 Conflict` | Request conflicts with resource state | Duplicate or conflicting operation |
| `422 Unprocessable Content` | Request is understood but cannot be processed | Validation failure |
| `429 Too Many Requests` | Rate limit exceeded | Too many requests |
| `500 Internal Server Error` | Server encountered an unexpected error | Unexpected server-side failure |
| `503 Service Unavailable` | Service is temporarily unavailable | Service outage or maintenance |

Only document status codes that are supported by the API.

---

## Error response structure

An API may return structured information describing the error.

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

Document the fields returned in the error response.

| Field     | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `code`    | String | Machine-readable error identifier |
| `message` | String | Human-readable explanation        |

---

## Explain how to resolve errors

Do not only document the error code.

Explain what the developer can do next.

For example:

```401 Unauthorized```

**Cause:** The request does not contain valid authentication credentials.

**Resolution:** Obtain a valid access token and include it in the Authorization header.

```http
Authorization: Bearer <access-token>
```

```404 Not Found```

**Cause:** The requested release does not exist.

**Resolution:** Verify the releaseId and confirm that the resource exists.

---

## Validation errors

Some APIs return detailed information when request data is invalid.

Example:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "The request contains invalid fields.",
  "errors": [
    {
      "field": "version",
      "message": "Version is required."
    }
  ]
}
```

Document:

- The overall error
- Individual field errors
- Validation rules
- Expected formats
- How to correct the request

---

## Error examples

Include realistic error examples for important failure scenarios.

For an endpoint such as:

```http
GET /releases/{releaseId}
```

use cases might include:

- Invalid authentication
- Insufficient permissions
- Release does not exist
- Invalid release identifier
- Server error

---

## Error documentation checklist

For each endpoint, identify:

- Possible error status codes
- Error response format
- Error codes
- Error messages
- Validation details
- Causes
- Resolution or recovery guidance

Consistent error documentation reduces troubleshooting time and helps developers recover from failed API requests more quickly.
