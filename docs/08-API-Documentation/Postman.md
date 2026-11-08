---
title: Postman
sidebar_position: 9
description: Learn how to use Postman to organize, test, and document API requests, and how to keep a collection safe in a Docs-as-Code workflow.
---

# Postman

> **Lesson level:** Beginner
>
> **Time to complete:** 35–45 minutes
>
> **Prerequisites:** Complete the HTTP, REST, JSON, Examples, and OpenAPI lessons.

---

## Learning objectives

After you complete this lesson, you will be able to:

- Explain what Postman is and how it helps with API documentation.
- Describe collections, requests, environments, and variables.
- Create a collection for the Release Management API.
- Protect access tokens with environment variables.
- Write a simple test that checks a status code.
- Export a collection without secrets.
- Keep a Postman collection in a Docs-as-Code workflow.

---

## Why Postman matters for technical writers

Postman is an API client. You use it to send requests, read responses, and save the requests for later. Many developers use Postman to test an API before they write code.

Writers use Postman to check their examples. If a request in your documentation does not work in Postman, it is not ready to publish.

> **Documentation Manager's Tip**
>
> Test every example in Postman before you copy it into the documentation. A request that works in Postman is a good starting point for the example.

---

## Before you start

Make sure you have:

- Completed the OpenAPI lesson.
- The Postman desktop app or a Postman web account.
- The OpenAPI contract at `portfolio/api/release-management/openapi.yaml`.
- A test access token from your API team. Do not use a production token.

:::note

**For beginners**

A collection is a folder of saved requests. An environment is a set of values, such as a base URL, that the requests can use. Keep these two ideas separate. The collection describes the requests. The environment stores the values that change between servers.

:::

---

## Postman terms

| Term | Meaning |
|---|---|
| Collection | A saved group of requests, with shared settings |
| Request | One saved HTTP request, with a method, URL, headers, and body |
| Environment | A set of variables for one server, such as a test or production server |
| Variable | A named value, written as `{{variableName}}`, that a request reads at run time |
| Secret variable | A variable whose value is hidden in the interface |
| Test | A script that checks a response, such as the status code |
| Pre-request script | A script that runs before a request is sent |

---

## Create a collection for the Release Management API

**Step 1: Create a collection.**

In Postman, select **New**, then **Collection**. Name it `Release Management API`.

**Step 2: Set the collection base URL.**

Create an environment named `Release Management - Test`. Add a variable named `baseUrl`:

| Variable | Initial value | Current value |
|---|---|---|
| `baseUrl` | `https://api.release-management.test/v1` | `https://api.release-management.test/v1` |

The address comes from the `servers` section of the OpenAPI contract. It is a reserved test domain. A real environment would use the address that the API team provides.

**Step 3: Add the access token variable.**

Add a variable named `accessToken`. Mark it as a secret. Leave the value empty in any file that you export or commit.

**Step 4: Set authentication for the collection.**

In the collection settings, select the **Authorization** tab. Set the type to **Bearer Token**. Enter this value:

```text
{{accessToken}}
```

**Result:** Every request in the collection uses the bearer token. You do not need to add the header to each request.

:::warning

Do not type a real token into the variable's current value if you plan to export the collection. Store the real token only in your local environment, and clear it before you export.

:::

---

## Add requests

Create one request for each operation that you want to test. Use the base URL variable so that the URL works in any environment.

| Request name | Method | URL |
|---|---|---|
| List releases | `GET` | `{{baseUrl}}/releases?status=released&page=1&pageSize=20` |
| Get one release | `GET` | `{{baseUrl}}/releases/rel_2026_08` |
| Create a release | `POST` | `{{baseUrl}}/releases` |
| Update a release | `PUT` | `{{baseUrl}}/releases/rel_2026_09` |
| Delete a release | `DELETE` | `{{baseUrl}}/releases/rel_2026_09` |

For `POST` and `PUT`, add a JSON body. Use the same values as the Examples lesson, such as `version` `2026.09`.

:::tip

Give each request a name that matches the OpenAPI `summary`. Readers can then find the request in Postman and in the reference.

:::

---

## How-to: Write a status code test

**Goal:** Check that `GET /releases/{releaseId}` returns `200 OK` and a release with the expected ID.

Add this script on the **Tests** tab of the request:

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Returns release rel_2026_08", function () {
  const body = pm.response.json();
  pm.expect(body.id).to.eql("rel_2026_08");
});
```

**Result:** When you send the request, the **Test Results** tab shows two passing tests. If the server returns a different status code, the first test fails.

:::note

The tests check the response against the contract's documented behavior. If a test fails and the contract says otherwise, check the API team's change log before you change the documentation.

:::

---

## How-to: Document an example from a Postman request

**Goal:** Turn a working request into a documentation example.

**Step 1: Send the request.**

Select **Send**. Confirm the status code and the body.

**Step 2: Remove the secret.**

Check the request for a real token. The bearer token should show `{{accessToken}}`, not a real value.

**Step 3: Copy the request.**

Copy the method, URL with a placeholder, and the body. Replace the base URL with the documented address if the reader needs it.

**Step 4: Paste the example into the Markdown page.**

Use the format from the Examples lesson.

Markdown source:

````markdown
### Example: Get one release

```bash
curl --request GET "https://api.release-management.test/v1/releases/rel_2026_08" \
  --header "Authorization: Bearer <access-token>"
```
````

**Result:** The documentation example matches the working request. It does not contain a real token.

---

## Export a collection safely

You can store a collection in Git so that the team can share it. Export the collection without secret values, and review the file before you commit it.

**Step 1: Check the variables.**

Open the environment and confirm that `accessToken` has no value.

**Step 2: Export the collection.**

Select the collection, then **Export**. Choose **Collection v2.1**, and save the file.

**Step 3: Review the file.**

Open the file in Visual Studio Code. Search for the word `Bearer`, and check that the value is `{{accessToken}}`. Search for the token value you used in testing. The search must return no results.

**Step 4: Store the file in the repository.**

Save the file in a folder such as `portfolio/api/release-management/postman/`. Commit the file in a pull request.

:::important

Search the exported file for real tokens before you commit it. Git keeps the history of every commit. A token that you commit, even once, must be revoked. Deleting the file later does not remove it from the history.

:::

---

## Docs-as-Code workflow for a Postman collection

Use this workflow when the API changes:

```text
API change
    ↓
Update the OpenAPI contract
    ↓
Update the Postman requests
    ↓
Run the tests
    ↓
Check for secrets
    ↓
Export the collection
    ↓
Review in a pull request
```

Use a branch for the change:

```bash
git switch -c docs/postman-release-collection
```

Commit only the exported collection and the related Markdown pages:

```bash
git add portfolio/api/release-management/postman/
git commit -m "Add Postman collection for Release Management API"
git push -u origin docs/postman-release-collection
```

:::note

Keep the collection and the OpenAPI contract in the same change. When the contract changes, the collection must change too. A collection that does not match the contract is a documentation problem.

:::

---

## Common mistakes

| Mistake | What happens | How to fix it |
|---|---|---|
| A real token is saved in the collection or environment. | The token is exposed when the file is shared. | Use `{{accessToken}}`. Clear the value before you export. |
| The URL is hard-coded instead of using `{{baseUrl}}`. | The collection works on one server only. | Use the base URL variable. |
| The collection has no tests. | Broken requests go unnoticed. | Add a status code test to each request. |
| The collection is not updated when the contract changes. | Examples and requests disagree. | Update the collection in the same change as the contract. |
| The exported file is committed without a search for secrets. | A token is stored in Git history. | Search the file first. Revoke any token that was committed. |
| Request names do not match the reference. | Readers cannot connect the request to the documentation. | Use the same names as the OpenAPI `summary` values. |

---

## Summary

In this lesson, you learned that:

- Postman sends requests, shows responses, and saves requests in collections.
- Environments store values that change between servers.
- Variables keep tokens and base URLs out of individual requests.
- Tests check that a response matches the expected status code and body.
- A working Postman request is a good starting point for a documentation example.
- Export a collection without secrets, and search the file before you commit it.

The aim is simple:

**Keep your requests, tests, and documentation examples in step with the contract, and keep secrets out of the repository.**

---

## Practice exercise

Use the Release Management API contract in this repository.

1. Create a collection named `Release Management API` in Postman.
2. Create an environment with a `baseUrl` variable and a secret `accessToken` variable.
3. Add requests for list, get, create, update, and delete. Use `{{baseUrl}}` in each URL.
4. Add a status code test to the get request.
5. Export the collection. Search the exported file for any token value, and confirm that the search returns no results.
6. Compare your request names with the `summary` values in `openapi.yaml`. Rename any request that does not match.

---

## Key terms

| Term | Definition |
|---|---|
| Postman | An API client that sends requests and saves them for reuse. |
| Collection | A saved group of requests with shared settings. |
| Environment | A set of variables for one server. |
| Variable | A named value that a request reads at run time, written as `{{variableName}}`. |
| Secret | A variable whose value is hidden and must not be committed to Git. |
| Test | A script that checks the response from a request. |
| Bearer token | A token sent in the `Authorization` header to prove the client can use the API. |
| Export | A saved copy of a collection, which can be shared as a file. |

---

## Knowledge check

<details>
<summary><strong>1. What is a Postman collection?</strong></summary>

A collection is a saved group of requests. It can also hold shared settings, such as authentication.

</details>

<details>
<summary><strong>2. What is the difference between a collection and an environment?</strong></summary>

A collection describes the requests. An environment stores the values that change between servers, such as the base URL.

</details>

<details>
<summary><strong>3. Why use the `{{baseUrl}}` variable instead of a hard-coded URL?</strong></summary>

The variable lets the same requests run against different servers. You change the environment, not each request.

</details>

<details>
<summary><strong>4. Why should a token be a secret variable?</strong></summary>

A secret variable hides its value in the interface. It also helps you remember not to export the value.

</details>

<details>
<summary><strong>5. What does a status code test check?</strong></summary>

It checks that the response has the expected HTTP status code, such as `200 OK`.

</details>

<details>
<summary><strong>6. What should you do before you export a collection?</strong></summary>

Clear the token value, and check that the environment has no real secrets. Then export the collection and review the file.

</details>

<details>
<summary><strong>7. Why must you search the exported file for tokens before you commit it?</strong></summary>

Git keeps the history of every commit. A token that is committed, even for a moment, remains in the history. It must be revoked.

</details>

<details>
<summary><strong>8. Why should a collection change in the same pull request as the contract?</strong></summary>

When the contract changes, the requests and tests must change too. Keeping them in one change prevents the collection and the documentation from disagreeing.

</details>

<details>
<summary><strong>9. How can a working Postman request help the documentation?</strong></summary>

A working request is a tested starting point for an example. You copy the method, URL, and body, and replace the token with a placeholder.

</details>

<details>
<summary><strong>10. What is the main goal of a Postman collection in a Docs-as-Code workflow?</strong></summary>

The goal is to keep tested, shareable requests in step with the contract, without storing secrets in the repository.

</details>

---

## Next lesson

Continue to **Authentication and Authorization**. You will learn how tokens, scopes, and permissions control access to an API.
