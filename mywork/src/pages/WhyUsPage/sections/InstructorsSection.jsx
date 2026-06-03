import styles from "./styles/InstructorsSection.module.css";

const InstructorsSection = () => {
  const instructors = [
    {
      name: 'Rajesh Kumar',
      title: 'SEO & Content Strategy Expert',
      description: '12+ years experience. Ex-Google. Managed SEO for Fortune 500 companies.',
      image: 'fa-solid fa-user',
      socialLinks: [
        { icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
        { icon: 'fa-brands fa-twitter', label: 'Twitter' }
      ]
    },
    {
      name: 'Priya Sharma',
      title: 'Social Media & Paid Ads Specialist',
      description: '10+ years experience. Managed ₹50Cr+ ad budgets for leading e-commerce brands.',
      image: 'fa-solid fa-user',
      socialLinks: [
        { icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
        { icon: 'fa-brands fa-twitter', label: 'Twitter' }
      ]
    },
    {
      name: 'Arjun Menon',
      title: 'Analytics & Growth Hacking Expert',
      description: '15+ years experience. Ex-Meta. Growth consultant for 100+ startups.',
      image: 'fa-solid fa-user',
      socialLinks: [
        { icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
        { icon: 'fa-brands fa-twitter', label: 'Twitter' }
      ]
    }
  ];

  return (
    <section className={styles.instructorsSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>OUR FACULTY</div>
            <h2 className={styles.sectionHeading}>You will be Trained by Experienced Digital Marketing Experts</h2>
            <p className={styles.sectionSubheading}>Learn from industry veterans with 10+ years of experience managing multi-crore campaigns for global brands.</p>
          </div>
          <div className={styles.instructorsGrid}>
            {instructors.map((instructor) => (
              <div key={instructor.name} className={styles.instructorCard}>
                <div className={styles.instructorImage}><i className={instructor.image}></i></div>
                <h3 className={styles.instructorName}>{instructor.name}</h3>
                <p className={styles.instructorTitle}>{instructor.title}</p>
                <p className={styles.instructorDescription}>{instructor.description}</p>
                <div className={styles.instructorSocialLinks}>
                  {instructor.socialLinks.map((link) => (
                    <button key={link.label} className={styles.socialLink} title={link.label} type="button">
                      <i className={link.icon}></i>
                    </button>
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

export default InstructorsSection;
