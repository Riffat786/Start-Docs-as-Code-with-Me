---
title: Endpoints
sidebar_position: 3
---

An API endpoint is a specific URL through which a client accesses a resource or performs an operation.

The Release Management API uses resource-oriented endpoints for working with software releases.

---

## Endpoint Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/releases` | Retrieve a list of releases |
| `GET` | `/releases/{releaseId}` | Retrieve a specific release |
| `POST` | `/releases` | Create a release |
| `PUT` | `/releases/{releaseId}` | Replace a release |
| `DELETE` | `/releases/{releaseId}` | Delete a release |

---

## Base URL

All requests use the API base URL:

```text
https://api.example.com
```

A complete request therefore uses the following format:

```text
https://api.example.com/releases
```

---

## `GET /releases`

Retrieves a collection of releases.

### Request

```text
GET /releases HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Accept: application/json
```

### Query parameters

| Parameter | Type    | Required | Description                          |
| --------- | ------- | -------: | ------------------------------------ |
| `status`  | String  |       No | Filters releases by status           |
| `limit`   | Integer |       No | Maximum number of releases to return |
| `offset`  | Integer |       No | Number of releases to skip           |
| `sort`    | String  |       No | Field used to sort results           |
| `order`   | String  |       No | Sort direction: `asc` or `desc`      |

### Example

```http
GET /releases?status=published&limit=20
Authorization: Bearer <access-token>
Accept: application/json
```

### Successful response

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "releases": [
    {
      "id": "2025.8",
      "version": "2025.8",
      "status": "published",
      "releaseDate": "2025-08-15"
    },
    {
      "id": "2025.7",
      "version": "2025.7",
      "status": "published",
      "releaseDate": "2025-07-15"
    }
  ]
}
```

---

## `GET /releases/{releaseId}`

Retrieves a specific release.

### Path parameter

| Parameter   | Type   | Required | Description                      |
| ----------- | ------ | -------: | -------------------------------- |
| `releaseId` | String |      Yes | Unique identifier of the release |

### Request

```http
GET /releases/2025.8 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Accept: application/json
```

### Successful response

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "2025.8",
  "version": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

### Possible errors

| Status             | Description                                 |
| ------------------ | ------------------------------------------- |
| `401 Unauthorized` | Authentication is missing or invalid        |
| `403 Forbidden`    | Client does not have sufficient permissions |
| `404 Not Found`    | Release does not exist                      |

---

## `POST /releases`

Creates a new release.

### Request

```http
POST /releases HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Content-Type: application/json
Accept: application/json
```

### Request body

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

### Request fields

| Field         | Type   | Required | Description            |
| ------------- | ------ | -------: | ---------------------- |
| `version`     | String |      Yes | Release version        |
| `status`      | String |      Yes | Initial release status |
| `releaseDate` | String |       No | Planned release date   |

### Successful response

```http
HTTP/1.1 201 Created
Content-Type: application/json
```

```json
{
  "id": "2025.9",
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

### Possible errors

| Status             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `400 Bad Request`  | Request contains invalid data                      |
| `401 Unauthorized` | Authentication is missing or invalid               |
| `403 Forbidden`    | Client does not have permission to create releases |
| `409 Conflict`     | Release already exists                             |

---

## `PUT /releases/{releaseId}`

Replaces an existing release.

### Path parameter

| Parameter   | Type   | Required | Description                      |
| ----------- | ------ | -------: | -------------------------------- |
| `releaseId` | String |      Yes | Unique identifier of the release |

### Request

```http
PUT /releases/2025.9 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Content-Type: application/json
Accept: application/json
```

### Request body

```json
{
  "version": "2025.9",
  "status": "published",
  "releaseDate": "2025-09-15"
}
```

### Successful response

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "2025.9",
  "version": "2025.9",
  "status": "published",
  "releaseDate": "2025-09-15"
}
```

### Possible errors

| Status             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `400 Bad Request`  | Request contains invalid data                      |
| `401 Unauthorized` | Authentication is missing or invalid               |
| `403 Forbidden`    | Client does not have permission to update releases |
| `404 Not Found`    | Release does not exist                             |

---

## `DELETE /releases/{releaseId}`

Deletes a release.

### Path parameter

| Parameter   | Type   | Required | Description                      |
| ----------- | ------ | -------: | -------------------------------- |
| `releaseId` | String |      Yes | Unique identifier of the release |

### Request

```http
DELETE /releases/2025.9 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access-token>
Accept: application/json
```

### Successful response

If the API does not return a response body after deletion:

```http
HTTP/1.1 204 No Content
```

### Possible errors

| Status             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `401 Unauthorized` | Authentication is missing or invalid               |
| `403 Forbidden`    | Client does not have permission to delete releases |
| `404 Not Found`    | Release does not exist                             |

---

## Endpoint documentation standards

Each endpoint should provide enough information for a developer to understand and use the operation without inspecting the API implementation.

Document:

- HTTP method
- Endpoint path
- Description
- Authentication requirements
- Path parameters
- Query parameters
- Request headers
- Request body
- Response status codes
- Response body
- Error responses
- Practical examples

---

## Documentation maintenance

Endpoint documentation should be reviewed whenever the API changes.

Changes that may require documentation updates include:

- New endpoints
- Removed endpoints
- Changed parameters
- Changed request bodies
- Changed response schemas
- New error conditions
- Authentication changes
- Version changes
- Deprecated operations

> Documentation changes should be reviewed and published as part of the API change lifecycle.
