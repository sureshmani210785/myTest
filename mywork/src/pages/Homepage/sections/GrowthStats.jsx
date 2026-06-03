import styles from './styles/GrowthStats.module.css';

const stats = [
  {
    value: '350%',
    label: 'Growth in Digital Marketing Jobs',
    colorClass: 'purple',
  },
  {
    value: '₹8.5L',
    label: 'Average Salary Package',
    colorClass: 'pink',
  },
  {
    value: '15K+',
    label: 'Job Openings Monthly',
    colorClass: 'red',
  },
];

const GrowthStats = () => (
  <section className={`${styles.baseSection} ${styles.sectionBgLight}`}>
    <h2 className={styles.sectionHeading}>Significant Demand Growth Since 2020</h2>
    <div className={styles.growthStatsCard}>
      {stats.map((s) => (
        <div className={styles.growthStat} key={s.label}>
          <div className={`${styles.growthStatValue} ${styles[s.colorClass]}`}>{s.value}</div>
          <div className={styles.growthStatLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default GrowthStats;
