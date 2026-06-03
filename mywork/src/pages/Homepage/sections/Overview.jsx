import styles from './styles/Overview.module.css';

const overviewStats = [
  { value: '12', label: 'Modules', color: '#131A29' },
  { value: '180+', label: 'Hours', color: '#1DBF73' },
  { value: '25+', label: 'Tools', color: '#8B3DFF' },
  { value: '10+', label: 'Projects', color: '#FF8C1A' },
];

const Overview = () => (
  <section className={styles.overviewSection}>
    <h2 className={styles.sectionHeading}>Digital Marketing Course Overview</h2>
    <div className={styles.overviewRow}>
      <div className={styles.overviewTextCol}>
        <p className={styles.overviewDesc}>
          Our comprehensive digital marketing course covers everything from fundamentals to advanced strategies. Learn SEO, PPC, social media marketing, content marketing, email marketing, and analytics.
        </p>
        <ul className={styles.overviewList}>
          <li><span className={styles.overviewCheck}><i className="fa-solid fa-check"></i></span> 180+ hours of intensive training</li>
          <li><span className={styles.overviewCheck}><i className="fa-solid fa-check"></i></span> Live projects and case studies</li>
          <li><span className={styles.overviewCheck}><i className="fa-solid fa-check"></i></span> Industry expert mentorship</li>
          <li><span className={styles.overviewCheck}><i className="fa-solid fa-check"></i></span> Lifetime access to course materials</li>
        </ul>
      </div>
      <div className={styles.overviewStatsCol}>
        <div className={styles.overviewStatsGrid}>
          {overviewStats.map((stat) => (
            <div className={styles.overviewStatCard} key={stat.label}>
              <div className={styles.overviewStatValue} style={{ color: stat.color }}>{stat.value}</div>
              <div className={styles.overviewStatLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Overview;
