---
title: Working with Developers and SMEs
sidebar_position: 3
---

API documentation depends on accurate technical information. Technical writers often work with developers, architects, product managers, and subject matter experts (SMEs) to understand API behavior and validate documentation.

---

## Identify the right sources

Useful sources of API information may include:

- OpenAPI specifications
- API source code
- Existing documentation
- API testing tools
- Architecture documentation
- Developer guides
- Product requirements
- Release notes
- Developers and SMEs

Use multiple sources when possible and compare information to identify gaps or inconsistencies.

---

## Ask focused questions

Avoid asking broad questions such as:

> "Can you explain this API?"

Instead, ask questions that help resolve specific documentation gaps.

For example:

- Is this parameter required?
- What values are supported?
- What happens if the parameter is omitted?
- Which authentication scopes are required?
- Can this endpoint return more than one status code?
- What causes a `404 Not Found` response?
- Is pagination supported?
- Are there rate limits?
- Is this behavior different between API versions?

Focused questions make reviews more efficient and produce more useful answers.

---

## Validate technical behavior

Do not rely solely on assumptions or outdated documentation.

Where appropriate:

1. Review the API specification.
2. Test the endpoint.
3. Compare the result with the specification.
4. Ask the developer or SME about discrepancies.
5. Document the confirmed behavior.

For example, if the specification describes a field as optional but the API rejects a request when the field is missing, the discrepancy should be investigated before the documentation is published.

---

## Review documentation with developers

A technical review should focus on technical accuracy rather than rewriting the documentation.

Ask reviewers to verify:

- Endpoint behavior
- Parameters
- Data types
- Required fields
- Authentication
- Response structures
- Status codes
- Error conditions
- Examples
- Version-specific behavior

The technical writer remains responsible for presenting the information clearly and consistently.

---

## Maintain a source of truth

Whenever possible, identify the authoritative source for each type of information.

For example:

| Information | Possible source |
|---|---|
| Endpoint definition | OpenAPI specification |
| API behavior | API implementation |
| Business rules | Product owner or SME |
| Authentication | Security documentation |
| Examples | Tested API requests |
| Release behavior | Release documentation |

A clear source-of-truth approach reduces conflicting information and makes future updates easier.

---

## Documentation is a collaborative process

High-quality API documentation is rarely produced by the technical writer alone.

The technical writer brings information architecture, audience awareness, clarity, consistency, and documentation expertise.

Developers and SMEs provide technical and product knowledge.

Together, they create documentation that is both **technically accurate and usable**.