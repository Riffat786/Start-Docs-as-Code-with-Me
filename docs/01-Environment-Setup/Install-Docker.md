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

:::tip

**Documentation Manager Tip**

You do not need to become a Docker expert to work effectively with Docs-as-Code.

Start by understanding what Docker does and how to use an existing container. You can learn the more advanced concepts when your documentation projects require them.

:::

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
## How Docker fits into the Docs-as-Code workflow

Docker is another tool in the documentation toolchain.

A typical workflow might look like this:

```text
Technical Writer
       │
       ▼
     Cursor
       │
       ▼
    Markdown
       │
       ▼
      Git
       │
       ▼
    GitHub
       │
       ▼
 GitHub Actions
       │
       ▼
     Docker
       │
       ▼
 Documentation Build
       │
       ▼
 Published Website
```

You may not use Docker for every documentation project.

However, understanding Docker makes it easier to work with development teams and documentation projects that use containers.

---

## Before you begin

You need:

| Requirement | Required |
| --- | --- |
| Windows computer | Yes |
| Internet connection | Yes |
| 64-bit processor | Yes |
| At least 8 GB RAM | Yes for the current Windows WSL 2 requirements |
| Hardware virtualization | Yes |
| WSL 2 | Yes for the WSL 2 backend |
| Administrator access | May be required |
| Docker account | May be required depending on use |

Docker Desktop currently supports Windows 10 64-bit version 22H2 (build 19045) for supported Enterprise, Pro, or Education editions, and Windows 11 64-bit version 23H2 (build 22631) or later for those editions. Docker also requires WSL 2 version 2.1.5 or later when using the WSL 2 backend, along with a 64-bit processor supporting SLAT, at least 8 GB RAM, and hardware virtualization enabled.

:::info

Docker recommends the **per-user installation** for most Windows users. This installation mode does not normally require administrator privileges to install or update Docker Desktop. Some system-level operations can still require administrator access.

:::important

Docker Desktop licensing depends on how it is used.

Docker states that Docker Desktop is free for personal use, education, non-commercial open source projects, and small businesses that meet its stated requirements. Larger organizations and some commercial or government use cases require a paid subscription.

If you are installing Docker on a company computer, check your organization's software licensing and security policies before you continue.

:::

---


## Step 1 — Check your Windows version

Before installing Docker Desktop, check your Windows version.

Press:

**Windows + R**

Type:

```text
winver
```

Select **OK**.

Windows displays your version and build number.

**Expected result**

You can see your Windows edition, version, and build number.

Compare the information with the current Docker Desktop system requirements before continuing.

---

## Step 2 — Check your system type

Docker Desktop requires a 64-bit system for the Windows configurations covered in this lesson.

Open:

**Settings → System → About**

Look for:

**System type**

You should see information indicating that your system is 64-bit.

**Expected result**

Your computer is using a supported 64-bit architecture.

---

## Step 3 — Check your RAM

Docker recommends at least **8 GB of RAM** for the current Windows WSL 2 requirements.

To check your memory:

1. Press **Ctrl + Shift + Esc**.
2. Open **Task Manager**.
3. Select **Performance**.
4. Select **Memory**.

Check the amount of installed memory.

**Expected result**

Your computer has at least 8 GB of RAM.

:::note

Docker can use significant system resources when building images or running containers.

If your computer has limited memory, you may notice that other applications become slower while Docker is running.

:::

---

## Step 4 — Check hardware virtualization

Docker Desktop requires hardware virtualization for the Windows configurations described by Docker. 

Open:

**Task Manager → Performance → CPU**

Look for:

**Virtualization**

You should see:

```text
Virtualization: Enabled
```

**Expected result**

Hardware virtualization is enabled.

If it says **Disabled**, you may need to enable virtualization in your computer's BIOS or UEFI settings.

:::warning

BIOS and UEFI settings vary between computer manufacturers.

If this is a company-managed computer, contact your IT team before changing virtualization settings.

:::

---

## Step 5 — Check WSL

Docker Desktop commonly uses **Windows Subsystem for Linux 2 (WSL 2)** as its backend on Windows.

WSL 2 provides a Linux environment that Docker Desktop can use to run Linux containers. Docker currently requires WSL 2 version 2.1.5 or later for this backend.

Open **PowerShell**.

Run:

```powershell
wsl --version
```

**Expected result**

You should see WSL version information.

For example:

```text
WSL version: 2.x.x
```

The exact version number may be different on your computer.

---

## Step 6 — Install or update WSL

If WSL is not installed or needs to be updated, open **PowerShell as Administrator**.

Run:

```powershell
wsl --install
```

If WSL is already installed, you can update it with:

```powershell
wsl --update
```

Restart your computer if Windows asks you to.

Docker's current documentation recommends keeping WSL up to date and requires at least version 2.1.5 for Docker Desktop's WSL 2 backend.

### Verify WSL again

After restarting, open PowerShell and run:

```powershell
wsl --version
```

### Expected result

WSL displays its version information.

---

## Step 7 — Download Docker Desktop

Open your web browser.

Go to the official Docker website:

[Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

Download the Windows version that matches your computer.

Docker currently provides Windows x86_64 and ARM options.

> **Best Practice**
>
> Download Docker Desktop from the official Docker website.
>
> Do not download Docker installers from third-party software websites.

---

## Step 8 — Install Docker Desktop

After the download finishes:

1. Open the Docker Desktop installer.
2. Follow the installation wizard.
3. Select the installation options provided.
4. Use the **WSL 2** backend when prompted if that is the configuration you intend to use.
5. Continue with the installation.
6. Restart your computer if Windows asks you to.

Docker's current Windows installer supports a per-user installation mode, which is recommended for most users. The installer can also be configured for an all-users installation when required.

### Expected result

The Docker Desktop installation completes successfully.

---

## Step 9 — Start Docker Desktop

Open the Windows Start menu.

Search for:

```text
Docker Desktop
```

Select **Docker Desktop**.

The application starts.

The first launch may display the Docker Subscription Service Agreement.

Read the information and select **Accept** if you agree to the terms.

Docker Desktop will not run until the agreement is accepted. 

**Expected result**

The Docker Desktop application opens.

You should eventually see the Docker Desktop dashboard.

---

## Step 10 — Check the Docker status

Look at the Docker Desktop application.

Docker should indicate that it is running.

You may also see the Docker whale icon in the Windows notification area.

**Expected result**

Docker Desktop is running without an error message.

:::note

The Docker Desktop interface can change between releases.

Do not worry if your screen looks slightly different from the examples in this lesson. Look for the same basic information: Docker Desktop is running and ready to use.

:::

---

## Step 11 — Open a terminal

Open PowerShell or Command Prompt.

Run:

```powershell
docker --version
```

**Expected result**

Docker returns a version number.

For example:

```text
Docker version xx.x.x
```

The exact version may be different from the example.

---

## Step 12 — Check the Docker installation

Now run:

```powershell
docker info
```

Docker displays information about the Docker environment.

You may see information about:

- Containers
- Images
- Server
- Storage
- CPU
- Memory
- Docker Engine

**Expected result**

Docker returns information about the Docker environment without a connection error.

If Docker reports that it cannot connect to the Docker daemon, make sure Docker Desktop is running.

---

## Step 13 — Run your first container

Now you will run a simple Docker container.

Run:

```powershell
docker run hello-world
```

Docker checks whether the `hello-world` image is available locally.

If it is not available, Docker downloads the image and creates a container from it.

**Expected result**

You see a message explaining that Docker is working correctly.

The exact output may vary.

The important part is that Docker successfully:

1. Found or downloaded an image.
2. Created a container.
3. Started the container.
4. Ran the application.
5. Returned the result to your terminal.

Congratulations. You have run your first Docker container.

---

## What happened when you ran the command?

You ran:

```powershell
docker run hello-world
```

The command looks simple, but several things happened.

```text
docker run
    │
    ▼
Check for image
    │
    ├── Image exists
    │
    └── Image does not exist
             │
             ▼
        Download image
             │
             ▼
       Create container
             │
             ▼
        Run container
             │
             ▼
        Show output
```

You do not need to memorise this process yet.

The important concept is:

**An image is used to create a container.**

---

## Step 14 — Check your containers

Run:

```powershell
docker ps
```

This command shows currently running containers.

Because the `hello-world` container finishes after displaying its message, you may not see it in the output.

To see containers that have stopped, run:

```powershell
docker ps -a
```

**Expected result**

You should see the `hello-world` container in the list.

---

## Step 15 — Check your Docker images

Run:

```powershell
docker images
```

You should see the `hello-world` image.

For example:

```text
REPOSITORY    TAG       IMAGE ID       CREATED
hello-world   latest    xxxxxxxxxxxx   ...
```

The exact values will be different.

**Expected result**

The `hello-world` image appears in the list.

---

## Docker and documentation projects

You have now confirmed that Docker works.

You may not use Docker immediately in your documentation work.

That is normal.

For example, a documentation project may eventually provide a `Dockerfile` that defines the environment required to build the documentation.

You might see something like:

```text
documentation-project/
│
├── docs/
├── static/
├── Dockerfile
├── package.json
└── README.md
```

The `Dockerfile` describes how the container environment should be created.

You can then use Docker to build and run that environment.

---

## Dockerfile

A `Dockerfile` is a text file containing instructions for building a Docker image.

A very simple example might look like this:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

Do not worry about understanding every line yet.

The important point is that the Dockerfile defines the environment.

For example:

- `FROM` specifies a starting image.
- `WORKDIR` defines the working directory.
- `COPY` copies files into the image.
- `RUN` runs a command while building the image.
- `CMD` specifies the default command when the container starts.

You will work with Dockerfiles in more detail when you need them.

> **Best Practice**
>
> Do not create a Dockerfile just because you have installed Docker.
>
> Use Docker when your project has a clear need for it.

---

## Common installation problems

<details>
<summary><strong>1. Docker Desktop does not start</strong></summary>

**Cause**

Docker Desktop may not have started correctly, or your computer may not meet the required virtualization or WSL requirements.

**Solution**

Try the following:

1. Restart Windows.
2. Start Docker Desktop from the Start menu.
3. Check that hardware virtualization is enabled.
4. Check your WSL version:

```powershell
wsl --version
```

5. Update WSL:

```powershell
wsl --update
```

If Docker still does not start, check the current Docker Desktop system requirements and troubleshooting documentation.

</details>

---

<details>
<summary><strong>2. The `docker` command is not recognized</strong></summary>

**Cause**

Docker Desktop may not be installed correctly, or the terminal was opened before Docker was installed.

**Solution**

Try the following:

1. Make sure Docker Desktop is installed.
2. Start Docker Desktop.
3. Close your current terminal.
4. Open a new PowerShell window.
5. Run:

```powershell
docker --version
```

If the command is still not available, restart Windows and try again.

</details>

---

<details>
<summary><strong>3. Docker cannot connect to the Docker daemon</strong></summary>

**Cause**

Docker Desktop is not running.

**Solution**

Start Docker Desktop.

Wait until Docker reports that it is running.

Then run:

```powershell
docker info
```

If the command returns Docker environment information, try your original Docker command again.

</details>

---

<details>
<summary><strong>4. WSL is not installed or the WSL version is too old</strong></summary>

**Cause**

Docker Desktop is using the WSL 2 backend, but WSL is missing or does not meet the required version.

**Solution**

Open PowerShell as Administrator.

Run:

```powershell
wsl --install
```

If WSL is already installed, run:

```powershell
wsl --update
```

Restart Windows if prompted.

Then verify the version:

```powershell
wsl --version
```

Docker currently requires WSL 2 version 2.1.5 or later for the WSL 2 backend. 

</details>

---

<details>
<summary><strong>5. Docker says virtualization is disabled</strong></summary>

**Cause**

Hardware virtualization is disabled in your computer's BIOS or UEFI settings.

**Solution**

First check:

**Task Manager → Performance → CPU**

Look for:

```text
Virtualization
```

If it shows:

```text
Disabled
```

you may need to enable virtualization in BIOS or UEFI.

The exact steps depend on your computer manufacturer.

If this is a company-managed computer, contact your IT team before changing BIOS or UEFI settings.

</details>

---

## Best practices

When using Docker as part of a documentation workflow:

- Keep Docker Desktop updated.
- Keep WSL updated when using the WSL 2 backend.
- Use the official Docker documentation when troubleshooting.
- Do not install Docker components from untrusted sources.
- Understand why a project uses Docker before changing its configuration.
- Do not modify a project's Dockerfile without understanding the effect of the change.
- Follow your organization's security policies.
- Check Docker Desktop licensing requirements when using it for work.
- Do not assume that every documentation project needs Docker.
- Keep container configuration under version control when it is part of the project.

> **Documentation Manager Tip**
>
> Docker is another tool in the documentation toolchain. You do not need to become a container specialist to use it effectively.
>
> Start by understanding the problem Docker solves: **it helps teams create a consistent environment for running and building software.**
>
> Once you understand that, the commands and configuration files become much easier to work with.

---

## Key terms

| Term | Definition |
| --- | --- |
| Docker | A platform for building, running, and managing applications in containers. |
| Docker Desktop | The desktop application that provides Docker tools on Windows, macOS, and Linux. |
| Container | A running, isolated environment created from a Docker image. |
| Image | A package used to create containers. |
| Dockerfile | A text file containing instructions for building a Docker image. |
| Docker Engine | The technology that runs and manages Docker containers. |
| Docker CLI | The command-line interface used to interact with Docker. |
| WSL 2 | Windows Subsystem for Linux 2, which provides a Linux environment used by Docker Desktop on Windows. |
| Registry | A service used to store and distribute container images. |
| Docker Hub | Docker's public registry for container images. |

---

## Summary

In this lesson, you learned how to:

- Understand what Docker is.
- Understand what containers and images are.
- Understand why Docker can be useful for documentation teams.
- Check your Windows version.
- Check your computer's hardware requirements.
- Check hardware virtualization.
- Check WSL.
- Install or update WSL.
- Download Docker Desktop.
- Install Docker Desktop.
- Start Docker Desktop.
- Verify the Docker installation.
- Run your first container.
- Check Docker images and containers.
- Troubleshoot common Docker installation problems.

You now have Docker installed and have successfully run your first container.

---

## Knowledge check

<details>
<summary><strong>1. What is Docker?</strong></summary>

Docker is a platform that allows applications to be built and run in isolated environments called containers.

</details>

<details>
<summary><strong>2. What is a container?</strong></summary>

A container is a running, isolated environment created from a Docker image.

</details>

<details>
<summary><strong>3. What is a Docker image?</strong></summary>

A Docker image is a package containing the files and configuration needed to create a container.

</details>

<details>
<summary><strong>4. What command checks the Docker version?</strong></summary>

```powershell
docker --version
```

</details>

<details>
<summary><strong>5. What command checks the Docker environment?</strong></summary>

```powershell
docker info
```

</details>

<details>
<summary><strong>6. What command runs the Docker Hello World container?</strong></summary>

```powershell
docker run hello-world
```

</details>

<details>
<summary><strong>7. What is the difference between an image and a container?</strong></summary>

An image is used to create a container.

A container is a running instance of an image.

</details>

<details>
<summary><strong>8. Why can Docker be useful for documentation projects?</strong></summary>

Docker can provide a consistent environment for building and running documentation tools and websites.

</details>

<details>
<summary><strong>9. Do all documentation projects need Docker?</strong></summary>

No.

Docker is useful when a project needs a consistent or isolated environment. You should use it when there is a clear project requirement.

</details>

---

## Practice exercise

Complete the following tasks:

1. Check your Windows version.
2. Check your system type.
3. Check your installed RAM.
4. Check whether hardware virtualization is enabled.
5. Check your WSL version.
6. Update WSL if necessary.
7. Download Docker Desktop.
8. Install Docker Desktop.
9. Start Docker Desktop.
10. Open PowerShell.
11. Run:

```powershell
docker --version
```

12. Run:

```powershell
docker info
```

13. Run your first container:

```powershell
docker run hello-world
```

14. Check the container:

```powershell
docker ps -a
```

15. Check the image:

```powershell
docker images
```

---

## Optional exercise

If you want to explore Docker a little further, run:

```powershell
docker run -it ubuntu
```

Docker downloads the Ubuntu image if it is not already available and starts a container.

You should see a shell prompt inside the container.

Try:

```bash
pwd
```

Then:

```bash
ls
```

When you are finished, type:

```bash
exit
```

This exercise is optional.

The purpose is simply to see that a container can provide a separate environment from your Windows command prompt.

---

## Next lesson

**Install Claude Code**

In the next lesson, you will install Claude Code and learn how an AI coding assistant can be used from your documentation project.

You will also begin to see how the tools introduced in the Environment Setup module work together:

```text
Git
  +
GitHub
  +
VS Code
  +
Cursor
  +
Node.js
  +
Python
  +
Docker
  +
Claude Code
       │
       ▼
Docs-as-Code Workflow
```

The goal is not to learn every tool at once.

The goal is to build a working environment that you can use as you progress through the rest of the learning journey.