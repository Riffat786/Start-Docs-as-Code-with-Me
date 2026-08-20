# What Is an API?

An **API (Application Programming Interface)** is a defined way for software systems to communicate with each other.

An API allows one application to request information or perform an operation in another application without needing to know how that application is implemented internally.

## A simple example

Consider a release management system that stores information about software releases.

A client application could request the available releases through an API:

```http
GET /releases
```

The API processes the request and returns structured data:

```JSON
{
  "releases": [
    {
      "id": "2025.8",
      "status": "published"
    },
    {
      "id": "2025.7",
      "status": "published"
    }
  ]
}
```

The client does not need to know how the release data is stored. It only needs to understand how to communicate with the API.

---

## APIs and technical documentation

For technical writers, an API can be viewed as a contract between the API provider and its consumers.

The documentation explains that contract by describing:

- Available endpoints
- Supported HTTP methods
- Required parameters
- Request formats
- Response formats
- Authentication requirements
- Error conditions
- Usage examples

Good API documentation makes this information predictable and easy to use.

---

## API documentation in this portfolio

The **Release Management API** in this portfolio provides a practical example of these concepts.

The following sections build on this foundation and demonstrate how API concepts are translated into professional documentation.
