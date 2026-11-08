---
title: Creating a Custom Homepage
sidebar_position: 8
description: Learn how to design and build an engaging custom homepage for your Docusaurus documentation site.
---

# Creating a Custom Homepage

> **Estimated reading time:** 20 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand homepage purpose and structure.
- Create a custom homepage in Docusaurus.
- Design homepage sections (hero, features, call-to-action).
- Build React components for homepage.
- Integrate homepage with documentation.
- Add hero section with call-to-action buttons.
- Create feature showcase sections.
- Apply homepage best practices.

---

## What Is a Docusaurus Homepage?

A homepage is the landing page visitors see when they visit your documentation site. It introduces your product/project and guides users to key resources.

### Homepage Purposes

**Welcome:**
- First impression of your documentation
- Introduce what you teach/build
- Set expectations

**Guide:**
- Show users where to start
- Highlight key sections
- Link to most important content

**Engage:**
- Showcase features or topics
- Use visuals and storytelling
- Make users want to explore

### Homepage Structure

```
┌─────────────────────────────────────────────────┐
│ HERO SECTION                                    │
│ Big headline + subheading + call-to-action     │
├─────────────────────────────────────────────────┤
│ FEATURES / WHY SECTION                         │
│ Key benefits or topics                         │
├─────────────────────────────────────────────────┤
│ LEARNING JOURNEY / MODULES                      │
│ What users will learn                          │
├─────────────────────────────────────────────────┤
│ FEATURED CONTENT / PROJECTS                     │
│ Showcase key documentation                     │
├─────────────────────────────────────────────────┤
│ CALL-TO-ACTION                                  │
│ Get users to take next step                    │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
│ Links and info                                 │
└─────────────────────────────────────────────────┘
```

Each section serves a purpose. Together they create a compelling landing page.

:::important

Homepage is critical. It's the first thing users see. Make it count.

:::

---

## Before You Start

Make sure you have:

- Docusaurus installed and running
- Understanding of React basics (for custom components)
- Vision of what your homepage should show
- Content/copy for hero, features, call-to-action
- Logo and any images

:::note

**For Beginners**

You can create a simple homepage using markdown, or a rich homepage using React components. Start simple, upgrade later.

:::

---

## Homepage Approaches

### Approach 1: Simple Markdown Homepage

Use markdown with Docusaurus theme components.

**Pros:**
- Easiest to create
- No React knowledge needed
- Quick to set up

**Cons:**
- Limited customization
- Less engaging
- Generic appearance

**Best for:** Small projects, simple sites

### Approach 2: Custom React Homepage

Create custom React components for rich interactivity.

**Pros:**
- Highly customizable
- Can be very engaging
- Full design control

**Cons:**
- Requires React knowledge
- More code to maintain
- Takes longer to build

**Best for:** Professional sites, product documentation

### Recommendation

**Start simple (markdown), upgrade to React if needed.**

Most teams start with markdown homepage, then build custom components as they grow.

---

## Simple Markdown Homepage

### Create Home Page File

Create: `docs/homepage.md` or `docs/index.md`

```markdown
---
title: Welcome
sidebar_label: Home
hide_table_of_contents: true
---

# Welcome to My Documentation

Learn everything about our product.

## Getting Started

Start with [Getting Started Guide](./guides/getting-started.md)

## Key Topics

- [Installation](./setup/install.md)
- [Configuration](./setup/config.md)
- [API Reference](./api/index.md)

## Need Help?

[View Troubleshooting](./troubleshooting/index.md)
```

**Result:** Basic homepage with links.

### Add Home Route

In `docusaurus.config.ts`:

```typescript
presets: [
  [
    'classic',
    {
      docs: {
        routeBasePath: '/', // Makes docs root show as home
        // ...
      },
    },
  ],
],
```

**Result:** Homepage appears at root URL.

---

## Custom React Homepage

### File Structure

```
src/
├── pages/
│   └── index.tsx          ← Main homepage component
├── components/
│   └── homepage/
│       ├── Hero/
│       │   ├── index.tsx
│       │   └── styles.module.css
│       ├── Features/
│       │   ├── index.tsx
│       │   └── styles.module.css
│       └── CallToAction/
│           ├── index.tsx
│           └── styles.module.css
└── css/
    └── custom.css
```

This structure organizes homepage components.

### Create Hero Section

**File:** `src/components/homepage/Hero/index.tsx`

```typescript
import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          Start Docs-as-Code with Me
        </Heading>

        <p className={styles.subtitle}>
          Learn modern Docs-as-Code by building real-world 
          documentation projects from Beginner to Advanced.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/getting-started"
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
```

**Result:** Hero section with headline and button.

### Style Hero Section

**File:** `src/components/homepage/Hero/styles.module.css`

```css
.hero {
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.9;
}
```

**Result:** Styled hero section.

### Create Features Section

**File:** `src/components/homepage/Features/index.tsx`

```typescript
import React from "react";
import styles from "./styles.module.css";

interface Feature {
  title: string;
  description: string;
  emoji: string;
}

const features: Feature[] = [
  {
    title: "Learn Git",
    description: "Master version control from basics to advanced",
    emoji: "🔀",
  },
  {
    title: "GitHub Mastery",
    description: "Collaborate with teams using GitHub workflows",
    emoji: "🐱",
  },
  {
    title: "Docs-as-Code",
    description: "Write documentation like code with version control",
    emoji: "📝",
  },
];

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>What You'll Learn</h2>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <span className={styles.emoji}>{feature.emoji}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Result:** Features grid component.

### Create Main Homepage

**File:** `src/pages/index.tsx`

```typescript
import React from "react";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/homepage/Hero";
import Features from "@site/src/components/homepage/Features";
import CallToAction from "@site/src/components/homepage/CallToAction";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="Learn Docs-as-Code from beginner to advanced">
      <Hero />
      <main>
        <Features />
        <CallToAction />
      </main>
    </Layout>
  );
}
```

**Result:** Complete homepage with multiple sections.

---

## How-To: Use Real Example from This Project

This project has a complete custom homepage with 7 sections:

**File structure:**
```
src/
├── pages/
│   └── index.tsx              ← Main homepage
├── components/
│   └── homepage/
│       ├── Hero/               ← Opening section
│       ├── WhyCourse/          ← Why this matters
│       ├── LearningJourney/    ← What you'll learn
│       ├── FeaturedProjects/   ← Showcase projects
│       ├── TechnologyExplorer/ ← Technologies used
│       ├── CallToAction/       ← Get started button
│       └── Footer/             ← Bottom links
```

**Actual main homepage (real from repo):**

```typescript
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Hero from "@site/src/components/homepage/Hero";
import WhyCourse from '@site/src/components/homepage/WhyCourse';
import LearningJourney from '@site/src/components/homepage/LearningJourney';
import FeaturedProjects from '@site/src/components/homepage/FeaturedProjects';
import TechnologyExplorer from '@site/src/components/homepage/TechnologyExplorer';
import CallToAction from "@site/src/components/homepage/CallToAction";
import Footer from "@site/src/components/homepage/Footer";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Start Docs-as-Code with Me"
      description="Learn modern Docs-as-Code by building real-world documentation projects">
      <Hero />
      <main>
        <WhyCourse />
        <LearningJourney />
        <FeaturedProjects />
        <TechnologyExplorer />
        <CallToAction />
      </main>
      <Footer />
    </Layout>
  );
}
```

**Actual Hero component (real from repo):**

```typescript
export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          Start Docs-as-Code with Me
        </Heading>

        <p className={styles.subtitle}>
          Learn modern Docs-as-Code by building real-world 
          documentation projects with AI, Git, GitHub, VS Code, 
          Markdown and Docusaurus — from Beginner to Advanced.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/Welcome"
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
```

**What this creates:**

```
HERO:        "Start Docs-as-Code with Me" + description + button
WHY COURSE:  Why learn Docs-as-Code (benefits)
JOURNEY:     10 modules you'll complete
PROJECTS:    Featured documentation projects
TECHNOLOGY:  Tools you'll learn (Git, GitHub, Docusaurus)
CALL-TO-ACTION: "Ready to start?" button
FOOTER:      Links and site info
```

This professional homepage guides visitors through the learning journey.

---

## Best Practices

### Do's

✓ Start with clear hero section
✓ Use compelling headline
✓ Include strong call-to-action button
✓ Show what users will learn
✓ Use visuals (images, icons, emojis)
✓ Make it mobile-responsive
✓ Keep it simple (3-5 main sections)
✓ Guide users to documentation

### Don'ts

✗ Don't overcrowd with sections
✗ Don't use small, unclear text
✗ Don't hide call-to-action button
✗ Don't make it hard to find docs
✗ Don't use outdated design
✗ Don't forget mobile users
✗ Don't make it slow
✗ Don't use too many colors

---

## Homepage Sections Explained

### Hero Section

**Purpose:** First impression, headline, hook users

**What to include:**
- Clear headline (what is this?)
- Subheading (why should I care?)
- Call-to-action button (what should I do?)
- Optional: background image, logo

**Keep it:** Brief, clear, compelling

### Features/Why Section

**Purpose:** Show key benefits or topics

**What to include:**
- 3-6 key features or topics
- Icon or emoji for each
- Short description
- Visual design

**Keep it:** Scannable, clear benefits

### Learning Journey Section

**Purpose:** Show what users will learn

**What to include:**
- Main topics/modules
- Brief description of each
- Optional: icons or difficulty level
- Link to each module

**Keep it:** Clear path forward

### Featured Content

**Purpose:** Highlight best documentation

**What to include:**
- 3-5 featured articles/guides
- Title and description
- Link to each
- Optional: preview image

**Keep it:** Most important content

### Call-to-Action

**Purpose:** Get users to take action

**What to include:**
- Compelling text ("Ready to start?")
- Primary action button
- Secondary link (optional)
- Clear next step

**Keep it:** Action-oriented

---

## Summary

In this lesson, you learned:

- What homepages are and why they matter
- Difference between markdown and custom React homepages
- How to create custom React homepage components
- Real example from this project with 7 sections
- Key homepage sections and their purposes
- Homepage best practices

Great homepages guide users and make strong first impressions.

---

## Exercise

1. Choose homepage approach (markdown or React)
2. Plan your homepage sections
3. Create Hero component with headline and button
4. Add Features section (3-5 features)
5. Add Learning Journey section
6. Create CallToAction component
7. Assemble into main index.tsx
8. Add CSS styling
9. Test locally: `npm run start`
10. Get feedback and iterate

---

## Knowledge Check

<details>
<summary><strong>1. What is a homepage in Docusaurus?</strong></summary>

A homepage is the landing page visitors see at the root URL. It introduces your documentation, guides users to key sections, and makes a first impression.

</details>

<details>
<summary><strong>2. What are the two approaches to creating a homepage?</strong></summary>

**Markdown:** Simple, limited customization, quick to set up. Best for small projects.

**Custom React:** Full control, highly customizable, more engaging. Best for professional sites.

</details>

<details>
<summary><strong>3. What are the main homepage sections?</strong></summary>

- **Hero:** Headline, description, call-to-action button
- **Features/Why:** Key benefits or topics
- **Learning Journey:** What users will learn
- **Featured Content:** Showcase important documentation
- **Call-to-Action:** Guide next steps
- **Footer:** Links and info

</details>

<details>
<summary><strong>4. How do you make docs the root of your site?</strong></summary>

In `docusaurus.config.ts`, set:

```typescript
docs: {
  routeBasePath: '/',  // Makes /docs content show at root
}
```

</details>

<details>
<summary><strong>5. What should be in a Hero section?</strong></summary>

Hero should include:
- Clear, compelling headline
- Subheading with more context
- Call-to-action button
- Optional: background image or logo

</details>

<details>
<summary><strong>6. How do you create a React component for homepage?</strong></summary>

Create file in `src/components/homepage/YourComponent/index.tsx`:

```typescript
export default function YourComponent(): JSX.Element {
  return (
    <section>
      {/* Your component code */}
    </section>
  );
}
```

</details>

<details>
<summary><strong>7. How do you style homepage components?</strong></summary>

Create a CSS module next to component:

**File:** `src/components/homepage/Hero/styles.module.css`

```css
.hero {
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Then import in component: `import styles from "./styles.module.css"`

</details>

<details>
<summary><strong>8. How should you structure a homepage?</strong></summary>

Good structure:
1. Hero (headline + CTA)
2. Why section (benefits)
3. Learning journey (what you'll learn)
4. Featured content (showcase)
5. Call-to-action (next steps)
6. Footer (links)

Keep 3-5 main sections. More sections overwhelm users.

</details>

---

## Next Lesson

After mastering homepages, learn how to add static assets (images, files) to your documentation site and manage them effectively.