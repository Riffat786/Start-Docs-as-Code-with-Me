import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const projects = [
  {
    
    title: 'Start Docs-as-Code with Me',
    description:
      'Build the documentation website you are using right now. Throughout this course, you will enhance it into a professional Docs-as-Code learning platform and publish it using GitHub Pages.',
    status: '🚧 In Progress',
    technologies: [
      'Markdown',
      'React',
      'Docusaurus',
      'GitHub',
      'GitHub Pages',
    ],
    link: '/docs/Docusaurus',
    button: 'View Learning Path',
  },
  {
    
    title: 'AI Release Note Generator',
    description:
      'Build an AI-powered release note generation workflow that transforms Azure DevOps work items & ServiceNow cases into customer-ready release notes using AI agents, GitHub Actions, and automated documentation workflows.',
    status: '✅ Completed',
    technologies: [
      'Claude Code',
      'Python',
      'Azure DevOps',
      'ServiceNow',
      'GitHub Actions',
      'MCP',
      'Cursor IDE',
    ],
    link: '/docs/showcase/ai-release-note-generator',
    button: 'View Case Study',
  },
  {
    
    title: 'API Documentation Portal',
    description:
      'Build a developer portal featuring REST APIs, OpenAPI specifications, Swagger UI, authentication, and Postman collections.',
    status: '🔜 Coming Soon',
    technologies: [
      'REST API',
      'OpenAPI',
      'Swagger',
      'Postman',
      'JSON',
    ],
    link: '/docs/API-Documentation',
    button: 'Coming Soon',
  },
  {
    
    title: 'Professional Documentation Portfolio',
    description:
      'Combine everything you learn into a polished portfolio showcasing Docs-as-Code, AI, API documentation, automation, and real-world documentation projects.',
    status: '🔜 Coming Soon',
    technologies: [
      'Docs-as-Code',
      'AI',
      'Automation',
      'Portfolio',
    ],
    link: '/docs/Real-World-Projects',
    button: 'Coming Soon',
  },
];

export default function FeaturedProjects(): JSX.Element {
  return (
    <section className={styles.projects}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <Heading as="h2">What You'll Build</Heading>

          <p>
            Apply your knowledge through practical, real-world projects that
            strengthen your portfolio and demonstrate modern technical
            documentation skills.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>

              <div className={styles.cardHeader}>
                <div className={styles.icon}>{project.icon}</div>

                <Heading as="h3">
                  {project.title}
                </Heading>
              </div>

              <p className={styles.description}>
                {project.description}
              </p>

              <div className={styles.status}>
                <strong>Status</strong>

                <span>{project.status}</span>
              </div>

              <div className={styles.techSection}>
                <strong>Technologies</strong>

                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={project.link}
                className={styles.button}
              >
                {project.button} →
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}