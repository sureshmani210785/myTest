import styles from "./styles/EligibilitySection.module.css";

const EligibilitySection = () => {
  const eligibilityCards = [
    {
      id: 1,
      title: "Fresh Graduates",
      description:
        "Recent graduates looking to start a career in digital marketing with hands-on experience.",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      id: 2,
      title: "Working Professionals",
      description:
        "Professionals seeking to upskill or transition into digital marketing roles.",
      icon: "fa-solid fa-briefcase",
    },
    {
      id: 3,
      title: "Business Owners",
      description:
        "Entrepreneurs wanting to market their business effectively online.",
      icon: "fa-solid fa-building",
    },
    {
      id: 4,
      title: "Career Switchers",
      description:
        "Anyone looking to switch to a high-growth digital marketing career.",
      icon: "fa-solid fa-rocket",
    },
  ];

  return (
    <section className={styles.eligibilitySection}>
      <div className={styles.sectionWrapper}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Eligibility</div>
          <h2 className={styles.sectionHeading}>
            Who Can Join Our Digital Marketing Course?
          </h2>
          <p className={styles.sectionSubheading}>
            This program is designed for ambitious individuals from all
            backgrounds ready to launch their digital marketing career.
          </p>
        </div>

        {/* Eligibility Cards Grid */}
        <div className={styles.eligibilityGrid}>
          {eligibilityCards.map((card) => (
            <div key={card.id} className={styles.eligibilityCard}>
              <div className={styles.eligibilityIcon}><i className={card.icon}></i></div>
              <h3 className={styles.eligibilityCardTitle}>{card.title}</h3>
              <p className={styles.eligibilityCardDescription}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Job Offer Highlight Box */}
        <div className={styles.eligibilityJobOffer}>
          <div className={styles.jobOfferHeader}>
            <div className={styles.jobOfferIconBox}><i className="fa-solid fa-briefcase"></i></div>
            <h3 className={styles.jobOfferTitle}>Job Offer from Day 1</h3>
          </div>
          <p className={styles.jobOfferDescription}>
            Start your career immediately as you work on live client projects
            and gain real-world experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
