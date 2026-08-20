---
id: authentication
title: Authentication
sidebar_label: Authentication
sidebar_position: 2
description: Learn how to authenticate requests to the Release Management API.
---

The Release Management API uses **Bearer token authentication** to protect API resources.

Clients must include a valid access token in the `Authorization` HTTP header when making API requests.

:::info

The Release Management API is a fictional API created for this documentation portfolio. The credentials and tokens shown in the examples are illustrative only.

:::

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
Accept: application/json
```

> The token shown above is illustrative only. This portfolio project does not use real credentials.

The `<access-token>` value represents a valid token issued by the API's authentication service.

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
Accept: application/json
```

## cURL

The same request can be represented using cURL:

```bash
curl -X GET \
   --url "https://api.release-management.test/v1/releases?page=1&pageSize=20" \
   --header "Authorization: Bearer <access-token>" \
   --header "Accept: application/json"
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

## Authorization

Authentication verifies that the client has valid credentials.

Authorization determines whether the authenticated client has permission to perform a particular operation.

For example, the API may use different permissions for different operations:

| Operation         | Example permission |
| ----------------- | ------------------ |
| Retrieve releases | `releases:read`    |
| Create releases   | `releases:write`   |
| Update releases   | `releases:write`   |
| Delete releases   | `releases:delete`  |

The exact permissions are defined by the API security model.

A client that is successfully authenticated but does not have sufficient permissions may receive:

```http
HTTP/1.1 403 Forbidden
```

Example:

```JSON
{
  "error": {
    "code": "FORBIDDEN",
    "message": "The client does not have permission to perform this operation."
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
- Store credentials in public repositories.
- Include credentials in URLs unless explicitly required by the API.

For this portfolio project, all tokens shown in examples are placeholders.

For this portfolio project, use placeholders such as:

```text
<access-token>
<api-key>
<client-id>
<client-secret>
```

---

## OpenAPI Definition

The authentication model is defined in the API contract:

```TEXT
portfolio/api/release-management/openapi.yaml
```

The OpenAPI specification defines the security scheme:

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

Operations can then reference the security requirement:

```yaml
security:
  - bearerAuth: []
```

This allows API documentation tooling to automatically understand which operations require authentication.

---

## Documentation Considerations

Authentication documentation should be reviewed whenever the API security model changes.

Before publishing an update, verify:

- Authentication method
- Authorization header
- Token format
- Token expiration behavior
- Required permissions or scopes
- Authentication errors
- Authorization errors
- OpenAPI security definitions
- Examples
- Screenshots
- Security-sensitive information

:::tip

Authentication documentation should provide enough information for developers to successfully authenticate without exposing real credentials or internal security details.

:::

---

## What's Next?

Continue to the API Reference to explore individual endpoints, request parameters, request bodies, response schemas, and status codes.

### Portfolio note

Notice that we're using a **fake JWT-looking value only as an illustration**:

```text
eyJhbGciOi...
```

We are not going to generate or use a real token. That's exactly what we want for a public portfolio.

The token format shown in this documentation is intentionally represented by:

`<access-token>`

No real JWT or production credential is required for this portfolio example.

> This approach demonstrates a professional documentation practice: **show enough information to explain the authentication workflow without exposing sensitive credentials.**
