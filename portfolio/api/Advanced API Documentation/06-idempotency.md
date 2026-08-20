---
title: Idempotency
sidebar_position: 6
---

Idempotency describes whether making the same API request multiple times produces the same intended result as making it once.

This is particularly important for operations that create or modify resources.

---

## Why idempotency matters

Network failures can make it unclear whether a request was successfully processed.

For example:

```text
Client sends request
        ↓
Server processes request
        ↓
Network connection fails
        ↓
Client does not receive response
```

The client may retry the request.

If the operation is not designed to handle retries safely, the retry could create an unintended duplicate operation.

---

## Idempotent HTTP methods

HTTP defines certain methods as idempotent by design.

Common examples include:

- GET
- PUT
- DELETE

However, the actual behavior of an API should always be confirmed from its implementation and API contract.

For example, repeating:

```http
GET /releases/2025.8
```

should retrieve the same resource without creating additional resources.

---

## POST and idempotency

POST is commonly used to create resources and is not inherently idempotent.

For example:

```http
POST /releases
```

repeating the request could potentially create multiple releases.

Some APIs support an idempotency key to make retrying an operation safer.

Example:

```http
POST /releases
Idempotency-Key: 8f3c2d10-1234-4567-8901-example
```

The API can use the key to recognize repeated attempts to perform the same operation.

---

## Document idempotency behavior

If an API supports idempotency keys, document:

- Which endpoints support them
- Header name
- Required or optional status
- Expected format
- How long keys remain valid
- What happens when a key is reused
- How duplicate requests are handled
- Which response is returned for a repeated request

Example:

| Property | Description                   |
| -------- | ----------------------------- |
| Header   | `Idempotency-Key`             |
| Type     | String                        |
| Required | Yes for supported operations  |
| Purpose  | Prevents duplicate processing |
| Scope    | Individual API operation      |

---

## Example workflow

A documented retry workflow might look like:

```text
Send request
    ↓
Request outcome unknown
    ↓
Retry using the same idempotency key
    ↓
API identifies the previous operation
    ↓
Return the existing result
```

The exact behavior depends on the API implementation.

---

## Documentation considerations

Idempotency behavior should be documented wherever repeated requests could have significant consequences.

Technical writers should confirm:

- Which operations are safe to retry
- Whether idempotency keys are supported
- How retries are handled
- What happens when the same key is reused
- How long keys remain valid
- Which errors can safely be retried

> Clear documentation helps developers design reliable integrations and avoid unintended duplicate operations.
