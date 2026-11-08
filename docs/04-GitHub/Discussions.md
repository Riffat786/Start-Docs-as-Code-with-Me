---
title: Using GitHub Discussions for Documentation Teams
sidebar_position: 3
description: Learn how to use GitHub Discussions to engage with users and collaborate on documentation.
---

# Using GitHub Discussions for Documentation Teams

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what GitHub Discussions are and why they matter.
- Enable Discussions in your repository.
- Create and manage discussion categories.
- Start discussions for different purposes.
- Answer user questions and provide support.
- Mark discussions as answered.
- Use Discussions for team collaboration.
- Apply Discussions in Docs-as-Code workflows.

---

## What Are GitHub Discussions?

GitHub Discussions are a space for conversations in your repository. Think of them as a combination of forum, Q&A board, and announcement board.

### Discussions vs. Issues

**Issues:**
- For tracking bugs and tasks
- One problem = one issue
- Goal: solve the problem and close

**Discussions:**
- For conversations and questions
- Open-ended topics
- Goal: community engagement and knowledge sharing

**Use Issues for:** "This link is broken" or "Add dark mode"

**Use Discussions for:** "How do I use this feature?" or "What's the best way to...?"

### Why Use Discussions for Documentation?

- **Users ask questions** - Get feedback on what confuses people
- **Share knowledge** - Users help each other
- **Collect feedback** - Learn what users need
- **Announcements** - Share documentation updates
- **Team collaboration** - Internal discussions about docs
- **Build community** - Make users feel heard

:::important

Discussions make your documentation a living resource where people can get help and share knowledge.

:::

---

## Before You Start

Make sure you have:

- A GitHub repository
- Admin or maintainer access
- Understanding of GitHub basics
- Time to moderate discussions

:::note

**For Beginners**

GitHub Discussions is free and built into every repository. No extra tools needed.

:::

---

## Enabling Discussions

By default, Discussions is disabled. Enable it for your repository.

### Step 1: Access Repository Settings

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Features" section
4. Find "Discussions" checkbox

### Step 2: Enable Discussions

Check the "Discussions" checkbox.

**Result:**

A new "Discussions" tab appears in your repository navigation.

### Step 3: Set Up Categories (Optional)

Discussions can be organized by category. Set them up now or let users start discussions first.

Go to: Settings → Discussions → Categories

Default categories:

- Announcements
- General
- Ideas
- Polls
- Q&A
- Show and tell

You can customize these for your team.

:::tip

Start with default categories. Add custom ones as you learn what discussions your team needs.

:::

---

## Creating Discussion Categories

Categories organize conversations by topic.

### Common Categories for Documentation Teams

| Category | Purpose | Example |
|----------|---------|---------|
| Announcements | Share news and updates | "New documentation section released" |
| Q&A | Answer user questions | "How do I configure X?" |
| Ideas | Suggest improvements | "Add more examples to API docs" |
| Feedback | Collect user feedback | "What's confusing about this guide?" |
| General | Casual conversation | "Show and tell" documentation work |

### How to Create a Category

1. Go to Settings → Discussions
2. Click "Create category"
3. Enter category name and description
4. Choose emoji (optional)
5. Select discussion format (Question, Discussion, Announcement)
6. Save

**Example category:**

**Name:** "Documentation Updates"

**Description:** "Share new documentation, changes, and improvements"

**Format:** Announcement

:::note

Different formats guide how people use the category. "Q&A" format adds "Mark as answered" button.

:::

---

## Starting a Discussion

### How to Create a Discussion

**Method 1: Via GitHub Web**

1. Go to repository → Discussions tab
2. Click "New discussion"
3. Select category
4. Enter title
5. Write description
6. Click "Start discussion"

**Method 2: Quick Start**

Go directly to: `github.com/your-org/your-repo/discussions/new`

### Writing a Good Discussion Title

**Good titles:**

- "How do I set up documentation locally?"
- "New: Architecture documentation available"
- "Should we add code examples to API docs?"

**Bad titles:**

- "Question" (too vague)
- "Help" (no context)
- "Something about docs" (unclear)

**Rule:** Someone should know what the discussion is about from the title alone.

### Writing a Good Description

Include:

- **Context** - What's the background?
- **Details** - Specific information
- **What you've tried** - For Q&A discussions
- **Links** - Relevant pages or issues

**Example Q&A:**

```
Title: How do I update the homepage documentation?

Description:
I'm trying to update the homepage section in our docs, but I can't find where the content is stored in the repository.

I've checked the docs/ folder and README.md, but I don't see the homepage content.

Where should I make changes to update the homepage?

Relevant links:
- Repository: [link]
- Current homepage: [link]
```

**Example Announcement:**

```
Title: New API Documentation Section Available

Description:
We've just published comprehensive API documentation including:
- API reference for all endpoints
- Code examples in 5 languages
- Common error codes and solutions
- Rate limiting guide

Check it out: [link to new docs]

Feedback welcome in comments!
```

:::tip

Good discussions get more engagement. Spend time writing clear titles and descriptions.

:::

---

## Common Discussion Scenarios

### Scenario 1: User Asks a Question

User: "How do I install the documentation locally?"

**Your response:**

1. Read their question carefully
2. Provide clear step-by-step answer
3. Include links to relevant docs
4. Ask if they need more help

**Example response:**

```
Great question! Here's how to set up locally:

1. Clone the repository:
   git clone https://github.com/your-org/your-repo.git

2. Install dependencies:
   npm install

3. Run development server:
   npm run start

4. Open http://localhost:3000

If you run into issues, let me know what error you see!
```

**Then:** Mark as answered when resolved.

### Scenario 2: User Suggests Documentation Improvement

User: "The API docs need more examples for authentication"

**Your response:**

1. Thank them for the suggestion
2. Explain if it's already being worked on
3. Create an issue if needed
4. Keep them updated

**Example response:**

```
Great suggestion! You're right that authentication examples are limited.

I'm creating an issue to track this improvement. We'll add:
- Authentication flow diagram
- Code examples in Python, Node.js, and Go
- Common authentication errors and fixes

I'll update this discussion once we've added the new content.
```

### Scenario 3: Team Coordination Discussion

Your team discussing documentation strategy.

**Example:**

```
Title: Planning Q4 Documentation Updates

Description:
Let's discuss what documentation improvements we should prioritize for Q4:

Possible areas:
- Expand API reference
- Add video tutorials
- Create getting started guide
- Improve examples

What should we focus on? What are you hearing from users?
```

Team members reply with suggestions. Use this to plan work.

### Scenario 4: Collecting Feedback on Documentation

Ask users what's confusing or what they need.

**Example:**

```
Title: Help us improve the getting started guide

Description:
We're updating our getting started guide and want your input.

What confused you when first learning to use our documentation?
- Was setup difficult?
- Were examples unclear?
- Were there missing steps?

Your feedback helps us make better docs!
```

---

## Managing Discussions

### Pinning Important Discussions

Pin frequently-asked or important discussions to the top.

1. Click three dots (...) on discussion
2. Select "Pin discussion"
3. Choose "Pin to category" or "Pin to repository"

Pinned discussions appear at top, making them easy to find.

:::tip

Pin:
- Frequently asked questions
- Important announcements
- New documentation features

:::

### Locking Discussions

Prevent new replies when discussion is resolved or off-topic.

1. Click three dots (...)
2. Select "Lock discussion"
3. Choose reason (off-topic, spam, resolved)

Users can still see the discussion, just can't comment.

### Marking as Answered (Q&A Category)

For Q&A format discussions, mark when answered.

1. Click "Mark as answered" button
2. Choose the answer to highlight

The discussion shows as ✓ answered. Others know it's resolved.

:::important

Only mark as answered when the question is truly resolved. Users read marked answers as reliable solutions.

:::

---

## Discussion Best Practices

### For Documentation Managers

**Monitor discussions regularly:**

- Set a schedule to check discussions (daily or weekly)
- Respond promptly to questions
- Thank people for contributions
- Correct misinformation kindly

**Set community guidelines:**

1. Create "Code of Conduct" discussion pinned at top
2. Set expectations for respectful conversation
3. Explain what discussions are for vs. issues
4. Make clear how to report problems

**Example code of conduct:**

```
# Community Guidelines

Please be respectful and constructive.

Good discussions:
- Questions about using documentation
- Suggestions for improvements
- Sharing knowledge
- Respectful disagreement

Not appropriate for discussions:
- Spam
- Self-promotion of unrelated products
- Off-topic conversations
- Disrespectful behavior

Violations: We'll delete comments and can suspend access.
```

### For Team Members

**When answering questions:**

- Be clear and specific
- Provide examples
- Include links to related docs
- Offer follow-up help

**When suggesting improvements:**

- Be specific about what needs changing
- Explain why it would help
- Offer to help if possible
- Link to relevant documentation

### Community Health

**Signs of healthy discussions:**

- Mix of questions and answers
- Users helping each other
- Regular engagement
- Constructive feedback

**Signs of problems:**

- No one responding to questions
- Off-topic or spam discussions
- Disrespectful comments
- Abandoned discussions

Address problems early by:
- Responding to questions quickly
- Removing spam and off-topic content
- Moderating respectfully
- Reminding community of guidelines

:::note

**Documentation Manager's Tip**

Assign someone to monitor discussions regularly. This person becomes the "community voice" - friendly, helpful, and responsive.

:::

---

## Using Discussions for Team Collaboration

Discussions aren't just for external users. Use them internally too.

### Team Discussions

**Announcements:**

```
Title: Documentation style guide updated

Description:
We've updated our style guide with new conventions for:
- Code block formatting
- Heading hierarchy
- Link formatting

Please review and ask questions here.
```

**Planning:**

```
Title: 2024 Documentation Roadmap

Description:
Let's discuss our documentation priorities for 2024.

Proposed areas:
- API documentation overhaul
- Video tutorials
- Interactive examples
- Glossary of terms

What should we prioritize?
```

**Knowledge Sharing:**

```
Title: Best practices for writing API documentation

Description:
Let's share examples of API docs we like and why.

This will help us improve our own API documentation quality.
```

### Private Team Discussions

Use Discussions for internal team work:

- Sprint planning
- Documentation reviews
- Feedback on new docs
- Lessons learned
- Best practices discussion

Keeps everything in one place instead of scattered emails.

---

## Integrating Discussions with Documentation

### Reference Discussions in Documentation

Link to discussions from your docs when relevant:

"Have a question? [Ask in discussions](github.com/your-repo/discussions)"

### Use Discussion Feedback in Documentation

Track suggestions from discussions:

1. Create issues from discussion suggestions
2. Link the issue back to discussion
3. Update discussion when issue is complete
4. Thank the person who suggested it

### Share Documentation Updates in Discussions

Announce new documentation:

"New section added: API authentication guide. Check it out and ask questions here!"

---

## Summary

In this lesson, you learned how to:

- Understand what GitHub Discussions are and why they matter.
- Enable and configure Discussions in your repository.
- Create clear, engaging discussion titles and descriptions.
- Answer user questions effectively.
- Manage and moderate discussions.
- Use Discussions for team collaboration.
- Build a healthy discussion community.

Discussions transform documentation from static pages into living resources where people ask questions, get help, and share knowledge.

---

## Exercise

1. Enable Discussions in your repository
2. Create at least 3 categories (Announcements, Q&A, Ideas)
3. Write 2 sample discussions (one question, one suggestion)
4. Reply to both discussions with helpful answers
5. Pin the most important discussion
6. View discussion analytics to see engagement
7. Create a pinned community guidelines discussion
8. Invite team members to start their own discussions
9. Monitor discussions for a week
10. Document your discussion process in a contributing guide

---

## Common mistakes

<details>
<summary><strong>1. Not responding to questions</strong></summary>

**Cause**

Enabled Discussions but didn't monitor or respond to questions.

**Problem**

Users get frustrated. Discussions seem abandoned. People stop asking.

**Solution**

Commit to checking discussions at least weekly. Respond to new questions promptly.

Assign someone to be responsible for discussions. Make it part of their job.

</details>

<details>
<summary><strong>2. Confusing Discussions with Issues</strong></summary>

**Cause**

Using Discussions for bug reports or feature requests that should be Issues.

**Problem**

Workflow gets confused. Bugs get lost in conversations. Hard to track actual work.

**Solution**

Use Issues for bugs, feature requests, and tracked tasks.

Use Discussions for questions, feedback, and conversations.

If a discussion identifies a real issue, create an issue and link it.

</details>

<details>
<summary><strong>3. Not setting community expectations</strong></summary>

**Cause**

Enabling Discussions without explaining what they're for.

**Problem**

Off-topic discussions. Spam. Misused for things that should be issues.

**Solution**

Pin a discussion explaining guidelines:
- What discussions are for
- What should be issues instead
- How to get help
- Code of conduct

Make it clear upfront.

</details>

<details>
<summary><strong>4. Marking answers incorrectly</strong></summary>

**Cause**

Marking answer on Q&A discussion that doesn't actually solve the problem.

**Problem**

Users follow the marked answer and still have issues. Frustrating for next reader.

**Solution**

Only mark as answered when the question is truly resolved.

If someone finds a better answer in the comments, change which answer is marked.

</details>

<details>
<summary><strong>5. Discussions becoming spam dumping ground</strong></summary>

**Cause**

Not moderating discussions. Allowing spam and off-topic content.

**Problem**

Discussions become useless. Real discussions hard to find. Community feels neglected.

**Solution**

Monitor regularly. Delete spam quickly.

Remind users of guidelines kindly.

For repeat violators, lock their ability to discuss or remove them from community.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What's the difference between Discussions and Issues?</strong></summary>

Issues are for tracking bugs and tasks. Goal is to solve and close.

Discussions are for conversations and questions. Goal is community engagement and knowledge sharing.

Use Issues for "Bug: link broken" or "Feature: add dark mode".

Use Discussions for "How do I use this?" or "What do you think about...?"

</details>

<details>
<summary><strong>2. How do you enable Discussions in a repository?</strong></summary>

Go to Settings → Features section → Check "Discussions" checkbox.

A new "Discussions" tab appears in your repository navigation.

</details>

<details>
<summary><strong>3. What are discussion categories and why do you need them?</strong></summary>

Categories organize discussions by topic. Examples: Q&A, Announcements, Ideas, General.

They help users find relevant discussions and understand what each discussion is for.

</details>

<details>
<summary><strong>4. How do you mark a discussion as answered?</strong></summary>

In Q&A format discussions, click "Mark as answered" button and select the answer.

This shows the discussion is resolved and highlights the solution for future readers.

</details>

<details>
<summary><strong>5. Can you use Discussions for internal team collaboration?</strong></summary>

Yes! Use Discussions for team planning, knowledge sharing, and internal announcements.

Keeps everything in one place instead of scattered across emails and chat.

</details>

<details>
<summary><strong>6. What should you do if someone asks a question that's not answered in the discussion?</strong></summary>

Research and provide a helpful answer. Include links to relevant documentation.

If the documentation is missing information, create an issue to improve the docs.

Update the discussion when the docs are improved.

</details>

<details>
<summary><strong>7. How do you handle off-topic or spam discussions?</strong></summary>

Delete spam immediately.

For off-topic discussions, kindly redirect to appropriate channel.

Lock discussion if needed to prevent more off-topic replies.

Reference your community guidelines.

</details>

<details>
<summary><strong>8. Why is monitoring discussions important?</strong></summary>

Discussions only thrive if people respond to questions and engage.

Regular monitoring shows users their voices are heard.

Quick responses build community trust and encourage more engagement.

</details>

---

## Next Steps

You now understand how to use GitHub Discussions to build community engagement around your documentation. Continue building your discussion culture by being responsive, welcoming, and helpful to your community.