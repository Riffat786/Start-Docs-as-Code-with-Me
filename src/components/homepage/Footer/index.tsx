import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Heading as="h2" className={styles.brandTitle}>
            Start Docs-as-Code with Me
          </Heading>

          <p className={styles.brandDescription}>
            Learn Docs-as-Code, AI, APIs, Git, GitHub and Automation through
            practical, real-world projects designed for Technical Writers and
            documentation professionals.
          </p>
        </div>

        {/* Footer Links */}
        <div className={styles.linksGrid}>

          <div>
            <h3>Learning</h3>

            <ul>
              <li>
                <Link to="/docs/Welcome">Learning Path</Link>
              </li>

              <li>
                <Link to="/insights">Articles</Link>
              </li>

            </ul>
          </div>

          <div>
            <h3>Projects</h3>

            <ul>
             
              <li><Link to="/docs/showcase/ai-release-note-generator">AI Release Note Generator</Link></li>
              <li><Link to="/docs/API-Documentation">API Documentation Portal</Link></li>
              <li><Link to="/portfolio/">Documentation Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3>Connect</h3>

            <ul>
              <li>
                <Link
                  to="https://github.com/Riffat786"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.linkedin.com/in/riffatwyne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>

          <p className={styles.tagline}>
            Learning in public. Building in public. Sharing what works.
          </p>

          <p className={styles.copyright}>
            © {currentYear} Riffat Wyne
          </p>

          <p className={styles.meta}>
            Built with Docusaurus • Hosted on GitHub Pages • Version 0.1
          </p>

        </div>

      </div>
    </footer>
  );
}