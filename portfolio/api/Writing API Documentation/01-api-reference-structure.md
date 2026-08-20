---
title: API Reference Structure
sidebar_position: 1
---

An API reference provides precise technical information about an API's endpoints, parameters, requests, responses, and errors.

Its primary purpose is to help developers find the information they need quickly while integrating with the API.

---

## Recommended endpoint structure

A well-structured endpoint reference typically includes:

1. Endpoint name
2. Description
3. HTTP method
4. URL
5. Authentication
6. Parameters
7. Request body
8. Responses
9. Errors
10. Example request
11. Example response

For example:

```text
GET /releases/{releaseId}
```

---

### Description

Retrieves information about a specific release.

### Authentication

Requires a valid bearer token.

### Parameters

| Parameter   | Location | Required | Type   | Description               |
| ----------- | -------- | -------: | ------ | ------------------------- |
| `releaseId` | Path     |      Yes | String | Unique release identifier |

### Response

A successful request returns 200 OK and the release information in JSON format.

---

## Organize information around the endpoint

Developers should not need to search across multiple pages to understand how to call an endpoint.

Keep closely related information together whenever possible.

For example:

```text
GET /releases/{releaseId}

Description
Authentication
Parameters
Request
Response
Errors
Examples
```

---

## Use consistent terminology

Use the same terms throughout the API documentation.

For example, if the API calls the identifier releaseId, do not alternate between:

- release ID
- release identifier
- release number
- release key

unless these terms represent different concepts.

:::tip

Consistency reduces ambiguity and makes documentation easier to scan.

:::

---

## Document required and optional information

Clearly identify whether parameters and request fields are:

- Required
- Optional
- Conditionally required

For example:

| Field         | Required | Description            |
| ------------- | -------: | ---------------------- |
| `version`     |      Yes | Release version        |
| `description` |       No | Release description    |
| `status`      |      Yes | Current release status |

---

## Include realistic examples

Examples should demonstrate actual API usage rather than only showing syntax.

For example:

```http
GET /releases/2025.8
Authorization: Bearer <access-token>
Accept: application/json
```

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

---

## Design for scanning

API reference pages are often consulted while developers are actively working.

Use:

- Clear headings
- Tables
- Code blocks
- Short descriptions
- Consistent page structure
- Copyable examples
- Links to related endpoints

:::note

The goal is to make important information easy to locate without requiring the reader to read the entire page.

:::

The **Release Management API** in this portfolio demonstrates this structure through a complete API reference.
