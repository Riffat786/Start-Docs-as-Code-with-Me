---
title: OpenAPI
sidebar_position: 1
---

OpenAPI is a standard for describing HTTP APIs in a machine-readable format.

An OpenAPI document can describe an API's:

- Endpoints
- HTTP methods
- Parameters
- Request bodies
- Responses
- Authentication
- Data schemas
- Examples

OpenAPI specifications are commonly written in YAML or JSON.

## Example

A simplified OpenAPI definition might look like:

```yaml
openapi: 3.0.3
info:
  title: Release Management API
  version: 1.0.0

paths:
  /releases:
    get:
      summary: List releases
      responses:
        '200':
          description: Successful response
```

The specification describes the API structure without requiring the reader to inspect the implementation.

---

## OpenAPI and technical writers

Technical writers can use an OpenAPI specification as an important source of API information.

It can help identify:

- Available endpoints
- Supported methods
- Parameters
- Request schemas
- Response schemas
- Authentication requirements
- Status codes

However, an OpenAPI specification may not provide enough information for complete user-facing documentation.

For example, it may describe that an endpoint exists without explaining:

- When a developer should use it
- Why a particular workflow is recommended
- How endpoints work together
- Common use cases
- Troubleshooting guidance

---

## OpenAPI as a source of truth

When an OpenAPI specification is maintained as part of the development workflow, it can provide a structured source for API reference documentation.

A typical workflow might be:

```text
API implementation
      ↓
OpenAPI specification
      ↓
Validation
      ↓
API reference
      ↓
Published documentation
```

The exact workflow depends on the development and documentation toolchain.

---

## Validate the specification

Before using an OpenAPI specification to generate or publish documentation, validate it.

Common problems include:

- Invalid YAML or JSON
- Missing required fields
- Incorrect references
- Inconsistent schemas
- Invalid parameter definitions
- Unsupported response definitions

Validation helps identify problems before they reach published documentation.

---

## OpenAPI and documentation automation

OpenAPI can support automated documentation workflows.

For example:

```text
OpenAPI specification
        ↓
CI validation
        ↓
Documentation build
        ↓
API reference
        ↓
Published site
```

This approach can reduce manual duplication between the API definition and the API reference.

---

## OpenAPI in a Docs-as-Code workflow

OpenAPI works particularly well with a Docs-as-Code approach because the specification can be stored, reviewed, validated, and versioned alongside documentation source files.

For technical writers, understanding OpenAPI makes it easier to:

- Explore an unfamiliar API
- Identify documentation gaps
- Review API changes
- Validate reference content
- Collaborate with developers
- Support automated documentation workflows
