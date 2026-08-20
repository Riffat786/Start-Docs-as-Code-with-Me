# API Requests and Responses

API communication is based on a request-and-response pattern.

The client sends a request to an API, and the API returns a response.

---

## API request

A typical HTTP request can contain:

- Method
- URL
- Headers
- Query parameters
- Path parameters
- Request body

Example:

```http
GET /releases/2025.8 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer <token>
```

---

## API response

A response typically contains:
  
- HTTP status code
- Response headers
- Response body

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

---

## Request components

### Path parameters

Path parameters identify a specific resource.

```http
GET /releases/{releaseId}
```

Example:

```http
GET /releases/2025.8
```

### Query parameters

Query parameters modify or filter a request.

```http
GET /releases?status=published
```

### Headers

Headers provide additional information about the request.

For example:

```http
Accept: application/json
Authorization: Bearer <token>
```

### Request body

A request body contains data sent to the API, commonly with ```POST```, ```PUT```, or ```PATCH``` requests.

Example:

```http
{
  "version": "2025.9",
  "status": "draft"
}
```

---

## Documenting requests and responses

Good API documentation should show developers exactly what they need to send and what they can expect to receive.

For each endpoint, document:

- HTTP method
- Endpoint URL
- Required headers
- Path parameters
- Query parameters
- Request body
- Successful responses
- Error responses
- Example requests
- Example responses

The **Release Management API** provides practical examples of these request and response patterns.
