---
title: Filtering and Sorting
sidebar_position: 4
---

Filtering and sorting allow API consumers to control which resources are returned and how those resources are ordered.

These capabilities are particularly important for collection endpoints that can return large amounts of data.

---

## Filtering

Filtering restricts the results based on one or more criteria.

For example:

```http
GET /releases?status=published
```

This request asks the API to return releases with a ```published``` status.

Multiple filters may be supported:

```http
GET /releases?status=published&year=2025
```

The documentation should clearly identify:

- Supported filter parameters
- Accepted values
- Data types
- Whether filters can be combined
- Default behavior
- What happens when no matching resources are found

---

## Sorting

Sorting controls the order in which resources are returned.

For example:

```http
GET /releases?sort=releaseDate
```

An API may also support sort direction:

```http
GET /releases?sort=releaseDate&order=desc
```

Document the supported fields and sort directions.

| Parameter | Example       | Description                 |
| --------- | ------------- | --------------------------- |
| `sort`    | `releaseDate` | Field used to order results |
| `order`   | `desc`        | Sort direction              |

---

## Combining filtering and sorting

API consumers may need to combine multiple options:

```http
GET /releases?status=published&sort=releaseDate&order=desc
```

The documentation should provide at least one realistic example of a common combination.

---

## Define supported values

Do not leave filter or sort values open to interpretation.

For example:

| Parameter | Supported values                 |
| --------- | -------------------------------- |
| `status`  | `draft`, `published`, `archived` |
| `sort`    | `releaseDate`, `version`         |
| `order`   | `asc`, `desc`                    |

If a parameter accepts only a defined set of values, document those values explicitly.

---

## Document defaults

If the API applies a default behavior, document it.

For example:

> If order is not specified, results are returned in ascending order.

Defaults are particularly important when they affect the order or amount of data returned.

---

## Empty results

Document what happens when no resources match the filter.

For example:

```json
{
  "releases": []
}
```

Explain whether the API returns an empty collection, an error, or another response.

---

## Documentation management considerations

Filtering and sorting should be reviewed whenever an API changes.

Before publishing an update, verify:

- Parameter names are accurate
- Supported values are current
- Default behavior is documented
- Combined filters work as described
- Examples have been tested
- Error behavior is documented
- Changes are reflected consistently across related endpoints

> Consistent filtering and sorting documentation helps developers discover the API's capabilities without needing to infer behavior from individual responses.
