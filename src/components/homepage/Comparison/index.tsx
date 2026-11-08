import React from 'react';
import styles from './styles.module.css';

interface ComparisonItem {
  feature: string;
  traditional: string;
  modern: string;
}

const comparisons: ComparisonItem[] = [
  {
    feature: 'Documentation Storage',
    traditional: 'Scattered across Word docs, wikis, Google Drive',
    modern: 'Organized in Git with clear hierarchy',
  },
  {
    feature: 'Version Control',
    traditional: 'Manual version management (v1, v1_final, v1_final_actual)',
    modern: 'Git-based versioning with branches and tags',
  },
  {
    feature: 'Collaboration',
    traditional: 'Email attachments, conflicting edits, lost work',
    modern: 'Pull requests, code review, clear audit trail',
  },
  {
    feature: 'Publishing',
    traditional: 'Manual HTML export, FTP upload, slow process',
    modern: 'Automated CI/CD deployment in seconds',
  },
  {
    feature: 'Content Updates',
    traditional: 'Inconsistent changes, hard to track modifications',
    modern: 'Atomic commits, clear change history',
  },
  {
    feature: 'Reusability',
    traditional: 'Copy-paste duplication across documents',
    modern: 'Components and includes for DRY content',
  },
];

export default function Comparison(): JSX.Element {
  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Docs-as-Code Difference</h2>
        <p className={styles.subtitle}>
          Transform how you manage documentation
        </p>

        <div className={styles.comparisonTable}>
          <div className={styles.header}>
            <div className={styles.featureCol}>Feature</div>
            <div className={styles.traditionalCol}>
              <span className={styles.badge}>Traditional</span>
              Approach
            </div>
            <div className={styles.modernCol}>
              <span className={styles.badge}>Docs-as-Code</span>
              Approach
            </div>
          </div>

          {comparisons.map((item, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.featureCol}>{item.feature}</div>
              <div className={styles.traditionalCol}>
                <span className={styles.icon}>✕</span>
                {item.traditional}
              </div>
              <div className={styles.modernCol}>
                <span className={styles.icon}>✓</span>
                {item.modern}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
