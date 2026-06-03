import styles from '../WhyUsPage.module.css';

const DigitalMarketingHero = () => {
  return (
    <section className={styles.digitalMarketingHero}>
      <div className={styles.digitalMarketingContainer}>
        <span className={styles.digitalMarketingBadge}><i className="fa-solid fa-rocket"></i> Most In-Demand Course</span>
        <h1 className={styles.digitalMarketingTitle}>Master Digital Marketing & Become Industry Ready</h1>
        <p className={styles.digitalMarketingDescription}>
          Learn the complete digital marketing workflow from industry experts and get placed in top companies
        </p>
        <button className={styles.digitalMarketingCTA}>Enroll Now</button>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;
