import styles from "./styles/BatchesScheduleSection.module.css";

const BatchesScheduleSection = () => {
  const batches = [
    {
      name: 'Morning Batch',
      timing: '7:00 AM - 9:00 AM',
      days: 'Monday to Friday',
      duration: '3 months',
      capacity: '30 students'
    },
    {
      name: 'Afternoon Batch',
      timing: '2:00 PM - 4:00 PM',
      days: 'Monday to Friday',
      duration: '3 months',
      capacity: '30 students'
    },
    {
      name: 'Evening Batch',
      timing: '6:00 PM - 8:00 PM',
      days: 'Monday to Friday',
      duration: '3.5 months',
      capacity: '30 students'
    },
    {
      name: 'Weekend Batch',
      timing: '10:00 AM - 2:00 PM',
      days: 'Saturday & Sunday',
      duration: '4 months',
      capacity: '30 students'
    }
  ];

  return (
    <section className={`${styles.section} ${styles.batchesScheduleSection}`}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Batch Schedules</h2>
            <p className={styles.sectionSubheading}>
              Choose from our flexible batch timings that work best with your schedule
            </p>
          </div>
          <div className={`${styles.gridLayout3Col} ${styles.batchesGrid}`}>
            {batches.map((batch) => (
              <div key={batch.name} className={styles.batchCard}>
                <h3>{batch.name}</h3>
                <div className={styles.batchDetails}>
                  <div className={styles.batchDetail}>
                    <span className={styles.label}>Timing:</span>
                    <span>{batch.timing}</span>
                  </div>
                  <div className={styles.batchDetail}>
                    <span className={styles.label}>Days:</span>
                    <span>{batch.days}</span>
                  </div>
                  <div className={styles.batchDetail}>
                    <span className={styles.label}>Duration:</span>
                    <span>{batch.duration}</span>
                  </div>
                  <div className={styles.batchDetail}>
                    <span className={styles.label}>Capacity:</span>
                    <span>{batch.capacity}</span>
                  </div>
                </div>
                <button type="button" className={styles.batchButton}>Enroll Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchesScheduleSection;
