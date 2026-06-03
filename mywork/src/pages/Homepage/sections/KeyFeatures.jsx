import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/KeyFeatures.module.css';

const features = [
  {
    icon: faBrain,
    title: 'AI-Powered Learning',
    desc: 'Leverage cutting-edge AI tools in your marketing strategies'
  },
  {
    icon: faBriefcase,
    title: '100% Placement Support',
    desc: 'Guaranteed job assistance and interview preparation'
  },
  {
    icon: faCertificate,
    title: 'Industry Certification',
    desc: 'Earn recognized certifications from top platforms'
  },
];

const KeyFeatures = () => (
  <section className={`${styles.baseSection} ${styles.sectionBgWhite}`}>
    <h2 className={styles.sectionHeading}>Key Features</h2>
    <div className={styles.keyFeaturesRow}>
      {features.map((f) => (
        <div className={styles.keyFeatureCard} key={f.title}>
          <div className={styles.keyFeatureIcon}>
            <FontAwesomeIcon icon={f.icon} />
          </div>
          <div className={styles.keyFeatureText}>
            <div className={styles.keyFeatureTitle}>{f.title}</div>
            <div className={styles.keyFeatureDesc}>{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFeatures;
