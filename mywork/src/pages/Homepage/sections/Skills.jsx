import styles from './styles/Skills.module.css';

const skills = [
  { icon: 'fa-solid fa-magnifying-glass', label: 'SEO Mastery', color: '#e3f0ff', iconColor: '#2563eb' },
  { icon: 'fa-solid fa-bullhorn', label: 'PPC Advertising', color: '#e6fff3', iconColor: '#059669' },
  { icon: 'fa-solid fa-share-nodes', label: 'Social Media', color: '#f3eaff', iconColor: '#7c3aed' },
  { icon: 'fa-solid fa-envelope', label: 'Email Marketing', color: '#fff3e6', iconColor: '#dc2626' },
  { icon: 'fa-solid fa-pen-nib', label: 'Content Strategy', color: '#ffeaf3', iconColor: '#ec4899' },
  { icon: 'fa-solid fa-chart-line', label: 'Analytics', color: '#e3f0ff', iconColor: '#2563eb' },
  { icon: 'fa-solid fa-video', label: 'Video Marketing', color: '#e6faff', iconColor: '#0369a1' },
  { icon: 'fa-solid fa-microchip', label: 'AI Tools', color: '#ffeaf3', iconColor: '#db2777' },
];

const Skills = () => (
  <section className={styles.skillsSection}>
    <h2 className={styles.sectionHeading}>Skills Covered</h2>
    <div className={styles.skillsGrid}>
      {skills.map((s) => (
        <div className={styles.skillCard} key={s.label} style={{ background: s.color }}>
          <span className={styles.skillIcon} style={{ color: s.iconColor }}>
            <i className={s.icon}></i>
          </span>
          <span className={styles.skillLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
