import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const modules = [
  {
    number: 1,
    
    title: 'Welcome',
    description: 'Learn what Docs-as-Code is and how this learning platform is organized. AI is deliberately part of this learning journey.',
    duration: '20 min',
    level: 'Beginner',
    link: '/docs/Welcome',
  },
  {
    number: 2,
    
    title: 'Environment Setup',
    description: 'Install Git, VS Code and configure your development environment.',
    duration: '45 min',
    level: 'Beginner',
    link: '/docs/Environment-Setup',
  },
  {
    number: 3,
    
    title: 'Markdown',
    description: 'Master Markdown syntax for writing professional technical documentation.',
    duration: '1 hour',
    level: 'Beginner',
    link: '/docs/Markdown',
  },
  {
    number: 4,
    
    title: 'Git',
    description: 'Learn version control fundamentals including commits, branches and merges.',
    duration: '2 hours',
    level: 'Beginner',
    link: '/docs/Git',
  },
  {
    number: 5,
    
    title: 'GitHub',
    description: 'Collaborate using repositories, pull requests and GitHub workflows.',
    duration: '2 hours',
    level: 'Beginner',
    link: '/docs/GitHub',
  },
  {
    number: 6,
    
    title: 'Docs-as-Code Workflow',
    description: 'Understand modern documentation workflows used by engineering teams.',
    duration: '2 hours',
    level: 'Intermediate',
    link: '/docs/Docs-as-Code-Workflow',
  },
  {
    number: 7,
    
    title: 'Static Site Generators',
    description: 'Compare modern documentation platforms and static site generators.',
    duration: '1.5 hours',
    level: 'Intermediate',
    link: '/docs/Static-Site-Generators',
  },
  {
    number: 8,
    
    title: 'Docusaurus',
    description: 'Build a professional documentation website using Docusaurus.',
    duration: '3 hours',
    level: 'Intermediate',
    link: '/docs/Docusaurus',
  },
  {
    number: 9,
    
    title: 'API Documentation',
    description: 'Learn REST APIs, OpenAPI, Swagger and Postman fundamentals.',
    duration: '5 hours',
    level: 'Intermediate',
    link: '/docs/API-Documentation',
  },
  {
    number: 10,
    
    title: 'Artificial Intelligence',
    description: 'Explore AI, prompt engineering and modern AI assistants.',
    duration: '4 hours',
    level: 'Intermediate',
    link: '/docs/AI',
  },
  {
    number: 11,
    
    title: 'Automation',
    description: 'Automate documentation workflows using Python, GitHub Actions and MCP.',
    duration: '5 hours',
    level: 'Advanced',
    link: '/docs/Automation',
  },
  {
    number: 12,
    
    title: 'AI for Technical Writers',
    description: 'Apply AI throughout the documentation lifecycle and publishing workflow.',
    duration: '5 hours',
    level: 'Advanced',
    link: '/docs/AI-For-Technical-Writers',
  },
  {
    number: 13,
    
    title: 'Real-World Projects',
    description: 'Build portfolio-ready documentation projects using everything you learned.',
    duration: '6 hours',
    level: 'Advanced',
    link: '/docs/Real-World-Projects',
  },
];

export default function LearningJourney(): JSX.Element {
  return (
    <section className={styles.learningJourney}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <Heading as="h2">Learning Journey</Heading>

          <p>
            Master Docs-as-Code through thirteen carefully structured modules.
            Each module builds practical skills and prepares you for the next
            stage of your learning journey.
          </p>
        </div>

        <div className={styles.grid}>
          {modules.map((module) => (
            <Link
              key={module.number}
              to={module.link}
              className={styles.card}
            >
              <div className={styles.badge}>
                MODULE {module.number}
              </div>

              <div className={styles.icon}>
                {module.icon}
              </div>

              <Heading as="h3" className={styles.title}>
                {module.title}
              </Heading>

              <p className={styles.description}>
                {module.description}
              </p>

              <div className={styles.meta}>
                <span>⏱ {module.duration}</span>
                <span>{module.level}</span>
              </div>

              <div className={styles.button}>
                Start Module →
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}