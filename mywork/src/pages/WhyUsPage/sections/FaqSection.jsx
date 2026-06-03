import styles from "./styles/FaqSection.module.css";

const FaqSection = () => {
  const faqs = [
    {
      id: 'faq-duration',
      question: 'What is the course duration and schedule?',
      answer: 'The program is a comprehensive 12-month full-time course with a flexible schedule. We offer 3 batches per year with 15 students per batch. Classes are held 3 days a week, 6 hours each day, with weekends reserved for live projects and internships.'
    },
    {
      id: 'faq-internship',
      question: 'What are the internship details?',
      answer: "You'll start working on real client projects from your first week. You'll earn ₹10,000 monthly stipend while working on live campaigns. We provide complete job assistance and help you secure a position within the 12-month program duration."
    },
    {
      id: 'faq-tools',
      question: 'What tools will I learn?',
      answer: "You'll master 20+ premium tools including Google Analytics, Google Ads, SEMrush, Ahrefs, Mailchimp, Hootsuite, and more. These tools are worth ₹5 lakhs+ and are industry-standard."
    },
    {
      id: 'faq-projects',
      question: 'What kind of projects will I work on?',
      answer: "You'll work on real client projects across multiple industries including e-commerce, B2B SaaS, restaurants, and startups. You'll develop comprehensive strategies and execute complete campaigns."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.faqContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Frequently Asked Questions</span>
            <h2 className={styles.sectionHeading}>Common Questions About Our Digital Marketing Course</h2>
            <p className={styles.sectionSubheading}>
              Get answers to your most pressing questions about our training program, internship, and career outcomes.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqCard}>
                <h3 className={styles.faqCardQuestion}>{faq.question}</h3>
                <p className={styles.faqCardAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
