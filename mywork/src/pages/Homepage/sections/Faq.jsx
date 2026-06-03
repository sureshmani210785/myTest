import { useState } from 'react';
import styles from './styles/Faq.module.css';

const faqs = [
  {
    q: 'What is the duration of the course?',
    a: 'The course duration is 6 months, including live sessions, assignments, and capstone projects.'
  },
  {
    q: 'Do you provide an industry certificate?',
    a: 'Yes, you will receive an industry-recognized certificate upon successful completion.'
  },
  {
    q: 'Is placement support available?',
    a: 'Yes, we offer 100% placement support until you get hired.'
  },
  {
    q: 'Can I attend classes online?',
    a: 'Yes, both online and offline batches are available.'
  },
];

const Faq = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className={`${styles.baseSection} ${styles.sectionBgWhite} `}>
      <section className={styles.faqSectionInner}>
        <h2 className={styles.sectionHeading}>Digital Marketing Certification Course FAQ</h2>
        <div className={styles.faqList}>
          {faqs.map((item, i) => (
            <div className={styles.faqItem} key={item.q}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className={styles.faqQuestionText}>{item.q}</span>
                <span className={open === i ? styles.faqArrowOpen : styles.faqArrow}>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
              {open === i && (
                <div className={styles.faqAnswer} id={`faq-answer-${i}`}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
