import React, { useState } from 'react';
import styles from './styles.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Do I need Git experience to start?',
    answer:
      'No. The course starts from the basics and teaches Git step by step, so beginners can follow along.',
  },
  {
    question: 'How much time should I dedicate?',
    answer:
      'You set your own pace. Each module includes exercises you can finish in one sitting, so you can go as fast or as slow as you need.',
  },
  {
    question: 'Is this specific to Docusaurus?',
    answer:
      'No. The course covers Docs-as-Code concepts first, then shows how to apply them with Docusaurus as one implementation.',
  },
  {
    question: 'Can I use these skills in a professional role?',
    answer:
      'Yes. The workflows, tools, and review practices in this course match what technical writing teams use in real projects.',
  },
  {
    question: 'Where should I start?',
    answer:
      'Start with the Welcome module, then follow the modules in order. Each one builds on the skills from the previous module.',
  },
];

export default function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Quick answers to the questions learners ask most often
        </p>

        <div className={styles.faqList}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={styles.answer}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
