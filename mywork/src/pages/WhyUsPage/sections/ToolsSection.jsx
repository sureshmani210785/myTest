import styles from "./styles/ToolsSection.module.css";

const ToolsSection = () => {
  const tools = [
    { name: 'Google Analytics', category: 'Web Analytics', icon: 'fa-solid fa-chart-bar' },
    { name: 'Google Ads', category: 'PPC Platform', icon: 'fa-solid fa-bullseye' },
    { name: 'SEMrush', category: 'SEO Suite', icon: 'fa-solid fa-chart-line' },
    { name: 'Ahrefs', category: 'Backlink Analysis', icon: 'fa-solid fa-magnifying-glass' },
    { name: 'Mailchimp', category: 'Email Marketing', icon: 'fa-solid fa-envelope' },
    { name: 'Hootsuite', category: 'Social Media', icon: 'fa-solid fa-mobile' },
    { name: 'Canva Pro', category: 'Design Tool', icon: 'fa-solid fa-palette' },
    { name: 'Adobe Premiere', category: 'Video Editing', icon: 'fa-solid fa-film' },
    { name: 'WordPress', category: 'CMS Platform', icon: 'fa-solid fa-globe' },
    { name: 'Meta Business', category: 'Social Ads', icon: 'fa-solid fa-message' }
  ];

  return (
    <section className={`${styles.section} ${styles.toolsSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>INDUSTRY TOOLS</div>
            <h2 className={styles.sectionHeading}>You Will Learn 20+ Digital Marketing Tools</h2>
            <p className={styles.sectionSubheading}>
              Master the same premium tools used by top agencies and Fortune 500 companies worldwide.
            </p>
          </div>
          <div className={`${styles.gridLayout3Col} ${styles.toolsGrid}`}>
            {tools.map((tool) => (
              <div key={tool.name} className={styles.toolCard}>
                <div className={styles.toolIcon}><i className={tool.icon}></i></div>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolCategory}>{tool.category}</p>
              </div>
            ))}
          </div>
          <p className={styles.toolsMore}>+ 10 More Premium Tools Including HubSpot, Salesforce, Shopify & More</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
