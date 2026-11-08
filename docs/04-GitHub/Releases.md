---
title: Publishing Documentation Releases
sidebar_position: 7
description: Learn how to create GitHub Releases to version and publish your documentation.
---

# Publishing Documentation Releases

> **Estimated reading time:** 16 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what GitHub Releases are and why they matter.
- Create releases from Git tags.
- Write clear release notes.
- Version documentation properly.
- Attach assets to releases.
- Automate release publishing.
- Apply releases in Docs-as-Code workflows.

---

## What Are GitHub Releases?

A GitHub Release is a packaged version of your documentation at a specific point in time. It marks important milestones and makes it easy for users to access specific documentation versions.

### Releases vs. Tags

**Tags:**
- Just a label on a commit
- Simple marker
- No additional information

**Releases:**
- Full package with release notes
- Contains version information
- Can include assets (files, downloads)
- Shows up on releases page
- Has download links

Think of it as: Tags are for Git, Releases are for users.

### Why Create Releases?

**Version Control:**
- Mark important documentation versions
- Users can access specific versions
- Easy to reference: "See v1.0 documentation"

**Announcements:**
- Tell users about updates
- Highlight new features
- Explain important changes
- Share migration information

**Downloads:**
- Users can download documentation as PDF, EPUB
- Create offline versions
- Archive versions

**History:**
- Clear record of documentation evolution
- Easy to see what changed between versions
- Reference for future work

:::important

Releases tell users "This is a stable, versioned release of our documentation."

:::

---

## Before You Start

Make sure you have:

- A Git repository on GitHub
- Understanding of tags
- Documentation you want to release
- Version number ready

:::note

**For Beginners**

Releases are created from tags. If you know how to tag (from earlier Git lessons), you can create releases.

:::

---

## Understanding Versioning

Before creating releases, understand version numbering.

### Semantic Versioning

Most documentation uses semantic versioning: `MAJOR.MINOR.PATCH`

**Examples:**
- `1.0.0` - First release
- `1.0.1` - Small fix/patch
- `1.1.0` - New features added
- `2.0.0` - Major changes/breaking changes

### What Each Number Means

| Part | Meaning | When to increment | Example |
|------|---------|------------------|---------|
| MAJOR | Breaking changes | Major rewrite, complete reorganization | 1.0.0 → 2.0.0 |
| MINOR | New features | New sections, new guides | 1.0.0 → 1.1.0 |
| PATCH | Small fixes | Typo fixes, broken links | 1.0.0 → 1.0.1 |

### Release Timeline

```
v1.0.0  →  v1.0.1  →  v1.1.0  →  v1.1.1  →  v2.0.0
(initial) (fixes)   (new guides) (fixes)   (redesign)
```

---

## Creating a Release

### Step 1: Create a Tag

Releases are created from tags. First, create a tag:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0 - Complete documentation"
git push origin v1.0.0
```

### Step 2: Create Release from Tag

**Method 1: From GitHub Web**

1. Go to repository → Releases tab
2. Click "Create a release"
3. Select your tag from dropdown
4. Fill in release information
5. Click "Publish release"

**Method 2: Using GitHub CLI**

```bash
gh release create v1.0.0 --title "Version 1.0.0" --notes "Release notes here"
```

### Step 3: Write Release Notes

Release notes explain what's in this version.

**Good release notes include:**

- **What's new** - New sections, guides, examples
- **What changed** - Updates to existing documentation
- **What's fixed** - Bugs, broken links, typos
- **Migration guide** - If significant changes (for major versions)
- **Known issues** - Any known problems
- **Links** - Links to key pages or download

**Example release notes:**

```markdown
# Version 1.0.0 - Initial Release

## What's Included
- Complete getting started guide
- Full API reference documentation
- 20+ code examples
- Troubleshooting guide
- FAQ section

## New Features
- Interactive tutorials
- Searchable documentation
- Dark mode support
- Multiple language support (Python, Node.js, Go)

## Improvements
- Better organized navigation
- Faster load times
- Mobile-friendly design

## Known Issues
- Video tutorials only available in English (other languages coming soon)
- Search doesn't index older versions yet

## Getting Started
[Read the getting started guide](https://your-docs.com/getting-started)

## Download
- [PDF Version](link-to-pdf)
- [EPUB Version](link-to-epub)

## Migration
No migration needed for new installations.
If upgrading from v0.9, please see [Upgrade Guide](link).
```

:::tip

Write release notes from the user's perspective. What do they need to know?

:::

---

## Release Types

Different types of releases for different purposes.

### Pre-release

Mark as pre-release if not ready for production.

```
✓ This is a pre-release
```

Examples:
- Beta versions: `v1.0.0-beta`
- Release candidates: `v1.0.0-rc1`
- Alpha versions: `v1.0.0-alpha`

Users know to expect changes.

### Latest Release

GitHub marks one release as "Latest".

This is what users see when they visit Releases page.

Update the latest when you release new version.

### Archived Releases

Old releases stay available for reference.

Users can access v1.0.0, v1.1.0, v2.0.0, etc.

Useful for users on older versions.

---

## Common Documentation Releases

### Release Type 1: Initial Release

First public documentation.

**Version:** `v1.0.0`

**What to include:**
- Complete getting started guide
- Full reference documentation
- All core guides
- Basic examples

**Release notes:**
- "First public release"
- "Includes core documentation"
- List all major sections

### Release Type 2: Feature Release

Add new documentation sections or features.

**Version:** `v1.1.0` or `v1.2.0`

**What to include:**
- All previous documentation
- New guides or sections
- New examples

**Release notes:**
- "Added X guide"
- "New examples for feature Y"
- Link to new content

### Release Type 3: Patch Release

Fix bugs, typos, broken links.

**Version:** `v1.0.1` or `v1.1.1`

**What to include:**
- Same as previous version
- Bug fixes applied

**Release notes:**
- "Fixed 5 broken links"
- "Corrected code example on page X"
- "Improved clarity of section Y"

### Release Type 4: Major Release

Breaking changes, major reorganization.

**Version:** `v2.0.0`

**What to include:**
- Completely reorganized documentation
- Major updates to all sections
- New structure

**Release notes:**
- "Major reorganization"
- "Sections moved and renamed"
- Migration guide from v1 to v2
- What changed and why

---

## Attaching Assets to Releases

Add files to downloads for release.

### Creating Assets

1. Create files (PDF, EPUB, ZIP)
2. Upload them to release

Common assets for documentation:

- **PDF** - Print-friendly version
- **EPUB** - e-reader format
- **ZIP** - All HTML files
- **Images** - Screenshots or diagrams

### Attaching Assets

1. Open release
2. Click "Edit release"
3. Scroll to "Assets" section
4. Click "Attach files"
5. Upload your files
6. Save

Users can now download from release page.

### Auto-Generate Assets

Use GitHub Actions to auto-generate PDFs:

```yaml
name: Generate Release Assets

on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate PDF
        run: npm run generate-pdf
      - name: Upload to release
        uses: softprops/action-gh-release@v1
        with:
          files: dist/documentation.pdf
```

---

## Release Workflow

### Complete Release Process

```
1. Finish documentation work
   ↓
2. Create PR, get reviews, merge to main
   ↓
3. Create Git tag: git tag -a v1.0.0
   ↓
4. Push tag: git push origin v1.0.0
   ↓
5. Go to GitHub Releases
   ↓
6. Create release from tag
   ↓
7. Write release notes
   ↓
8. Attach assets (if any)
   ↓
9. Publish release
   ↓
10. Announce to users/team
```

### Release Checklist

Before publishing release:

- [ ] All documentation reviewed and approved
- [ ] All links tested and working
- [ ] No broken links
- [ ] Examples tested
- [ ] Spelling/grammar checked
- [ ] Formatting consistent
- [ ] Git tag created
- [ ] Release notes written
- [ ] Assets created (if needed)
- [ ] Pre-release checkbox correct (beta vs. final)

---

## Release Best Practices

### Version Numbering

- **Start at v1.0.0** - Not v0.1.0
- **Use semantic versioning** - MAJOR.MINOR.PATCH
- **Be consistent** - Always use same format
- **Don't skip numbers** - v1.0.0, v1.1.0, v2.0.0

### Release Cadence

**Regular schedule:**
- Patch release: Weekly or as needed (bug fixes)
- Minor release: Monthly (new features)
- Major release: Quarterly or as needed (major changes)

Pick a schedule and stick to it. Users like predictability.

### Release Notes Quality

- **Be clear** - Users should understand what changed
- **Be complete** - Don't leave out important details
- **Be honest** - Mention known issues
- **Use formatting** - Bold, bullets, headers for readability
- **Link to details** - Link to full pages when relevant

### Release Announcements

Announce release:

1. **In Discussions** - Post in GitHub Discussions
2. **In Issues** - Close related issues
3. **On website** - Blog post or changelog
4. **Email** - Notify users if you have mailing list
5. **Social media** - Tweet, LinkedIn, etc.

Let users know about your release.

:::note

**Documentation Manager's Tip**

Create a release checklist and use it every time. Share releases in team meetings and celebrate completed versions!

:::

---

## Working with Multiple Versions

Support multiple documentation versions.

### Version Branching

Keep branches for major versions:

```
main → v2 (current development)
   └─ v1 (old stable branch)
```

### Users Access Old Versions

When users want v1.0 docs:

1. Go to Releases tab
2. Select v1.0.0
3. View or download v1.0 documentation

Useful for users who can't upgrade yet.

### Maintenance

- **v2 (current)** - Latest features, frequent updates
- **v1 (old)** - Security fixes only, infrequent updates

Plan how long to support old versions.

---

## Summary

In this lesson, you learned how to:

- Create and publish documentation releases.
- Write clear release notes.
- Use semantic versioning properly.
- Attach assets to releases.
- Establish release workflows.
- Support multiple documentation versions.
- Announce releases to users.

Releases transform your documentation from a continuously changing repository into versioned, stable products that users can depend on.

---

## Exercise

1. Ensure your documentation is in good state
2. Create a tag: `git tag -a v1.0.0 -m "Initial release"`
3. Push tag: `git push origin v1.0.0`
4. Go to GitHub Releases tab
5. Create release from v1.0.0 tag
6. Write comprehensive release notes
7. Include all sections (what's new, what changed, links)
8. If possible, generate or create a PDF asset
9. Attach PDF to release
10. Publish and share release with team

---

## Common mistakes

<details>
<summary><strong>1. Creating releases without tags</strong></summary>

**Cause**

Tried to create release without having a Git tag first.

**Problem**

GitHub won't let you create release without tag. Confusing workflow.

**Solution**

Always create tag first, then create release from that tag.

Tag → Release (not the other way around).

</details>

<details>
<summary><strong>2. Skipping version numbers</strong></summary>

**Cause**

Used inconsistent versioning: v1.0 → v1.2 → v3.0

**Problem**

Confusing version history. Users don't know what changed between versions.

**Solution**

Use semantic versioning consistently: v1.0.0 → v1.0.1 → v1.1.0 → v2.0.0

Increment correctly based on changes.

</details>

<details>
<summary><strong>3. Vague release notes</strong></summary>

**Cause**

Wrote brief release notes like "Bug fixes and improvements."

**Problem**

Users don't know what changed or if upgrade affects them.

**Solution**

Write detailed release notes explaining:
- What's new
- What changed
- What's fixed
- Migration instructions (if needed)
- Known issues

Help users understand what's in the release.

</details>

<details>
<summary><strong>4. Releasing buggy documentation</strong></summary>

**Cause**

Released documentation with broken links or typos.

**Problem**

Users have bad experience. Damages documentation reputation.

**Solution**

Test before releasing:
- Check all links
- Review for typos
- Test examples
- Verify formatting

Use checklist before publishing release.

</details>

<details>
<summary><strong>5. No communication of releases</strong></summary>

**Cause**

Published release but didn't tell anyone about it.

**Problem**

Users don't know release exists. Update gets missed.

**Solution**

Announce release:
- Post in Discussions
- Email users if applicable
- Update website
- Share on social media

Make sure users know about important releases.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What's the difference between tags and releases?</strong></summary>

Tags are Git labels on commits. Releases are GitHub packages built from tags that include release notes and assets. Tags are for Git, releases are for users.

</details>

<details>
<summary><strong>2. What does semantic versioning mean?</strong></summary>

Semantic versioning is MAJOR.MINOR.PATCH format (e.g., v1.2.3).

- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

</details>

<details>
<summary><strong>3. What should release notes include?</strong></summary>

Release notes should include:
- What's new
- What changed
- What's fixed
- Known issues
- Links to relevant pages
- Migration guide (if major changes)

Write from user perspective.

</details>

<details>
<summary><strong>4. How do you create a release?</strong></summary>

1. Create Git tag: `git tag -a v1.0.0`
2. Push tag: `git push origin v1.0.0`
3. Go to Releases on GitHub
4. Click "Create release"
5. Write release notes
6. Publish

</details>

<details>
<summary><strong>5. Can you attach files to a release?</strong></summary>

Yes. Attach assets like:
- PDF version of docs
- EPUB for e-readers
- ZIP of all HTML
- Images and diagrams

Users can download these files from release page.

</details>

<details>
<summary><strong>6. How do users access old documentation versions?</strong></summary>

They go to Releases tab and select the version they want. Each release shows what was in that version and has download links for assets.

</details>

<details>
<summary><strong>7. When should you use pre-release?</strong></summary>

Mark as pre-release for:
- Beta versions (v1.0.0-beta)
- Release candidates (v1.0.0-rc1)
- Alpha versions (v1.0.0-alpha)

Pre-releases are for testing, not production use.

</details>

<details>
<summary><strong>8. What should you do before publishing a release?</strong></summary>

Follow a checklist:
- All docs reviewed and approved
- All links tested and working
- Examples verified
- Spelling/grammar checked
- Formatting consistent
- Release notes written
- Assets created
- Git tag created

Then publish and announce the release.

</details>

---

## Next Steps

You now understand the complete Docs-as-Code workflow from Git to releases. Start creating releases for your documentation to mark important milestones and versions!