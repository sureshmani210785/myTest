import styles from './styles/Batches.module.css';

const batches = [
  {
    type: 'WEEKDAY BATCH',
    typeColor: '#8B3DFF',
    border: 'linear-gradient(90deg, #8B3DFF 0%, #F857A6 100%)',
    date: 'April 15, 2026',
    time: 'Mon - Fri | 10:00 AM - 12:00 PM',
    btn: 'linear-gradient(90deg, #8B3DFF 0%, #F857A6 100%)',
  },
  {
    type: 'WEEKEND BATCH',
    typeColor: '#F857A6',
    border: 'linear-gradient(90deg, #F857A6 0%, #FF5858 100%)',
    date: 'April 20, 2026',
    time: 'Sat - Sun | 9:00 AM - 1:00 PM',
    btn: 'linear-gradient(90deg, #F857A6 0%, #FF5858 100%)',
  },
  {
    type: 'ONLINE BATCH',
    typeColor: '#FF5858',
    border: 'linear-gradient(90deg, #FF5858 0%, #FFB347 100%)',
    date: 'April 25, 2026',
    time: 'Mon - Fri | 6:00 PM - 8:00 PM',
    btn: 'linear-gradient(90deg, #FF5858 0%, #FFB347 100%)',
  },
];

const Batches = () => (
  <section className={styles.batchesSection}>
    <h2 className={styles.sectionHeading}>Upcoming Batches - Date and Time</h2>
    <div className={styles.batchesRow}>
      {batches.map((b) => (
        <div
          className={styles.batchCard}
          key={b.type}
          style={{ borderTop: `5px solid transparent`, borderImage: `${b.border} 1` }}
        >
          <div className={styles.batchType} style={{ color: b.typeColor }}>{b.type}</div>
          <div className={styles.batchDate}>{b.date}</div>
          <div className={styles.batchTime}>{b.time}</div>
          <button
            className={styles.batchBtn}
            style={{ background: b.btn }}
          >
            Reserve Seat
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Batches;
