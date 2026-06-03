import { useRef } from 'react';
import styles from "./styles/HeroSection.module.css";

const HeroSection = () => {
  const jobOfferCardRef = useRef(null);
  const sectionRef = useRef(null);

  return (
    <section className={styles.heroSection} ref={sectionRef}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Badge */}
          <div className={styles.heroBadge}>
            ADMISSIONS OPEN FOR 2024 BATCH
          </div>

          {/* Main Heading */}
          <h1 className={styles.heroTitle}>
            Digital Marketing
             
            Course in Chennai
             
            with <span className={styles.highlight}>Job Offer from</span>
             
            <span className={styles.highlight}> Day 1</span>
          </h1>

          {/* Description */}
          <p className={styles.heroDescription}>
            Master 20+ premium tools, work on real client projects, and start
           
            your career immediately with our intensive 1-year agency-style
           
            training program.
          </p>

          {/* Corporate Experience Box */}
          <div className={styles.experienceBox}>
            <div className={styles.experienceIcon}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className={styles.experienceContent}>
              <div className={styles.experienceLabel}>Corporate Experience</div>
              <div className={styles.experienceTitle}>1 Year Real-World Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Get Course Details
            </button>
            <button className={styles.secondaryBtn}>
              View Curriculum
            </button>
          </div>

          {/* Bottom Stats */}
          <div className={styles.heroStats}>
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatNumber}>12 Months</div>
              <div className={styles.heroStatLabel}>Complete Duration</div>
            </div>
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatNumber}>₹2,25,000</div>
              <div className={styles.heroStatLabel}>Course Fee</div>
            </div>
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatNumber}>Day 1</div>
              <div className={styles.heroStatLabel}>Job Offer</div>
            </div>
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className={styles.heroCardsContainer}>
          {/* Job Offer Card */}
          <div className={styles.jobOfferCard} ref={jobOfferCardRef}>
            <div className={styles.jobOfferIcon}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className={styles.jobOfferContent}>
              <div className={styles.jobOfferTitle}>Job Offer Ready</div>
              <div className={styles.jobOfferSubtitle}>From Day 1</div>
            </div>
          </div>

          {/* Student Dashboard Card */}
          <div className={styles.dashboardCard}>
            <div className={styles.dashboardHeader}>
              <h3 className={styles.dashboardTitle}>Student Dashboard</h3>
              <span className={styles.activeBadge}>Active</span>
            </div>
            <div className={styles.dashboardContent}>
              <div className={styles.currentProject}>
                <div className={styles.projectLabel}>Current Project</div>
                <div className={styles.projectName}>SEO Audit for E-commerce</div>
                <div className={styles.progressBar}></div>
              </div>
              <div className={styles.dashboardStats}>
                <div className={styles.dashboardStat}>
                  <div className={styles.statValue}>12</div>
                  <div className={styles.statCount}>/20</div>
                  <div className={styles.statName}>Tools Mastered</div>
                </div>
                <div className={styles.dashboardStat}>
                  <div className={styles.statValue}>3</div>
                  <div className={styles.statName}>Live Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
