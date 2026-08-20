---
title: Pagination
sidebar_position: 3
---

Pagination controls how an API returns large collections of resources.

Instead of returning every resource in a single response, an API can divide the results into smaller sets, or pages.

For documentation teams, pagination needs to be documented clearly because it directly affects how developers retrieve and process collections.

## Example

A request might specify the number of results to return:

```http
GET /releases?limit=20
```

The response may contain a collection of releases together with information about additional pages:

```json
{
  "releases": [
    {
      "id": "2025.8",
      "status": "published"
    }
  ],
  "pagination": {
    "limit": 20,
    "next": "/releases?limit=20&offset=20"
  }
}
```

The exact pagination structure depends on the API.

---

## Common pagination approaches

### Offset-based pagination

A client specifies how many records to skip.

```http
GET /releases?limit=20&offset=40
```

This requests 20 records starting after the first 40 records.

### Page-based pagination

A client specifies a page number.

```http
GET /releases?page=3&limit=20
```

### Cursor-based pagination

A client uses a cursor supplied by the previous response.

```http
GET /releases?limit=20&cursor=abc123
```

Cursor-based approaches are commonly used when the API needs more consistent behavior while data changes between requests.

---

## Document pagination parameters

For each pagination parameter, document:

| Parameter | Type    | Required | Description                         |
| --------- | ------- | -------: | ----------------------------------- |
| `limit`   | Integer |       No | Maximum number of results to return |
| `offset`  | Integer |       No | Number of results to skip           |

Also document:

- Default values
- Maximum values
- Minimum values
- How to request the next page
- How to determine whether more results exist
- Document the response

Developers need to know how to identify additional results.

For example:

```json
{
  "pagination": {
    "limit": 20,
    "offset": 40,
    "total": 125,
    "next": "/releases?limit=20&offset=60"
  }
}
```

Explain what each field represents.

---

## Documentation considerations

Pagination should be documented consistently across endpoints that return collections.

Check that:

- Parameter names are consistent
- Limits and defaults are accurate
- Examples reflect actual behavior
- The next-page mechanism is clearly explained
- Empty collections are documented
- Maximum page sizes are identified
- Response metadata is explained

---

## Pagination and API design changes

Changes to pagination behavior can affect existing integrations.

For example, changing the default page size or removing a pagination parameter may change the amount of data returned to a client.

> Such changes should therefore be reviewed as part of the API change and documentation release process.