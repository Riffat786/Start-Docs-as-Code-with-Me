---
title: Authentication
sidebar_position: 8
---

API authentication controls access to protected resources and verifies that requests come from an authorized client.

Authentication requirements should be documented clearly so developers know how to obtain and provide credentials before making API requests.

---

## Authentication methods

Common API authentication methods include:

- API keys
- Basic authentication
- Bearer tokens
- OAuth 2.0

The authentication method depends on the API's security model.

---

## Bearer token authentication

A bearer token is commonly provided in the `Authorization` header.

Example:

```http
GET /releases
Authorization: Bearer <access-token>
```

The documentation should explain where the token comes from and how long it remains valid.

---

## Authentication flow

A typical token-based workflow is:

```text
Obtain credentials
      ↓
Authenticate
      ↓
Receive access token
      ↓
Include token in API request
      ↓
API validates token
      ↓
Access protected resource
```

---

## Document authentication requirements

For each protected endpoint, specify:

- Authentication method
- Required headers
- Required scopes or permissions
- Token requirements
- Credential format
- Token expiration behavior
- Authentication-related errors

For example:

| Requirement | Description             |
| ----------- | ----------------------- |
| Method      | Bearer token            |
| Header      | `Authorization`         |
| Format      | `Bearer <access-token>` |
| Scope       | `releases:read`         |

---

## Authentication errors

Authentication failures should be documented alongside the relevant endpoint.

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

Explain what the developer should do to resolve the problem.

---

## Security considerations

Never include real credentials in documentation.

Use placeholders:

```text
<api-key>
<access-token>
<client-id>
<client-secret>
```

Do not commit credentials to source control or include them in screenshots.

When documenting authentication flows, also avoid exposing sensitive configuration or production secrets.

---

## Authentication and usability

Authentication documentation should allow a developer to answer three questions quickly:

1. How do I authenticate?
2. What credentials or permissions do I need?
3. How do I include authentication in my request?

Clear authentication guidance reduces the time required to make the first successful API request.
