---
title: Requests
sidebar_position: 4
---

An API request contains the information a client sends to the server to request data or perform an operation.

A well-documented request should make it clear what the developer needs to send, where to send it, and which information is required.

## Request structure

A typical HTTP request can contain:

- HTTP method
- URL
- Path parameters
- Query parameters
- Headers
- Request body

Example:

```http
GET /releases/2025.8 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Accept: application/json
```

---

## Request components

HTTP method

The HTTP method identifies the operation.

Common methods include:

| Method   | Purpose                          |
| -------- | -------------------------------- |
| `GET`    | Retrieve information             |
| `POST`   | Create a resource or submit data |
| `PUT`    | Replace an existing resource     |
| `PATCH`  | Partially update a resource      |
| `DELETE` | Delete a resource                |

### URL

The URL identifies the API endpoint.

Example:

```text
https://api.example.com/releases/2025.8
```

### Path parameters

Path parameters identify a specific resource.

```http
GET /releases/{releaseId}
```

Example:

```http
GET /releases/2025.8
```

> The documentation should explain the parameter and provide a realistic example.

### Query parameters

Query parameters modify or filter a request.

Example:

```http
GET /releases?status=published&limit=20
```

Document:

- Parameter name
- Type
- Required or optional status
- Valid values
- Default value
- Example

### Headers

Headers provide additional information about the request.

Example:

```http
Authorization: Bearer <access-token>
Accept: application/json
```

Common headers used by APIs include:

| Header          | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `Authorization` | Provides authentication credentials                  |
| `Accept`        | Specifies the response format expected by the client |
| `Content-Type`  | Specifies the format of the request body             |

### Request body

A request body contains data sent to the API.

It is commonly used with `POST`, `PUT`, and `PATCH`.

Example:

```http
POST /releases
Content-Type: application/json
Authorization: Bearer <access-token>
```

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

---

## Complete request example

A complete request should show the information required to perform the operation.

```bash
curl --request POST \
  --url https://api.example.com/releases \
  --header 'Authorization: Bearer <access-token>' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
    "version": "2025.9",
    "status": "draft",
    "releaseDate": "2025-09-15"
  }'
```

---

## Document required information

Clearly identify which parts of the request are required.

| Request component |                 Required | Example            |
| ----------------- | -----------------------: | ------------------ |
| HTTP method       |                      Yes | `POST`             |
| Endpoint          |                      Yes | `/releases`        |
| Authentication    |                      Yes | Bearer token       |
| `Content-Type`    |        Yes for JSON body | `application/json` |
| Request body      | Yes for create operation | JSON object        |

---

## Document request variations

Where an endpoint supports different ways of making a request, provide examples for the most common use cases.

For example:

```http
GET /releases
```

Retrieve all available releases.

```http
GET /releases?status=published
```

Retrieve only published releases.

```http
GET /releases?status=published&limit=20
```

Retrieve published releases with a result limit.

---

## Request validation

Documentation should reflect the API's actual validation rules.

> If a field is required, identify it as required.
> If a value has constraints, document them.

For example:

| Field         | Requirement                                 |
| ------------- | ------------------------------------------- |
| `version`     | Required                                    |
| `status`      | Must be `draft`, `published`, or `archived` |
| `releaseDate` | Must use the documented date format         |

:::important

Do not invent validation rules. Confirm them against the API contract or implementation.

:::

---

### Request examples and security

Request examples must never contain real credentials.

Use placeholders:

```text
<access-token>
<api-key>
<client-id>
<client-secret>
```

Also ensure that screenshots and copied request examples do not expose sensitive information.

---

## Request documentation checklist

For each endpoint, verify that the documentation includes:

- HTTP method
- Endpoint URL
- Path parameters
- Query parameters
- Required headers
- Authentication
- Request body
- Required fields
- Optional fields
- Valid values
- Complete request example
- Security considerations

:::note

A developer should be able to construct a valid request using the information provided in the documentation.

:::
