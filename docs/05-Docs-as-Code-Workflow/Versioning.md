---
title: Documentation Versioning Strategy
sidebar_position: 7
description: Learn how to manage and maintain multiple versions of documentation effectively.
---

# Documentation Versioning Strategy

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand why versioning matters for documentation.
- Choose appropriate versioning strategy.
- Use semantic versioning properly.
- Support multiple documentation versions.
- Manage version branches and content.
- Route users to correct versions.
- Maintain versions sustainably.
- Apply versioning best practices.

---

## Why Documentation Versioning Matters

Users don't all upgrade at the same time.

**The Reality:**
- Some users use v1.0
- Some use v1.5
- Some use v2.0 (latest)
- All have different needs

**Without versioning:**
- Documentation only shows latest version
- Users on v1.0 see docs for v2.0 (wrong!)
- Confusion and frustration
- Support requests increase

**With versioning:**
- Each version has matching docs
- Users on v1.0 see v1.0 docs
- Users on v2.0 see v2.0 docs
- Clear, organized, helpful

:::important

Documentation versioning shows users you support them wherever they are. It's professional and user-friendly.

:::

---

## Before You Start

Make sure you have:

- Product that has multiple versions
- Product version released to users
- Docs for current version
- Git repository for docs
- Plan for how long to support versions

:::note

**For Beginners**

Versioning starts simple: current + one previous. You can add more as you grow.

:::

---

## Understanding Version Types

### Active Versions

**Latest (Current):**
- Newest product version
- Most active development
- Frequent updates
- Full feature documentation
- All new features here first

**Stable (Previous):**
- Prior major version
- Maintenance mode only
- Security fixes applied
- Updates for critical issues
- Older, proven features

**Maintenance (Old):**
- Very old version
- Minimal support
- Security fixes only
- No new features
- Archive/"reference only" status

### Version Lifecycle

```
NEW (Latest)
  ↓ (development, frequent updates)
STABLE (Previous)
  ↓ (maintenance, minimal updates)
RETIRED (Old)
  ↓ (archive only, reference)
```

Versions move through this lifecycle over time.

---

## Versioning Strategy Options

### Strategy 1: Support Latest + Previous

**Best for:** Most teams, manageable workload

**How it works:**
- Latest version (v2.0): Active development
- Previous version (v1.0): Maintenance only
- Older versions: Retired/archived

**Timeline:**
- v1.0 released
- v2.0 released → v1.0 becomes maintenance
- v3.0 released → v2.0 becomes maintenance, v1.0 retired
- v4.0 released → v3.0 becomes maintenance, v2.0 retired

**Support duration:** Each version supported for ~12 months after next release

**Pros:**
- Manageable workload
- Common approach
- Users have upgrade path
- Not too many versions

**Cons:**
- Users on old version unsupported
- Still maintain 2 versions

### Strategy 2: Support All Recent Versions

**Best for:** Mission-critical products, large user base

**How it works:**
- Support multiple versions
- Strict support timeline
- Security updates for all

**Example: Node.js approach**
- Latest (v20): Active
- Previous 2 majors (v18, v19): Maintenance
- LTS (Long Term Support): Extended support
- Older: Retired

**Support duration:** Varies, typically 18-36 months

**Pros:**
- Users have long upgrade window
- Enterprise-friendly
- Clear support timeline
- Professional appearance

**Cons:**
- High maintenance workload
- Complex infrastructure
- Expensive to maintain
- Overkill for most teams

### Strategy 3: Support Latest Only

**Best for:** Small teams, rapidly evolving product

**How it works:**
- Only latest version documented
- Previous versions not supported
- Users must upgrade

**Pros:**
- Minimal maintenance
- Simple to manage
- Forces upgrades
- Small workload

**Cons:**
- Frustrating for users
- Can't support users on older versions
- Limited upgrade time
- May lose users
- Unprofessional

### Recommendation

**For most documentation teams: Support Latest + Previous**

It's:
- Manageable workload
- Fair to users
- Professional
- Clear upgrade path
- Industry standard

Start with this. Upgrade to more versions only if users demand it.

---

## Version Numbering

### Semantic Versioning

Use consistent numbering: `MAJOR.MINOR.PATCH`

**Examples:**
```
v1.0.0 (first release)
v1.0.1 (security patch)
v1.1.0 (minor feature)
v1.2.0 (more features)
v2.0.0 (major rewrite)
v2.0.1 (bug fix)
```

**MAJOR (v1.0.0 → v2.0.0):**
- Breaking changes
- Incompatible upgrades
- Complete rewrites
- Requires migration guide

**MINOR (v1.0.0 → v1.1.0):**
- New features
- Backward compatible
- Users can skip if they want
- Optional upgrade

**PATCH (v1.0.0 → v1.0.1):**
- Bug fixes
- Security fixes
- Backward compatible
- Strongly recommended

### Long Term Support (LTS)

Some versions get extended support:

```
v1.0.0 (Regular: 12 months support)
v2.0.0 (LTS: 36 months support) ← extra long support
v3.0.0 (Regular: 12 months support)
v4.0.0 (LTS: 36 months support) ← extra long support
```

Mark LTS versions clearly so users know they're safe to stay on.

---

## Setting Up Multi-Version Documentation

### Folder Structure

```
docs/
├── current/           (v2.0 - latest)
│   ├── getting-started.md
│   ├── api/
│   └── guides/
├── v1.0/              (old - maintenance)
│   ├── getting-started.md
│   ├── api/
│   └── guides/
└── archived/          (very old - reference)
    ├── v0.5/
    └── v0.9/
```

**Or:**

```
docs/
├── 2.0/               (v2.0 - latest)
│   ├── getting-started.md
│   └── ...
├── 1.0/               (v1.0 - old)
│   ├── getting-started.md
│   └── ...
└── 0.5/               (archived)
    └── ...
```

### Git Branches for Versions

```bash
# Latest version on main
main (v2.0 development)

# Create branch for old version
git branch v1.0
git push origin v1.0

# v1.0 branch gets bug fixes only
# main branch gets new features and v2.0 content
```

**How it works:**
- Developers push to main for v2.0 work
- Hotfixes for v1.0 go to v1.0 branch
- Hotfixes get backported (cherry-picked) to main if needed

### User Access by Version

**Setup in site config:**

For Docusaurus, MkDocs, or similar:

```yaml
versions:
  - name: "v2.0 (Latest)"
    folder: "docs/current"
    url: "https://docs.example.com"
  
  - name: "v1.0 (Maintenance)"
    folder: "docs/v1.0"
    url: "https://docs.example.com/v1.0"
  
  - name: "Older"
    folder: "docs/archived"
    url: "https://docs.example.com/archived"
```

Users select version from dropdown.

---

## How-To: Set Up Multi-Version Documentation

### Step 1: Create version folders

```bash
mkdir -p docs/current
mkdir -p docs/v1.0
mkdir -p docs/archived
```

### Step 2: Copy content to v1.0

```bash
# When v1.0 is done, copy docs to v1.0 folder
cp -r docs/getting-started docs/v1.0/
cp -r docs/api docs/v1.0/
cp -r docs/guides docs/v1.0/

git add docs/v1.0/
git commit -m "Snapshot v1.0 documentation"
```

### Step 3: Create version branch

```bash
git branch v1.0
git push origin v1.0
```

### Step 4: Update main for v2.0

On main branch:
```bash
# Update docs for v2.0 features
# Update getting-started for new flow
# Update API reference with new endpoints

git commit -m "Update documentation for v2.0 features"
git push origin main
```

### Step 5: Configure site

In `docusaurus.config.js` or equivalent:

```javascript
const versions = {
  current: {
    label: 'v2.0 (Latest)',
    path: 'docs',
  },
  v1: {
    label: 'v1.0 (Maintenance)',
    path: 'versioned_docs/version-v1.0',
  },
};
```

### Step 6: Test locally

```bash
npm run build
npm run serve

# Visit http://localhost:3000
# Switch versions from dropdown
# Verify each version shows correct content
```

**Result:** Users can access documentation for all versions.

---

## Managing Multiple Versions

### Maintenance Workflow

**For latest (v2.0):**
```bash
# Development continues on main
git switch main
git commit -m "Add new feature documentation"
git push origin main
```

**For previous (v1.0):**
```bash
# Only bug fixes and security updates
git switch v1.0
git commit -m "Fix broken link in API docs"
git push origin v1.0
```

**For both (rare):**
```bash
# Fix bug in both versions
git switch main
git commit -m "Fix critical security issue in both v2.0 and v1.0"
git push origin main

# Cherry-pick same fix to v1.0
git switch v1.0
git cherry-pick <commit-hash>
git push origin v1.0
```

### Handling Breaking Changes

When upgrading versions:

**What changes in v2.0:**
- API endpoints change
- Configuration format changes
- Terminology changes
- File structure changes

**What to do:**
1. **Mark deprecated:** In v1.0 docs, mark old way
2. **Create migration guide:** Show how to upgrade
3. **Link prominently:** From v1.0 to migration guide
4. **Support users:** Help them transition

**Example migration guide:**

```markdown
# Migrating from v1.0 to v2.0

## Breaking Changes

### API Endpoints
**v1.0:** `/api/users`
**v2.0:** `/api/v2/users`

To migrate:
1. Update all API calls
2. Change `/api/` to `/api/v2/`
3. Test your application

### Configuration
**v1.0:** `config.json`
**v2.0:** `config.yaml`

See [Configuration Guide](./config.md) for details.
```

---

## Version Deprecation

### Marking Versions as Deprecated

When ending support for a version:

**On v1.0 docs home page:**

```markdown
⚠️ This is documentation for v1.0, which is no longer actively supported.

**We recommend upgrading to v2.0**

See [Upgrade Guide](../migrate-v1-to-v2.md) for instructions.

Support ends: December 31, 2024
```

### Communication Plan

1. **3 months before:** Announce end of support
2. **1 month before:** Send reminder
3. **At end date:** Move to archive section
4. **Keep accessible:** Maintain archive for reference

### After Deprecation

Move to "Archive" section:

```
docs/
├── current/    (v2.0)
├── v1.0/       (Maintenance)
└── archived/
    └── v1.0-docs/  (reference only)
```

Users can still access but know it's old.

---

## Version Support Timeline

### Example: 18-Month Support Window

```
v1.0 Released (Jan 2023)
  ↓
v2.0 Released (Jul 2023) → v1.0 enters maintenance
  ↓
v3.0 Released (Jan 2024) → v2.0 enters maintenance, v1.0 support ends
  ↓
v1.0 Support Ends (Jul 2024) - moved to archive
```

Total support: 18 months from release to deprecation

### Communicating Timeline

Make it clear to users:

```markdown
# Version Support Timeline

| Version | Release | Support Ends | Status |
|---------|---------|-------------|--------|
| v3.0    | Jan 24  | Jan 25      | Current |
| v2.0    | Jul 23  | Jan 24      | Maintenance |
| v1.0    | Jan 23  | Jul 24      | Maintenance |
| v0.9    | Jul 22  | Jan 23      | Archived |
```

Users know exactly when support ends.

---

## Best Practices

### Do's

✓ Support at least 2 versions
✓ Clearly mark which version is latest
✓ Mark deprecated versions prominently
✓ Maintain version branches for old versions
✓ Make it easy to switch versions
✓ Communicate support timeline
✓ Backport critical fixes to older versions

### Don'ts

✗ Support only latest version (frustrating for users)
✗ Support too many versions (unmaintainable)
✗ Mix versions in same docs (confusing)
✗ Leave old versions without warning (professional)
✗ Change version numbers inconsistently
✗ Hide old versions (they're still valid)
✗ Forget to update old versions for security fixes

---

## Summary

In this lesson, you learned:

- Why documentation versioning matters
- Different versioning strategies
- Semantic versioning approach
- How to set up multi-version documentation
- How to manage multiple versions sustainably
- How to deprecate old versions
- Support timeline planning
- Versioning best practices

Good versioning shows users you support them wherever they are. It's sustainable, professional, and user-friendly.

---

## Exercise

1. Choose versioning strategy for your product
2. Document support timeline
3. Set up version folders
4. Create version branches
5. Configure site for multiple versions
6. Test version switching
7. Write migration guide for major version
8. Mark old versions clearly
9. Create version deprecation plan
10. Train team on version workflow

---

## Knowledge check

<details>
<summary><strong>1. Why is documentation versioning important?</strong></summary>

Users don't all upgrade at the same time. Versioning ensures each user sees documentation that matches their version. Without versioning, users on old versions see docs for new versions (wrong and confusing).

</details>

<details>
<summary><strong>2. What is the recommended versioning strategy?</strong></summary>

Support latest + previous version. Latest is actively developed. Previous is maintenance-only (bug fixes, security updates). Older versions are archived. This is manageable, fair to users, and industry standard.

</details>

<details>
<summary><strong>3. What is semantic versioning?</strong></summary>

MAJOR.MINOR.PATCH format (e.g., v2.0.0):
- **MAJOR:** Breaking changes (requires migration)
- **MINOR:** New features (optional upgrade)
- **PATCH:** Bug/security fixes (recommended)

Consistent versioning helps users understand impact of upgrade.

</details>

<details>
<summary><strong>4. How do you store multiple versions in Git?</strong></summary>

Use version branches:
- **main:** Latest version development (v2.0)
- **v1.0:** Old version maintenance branch
- Hotfixes to v1.0 go to v1.0 branch
- Changes needed in both get cherry-picked

Each version has its own branch for independent maintenance.

</details>

<details>
<summary><strong>5. How do users access different versions?</strong></summary>

Version dropdown in documentation site:
- `docs.example.com` → v2.0 (latest)
- `docs.example.com/v1.0` → v1.0 (old)
- `docs.example.com/archived` → older versions

Users select their version from dropdown.

</details>

<details>
<summary><strong>6. What should you include in a migration guide?</strong></summary>

Migration guide should include:
- Breaking changes (what's different)
- Step-by-step upgrade instructions
- Examples of old vs. new code
- Common migration issues
- Links to relevant documentation
- Support contact info

Help users understand and execute upgrade.

</details>

<details>
<summary><strong>7. How long should you support a version?</strong></summary>

Typical support: 12-18 months from release.

Announce timeline upfront so users can plan:
- Support announced with release
- Reminder at 1 month before end
- Archive section after support ends
- Old docs still accessible for reference

Clear timeline helps users manage upgrades.

</details>

<details>
<summary><strong>8. How should you mark deprecated versions?</strong></summary>

Add warning at top of deprecated version docs:

⚠️ "This is documentation for v1.0, no longer actively supported.

Upgrade to v2.0: [link to migration guide]"

Clear warning helps users find current version quickly.

</details>

---

## Next Lesson

Now that you understand documentation versioning, explore how to measure documentation quality and impact to continuously improve.