---
title: API Versioning
sidebar_position: 2
---

API versioning allows an API provider to introduce changes while giving existing consumers time to adapt.

For documentation teams, versioning is not only a technical concern. It directly affects information architecture, content maintenance, release communication, and the developer experience.

---

## Why API versioning matters

APIs evolve over time.

Changes may include:

- New endpoints
- New parameters
- Changed response fields
- Deprecated functionality
- Breaking changes
- Security changes
- Changes to authentication
- Changes to business rules

Documentation needs to clearly communicate which behavior applies to each API version.

## Common versioning approaches

APIs can use different versioning strategies.

### URL versioning

```http
GET /v1/releases
```

### Header versioning

The version can be specified through an HTTP header:

```http
Accept: application/vnd.example.v2+json
```

### Query parameter versioning

Some APIs specify the version using a query parameter:

```http
GET /releases?version=2
```

The documentation should reflect the versioning strategy actually implemented by the API.

---

## Document the supported version

Clearly identify the API version on documentation pages.

For example:

```text
API Version: v2
Status: Current
```

:::tip

Avoid presenting multiple versions without clear navigation or labeling.

:::

---

## Document breaking changes

A breaking change can require developers to modify their integrations.

Examples include:

- Removing an endpoint
- Removing a required field
- Changing a data type
- Changing authentication requirements
- Changing response behavior
- Renaming a field

:::important

Breaking changes should be clearly documented and communicated before the affected version becomes mandatory.

:::

---

## Deprecation

When an API feature is deprecated, documentation should clearly state:

- What is deprecated
- Which version introduced the deprecation
- Whether the feature still works
- What developers should use instead
- Planned removal date, when known

Example:

Deprecated: ```GET /releases/legacy```
Use ```GET /releases``` instead. The legacy endpoint is scheduled for removal in API v3.

---

## Documentation versioning strategy

Documentation should have a clear relationship with API versions.

For example:

```text
API Documentation
│
├── v1
│   ├── Getting Started
│   └── API Reference
│
├── v2
│   ├── Getting Started
│   └── API Reference
│
└── Migration Guide
```

> The exact structure depends on the product and publishing platform.

---

## Documentation management considerations

Before publishing a new API version, the documentation team should verify:

- New endpoints are documented
- Changed endpoints are reviewed
- Deprecated functionality is identified
- Examples are updated
- Authentication documentation is current
- Error responses are accurate
- Version labels are correct
- Migration guidance is available for breaking changes
- Links between related versions work correctly

> Versioning should therefore be treated as part of the **documentation lifecycle**, not as a final publishing task.