---
title: Deploying Docusaurus Documentation
sidebar_position: 13
description: Learn how to build and deploy your Docusaurus documentation to production hosting platforms.
---

# Deploying Docusaurus Documentation

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand deployment process and options.
- Build Docusaurus for production.
- Deploy to GitHub Pages.
- Deploy to Netlify.
- Deploy to Vercel.
- Configure custom domains.
- Set up automatic deployments (CI/CD).
- Apply deployment best practices.

---

## What Is Deployment?

Deployment is publishing your documentation site to production so users can access it.

### Deployment Process

```
Local Development
    ↓ (npm run build)
Built Output (static files)
    ↓ (upload)
Production Server
    ↓
Users Access https://docs.example.com
```

### Deployment Platforms

**GitHub Pages:**
- Free, easy setup
- Built-in to GitHub
- Good for small projects
- Limited customization

**Netlify:**
- Free with pro features
- Auto deployment from Git
- Great UX
- Good CI/CD support

**Vercel:**
- Free with pro features
- Optimized for React/Next.js
- Global CDN
- Excellent performance

**Self-hosted:**
- Full control
- Custom domain
- Most expensive
- Requires infrastructure

:::important

Choose hosting that matches your needs: free for learning, paid for production.

:::

---

## Before You Start

Make sure you have:

- Docusaurus built and tested locally
- Git repository on GitHub
- Hosting platform account (GitHub/Netlify/Vercel)
- Custom domain (optional)
- Understanding of your deployment platform

:::note

**For Beginners**

GitHub Pages is easiest to start. Netlify/Vercel are better for production.

:::

---

## Building for Production

### Build Command

```bash
npm run build
```

This creates optimized production build:
- Minifies CSS and JavaScript
- Optimizes images
- Creates static HTML files
- Prepares for deployment

**Output:** `build/` folder (ready to deploy)

### Build Output Structure

```
build/
├── index.html          (homepage)
├── docs/
│   ├── intro/
│   │   └── index.html
│   ├── guide/
│   │   └── index.html
│   └── api/
│       └── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── sitemap.xml         (for search engines)
```

All files are static HTML, CSS, JavaScript.

### Test Build Locally

Before deploying:

```bash
npm run build
npm run serve
```

Visit `http://localhost:3000` and test:
- All pages load
- Links work
- Navigation functions
- Search works (if enabled)
- Version switching works

**Result:** Ready to deploy!

---

## Deploying to GitHub Pages

### Configuration

In `docusaurus.config.ts`:

```typescript
const config: Config = {
  url: 'https://riffat786.github.io',
  baseUrl: '/Start-Docs-as-Code-with-Me/',
  
  organizationName: 'Riffat786',      // GitHub org/user
  projectName: 'Start-Docs-as-Code-with-Me',  // Repo name
};
```

**Real example from this project:**
```typescript
url: 'https://riffat786.github.io',
baseUrl: '/Start-Docs-as-Code-with-Me/',
organizationName: 'Riffat786',
projectName: 'Start-Docs-as-Code-with-Me',
```

This configuration tells Docusaurus:
- Site URL: GitHub Pages URL
- Base URL: Project folder path
- Organization: Your GitHub username
- Project: Repository name

### Deploy to GitHub Pages

**Step 1: Install deployment script**

```bash
npm install --save-dev gh-pages
```

**Step 2: Build**

```bash
npm run build
```

**Step 3: Deploy**

```bash
npm run docusaurus deploy
```

Or add to package.json:

```json
{
  "scripts": {
    "deploy": "docusaurus deploy"
  }
}
```

Then run: `npm run deploy`

**Step 4: Configure GitHub**

In repository Settings → Pages:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

**Step 5: Verify**

Visit: `https://riffat786.github.io/Start-Docs-as-Code-with-Me/`

**Result:** Documentation live on GitHub Pages!

### GitHub Actions Automation

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

This automatically deploys when you push to main.

---

## Deploying to Netlify

### Connect GitHub Repository

1. Visit netlify.com
2. Click "New site from Git"
3. Connect GitHub account
4. Select repository
5. Choose branch (main)

### Configure Build Settings

Netlify auto-detects:
- Build command: `npm run build`
- Publish directory: `build`

Verify settings:
- Build command: `npm run build`
- Publish directory: `./build`
- Node version: 18+

### Deploy

Click "Deploy site"

**Result:** Site deploying automatically!

### Custom Domain

1. Settings → Domain management
2. Add custom domain
3. Update DNS records
4. Verify ownership

**Example:**
- Domain: docs.example.com
- Netlify URL: wonderful-name-abc123.netlify.app
- Point DNS to Netlify nameservers

---

## Deploying to Vercel

### Connect GitHub

1. Visit vercel.com
2. Click "New Project"
3. Import Git repository
4. Select GitHub account and repo

### Configure

Vercel auto-detects Docusaurus:
- Framework: Docusaurus
- Build command: `npm run build`
- Output directory: `build`

### Deploy

Click "Deploy"

Vercel builds and deploys automatically.

**Result:** Documentation live on Vercel!

### Custom Domain

1. Settings → Domains
2. Add custom domain
3. Verify DNS
4. Enable SSL

---

## Custom Domain Setup

### Domain Configuration

Point domain to hosting:

**GitHub Pages:**
```
example.com → riffat786.github.io
```

In repository Settings → Pages → Custom domain

**Netlify:**
```
example.com → netlify nameservers
```

In Netlify Settings → Domain management

**Vercel:**
```
example.com → vercel nameservers
```

In Vercel Settings → Domains

### DNS Records

For most platforms, change:

**Name servers:**
```
ns1.platform.com
ns2.platform.com
ns3.platform.com
ns4.platform.com
```

Or add CNAME:
```
www.example.com CNAME your-site.netlify.app
```

Check platform docs for exact records.

---

## How-To: Complete Deployment

### Step 1: Local Testing

```bash
npm run build
npm run serve
```

Test all pages locally.

### Step 2: Build Configuration

Edit `docusaurus.config.ts`:

```typescript
const config: Config = {
  url: 'https://docs.example.com',
  baseUrl: '/',
  
  organizationName: 'your-org',
  projectName: 'your-repo',
};
```

### Step 3: Choose Platform

- **Free + Easy:** GitHub Pages
- **Free + Better:** Netlify
- **Premium:** Vercel

### Step 4: Configure Platform

Each platform has different setup. Follow their docs.

### Step 5: Connect Repository

Link your GitHub repository.

### Step 6: Configure Build

- Build command: `npm run build`
- Output directory: `build`
- Node version: 18+

### Step 7: Deploy

Click deploy button or push to trigger automatic deployment.

### Step 8: Test

Visit your site. Test:
- Homepage loads
- All links work
- Navigation works
- Mobile responsive
- Search works

### Step 9: Custom Domain (Optional)

Add custom domain in platform settings.

**Result:** Live documentation!

---

## CI/CD Best Practices

### Automated Deployments

Deploy automatically when you push to main:

```yaml
# On push to main
git push origin main
  ↓
GitHub Actions / Platform CI
  ↓
npm install
  ↓
npm run build
  ↓
Deploy to production
  ↓
Automatically available
```

### Preview Deployments

Netlify/Vercel create preview for pull requests:

```
Pull Request #42
  ↓
Create preview deployment
  ↓
Comment with preview URL
  ↓
Review changes before merge
  ↓
Merge to main
  ↓
Deploy to production
```

### Automatic Checks

Before deploying, run checks:

```yaml
- Build check
- Link validation
- Broken image check
- Performance audit
- Security scan
```

Only deploy if all pass.

---

## Deployment Troubleshooting

### Build Fails

**Problem:** Build command fails

**Solutions:**
1. Check error messages
2. Run locally: `npm run build`
3. Fix errors
4. Commit and push

### Broken Links After Deploy

**Problem:** Links work locally but not on production

**Solutions:**
1. Check baseUrl in config
2. Verify path matches GitHub repo name
3. Test locally with production build: `npm run serve`
4. Check browser console for 404 errors

### Assets Not Loading

**Problem:** Images, CSS, JS not loading

**Solutions:**
1. Check static folder exists
2. Verify relative paths
3. Check publicUrl in config
4. Inspect Network tab in browser dev tools

---

## Best Practices

### Do's

✓ Test locally before deploying
✓ Use automated deployments (CI/CD)
✓ Keep build fast (under 5 minutes)
✓ Monitor deployment status
✓ Keep main branch stable
✓ Use preview deployments
✓ Test on production URL
✓ Monitor user errors (Sentry, etc.)

### Don'ts

✗ Don't deploy without testing
✗ Don't push broken builds
✗ Don't ignore error messages
✗ Don't forget SSL certificate
✗ Don't skip backup
✗ Don't hardcode URLs
✗ Don't deploy during traffic peaks
✗ Don't forget to test mobile

---

## Summary

In this lesson, you learned:

- How deployment process works
- How to build for production
- How to deploy to GitHub Pages
- How to deploy to Netlify
- How to deploy to Vercel
- How to set up custom domains
- How to automate deployments (CI/CD)
- Deployment troubleshooting and best practices

Good deployment makes documentation accessible to all users.

---

## Exercise

1. Build locally: `npm run build`
2. Serve build: `npm run serve`
3. Test all pages locally
4. Choose hosting platform
5. Configure build settings
6. Connect GitHub repository
7. Deploy site
8. Verify deployment
9. Add custom domain (optional)
10. Test on production

---

## Knowledge Check

<details>
<summary><strong>1. What is deployment?</strong></summary>

Deployment is publishing your documentation to production so users can access it via the internet. It takes your local files and makes them live on a server.

</details>

<details>
<summary><strong>2. What does `npm run build` do?</strong></summary>

Builds optimized production version:
- Minifies CSS and JavaScript
- Optimizes images
- Creates static HTML files
- Prepares for deployment

Output goes to `build/` folder.

</details>

<details>
<summary><strong>3. What are deployment platform options?</strong></summary>

- **GitHub Pages:** Free, easy, built-in
- **Netlify:** Free with features, auto deployment
- **Vercel:** Free with features, optimized for React
- **Self-hosted:** Full control, more expensive

</details>

<details>
<summary><strong>4. What configuration does GitHub Pages need?</strong></summary>

In `docusaurus.config.ts`:

```typescript
url: 'https://username.github.io',
baseUrl: '/repo-name/',
organizationName: 'username',
projectName: 'repo-name',
```

</details>

<details>
<summary><strong>5. How does automatic deployment work?</strong></summary>

With CI/CD (GitHub Actions, Netlify, Vercel):

1. Push to main branch
2. CI/CD pipeline triggered
3. Runs `npm run build`
4. Deploys to production
5. Site updated automatically

No manual deployment needed.

</details>

<details>
<summary><strong>6. How do you set up a custom domain?</strong></summary>

1. Purchase domain from registrar
2. Add domain to hosting platform
3. Update DNS to point to platform
4. Enable SSL certificate
5. Verify in platform settings

</details>

<details>
<summary><strong>7. What should you test before deploying?</strong></summary>

Before deploying:
- Build succeeds locally
- All pages load
- Links work
- Navigation functions
- Mobile responsive
- Search works (if enabled)
- Images load
- No console errors

</details>

<details>
<summary><strong>8. Why use preview deployments?</strong></summary>

Preview deployments let you:
- Test changes in production environment
- Share with others before merging
- Catch deployment issues early
- Review on production URL
- Only merge if everything looks good

</details>

---

## Next Lesson

After mastering deployment, learn best practices for maintaining and improving your documentation over time.