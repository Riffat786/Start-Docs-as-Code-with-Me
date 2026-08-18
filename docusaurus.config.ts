import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Start Docs-as-Code with Me',
  tagline: 'Learn modern Docs-as-Code by building real-world documentation projects with AI, Git, GitHub, VS Code, Markdown and Docusaurus, from Beginner to Advanced.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://riffat786.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Start-Docs-as-Code-with-Me/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Riffat786', // Usually your GitHub org/user name.
  projectName: 'Start-Docs-as-Code-with-Me', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
  mermaid: true,
},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Riffat786/Start-Docs-as-Code-with-Me/tree/main/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 2,
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Riffat786/Start-Docs-as-Code-with-Me/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portfolio',
        path: 'portfolio',
        routeBasePath: 'portfolio',
        sidebarPath: './sidebarsPortfolio.ts',
        showLastUpdateTime: false,
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
  title: '',

  logo: {
    alt: 'Start Docs-as-Code with Me',
    src: 'img/favicon.png',
  },

  items: [
    {
      to: '/',
      label: 'Home',
      position: 'left',
    },
  
    {
      to: '/insights',
      label: 'Insights & Articles',
      position: 'left',
    },

    {
      to: '/portfolio',
      label: 'Documentation Portfolio',
      position: 'left',
    },

    {
      href: 'https://riffat786.github.io/portfolio/',
      label: 'About Me',
      position: 'left',
    },
    {
      href: 'https://github.com/Riffat786/Start-Docs-as-Code-with-Me',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
