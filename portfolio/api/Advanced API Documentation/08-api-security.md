---
title: API Security
sidebar_position: 8
---

API security protects API resources, data, and consumers from unauthorized access and misuse.

Security information is an important part of API documentation because developers need to understand how to authenticate, what permissions they require, and how to handle security-related responses.

---

## Authentication and authorization

Authentication verifies who or what is making a request.

Authorization determines what that authenticated client is allowed to access or modify.

Documentation should clearly distinguish between the two.

For example:

```http
Authorization: Bearer <access-token>
```

The documentation should also identify any required permissions or scopes.

---

## Protect credentials

**Never publish:**

- Real API keys
- Access tokens
- Client secrets
- Passwords
- Private keys
- Production credentials

Use placeholders in examples:

```http
<api-key>
<access-token>
<client-secret>
```

---

## HTTPS

:::important

APIs handling sensitive information should use HTTPS to protect data transmitted between the client and server.

:::

Example:

```text
https://api.example.com/releases
```

Documentation should use secure URLs in examples where HTTPS is required.

---

## Security-related responses

Document security-related HTTP responses such as:

| Status code        | Meaning                                                  |
| ------------------ | -------------------------------------------------------- |
| `401 Unauthorized` | Authentication is missing or invalid                     |
| `403 Forbidden`    | The client is authenticated but does not have permission |

:::tip

Provide examples where they help developers understand how to respond.

:::

---

## Sensitive information in examples

Examples should use realistic but non-sensitive data.

Avoid using:

```json
{
  "apiKey": "abc123-real-secret"
}
```

Use:

```json
{
  "apiKey": "<api-key>"
}
```

The same principle applies to screenshots.

Before publishing screenshots, check that they do not expose:

- Credentials
- Personal information
- Internal URLs
- Customer information
- Environment-specific secrets
- Confidential configuration

---

## Security documentation review

:::important

Security-related documentation should be reviewed with the appropriate technical or security stakeholders.
:::

Verify:

- Authentication method
- Authorization requirements
- Required scopes
- Credential handling
- HTTPS requirements
- Security-related errors
- Token expiration
- Sensitive information in examples

---

## Documentation management considerations

Security documentation should be treated as controlled technical content.

When authentication or authorization behavior changes, assess the documentation impact before the API change is released.

A documentation review should confirm that:

- Existing examples remain safe
- Authentication instructions remain accurate
- Permissions are correctly documented
- Deprecated security mechanisms are removed
- Screenshots do not expose sensitive information

:::tip

Clear security documentation helps developers integrate with the API correctly while reducing avoidable security risks.

:::
