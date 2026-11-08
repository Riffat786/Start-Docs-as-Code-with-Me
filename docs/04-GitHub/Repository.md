---
title: Setting Up a GitHub Repository for Documentation
sidebar_position: 7
description: Learn how to set up and manage a GitHub repository for Docs-as-Code workflows.
---

# Setting Up a GitHub Repository for Documentation

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand repository structure and organization.
- Configure repository settings for documentation teams.
- Manage team permissions and access.
- Set up branch protection for quality.
- Organize documentation files effectively.
- Use README and CONTRIBUTING guides.
- Set up automation and workflows.
- Apply best practices in Docs-as-Code repositories.

---

## What Is a GitHub Repository?

A GitHub repository is the central location where your documentation lives. It contains all your files, history, issues, pull requests, and team collaboration.

### Repository Components

**Files:**
- Documentation in Markdown
- Configuration files
- Scripts and automation
- Images and assets

**Git History:**
- Every change ever made
- Who made each change
- When changes were made
- Why changes were made (in commit messages)

**Collaboration:**
- Issues for tracking work
- Pull requests for review
- Discussions for conversations
- Projects for planning

**Automation:**
- GitHub Actions for builds
- Branch protection rules
- Automated checks
- Auto-deployment

:::important

A well-organized repository makes collaboration smooth and documentation maintenance easier.

:::

---

## Before You Start

Make sure you have:

- A GitHub account with organization
- Admin access to create/manage repositories
- Understanding of Git basics
- Documentation ready to add

:::note

**For Beginners**

Setting up a repository is a one-time task. Take time to get it right at the start.

:::

---

## Repository Structure

Organize your documentation files logically.

### Basic Structure

```
your-docs-repo/
├── docs/                    # Documentation files
│   ├── getting-started/
│   ├── guides/
│   ├── api/
│   └── troubleshooting/
├── .github/
│   ├── workflows/          # GitHub Actions
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── scripts/                # Build scripts
├── .gitignore              # Files to ignore
├── README.md               # Repository overview
├── CONTRIBUTING.md         # How to contribute
├── LICENSE                 # License type
└── docusaurus.config.js    # Documentation config (if using framework)
```

### Documentation Folder Organization

**By section/topic:**

```
docs/
├── getting-started/
│   ├── installation.md
│   ├── configuration.md
│   └── first-steps.md
├── api/
│   ├── authentication.md
│   ├── endpoints.md
│   └── examples.md
├── guides/
│   ├── best-practices.md
│   └── advanced-usage.md
└── troubleshooting/
    ├── common-issues.md
    └── faq.md
```

**By documentation type:**

```
docs/
├── tutorials/
├── how-to/
├── reference/
├── explanation/
└── architecture/
```

Choose structure that makes sense for your content.

### File Naming

Use consistent naming:

- **Lowercase** - `getting-started.md` not `GettingStarted.md`
- **Descriptive** - `api-authentication.md` not `auth.md`
- **Dashes not underscores** - `my-guide.md` not `my_guide.md`
- **No spaces** - `troubleshooting-guide.md` not `Troubleshooting Guide.md`

Consistent naming helps everyone find files easily.

---

## Essential Repository Files

### README.md

Main file people see on GitHub.

**Should include:**

- **Description** - What this documentation is for
- **Quick start** - How to get started
- **Table of contents** - Links to main sections
- **How to contribute** - Link to CONTRIBUTING.md
- **License** - What license applies
- **Links** - Link to live docs site

**Example:**

```markdown
# Documentation for MyProduct

This is the documentation for MyProduct, a great tool for doing X.

## Quick Start

1. Read [Getting Started Guide](docs/getting-started/installation.md)
2. Follow [First Steps Tutorial](docs/getting-started/first-steps.md)
3. Check [API Documentation](docs/api/)

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get started.

## License

MIT License - see LICENSE file for details

## More Information

- [Live Documentation](https://docs.myproduct.com)
- [GitHub Issues](../../issues)
- [Discussions](../../discussions)
```

### CONTRIBUTING.md

Explains how to contribute to documentation.

**Should include:**

- **Getting started** - Clone repo, set up locally
- **Branch naming** - Use `feature/my-change` or `fix/issue-number`
- **Commit messages** - Write clear messages
- **Pull request process** - What to include in PR
- **Style guide** - Documentation style rules
- **Contact** - How to ask questions

**Example:**

```markdown
# Contributing to Documentation

Thank you for contributing! Here's how to get started.

## Setup

```bash
git clone https://github.com/org/docs.git
cd docs
npm install
npm run dev
```

## Making Changes

1. Create a branch: `git switch -c feature/my-change`
2. Make your changes
3. Commit: `git commit -m "Add new guide"`
4. Push: `git push origin feature/my-change`
5. Create PR on GitHub

## PR Checklist

- [ ] Links are correct
- [ ] No typos
- [ ] Formatting is consistent
- [ ] Examples work
- [ ] Follows style guide

## Style Guide

See [STYLE_GUIDE.md](STYLE_GUIDE.md) for documentation standards.
```

### .gitignore

Tells Git which files to ignore.

**Typical documentation ignores:**

```text
# Build output
dist/
build/
_build/
site/

# Dependencies
node_modules/
venv/

# Editor files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.log
```

### LICENSE

Specify how others can use your documentation.

**Common licenses:**

- **MIT** - Most permissive, great for documentation
- **Creative Commons** - Designed for content/documentation
- **Apache 2.0** - Permissive with patent protection

Choose appropriate license for your organization.

---

## Repository Settings

Configure your repository for documentation team success.

### Basic Settings

**Repository Name:**
- Use descriptive name: `documentation`, `docs`, `company-docs`
- Not generic: `repo1`, `backup`, etc.

**Description:**
- "Documentation for MyProduct"
- Appears in repository listings

**Visibility:**
- **Public** - Anyone can see, good for open-source
- **Private** - Only team members can see, good for internal docs

### Branch Protection

Protect main branch from broken changes.

**Settings:**

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - "Require pull request reviews before merging"
   - "Require status checks to pass" (if using CI/CD)
   - "Require branches to be up to date"
   - "Dismiss stale reviews"

**Result:** Can't merge to main without:
- PR review and approval
- All checks passing
- Branch up to date with main

Protects documentation quality.

### Require PR Reviews

Require at least one reviewer for every PR.

**Settings:**

1. Go to Settings → Branches
2. Select `main` branch rule
3. Set "Required number of approving reviews" to 1 or 2

**Result:** Every change reviewed before merging.

---

## Team Permissions

Manage who can do what.

### Permission Levels

| Role | Can Read | Can Write | Can Admin | Best For |
|------|----------|-----------|-----------|----------|
| Read | ✓ | ✗ | ✗ | Users, viewers |
| Write | ✓ | ✓ | ✗ | Contributors, writers |
| Maintain | ✓ | ✓ | ✓ | Team leads, reviewers |
| Admin | ✓ | ✓ | ✓ | Managers, repo owner |

### Setting Permissions

1. Go to Settings → Collaborators
2. Add team members or teams
3. Select appropriate role

**Typical documentation team:**

- **Documentation Manager** → Admin
- **Senior Tech Writer** → Maintain
- **Tech Writers** → Write
- **New Contributors** → Read (until approved)

:::tip

Limit admin access. Most team members need Write or Maintain, not Admin.

:::

---

## Documentation Best Practices

### File Organization

- Keep related files together
- Use clear folder structure
- Consistent file naming
- Easy to navigate

### README for Each Section

Create README.md in major folders:

```
docs/
├── api/
│   ├── README.md          # Overview of API docs
│   ├── authentication.md
│   └── endpoints.md
└── guides/
    ├── README.md          # Overview of guides
    └── best-practices.md
```

Each README explains that section's purpose and contents.

### Clear Links

- Link between related docs
- Use relative links: `[Getting Started](../getting-started/installation.md)`
- Update links when moving files

### Examples and Images

- Store images in `docs/images/` or same folder
- Use descriptive filenames: `api-flow-diagram.png` not `image1.png`
- Add alt text to images

### Version Control

- Keep one `main` branch as the stable version
- Use feature branches for new work
- Merge only reviewed, approved changes

---

## Automation Setup

Set up GitHub features to help your team.

### Enable Discussions

Allow users to ask questions:

1. Settings → Features
2. Check "Discussions"
3. Add categories for Q&A, announcements, etc.

### Set Up Issue Templates

Standardize bug reports and suggestions:

1. Settings → Features
2. Click "Set up templates"
3. Create templates for bug, feature request, etc.

### Create PR Template

Standardize pull request format:

1. Create `.github/pull_request_template.md`
2. Add checklist and instructions
3. Appears in every new PR

### Enable GitHub Actions

Automate builds and checks:

1. Go to Actions tab
2. Create workflow files in `.github/workflows/`
3. Set up link checking, building, etc.

---

## Repository Maintenance

Keep your repository healthy.

### Regular Tasks

**Weekly:**
- Review open issues and PRs
- Close resolved issues
- Archive completed projects

**Monthly:**
- Update dependencies
- Review GitHub Actions logs
- Check for deprecated practices

**Quarterly:**
- Plan next documentation release
- Archive old branches
- Update repository settings as needed

### Cleanup

**Delete old branches:**
```bash
git branch -d feature/old-feature
git push origin --delete feature/old-feature
```

**Archive old issues:**
Use issue filtering to find and close old issues.

**Update stale documentation:**
Find and update outdated sections.

:::note

**Documentation Manager's Tip**

Schedule monthly maintenance. Assign someone to keep repository clean and organized.

:::

---

## Repository Checklist

When setting up new documentation repository:

- [ ] Repository named descriptively
- [ ] Description added
- [ ] README.md created with overview
- [ ] CONTRIBUTING.md created with guidelines
- [ ] LICENSE file added
- [ ] .gitignore configured
- [ ] Folder structure organized logically
- [ ] Branch protection enabled on main
- [ ] Team members added with correct permissions
- [ ] Discussions enabled
- [ ] Issue templates created
- [ ] PR template created
- [ ] GitHub Actions workflows set up
- [ ] Automation configured
- [ ] First documentation committed

---

## Summary

In this lesson, you learned how to:

- Organize documentation files effectively.
- Configure repository settings for team collaboration.
- Manage permissions and access control.
- Set up branch protection for quality.
- Create essential repository files.
- Enable automation and workflows.
- Maintain repository health over time.

A well-organized repository is the foundation of successful Docs-as-Code. Take time to set it up right.

---

## Exercise

1. Create a new repository for documentation
2. Set up folder structure for your docs
3. Create README.md with overview
4. Create CONTRIBUTING.md with guidelines
5. Create .gitignore file
6. Add LICENSE (choose MIT or Creative Commons)
7. Configure branch protection on main
8. Add team members with appropriate permissions
9. Enable Discussions
10. Set up issue and PR templates

---

## Common mistakes

<details>
<summary><strong>1. Disorganized folder structure</strong></summary>

**Cause**

Created files without clear organization. Files scattered randomly.

**Problem**

Hard to find documentation. Team confused where to put new files.

**Solution**

Plan structure before starting:
- Group related files
- Use descriptive folder names
- Keep structure flat (not too many levels)

Spend time on organization upfront.

</details>

<details>
<summary><strong>2. No branch protection</strong></summary>

**Cause**

Left main branch unprotected. Anyone could push directly.

**Problem**

Broken documentation gets deployed. No review process.

**Solution**

Enable branch protection:
- Require PR reviews
- Require status checks
- Require up-to-date branches

Protects quality.

</details>

<details>
<summary><strong>3. Too many admin users</strong></summary>

**Cause**

Gave admin access to everyone.

**Problem**

Anyone can change critical settings. Accidental mistakes more likely.

**Solution**

Limit admin to 2-3 people:
- Documentation Manager
- Technical Lead

Most team members need Write or Maintain, not Admin.

</details>

<details>
<summary><strong>4. Missing documentation about how to contribute</strong></summary>

**Cause**

No CONTRIBUTING.md file. New contributors confused.

**Problem**

Inconsistent contributions. Team has to explain process repeatedly.

**Solution**

Create clear CONTRIBUTING.md:
- How to set up locally
- Branch naming conventions
- Commit message guidelines
- PR process
- Style guide reference

Help contributors succeed.

</details>

<details>
<summary><strong>5. No automation or checks</strong></summary>

**Cause**

Never set up GitHub Actions or branch protection.

**Problem**

Broken links and errors get merged. Quality suffers.

**Solution**

Set up automation:
- Link checking
- Build verification
- Spell checking
- Format validation

Automated checks catch problems early.

</details>

---

## Knowledge check

<details>
<summary><strong>1. How should you organize documentation files?</strong></summary>

Organize by topic or documentation type in a clear folder structure:

Example by topic:
- `docs/getting-started/`
- `docs/api/`
- `docs/guides/`

Keep related files together. Use descriptive names with dashes, not spaces.

</details>

<details>
<summary><strong>2. What should README.md include?</strong></summary>

README should include:
- Description of documentation
- Quick start guide
- Table of contents/links to main sections
- How to contribute
- License information
- Links to live site and discussions

</details>

<details>
<summary><strong>3. What should CONTRIBUTING.md include?</strong></summary>

CONTRIBUTING should include:
- Setup instructions
- Branch naming conventions
- Commit message guidelines
- Pull request process
- Style guide reference
- Contact information

</details>

<details>
<summary><strong>4. What is branch protection and why use it?</strong></summary>

Branch protection prevents merging to main without:
- PR review and approval
- All checks passing
- Branch up to date

Protects documentation quality by requiring review before changes go live.

</details>

<details>
<summary><strong>5. What are permission levels on GitHub?</strong></summary>

- **Read** - Can view only
- **Write** - Can read and edit
- **Maintain** - Can write and manage team (no admin)
- **Admin** - Full control

Give appropriate level to each team member.

</details>

<details>
<summary><strong>6. How do you set up issue templates?</strong></summary>

1. Go to Settings → Features
2. Click "Set up templates"
3. Create templates for different issue types
4. Templates appear when users create new issues

Helps standardize issue format.

</details>

<details>
<summary><strong>7. What should you do to maintain a repository?</strong></summary>

Weekly: Review open issues and PRs

Monthly: Update dependencies, review Actions logs

Quarterly: Plan releases, archive branches, update settings

Keep repository clean and organized.

</details>

<details>
<summary><strong>8. What files are essential in a repository?</strong></summary>

- **README.md** - Overview and quick start
- **CONTRIBUTING.md** - How to contribute
- **.gitignore** - Files to ignore
- **LICENSE** - Usage rights
- **.github/workflows/** - Automation
- **.github/ISSUE_TEMPLATE/** - Issue templates

Set these up at repository creation.

</details>

---

## Next Steps

You've now learned how to set up a complete GitHub repository for documentation. Start creating your documentation repository with these best practices!

This completes the GitHub module. You now understand the full GitHub feature set for Docs-as-Code workflows!