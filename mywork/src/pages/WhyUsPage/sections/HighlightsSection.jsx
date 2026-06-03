import styles from "./styles/HighlightsSection.module.css";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Search Engine Optimization (SEO)',
      description: 'Master on-page, off-page, and technical SEO. Learn to rank websites organically on Google\'s first page.',
      items: ['Keyword Research & Strategy', 'Technical SEO Audits', 'Link Building Tactics']
    },
    {
      icon: 'fa-solid fa-bullhorn',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Social Media Marketing',
      description: 'Create engaging content and run high-converting ad campaigns across Facebook, Instagram, and LinkedIn.',
      items: ['Organic Content Strategy', 'Meta Ads Manager', 'Influencer Marketing']
    },
    {
      icon: 'fa-solid fa-chart-line',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Performance Marketing (PPC)',
      description: 'Drive immediate results with Google Ads. Learn search, display, video, and shopping campaigns.',
      items: ['Google Ads Setup', 'Bidding Strategies', 'Conversion Tracking']
    },
    {
      icon: 'fa-solid fa-envelope',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Email Marketing',
      description: 'Build automated email sequences, newsletters, and drip campaigns to nurture leads and drive conversions.',
      items: ['Email Automation', 'List Building', 'Conversion Optimization']
    },
    {
      icon: 'fa-solid fa-pen-nib',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Content Marketing',
      description: 'Create compelling written strategies, blogs, videos, and infographics that engage and convert audiences.',
      items: ['Content Strategy', 'Blog Writing', 'Video Production']
    },
    {
      icon: 'fa-solid fa-film',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'YouTube Marketing',
      description: 'Master video content creation, YouTube SEO, and advertising strategies to build a strong channel presence.',
      items: ['Video Creation', 'Channel Optimization', 'YouTube Analytics']
    },
    {
      icon: 'fa-solid fa-mobile',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'App Store Optimization',
      description: 'Optimize mobile apps for app stores, increase downloads, and improve rankings on iOS and Android platforms.',
      items: ['App Store Strategy', 'User Retention', 'Mobile Analytics']
    },
    {
      icon: 'fa-solid fa-globe',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'WordPress Development',
      description: 'Build professional websites using WordPress, customize themes, and implement essential plugins.',
      items: ['WordPress Setup', 'Theme Customization', 'Plugin Management']
    },
    {
      icon: 'fa-solid fa-chart-bar',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Google Analytics & Tag Manager',
      description: 'Track website performance, set up UTM tracking, and implement advanced tracking with GTM.',
      items: ['Analytics Setup', 'Event Tracking', 'Custom Reporting']
    },
    {
      icon: 'fa-solid fa-shopping-cart',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'E-Commerce Marketing',
      description: 'Master online store optimization, product listings, and conversion rate optimization strategies.',
      items: ['Store Optimization', 'Product Strategy', 'Customer Journey']
    },
    {
      icon: 'fa-solid fa-robot',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'CRM & Marketing Automation',
      description: 'Use marketing tools, automation, and systems to streamline customer management and lead nurturing.',
      items: ['CRM Integration', 'Workflow Automation', 'Lead Management']
    },
    {
      icon: 'fa-solid fa-box',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Amazon Marketing',
      description: 'Master sponsored ads, category ranking, competitor analysis, and marketplace optimization strategies.',
      items: ['Sponsored Ads', 'Category Ranking', 'Competitor Analysis']
    },
    {
      icon: 'fa-solid fa-link',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Affiliate Marketing',
      description: 'Build passive income streams through affiliate marketing, partnerships, and commission structures.',
      items: ['Affiliate Setup', 'Program Selection', 'Performance Tracking']
    },
    {
      icon: 'fa-solid fa-code',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'HTML, CSS & Landing Pages',
      description: 'Learn web fundamentals to create and customize high-converting landing pages from scratch.',
      items: ['HTML Basics', 'CSS Styling', 'Page Conversion']
    },
    {
      icon: 'fa-solid fa-bullseye',
      arrowIcon: 'fa-solid fa-check text-secondary',
      arrowIconColor: 'highlightItemColor',
      title: 'Digital Marketing Strategy',
      description: 'Develop comprehensive marketing plans, budget allocation, and ROI-focused campaign strategies.',
      items: ['Strategic Planning', 'Budget Management', 'Performance Analysis']
    }
  ];

  return (
    <section className={`${styles.section} ${styles.highlightsSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>CURRICULUM</div>
            <h2 className={styles.sectionHeading}>Key Highlights and Modules of Our Digital Marketing Course with Internship</h2>
            <p className={styles.sectionSubheading}>A comprehensive 1-year program designed to turn beginners into full-stack digital marketing professionals.</p>
          </div>
          <div className={`${styles.gridLayout3Col} ${styles.highlightsGrid}`}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.highlightCard}>
                <div className={styles.highlightIcon}><i className={item.icon}></i></div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDescription}>{item.description}</p>
                <ul className={styles.highlightItems}>
                  {item.items.map((subitem) => (
                    <li key={subitem} className={styles.highlightItem}>
                      <i className={`${item.arrowIcon} ${item.arrowIconColor}`}></i> {subitem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
