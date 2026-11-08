---
title: Automating Documentation with GitHub Actions
sidebar_position: 1
description: Learn how to use GitHub Actions to automate documentation workflows and quality checks.
---

# Automating Documentation with GitHub Actions

> **Estimated reading time:** 24 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what GitHub Actions are and why they matter.
- Understand workflows and triggers in GitHub Actions.
- Create and run basic GitHub Actions workflows.
- Automate documentation builds.
- Run quality checks on documentation.
- Deploy documentation automatically.
- Use Actions for team collaboration.
- Apply Actions in Docs-as-Code workflows.

---

## What Are GitHub Actions?

GitHub Actions are automated workflows that run when certain events happen in your repository. Think of them as robots that do repetitive tasks automatically.

### Common Documentation Tasks GitHub Actions Can Do

- **Build documentation** - Convert markdown to HTML automatically
- **Check for errors** - Find broken links, typos, formatting issues
- **Run tests** - Verify code examples actually work
- **Deploy documentation** - Upload built docs to website automatically
- **Quality checks** - Lint markdown, check spelling
- **Notify team** - Post updates to Slack or email
- **Create previews** - Build temporary versions of docs for pull requests

### Why Use GitHub Actions?

**Without GitHub Actions:**

```
Pull Request → Manual build → Manual testing → Manual deploy → Manual announcement
```

Takes time. Error-prone. Manual steps.

**With GitHub Actions:**

```
Pull Request → Automatic build → Automatic testing → Automatic deploy → Automatic notification
```

Fast. Reliable. No manual steps. Less room for mistakes.

:::important

GitHub Actions save time by automating repetitive tasks. What takes 30 minutes manually takes seconds automatically.

:::

---

## Before You Start

Make sure you have:

- A GitHub repository with documentation
- Understanding of Git and pull requests
- Basic knowledge of YAML format (simple syntax)
- A GitHub account with repository access

:::note

**For Beginners**

GitHub Actions use simple configuration files. You don't need to be a programmer. If you can edit markdown, you can set up GitHub Actions.

:::

---

## Understanding GitHub Actions Concepts

### Workflows

A workflow is a file that describes what to do and when to do it.

**Example:**

"When someone opens a pull request with changes to docs, run a spell check and link checker."

### Events

Events are triggers. They tell the workflow when to run.

**Common events:**

- `push` - Someone pushes code
- `pull_request` - Someone opens a pull request
- `schedule` - Runs on a schedule (daily, weekly)
- `workflow_dispatch` - Manual trigger (you run it)

### Jobs

Jobs are groups of steps that run together.

**Example job:** "Build documentation"

### Steps

Steps are individual actions within a job.

**Example steps:**

1. Checkout code
2. Install dependencies
3. Build docs
4. Run tests

### Actions

Actions are reusable programs that do specific tasks.

**Examples:**

- `actions/checkout@v3` - Downloads your code
- `actions/setup-node@v3` - Installs Node.js
- Custom actions from GitHub Marketplace

:::tip

Think of it as: **Workflows** contain **Jobs** contain **Steps** that use **Actions**.

:::

---

## Creating Your First Workflow

### Workflow File Location

Workflows live in a special folder:

```
your-docs-repo/
├── .github/
│   └── workflows/
│       └── build-docs.yml
├── docs/
└── README.md
```

The `.github/workflows/` folder is required. Files must end with `.yml` or `.yaml`.

### Basic Workflow Structure

```yaml
name: Build Documentation

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Run build
        run: npm run build
```

**Breaking it down:**

- `name:` - What to call this workflow (appears in GitHub)
- `on:` - When to run (triggers)
- `jobs:` - What to do
- `runs-on:` - What type of computer to use
- `steps:` - Individual actions to perform

### Creating a Workflow File

**Step 1: Create file**

Create `.github/workflows/build-docs.yml` in your repository.

**Step 2: Add basic content**

```yaml
name: Build Documentation

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build
        run: |
          echo "Building documentation..."
          # Add your build command here
```

**Step 3: Commit and push**

```bash
git add .github/workflows/build-docs.yml
git commit -m "Add documentation build workflow"
git push origin main
```

**Step 4: Verify in GitHub**

Go to your repository → Actions tab. You should see your workflow running.

:::tip

Start simple. You can add more steps later as you learn.

:::

---

## Common Documentation Workflows

### Workflow 1: Check for Broken Links

Detect broken links automatically on pull requests.

**File:** `.github/workflows/check-links.yml`

```yaml
name: Check Links

on:
  pull_request:
    branches: [main]

jobs:
  linkChecker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Check links
        uses: gaurav-nelson/github-action-markdown-link-check@v1
        with:
          use-quiet-mode: 'yes'
          max-depth: 2
          folder-path: 'docs'
```

**What it does:**

- Runs when pull request is opened
- Checks all markdown links in `docs/` folder
- Fails if broken links found
- Shows results in pull request

### Workflow 2: Build and Deploy Documentation

Build documentation and deploy to website automatically.

**File:** `.github/workflows/build-deploy.yml`

```yaml
name: Build and Deploy Docs

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build documentation
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

**What it does:**

- Runs on every push to main
- Installs Node.js and dependencies
- Builds documentation
- Automatically uploads to GitHub Pages
- Documentation is live seconds after push

### Workflow 3: Spell Check on Pull Requests

Check spelling in all documentation files.

**File:** `.github/workflows/spell-check.yml`

```yaml
name: Spell Check

on:
  pull_request:
    branches: [main]

jobs:
  spellcheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Check spelling
        uses: nosborn/github-action-markdown-cli@v3.3.0
        with:
          files: docs
          config_file: '.markdownlint.json'
```

**What it does:**

- Runs on every pull request
- Checks spelling and formatting
- Reports errors in pull request
- Prevents bad documentation from merging

### Workflow 4: Scheduled Documentation Audit

Run checks on a schedule, not just on push/PR.

**File:** `.github/workflows/scheduled-audit.yml`

```yaml
name: Daily Documentation Audit

on:
  schedule:
    - cron: '0 9 * * 1'  # Every Monday at 9am UTC

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run link check
        uses: gaurav-nelson/github-action-markdown-link-check@v1
        with:
          folder-path: 'docs'

      - name: Report results
        if: failure()
        run: echo "Documentation audit found issues"
```

**What it does:**

- Runs automatically every Monday at 9 AM
- Checks all links
- Sends notification if issues found
- No manual trigger needed

### Workflow 5: Notification to Team

Send Slack message when documentation is deployed.

**File:** `.github/workflows/notify.yml`

```yaml
name: Notify Team

on:
  push:
    branches: [main]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Send Slack notification
        uses: slackapi/slack-github-action@v1.24.0
        with:
          webhook-url: ${{ secrets.SLACK_WEBHOOK }}
          payload: |
            {
              "text": "Documentation updated from commit ${{ github.sha }}"
            }
```

**What it does:**

- Notifies team on Slack when docs change
- Shows which commit triggered the update
- Team stays informed without checking GitHub

:::note

**Documentation Manager's Tip**

Set up a workflow that:
1. Checks documentation quality on every PR
2. Automatically deploys to production when merged to main
3. Notifies team when deployed
4. Runs audits weekly

This ensures quality and keeps team informed.

:::

---

## Using Workflow Status Badges

Show your workflow status on the README.

**Add this to README.md:**

```markdown
[![Build Documentation](https://github.com/your-org/your-repo/actions/workflows/build-docs.yml/badge.svg)](https://github.com/your-org/your-repo/actions)
```

Displays green checkmark if workflow passes, red X if fails. Shows at a glance if docs build successfully.

---

## Secrets in GitHub Actions

Workflows sometimes need private information (API keys, passwords).

### Adding a Secret

1. Go to repository → Settings → Secrets
2. Click "New repository secret"
3. Name: `SLACK_WEBHOOK`
4. Value: Your actual webhook URL
5. Click "Add secret"

### Using Secret in Workflow

```yaml
- name: Use secret
  run: echo "Using ${{ secrets.SLACK_WEBHOOK }}"
```

GitHub automatically hides the actual value in logs.

:::warning

Never put secrets directly in workflow files. Always use the Secrets feature.

:::

---

## Running Workflows Manually

Trigger a workflow without waiting for push or schedule.

**In workflow file:**

```yaml
on:
  workflow_dispatch:
```

**Then:**

1. Go to Actions tab
2. Click workflow name
3. Click "Run workflow"
4. Workflow runs immediately

Useful for testing or running audits anytime.

---

## Viewing Workflow Results

### In GitHub Web Interface

1. Go to repository → Actions tab
2. Click workflow name
3. Click specific run
4. See full details and logs

### Understanding Results

- **Green checkmark** ✓ - Workflow succeeded
- **Red X** ✗ - Workflow failed
- **Yellow circle** ⊙ - Workflow running

Click to see details and error messages.

### In Pull Requests

Workflow results appear automatically on pull requests:

```
✓ Build Documentation succeeded
✓ Check Links succeeded
✗ Spell Check failed - 3 errors found
```

Shows which checks passed/failed before merging.

:::important

Always review workflow results before merging pull requests. Fix any failures.

:::

---

## Best Practices

### Start Simple

Don't try complex workflows first. Begin with:

1. A basic build workflow
2. Add link checking
3. Add spell checking
4. Add deployment

Build up gradually.

### Monitor Workflow Performance

Workflows have time limits:

- Free GitHub accounts: 2,000 minutes per month
- Paid accounts: More minutes included

Keep workflows efficient to stay within limits.

### Use Marketplace Actions

Don't write code. Use existing actions from GitHub Marketplace:

1. Go to github.com/marketplace?type=actions
2. Search for what you need
3. Copy the action name
4. Add to your workflow

Thousands of pre-built actions exist.

### Test Workflows Locally

Before deploying to production, test in a feature branch:

1. Create `.github/workflows/test.yml` with your workflow
2. Push to feature branch
3. Verify it works
4. Merge to main when confident

### Document Your Workflows

Add comments to your workflow files:

```yaml
name: Build Documentation

# Runs on every push to main and every pull request
# Builds docs and checks for broken links
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Download the code from the repository
      - uses: actions/checkout@v3
```

Future you (or teammates) will thank you.

---

## Troubleshooting Workflow Failures

### Workflow Stuck Running

**Problem:** Workflow shows "running" for hours.

**Solution:**
1. Go to Actions tab
2. Click the running workflow
3. Click "Cancel workflow"
4. Check logs to find issue

### Build Fails but Works Locally

**Problem:** Workflow fails but `npm run build` works on your computer.

**Solution:**

Check differences:

- Different Node versions?
- Missing environment variables?
- Path issues?

Add debugging:

```yaml
- name: Debug info
  run: |
    node --version
    npm --version
    ls -la docs/
```

### Secrets Not Working

**Problem:** Workflow fails with "permission denied" or "not found"

**Solution:**

1. Verify secret name matches exactly
2. Use `${{ secrets.SECRET_NAME }}`
3. Make sure secret is set in repository settings
4. Secrets don't work in public repos the same way

### Actions Failing with Authentication Errors

**Problem:** Workflow can't access GitHub API

**Solution:**

Default `GITHUB_TOKEN` has limited permissions. Grant more:

```yaml
permissions:
  contents: read
  pull-requests: write
```

---

## Summary

In this lesson, you learned how to:

- Understand what GitHub Actions are and why they help.
- Understand workflows, jobs, steps, and actions.
- Create basic workflow files.
- Set up documentation builds.
- Run quality checks automatically.
- Deploy documentation.
- Use secrets securely.
- Monitor and troubleshoot workflows.

GitHub Actions eliminate manual, repetitive tasks. Your documentation stays consistent and up-to-date automatically.

---

## Exercise

1. Create `.github/workflows/` directory in your repository
2. Create `.github/workflows/build.yml` with basic structure
3. Add a "Hello" step that prints a message
4. Commit and push to GitHub
5. Go to Actions tab and verify workflow ran
6. View the workflow logs
7. Modify workflow to run on pull requests
8. Create a test branch and open pull request
9. Watch workflow run on the pull request
10. Merge and verify workflow runs on main

---

## Common mistakes

<details>
<summary><strong>1. Workflow file in wrong location</strong></summary>

**Cause**

Created workflow file in wrong folder or misspelled folder name.

**Problem**

GitHub doesn't find the workflow. It never runs.

**Solution**

File must be in `.github/workflows/` directory (exactly).

Check folder structure:

```
.github/workflows/filename.yml
```

Not `github/workflows` or `workflows/` or `.github/workflow/`.

</details>

<details>
<summary><strong>2. YAML formatting errors</strong></summary>

**Cause**

Incorrect indentation or spacing in workflow file.

**Problem**

GitHub shows parsing error. Workflow won't run.

**Solution**

YAML is strict about spacing. Use 2 spaces for indentation, never tabs.

Use online YAML validator to check syntax.

</details>

<details>
<summary><strong>3. Using secrets insecurely</strong></summary>

**Cause**

Put API key directly in workflow file instead of using Secrets.

**Problem**

API key is visible in repository. Security breach.

**Solution**

Always use repository Secrets for sensitive data.

In workflow:

```yaml
run: curl -H "Authorization: Bearer ${{ secrets.API_KEY }}" ...
```

GitHub masks secret in logs.

</details>

<details>
<summary><strong>4. Workflow never triggers</strong></summary>

**Cause**

Specified wrong trigger event or branch name.

**Problem**

Workflow never runs automatically.

**Solution**

Double-check trigger configuration:

```yaml
on:
  push:
    branches:
      - main  # Branch name must match exactly
  pull_request:
    branches:
      - main
```

For manual trigger, use `workflow_dispatch`.

</details>

<details>
<summary><strong>5. Workflow runs but produces empty results</strong></summary>

**Cause**

Workflow runs but doesn't actually do the task (checks don't run, deploy doesn't happen).

**Problem**

Wasted compute time. Task not accomplished.

**Solution**

Check workflow logs for errors. Add debug steps:

```yaml
- name: Debug
  run: |
    echo "Working directory:"
    pwd
    echo "Files:"
    ls -la
```

See what's actually available to the workflow.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a GitHub Action?</strong></summary>

A GitHub Action is an automated workflow that runs when certain events happen in your repository. It performs tasks automatically without manual intervention.

</details>

<details>
<summary><strong>2. What's the difference between a workflow and a job?</strong></summary>

A **workflow** is the complete automation file that defines when and what to do. A **job** is a group of steps within the workflow that run together, usually on the same machine.

</details>

<details>
<summary><strong>3. Where must workflow files be stored?</strong></summary>

Workflow files must be in the `.github/workflows/` directory at the root of your repository. File names must end with `.yml` or `.yaml`.

</details>

<details>
<summary><strong>4. What are common triggers for documentation workflows?</strong></summary>

- `push` - When code is pushed
- `pull_request` - When pull request is opened
- `schedule` - On a timer (daily, weekly)
- `workflow_dispatch` - Manual trigger
- `release` - When release is created

</details>

<details>
<summary><strong>5. How do you securely use API keys in workflows?</strong></summary>

Use GitHub repository Secrets. Store the key as a secret in repository settings, then reference it as `${{ secrets.SECRET_NAME }}` in the workflow. GitHub masks secrets in logs.

</details>

<details>
<summary><strong>6. What are common actions for documentation?</strong></summary>

- `actions/checkout@v3` - Download repository code
- `actions/setup-node@v3` - Install Node.js
- `peaceiris/actions-gh-pages@v3` - Deploy to GitHub Pages
- `gaurav-nelson/github-action-markdown-link-check` - Check links
- `slackapi/slack-github-action` - Send Slack messages

</details>

<details>
<summary><strong>7. Can you test workflows before running on main?</strong></summary>

Yes. Create the workflow in a feature branch, commit and push, then test it. Open a pull request to see it run. Once verified, merge to main where it will run on actual releases.

</details>

<details>
<summary><strong>8. What should you do if a workflow fails?</strong></summary>

Go to the Actions tab, click the failed workflow run, and review the logs to find the error. Common issues are missing dependencies, wrong paths, or incorrect configuration. Fix the issue and re-run the workflow.

</details>

---

## Next Steps

You now understand GitHub Actions and can automate your documentation workflows. Continue practicing with different workflows and explore the GitHub Marketplace for additional actions that fit your team's needs.