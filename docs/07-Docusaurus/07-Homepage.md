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
┌──────────────────────────────────────────────────┐
│ HERO SECTION                                     │
│ Big headline + subheading + call-to-action      │
├──────────────────────────────────────────────────┤
│ STATISTICS / METRICS                             │
│ Build credibility with numbers (impact)          │
├──────────────────────────────────────────────────┤
│ FEATURES / WHY SECTION                          │
│ Key benefits or topics                          │
├──────────────────────────────────────────────────┤
│ TESTIMONIALS / SOCIAL PROOF                     │
│ User feedback and success stories               │
├──────────────────────────────────────────────────┤
│ LEARNING JOURNEY / MODULES                      │
│ What users will learn                           │
├──────────────────────────────────────────────────┤
│ COMPARISON SECTION                               │
│ Before/After or Traditional vs Docs-as-Code     │
├──────────────────────────────────────────────────┤
│ FEATURED CONTENT / PROJECTS                     │
│ Showcase key documentation                      │
├──────────────────────────────────────────────────┤
│ FAQ SECTION                                      │
│ Answer common questions                         │
├──────────────────────────────────────────────────┤
│ CALL-TO-ACTION                                   │
│ Get users to take next step                     │
├──────────────────────────────────────────────────┤
│ FOOTER                                           │
│ Links and info                                  │
└──────────────────────────────────────────────────┘
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

This project has a complete custom homepage with 11 modernized sections:

**File structure:**
```
src/
├── pages/
│   └── index.tsx              ← Main homepage
├── components/
│   └── homepage/
│       ├── Hero/               ← Opening hook
│       ├── Stats/              ← Impact metrics
│       ├── WhyCourse/          ← Why this matters
│       ├── Testimonials/       ← Social proof
│       ├── LearningJourney/    ← What you'll learn
│       ├── Comparison/         ← Before/After
│       ├── FeaturedProjects/   ← Showcase projects
│       ├── FAQ/                ← Common questions
│       ├── CallToAction/       ← Final CTA button
│       └── Footer/             ← Bottom links
```

**Modernized main homepage (updated):**

```typescript
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Hero from "@site/src/components/homepage/Hero";
import Stats from "@site/src/components/homepage/Stats";
import WhyCourse from '@site/src/components/homepage/WhyCourse';
import Testimonials from "@site/src/components/homepage/Testimonials";
import LearningJourney from '@site/src/components/homepage/LearningJourney';
import Comparison from "@site/src/components/homepage/Comparison";
import FeaturedProjects from '@site/src/components/homepage/FeaturedProjects';
import FAQ from "@site/src/components/homepage/FAQ";
import CallToAction from "@site/src/components/homepage/CallToAction";
import Footer from "@site/src/components/homepage/Footer";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Start Docs-as-Code with Me"
      description="Learn modern Docs-as-Code by building real-world documentation projects">
      <Hero />
      <Stats />
      <main>
        <WhyCourse />
        <Testimonials />
        <LearningJourney />
        <Comparison />
        <FeaturedProjects />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </Layout>
  );
}
```

**Hero component (real from repo):**

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

**What the modernized homepage creates:**

```
HERO:         "Start Docs-as-Code with Me" + description + CTA
STATS:        "10 modules", "50+ exercises", "20+ hours", "1000+ learners"
WHY COURSE:   Why learn Docs-as-Code (benefits)
TESTIMONIALS: Real user quotes + 5-star ratings
LEARNING:     10 modules you'll complete
COMPARISON:   Before/After: Traditional vs Docs-as-Code
PROJECTS:     Featured documentation projects
FAQ:          Common questions answered
CALL-TO-ACTION: "Ready to start?" final button
FOOTER:       Links and site info
```

This professional, modern homepage builds credibility, addresses concerns, and guides visitors through a compelling journey before the call-to-action.

---

## Best Practices

### Do's

✓ Start with clear hero section
✓ Use compelling headline with subheading
✓ Include statistics/metrics to build credibility
✓ Add testimonials for social proof
✓ Show before/after or comparison for context
✓ Answer common questions with FAQ
✓ Use engaging, modern design (gradients, shadows, hover effects)
✓ Show what users will learn clearly
✓ Include strong call-to-action button (primary + optional secondary)
✓ Make it fully mobile-responsive
✓ Guide users through logical flow
✓ Test performance and load time

### Don'ts

✗ Don't overcrowd with too many sections (aim for 8-12)
✗ Don't use small, unclear text or poor contrast
✗ Don't hide or bury call-to-action buttons
✗ Don't make it hard to find actual documentation
✗ Don't use outdated design or flat colors
✗ Don't forget mobile users - test on all devices
✗ Don't use heavy unoptimized images
✗ Don't use too many conflicting colors or fonts
✗ Don't make testimonials hard to find or understand
✗ Don't skip FAQ - answer objections early

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

### Statistics/Metrics Section

**Purpose:** Build credibility with numbers and impact

**Component example:**

```typescript
interface Stat {
  number: string;
  label: string;
  description?: string;
}

const stats: Stat[] = [
  {
    number: "10",
    label: "Comprehensive Modules",
    description: "From Git basics to advanced deployment"
  },
  {
    number: "50+",
    label: "Hands-on Exercises",
    description: "Practice what you learn"
  },
  {
    number: "20+",
    label: "Hours of Content",
    description: "Deep dive into each topic"
  },
  {
    number: "1000+",
    label: "Active Learners",
    description: "Growing community of technical writers"
  },
];

export default function Stats(): JSX.Element {
  return (
    <section className={styles.stats}>
      <div className="container">
        <h2>By The Numbers</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
              {stat.description && (
                <p className={styles.description}>{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling:**

```css
.stats {
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.statCard {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.statCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.number {
  font-size: 48px;
  font-weight: 700;
  color: var(--ifm-color-primary);
  margin-bottom: 10px;
}

.label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  color: #666;
  margin: 0;
}
```

**Purpose:** Show impact immediately after hero section

### Features/Why Section

**Purpose:** Show key benefits or topics

**What to include:**
- 3-6 key features or topics
- Icon or emoji for each
- Short description
- Visual design

**Keep it:** Scannable, clear benefits

### Testimonials/Social Proof Section

**Purpose:** Build trust with user feedback and success stories

**Component example:**

```typescript
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Finally, a complete course on Docs-as-Code! This transformed how our team approaches documentation.",
    author: "Sarah Chen",
    role: "Technical Writer at TechCorp",
    rating: 5,
  },
  {
    quote: "Perfect for beginners. The hands-on exercises made everything click.",
    author: "Marcus Johnson",
    role: "Documentation Lead",
    rating: 5,
  },
  {
    quote: "Even as an experienced developer, I learned new approaches to documentation workflow.",
    author: "Lisa Rodriguez",
    role: "Senior Engineer",
    rating: 5,
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>What Learners Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {'⭐'.repeat(testimonial.rating || 5)}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div className={styles.authorName}>{testimonial.author}</div>
                <div className={styles.authorRole}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling:**

```css
.testimonials {
  padding: 60px 20px;
  background: white;
}

.testimonialGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonialCard {
  padding: 30px;
  background: #f8f9fa;
  border-left: 4px solid var(--ifm-color-primary);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.testimonialCard:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: white;
}

.rating {
  font-size: 16px;
  margin-bottom: 15px;
}

.quote {
  font-size: 16px;
  font-style: italic;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.author {
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.authorName {
  font-weight: 600;
  color: var(--ifm-color-primary);
  margin-bottom: 5px;
}

.authorRole {
  font-size: 14px;
  color: #666;
}
```

**Best practice:** Place after learning journey section to build credibility

### Comparison Section

**Purpose:** Help users understand what they'll gain vs current state

**Component example:**

```typescript
interface ComparisonItem {
  feature: string;
  before: string;
  after: string;
}

const comparisons: ComparisonItem[] = [
  {
    feature: "Documentation Structure",
    before: "Scattered across Word docs, wikis",
    after: "Organized in Git with clear hierarchy",
  },
  {
    feature: "Version Control",
    before: "Manual version management",
    after: "Git-based versioning with branches",
  },
  {
    feature: "Collaboration",
    before: "Email attachments, conflicting edits",
    after: "Pull requests, code review process",
  },
  {
    feature: "Publishing",
    before: "Manual HTML export, FTP upload",
    after: "Automated CI/CD deployment",
  },
  {
    feature: "Content Updates",
    before: "Inconsistent, hard to track changes",
    after: "Atomic commits, clear audit trail",
  },
  {
    feature: "Reusability",
    before: "Copy-paste duplication",
    after: "Components and includes",
  },
];

export default function Comparison(): JSX.Element {
  return (
    <section className={styles.comparison}>
      <div className="container">
        <h2>The Docs-as-Code Difference</h2>
        <div className={styles.comparisonTable}>
          <div className={styles.comparisonHeader}>
            <div className={styles.feature}>Feature</div>
            <div className={styles.before}>❌ Traditional</div>
            <div className={styles.after}>✅ Docs-as-Code</div>
          </div>
          {comparisons.map((item) => (
            <div key={item.feature} className={styles.comparisonRow}>
              <div className={styles.feature}>{item.feature}</div>
              <div className={styles.before}>{item.before}</div>
              <div className={styles.after}>{item.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling:**

```css
.comparison {
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
}

.comparisonTable {
  margin-top: 40px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.comparisonHeader {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  font-weight: 600;
}

.comparisonRow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  padding: 20px;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.comparisonRow:last-child {
  border-bottom: none;
}

.comparisonRow:nth-child(even) {
  background: #f8f9fa;
}

.feature {
  font-weight: 600;
  color: #333;
}

.before {
  color: #d32f2f;
  font-size: 14px;
}

.after {
  color: #2e7d32;
  font-size: 14px;
}

@media (max-width: 768px) {
  .comparisonHeader,
  .comparisonRow {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .feature {
    font-weight: 700;
    margin-bottom: 10px;
  }
}
```

**Best practice:** Place before features section to show transformation

### FAQ Section

**Purpose:** Answer common questions and reduce hesitation

**Component example:**

```typescript
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need Git experience to start?",
    answer: "No! This course starts from absolute basics. We teach Git from the ground up, perfect for beginners.",
  },
  {
    question: "How much time should I dedicate?",
    answer: "You can go through modules at your own pace. Most learners spend 2-4 hours per week.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Complete all exercises and you'll receive a completion certificate.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Absolutely! All knowledge applies directly to professional documentation.",
  },
  {
    question: "Is this specific to Docusaurus?",
    answer: "No, we cover Docs-as-Code concepts broadly, then dive into Docusaurus as one implementation.",
  },
];

export default function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((item, index) => (
            <div key={item.question} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={styles.faqToggle}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling:**

```css
.faq {
  padding: 60px 20px;
  background: white;
}

.faqList {
  max-width: 800px;
  margin: 40px auto 0;
}

.faqItem {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.faqItem:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.faqQuestion {
  width: 100%;
  padding: 20px;
  background: #f8f9fa;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
}

.faqQuestion:hover {
  background: #e9ecef;
}

.faqToggle {
  flex-shrink: 0;
  margin-left: 20px;
  color: var(--ifm-color-primary);
  font-size: 24px;
  font-weight: bold;
}

.faqAnswer {
  padding: 20px;
  background: white;
  color: #555;
  line-height: 1.6;
  border-top: 1px solid #ddd;
}
```

**Best practice:** Place before call-to-action to remove objections

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
4. Create Stats component with 4 key metrics
5. Add Features section (3-5 features)
6. Create Testimonials component with 3-5 user quotes
7. Add Learning Journey section
8. Create Comparison component showing before/after
9. Create FAQ component with 4-5 common questions
10. Create CallToAction component
11. Assemble all components into main index.tsx
12. Add modern CSS styling (gradients, shadows, hover effects)
13. Test locally: `npm run start`
14. Test on mobile devices
15. Get feedback and iterate

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

Good structure (modern approach):
1. Hero (headline + CTA)
2. Stats/Metrics (credibility with numbers)
3. Why section (benefits)
4. Testimonials (social proof)
5. Learning journey (what you'll learn)
6. Comparison (before/after or traditional vs modern)
7. Featured content (showcase)
8. FAQ (answer objections)
9. Final Call-to-action (next steps)
10. Footer (links)

Keep 8-12 sections for professional feel. Too few loses impact, too many overwhelms.

</details>

<details>
<summary><strong>9. Why include statistics on homepage?</strong></summary>

Statistics/metrics:
- Build credibility immediately
- Show impact with real numbers
- Help users gauge scope ("20+ hours", "50+ exercises")
- Create trust before asking for commitment
- Give concrete reason to explore further

Place after hero for maximum impact.

</details>

<details>
<summary><strong>10. What makes good testimonials?</strong></summary>

Good testimonials:
- Specific and authentic (not generic)
- Include name and role
- Show star ratings (5 stars ideal)
- Quote should be 1-2 sentences max
- Address a key objection or benefit
- From diverse user types

Place mid-page to reinforce value proposition.

</details>

<details>
<summary><strong>11. Why use comparison section?</strong></summary>

Comparison sections:
- Help users understand transformation
- Show concrete before/after difference
- Reduce hesitation about switching
- Highlight key benefits visually
- Build confidence in decision

Use table or grid format for clarity.

</details>

<details>
<summary><strong>12. What questions should FAQ address?</strong></summary>

Good FAQ questions cover:
- Time commitment ("How long does this take?")
- Prerequisites ("Do I need experience?")
- Outcomes ("Will I get a certificate?")
- Flexibility ("Can I go at my own pace?")
- Value ("Is this worth it?")

Place before final CTA to remove last objections.

</details>

---

## Next Lesson

After mastering homepages, learn how to add static assets (images, files) to your documentation site and manage them effectively.