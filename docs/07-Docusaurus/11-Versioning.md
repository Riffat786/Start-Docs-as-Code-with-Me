---
title: Managing Documentation Versions in Docusaurus
sidebar_position: 12
description: Learn how to create and manage multiple versions of documentation in Docusaurus for different product releases.
---

# Managing Documentation Versions in Docusaurus

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Docusaurus versioning system.
- Create versioned documentation snapshots.
- Configure version display and switching.
- Manage current and versioned docs.
- Set up version badges and labels.
- Archive and deprecate old versions.
- Test versioned documentation locally.
- Apply versioning best practices.

---

## What Is Docusaurus Versioning?

Docusaurus versioning lets you maintain multiple versions of documentation simultaneously, each linked to a specific product version.

### Versioning Concepts

**Current (Next) Version:**
- Latest development version
- Latest features
- Under active development
- May not be released yet

**Latest Version:**
- Most recent stable release
- What most users run
- Default documentation version

**Previous Versions:**
- Older releases
- For users not upgraded yet
- Maintenance only
- Gradually deprecated

### Version Display

Users see version selector:

```
Docusaurus [v▼]
├─ v3.0 (current)
├─ v2.0 (latest)
├─ v1.5
└─ v1.0
```

Click to switch between versions.

:::important

Versioning shows users documentation for the version they're using. Essential for multi-version products.

:::

---

## Before You Start

Make sure you have:

- Docusaurus installed and running
- Understanding of Git basics
- Documentation for current version complete
- Version numbers planned
- Decision on how many versions to support

:::note

**For Beginners**

Docusaurus handles versioning automatically. You just create a snapshot when you release.

:::

---

## How Docusaurus Versioning Works

### File Structure

```
project/
├── docs/                          ← Current/next version
│   ├── intro.md
│   ├── guide/
│   └── api/
├── versioned_docs/
│   ├── version-2.0/               ← v2.0 snapshot
│   │   ├── intro.md
│   │   ├── guide/
│   │   └── api/
│   └── version-1.5/               ← v1.5 snapshot
│       ├── intro.md
│       └── guide/
├── versioned_sidebars/
│   ├── version-2.0-sidebars.js   ← v2.0 sidebar config
│   └── version-1.5-sidebars.js
├── versions.json                  ← Version list
└── docusaurus.config.ts
```

**docs/:** Current version under development
**versioned_docs/:** Snapshots of past versions
**versions.json:** Metadata about versions

### versions.json

```json
[
  "2.0",
  "1.5",
  "1.0"
]
```

Lists versions in order (newest first).

---

## Creating Your First Version

### Step 1: Prepare Documentation

Make sure current docs are complete and polished.

```
docs/
├── intro.md
├── getting-started/
│   └── index.md
├── guides/
│   └── index.md
└── api/
    └── index.md
```

### Step 2: Run Version Command

```bash
npm run docusaurus docs:version 2.0
```

This command:
1. Creates `versioned_docs/version-2.0/` with copy of docs
2. Creates `versioned_sidebars/version-2.0-sidebars.js`
3. Updates `versions.json` with new version

**Result:** Version 2.0 snapshot created!

### Step 3: Update Current Docs

After versioning, update `docs/` for next version:

```markdown
# What's New in v3.0

Features coming in v3.0:
- New API endpoints
- Performance improvements
- Breaking changes from v2.0
```

### Step 4: Test Locally

```bash
npm run start
```

Check version selector, switch between versions.

**Result:** Multiple versions showing!

---

## Configuring Versions

### Version Display Settings

In `docusaurus.config.ts`:

```typescript
const config: Config = {
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v3.0 (current)',
              path: 'docs',
            },
          },
        },
      } as Preset.Options,
    ],
  ],
};
```

**lastVersion:** Which version shows by default
**versions:** Configure display for each version
**label:** What shows in version selector
**path:** URL path for version

### Version Labels

```typescript
versions: {
  current: {
    label: 'v3.0 (Development)',
    path: 'next',
  },
  '2.0': {
    label: 'v2.0 (Latest)',
    path: 'docs',
  },
  '1.5': {
    label: 'v1.5',
    path: 'v1.5',
  },
}
```

Shows meaningful labels to users:
- (Development)
- (Latest)
- (Maintenance)

### Marking Versions as Deprecated

In versioned doc files, add deprecation notice:

**File:** `versioned_docs/version-1.0/intro.md`

```markdown
:::warning Deprecated Version

This is documentation for v1.0, which is no longer actively supported.

**We recommend upgrading to [v2.0](../../docs/intro.md).**

Support ends: December 31, 2024
```

Users see clear deprecation notice.

---

## Managing Versioned Docs

### Update Versioned Docs

Sometimes you need to fix issues in old versions.

**File:** `versioned_docs/version-2.0/api/index.md`

Edit directly to fix bugs, typos, or security issues.

```bash
# Edit the file
nano versioned_docs/version-2.0/api/index.md

# Build and test
npm run build
npm run serve
```

**Result:** Fix appears in v2.0 docs!

### Backport Fixes

For critical fixes needed in multiple versions:

```markdown
**v3.0** main branch: Fix critical security issue
   ↓ (cherry-pick or manually apply)
**v2.0** versioned_docs/version-2.0/: Same fix
   ↓ (cherry-pick or manually apply)
**v1.5** versioned_docs/version-1.5/: Same fix
```

Ensure consistency across versions.

### Adding Features to Current Version

Update `docs/` for unreleased version:

```markdown
# NEW: Advanced Caching (v3.0)

This feature is coming in v3.0:

```typescript
const cache = new Cache({ ttl: 3600 });
```
```

Available in current version preview.

---

## How-To: Set Up Complete Versioning

**Step 1: Current docs ready**

Ensure `docs/` is complete for v2.0 release.

**Step 2: Create version snapshot**

```bash
npm run docusaurus docs:version 2.0
```

**Step 3: Update versions.json**

```json
["2.0", "1.5"]
```

**Step 4: Configure in docusaurus.config.ts**

```typescript
docs: {
  lastVersion: '2.0',
  versions: {
    current: {
      label: 'v3.0 (Unreleased)',
      path: 'next',
    },
    '2.0': {
      label: 'v2.0 (Latest)',
      path: 'docs',
    },
    '1.5': {
      label: 'v1.5 (Maintenance)',
      path: 'v1.5',
    },
  },
}
```

**Step 5: Update current docs for v3.0**

```markdown
# Welcome to v3.0 (Unreleased)

This documentation is for v3.0, currently under development.

For stable documentation, see [v2.0](../2.0/)
```

**Step 6: Test locally**

```bash
npm run start
```

- Visit homepage (should show v2.0 by default)
- Click version selector
- Switch to different versions
- Verify sidebars load correctly

**Step 7: Build for production**

```bash
npm run build
```

All versions build correctly.

**Result:** Full versioning set up!

---

## Version URLs

### URL Structure

```
https://example.com/docs/intro          ← Latest (v2.0)
https://example.com/next/intro          ← Current/unreleased (v3.0)
https://example.com/v1.5/intro          ← Older version (v1.5)
```

Users can link directly to version-specific docs.

### Redirects

Old version URL redirected to new:

```
/docs/old-topic  →  /docs/new-topic
/v1.5/old        →  /v2.0/new-topic
```

Docusaurus handles redirects automatically.

---

## Archiving Old Versions

### When to Archive

Archive versions when:
- No longer supported
- Users upgraded
- Support ended
- Confusing to show
- Too many versions

### How to Archive

**Step 1: Remove from versions.json**

```json
["2.0", "1.5"]  ← Remove "1.0"
```

**Step 2: Keep docs for reference**

Move to archive folder (optional):

```bash
mv versioned_docs/version-1.0 versioned_docs/archive/
```

**Step 3: Add deprecation notice**

Create archive page:

```markdown
# Archived Versions

Documentation for versions no longer supported:

- [v1.0](./v1.0/) - Supported until Dec 2023
```

Users can still access if needed.

---

## Testing Versions

### Local Testing

Test all versions locally:

```bash
npm run start
```

For each version:
- Verify links work
- Check sidebars load
- Test navigation
- Read sample pages

### Build Testing

```bash
npm run build
npm run serve
```

Test production build.

---

## Best Practices

### Do's

✓ Create version snapshot at release
✓ Keep 2-3 versions active
✓ Label versions clearly (Latest, Maintenance)
✓ Add deprecation notices to old versions
✓ Test all versions locally
✓ Document version strategy
✓ Backport critical fixes
✓ Keep current version up-to-date

### Don'ts

✗ Don't keep too many versions (confusing)
✗ Don't update old versions without reason
✗ Don't forget version labels
✗ Don't lose historical versions
✗ Don't skip testing
✗ Don't have inconsistent version URLs
✗ Don't forget version dropdown

---

## Summary

In this lesson, you learned:

- How Docusaurus versioning system works
- How to create version snapshots
- How to configure version display
- How to manage versioned documentation
- How to update and backport fixes
- How to archive old versions
- How to test versioned documentation
- Versioning best practices

Good versioning supports users at all upgrade levels.

---

## Exercise

1. Create version snapshot for v2.0
2. Configure version display labels
3. Set lastVersion to '2.0'
4. Add deprecation notice to old version
5. Update current docs for v3.0
6. Test locally: switch versions
7. Verify sidebars load correctly
8. Test version URLs
9. Build for production
10. Serve and verify all versions work

---

## Knowledge Check

<details>
<summary><strong>1. What is Docusaurus versioning?</strong></summary>

Docusaurus versioning lets you maintain multiple versions of documentation simultaneously. Each version corresponds to a product release. Users can switch versions to see docs for their version.

</details>

<details>
<summary><strong>2. How do you create a version snapshot?</strong></summary>

Run:
```bash
npm run docusaurus docs:version 2.0
```

This creates a snapshot of current docs in `versioned_docs/version-2.0/`.

</details>

<details>
<summary><strong>3. What files does versioning create?</strong></summary>

- **versioned_docs/version-X.X/**: Snapshot of docs
- **versioned_sidebars/version-X.X-sidebars.js**: Sidebar config for version
- **versions.json**: List of all versions

</details>

<details>
<summary><strong>4. What's the difference between "current" and "latest" version?</strong></summary>

**Current:** Next unreleased version (v3.0). Under development. Shows new features.

**Latest:** Most recent stable release (v2.0). What most users run. Default docs shown.

</details>

<details>
<summary><strong>5. How do you configure version labels?</strong></summary>

In `docusaurus.config.ts`:

```typescript
versions: {
  current: { label: 'v3.0 (Dev)', path: 'next' },
  '2.0': { label: 'v2.0 (Latest)', path: 'docs' },
}
```

</details>

<details>
<summary><strong>6. How do you mark a version as deprecated?</strong></summary>

Add deprecation notice in versioned docs:

```markdown
:::warning Deprecated

This version is no longer supported. Upgrade to v2.0.
```

</details>

<details>
<summary><strong>7. How do you update old version docs?</strong></summary>

Edit files in `versioned_docs/version-X.X/` directly for bug fixes or critical updates.

Test: `npm run start` → switch to version → verify changes.

</details>

<details>
<summary><strong>8. How many versions should you support?</strong></summary>

Recommended: 2-3 active versions.

- Latest (current stable)
- Previous (maintenance)
- Older (reference/archive)

More than 3 becomes hard to maintain.

</details>

---

## Next Lesson

After mastering versioning, learn how to deploy your Docusaurus documentation site to production and keep it updated.