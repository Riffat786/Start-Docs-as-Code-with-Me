> 🚧 This module is currently under development.

## Step 1: Create a openapi file

As openapi.yaml

---

## Step 2 — Define the API metadata

Now we'll put the foundation into openapi.yaml.

Paste this exactly into the file:

```YAML
openapi: 3.0.3
info:
  title: Release Management API
  version: 1.0.0
  description: |
    A fictional REST API for managing software releases,
    tracking changes and work items, coordinating approvals,
    and preparing release notes.

    This API is a portfolio project designed to demonstrate
    realistic API design and developer documentation practices.

servers:
  - url: https://api.example.com/v1
    description: Fictional production server

tags:
  - name: Releases
    description: Manage software releases.

  - name: Changes
    description: Track changes associated with releases.

  - name: Work Items
    description: Manage work items associated with releases.

  - name: Approvals
    description: Manage release approval workflows.

  - name: Release Notes
    description: Generate and manage release notes.
```

---

### What we've just defined

```openapi```

```YAML
openapi: 3.0.3
```

This tells tools which OpenAPI specification version we're using.

```info```

Defines the API's identity:

```text
Title
Version
Description
servers
```

Defines where the API is hosted.

We're deliberately using:

```text
https://api.example.com/v1

```

because this is a fictional portfolio API. We are not pretending that a real API exists.

The ```/v1``` also gives us an opportunity to demonstrate API versioning.

```tags```

These become the major resource groups in the eventual API documentation:

```text
Releases
Changes
Work Items
Approvals
Release Notes
```

This will eventually give us navigation roughly like:

```text
Release Management API


Overview


Authentication


Releases
  ├── List releases
  ├── Create release
  ├── Get release
  ├── Update release
  └── Delete release


Changes
  ...


Work Items
  ...


Approvals
  ...


Release Notes
  ...

```

---

## One important learning point

We're deliberately not adding endpoints yet.

We're establishing:

```text
API identity
     ↓
API version
     ↓
Server
     ↓
Resource groups
```

before defining operations.

That gives us a clean OpenAPI foundation.

---

## We now have the API foundation

```text
Release Management API
│
├── OpenAPI 3.0.3
├── API metadata
├── Version 1.0.0
├── Fictional server
└── Resource tags
    ├── Releases
    ├── Changes
    ├── Work Items
    ├── Approvals
    └── Release Notes
```

---

## Step 3 — Define Authentication

Before we create any endpoints, let's define how clients authenticate with the API.

We'll use Bearer token authentication, which is realistic and gives us useful documentation material later.

Add this after the tags: section in openapi.yaml:

```Yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT


security:
  - bearerAuth: []
```

Your file should now have this overall structure:

```YAML
openapi: 3.0.3


info:
  ...


servers:
  ...


tags:
  ...


components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT


security:
  - bearerAuth: []
```

---

### What this means

The API expects clients to send an HTTP Authorization header:

```HTTP
Authorization: Bearer <access-token>
```

The OpenAPI definition tells documentation tools that:

- authentication uses HTTP authentication
- the scheme is bearer
- the token format is JWT
- the API requires authentication by default

---

### Why define it globally?

This:

```yaml
security:
  - bearerAuth: []
```

means authentication applies to API operations by default.

Later, if we have a genuinely public endpoint, we can explicitly override the security requirement for that individual operation.

> That's a useful API-documentation concept for Technical Writers to learn.

---

### One important distinction

We're documenting an authentication model, not building an authentication server.

There will be no real token or credentials in this portfolio project.

The eventual documentation can explain:

```text
Authentication
      ↓
Bearer token
      ↓
Authorization header
      ↓
API request
```

without exposing any private system or credentials.

---

## Step 4 — Define the Release resource

Before creating GET, POST, PUT, and DELETE operations, we need to define what a Release actually looks like.

This is important for API documentation because the schema becomes the reusable definition that endpoints reference.

Add the following under your existing ```security:``` section:

```YAML
  schemas:
    Release:
      type: object
      description: Represents a software release.
      required:
        - id
        - version
        - name
        - status
        - targetDate
      properties:
        id:
          type: string
          description: Unique identifier for the release.
          example: rel_2026_08

        version:
          type: string
          description: Release version identifier.
          example: "2026.08"

        name:
          type: string
          description: Human-readable name of the release.
          example: Customer Portal Release

        status:
          type: string
          description: Current lifecycle status of the release.
          enum:
            - draft
            - in_progress
            - ready_for_approval
            - approved
            - released
            - cancelled
          example: ready_for_approval

        targetDate:
          type: string
          format: date
          description: Planned release date.
          example: "2026-08-28"

        description:
          type: string
          description: Summary of the release.
          example: Improvements to customer portal navigation and reporting.

        createdAt:
          type: string
          format: date-time
          description: Date and time when the release was created.
          example: "2026-08-10T09:30:00Z"

        updatedAt:
          type: string
          format: date-time
          description: Date and time when the release was last updated.
          example: "2026-08-15T14:20:00Z"
```

---

### What we're learning here

We've now separated:

#### Authentication

```text
securitySchemes
```

from:

#### Data model

```text
schemas
```

That's an important OpenAPI concept.

The ```Release schema``` becomes reusable. We won't have to redefine the release structure every time an endpoint returns a Release.

For example, later:

```YAML
responses:
  '200':
    description: Release retrieved successfully.
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Release'
```

The ```$ref``` means:

> Use the Release schema defined in components.schemas.

This is one of the key advantages of maintaining an OpenAPI specification as the source of truth.

---

## Our Release model

We're deliberately making it realistic enough to document meaningful concepts:

```text
Release
├── id
├── version
├── name
├── status
├── targetDate
├── description
├── createdAt
└── updatedAt
```

And status gives us an opportunity to document an enum, which is something Technical Writers regularly need to explain in API reference documentation.

---

### The hierarchy should be

```text
components
├── securitySchemes
│   └── bearerAuth
│
└── schemas
    └── Release


security
└── bearerAuth
```

So ```security``` is outside ```components```, while ```schemas``` is inside components.
