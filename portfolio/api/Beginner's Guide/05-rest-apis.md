# REST APIs

REST (Representational State Transfer) is an architectural style commonly used to design web APIs.

REST APIs typically expose resources through URLs and use HTTP methods to perform operations on those resources.

---

## Resources and endpoints

A resource represents an object or collection of objects.

For example, a release management API might expose a `releases` resource:

```http
GET /releases
```

A specific release can be addressed using its identifier:

```http
GET /releases/2025.8
```

Here:

- releases represents the resource
- ```2025.8``` identifies a specific release
- ```GET``` specifies the requested operation

---

## Common REST operations

| Operation                 | HTTP method | Example                   |
| ------------------------- | ----------- | ------------------------- |
| List resources            | `GET`       | `GET /releases`           |
| Retrieve a resource       | `GET`       | `GET /releases/2025.8`    |
| Create a resource         | `POST`      | `POST /releases`          |
| Replace a resource        | `PUT`       | `PUT /releases/2025.8`    |
| Update part of a resource | `PATCH`     | `PATCH /releases/2025.8`  |
| Delete a resource         | `DELETE`    | `DELETE /releases/2025.8` |

---

## Resource-oriented URLs

REST APIs generally use URLs to identify resources rather than actions.

Prefer:

```http
GET /releases/2025.8
```

rather than an action-oriented URL such as:

```http
GET /getRelease?id=2025.8
```

The HTTP method communicates the operation, while the URL identifies the resource.

---

## REST and API documentation

When documenting a REST API, technical writers should clearly describe:

- The resource represented by each endpoint
- The supported HTTP method
- Parameters and request data
- Authentication requirements
- Expected responses
- Possible errors
- Working examples

The **Release Management API** used in this portfolio follows this resource-oriented approach and provides practical examples of REST API documentation.
