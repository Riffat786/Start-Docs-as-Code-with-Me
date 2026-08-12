import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const categories = [
  {
    title: 'Documentation',
    
    tools: ['Markdown', 'Docusaurus', 'GitHub Pages'],
  },
  {
    title: 'Version Control',
    
    tools: ['Git', 'GitHub', 'Pull Requests'],
  },
  {
    title: 'Development',
    
    tools: ['VS Code', 'React', 'Node.js'],
  },
  {
    title: 'API Documentation',
    
    tools: ['REST APIs', 'OpenAPI', 'Swagger', 'Postman'],
  },
  {
    title: 'AI',
    
    tools: [
      'Claude',
      'ChatGPT',
      'GitHub Copilot',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Automation',
    
    tools: [
      'Python',
      'GitHub Actions',
      'MCP',
      'Azure DevOps',
    ],
  },
];

export default function TechnologyStack(): JSX.Element {
  return (
    <section className={styles.techStack}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Technology Stack</Heading>

          <p>
            Learn the modern tools and technologies used by technical writers,
            developer documentation teams, and AI-powered documentation
            workflows.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <Heading as="h3">{category.title}</Heading>
              </div>

              <ul>
                {category.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}