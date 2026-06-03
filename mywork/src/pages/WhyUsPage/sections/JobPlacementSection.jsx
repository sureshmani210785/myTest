import styles from '../WhyUsPage.module.css';

const JobPlacementSection = () => {
  const placementStats = [
    { label: '100% Placement', value: 'Guaranteed job assistance' },
    { label: 'Average Salary', value: '3x to 5x increase' },
    { label: 'Companies', value: 'Top 50+ hiring partners' },
    { label: 'Support', value: 'Lifetime career support' }
  ];

  return (
    <section className={`${styles.section} ${styles.jobPlacementSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeading}>100% Job Placement Assistance</h2>
          <p className={styles.sectionSubheading}>
            We are committed to placing our students in top companies. Our placement team provides comprehensive support throughout your job search journey.
          </p>
          <div className={`${styles.gridLayout3Col} ${styles.placementStatsGrid}`}>
          {placementStats.map((stat) => (
            <div key={stat.label} className={styles.placementStat}>
              <div className={styles.statIcon}><i className="fa-solid fa-bullseye"></i></div>
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className={styles.placementServices}>
          <h3>What We Provide</h3>
          <ul>
            <li>✓ Resume preparation and optimization</li>
            <li>✓ Interview coaching and mock interviews</li>
            <li>✓ LinkedIn profile optimization</li>
            <li>✓ Direct company referrals</li>
            <li>✓ Job negotiation support</li>
            <li>✓ Career guidance and mentoring</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default JobPlacementSection;
