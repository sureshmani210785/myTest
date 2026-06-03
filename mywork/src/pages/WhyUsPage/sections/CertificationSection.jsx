import styles from "./styles/CertificationSection.module.css";

const CertificationSection = () => {
  return (
    <section className={styles.certificationSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Credentials</div>
            <h2 className={styles.sectionHeading}>
              Digital Marketing Training Certification
            </h2>
            <p className={styles.sectionSubheading}>
              Receive industry-recognized certifications that validate your skills and boost your career prospects.
            </p>
          </div>
        </div>
        <div className={styles.certificationContainer}>
          <div className={styles.certificationContent}>
            <div className={styles.certificationBenefits}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}><i className="fa-solid fa-certificate"></i></span>
                <div className={styles.benefitTextContent}>
                  <h4 className={styles.benefitTitle}>Course Completion Certificate</h4>
                  <p className={styles.benefitDescription}>Official certification from The Ranking Academy upon successful completion of the 1-year program.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}><i className="fa-brands fa-google"></i></span>
                <div className={styles.benefitTextContent}>
                  <h4 className={styles.benefitTitle}>Google Certifications</h4>
                  <p className={styles.benefitDescription}>Get certified in Google Analytics, Google Ads, and Google Digital Marketing fundamentals.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}><i className="fa-solid fa-infinity"></i></span>
                <div className={styles.benefitTextContent}>
                  <h4 className={styles.benefitTitle}>Meta Blueprint Certification</h4>
                  <p className={styles.benefitDescription}>Become Meta certified in Facebook and Instagram advertising strategies.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}><i className="fa-solid fa-award"></i></span>
                <div className={styles.benefitTextContent}>
                  <h4 className={styles.benefitTitle}>Industry Tool Certifications</h4>
                  <p className={styles.benefitDescription}>Earn certifications from SEMrush, HubSpot, Mailchimp, and other premium marketing tools.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.certificationOuter}>
            <div className={styles.certificateImageContainer}>
              <div className={styles.certificateCard}>
                <div className={styles.certificateBadge}>RA</div>
                <h3 className={styles.certificateTitle}>Certificate of Completion</h3>
                <p className={styles.certificateSubtitle}>Digital Marketing Professional Program</p>
                <div className={styles.certificateInfo}>
                  <div className={styles.infoItem}>
                    <label>Issued by</label>
                    <p className={styles.issuedBy}>The Ranking Academy</p>
                  </div>
                  <div className={styles.infoItem}>
                    <label>Date of Issue</label>
                    <p className={styles.dateOfIssue}>2024-01-15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
