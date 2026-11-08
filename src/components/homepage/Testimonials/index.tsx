import React from 'react';
import styles from './styles.module.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Finally, a complete course on Docs-as-Code! This transformed how our team approaches documentation. The hands-on exercises made everything click.',
    author: 'Sarah Chen',
    role: 'Technical Writer',
    rating: 5,
  },
  {
    quote:
      'Perfect for beginners with no prior Git experience. The step-by-step explanations made complex concepts simple. Highly recommend!',
    author: 'Marcus Johnson',
    role: 'Documentation Lead',
    rating: 5,
  },
  {
    quote:
      'Even as an experienced developer, I learned new approaches to documentation workflow and best practices. Outstanding content quality.',
    author: 'Lisa Rodriguez',
    role: 'Senior Engineer',
    rating: 5,
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Learners Say</h2>
        <p className={styles.subtitle}>
          Join hundreds of technical writers who have transformed their documentation workflow
        </p>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>

              <p className={styles.quote}>"{testimonial.quote}"</p>

              <div className={styles.author}>
                <div className={styles.authorName}>{testimonial.author}</div>
                <div className={styles.authorRole}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
