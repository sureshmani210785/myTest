import styles from './styles/Reviews.module.css';

const reviews = [
  {
    name: 'Rahul Kumar',
    text: 'The best digital marketing course in Chennai! Got placed at Amazon within 2 months of completion. The AI tools training was exceptional.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    text: 'Practical training approach with real projects made all the difference. Now working as Digital Marketing Manager at Flipkart.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
  },
  {
    name: 'Arjun Reddy',
    text: 'Mentors are industry experts who guide you at every step. Started my own agency after completing the course!',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    stars: 5,
  },
];

const Reviews = () => (
  <div className={`${styles.baseSection} ${styles.sectionBgPale}`}>
    <h2 className={styles.sectionHeading}>Reviews From Students We've Trained For...</h2>
    <div className={styles.reviewsRow}>
      {reviews.map((review) => (
        <div className={`${styles.cardBase} ${styles.reviewCard}`} key={review.name}>
          <div className={styles.reviewUserRow}>
            <img className={styles.reviewAvatar} src={review.avatar} alt={review.name} />
            <div className={styles.reviewUserInfo}>
              <div className={styles.reviewName}>{review.name}</div>
              <div className={styles.reviewStars}>
                {Array.from({length: review.stars}).map((_, idx) => (
                  <i key={`${review.name}-star-${idx}`} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.reviewText}>
            "{review.text}"
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Reviews;
