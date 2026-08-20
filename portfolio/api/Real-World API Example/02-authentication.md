---
title: Authentication
sidebar_position: 2
---

The Release Management API uses bearer token authentication to protect API resources.

Clients must provide a valid access token when calling protected endpoints.

---

## Authentication method

The API expects an access token in the `Authorization` header.

```http
Authorization: Bearer <access-token>
```

The token must be included with every request to an endpoint that requires authentication.

---

## Example request

```http
GET /releases
Host: api.example.com
Authorization: Bearer <access-token>
Accept: application/json
```

---

## Authentication requirements

| Requirement           | Description             |
| --------------------- | ----------------------- |
| Authentication method | Bearer token            |
| Header                | `Authorization`         |
| Format                | `Bearer <access-token>` |
| Token                 | Valid access token      |
| Transport             | HTTPS                   |

Do not send access tokens as query parameters unless explicitly supported by the API.

---

## Obtaining an access token

The method used to obtain an access token depends on the API's authentication service and environment.

A typical workflow is:

```text
Obtain credentials
      ↓
Authenticate with the authorization service
      ↓
Receive access token
      ↓
Include token in API requests
      ↓
API validates token
      ↓
Access protected resource
```

The authentication service, token endpoint, client credentials, and required permissions should be provided by the API owner or security team.

---

## Required permissions

Some endpoints may require specific permissions or scopes.

For example:

| Operation         | Example scope     |
| ----------------- | ----------------- |
| Retrieve releases | `releases:read`   |
| Create releases   | `releases:write`  |
| Update releases   | `releases:write`  |
| Delete releases   | `releases:delete` |

> The scopes above are examples for this portfolio and should be replaced with the actual permissions defined by the API.

---

## Authentication errors

### 401 Unauthorized

The API returns 401 Unauthorized when authentication is missing or invalid.

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

- Missing Authorization header
- Expired access token
- Invalid access token
- Incorrect authentication format

### 403 Forbidden

The API may return 403 Forbidden when the client is authenticated but does not have permission to perform the requested operation.

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

---

## Security requirements

Never include real credentials in documentation.

Use placeholders such as:

```text
<access-token>
<client-id>
<client-secret>
<api-key>
```

Do not include credentials in:

- Markdown files
- Git repositories
- Screenshots
- Code examples
- Logs
- URLs
- Issue reports

Use HTTPS when transmitting authentication credentials.

---

## Documentation considerations

Authentication documentation should be reviewed whenever the API security model changes.

Before publishing an authentication update, verify:

- Authentication method
- Token format
- Required headers
- Permissions and scopes
- Token expiration behavior
- Authentication errors
- Security requirements
- Examples
- Screenshots

> Authentication documentation should provide enough information for a developer to authenticate successfully without exposing sensitive implementation details.

