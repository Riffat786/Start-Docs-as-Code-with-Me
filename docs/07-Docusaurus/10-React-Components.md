---
title: Using React Components in Documentation
sidebar_position: 11
description: Learn how to create and use React components to add interactive elements to your Docusaurus documentation.
---

# Using React Components in Documentation

> **Estimated reading time:** 21 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand when and why to use React components.
- Create React components for Docusaurus.
- Import and use components in markdown.
- Pass props to components.
- Use Docusaurus theme components.
- Access Docusaurus hooks and context.
- Create interactive documentation elements.
- Apply component best practices.

---

## What Are React Components in Docusaurus?

React components let you add interactive elements to static documentation: buttons, forms, callouts, interactive demos, calculators, animations.

### Component Types

**Built-in Theme Components:**
- Heading, Link, Button
- Tabs, Accordion
- Details (collapsible)
- Alert, Callout

**Custom Components:**
- Created by you
- Specific functionality
- Reusable across docs
- Can use React features

### Why Use Components?

Good components:
- Add interactivity (buttons, tabs)
- Make docs engaging (animations)
- Provide functionality (calculators, forms)
- Improve user experience

Poor use of components:
- Overuse (too many interactive elements)
- Confusing UX (unclear interaction)
- Performance issues (slow load)
- Accessibility problems (not keyboard accessible)

:::important

Use components strategically. Not everything needs to be interactive.

:::

---

## Before You Start

Make sure you have:

- Basic React knowledge (JSX, components, props)
- Docusaurus installed and running
- Understanding of TypeScript (optional but helpful)
- Component file structure planned
- Clear use case for component

:::note

**For Beginners**

Start simple: create basic components, gradually add features. Learn React first if needed.

:::

---

## Component File Structure

### Organization

```
src/
├── components/
│   ├── homepage/
│   │   ├── Hero/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Features/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── CallToAction/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   └── documentation/
│       ├── CodeBlock/
│       │   └── index.tsx
│       ├── Alert/
│       │   └── index.tsx
│       └── Tabs/
│           └── index.tsx
└── pages/
    └── index.tsx
```

Organize by purpose and reusability.

---

## Creating Your First Component

### Simple Component

Create: `src/components/documentation/Alert/index.tsx`

```typescript
import React from "react";
import styles from "./styles.module.css";

interface AlertProps {
  type: "info" | "warning" | "error" | "success";
  title?: string;
  children: React.ReactNode;
}

export default function Alert({ type, title, children }: AlertProps): JSX.Element {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```

**What it does:**
- Accepts type (info, warning, error, success)
- Optional title
- Children content
- Renders styled alert box

### Style Component

Create: `src/components/documentation/Alert/styles.module.css`

```css
.alert {
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid;
  margin: 16px 0;
}

.title {
  margin: 0 0 8px 0;
  font-weight: 600;
}

.content {
  margin: 0;
  line-height: 1.6;
}

.info {
  background-color: #e3f2fd;
  border-color: #2196f3;
  color: #1565c0;
}

.warning {
  background-color: #fff3e0;
  border-color: #ff9800;
  color: #e65100;
}

.error {
  background-color: #ffebee;
  border-color: #f44336;
  color: #c62828;
}

.success {
  background-color: #e8f5e9;
  border-color: #4caf50;
  color: #2e7d32;
}
```

**Result:** Styled, reusable Alert component!

---

## Using Components in Markdown

### Import and Use

In markdown file:

```markdown
import Alert from "@site/src/components/documentation/Alert";

# My Documentation

<Alert type="warning" title="Important">
This is important information users need to know.
</Alert>

<Alert type="success">
Everything worked perfectly!
</Alert>
```

**Result:** Alert components show in documentation.

### MDX Syntax

Docusaurus uses MDX (Markdown + JSX). You can:
- Use markdown normally
- Import and use React components
- Mix markdown and JSX
- Pass props to components

---

## Real Example from This Project

This project uses custom Hero component on homepage.

**Component:** `src/components/homepage/Hero/index.tsx`

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
          Learn modern Docs-as-Code by building real-world documentation
          projects with AI, Git, GitHub, VS Code, Markdown and Docusaurus —
          from Beginner to Advanced.
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

**What it does:**
- Uses Docusaurus Heading component
- Uses Docusaurus Link component
- Renders hero section
- Includes call-to-action button

**Used in:** `src/pages/index.tsx`

```typescript
import Hero from "@site/src/components/homepage/Hero";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Hero />
      {/* Other components */}
    </Layout>
  );
}
```

Simple, clean, reusable!

---

## Using Docusaurus Components

### Built-in Components

Docusaurus provides components:

**Link:**
```typescript
import Link from "@docusaurus/Link";

<Link to="/docs/guide">Go to Guide</Link>
<Link href="https://example.com">External</Link>
```

**Heading:**
```typescript
import Heading from "@theme/Heading";

<Heading as="h2">My Heading</Heading>
```

**useDocusaurusContext:**
```typescript
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MyComponent() {
  const {siteConfig} = useDocusaurusContext();
  return <h1>{siteConfig.title}</h1>;
}
```

**useBaseUrl:**
```typescript
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function MyComponent() {
  const imagePath = useBaseUrl('/img/logo.png');
  return <img src={imagePath} />;
}
```

---

## Advanced Components

### Component with State

Interactive counter:

```typescript
import React, { useState } from "react";

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

Use in markdown:
```markdown
import Counter from "@site/src/components/documentation/Counter";

<Counter />
```

**Result:** Interactive counter in documentation!

### Component with Props

Customizable component:

```typescript
interface CodeBoxProps {
  language: string;
  title?: string;
  code: string;
}

export default function CodeBox({ language, title, code }: CodeBoxProps): JSX.Element {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "4px" }}>
      {title && <div style={{ fontWeight: "bold", padding: "8px" }}>{title}</div>}
      <pre><code className={`language-${language}`}>{code}</code></pre>
    </div>
  );
}
```

Use with props:
```markdown
import CodeBox from "@site/src/components/documentation/CodeBox";

<CodeBox 
  language="typescript" 
  title="Example" 
  code={`const greeting = "Hello";\nconsole.log(greeting);`}
/>
```

---

## Accessing Context and Hooks

### Get Site Config

```typescript
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MyComponent(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <div>
      <h1>{siteConfig.title}</h1>
      <p>{siteConfig.tagline}</p>
    </div>
  );
}
```

### Get Base URL

```typescript
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function MyComponent(): JSX.Element {
  const baseUrl = useBaseUrl('/');
  const imagePath = useBaseUrl('/img/logo.png');
  
  return <img src={imagePath} alt="Logo" />;
}
```

### Get Route Info

```typescript
import { useLocation } from '@docusaurus/router';

export default function MyComponent(): JSX.Element {
  const location = useLocation();
  
  return <p>Current page: {location.pathname}</p>;
}
```

---

## Best Practices

### Do's

✓ Keep components simple and focused
✓ Use TypeScript for type safety
✓ Document component props
✓ Use CSS modules for styling
✓ Follow component naming conventions
✓ Make components accessible
✓ Test components locally
✓ Reuse components across docs

### Don'ts

✗ Don't create too many components
✗ Don't make components too complex
✗ Don't hardcode values (use props)
✗ Don't forget accessibility (ARIA, keyboard)
✗ Don't use inline styles (use CSS modules)
✗ Don't ignore TypeScript errors
✗ Don't create non-reusable components
✗ Don't forget to test

---

## Performance Considerations

### Lazy Load Components

For heavy components, use React.lazy:

```typescript
import React, { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function MyComponent(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

Loads component only when needed.

### Memoize Components

Prevent unnecessary re-renders:

```typescript
import React, { memo } from "react";

const MyComponent = memo(function MyComponent({ prop }: { prop: string }) {
  return <div>{prop}</div>;
});

export default MyComponent;
```

---

## Summary

In this lesson, you learned:

- When and why to use React components
- How to create React components
- How to style components with CSS modules
- How to import and use components in markdown
- How to use Docusaurus built-in components
- How to create interactive components
- How to access Docusaurus context and hooks
- Component best practices and performance

Components make documentation interactive and engaging.

---

## Exercise

1. Create Alert component (info, warning, error, success)
2. Style with CSS modules
3. Create CodeBox component with title and code props
4. Create Counter component with state
5. Import Alert in markdown file
6. Use with different types
7. Import Counter in markdown
8. Create reusable Feature card component
9. Use in multiple places
10. Test locally and optimize

---

## Knowledge Check

<details>
<summary><strong>1. What are React components in Docusaurus?</strong></summary>

React components are reusable JavaScript/JSX elements you create to add interactive features to documentation. You can use them in markdown files alongside regular text.

</details>

<details>
<summary><strong>2. How do you create a React component for Docusaurus?</strong></summary>

Create a file in `src/components/`. Export a React component:

```typescript
export default function MyComponent(): JSX.Element {
  return <div>Component content</div>;
}
```

Optionally add `styles.module.css` in same folder.

</details>

<details>
<summary><strong>3. How do you use a component in markdown?</strong></summary>

Import the component, then use JSX syntax:

```markdown
import MyComponent from "@site/src/components/MyComponent";

# My Doc

<MyComponent />
```

</details>

<details>
<summary><strong>4. What is MDX?</strong></summary>

MDX is Markdown + JSX. Docusaurus uses MDX so you can:
- Write markdown normally
- Import React components
- Use components in markdown
- Mix markdown and JSX

</details>

<details>
<summary><strong>5. How do you pass props to components?</strong></summary>

Use JSX syntax:

```markdown
<MyComponent type="warning" title="Alert" color="blue" />
```

Component receives props and can use them.

</details>

<details>
<summary><strong>6. What are Docusaurus hooks?</strong></summary>

Hooks let components access Docusaurus context:
- `useDocusaurusContext()` - Site config
- `useBaseUrl()` - Base URL
- `useLocation()` - Current route

Use to make components aware of site context.

</details>

<details>
<summary><strong>7. How do you style React components?</strong></summary>

Use CSS modules (recommended):

1. Create `styles.module.css` in component folder
2. Define classes
3. Import in component: `import styles from "./styles.module.css"`
4. Apply: `<div className={styles.myClass}>`

Scoped, maintainable styling.

</details>

<details>
<summary><strong>8. When should you use components vs plain markdown?</strong></summary>

**Use components for:**
- Interactive elements (buttons, forms)
- Custom functionality (calculators)
- Reusable patterns (cards, alerts)
- Dynamic content

**Use markdown for:**
- Regular text content
- Simple formatting
- Links and images
- Static content

</details>

---

## Next Lesson

After mastering React components, learn how to manage multiple versions of your documentation and handle version updates seamlessly.