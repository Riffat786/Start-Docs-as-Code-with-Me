---
title: Troubleshooting Docusaurus Issues
sidebar_position: 14
description: Common Docusaurus problems and their solutions to get your documentation site running smoothly.
---

# Troubleshooting Docusaurus Issues

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Diagnose Docusaurus build errors.
- Fix common development issues.
- Resolve deployment problems.
- Debug styling and layout issues.
- Handle navigation and linking problems.
- Fix performance issues.
- Access Docusaurus help and community.
- Apply systematic troubleshooting approach.

---

## Troubleshooting Approach

When something breaks:

1. **Read the error message carefully** - it usually tells you exactly what's wrong
2. **Search for the error** - Google usually has solutions
3. **Check Docusaurus docs** - official docs are thorough
4. **Test in isolation** - narrow down the problem
5. **Check recent changes** - what did you change last?
6. **Revert and retry** - undo recent changes
7. **Ask for help** - community is helpful

:::important

Most Docusaurus issues have solutions. Stay calm and debug systematically.

:::

---

## Common Build Errors

### Error: Module not found

**Error message:**
```
Error: Module '@docusaurus/core' not found
```

**Causes:**
- Node modules not installed
- Wrong dependency version
- Corrupted installation

**Solutions:**

```bash
# 1. Reinstall node modules
rm -rf node_modules
npm install

# 2. Clear cache
npm cache clean --force
npm install

# 3. Check Node version (need 16+)
node --version

# 4. Reinstall specific package
npm install @docusaurus/core@latest
```

**Result:** Module found, build works!

### Error: MDX Compilation Failed

**Error message:**
```
Error: MDX compilation failed for file "docs/intro.md"
Unexpected character `<` before name
```

**Causes:**
- Special characters in markdown (< > &)
- Mismatched JSX tags
- Invalid markdown syntax

**Solutions:**

```markdown
// ✗ Bad: < character causes issues
Keep build fast (<5 minutes)

// ✓ Good: Use words instead
Keep build fast (under 5 minutes)

// ✗ Bad: Unmatched JSX
<div>
Content
</section>

// ✓ Good: Matched tags
<div>
Content
</div>
```

Escape special characters or rephrase.

### Error: Cannot find module 'sidebars'

**Error message:**
```
Cannot find module './sidebars'
```

**Causes:**
- Wrong filename (Sidebars.ts vs sidebars.ts)
- File not in project root
- Typo in import

**Solutions:**

```bash
# Check file exists in project root
ls -la sidebars.ts

# Check filename exactly
# Should be: sidebars.ts or sidebars.js
# Not: Sidebars.ts or sidebars.js

# In docusaurus.config.ts, verify path
sidebarPath: './sidebars.ts'
```

**Result:** Module found!

---

## Development Issues

### Issue: Hot reload not working

**Problem:** Changes don't reflect when you save

**Causes:**
- File watching disabled
- Too many files (OS limit)
- Cache not cleared

**Solutions:**

```bash
# 1. Restart dev server
npm run start

# 2. Clear cache and restart
rm -rf .docusaurus
npm run start

# 3. Check file permissions
chmod +x docs/  # Linux/Mac

# 4. Increase file watchers (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Result:** Hot reload works!

### Issue: Port 3000 already in use

**Error message:**
```
Error: listen EADDRINUSE :::3000
```

**Causes:**
- Another process using port 3000
- Previous dev server still running

**Solutions:**

```bash
# 1. Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# 2. Use different port
npm run start -- --port 3001

# 3. Check what's running
lsof -i :3000  # Mac/Linux
netstat -ano | findstr LISTEN  # Windows
```

**Result:** Dev server starts on available port!

---

## Styling and Layout Issues

### Issue: Styles not applying

**Problem:** CSS changes don't show

**Causes:**
- CSS modules not imported
- Class names don't match
- Browser cache
- CSS specificity issue

**Solutions:**

```typescript
// ✗ Bad: Class defined but not imported
export function MyComponent() {
  return <div className={styles.myClass}>Content</div>;
}
// ERROR: styles is undefined

// ✓ Good: Import CSS module
import styles from './styles.module.css';

export function MyComponent() {
  return <div className={styles.myClass}>Content</div>;
}
```

Clear browser cache: `Ctrl+Shift+Delete`

### Issue: Navbar/Sidebar not showing

**Problem:** Navigation elements missing

**Causes:**
- Configuration missing or wrong
- Navigation items empty
- CSS display issue

**Solutions:**

```typescript
// Check docusaurus.config.ts
themeConfig: {
  navbar: {
    title: 'My Docs',
    items: [
      {
        to: '/docs',
        label: 'Docs',
        position: 'left',
      },
    ],
  },
}

// Check sidebars.ts exists
// Check sidebar items configured
```

Verify configuration in docusaurus.config.ts.

### Issue: Dark mode colors wrong

**Problem:** Dark mode not using correct colors

**Causes:**
- Dark mode colors not defined
- CSS specificity issue
- Browser cache

**Solutions:**

```css
/* In src/css/custom.css */

/* Light mode */
:root {
  --ifm-color-primary: #0066cc;
}

/* Dark mode */
[data-theme='dark'] {
  --ifm-color-primary: #4d94ff;
}
```

Clear cache and hard reload: `Ctrl+Shift+R`

---

## Navigation and Linking Issues

### Issue: Broken links

**Error message:**
```
Link broken: ../guides/install.md doesn't exist
```

**Causes:**
- Wrong file path
- File doesn't exist
- Relative path incorrect

**Solutions:**

```markdown
// ✗ Bad: File doesn't exist
[Read Guide](../guides/install.md)

// ✓ Good: Correct path
[Read Guide](../../guides/install/index.md)

// ✓ Good: Use doc ID
[Read Guide](/docs/guides/install)

// Check file exists
ls -la docs/guides/
```

Use absolute paths (starting with `/`) when possible.

### Issue: Sidebar links 404

**Problem:** Clicking sidebar links shows 404

**Causes:**
- Wrong doc IDs
- File not where sidebar expects
- Folder structure mismatch

**Solutions:**

```typescript
// In sidebars.ts

// ✗ Bad: File 'guides/install.md' doesn't exist
{
  type: 'doc',
  id: 'guides/install',
  label: 'Install',
}

// ✓ Good: File exists in docs/guides/install.md
{
  type: 'doc',
  id: 'guides/install',
  label: 'Install',
}

// Verify file structure
docs/
├── guides/
│   └── install.md ← Must exist

// Check sidebar positions
sidebar_position: 1  // Lower = first
```

Match sidebar IDs to actual file structure.

### Issue: Version links broken after deploy

**Problem:** Links work locally but not on production

**Causes:**
- Wrong baseUrl in config
- Path doesn't account for version
- Browser URL mismatch

**Solutions:**

```typescript
// In docusaurus.config.ts

// GitHub Pages example
url: 'https://riffat786.github.io',
baseUrl: '/Start-Docs-as-Code-with-Me/',

// Custom domain example
url: 'https://docs.example.com',
baseUrl: '/',

// Test with baseUrl
npm run build
npm run serve
// Then visit: http://localhost:3000/Start-Docs-as-Code-with-Me/
```

Test locally with production build.

---

## Deployment Issues

### Issue: Deployment fails silently

**Problem:** Build succeeds locally but deployment fails

**Causes:**
- Environment variables missing
- Node version mismatch
- Missing dependencies

**Solutions:**

```bash
# 1. Check build locally
npm run build
npm run serve

# 2. Check Node version matches
node --version  # Should be 16+

# 3. Verify .gitignore doesn't exclude build files
cat .gitignore | grep build

# 4. Check deployment logs
# In GitHub Actions: Actions tab
# In Netlify: Deployments → View logs
# In Vercel: Deployments → View logs
```

Check deployment logs for error details.

### Issue: Assets not loading on production

**Problem:** Images, CSS, JS don't load on deployed site

**Causes:**
- baseUrl wrong
- Assets in wrong folder
- Caching issue

**Solutions:**

```typescript
// In docusaurus.config.ts
// If deployed to subdirectory:
baseUrl: '/my-docs/',

// If deployed to root:
baseUrl: '/',

// Check assets in build/
ls -la build/

// Test with static server
npm run build
npm run serve
```

Verify baseUrl matches deployment location.

### Issue: Broken links on GitHub Pages

**Error message:**
```
404 on https://user.github.io/repo/docs/guide
```

**Causes:**
- baseUrl includes project name but url doesn't
- Path structure wrong

**Solutions:**

```typescript
// For GitHub Pages with project name

url: 'https://riffat786.github.io',
baseUrl: '/Start-Docs-as-Code-with-Me/',
organizationName: 'Riffat786',
projectName: 'Start-Docs-as-Code-with-Me',
```

Ensure url and baseUrl are consistent.

---

## Performance Issues

### Issue: Site loads slowly

**Problem:** Build takes forever or site is slow

**Causes:**
- Large images not optimized
- Too many dependencies
- Large code blocks

**Solutions:**

```bash
# 1. Optimize images
# Compress images before adding

# 2. Check build time
npm run build
# Look for slow plugins in output

# 3. Lazy load heavy components
import { lazy } from 'react';
const HeavyComponent = lazy(() => import('./Heavy'));

# 4. Split large docs
# One 10,000 word page → Five 2,000 word pages
```

Optimize images and split large content.

### Issue: Build memory error

**Error message:**
```
JavaScript heap out of memory
```

**Causes:**
- Too much content
- Memory limit too low
- Large images

**Solutions:**

```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Or on Windows:
set NODE_OPTIONS=--max-old-space-size=4096
npm run build

# Optimize content:
# Remove unused images
# Compress all images
# Split large docs
```

Increase memory or optimize content.

---

## Getting Help

### Official Resources

- **Docs:** https://docusaurus.io/docs
- **GitHub Issues:** https://github.com/facebook/docusaurus/issues
- **Discussions:** https://github.com/facebook/docusaurus/discussions
- **Community Discord:** https://discord.gg/docusaurus

### Asking for Help

When asking for help, provide:

```markdown
# Problem Title

## What I'm trying to do
[Clear description]

## What I've tried
1. [First attempt]
2. [Second attempt]

## Error message
[Full error, not just first line]

## My setup
- Docusaurus version: X.X.X
- Node version: X.X.X
- OS: Windows/Mac/Linux

## Minimal reproduction
[Small example showing issue]
```

Clear information gets faster help.

---

## Debugging Tips

### Enable Verbose Logging

```bash
DEBUG=* npm run start
```

Shows detailed debug information.

### Check Browser Console

Open Developer Tools: `F12`

Check Console tab for errors:
- Red errors = problems
- Yellow warnings = caution
- Check Network tab for 404s

### Test Build Separately

```bash
# Build only (no serve)
npm run build

# Check build folder
ls -la build/

# Serve build
npm run serve
```

Isolate build from dev server.

### Clear All Caches

```bash
# Remove all cache
rm -rf node_modules .docusaurus build
npm install
npm run build
```

Nuclear option when nothing else works.

---

## Summary

In this lesson, you learned:

- Common Docusaurus build errors and solutions
- Development environment issues and fixes
- Styling and layout troubleshooting
- Navigation and linking problem solutions
- Deployment issue diagnosis and fixes
- Performance optimization and debugging
- How to access help and community
- Systematic debugging approach

Good troubleshooting skills save time and frustration.

---

## Exercise

1. Intentionally break something (wrong import, bad config)
2. Read the error message carefully
3. Search for the error online
4. Apply the fix
5. Verify it works
6. Test build locally
7. Test on production build
8. Check browser console for errors
9. Test dark mode
10. Document what broke and how you fixed it

---

## Knowledge Check

<details>
<summary><strong>1. What's the first thing to do when Docusaurus breaks?</strong></summary>

Read the error message carefully. Error messages tell you exactly what's wrong. Most errors include the file and line number. Start there.

</details>

<details>
<summary><strong>2. How do you fix "Module not found" errors?</strong></summary>

1. Reinstall node modules: `rm -rf node_modules && npm install`
2. Clear cache: `npm cache clean --force`
3. Check Node version (need 16+)
4. Verify file exists and path is correct

</details>

<details>
<summary><strong>3. What causes MDX compilation errors?</strong></summary>

Usually special characters like `<` or `>` in markdown that look like JSX. Solution: escape or rephrase. Replace `<5 minutes` with `under 5 minutes`.

</details>

<details>
<summary><strong>4. How do you fix hot reload not working?</strong></summary>

1. Restart dev server: `npm run start`
2. Clear cache: `rm -rf .docusaurus`
3. Check file permissions
4. Increase file watchers (Linux): `fs.inotify.max_user_watches`

</details>

<details>
<summary><strong>5. Why do styles sometimes not apply?</strong></summary>

CSS modules not imported, class names don't match, or browser cache. Solution: import CSS module, verify class names, clear cache with `Ctrl+Shift+Delete`.

</details>

<details>
<summary><strong>6. What causes broken links after deployment?</strong></summary>

Wrong baseUrl in config. Solution: verify `baseUrl` matches deployment location. Test locally with: `npm run build && npm run serve`.

</details>

<details>
<summary><strong>7. How do you troubleshoot slow builds?</strong></summary>

1. Optimize images (compress before adding)
2. Check build time output
3. Lazy load heavy components
4. Split large docs into smaller files
5. Increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096"`

</details>

<details>
<summary><strong>8. Where can you get help?</strong></summary>

- **Official Docs:** https://docusaurus.io/docs
- **GitHub Issues:** Search before posting
- **GitHub Discussions:** Community help
- **Discord:** https://discord.gg/docusaurus
- Always include: version, Node version, OS, error message, reproduction steps

</details>

---

## Conclusion

You've completed the Docusaurus module! You now know:

- Sidebar configuration and navigation
- Navbar customization
- Custom homepage creation
- Static asset management
- Theme customization
- React component integration
- Documentation versioning
- Deployment to production
- Best practices for maintenance
- Troubleshooting common issues

You're ready to build professional documentation with Docusaurus. Start small, iterate, and continuously improve your documentation based on user feedback.

**Happy documenting! 📚**