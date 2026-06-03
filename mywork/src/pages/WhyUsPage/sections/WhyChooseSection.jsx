import styles from './styles/WhyChooseSection.module.css';

const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      icon: 'fa-solid fa-briefcase',
      title: 'Job Offer from Day 1',
      description: 'Start working on real client projects from your first day. Earn ₹12,000 monthly salary while you learn and build your career.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-building',
      title: '1 Year Corporate Experience',
      description: 'Gain valuable 1 year of real-world corporate experience working on live campaigns and client projects during your training.'
    },
    {
      id: 3,
      icon: 'fa-solid fa-people-group',
      title: 'Small Batch Size',
      description: 'Maximum 15 students per batch ensuring personalized attention and hands-on mentorship from industry experts.'
    },
    {
      id: 4,
      icon: 'fa-solid fa-wrench',
      title: '20+ Premium Tools',
      description: 'Access to industry-leading tools like SEMrush, Ahrefs, HubSpot, and more worth ₹5 lakhs+.'
    },
    {
      id: 5,
      icon: 'fa-solid fa-handshake',
      title: '100% Placement Support',
      description: 'Dedicated placement assistance with 50+ hiring partners including top agencies and brands.'
    },
    {
      id: 6,
      icon: 'fa-solid fa-folder-open',
      title: 'Portfolio Building',
      description: 'Build a professional portfolio with 10+ live campaigns and projects to showcase to employers.'
    },
    {
      id: 7,
      icon: 'fa-solid fa-trophy',
      title: 'Industry Certifications',
      description: 'Get certified by Google, Meta, HubSpot and other leading platforms alongside our certification.'
    }
  ];

  return (
    <section className={`${styles.section} ${styles.whyChooseFeaturesSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Our Advantage</div>
            <h2 className={styles.sectionHeading}>
              Why Choose The Ranking Academy
            </h2>
            <p className={styles.sectionSubheading}>
              We're not just another training institute. We're your launchpad to a successful digital marketing career.
            </p>
          </div>

          <div className={`${styles.gridLayout3Col} ${styles.whyChooseFeaturesGrid}`}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.whyChooseFeatureCard}>
                <div className={styles.whyChooseFeatureIcon}><i className={feature.icon}></i></div>
                <h3 className={styles.whyChooseFeatureCardTitle}>{feature.title}</h3>
                <p className={styles.whyChooseFeatureCardDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
