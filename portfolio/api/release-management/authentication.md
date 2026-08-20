---
id: authentication
title: Authentication
sidebar_label: Authentication
sidebar_position: 2
description: Learn how to authenticate requests to the Release Management API.
---

The Release Management API uses **Bearer token authentication** to protect API resources.

Clients must include a valid access token in the `Authorization` HTTP header when making API requests.

---

## Authentication Header

Include the token using the following format:

```http
Authorization: Bearer <access-token>
```

For example:

```http
GET /v1/releases
Authorization: Bearer eyJhbGciOi...
```

> The token shown above is illustrative only. This portfolio project does not use real credentials.

---

## How Authentication Works

The authentication flow is:

```text
Client
  ↓
Obtain access token
  ↓
Include token in Authorization header
  ↓
Send API request
  ↓
API validates token
  ↓
Request processed
```

Authentication is defined globally in the OpenAPI specification.

```yaml
security:
  - bearerAuth: []
```

The corresponding security scheme is:

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

The API contract therefore communicates to documentation tooling that requests require Bearer authentication.

---

## Example Request

The following request retrieves the first page of releases:

```http
GET https://api.release-management.test/v1/releases?page=1&pageSize=20
Authorization: Bearer <access-token>
```

## cURL

The same request can be represented using cURL:

```bash
curl -X GET \
  "https://api.release-management.test/v1/releases?page=1&pageSize=20" \
  -H "Authorization: Bearer <access-token>"
```

---

## Authentication Errors

Requests without valid authentication may return:

```text
401 Unauthorized
```

The request does not contain valid authentication credentials.

Example:

```JSON
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication is required."
  }
}
```

---

## Security Considerations

Access tokens should be treated as sensitive credentials.

Do not:

- commit tokens to Git
- include real tokens in documentation
- place tokens directly in source code
- share tokens in screenshots
- include production credentials in examples

For this portfolio project, all tokens shown in examples are placeholders.

---

## OpenAPI Definition

The authentication model is defined in the API contract:

```TEXT
portfolio/api/release-management/openapi.yaml
```

This allows API documentation tooling to automatically understand which operations require authentication.

---

## What's Next?

Continue to the API Reference to explore individual endpoints, request parameters, request bodies, response schemas, and status codes.

### One important point

Notice that we're using a **fake JWT-looking value only as an illustration**:

```text
eyJhbGciOi...
```

We are not going to generate or use a real token. That's exactly what we want for a public portfolio.

