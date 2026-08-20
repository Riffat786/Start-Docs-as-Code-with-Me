---
title: Rate Limiting
sidebar_position: 5
---

Rate limiting controls how frequently a client can make requests to an API within a defined period.

It helps protect API availability, manage system capacity, and provide predictable service for consumers.

## Example

An API might allow:

```text
100 requests per minute
```

If a client exceeds the permitted limit, the API may return:

```http
HTTP/1.1 429 Too Many Requests
```

---

## Document the limits clearly

API documentation should specify:

- Maximum number of requests
- Time period
- Whether limits apply per user, client, token, or IP address
- Whether different endpoints have different limits
- What response is returned when the limit is exceeded
- How long the client should wait before retrying

For example:

| Limit        | Scope      | Period   |
| ------------ | ---------- | -------- |
| 100 requests | API client | 1 minute |

---

## Response headers

Some APIs provide rate-limit information through response headers.

For example:

```text
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 42
X-RateLimit-Reset: 60
```

Document these headers if they are part of the API contract.

Explain:

- What each header means
- Whether the value is cumulative or per request
- What unit is used for reset information

---

## Rate-limit errors

A common response when the limit is exceeded is:

```http
HTTP/1.1 429 Too Many Requests
```

The response may include additional information:

```json
{
  "code": "RATE_LIMIT_EXCEEDED",
  "message": "Too many requests. Try again later."
}
```

If the API provides a Retry-After header, document how clients should use it:

```http
Retry-After: 30
```

---

## Document retry behavior

Developers need to know how to respond when a rate limit is reached.

If supported by the API, explain:

- When to retry
- How long to wait
- Whether exponential backoff is recommended
- Whether the server provides retry information
- Whether repeated failures can result in additional restrictions

---

## Different limits

Some APIs apply different limits to different operations.

For example:

```http
GET requests:     100/minute
POST requests:     50/minute
Bulk operations:   10/minute
```

Document these differences clearly rather than presenting a single global limit if the API does not actually use one.

---

## Documentation management considerations

Rate limits are operational information that can change independently of endpoint behavior.

Before publishing documentation, verify:

- Limits are current
- Scope is clearly defined
- Response headers are accurate
- ```429``` behavior is documented
- Retry guidance is current
- Examples match the actual API

Changes to rate limits should be treated as documentation-impacting changes and reviewed before release.
