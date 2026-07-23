import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learningPath: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Start Here',
    },

    {
      type: 'category',
      label: '👋 Module 1 · Welcome',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Welcome/README',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'Welcome/Learning-Roadmap',
        },
        {
          type: 'doc',
          id: 'Welcome/What-is-Docs-as-Code',
        },
        {
          type: 'doc',
          id: 'Welcome/Why-Docs-as-Code',
        },
      ],
    },

    {
      type: 'category',
      label: '💻 Module 2 · Environment Setup',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'Environment-Setup/README',
          label: 'Overview',
        },
        { type: 'doc', id: 'Environment-Setup/Install-Git' },
        { type: 'doc', id: 'Environment-Setup/Install-GitHub' },
        { type: 'doc', id: 'Environment-Setup/Install-NodeJS' },
        { type: 'doc', id: 'Environment-Setup/Install-Python' },
        { type: 'doc', id: 'Environment-Setup/Install-Docker' },
        { type: 'doc', id: 'Environment-Setup/Install-Cursor' },
        { type: 'doc', id: 'Environment-Setup/Install-Claude-Code' },
        { type: 'doc', id: 'Environment-Setup/Verify-Installation' },
      ],
    },
  ],
};

export default sidebars;