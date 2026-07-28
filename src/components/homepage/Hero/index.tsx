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
          🚀 Start Learning
        </Link>

      </div>

    </section>
  );
}