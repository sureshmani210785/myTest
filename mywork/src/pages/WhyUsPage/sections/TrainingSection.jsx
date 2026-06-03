import styles from "./styles/TrainingSection.module.css";

const TrainingSection = () => {
  const projects = [
    {
      id: "ecommerce",
      icon: "fa-solid fa-cart-shopping",
      title: "E-Commerce Growth Campaign",
      subtitle: "Real Client Project",
      arrowIcon: 'fa-solid fa-check-circle text-secondary',
      arrowIconColor: 'highlightItemColor',
      description:
        "Launch a complete digital marketing campaign for an online store including SEO, Google Ads, and social media marketing.",
      highlights: [
        "Product listing optimization",
        "Shopping ads campaign",
        "Conversion rate optimization",
      ],
      borderColor: "red",
    },
    {
      id: "b2b",
      icon: "fa-solid fa-store",
      title: "B2B Lead Generation",
      subtitle: "Live Campaign",
      arrowIcon: 'fa-solid fa-check-circle text-secondary',
      arrowIconColor: 'highlightItemColor',
      description:
        "Create and manage LinkedIn campaigns, email marketing sequences, and content strategy for a B2B SaaS company.",
      highlights: [
        "LinkedIn ads management",
        "Email automation setup",
        "Lead nurturing strategy",
      ],
      borderColor: "gold",
    },
    {
      id: "restaurant",
      icon: "fa-solid fa-utensils",
      title: "Restaurant Branding & Marketing",
      subtitle: "Real Client Project",
      arrowIcon: 'fa-solid fa-check-circle text-secondary',
      arrowIconColor: 'highlightItemColor',
      description:
        "Develop a comprehensive branding and marketing strategy for a local restaurant chain including social media, content, and local SEO.",
      highlights: [
        "Brand identity development",
        "Local SEO optimization",
        "Content calendar creation",
      ],
      borderColor: "red",
    },
    {
      id: "startup",
      icon: "fa-solid fa-rocket",
      title: "Startup Growth Strategy",
      subtitle: "Live Campaign",
      arrowIcon: 'fa-solid fa-check-circle text-secondary',
      arrowIconColor: 'highlightItemColor',
      description:
        "Develop a comprehensive growth strategy for a startup including market research, positioning, and digital marketing execution.",
      highlights: [
        "Market research & analysis",
        "Competitive positioning",
        "Digital marketing roadmap",
      ],
      borderColor: "gold",
    },
  ];

  return (
    <section className={`${styles.section} ${styles.trainingSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>HANDS-ON PROJECTS</div>
            <h2 className={styles.sectionHeading}>
              Real-World Projects You'll Work On
            </h2>
            <p className={styles.sectionSubheading}>
              Learn by doing - Build a portfolio of live client projects and real campaigns.
            </p>
          </div>
          <div className={`${styles.gridLayout2Col} ${styles.trainingGrid}`}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={styles.trainingCard}
              >
                <div className={styles.trainingCardHeader}>
                  <div className={styles.trainingIcon}><i className={`${project.icon}`}></i></div>
                  <div className={styles.trainingCardTitle}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectHighlights}>
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className={styles.highlightItem}>
                      <span className={styles.checkmark}><i className={`${project.arrowIcon} ${project.arrowIconColor}`}></i> </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
