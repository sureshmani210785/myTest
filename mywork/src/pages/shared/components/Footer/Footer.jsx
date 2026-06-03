import styles from './Footer.module.css';

const Footer = ({ 
  variant = 'default', // 'default' | 'detailed'
  brand = {
    icon: null,
    text: 'EduMarketer',
    badge: 'RA',
    description: 'Empowering the next generation of digital marketing leaders with practical, industry-focused education.'
  },
  sections = [],
  courseDetails = null,
  socialLinks = [],
  copyright = '© 2026 EduMarketer Academy. All rights reserved.'
}) => {
  if (variant === 'detailed') {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div>
            <div className={styles.footerBrand}>
              <div className={styles.footerBadge}>{brand.badge || 'RA'}</div>
              <span className={styles.footerBrandText}>{brand.text}</span>
            </div>
            <p className={styles.footerDescription}>
              {brand.description}
            </p>
            {socialLinks && socialLinks.length > 0 && (
              <div className={styles.footerSocial}>
                {socialLinks.map((link, idx) => (
                  <button key={idx} className={styles.socialBtn}>
                    <i className={link.icon}></i>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className={styles.footerSection}>
              <h3>{section.title}</h3>
              <ul className={styles.footerList}>
                {section.items && section.items.map((item, i) => (
                  <li key={i}><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Course Details Box */}
          {courseDetails && (
            <div className={styles.courseDetailsBox}>
              <h3>Course Details</h3>
              {courseDetails.items && courseDetails.items.map((item, idx) => (
                <div key={idx} className={styles.courseDetail}>
                  <p className={styles.courseDetailLabel}>{item.label}</p>
                  <p className={item.label === 'Job Assistance' ? styles.jobAssistanceValue : styles.courseDetailValue}>
                    {item.value}
                  </p>
                </div>
              ))}
              {courseDetails.buttonLabel && (
                <button 
                  className={styles.courseApplyBtn}
                  onClick={courseDetails.buttonAction || (() => {})}
                >
                  {courseDetails.buttonLabel}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className={styles.footerCopyright}>
          {copyright}
        </div>
      </footer>
    );
  }

  // Default variant (simple footer)
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrandRow}>
          <span className={styles.footerBrandIcon}>
            {brand.icon || (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 7L32 13L18 19L4 13L18 7Z" fill="#fff" fillOpacity="0.9"/>
                <path d="M18 21V27" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="18" cy="29.5" rx="4" ry="1.5" fill="#fff" fillOpacity="0.5"/>
              </svg>
            )}
          </span>
          <span className={styles.footerBrandText}>{brand.text}</span>
        </div>
        <div className={styles.footerSubtitle}>
          {brand.description}
        </div>
        <div className={styles.footerCopyright}>
          {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
