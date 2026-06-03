import styles from './styles/HeroSection.module.css';

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <span className={styles.heroBadge}>
          <i class="fa-solid fa-medal"></i>
          <span>Premium Marketing Academy</span>
        </span>
        <h1 className={styles.heroTitle}>
          Digital Marketing 
          Course in Chennai 
          with <span className={styles.heroHighlight}>AI & Placement</span>
        </h1>
        <p className={styles.heroDesc}>
          Elevate your career with industry-leading courses in SEO, Google Ads, and Social Media. Learn from experts and start scaling your success today.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.heroPrimaryBtn}>Start Learning Now →</button>
          <button className={styles.heroSecondaryBtn}>
            <i className="fa-regular fa-circle-play"></i>
            <span>View Curriculum</span>
          </button>
        </div>
        <div className={styles.heroTrustedRow}>
          <div className={styles.heroAvatars}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="user3" />
          </div>
          <span className={styles.heroTrustedLabel}>
            Trusted by <strong>10,000+ marketers</strong>
          </span>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroImageCard}>
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/535c2d3ec8-501addef12cd8813a054.png"
            alt="Dashboard"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
