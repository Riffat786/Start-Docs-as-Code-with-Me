# API Authentication

API authentication verifies the identity of a client making an API request.

Many APIs require authentication before a client can access protected resources or perform operations.

---

## Common authentication methods

Common approaches include:

- API keys
- Basic authentication
- Bearer tokens
- OAuth 2.0

The authentication method depends on the API and its security requirements.

---

## API keys

An API key is a value provided by the API provider and sent with requests.

Example:

```http
GET /releases
X-API-Key: <api-key>
```

API keys should be treated as credentials and should not be exposed in source code, screenshots, documentation examples, or public repositories.

---

## Bearer tokens

Bearer authentication uses a token in the Authorization header.

Example:

```http
GET /releases
Authorization: Bearer <access-token>
```

The client obtains the token through the authentication mechanism defined by the API.

---

## OAuth 2.0

OAuth 2.0 is commonly used when applications need delegated access to protected resources.

API documentation should explain:

- How to obtain an access token
- Required scopes
- Token endpoint
- How to provide the token in API requests
- Token expiration
- Refresh behavior, when applicable

---

## Documenting authentication

Authentication documentation should clearly explain:

1. Which authentication method is supported
2. How credentials or tokens are obtained
3. Where credentials must be provided
4. Required headers or parameters
5. Required permissions or scopes
6. What happens when authentication fails

Example:

```http
Authorization: Bearer <access-token>
```

A good documentation example uses placeholders such as ```<access-token>``` rather than real credentials.

---

## Security considerations

Never include real credentials in documentation.

Use placeholders such as:

```text
<api-key>
<access-token>
<client-id>
<client-secret>
```

:::important

Also avoid committing credentials to Git repositories or including them in screenshots.

:::

The **Release Management API** section of this portfolio provides the concrete authentication documentation for the example API.
