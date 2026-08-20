# HTTP Basics

HTTP (Hypertext Transfer Protocol) is the protocol commonly used for communication between clients and web servers.

API requests typically use HTTP to send a request to an endpoint and receive a response.

## HTTP request

A request can contain:

- HTTP method
- URL
- Headers
- Parameters
- Request body

Example:

```http
GET /releases/2025.8 HTTP/1.1
Host: api.example.com
Accept: application/json
```

---

## HTTP response

The server returns a response containing information such as:

- Status code
- Response headers
- Response body

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": "rel_2026_08",
  "status": "ready_for_approval"
}
```

![HTTP-Response](/img/portfolio/api/HTTP-response.png)

---

## Common HTTP methods

| Method   | Typical purpose                  |
| -------- | -------------------------------- |
| `GET`    | Retrieve information             |
| `POST`   | Create a resource or submit data |
| `PUT`    | Replace an existing resource     |
| `PATCH`  | Partially update a resource      |
| `DELETE` | Delete a resource                |

---

## Common status codes

| Status code                 | Meaning                                   |
| --------------------------- | ----------------------------------------- |
| `200 OK`                    | Request completed successfully            |
| `201 Created`               | Resource was created                      |
| `204 No Content`            | Request succeeded without a response body |
| `400 Bad Request`           | Request contains invalid data             |
| `401 Unauthorized`          | Authentication is required or invalid     |
| `403 Forbidden`             | Access is not permitted                   |
| `404 Not Found`             | Requested resource does not exist         |
| `429 Too Many Requests`     | Rate limit has been exceeded              |
| `500 Internal Server Error` | Server encountered an unexpected error    |

---

## Why HTTP knowledge matters to technical writers

Technical writers need to understand HTTP because API documentation describes how developers interact with these requests and responses.

Clear documentation should make it easy to identify:

- Which HTTP method to use
- Which URL or endpoint to call
- Which parameters are required
- Which headers are required
- What response to expect
- What status codes may be returned
  