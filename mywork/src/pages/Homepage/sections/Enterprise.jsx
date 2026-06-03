import styles from './styles/Enterprise.module.css';

const features = [
  {
    icon: 'fa-solid fa-users',
    bgClass: styles.featureBgBlue,
    title: 'Customized Curriculum',
    desc: 'Tailored training modules aligned with your business goals and team requirements.',
  },
  {
    icon: 'fa-solid fa-clock',
    bgClass: styles.featureBgGreen,
    title: 'Flexible Scheduling',
    desc: 'On-site, online, or hybrid training sessions scheduled at your convenience.',
  },
  {
    icon: 'fa-solid fa-chart-bar',
    bgClass: styles.featureBgPurple,
    title: 'Performance Tracking',
    desc: 'Detailed analytics and progress reports for each team member.',
  },
  {
    icon: 'fa-solid fa-headset',
    bgClass: styles.featureBgGold,
    title: 'Ongoing Support',
    desc: 'Post-training consultation and support for implementation.',
  },
];

const companies = [
  {
    icon: 'fa-brands fa-google',
    color: 'var(--brand-google)',
    name: 'Google',
  },
  {
    icon: 'fa-brands fa-amazon',
    color: 'var(--brand-amazon)',
    name: 'Amazon',
  },
  {
    icon: 'fa-brands fa-windows',
    color: 'var(--brand-windows)',
    name: 'Windows',
  },
  {
    icon: 'fa-solid fa-building',
    color: '#333',
    name: 'Enterprise',
  },
  {
    icon: 'fa-solid fa-industry',
    color: 'var(--color-green)',
    name: 'Industry',
  },
  {
    icon: 'fa-solid fa-briefcase',
    color: 'var(--color-purple)',
    name: 'Business',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Companies Trained',
    bg: 'enterpriseStatBlue',
    color: 'enterpriseStatDark',
  },
  {
    value: '50,000+',
    label: 'Professionals Upskilled',
    bg: 'enterpriseStatGreen',
    color: 'enterpriseStatGreenText',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    bg: 'enterpriseStatPurple',
    color: 'enterpriseStatPurpleText',
  },
];

function EnterpriseStats() {
  return (
    <div className={styles.enterpriseStatsRow}>
      {stats.map((s) => (
        <div className={`${styles.enterpriseStatCard} ${styles[s.bg]}`} key={s.label}>
          <div className={`${styles.enterpriseStatValue} ${styles[s.color]}`}>{s.value}</div>
          <div className={styles.enterpriseStatLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

const Enterprise = () => (
    <section className={styles.enterpriseSection}>
      <div className={styles.enterpriseHeader}>
        <h2 className={styles.sectionHeading}>Comprehensive Training Solutions for Enterprises</h2>
        <div className={styles.sectionSubheading}>
          Customized corporate training programs designed to upskill your marketing teams with cutting-edge digital strategies and tools.
        </div>

      <div className={styles.enterpriseContentRow}>
        <div className={styles.enterpriseLeftCol}>
          <div className={styles.enterpriseWhyTitle}>Why Choose Our Enterprise Solutions?</div>
          <div className={styles.enterpriseFeatureList}>
            {features.map((f) => (
              <div className={styles.enterpriseFeature} key={f.title}>
                <div className={`${styles.enterpriseFeatureIcon} ${f.bgClass}`}>
                  <i className={f.icon}></i>
                </div>
                <div>
                  <div className={styles.enterpriseFeatureTitle}>{f.title}</div>
                  <div className={styles.enterpriseFeatureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.enterpriseRightCol}>
          <div className={styles.enterpriseTrustedCard}>
            <div className={styles.enterpriseTrustedTitle}>Trusted By Leading Companies</div>
            <div className={styles.enterpriseCompaniesGrid}>
              {companies.map((c) => (
                <div className={styles.enterpriseCompanyCell} key={c.name}>
                  <i className={c.icon} style={{ color: c.color }}></i>
                </div>
              ))}
            </div>
            <div className={styles.enterpriseDemoText}>Request Enterprise Demo</div>
          </div>
        </div>
      </div>
      <EnterpriseStats />
      </div>
    </section>
);
export default Enterprise;
