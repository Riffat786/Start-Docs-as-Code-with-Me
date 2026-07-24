import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const modules = [
  { icon: '🚀', title: 'Welcome', link: '/docs/Welcome/README' },
  { icon: '💻', title: 'Environment Setup', link: '/docs/Environment-Setup/README' },
  { icon: '📝', title: 'Markdown', link: '/docs/Markdown/README' },
  { icon: '🌿', title: 'Git', link: '/docs/Git/README' },
  { icon: '🐙', title: 'GitHub', link: '/docs/GitHub/README' },
  { icon: '📚', title: 'Docs-as-Code Workflow', link: '/docs/Docs-as-Code-Workflow/README' },
  { icon: '🌐', title: 'Static Site Generators', link: '/docs/Static-Site-Generators/README' },
  { icon: '🦖', title: 'Docusaurus', link: '/docs/Docusaurus/README' },
  { icon: '🔌', title: 'API Documentation', link: '/docs/API-Documentation/README' },
  { icon: '🤖', title: 'AI', link: '/docs/AI/README' },
  { icon: '⚙️', title: 'Automation', link: '/docs/Automation/README' },
  { icon: '✍️', title: 'AI for Technical Writers', link: '/docs/AI-For-Technical-Writers/README' },
  { icon: '🚀', title: 'Real-World Projects', link: '/docs/Real-World-Projects/README' },
];

export default function LearningJourney() {
  return (
    <section className={styles.learningJourney}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <Heading as="h2">Learning Journey</Heading>

          <p>
            Follow a structured learning path from beginner to advanced.
            Each module builds upon the previous one and prepares you for
            real-world technical documentation projects.
          </p>
        </div>

        <div className={styles.timeline}>
          {modules.map((module, index) => (
            <Link
              key={index}
              to={module.link}
              className={styles.card}
            >
              <div className={styles.icon}>{module.icon}</div>

              <h3>{module.title}</h3>

              <span>Explore Module →</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}