---
title: Using Git Tags for Releases
sidebar_position: 9
description: Learn how to create and manage tags to mark important versions and releases of your documentation.
---

# Using Git Tags for Releases

> **Estimated reading time:** 19 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what Git tags are and why they matter.
- Create lightweight and annotated tags.
- List and view tags.
- Push tags to remote repositories.
- Delete tags safely.
- Use tags for documentation releases.
- Follow tagging best practices.
- Apply tagging in team workflows.

---

## What Are Git Tags?

A Git tag is a label that marks a specific point in your repository history. Tags are typically used to mark release versions.

### Tags vs. Branches

**Branches:**
- Moving pointers that advance with new commits
- Used for ongoing development
- Can be deleted safely
- Change over time

**Tags:**
- Fixed pointers to a specific commit
- Used for marking important points
- Should not be deleted casually
- Stay constant over time

Think of branches as paths forward, and tags as permanent markers at specific locations.

### Why Use Tags?

Tags are useful for:

- **Marking releases** - Label version 1.0, v2.5.0, etc.
- **Finding historical versions** - Quickly find what was in version 3.0
- **Creating releases** - GitHub uses tags for release artifacts
- **Documentation snapshots** - Mark which docs matched which version
- **Easy reference** - More memorable than commit IDs

:::important

Tags create a permanent record of important versions. Use them for any release or milestone.

:::

---

## Before You Start

Make sure you have:

- A Git repository with commit history
- Understanding of Git commits and branches
- A commit you want to tag

:::note

**For Beginners**

Think of tags as permanent labels on your project timeline. You mark "version 1.0" at a specific moment in time.

:::

---

## Creating Your First Tag

### Types of Tags

Git has two types: lightweight and annotated.

| Type | What It Is | When to Use | Size |
|------|-----------|------------|------|
| Lightweight | Simple reference to a commit | Temporary, local tags | Minimal |
| Annotated | Full object with metadata | Official releases, important markers | Full |

For documentation releases, annotated tags are recommended.

---

## Lightweight Tags

### How to Create a Lightweight Tag

A lightweight tag is just a name pointing to a commit.

**Command:**

```bash
git tag version-1.0
```

**What it does:**

- Creates a tag named `version-1.0`
- Points to the current commit
- No extra metadata

**Result:**

Tag is created immediately.

### Tag at Specific Commit

Tag an older commit instead of HEAD:

```bash
git tag version-0.9 abc1234
```

Where `abc1234` is the commit ID.

:::tip

Use lightweight tags for quick, local marking. Use annotated tags for important releases.

:::

---

## Annotated Tags

### How to Create an Annotated Tag

Annotated tags include message and metadata.

**Command:**

```bash
git tag -a version-1.0 -m "Release version 1.0 - API documentation complete"
```

**What it does:**

- `-a` means "annotated"
- `-m` adds a message
- Stores tagger name, email, date, message
- Creates a full Git object

**Result:**

```text
Created tag 'version-1.0' (created from abc1234)
```

### Better Practice: Editor Message

For important tags, use an editor for detailed messages:

```bash
git tag -a version-1.0
```

Your default editor opens. Write:

```text
Release version 1.0

This release includes:
- Complete API documentation
- Installation guide for all platforms
- 50+ code examples
- Troubleshooting guide

Reviewed by: Documentation Team
Date: 2024-11-08
```

Save and close. The tag is created with the full message.

:::note

**Documentation Manager's Tip**

For each documentation release, create an annotated tag with:
- Version number
- What documentation was added/updated
- Who reviewed it
- Any important notes

:::

---

## Listing Tags

### View All Tags

```bash
git tag
```

**Result:**

```text
version-0.8
version-0.9
version-1.0
v2.0-beta
```

Tags listed alphabetically.

### List Tags Matching a Pattern

```bash
git tag -l "v1*"
```

Shows only tags starting with "v1".

### View Tag Details

```bash
git show version-1.0
```

**Result:**

For annotated tag:

```text
tag version-1.0
Tagger: Your Name <your@email.com>
Date:   Wed Nov 08 10:30:45 2024 +0000

Release version 1.0

This release includes:
- Complete API documentation
...

commit abc1234def5678...
Author: Your Name <your@email.com>
Date:   Wed Nov 08 10:00:00 2024 +0000

    Finalize documentation for v1.0
```

Shows tag details plus the commit it points to.

---

## Pushing Tags to Remote

Tags are local by default. Share them with your team.

### Push Single Tag

```bash
git push origin version-1.0
```

**What it does:**

- Pushes the tag to remote
- Makes it available to team members
- Creates release on GitHub

**Result:**

```text
Total 0 (delta 0), reused 0 (delta 0)
To github.com:your-org/docs.git
 * [new tag]         version-1.0 -> version-1.0
```

### Push All Tags

```bash
git push origin --tags
```

**What it does:**

- Pushes all local tags to remote
- Useful after creating multiple tags
- Team can access all tags

### Push Tags Automatically

Configure Git to push tags with commits:

```bash
git config --global push.followTags true
```

Then `git push` automatically includes tags.

:::warning

Never push tags you're unsure about. Tags should mark stable, reviewed versions only.

:::

---

## Deleting Tags

Remove tags you no longer need.

### Delete Local Tag

```bash
git tag -d version-0.5
```

**What it does:**

- Removes tag from your computer
- Doesn't affect remote
- Local only

**Result:**

```text
Deleted tag 'version-0.5' (was abc1234)
```

### Delete Remote Tag

```bash
git push origin --delete version-0.5
```

**What it does:**

- Removes tag from remote repository
- Makes it unavailable to team
- Permanent on remote

:::warning

Only delete tags if you made a mistake. Don't delete release tags casually.

:::

---

## Common Tagging Scenarios

### Scenario 1: Mark a Release

You completed version 1.0 documentation.

```bash
# Make sure you're on the correct commit
git log --oneline -1

# Create annotated tag
git tag -a v1.0 -m "Documentation v1.0 - API reference complete"

# Push to remote
git push origin v1.0
```

Team members can now access this release.

### Scenario 2: Tag for Documentation Snapshot

Mark docs that match a software version.

```bash
# Software team released v2.5.0, we updated docs to match
git tag -a docs-for-v2.5.0 -m "Documentation matching software v2.5.0"
git push origin docs-for-v2.5.0
```

Later, you can checkout this exact doc version: `git checkout docs-for-v2.5.0`

### Scenario 3: Beta Release

Tag a pre-release version.

```bash
git tag -a v2.0-beta1 -m "Beta release - API redesign documentation"
git push origin v2.0-beta1
```

Users can test documentation changes before final release.

### Scenario 4: Multiple Tags on Same Commit

Mark multiple milestones.

```bash
git tag -a v1.0-final -m "Final release"
git tag -a 2024-Q4-release -m "Q4 2024 release"
git push origin --tags
```

Same commit has multiple tags for different tracking purposes.

---

## Tagging Best Practices

### Tag Naming Conventions

Use consistent naming:

- **Semantic versioning**: `v1.0.0`, `v1.0.1`, `v2.0.0`
- **Release names**: `release-2024-Q4`, `winter-2024-release`
- **Date-based**: `2024-11-08`, `2024-11-Q4`
- **Combined**: `v1.0-2024-11-08`

**Pick one format and stick with it.**

### When to Tag

- After every released version
- After major milestones
- When docs are reviewed and approved
- Before major refactors (to preserve history)

### Tagging Workflow

```bash
# 1. Complete work and commit
git commit -m "Complete API documentation"

# 2. Verify commit
git log --oneline -1

# 3. Create annotated tag with message
git tag -a v1.0 -m "Release: Complete API documentation for v1.0"

# 4. Push tag to remote
git push origin v1.0

# 5. Verify on GitHub
# Check GitHub releases page
```

### Documentation Release Checklist

Before tagging a release:

- [ ] All documentation reviewed
- [ ] Links verified (no broken links)
- [ ] Examples tested
- [ ] Version numbers updated
- [ ] Changelog completed
- [ ] Team approved
- [ ] Commit pushed to remote
- [ ] Tag created with descriptive message
- [ ] Tag pushed to remote

---

## Managing Releases

### Creating GitHub Releases

GitHub can create releases from tags.

**Option 1: From tag**

1. Push tag: `git push origin v1.0`
2. Go to GitHub repository
3. Click "Releases"
4. Click "Create release from tag"
5. Add release notes
6. Publish

**Option 2: Command line**

```bash
gh release create v1.0 --notes "Release notes here"
```

Requires GitHub CLI.

### Viewing Release History

```bash
git log --oneline --decorate
```

**Result:**

```text
abc1234 (HEAD -> main, tag: v1.0) Finalize v1.0
def5678 (tag: v0.9) Release v0.9
ghi9012 Add API documentation
```

Tags appear with commit history.

---

## Summary

In this lesson, you learned how to:

- Understand what tags are and why they matter.
- Create lightweight and annotated tags.
- Push tags to remote repositories.
- Delete tags safely.
- Use tags for documentation releases.
- Follow tagging best practices.

Tags create a permanent record of important versions. Use them consistently for all releases.

---

## Exercise

1. Check current commit: `git log --oneline -1`
2. Create lightweight tag: `git tag v0.1`
3. List tags: `git tag`
4. Create annotated tag: `git tag -a v1.0 -m "First stable release"`
5. View tag details: `git show v1.0`
6. Create another tag: `git tag -a v2.0-beta -m "Beta release"`
7. List all tags: `git tag -l`
8. Push tags to remote: `git push origin --tags`
9. Delete local tag: `git tag -d v0.1`
10. List remaining tags: `git tag`

---

## Common mistakes

<details>
<summary><strong>1. Using lightweight tags for releases</strong></summary>

**Cause**

Created lightweight tags instead of annotated for official releases.

**Problem**

No metadata (message, tagger, date). Less information for team.

**Solution**

Use annotated tags for releases: `git tag -a v1.0 -m "message"`

Only use lightweight tags for temporary local markers.

</details>

<details>
<summary><strong>2. Forgetting to push tags to remote</strong></summary>

**Cause**

Created tags locally but didn't push them: `git push` doesn't push tags by default.

**Problem**

Team members can't see the tags. Releases aren't shared.

**Solution**

Explicitly push tags: `git push origin v1.0`

Or push all: `git push origin --tags`

Or configure auto-push: `git config push.followTags true`

</details>

<details>
<summary><strong>3. Tagging the wrong commit</strong></summary>

**Cause**

Tagged HEAD without verifying it was the right commit.

**Problem**

Release tag points to wrong code.

**Solution**

Verify before tagging: `git log --oneline -1`

If wrong, delete and retag correct commit: `git tag -d v1.0` then `git tag -a v1.0 <correct-commit>`

</details>

<details>
<summary><strong>4. Deleting release tags casually</strong></summary>

**Cause**

Deleted tags from remote without good reason.

**Problem**

Breaks links to releases. Confuses team about what was released.

**Solution**

Never delete release tags. They're historical records.

Only delete tags if made in error.

</details>

<details>
<summary><strong>5. Inconsistent tag naming</strong></summary>

**Cause**

Used different naming patterns: `v1.0`, `release-2.0`, `version3`

**Problem**

Hard to find tags. Scripts can't parse them consistently.

**Solution**

Establish naming convention. Examples: `v1.0.0`, `release-YYYY-MM-DD`

Document it in CONTRIBUTING.md and use consistently.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a Git tag?</strong></summary>

A Git tag is a label that marks a specific point in repository history. It typically points to a commit and is used to mark important versions or releases.

</details>

<details>
<summary><strong>2. What's the difference between lightweight and annotated tags?</strong></summary>

**Lightweight tags** are simple references to a commit with minimal overhead. **Annotated tags** are full Git objects with metadata (message, tagger, date). Use annotated tags for official releases.

</details>

<details>
<summary><strong>3. How do you create an annotated tag?</strong></summary>

Use: `git tag -a version-1.0 -m "Release message"`

The `-a` flag creates an annotated tag, and `-m` adds the message. For detailed messages, omit `-m` and an editor opens.

</details>

<details>
<summary><strong>4. How do you push tags to remote?</strong></summary>

Push single tag: `git push origin version-1.0`

Push all tags: `git push origin --tags`

By default, `git push` does not include tags.

</details>

<details>
<summary><strong>5. How do you view what's in a tag?</strong></summary>

Use `git show tag-name` to see the tag message and the commit it points to.

</details>

<details>
<summary><strong>6. What should you include in an annotated tag message?</strong></summary>

- Version number
- What was released/added
- Who reviewed it
- Important notes
- Release date (Git captures this automatically)

</details>

<details>
<summary><strong>7. Is it safe to delete tags?</strong></summary>

Deleting local tags is safe: `git tag -d tag-name`

Deleting remote tags is permanent and should only be done if made in error: `git push origin --delete tag-name`

Never casually delete release tags.

</details>

<details>
<summary><strong>8. How do you create a GitHub release from a tag?</strong></summary>

After pushing a tag to GitHub:

1. Go to the repository on GitHub
2. Click "Releases"
3. Click "Create release from tag"
4. Add release notes
5. Publish

Or use CLI: `gh release create v1.0 --notes "Release notes"`

</details>

---

## Next Lesson

When you're comfortable with tags, proceed to [Undo](./Undo.md) to learn how to recover from Git mistakes.