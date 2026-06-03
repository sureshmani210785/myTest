import styles from './styles/StatsSection.module.css';

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Students' },
    { number: '20+', label: 'Batches' },
    { number: '60+', label: 'Courses' },
  ];

  return (
    <section className={`${styles.section} ${styles.statsSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.statsContainer}`}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
