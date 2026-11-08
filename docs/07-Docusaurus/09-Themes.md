---
title: Customizing Docusaurus Themes
sidebar_position: 10
description: Learn how to customize the appearance and theme of your Docusaurus documentation site to match your brand.
---

# Customizing Docusaurus Themes

> **Estimated reading time:** 19 minutes

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Docusaurus theme system.
- Customize colors and branding.
- Configure dark mode.
- Customize code syntax highlighting.
- Modify fonts and typography.
- Override theme components.
- Create custom theme configurations.
- Apply theming best practices.

---

## What Is a Docusaurus Theme?

A theme controls the visual appearance of your documentation site: colors, fonts, layouts, components, dark mode support.

### Theme Components

**Colors:**
- Primary color (buttons, links)
- Secondary colors
- Background colors
- Text colors

**Typography:**
- Fonts (headings, body)
- Font sizes
- Line heights
- Font weights

**Layout:**
- Header/navbar styling
- Sidebar styling
- Content area
- Footer

**Dark Mode:**
- Dark mode colors
- Transitions
- User preferences

**Code Highlighting:**
- Syntax highlighting
- Code block styles
- Line numbers

### Why Theming Matters

Good theming:
- Makes documentation professional
- Matches brand identity
- Improves readability
- Supports accessibility (dark mode)
- Creates consistent experience

Poor theming:
- Generic appearance
- Doesn't reflect brand
- Hard to read
- Confusing to users

:::important

Themes make documentation feel like it belongs to your brand. Invest in good theming.

:::

---

## Before You Start

Make sure you have:

- Docusaurus installed and running
- `docusaurus.config.ts` accessible
- Brand colors defined
- Font preferences decided
- Understanding of CSS basics

:::note

**For Beginners**

You can customize themes by changing configuration and CSS. No need to build from scratch.

:::

---

## Theme Configuration Basics

### Accessing Theme Config

In `docusaurus.config.ts`:

```typescript
const config: Config = {
  themeConfig: {
    // Theme customization here
    colorMode: { /* ... */ },
    prism: { /* ... */ },
    // Other settings
  },
};
```

The `themeConfig` object controls theme appearance.

### Available Theme Options

**colorMode:** Dark mode settings
**prism:** Code syntax highlighting
**image:** Social card image
**navbar, footer, docs:** Component-specific styling
**fonts:** Typography customization

---

## Customizing Colors

### Color Variables

Docusaurus uses CSS variables. Customize in `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  
  --ifm-color-secondary: #ebedf0;
  --ifm-background-color: #fafbfc;
  --ifm-text-color: #2d2d2d;
}
```

**What it does:**
- Primary: Buttons, links, highlights
- Secondary: Less important elements
- Background: Page background
- Text: Body text color

### Real Example from This Project

This project's colors:

**Light mode (root):**
```css
:root {
  --ifm-color-primary: #2e8555;        (Green)
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-light: #33925d;
}
```

**Dark mode:**
```css
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;        (Light green)
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-light: #29d5b0;
}
```

Creates green-themed documentation that looks good in both light and dark modes.

### How-To: Change Primary Color

**Step 1: Find your brand color**

Example: Your brand uses blue (#0066cc)

**Step 2: Create color variations**

Use tool like Color Shades Generator:
```
#0066cc → variations for light/dark
#004d99 (darker)
#0052b3 (dark)
#003d80 (darkest)
#0073e6 (lighter)
#1a75ff (lightest)
```

**Step 3: Update custom.css**

```css
:root {
  --ifm-color-primary: #0066cc;
  --ifm-color-primary-dark: #004d99;
  --ifm-color-primary-darker: #0052b3;
  --ifm-color-primary-darkest: #003d80;
  --ifm-color-primary-light: #0073e6;
  --ifm-color-primary-lighter: #1a75ff;
  --ifm-color-primary-lightest: #4d94ff;
}

[data-theme='dark'] {
  --ifm-color-primary: #4d94ff;
  --ifm-color-primary-dark: #1a75ff;
  --ifm-color-primary-darker: #0073e6;
  --ifm-color-primary-darkest: #0066cc;
  --ifm-color-primary-light: #6aa3ff;
  --ifm-color-primary-lighter: #80b3ff;
  --ifm-color-primary-lightest: #99c2ff;
}
```

**Step 4: Test locally**

```bash
npm run start
```

View documentation, verify colors changed.

**Result:** Brand color throughout documentation!

---

## Configuring Dark Mode

### Color Mode Settings

In `docusaurus.config.ts`:

```typescript
colorMode: {
  defaultMode: 'light',              // Default theme
  respectPrefersColorScheme: true,   // Follow OS preference
  disableSwitch: false,              // Show toggle button
  switchConfig: {
    darkIcon: '🌙',
    darkIconStyle: {
      marginLeft: '2px',
    },
    lightIcon: '☀️',
    lightIconStyle: {
      marginLeft: '1px',
    },
  },
}
```

**defaultMode:** 'light' or 'dark'
**respectPrefersColorScheme:** Follow user OS setting
**disableSwitch:** Hide theme switcher
**switchConfig:** Customize switcher appearance

### Real Example from This Project

This project's dark mode config:

```typescript
colorMode: {
  respectPrefersColorScheme: true,  // Respects OS preference
}
```

Respects user's system preference automatically.

### Dark Mode CSS

Add dark mode colors in custom.css:

```css
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-text-color: #f5f5f5;
  --ifm-background-color: #1a1a1a;
}
```

Prefix with `[data-theme='dark']` for dark mode only.

---

## Code Syntax Highlighting

### Syntax Theme Config

In `docusaurus.config.ts`:

```typescript
const config: Config = {
  themeConfig: {
    prism: {
      theme: prismThemes.github,      // Light mode
      darkTheme: prismThemes.dracula, // Dark mode
    },
  },
};
```

**Available themes:**
- github (light)
- duotone (dark)
- dracula (dark)
- nightowl (dark)
- nord (dark)
- oceanicnext (dark)
- synthwave84 (dark)

### Real Example from This Project

This project uses:

```typescript
prism: {
  theme: prismThemes.github,       // Light: GitHub style
  darkTheme: prismThemes.dracula,  // Dark: Dracula style
}
```

Clean light theme, dark purple for dark mode.

### Custom Syntax Highlighting

Override in custom.css:

```css
.docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

[data-theme='dark'] .docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.3);
}
```

Customizes line highlighting in code blocks.

---

## Customizing Fonts and Typography

### Font Variables

In custom.css:

```css
:root {
  --ifm-font-family-base: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --ifm-font-family-monospace: 'Courier New', monospace;
  --ifm-font-size-base: 16px;
  --ifm-font-weight-semibold: 600;
  --ifm-font-weight-bold: 700;
}
```

**font-family-base:** Regular text
**font-family-monospace:** Code text
**font-size-base:** Base font size
**font-weight:** Bold/semibold weights

### Adding Custom Fonts

**Step 1: Add font files to static/**

```
static/fonts/
├── roboto.woff2
├── inter.woff2
└── monospace.woff2
```

**Step 2: Define font-face in custom.css**

```css
@font-face {
  font-family: 'Roboto';
  src: url('/fonts/roboto.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url('/fonts/monospace.woff2') format('woff2');
  font-display: swap;
}
```

**Step 3: Use in theme**

```css
:root {
  --ifm-font-family-base: 'Roboto', sans-serif;
  --ifm-font-family-monospace: 'Roboto Mono', monospace;
}
```

**Result:** Custom fonts throughout site!

---

## Advanced Customization

### Custom CSS Classes

In custom.css:

```css
.custom-button {
  background-color: var(--ifm-color-primary);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.custom-button:hover {
  background-color: var(--ifm-color-primary-dark);
}
```

Use in markdown:

```markdown
<button class="custom-button">Click Me</button>
```

### Overriding Component Styles

Example: Style footer

```css
.footer {
  background: #135d8f;
  border-top: 1px solid #e5e7eb;
}

.footer__title {
  color: #111827;
  font-weight: 700;
}

.footer__link-item {
  color: #f6f6f7;
}
```

Real example from this project styling footer.

### CSS Modules for Components

Create component-specific styles:

```
src/components/homepage/Hero/
├── index.tsx
└── styles.module.css
```

In styles.module.css:

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
}
```

Scoped styles for components.

---

## Theming Best Practices

### Do's

✓ Use CSS variables (reusable, maintainable)
✓ Test dark mode on real content
✓ Use sufficient color contrast (accessibility)
✓ Respect user's system preference
✓ Provide theme toggle button
✓ Test on multiple devices
✓ Document color meanings
✓ Use consistent brand colors

### Don'ts

✗ Don't use too many colors (confusing)
✗ Don't forget dark mode
✗ Don't use low contrast (accessibility issue)
✗ Don't hardcode colors in HTML
✗ Don't break existing styles
✗ Don't force specific theme
✗ Don't use inaccessible color combinations
✗ Don't ignore user preferences

---

## Accessibility Considerations

### Color Contrast

Ensure sufficient contrast:

```
Light text on dark: 4.5:1 ratio minimum
Dark text on light: 4.5:1 ratio minimum
Large text: 3:1 ratio acceptable
```

Test with: WebAIM Contrast Checker

### Dark Mode Testing

Test in dark mode:
- Read all content
- Check button visibility
- Verify code highlighting
- Test links and navigation
- Check images

### Font Size

Respect user font preferences:

```css
body {
  font-size: clamp(14px, 2vw, 18px);  /* Responsive sizing */
}
```

---

## Summary

In this lesson, you learned:

- How Docusaurus theme system works
- How to customize colors and branding
- How to configure dark mode
- How to customize code syntax highlighting
- How to work with fonts and typography
- How to override component styles
- How to implement CSS variables
- Theming and accessibility best practices

Good theming makes documentation professional and accessible.

---

## Exercise

1. Open `src/css/custom.css`
2. Change primary color to your brand color
3. Create dark mode variations
4. Add custom font files to static/
5. Define @font-face for custom fonts
6. Use custom fonts in CSS variables
7. Configure dark mode in docusaurus.config.ts
8. Change code syntax theme (light and dark)
9. Add custom CSS class for buttons
10. Test locally: `npm run start` (test light and dark mode)

---

## Knowledge Check

<details>
<summary><strong>1. What is a Docusaurus theme?</strong></summary>

A theme controls the visual appearance of your documentation: colors, fonts, layouts, dark mode support, code highlighting. Themes make documentation match your brand.

</details>

<details>
<summary><strong>2. Where do you customize themes?</strong></summary>

In two places:

**docusaurus.config.ts:** Theme settings like color mode, syntax highlighting, component styling

**src/css/custom.css:** CSS variables and custom styles

</details>

<details>
<summary><strong>3. What are CSS variables in Docusaurus?</strong></summary>

CSS variables like `--ifm-color-primary` let you define colors once and reuse everywhere. Change the variable, all instances update. Makes maintenance easy.

</details>

<details>
<summary><strong>4. How do you configure dark mode?</strong></summary>

In `docusaurus.config.ts`:

```typescript
colorMode: {
  defaultMode: 'light',
  respectPrefersColorScheme: true,
  disableSwitch: false,
}
```

Then define dark colors in `custom.css` with `[data-theme='dark']`.

</details>

<details>
<summary><strong>5. How do you change code syntax highlighting?</strong></summary>

In `docusaurus.config.ts`:

```typescript
prism: {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
}
```

Choose from available themes (github, dracula, nord, synthwave84, etc.)

</details>

<details>
<summary><strong>6. How do you add custom fonts?</strong></summary>

1. Add font files to `static/fonts/`
2. Define @font-face in `custom.css`
3. Use in CSS variables: `--ifm-font-family-base: 'CustomFont'`

</details>

<details>
<summary><strong>7. What is the difference between theme and custom CSS?</strong></summary>

**theme:** Configuration in docusaurus.config.ts (colors, fonts, component settings)

**custom CSS:** Actual styles in src/css/custom.css (variables, overrides, custom classes)

Use both together for full control.

</details>

<details>
<summary><strong>8. Why is color contrast important?</strong></summary>

Color contrast affects accessibility:
- Low contrast hard to read
- Screen readers can't fix it
- Users with color blindness affected
- WCAG requires 4.5:1 ratio minimum

Always test contrast with accessibility tools.

</details>

---

## Next Lesson

After mastering themes, learn how to use React components to enhance your documentation with interactive elements and custom functionality.