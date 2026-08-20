---
title: Examples
sidebar_position: 7
---

Examples demonstrate how developers can use the Release Management API to complete common tasks.

Examples should complement the API reference by showing complete, realistic requests and responses.

---

## Example 1: Retrieve all releases

Use the releases collection endpoint:

```http
GET /releases
Authorization: Bearer <access-token>
Accept: application/json
```

Example response:

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

## Example 2: Filter releases

Retrieve only published releases:

```http
GET /releases?status=published
Authorization: Bearer <access-token>
Accept: application/json
```

Example response:

```json
{
  "releases": [
    {
      "id": "2025.8",
      "version": "2025.8",
      "status": "published",
      "releaseDate": "2025-08-15"
    }
  ]
}
```

---

## Example 3: Retrieve a specific release

Use the release identifier to retrieve a specific resource:

```http
GET /releases/2025.8
Authorization: Bearer <access-token>
Accept: application/json
```

Example response:

```json
{
  "id": "2025.8",
  "version": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

---

## Example 4: Create a release

Create a new release using POST:

```http
POST /releases
Authorization: Bearer <access-token>
Content-Type: application/json
Accept: application/json
```

Request body:

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

Example response:

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

---

## Example 5: Update a release

Update an existing release:

```http
PUT /releases/2025.9
Authorization: Bearer <access-token>
Content-Type: application/json
Accept: application/json
```

Request body:

```json
{
  "version": "2025.9",
  "status": "published",
  "releaseDate": "2025-09-15"
}
```

Example response:

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

---

## Example 6: Delete a release

Delete an existing release:

```http
DELETE /releases/2025.9
Authorization: Bearer <access-token>
Accept: application/json
```

Example response:

```http
HTTP/1.1 204 No Content
```

No response body is returned.

---

## Example 7: Handle an invalid release

A request for a release that does not exist may return:

```http
GET /releases/2024.1
Authorization: Bearer <access-token>
Accept: application/json
```

Response:

```http
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "code": "RELEASE_NOT_FOUND",
  "message": "The requested release was not found."
}
```

The developer should verify the release identifier before retrying the request.

---

## Example 8: Handle authentication failure

A request without a valid access token may return:

```http
GET /releases
Accept: application/json
```

Response:

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

The developer should obtain a valid access token and repeat the request with:

```http
Authorization: Bearer <access-token>
```

---

## Example 9: cURL

The API can also be called using cURL.

Retrieve a specific release:

```bash
curl --request GET \
  --url https://api.example.com/releases/2025.8 \
  --header 'Authorization: Bearer <access-token>' \
  --header 'Accept: application/json'
```

Create a release:

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

## Example quality standards

API examples should:

- Represent actual API behavior
- Use valid syntax
- Use realistic values
- Include required headers
- Demonstrate authentication where required
- Match the documented request schema
- Match the documented response schema
- Include important error scenarios
- Avoid real credentials
- Avoid production or customer data

---

## Example maintenance

Examples are part of the API documentation and must be maintained with the API.

Review examples when:

- Endpoints change
- Parameters change
- Request schemas change
- Response schemas change
- Authentication changes
- Error behavior changes
- API versions change
- Deprecated functionality is removed

> Examples should be validated against the current API whenever possible
