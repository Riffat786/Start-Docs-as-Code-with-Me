import React from 'react';
import styles from './styles.module.css';

interface Stat {
  number: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    number: '13',
    label: 'Comprehensive Modules',
    description: 'From Git basics to advanced deployment',
  },
  {
    number: '50+',
    label: 'Hands-on Exercises',
    description: 'Learn by doing, not just reading',
  },
  {
    number: '20+',
    label: 'Hours of Content',
    description: 'Deep dive into each topic at your pace',
  },
  {
    number: '500+',
    label: 'Active Learners',
    description: 'Growing community of technical writers',
  },
];

export default function Stats(): JSX.Element {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>By The Numbers</h2>
        <p className={styles.subtitle}>
          Real outcomes from our comprehensive learning program
        </p>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
