import styles from './styles/Certificate.module.css';

const certificateInfo = [
  {
    icon: 'fa-medal',
    text: 'Accredited by leading industry bodies',
  },
  {
    icon: 'fa-globe',
    text: 'Shareable on LinkedIn & resume',
  },
  {
    icon: 'fa-shield',
    text: 'Blockchain-verified credentials',
  },
];

const Certificate = () => (
  <section className={styles.certificateSection}>
    <h2 className={styles.sectionHeading}>Digital Marketing Course Completion Certificate</h2>
    <div className={styles.certificateRow}>
      <div className={styles.certificateImgCol}>
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed52ea9abe-fca475b1047f5ad21ea7.png"
          alt="Certificate Example"
          className={styles.certificateImg}
        />
      </div>
      <div className={styles.certificateTextCol}>
        <h3 className={styles.certificateSubtitle}>Industry-Recognized Certification</h3>
        <p className={styles.certificateDesc}>
          Upon successful completion, receive a verified certificate that showcases your expertise to employers worldwide.
        </p>
        <div className={styles.certificateInfoList}>
          {certificateInfo.map((item) => (
            <div className={styles.certificateInfoCard} key={item.text}>
              <span className={styles.certificateInfoIcon}>
                <i className={`fa-solid ${item.icon}`}></i>
              </span>
              <span className={styles.certificateInfoText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Certificate;
