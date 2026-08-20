---
title: Errors
sidebar_position: 6
---

API errors provide information about why a request could not be completed successfully.

Error documentation should help developers understand:

- What went wrong
- Why it happened
- Which HTTP status code was returned
- What information is included in the response
- How the problem can be resolved

---

## Error response structure

A Release Management API error may use a structured JSON response:

```json
{
  "code": "RELEASE_NOT_FOUND",
  "message": "The requested release was not found."
}
```

| Field     | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `code`    | String | Machine-readable error identifier |
| `message` | String | Human-readable explanation        |

---

## Common API errors

| Status code | Error                   | Description                                       |
| ----------- | ----------------------- | ------------------------------------------------- |
| `400`       | `BAD_REQUEST`           | Request contains invalid data                     |
| `401`       | `UNAUTHORIZED`          | Authentication is missing or invalid              |
| `403`       | `FORBIDDEN`             | Client does not have sufficient permissions       |
| `404`       | `NOT_FOUND`             | Requested resource does not exist                 |
| `409`       | `CONFLICT`              | Request conflicts with the current resource state |
| `422`       | `VALIDATION_ERROR`      | Request contains invalid field values             |
| `429`       | `RATE_LIMIT_EXCEEDED`   | Client has exceeded the request limit             |
| `500`       | `INTERNAL_SERVER_ERROR` | Unexpected server-side error                      |

The actual API contract should be treated as the authoritative source for supported status codes and error codes.

---

### 400 Bad Request

A 400 Bad Request response indicates that the API cannot process the request because the request itself is invalid.

Example:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```

```json
{
  "code": "BAD_REQUEST",
  "message": "The request contains invalid data."
}
```

Possible causes include:

- Invalid parameter
- Incorrect request format
- Missing required request information
- Unsupported value

---

### 401 Unauthorized

A 401 Unauthorized response indicates that the request does not contain valid authentication credentials.

Example:

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json
```

```json
{
  "code": "INVALID_TOKEN",
  "message": "The access token is missing or invalid."
}
```

Possible causes include:

- Missing access token
- Expired token
- Invalid token
- Incorrect authentication format

Resolution:

- Obtain a valid access token.
- Confirm that the token has not expired.
- Include the token in the Authorization header.
- Retry the request.

---

## 403 Forbidden

A 403 Forbidden response indicates that the client is authenticated but does not have permission to perform the requested operation.

Example:

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json
```

```json
{
  "code": "INSUFFICIENT_PERMISSIONS",
  "message": "The client does not have permission to perform this operation."
}
```

Resolution:

- Confirm that the authenticated client has the required permission.
- Check the required API scope.
- Contact the API administrator if access needs to be changed.

---

## 404 Not Found

A 404 Not Found response indicates that the requested resource does not exist.

Example:

```http
GET /releases/2024.1
```

Response:

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

Resolution:

- Verify the releaseId.
- Confirm that the release exists.
- Check that the request is using the correct API version or environment.

---

## 409 Conflict

A 409 Conflict response indicates that the request conflicts with the current state of the resource.

For example, attempting to create a release that already exists may result in:

```http
HTTP/1.1 409 Conflict
Content-Type: application/json
```

```json
{
  "code": "RELEASE_ALREADY_EXISTS",
  "message": "A release with this version already exists."
}
```

Documentation should explain the conflict and identify the appropriate next action.

---

## 422 Validation Error

A 422 Unprocessable Content response may indicate that the request is syntactically valid but fails validation.

Example:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "The request contains invalid fields.",
  "errors": [
    {
      "field": "version",
      "message": "Version is required."
    },
    {
      "field": "status",
      "message": "Status must be draft, published, or archived."
    }
  ]
}
```

For validation errors, document:

- Field name
- Validation rule
- Error message
- Expected value or format
- Resolution

---

## 429 Rate Limit Exceeded

A 429 Too Many Requests response indicates that the client has exceeded the permitted request rate.

Example:

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

```json
{
  "code": "RATE_LIMIT_EXCEEDED",
  "message": "Too many requests. Try again later."
}
```

Where supported, document the Retry-After header and explain how clients should handle the response.

---

## 500 Internal Server Error

A 500 Internal Server Error response indicates an unexpected server-side failure.

Example:

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json
```

```json
{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "An unexpected error occurred."
}
```

Documentation should avoid exposing internal implementation details or sensitive server information.

---

## Error handling guidance

Where appropriate, explain what developers should do after receiving an error.

For example:

```text
Request
   ↓
API returns error
   ↓
Check status code
   ↓
Read error code/message
   ↓
Correct request or handle condition
   ↓
Retry when appropriate

Not every error should be retried.
```

For example:

| Error | Typical action                                                    |
| ----- | ----------------------------------------------------------------- |
| `400` | Correct the request                                               |
| `401` | Refresh or obtain authentication                                  |
| `403` | Request appropriate permissions                                   |
| `404` | Verify the resource identifier                                    |
| `409` | Resolve the resource conflict                                     |
| `422` | Correct validation errors                                         |
| `429` | Wait and retry according to API guidance                          |
| `500` | Retry according to service guidance or investigate service status |

---

## Error documentation standards

For each endpoint, document:

- Possible HTTP status codes
- Error codes
- Error response schema
- Error messages
- Common causes
- Resolution guidance
- Retry behavior where applicable

Avoid documenting errors that the API cannot actually return.

---

## Documentation maintenance

Error behavior can change as the API evolves.

Review error documentation when:

- Validation rules change
- New error codes are introduced
- Authentication changes
- Rate limits change
- New business rules are implemented
- Endpoint behavior changes
- API versions are released

> Error documentation should be included in the API review and release process rather than treated as optional supporting content.
