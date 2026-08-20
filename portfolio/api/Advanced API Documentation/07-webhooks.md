---
title: Webhooks
sidebar_position: 7
---

Webhooks allow an API to notify another system when a specific event occurs.

Instead of repeatedly requesting the API to check whether something has changed, a consumer can provide a URL that the API calls when the event occurs.

## How webhooks work

A typical webhook flow is:

```text
Event occurs
    ↓
API identifies subscribed consumers
    ↓
API sends HTTP request
    ↓
Consumer receives event
    ↓
Consumer processes the event
```

For example, a release management system might send a notification when a release is published.

---

## Example webhook payload

A webhook could send:

```json
{
  "event": "release.published",
  "timestamp": "2025-08-15T10:30:00Z",
  "data": {
    "id": "2025.8",
    "status": "published"
  }
}
```

Documentation should explain the event and the structure of the payload.

---

## Document supported events

Provide a list of available events.

For example:

| Event               | Description               |
| ------------------- | ------------------------- |
| `release.created`   | A new release was created |
| `release.updated`   | A release was updated     |
| `release.published` | A release was published   |
| `release.deleted`   | A release was deleted     |

Use the exact event names defined by the API.

---

## Webhook configuration

If consumers need to register a webhook endpoint, document the process.

For example:

```http
POST /webhooks
```

Example request:

```json
{
  "url": "https://example.com/webhooks/releases",
  "events": [
    "release.published"
  ]
}
```

Document:

- Webhook URL requirements
- Supported events
- Authentication
- Request format
- Response expectations
- Retry behavior
- Delivery failures

---

## Security

Webhook documentation should explain how consumers can verify that a request genuinely came from the API provider.

Possible mechanisms include:

- Signature headers
- Shared secrets
- Token authentication
- IP allowlists

For example:

```http
X-Signature: <signature>
```

Never include real secrets in documentation examples.

---

## Delivery and retry behavior

Document what happens when a webhook delivery fails.

For example:

```text
Webhook delivery
      ↓
Consumer returns failure
      ↓
API retries
      ↓
Retry succeeds
```

If retries are supported, document:

- Number of retries
- Retry intervals
- Retry conditions
- Maximum delivery period
- Duplicate delivery behavior

---

## Webhook documentation checklist

For each webhook, document:

- Event name
- Event description
- Payload schema
- Example payload
- Configuration steps
- Authentication
- Security verification
- Expected response
- Retry behavior
- Failure handling

Webhooks should be documented as part of the overall API workflow rather than as isolated technical details.
