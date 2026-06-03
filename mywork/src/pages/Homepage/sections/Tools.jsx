import styles from './styles/Tools.module.css';

const tools = [
  { icon: 'fa-brands fa-google', label: 'Google Ads', color: '#f5f5f5', iconColor: '#4285f4' },
  { icon: 'fa-brands fa-google', label: 'Google Analytics', color: '#f5f5f5', iconColor: '#ff9800' },
  { icon: 'fa-brands fa-facebook', label: 'Meta Ads', color: '#f5f5f5', iconColor: '#1877f2' },
  { icon: 'fa-solid fa-bars', label: 'SEMrush', color: '#f5f5f5', iconColor: '#06a154' },
  { icon: 'fa-solid fa-link', label: 'Ahrefs', color: '#f5f5f5', iconColor: '#a259d9' },
  { icon: 'fa-solid fa-envelope', label: 'Mailchimp', color: '#f5f5f5', iconColor: '#ffe01b' },
  { icon: 'fa-brands fa-wordpress', label: 'WordPress', color: '#f5f5f5', iconColor: '#0073aa' },
  { icon: 'fa-solid fa-calendar-alt', label: 'Hootsuite', color: '#f5f5f5', iconColor: '#ff0080' },
  { icon: 'fa-solid fa-palette', label: 'Canva', color: '#f5f5f5', iconColor: '#5b4bf5' },
  { icon: 'fa-solid fa-brain', label: 'UX Pilot', color: '#f5f5f5', iconColor: '#0087be' },
];

const Tools = () => (
  <section className={styles.toolsSection}>
    <h2 className={styles.sectionHeading}>Tools Covered</h2>
    <div className={styles.toolsGrid}>
      {tools.map((t) => (
        <div className={styles.toolCard} key={t.label} style={{ background: t.color }}>
          <span className={styles.toolIcon} style={{ color: t.iconColor }}>
            <i className={t.icon}></i>
          </span>
          <span className={styles.toolLabel}>{t.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Tools;
