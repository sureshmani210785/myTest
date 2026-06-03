import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>
            404
          </div>
          
          <h1 className={styles.heading}>
            Page Not Found
          </h1>
          
          <p className={styles.description}>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted. Let's get you back on track!
          </p>
          
          <div className={styles.buttonGroup}>
            <Link 
              to="/" 
              className={styles.primaryButton}
            >
              Go Back Home
            </Link>
            
            <Link 
              to="/why-us" 
              className={styles.secondaryButton}
            >
              Why Us
            </Link>
          </div>
          
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>
              What can you do?
            </h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                ✓ Check the URL and try again
              </li>
              <li className={styles.infoItem}>
                ✓ Visit our homepage to explore courses
              </li>
              <li className={styles.infoItem}>
                ✓ Learn more about why you should choose us
              </li>
              <li className={styles.infoItem}>
                ✓ Contact our support team for help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
