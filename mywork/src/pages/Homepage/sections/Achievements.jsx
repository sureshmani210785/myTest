import styles from './styles/Achievements.module.css';

const achievements = [
  {
    icon: 'fa-solid fa-trophy',
    bgClass: styles.iconBgGold,
    title: 'Best Training Institute',
    desc: '2024 & 2025',
  },
  {
    icon: 'fa-solid fa-star',
    bgClass: styles.iconBgBlue,
    title: '4.9/5 Rating',
    desc: 'Google Reviews',
  },
  {
    icon: 'fa-solid fa-users',
    bgClass: styles.iconBgGreen,
    title: '10,000+ Students',
    desc: 'Trained & Placed',
  },
  {
    icon: 'fa-solid fa-medal',
    bgClass: styles.iconBgPurple,
    title: 'Top 100 Employers',
    desc: 'Hiring Partners',
  },
];

const Achievements = () => (
  <section className={` ${styles.sectionBgLight}`}>
    <div className={styles.achievementsContainer}>
      <h2 className={styles.sectionHeading}>Distinctions and Achievements</h2>
      <div className={styles.achievementsRow}>
        {achievements.map((item) => (
          <div className={`${styles.cardBase} ${styles.achievementCard}`} key={item.title}>
            <div className={`${styles.achievementIcon} ${item.bgClass}`}>
              <i className={item.icon}></i>
            </div>
            <div className={styles.achievementTitle}>{item.title}</div>
            <div className={styles.achievementDesc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
