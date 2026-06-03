import styles from './styles/Capstone.module.css';

const projects = [
  {
    icon: 'fa-solid fa-cart-shopping',
    iconBg: '#FFF4F7',
    title: 'E-Commerce Growth Campaign',
    subtitle: 'Real Client Project',
    desc: 'Launch a complete digital marketing campaign for an online store including SEO, Google Ads, and social media marketing.',
    highlights: [
      'Product listing optimization',
      'Shopping ads campaign',
      'Conversion rate optimization'
    ],
  },
  {
    icon: 'fa-solid fa-briefcase',
    iconBg: '#FFF9E6',
    title: 'B2B Lead Generation',
    subtitle: 'Live Campaign',
    desc: 'Create and manage LinkedIn campaigns, email marketing sequences, and content strategy for a B2B SaaS company.',
    highlights: [
      'LinkedIn ads management',
      'Email automation setup',
      'Lead nurturing strategy'
    ],
  },
  {
    icon: 'fa-solid fa-utensils',
    iconBg: '#F7E6FF',
    title: 'Restaurant Branding & Marketing',
    subtitle: 'Real Client Project',
    desc: 'Develop a comprehensive branding and marketing strategy for a local restaurant chain including social media, content, and local SEO.',
    highlights: [
      'Brand identity development',
      'Local SEO optimization',
      'Content calendar creation'
    ],
  },
  {
    icon: 'fa-solid fa-rocket',
    iconBg: '#E6F7FF',
    title: 'Startup Growth Strategy',
    subtitle: 'Live Campaign',
    desc: 'Develop a comprehensive growth strategy for a startup including market research, positioning, and digital marketing execution.',
    highlights: [
      'Market research & analysis',
      'Competitive positioning',
      'Digital marketing roadmap'
    ],
  },
];

const Capstone = () => (
  <div className={`${styles.baseSection} ${styles.sectionBgWhite}`}>
    <div className={styles.sectionHeader}>
      <span className={styles.sectionBadge}>HANDS-ON EXPERIENCE</span>
      <h2 className={styles.sectionHeading}>Digital Marketing Capstone Projects & Case Studies</h2>
      <p className={styles.sectionSubheading}>Work on real client projects across multiple industries and build a portfolio that gets you hired.</p>
    </div>
    <div className={styles.capstoneRow}>
      {projects.map((p) => (
        <div className={`${styles.cardBase} ${styles.capstoneCard}`} key={p.title}>
          <div className={styles.capstoneCardIcon} style={{ backgroundColor: p.iconBg }}>
            <i className={p.icon}></i>
          </div>
          <div className={styles.capstoneCardTitle}>{p.title}</div>
          <div className={styles.capstoneCardSubtitle}>{p.subtitle}</div>
          <div className={styles.capstoneCardDesc}>{p.desc}</div>
          <ul className={styles.highlightsList}>
            {p.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlightsItem}>
                <i className="fa-solid fa-check"></i>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Capstone;
