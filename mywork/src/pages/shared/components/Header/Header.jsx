import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ 
  variant = 'default', // 'default' | 'inner'
  logo = { icon: null, text: 'EduMarketer' },
  menuItems = [
    { label: 'Courses', path: '/' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Success Stories', path: '/success-stories' }
  ],
  primaryAction = { label: 'Browse All Courses', action: () => {} },
  secondaryAction = { label: 'Log In', action: () => {} },
  showTopStrip = false,
  topStripContent = null
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      handleMenuClose();
    } else {
      setMenuOpen(true);
      setIsClosing(false);
    }
  };

  // Render logo based on variant
  const renderLogo = () => {
    if (variant === 'inner') {
      return (
        <Link to="/" className={styles.logo} onClick={handleMenuClose}>
          <div className={styles.logoBadge}>
            {logo.badge || 'RA'}
          </div>
          <span className={styles.logoText}>{logo.text}</span>
        </Link>
      );
    } else {
      return (
        <Link to="/" className={styles.headerLogo} style={{ textDecoration: 'none' }}>
          <span className={styles.logoBadge}>
            {logo.icon || (
              <i className="fa-solid fa-graduation-cap"></i>
            )}
          </span>
          <span className={styles.headerLogoText}>{logo.text}</span>
        </Link>
      );
    }
  };

  // Determine active link based on location
  const isActiveLink = (path) => location.pathname === path;

  if (variant === 'inner') {
    return (
      <header className={`${styles.header} ${isScrolled ? styles.headerSticky : ''}`}>
        <div className={styles.headerWrapper}>
          {/* Main Header Content */}
          <div className={styles.headerContent}>
            {renderLogo()}

            {/* Desktop Navigation */}
            <nav className={styles.headerNav}>
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className={styles.headerActions}>
              <button className={styles.syllabusBtn} onClick={secondaryAction.action}>
                {secondaryAction.label}
              </button>
              <button className={styles.applyBtn} onClick={primaryAction.action}>
                {primaryAction.label}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''} ${isClosing ? styles.menuClosing : ''}`}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <span className={styles.menuIconText}>{menuOpen ? '✕' : '☰'}</span>
            </button>

          {/* Mobile Menu Dropdown */}
          <nav className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
            <ul className={styles.mobileMenuList}>
              {menuItems.map(item => (
                <li key={item.path} className={styles.mobileMenuItem}>
                  <Link
                    to={item.path}
                    className={`${styles.mobileMenuLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={styles.mobileMenuItem}>
                <button
                  className={styles.signUpBtnMobile}
                  onClick={() => {
                    primaryAction.action();
                    handleMenuClose();
                  }}
                >
                  {primaryAction.label}
                </button>
              </li>
            </ul>
          </nav>

          </div>

          {/* Top Strip */}
          {showTopStrip && topStripContent && (
            <div className={`${styles.topStrip} ${isScrolled ? styles.topStripHidden : ''}`}>
              {topStripContent}
            </div>
          )}
        </div>
      </header>
    );
  }

  // Default variant (Homepage header)
  return (
    <header className={`${styles.headerBar} ${isScrolled ? styles.sticky : ''}`}>
      <div className={styles.headerContainer}>
        {renderLogo()}

        {/* Desktop Menu */}
        <nav className={styles.headerNav}>
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.headerNavLink} ${isActiveLink(item.path) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.headerActions}>
          <button className={styles.headerLoginBtn} onClick={secondaryAction.action}>
            {secondaryAction.label}
          </button>
          <button className={styles.headerCtaBtn} onClick={primaryAction.action}>
            {primaryAction.label}
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={styles.headerMenuToggle}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerIcon}>
            <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
            <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
            <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
          </span>
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className={`${styles.headerMobileMenu} ${isClosing ? styles.slideUp : ''}`}>
            <nav className={styles.headerMobileNav}>
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.headerMobileNavLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className={styles.headerMobileActions}>
              <button className={styles.headerLoginBtn} onClick={secondaryAction.action}>
                {secondaryAction.label}
              </button>
              <button className={styles.headerCtaBtn} onClick={primaryAction.action}>
                {primaryAction.label}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
)};

export default Header;
