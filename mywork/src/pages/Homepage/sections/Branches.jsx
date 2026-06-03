import styles from './styles/Branches.module.css';

const getColorCode = (color) => {
  if (color === 'green') return '#0CA678';
  if (color === 'purple') return '#A259D9';
  if (color === 'red') return '#FF5858';
  if (color === 'blue') return '#5568d3';
  if (color === 'pink') return '#F857A6';
  return '#7b8493';
};

const branches = [
  {
    name: 'T. Nagar Branch',
    address: '123, Usman Road, T. Nagar, Chennai - 600017',
    phone: '+91 98765 43210',
    email: 'tnagar@edumarketer.com',
    color: 'gray',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconGray}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#EAF2FA"/><path d="M16 10a6 6 0 016 6c0 4.5-6 10-6 10s-6-5.5-6-10a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" fill="#1A2A47"/></svg>
      </span>
    ),
    btn: styles.branchBtnGray,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#1A2A47"/></svg>
    ),
  },
  {
    name: 'Anna Nagar Branch',
    address: '456, 2nd Avenue, Anna Nagar, Chennai - 600040',
    phone: '+91 98765 43211',
    email: 'annanagar@edumarketer.com',
    color: 'green',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconGreen}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#D6F8E5"/><path d="M16 8a8 8 0 018 8c0 6-8 12-8 12S8 22 8 16a8 8 0 018-8zm0 10a2 2 0 100-4 2 2 0 000 4z" fill="#0CA678"/></svg>
      </span>
    ),
    btn: styles.branchBtnGreen,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#0CA678"/></svg>
    ),
  },
  {
    name: 'Velachery Branch',
    address: '789, Velachery Main Road, Chennai - 600042',
    phone: '+91 98765 43212',
    email: 'velachery@edumarketer.com',
    color: 'purple',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconPurple}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F1E6FF"/><path d="M16 8a8 8 0 018 8c0 6-8 12-8 12S8 22 8 16a8 8 0 018-8zm0 10a2 2 0 100-4 2 2 0 000 4z" fill="#A259D9"/></svg>
      </span>
    ),
    btn: styles.branchBtnPurple,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#A259D9"/></svg>
    ),
  },
  {
    name: 'OMR Branch',
    address: '321, OMR Road, Thoraipakkam, Chennai - 600097',
    phone: '+91 98765 43213',
    email: 'omr@edumarketer.com',
    color: 'red',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconRed}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FFE5E5"/><path d="M16 8a8 8 0 018 8c0 6-8 12-8 12S8 22 8 16a8 8 0 018-8zm0 10a2 2 0 100-4 2 2 0 000 4z" fill="#FF5858"/></svg>
      </span>
    ),
    btn: styles.branchBtnRed,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#FF5858"/></svg>
    ),
  },
  {
    name: 'Adyar Branch',
    address: '654, Lattice Bridge Road, Adyar, Chennai - 600020',
    phone: '+91 98765 43214',
    email: 'adyar@edumarketer.com',
    color: 'blue',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconBlue}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#E5F0FF"/><path d="M16 8a8 8 0 018 8c0 6-8 12-8 12S8 22 8 16a8 8 0 018-8zm0 10a2 2 0 100-4 2 2 0 000 4z" fill="#5568d3"/></svg>
      </span>
    ),
    btn: styles.branchBtnBlue,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#5568d3"/></svg>
    ),
  },
  {
    name: 'Porur Branch',
    address: '987, Porur Main Road, Chennai - 600093',
    phone: '+91 98765 43215',
    email: 'porur@edumarketer.com',
    color: 'pink',
    icon: (
      <span className={`${styles.branchIconCircle} ${styles.branchIconPink}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FFE5F5"/><path d="M16 8a8 8 0 018 8c0 6-8 12-8 12S8 22 8 16a8 8 0 018-8zm0 10a2 2 0 100-4 2 2 0 000 4z" fill="#F857A6"/></svg>
      </span>
    ),
    btn: styles.branchBtnPink,
    btnIcon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11.5c0 5.47 4.53 9.5 9.5 9.5s9.5-4.03 9.5-9.5C21.5 6.03 16.97 2 12 2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#F857A6"/></svg>
    ),
  },
];

const Branches = () => (
    <div className={styles.branchesContainer}>
      <h2 className={styles.sectionHeading}>Our Branches Nearby to you</h2>
      <div className={styles.sectionSubheading}>
        Visit our state-of-the-art training centers across Chennai with modern facilities and expert trainers.
      </div>
      <div className={styles.branchesGrid}>
        {branches.map((b) => (
          <div className={styles.branchCard} key={b.name}>
            {b.icon}
            <div className={styles.branchName}>{b.name}</div>
            <div className={styles.branchAddress}>{b.address}</div>
            <div className={styles.branchContactRow}>
              <span className={styles.branchContactIcon}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 21 3 16.39 3 11a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill={getColorCode(b.color)} /></svg>
              </span>
              <span className={styles.branchContactText}>{b.phone}</span>
            </div>
            <div className={styles.branchContactRow}>
              <span className={styles.branchContactIcon}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm8 8v4m0-4V8m0 4h4m-4 0H8" stroke={getColorCode(b.color)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className={styles.branchContactText}>{b.email}</span>
            </div>
            <button className={`${styles.branchBtn} ${b.btn}`}>
              <span className={styles.branchBtnIcon}>{b.btnIcon}</span>{' '}
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>
);

export default Branches;
