import styles from "./styles/TestimonialsSection.module.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sneha Reddy',
      role: 'Digital Marketing Manager',
      company: 'TCS',
      avatar: 'fa-solid fa-user',
      quote: '"The internship experience was game-changing. I landed a job even before completing the course!"'
    },
    {
      name: 'Karthik Iyer',
      role: 'SEO Specialist',
      company: 'Zoho',
      avatar: 'fa-solid fa-user',
      quote: '"From zero knowledge to managing campaigns worth lakhs. Best investment in my career!"'
    },
    {
      name: 'Divya Krishnan',
      role: 'Social Media Lead',
      company: 'Flipkart',
      avatar: 'fa-solid fa-user',
      quote: '"The hands-on training and real client projects gave me confidence to excel in my role."'
    }
  ];

  return (
    <section className={`${styles.section} ${styles.testimonialsSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Success Stories</span>
            <h2 className={styles.sectionHeading}>Video Reviews From Our Students</h2>
            <p className={styles.sectionSubheading}>
              Hear directly from our alumni about their transformation and career success after completing the program.
            </p>
          </div>
          <div className={`${styles.gridLayout3Col} ${styles.testimonialsGrid}`}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={styles.videoReviewCard}>
                <div className={styles.videoContainer}>
                  <div className={styles.videoPlaceholder}></div>
                  <div className={styles.playButtonWrapper}>
                    <button className={styles.playButton} aria-label="Play video" type="button">
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className={styles.studentCardContent}>
                  <div className={styles.studentProfile}>
                    <div className={styles.studentAvatar}><i className={testimonial.avatar}></i></div>
                    <div className={styles.studentBasicInfo}>
                      <h3 className={styles.studentName}>{testimonial.name}</h3>
                      <p className={styles.studentRole}>{testimonial.role} @ {testimonial.company}</p>
                    </div>
                  </div>
                  <p className={styles.studentQuote}>{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAllReviewsContainer}>
            <button className={styles.viewAllLink} type="button">
              Watch All Student Reviews <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
