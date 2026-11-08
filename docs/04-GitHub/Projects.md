---
title: Planning Documentation with GitHub Projects
sidebar_position: 4
description: Learn how to use GitHub Projects to plan and track documentation work.
---

# Planning Documentation with GitHub Projects

> **Estimated reading time:** 18 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what GitHub Projects are.
- Create and configure project boards.
- Organize issues in a project.
- Use different project views.
- Track progress visually.
- Use Projects for sprint planning.
- Collaborate on project planning.
- Apply Projects in Docs-as-Code workflows.

---

## What Are GitHub Projects?

GitHub Projects are visual boards for organizing and tracking work. Think of them as a project management tool built into GitHub.

### Project Features

**Visual Workflow:**
- See all work at a glance
- Organize by status (To do, In progress, Done)
- Drag and drop to update status

**Automation:**
- Auto-add new issues
- Auto-update status based on PR activity
- Auto-move closed issues

**Flexibility:**
- Table view for detailed information
- Board view for visual workflow
- Custom fields for team-specific tracking

### Why Use Projects for Documentation?

- **See progress visually** - Know what's being worked on
- **Plan sprints** - Organize work for time periods
- **Track deadlines** - Set due dates on tasks
- **Reduce meetings** - See status without asking
- **Coordinate team** - Everyone knows their priorities

:::important

GitHub Projects keep your documentation team aligned and focused on priorities.

:::

---

## Before You Start

Make sure you have:

- A GitHub repository with issues
- Admin or write access
- Understanding of GitHub Issues
- Team that will use the project

:::note

**For Beginners**

GitHub Projects is free and built into every repository. Create your first project in minutes.

:::

---

## Creating a Project

### How to Create a Project

**Method 1: From Repository**

1. Go to your repository
2. Click "Projects" tab
3. Click "Create project"
4. Enter project name (e.g., "Q4 Documentation")
5. Choose template or start blank
6. Click "Create"

**Method 2: From GitHub Web**

Go directly to: `github.com/your-org/your-repo/projects`

### Project Templates

GitHub provides templates:

**Table:**
- Spreadsheet-like view
- Shows all details at once
- Good for detailed tracking

**Board:**
- Kanban-style columns (To do, In progress, Done)
- Visual workflow
- Good for sprint planning

**Roadmap:**
- Timeline view
- Shows due dates
- Good for planning releases

Start with **Board** for documentation teams. It's most intuitive.

### Configuring Your Project

After creating, set up your project:

1. **Add columns** (if using board view)
   - To do
   - In progress
   - In review
   - Done

2. **Set up automation**
   - Auto-add new issues
   - Auto-move when issue status changes
   - Auto-archive closed issues

3. **Add custom fields** (optional)
   - Priority (High, Medium, Low)
   - Documentation type (Guide, API, Tutorial)
   - Assignee
   - Due date

:::tip

Start simple. Add complexity later as your team needs it.

:::

---

## Adding Issues to Projects

### Manually Add Issues

1. Open project board
2. Click "Add item" in any column
3. Search for issue by number or title
4. Click issue to add
5. Issue appears in that column

### Auto-Add New Issues

Set up automation so all new issues automatically appear on project:

1. Go to project settings
2. Enable "Auto-add new issues"
3. Issues appear automatically

Saves you from manually adding every new issue.

### Add by Using Issue Link

In an issue, link it to a project:

1. Open issue
2. Click "Projects" (right sidebar)
3. Select which project
4. Choose which column to add to
5. Issue appears on project board

---

## Using Board View

The most common view for documentation teams.

### Board Structure

```
To do          | In Progress   | In Review      | Done
─────────────  | ─────────────  | ─────────────  | ─────────────
Issue #1       | Issue #3       | Issue #5       | Issue #2
Issue #4       | Issue #6       |                | Issue #7
Issue #8       |                |                |
```

### Moving Issues

**Update Status:**

1. Open issue
2. Move it between columns
3. Drag and drop to new column

**Auto-Update:**

- When PR is created, issue auto-moves to "In Review"
- When PR is merged, issue auto-moves to "Done"
- When issue is closed, it auto-archives

### Column Best Practices

**Standard columns for documentation:**

- **To do** - Not started, waiting to be worked on
- **In progress** - Someone is actively working
- **In review** - PR created, waiting for review
- **Done** - Completed and merged

**Alternative columns:**

- **Backlog** - Ideas not yet scheduled
- **Planned** - Scheduled for next sprint
- **In progress** - Being worked on
- **Blocked** - Waiting on something
- **Done** - Completed

Choose columns that match your workflow.

---

## Using Table View

Spreadsheet-like view for detailed tracking.

### When to Use Table View

- Need to see all details at once
- Sorting and filtering important
- Want to bulk-edit fields
- Need specific information visible

### Table Features

- Add/remove columns
- Sort by any field
- Filter by status, assignee, label
- Edit fields directly in table
- See related issues

**Useful columns for documentation:**

- Title - What the work is
- Status - Current stage
- Assignee - Who's working on it
- Due date - When it's due
- Priority - How urgent
- Labels - Categorization

---

## Using Roadmap View

Timeline view showing when work is due.

### When to Use Roadmap

- Planning releases
- Tracking deadlines
- Showing stakeholders progress
- Long-term planning

### Setting Due Dates

For items to appear on roadmap:

1. Each issue needs a due date
2. Set date in issue details or project view
3. Issue appears on timeline

**Example roadmap:**

```
November        December         January
────────────    ─────────────    ──────────
[Issue #1]                       
[Issue #2]      
                [Issue #3]
                [Issue #4]                [Issue #5]
```

---

## Project Views and Filtering

### Creating Multiple Views

Same project, different views:

1. Create "My Assigned Issues" view
   - Filter: Assignee = me
   - Shows only your tasks

2. Create "High Priority" view
   - Filter: Priority = High
   - Shows urgent work

3. Create "Next Sprint" view
   - Filter: Milestone = "Sprint 3"
   - Shows planned work

### Filtering Options

Filter by:
- Status/Column
- Assignee
- Labels
- Milestone
- Due date
- Custom fields

**Example filters:**

- "bug" label + "high priority" = urgent bugs
- Status "In Progress" + Assignee "empty" = unassigned work
- Milestone "v2.0" + Status "To do" = v2.0 backlog

---

## Common Project Workflows

### Workflow 1: Sprint Planning

Plan work for a 2-week sprint.

```
1. Create project: "Sprint 3 - Nov 15-28"

2. Add columns:
   - Backlog
   - Sprint
   - In Progress
   - In Review
   - Done

3. Move issues to "Sprint" column (15-20 issues for sprint)

4. Team works through sprint

5. Move completed issues to "Done"

6. At end of sprint, close project
```

### Workflow 2: Release Planning

Plan documentation for a software release.

```
1. Create project: "Documentation for v2.0"

2. Add custom field: "Documentation Type"
   - Getting Started
   - API Reference
   - Troubleshooting
   - Migration Guide

3. Set due date: Release day

4. Track progress toward release

5. All docs done before release day
```

### Workflow 3: Quarterly Planning

Track all documentation work for a quarter.

```
1. Create project: "Q4 2024 Documentation"

2. Add columns by status

3. Add custom milestone field for each month:
   - November
   - December
   - Planning

4. Organize issues by when they should happen

5. Track progress through quarter
```

### Workflow 4: Team Assignments

Manage work across team members.

```
1. Create view for each team member:
   - Filter: Assignee = Sarah
   - Filter: Assignee = Marcus
   - Filter: Assignee = Lisa

2. See each person's workload at a glance

3. Balance work across team

4. Identify bottlenecks
```

---

## Best Practices

### Keep Project Updated

- Review project weekly
- Close completed work
- Archive old projects
- Update issue status regularly

Stale projects lose value.

### Use Custom Fields Strategically

Add custom fields for:
- Priority (High, Medium, Low)
- Documentation type
- Time estimate
- Effort level
- Component/section

Don't over-complicate. 2-3 custom fields is usually enough.

### Communicate Project Status

**Weekly status update:**

1. Look at "Done" column
2. Note what was completed
3. Share with team or stakeholders

"This week we updated API docs, fixed 5 broken links, and added getting started guide."

**Identify blockers:**

1. Look at "Blocked" or "In Review" column
2. See if anyone is waiting
3. Help unblock them

### Project Board for Meetings

Use board during team meetings:

- Review this week's progress
- Plan next week's work
- Assign new issues
- Discuss blockers
- Make visible decisions

Much better than discussing over email.

:::note

**Documentation Manager's Tip**

Pull up your project board during team meetings. It keeps conversations focused and transparent.

:::

---

## Automation Features

GitHub Projects can automate common tasks.

### Auto-Add Issues

When enabled, all new issues automatically appear in "To do" column.

### Auto-Update Status

**Automatic status changes:**

- New issue → Added to "To do"
- PR created → Move to "In Review"
- PR merged → Move to "Done"
- Issue closed → Archive

Set this up in project settings so work moves automatically.

### Custom Automation

For more control, use GitHub Actions:

- Auto-add labeled issues
- Auto-move by milestone
- Auto-notify when status changes
- Auto-generate summaries

Advanced but powerful.

---

## Summary

In this lesson, you learned how to:

- Create and configure GitHub Projects.
- Add and organize issues visually.
- Use different project views (Board, Table, Roadmap).
- Plan sprints and releases.
- Track team progress.
- Implement project workflows.
- Automate project management.

GitHub Projects transform issues from a list into a visual workflow that keeps your documentation team aligned and productive.

---

## Exercise

1. Create a project: "Documentation Planning"
2. Add columns: To do, In progress, In review, Done
3. Add at least 5 issues to the project
4. Enable auto-add for new issues
5. Move 2 issues to "In progress"
6. Set priority field for each issue
7. Create a filtered view: "High Priority Items"
8. Add due dates to at least 3 issues
9. Create a second view: "By Assignee"
10. Document your project workflow for team

---

## Common mistakes

<details>
<summary><strong>1. Creating too many projects</strong></summary>

**Cause**

Created separate project for every task or feature.

**Problem**

Too many projects to track. Team confused which one to use. Work scattered.

**Solution**

Keep it simple: One active project per sprint or release.

Archive old projects to keep things clean.

</details>

<details>
<summary><strong>2. Not updating project regularly</strong></summary>

**Cause**

Created project but didn't maintain it.

**Problem**

Project gets out of sync with actual work. Team ignores it.

**Solution**

Spend 15 minutes daily or 1 hour weekly updating project.

Make someone responsible for project maintenance.

</details>

<details>
<summary><strong>3. Making project too complex</strong></summary>

**Cause**

Added too many custom fields, views, and filters.

**Problem**

Project becomes confusing. Takes too long to update. Team abandons it.

**Solution**

Start simple: Status column and assignee.

Add complexity only when needed based on team feedback.

</details>

<details>
<summary><strong>3. Not using automation</strong></summary>

**Cause**

Manually moved every issue between columns.

**Problem**

Time-consuming. Easy to forget updating status. Errors happen.

**Solution**

Enable auto-add, auto-update based on PR status.

Saves time and keeps project accurate.

</details>

<details>
<summary><strong>5. Wrong view for the job</strong></summary>

**Cause**

Used table view when board view would be better (or vice versa).

**Problem**

Tool doesn't match workflow. Team frustrated.

**Solution**

Understand each view:
- Board: Visual workflow, sprint planning
- Table: Detailed tracking, sorting
- Roadmap: Timeline, releases

Choose right view for your work.

</details>

---

## Knowledge check

<details>
<summary><strong>1. What is a GitHub Project?</strong></summary>

A GitHub Project is a visual project management tool for organizing and tracking work. Use it to organize issues into workflows, plan sprints, and track progress.

</details>

<details>
<summary><strong>2. What are the main project views?</strong></summary>

**Board** - Kanban-style columns (To do, In progress, Done) for workflow tracking.

**Table** - Spreadsheet view for detailed information and sorting.

**Roadmap** - Timeline view for showing when work is due.

</details>

<details>
<summary><strong>3. What columns should a documentation project have?</strong></summary>

Standard columns: To do, In progress, In review, Done

Can customize based on your workflow. Main thing is having clear status columns.

</details>

<details>
<summary><strong>4. How do you add issues to a project?</strong></summary>

Manually: Click "Add item" and search for the issue.

Automatically: Enable "Auto-add new issues" in settings.

From issue: Click Projects in issue sidebar and select project.

</details>

<details>
<summary><strong>5. How do you filter a project?</strong></summary>

Use the filter button to filter by:
- Assignee
- Status
- Labels
- Milestone
- Due date
- Custom fields

Create multiple filtered views for different purposes.

</details>

<details>
<summary><strong>6. What should you do if your project is getting out of sync?</strong></summary>

- Review and update status weekly
- Enable automation to update status automatically
- Archive old completed projects
- Remove stale issues not being worked on

Keep project current to maintain team trust.

</details>

<details>
<summary><strong>7. How do you track team workload?</strong></summary>

Create a filtered view for each team member showing only their assigned issues.

See how many items each person has. Balance work if someone is overloaded.

</details>

<details>
<summary><strong>8. When should you use Board vs. Table view?</strong></summary>

Use **Board** for workflow visualization and sprint planning.

Use **Table** when you need to see detailed fields, sort data, or bulk-edit items.

Use **Roadmap** for timeline-based planning with due dates.

</details>

---

## Next Steps

Start using GitHub Projects today. Begin with one simple project for your current sprint or release. As your team gets comfortable, explore more advanced features like custom fields and automation.