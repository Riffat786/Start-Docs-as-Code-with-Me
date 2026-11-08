---
title: Documentation Review Workflow
sidebar_position: 6
description: Learn how to establish effective review processes that maintain documentation quality while enabling team collaboration.
---

# Documentation Review Workflow

> **Estimated reading time:** 23 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand documentation review processes and why they matter.
- Identify who should review documentation.
- Conduct thorough documentation reviews.
- Provide constructive feedback.
- Handle disagreements professionally.
- Implement review gates and automation.
- Scale review processes as team grows.
- Apply review best practices.

---

## Why Documentation Review Matters

Reviews catch problems before users see them:

**Quality Issues:**
- Typos and grammar errors
- Broken links and wrong information
- Inconsistent formatting
- Missing or unclear sections

**User Experience Issues:**
- Confusing explanations
- Missing prerequisites
- Outdated examples
- Poor structure

**Consistency Issues:**
- Different tone than other docs
- Inconsistent formatting
- Violates style guide
- Doesn't follow patterns

Without reviews, these problems reach users. With reviews, they're fixed before publishing.

:::important

Reviews are the gate between drafts and published documentation. They prevent embarrassment and user confusion.

:::

---

## Before You Start

Make sure you have:

- Documentation in Git repository
- Pull request workflow established
- Style guide documented
- Review team identified
- Understanding of quality standards

:::note

**For Beginners**

Review workflow is about establishing clear expectations. Simple process beats perfect process.

:::

---

## Review Types

Different reviews for different purposes.

### Type 1: Peer Review (Technical Writer to Technical Writer)

**Who:** Other technical writer

**Focuses on:**
- Clarity and readability
- Structure and organization
- Following style guide
- Consistency with other docs
- Grammar and spelling

**When:** All documentation

**Time:** 30 minutes to 1 hour

### Type 2: Technical Review (Subject Matter Expert)

**Who:** Engineer, product manager, or domain expert

**Focuses on:**
- Technical accuracy
- Correctness of examples
- API endpoints and parameters
- Best practices
- Completeness

**When:** Technical documentation, API reference, code examples

**Time:** 30 minutes to 2 hours (depends on complexity)

### Type 3: Management Review (Documentation Manager)

**Who:** Documentation manager or lead

**Focuses on:**
- Strategic fit
- Scope and completeness
- Timeline and resources
- Alignment with goals
- Release readiness

**When:** Major documentation pieces

**Time:** 15 minutes to 1 hour

### Review Combinations

**For most documentation:**
- Peer review (required)
- Technical review (if technical)
- Management approval (for major pieces)

**Typical flow:**

```
Author → Peer Review → Technical Review → Approved → Merge
                            ↓
                    (If feedback, revise and re-review)
```

---

## Peer Review Process

### What Peer Reviewers Check

**Structure and Organization:**
- Does introduction set context?
- Are sections in logical order?
- Do subsections support main topic?
- Is conclusion clear?

**Clarity:**
- Would new user understand?
- Is language clear and direct?
- Are difficult concepts explained?
- Are examples helpful?

**Consistency:**
- Matches style guide?
- Same tone as other docs?
- Formatting consistent?
- Link format consistent?

**Grammar and Spelling:**
- No typos?
- Proper grammar?
- Consistent capitalization?
- Correct punctuation?

### How-To: Conduct Peer Review

**Step 1: Read the PR**

On GitHub:
- Read title and description
- Review scope and purpose
- Understand what changed

**Step 2: Build locally**

```bash
git fetch origin
git switch feature/add-security-guide
npm run build
npm run serve
```

See actual rendered documentation.

**Step 3: Read through documentation**

Read as a user would:
- Does it make sense?
- Is it clear?
- Would you be confused?
- Are examples helpful?

**Step 4: Leave specific comments**

On GitHub, click line and comment:

```
Great intro! One suggestion: in the second 
paragraph, "configure" might be clearer than 
"set up". Like this:

"Before you proceed, you need to configure 
your API key in the environment variables."

What do you think?
```

Be specific, not vague.

**Step 5: Approve or request changes**

If ready to merge:
- Click "Approve"

If needs work:
- Click "Request changes"
- Explain what needs fixing
- Suggest solutions

**Step 6: Reviewee addresses feedback**

Author makes changes:
```bash
git commit -m "Address review feedback: clarify configuration step"
git push origin feature/add-security-guide
```

Changes visible in PR automatically.

**Step 7: Re-review if needed**

If significant changes, re-review.
If minor changes, can approve.

---

## Technical Review Process

### What Technical Reviewers Check

**Accuracy:**
- Information technically correct?
- Examples actually work?
- APIs documented correctly?
- Parameters documented?

**Completeness:**
- All required information?
- Edge cases covered?
- Errors documented?
- Troubleshooting complete?

**Best Practices:**
- Examples follow best practices?
- Security considerations mentioned?
- Performance implications noted?
- Alternatives discussed?

**Testing:**
- Have examples been tested?
- Do they work as documented?
- Work on different OS/versions?
- Error handling correct?

### How-To: Get Technical Review

**Step 1: Assign reviewer**

On GitHub PR:
- Add reviewer (SME or engineer)
- In comment: "@engineer-name, would you review the technical accuracy?"

**Step 2: SME reviews**

Technical reviewer:
- Tests examples
- Verifies accuracy
- Checks completeness
- Leaves feedback

**Step 3: Author tests examples**

Before asking for review:
- Run all code examples
- Verify they work
- Test on different platforms
- Document any requirements

**Step 4: Address technical feedback**

Author makes corrections:
```bash
git commit -m "Fix example: API endpoint changed in v2.0"
git push origin feature/add-security-guide
```

**Step 5: Re-test**

Verify fixes work:
- Run updated examples
- Test in different environments
- Confirm SME feedback addressed

---

## Quality Gates

Automated checks that must pass before merging.

### What Quality Gates Check

**Links:**
- All links valid?
- No broken references?
- External links working?

**Build:**
- Documentation builds?
- No build errors?
- All files valid markdown?

**Spelling and Grammar:**
- No obvious typos?
- Grammar checking?
- Consistent capitalization?

**Style:**
- Markdown valid?
- Formatting consistent?
- Code blocks specified?
- Images have alt text?

### Setting Up Quality Gates

In `.github/workflows/`:

```yaml
name: Quality Checks

on: [pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check links
        run: npm run check-links
      
      - name: Spell check
        run: npm run spell-check
      
      - name: Build documentation
        run: npm run build
      
      - name: Validate markdown
        run: npm run lint-markdown
```

These checks run automatically on every PR.

### Handling Failing Quality Gates

**If build fails:**
```
✗ Build failed: Line 45 has invalid markdown
Fix: Check syntax at that line
Run: npm run build to test locally
```

Author fixes and pushes again.

**If links fail:**
```
✗ Broken link found: ../guides/old-guide.md doesn't exist
Fix: Update link to correct path or create redirects
```

Author fixes links.

### Making Quality Gates Required

On GitHub Settings → Branches:
- Enable "Require status checks to pass"
- Select which checks are required

**Result:** Can't merge without passing checks.

:::tip

Quality gates are your safety net. They catch problems automatically, freeing reviewers to focus on content quality.

:::

---

## How-To: Establish Review Workflow for Your Team

**Step 1: Define review requirements**

Decide:
- Who does peer review?
- Who does technical review?
- Are both required?
- Who can approve?
- Can author approve own?

**Example policy:**
```markdown
# Review Requirements

## All Documentation
- Minimum 1 peer review (another technical writer)
- Passes all automated checks
- No unresolved comments

## Technical Documentation
- 1 peer review (technical writer)
- 1 technical review (SME or engineer)
- Passes all automated checks
- No unresolved comments

## Approval
- Manager approves (if major piece)
- Any approved reviewer can merge
```

**Step 2: Document in CONTRIBUTING.md**

```markdown
# Review Process

## Creating a Pull Request

1. Create PR with description
2. Assign reviewers
3. Respond to feedback
4. Update PR as needed

## Reviewer Responsibilities

1. Review within 24 hours
2. Provide constructive feedback
3. Approve or request changes
4. Re-review if changes made

## Quality Gates

All PRs must pass:
- Build check
- Link check
- Spell check
- Markdown linting

## Approval

Document needs approval from:
- 1 peer review
- 1 technical review (if technical)
```

**Step 3: Set up GitHub settings**

Configure branch protection:
1. Settings → Branches
2. Add rule for main
3. Require pull request reviews
4. Require status checks pass
5. Require up-to-date branches
6. Dismiss stale reviews

**Result:** GitHub enforces your process.

**Step 4: Create review template**

Create `.github/pull_request_template.md`:

```markdown
## Review Checklist

Please check before merging:

**Content Quality**
- [ ] Clear and easy to understand
- [ ] Follows style guide
- [ ] Consistent with other docs
- [ ] No typos or grammar errors

**Technical Accuracy** (if applicable)
- [ ] Examples tested and work
- [ ] Technically accurate
- [ ] Best practices followed
- [ ] Security considered

**Completeness**
- [ ] All sections filled
- [ ] Examples included
- [ ] Links working
- [ ] Screenshots updated

**Approval**
- [ ] Peer review approved
- [ ] Technical review approved (if needed)
- [ ] All checks passing
- [ ] Ready to merge
```

**Step 5: Train team**

Share process:
- Show CONTRIBUTING.md
- Walk through example PR
- Answer questions
- Set expectations

---

## Handling Difficult Reviews

### Situation 1: Disagreement on Content

**Author:** "I think this example is clearer."
**Reviewer:** "I think it's confusing."

**Resolution:**
1. Understand reviewer's concern
2. Explain your reasoning
3. Compromise or test both
4. Document the decision

```
Author: "I prefer my version because it's shorter. 
Could we test it with a new user to see which is clearer?"

Reviewer: "Good idea. Let's test both."

Result: Both versions tested, clearer one selected.
```

### Situation 2: Review Feedback Seems Wrong

**Reviewer:** "This API endpoint doesn't exist."
**Author:** "I tested it, it works."

**Resolution:**
1. Verify with data/testing
2. Ask reviewer to test
3. Get a second opinion if needed
4. Document what you learned

```
Author: "Here's the endpoint documentation. 
Want to test it yourself? I can send the curl command."

Reviewer: "Oh, I see! I was looking at old docs. 
Your endpoint is correct!"

Result: Clarification, misunderstanding resolved.
```

### Situation 3: Review Taking Too Long

**Author:** "PR has been waiting 5 days."

**Resolution:**
1. Check reviewer's schedule
2. Find backup reviewer
3. Follow up politely
4. Set expectations

```
Author: "Hi Sarah, I know you're busy. 
Could Marcus review this instead? Or let me know 
when you'll have time."

Result: Get review moving.
```

### Situation 4: Too Much Back-and-Forth

**After 5 rounds of feedback:**
"This review is taking forever."

**Resolution:**
1. Schedule sync meeting
2. Discuss in real-time
3. Reach agreement
4. Make changes based on agreement

```
Author: "I want to make sure we're aligned. 
Can we chat for 10 minutes about the feedback?"

Reviewer: "Sure, let's sync up now."

Result: Faster resolution.
```

:::note

**Documentation Manager's Tip**

Train team to discuss difficult feedback offline (video call, chat). Faster resolution than comments.

:::

---

## Scaling Reviews as Team Grows

### Small Team (1-3 writers)

**Process:**
- All docs reviewed by manager
- Technical review for technical docs
- Quick turnaround expected

**Pros:** Consistent, centralized control
**Cons:** Bottleneck on manager

### Medium Team (4-8 writers)

**Process:**
- Peer review from any writer
- Technical review from SME
- Manager reviews major pieces
- 24-hour review turnaround expected

**Pros:** Scales better, load distributed
**Cons:** Need to maintain quality

### Large Team (10+ writers)

**Process:**
- Peer review from assigned reviewer
- Technical review teams
- Manager spot-checks
- SLA: 24-hour initial response

**Pros:** Scales to many writers
**Cons:** Requires more process

### Quality Maintains as Team Grows

Implement:
- Clear style guide
- Automated checks (remove burden)
- Review rubric (standardize expectations)
- Reviewer training (maintain consistency)
- Regular audits (spot-check quality)

---

## Summary

In this lesson, you learned:

- Why documentation review matters
- Different types of reviews (peer, technical, management)
- How to conduct peer reviews
- How to get technical review
- Quality gates and automation
- How to establish review workflow
- How to handle difficult reviews
- How to scale review process

Good review processes maintain quality, catch problems early, and help the team grow together.

---

## Exercise

1. Define your review requirements
2. Document in CONTRIBUTING.md
3. Set up branch protection rules
4. Create PR template
5. Set up quality gate checks
6. Have team do 5 real reviews
7. Collect feedback on process
8. Adjust based on feedback
9. Document final process
10. Train all team members

---

## Knowledge check

<details>
<summary><strong>1. Why is documentation review important?</strong></summary>

Reviews catch problems before users see them:
- Spelling and grammar errors
- Broken links
- Inaccurate information
- Confusing explanations
- Inconsistent formatting

Reviews maintain quality and prevent embarrassment.

</details>

<details>
<summary><strong>2. What are the three types of reviews?</strong></summary>

- **Peer Review:** Technical writer reviews for clarity and consistency
- **Technical Review:** SME/engineer reviews for accuracy and completeness
- **Management Review:** Manager reviews for strategic fit and completeness

Most docs need peer review. Technical docs also need technical review.

</details>

<details>
<summary><strong>3. What should a peer reviewer check?</strong></summary>

Peer reviewers check:
- Structure and organization
- Clarity and readability
- Consistency with style guide
- Grammar and spelling
- Consistency with other docs

</details>

<details>
<summary><strong>4. What should a technical reviewer check?</strong></summary>

Technical reviewers check:
- Technical accuracy
- Examples work correctly
- Complete and comprehensive
- Best practices followed
- Security considerations

</details>

<details>
<summary><strong>5. What are quality gates?</strong></summary>

Automated checks that must pass before merging:
- Link validation
- Build verification
- Spell checking
- Markdown linting
- Grammar checking

They catch problems automatically without manual checking.

</details>

<details>
<summary><strong>6. How do you set up branch protection?</strong></summary>

On GitHub:
1. Settings → Branches
2. Add rule for main branch
3. Require PR reviews (at least 1)
4. Require status checks pass
5. Require up-to-date branches
6. Dismiss stale reviews

This enforces your review process.

</details>

<details>
<summary><strong>7. How should you handle review disagreements?</strong></summary>

1. Understand reviewer's concern
2. Explain your reasoning
3. Test both approaches if needed
4. Compromise or defer to expert
5. Document the decision

Assume good intent and work collaboratively.

</details>

<details>
<summary><strong>8. How does review process scale with team size?</strong></summary>

Small team (1-3): Manager reviews everything

Medium team (4-8): Peer review + manager spot-check

Large team (10+): Specialized reviewers + team assignments

Maintain quality with: style guide, automated checks, rubric, training, audits.

</details>

---

## Next Lesson

After mastering review workflow, explore how to measure documentation quality and impact on users and product teams.