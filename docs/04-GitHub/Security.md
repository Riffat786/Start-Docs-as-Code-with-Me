---
title: Security Best Practices for Documentation
sidebar_position: 8
description: Learn how to keep your documentation repository secure and protect sensitive information.
---

# Security Best Practices for Documentation

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand security risks in documentation repositories.
- Protect sensitive information and secrets.
- Manage access and permissions securely.
- Secure GitHub Actions workflows.
- Handle API keys and credentials safely.
- Audit repository activity.
- Apply security best practices in Docs-as-Code workflows.

---

## Why Security Matters for Documentation

Documentation repositories contain:

- **Team information** - Names, emails, company details
- **API references** - Endpoint URLs, authentication details
- **Code examples** - Sometimes with temporary credentials
- **Architecture information** - System design and infrastructure
- **User data** - If documenting how users work with your product
- **Internal processes** - How your team works

Compromised documentation can leak:

- API credentials
- Internal infrastructure details
- Security vulnerabilities
- Employee information

:::important

Documentation security protects your organization and users. Treat documentation like code: secure by default.

:::

---

## Before You Start

Make sure you have:

- Understanding of GitHub permissions
- Access to repository settings
- Knowledge of what's sensitive
- Team agreement on security practices

:::note

**For Beginners**

Security is everyone's responsibility. Even technical writers should understand basic security practices.

:::

---

## Common Security Risks

### Risk 1: Secrets in Code Examples

**Problem:**
```javascript
// DON'T DO THIS
const apiKey = "sk_live_abc123def456";

fetch('https://api.example.com/users', {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});
```

**What's wrong:**
- Real API key is in the example
- Anyone with access can steal the key
- Key is in Git history (hard to remove)

**Better approach:**
```javascript
// USE ENVIRONMENT VARIABLES
const apiKey = process.env.API_KEY;

fetch('https://api.example.com/users', {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});
```

### Risk 2: Email Addresses Exposed

**Problem:**
```markdown
Contact our team:
- john.smith@company.com
- sarah.jones@company.com
```

**What's wrong:**
- Personal email addresses exposed
- Targets for phishing attacks
- Privacy violation

**Better approach:**
```markdown
Contact our team:
- Use our contact form: https://company.com/contact
- Email: support@company.com
```

### Risk 3: Internal URLs and IPs

**Problem:**
```markdown
Internal server: https://internal-api.company-network.local:8443
SSH to: deploy@192.168.1.100
```

**What's wrong:**
- Reveals internal infrastructure
- Attackers can target these systems
- Shows your architecture

**Better approach:**
Document using generic examples:
```markdown
Internal server: https://internal-api.your-domain
SSH to: deploy@your-deployment-server
```

### Risk 4: API Keys in Configuration Files

**Problem:**
```yaml
# .env.example
API_KEY=sk_live_abc123def456
DATABASE_PASSWORD=SuperSecret123
```

**What's wrong:**
- Real credentials in repository
- In Git history forever
- Visible to everyone with access

**Better approach:**
```yaml
# .env.example
API_KEY=your_api_key_here
DATABASE_PASSWORD=your_password_here
```

---

## Protecting Sensitive Information

### Use .gitignore

Prevent committing sensitive files:

```text
# .gitignore

# Environment variables
.env
.env.local
.env.*.local

# API keys and secrets
secrets/
credentials.json
api-keys.txt

# Temporary files
*.tmp
*.bak

# Build files
dist/
build/
```

Double-check: Don't commit these files!

### Environment Variables

Use environment variables, not hardcoded values:

**Bad:**
```bash
# In docs
API_KEY="sk_live_abc123def456"
```

**Good:**
```bash
# In documentation
export API_KEY="your-api-key-here"
# User provides their own API key
```

**In GitHub Actions:**

```yaml
- name: Build documentation
  run: npm run build
  env:
    API_KEY: ${{ secrets.API_KEY }}
```

The secret is passed securely, not visible in logs.

### Use GitHub Secrets

For automation, store secrets in GitHub:

1. Go to Settings → Secrets
2. Click "New repository secret"
3. Name: `API_KEY`
4. Value: `your-actual-api-key`
5. Click "Add secret"

**In workflows:**

```yaml
- name: Deploy documentation
  env:
    API_KEY: ${{ secrets.API_KEY }}
  run: ./deploy.sh
```

Secrets are:
- Encrypted at rest
- Never shown in logs
- Only accessible to workflows
- Hidden even if someone can view the workflow

:::warning

Never hardcode secrets in workflow files. Always use GitHub Secrets.

:::

### Sanitize Examples

Replace real values in examples:

**Bad:**
```
Authorization: Bearer sk_live_4eC39HqLyjWDarhmK8p5F97C
```

**Good:**
```
Authorization: Bearer YOUR_API_KEY_HERE
```

Or use obviously fake examples:

```
Authorization: Bearer sk_test_XXXXXXXXXXXXXXXXXXX
User-Agent: MyClient/1.0
```

---

## Managing Access and Permissions

### Principle of Least Privilege

Give people minimum access they need.

**Review permissions regularly:**

1. Go to Settings → Collaborators
2. Check each person's role
3. Remove access when someone leaves
4. Update when roles change

| Role | Should Have | Should Not Have |
|------|------------|-----------------|
| Viewer | Read docs, view discussions | Write, delete, admin |
| Contributor | Write docs, create PRs | Delete, admin, change settings |
| Maintainer | Write, reviews, merges | Delete, change settings, add users |
| Admin | Everything | Only give to managers |

### Branch Protection

Prevent accidental mistakes:

1. Settings → Branches → Add rule for `main`
2. Enable:
   - Require pull request reviews (at least 1)
   - Require status checks pass
   - Require branches up to date
   - Dismiss stale reviews

**Result:** Can't merge broken code.

### Two-Factor Authentication (2FA)

Require 2FA for all team members:

1. Settings → Security
2. Click "Require a two-factor authentication policy for this organization"
3. Team members set up 2FA on their accounts

Protects against account takeover.

### CODEOWNERS

Specify who must review certain files:

Create `.github/CODEOWNERS`:

```
# Everyone must review changes to security docs
docs/security/* @security-team

# API docs need API team review
docs/api/* @api-team

# Settings need admin review
CONTRIBUTING.md @admin-team
```

Ensures sensitive areas get proper review.

---

## Secure Workflows

### GitHub Actions Security

**Protect secrets in workflows:**

```yaml
# GOOD - Secret passed securely
- name: Deploy
  env:
    API_KEY: ${{ secrets.API_KEY }}
  run: ./deploy.sh

# BAD - Secret in arguments (visible in logs)
- name: Deploy
  run: ./deploy.sh --api-key ${{ secrets.API_KEY }}
```

**Limit workflow permissions:**

```yaml
# Restrict what workflow can do
permissions:
  contents: read
  pull-requests: write
  # Don't allow delete, admin changes, etc.
```

**Use trusted actions:**

Only use actions from verified publishers:

- Look for GitHub verified badge
- Check action source code
- Use specific versions: `actions/checkout@v3` not `@main`

**Never pass secrets to third-party actions:**

```yaml
# GOOD - No secrets passed
- uses: some-action@v1

# BAD - Don't pass secrets to untrusted actions
- uses: some-action@v1
  with:
    api-key: ${{ secrets.API_KEY }}
```

---

## Audit and Monitoring

### Audit Log

See who did what in your repository:

1. Go to Settings → Audit Log
2. View all changes to settings, permissions, etc.
3. See who added/removed users
4. See when settings changed

Review regularly for suspicious activity.

### Protected Branches Activity

See who pushed to main:

1. Go to Insights → Network
2. Visual representation of commits
3. See who made changes
4. View merge history

### Security Alert

GitHub notifies about vulnerabilities:

1. Settings → Security & analysis
2. Enable "Dependabot alerts"
3. Get notified of vulnerable dependencies

### Access Logs

Monitor who has access:

1. Settings → Collaborators
2. See all team members and their roles
3. Review quarterly
4. Remove inactive users

---

## Data Privacy Considerations

### GDPR Compliance

If you have EU users:

- Remove personal data after it's not needed
- Get consent before storing user data
- Provide way for users to request their data
- Document data handling in privacy policy

### User Examples in Documentation

If documenting with user data:

```markdown
// DON'T DO THIS - Real user data
const users = [
  { id: 1, email: "john.smith@real-company.com", phone: "555-1234" },
  { id: 2, email: "jane.doe@real-company.com", phone: "555-5678" }
];

// DO THIS - Anonymized example data
const users = [
  { id: 1, email: "user1@example.com", phone: "555-0001" },
  { id: 2, email: "user2@example.com", phone: "555-0002" }
];
```

Use placeholder/example data, never real user data.

---

## Security Checklist

### Repository Setup

- [ ] .gitignore includes all sensitive files
- [ ] No secrets committed to history
- [ ] Branch protection enabled on main
- [ ] PR review required before merge
- [ ] 2FA enabled for all team members
- [ ] CODEOWNERS file created
- [ ] Public/private visibility correct

### Ongoing

- [ ] Review collaborators monthly
- [ ] Check audit log for suspicious activity
- [ ] Validate no new secrets added
- [ ] Update access when people leave
- [ ] Review GitHub Actions workflows
- [ ] Keep dependencies updated
- [ ] Test disaster recovery (can restore from backup?)

### Code Examples

- [ ] No real API keys in examples
- [ ] No real passwords or credentials
- [ ] No real email addresses
- [ ] No internal URLs or IPs
- [ ] No personal or real user data
- [ ] Examples use environment variables
- [ ] Examples are clearly marked as examples

---

## What If You Accidentally Committed a Secret?

### Immediate Actions

If you committed an API key:

1. **IMMEDIATELY** revoke the key in your API provider
   - Don't wait, do this first
   - Generate new key to replace it

2. Remove from Git history
   ```bash
   # WARNING: This rewrites history
   git filter-branch --tree-filter 'rm -f <path-to-file>' HEAD
   git push -f origin main
   ```

3. Alert your team
   - Tell manager/security team
   - Explain what happened
   - Show what you did to fix it

### Preventing Future Incidents

- Use pre-commit hooks to scan for secrets
- Review before pushing: `git diff origin/main`
- Use `.gitignore` for all sensitive files
- Never commit `.env` files
- Educate team on what's sensitive

### Tools to Help

**Pre-commit hooks to scan for secrets:**

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.15.2
    hooks:
      - id: gitleaks
```

Automatically checks commits for secrets before allowing commit.

:::danger

If you commit a secret, treat it as compromised immediately. Revoke it and generate new credentials.

:::

---

## Team Security Culture

### Documentation Manager's Responsibility

- **Set example** - Follow security practices
- **Educate team** - Explain why security matters
- **Review** - Check PRs for security issues
- **Monitor** - Watch for suspicious activity
- **Policies** - Create team security guidelines

### Team Member Responsibility

- **Don't commit secrets** - Always use environment variables
- **Review carefully** - Check for secrets in reviews
- **Ask questions** - Unsure? Ask before committing
- **Report issues** - If you see a problem, report it
- **Stay updated** - Learn new security practices

### Security Guidelines

Create a `SECURITY.md` file:

```markdown
# Security Guidelines

## What NOT to commit:
- API keys or tokens
- Passwords or credentials
- Database URLs
- Personal information
- Internal URLs/IPs

## What TO do:
- Use environment variables for sensitive data
- Use .gitignore for sensitive files
- Review code for secrets before committing
- Ask before committing anything uncertain
- Report security issues immediately

## Reporting Security Issues:
Email: security@company.com

Do NOT open a public issue for security problems.
```

---

## Summary

In this lesson, you learned how to:

- Understand security risks in documentation.
- Protect secrets and sensitive information.
- Manage access and permissions safely.
- Secure GitHub Actions workflows.
- Audit repository activity.
- Handle security incidents.
- Build a security-conscious team culture.

Security is everyone's responsibility. Make it part of your documentation workflow.

---

## Exercise

1. Review your repository for accidentally committed secrets
2. Update .gitignore to exclude all sensitive files
3. Set up branch protection on main branch
4. Enable 2FA for all team members
5. Review collaborators and their permissions
6. Enable Dependabot alerts
7. Check audit log for suspicious activity
8. Create CODEOWNERS file
9. Set up a pre-commit hook for secret detection
10. Create SECURITY.md guidelines for your team

---

## Common mistakes

<details>
<summary><strong>1. Committing .env files with real secrets</strong></summary>

**Cause**

Accidentally committed `.env` file with real API keys.

**Problem**

Secrets are in Git history. Everyone with access can see them.

**Solution**

Add `.env` to .gitignore BEFORE committing:

```text
.env
.env.local
```

Use `.env.example` with placeholder values instead.

If already committed, revoke keys immediately and rewrite history.

</details>

<details>
<summary><strong>2. Real credentials in code examples</strong></summary>

**Cause**

Copied real example with actual API key into documentation.

**Problem**

Key is visible to everyone. Can be stolen.

**Solution**

Always replace real values with examples:

Bad: `API_KEY=sk_live_4eC39HqLyjWDarhmK8p5F97C`

Good: `API_KEY=YOUR_API_KEY_HERE`

Review examples before committing.

</details>

<details>
<summary><strong>3. No branch protection</strong></summary>

**Cause**

Left main branch unprotected. Anyone can push directly.

**Problem**

Secrets can be pushed without review. No safety net.

**Solution**

Enable branch protection:
- Require PR reviews
- Require status checks
- Require up-to-date branches

Prevents accidental commits to main.

</details>

<details>
<summary><strong>4. Hardcoding secrets in GitHub Actions</strong></summary>

**Cause**

Put API key directly in workflow file.

**Problem**

Secret is visible in repository. Logged in build output.

**Solution**

Always use GitHub Secrets:

```yaml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

Never put real values in workflow files.

</details>

<details>
<summary><strong>5. Not revoking credentials when leaving team</strong></summary>

**Cause**

Team member left but kept access to repository.

**Problem**

Ex-employee can still access sensitive documentation.

**Solution**

When someone leaves:
- Remove repository access immediately
- Revoke any API keys they had
- Check what they accessed
- Update password if shared
- Inform security team

</details>

---

## Knowledge check

<details>
<summary><strong>1. What types of sensitive information should NOT be in documentation?</strong></summary>

Never commit:
- Real API keys or tokens
- Passwords or credentials
- Database connection strings
- Internal URLs or IPs
- Personal email addresses
- Real user data

Use examples and environment variables instead.

</details>

<details>
<summary><strong>2. How do you safely use API keys in code examples?</strong></summary>

Use environment variables:

```javascript
const apiKey = process.env.API_KEY;
```

Document that users should set their own key:

```bash
export API_KEY="your-api-key-here"
```

Never hardcode real keys.

</details>

<details>
<summary><strong>3. What is .gitignore and why is it important?</strong></summary>

.gitignore tells Git which files to ignore and not commit.

Important for excluding:
- .env files with secrets
- API keys
- Credentials
- Temporary files

Add sensitive files to .gitignore BEFORE committing.

</details>

<details>
<summary><strong>4. What are GitHub Secrets and when do you use them?</strong></summary>

GitHub Secrets securely store sensitive values for GitHub Actions.

Use for:
- API keys needed by workflows
- Deployment credentials
- Third-party service tokens

Access in workflows: `${{ secrets.SECRET_NAME }}`

Secrets are encrypted and not shown in logs.

</details>

<details>
<summary><strong>5. What's the principle of least privilege?</strong></summary>

Give people the minimum access they need to do their job.

Don't give everyone admin access. Instead:
- Viewers: Read only
- Contributors: Write access
- Maintainers: Review and merge
- Admin: Only for managers

Review and update permissions regularly.

</details>

<details>
<summary><strong>6. What should you do if you accidentally commit a secret?</strong></summary>

1. IMMEDIATELY revoke the secret in your provider
2. Generate new credentials to replace it
3. Remove from Git history (git filter-branch)
4. Alert your team and security team
5. Never blame, just fix it quickly

Don't panic - act fast and decisively.

</details>

<details>
<summary><strong>7. What is an audit log and why check it?</strong></summary>

Audit log records all changes to repository settings:
- Who added/removed users
- When permissions changed
- What settings changed
- Access history

Check regularly for suspicious activity.

</details>

<details>
<summary><strong>8. Why is 2FA important for documentation repositories?</strong></summary>

2FA (two-factor authentication) protects against account takeover.

Even if password is compromised, attacker can't access without second factor.

Require for all team members to protect repository from unauthorized access.

</details>

---

## Next Steps

Security is ongoing. Make security checks part of your regular workflow. Review and update security practices with your team quarterly. Stay informed about new threats and best practices.

You now have a comprehensive understanding of Docs-as-Code security!