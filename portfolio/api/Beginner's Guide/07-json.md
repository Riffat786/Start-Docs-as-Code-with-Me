# JSON

JSON (JavaScript Object Notation) is a lightweight data format commonly used to exchange structured information between an API and its clients.

API requests and responses frequently use JSON because it is readable by both humans and machines.

---

## JSON object

A JSON object contains **key-value** pairs.

Example:

```json
{
  "id": "2025.8",
  "status": "published",
  "releaseDate": "2025-08-15"
}
```

In this example:

- ```id``` identifies the release
- ```status``` describes its current state
- ```releaseDate``` specifies the release date

---

## JSON arrays

A JSON array contains multiple values or objects.

```json
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

---

## JSON data types

Common JSON data types include:

| Type    | Example                 |
| ------- | ----------------------- |
| String  | `"status": "published"` |
| Number  | `"count": 10`           |
| Boolean | `"active": true`        |
| Null    | `"description": null`   |
| Object  | `"release": { ... }`    |
| Array   | `"releases": [ ... ]`   |

---

## JSON in API documentation

Technical writers commonly use JSON examples to show:

- Request bodies
- Response bodies
- Nested objects
- Arrays
- Optional and required fields
- Data types

:::important

Examples should contain realistic values and clearly demonstrate the structure developers need to use.

:::

For example, a ```POST /releases``` request might use:

```json
{
  "version": "2025.9",
  "status": "draft",
  "releaseDate": "2025-09-15"
}
```

:::important

The example should be consistent with the API's actual schema and behavior.

:::

---

## Documenting JSON effectively

When documenting JSON:

- Use valid JSON syntax
- Use realistic example values
- Keep examples focused on the task
- Explain fields that may not be self-explanatory
- Identify required and optional fields
- Maintain consistent field names and data types

The JSON examples throughout this portfolio use the same Release Management API domain to keep the documentation consistent.
