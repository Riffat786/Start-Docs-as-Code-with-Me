# Install Docker Desktop

> **Lesson level:** Beginner
>
> **Time to complete:** 30–45 minutes
>
> **Prerequisites:** A Windows 10 or Windows 11 computer with administrator access available if required

---
## Learning objectives

After you complete this lesson, you will be able to:

- Understand what Docker is.
- Understand why Docker can be useful for Technical Writers.
- Understand what a container is.
- Check if your computer meets the Docker Desktop requirements.
- Check whether WSL 2 is available.
- Install Docker Desktop.
- Start Docker Desktop.
- Verify that Docker is working correctly.
- Run your first Docker container.
- Fix common installation problems.

---
## What is Docker?

Docker is a platform that allows applications and their dependencies to run in isolated environments called **containers**.

A container packages the things an application needs to run. This can include the application itself, libraries, configuration, and other dependencies.

For a Technical Writer, Docker may initially seem like a developer tool.

However, Docker can become useful when documentation depends on a particular development environment.

For example, a documentation project might use:

- A static site generator
- A specific version of Node.js
- Python
- Documentation build tools
- API tools
- Testing tools

Instead of installing every dependency directly on your computer, a project can use a container to provide a consistent environment.

---

## Why use Docker for documentation?

Modern documentation projects often behave more like software projects than traditional document repositories.

A documentation team may need to:

- Build a documentation website.
- Test Markdown files.
- Run documentation tools.
- Generate API documentation.
- Run automated checks.
- Build the same documentation locally and in CI/CD.
- Reproduce a specific documentation environment.

Docker can help make these environments more predictable.

For example:

```text
Documentation Project
        │
        ▼
    Dockerfile
        │
        ▼
     Docker Image
        │
        ▼
     Container
        │
        ▼
Documentation Build
```

The same container configuration can then be used by different people or automated systems.

> **Documentation Manager Tip**
>
> You do not need to become a Docker expert to work effectively with Docs-as-Code.
>
> Start by understanding what Docker does and how to use an existing container. You can learn the more advanced concepts when your documentation projects require them.

---

## What is a container?

A container is an isolated environment in which an application can run.

You can think of a container as a small, self-contained workspace for an application.

For example:

```text
Your Computer
      │
      ▼
Docker Desktop
      │
      ▼
┌─────────────────────┐
│ Documentation       │
│ Build Container     │
│                     │
│ Node.js             │
│ Build tools         │
│ Documentation files │
└─────────────────────┘
```

The container uses resources from your computer but keeps the application's environment separate from the rest of your system.

---

## Image and container

You will hear two terms frequently when working with Docker:

| Term | Meaning |
| --- | --- |
| Image | A package containing the files and configuration needed to create a container. |
| Container | A running instance of an image. |

A simple way to remember the difference is:

```text
Image
  │
  │ creates
  ▼
Container
```

You can create multiple containers from the same image.

---
