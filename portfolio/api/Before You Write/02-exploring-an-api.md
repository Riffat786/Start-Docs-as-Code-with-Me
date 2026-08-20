---
title: Exploring an API
sidebar_position: 2
---

Before writing API documentation, a technical writer needs to understand how the API behaves.

Exploring the API means examining its endpoints, requests, responses, authentication requirements, and error conditions before documenting them.

---

## Start with the API specification

If an OpenAPI specification is available, use it as one of the primary sources of information.

Look for:

- Available endpoints
- HTTP methods
- Parameters
- Request bodies
- Response schemas
- Authentication requirements
- Status codes
- Examples
- API versions

The specification provides the technical structure of the API, but it may not provide everything a developer needs to successfully complete a task.

---

## Test the API

Use an API client such as Postman, Swagger UI, or another appropriate tool to make requests against the API.

For example:

```http
GET /releases
```

Check the response:

```json
{
  "releases": [
    {
      "id": "2025.8",
      "status": "published"
    }
  ]
}
```

Testing helps confirm that the documented behavior matches the actual API behavior.

---

## Explore different scenarios

Do not test only the successful request.

Where possible, investigate:

- Valid requests
- Missing required parameters
- Invalid parameter values
- Invalid authentication
- Missing resources
- Unsupported methods
- Malformed request bodies
- Rate-limit responses
- Server errors

These scenarios provide information needed for accurate error documentation.

---

## Record what you discover

During API exploration, capture information such as:

| Information      | Example            |
| ---------------- | ------------------ |
| Endpoint         | `/releases`        |
| Method           | `GET`              |
| Authentication   | Bearer token       |
| Parameters       | `status`           |
| Success response | `200 OK`           |
| Error response   | `401 Unauthorized` |
| Response format  | JSON               |

This information can then be used to create the API reference and task-oriented documentation.

---

## Work with developers and SMEs

API exploration should not replace communication with developers or subject matter experts.

Use questions to clarify areas such as:

- Is this endpoint intended for public use?
- Which parameters are required?
- Are there undocumented limitations?
- Which errors should users expect?
- How does authentication work?
- Are there differences between API versions?
- Which examples represent supported use cases?

---

## Document what developers actually need

The goal of API exploration is not simply to collect technical information.

The goal is to understand enough about the API to produce documentation that helps developers complete their tasks accurately and efficiently.

The **Release Management API** in this portfolio provides a practical example of this approach.
