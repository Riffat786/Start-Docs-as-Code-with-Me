import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function CallToAction(): JSX.Element {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <Heading as="h2" className={styles.title}>
            Ready to Start Your Docs-as-Code Journey?
          </Heading>

          <p className={styles.description}>
            Learn modern technical documentation by building real-world
            projects with Markdown, Git, GitHub, Docusaurus, APIs,
            AI, and Automation.
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/Welcome"
            >
              Start Learning
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Riffat786/Start-Docs-as-Code-with-Me"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}