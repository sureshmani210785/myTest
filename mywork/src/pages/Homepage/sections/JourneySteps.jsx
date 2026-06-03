import styles from './styles/JourneySteps.module.css';

const steps = [
  {
    number: '1',
    gradient: 'journey1',
    title: 'Enroll & Onboard',
    desc: 'Complete registration and access learning portal',
  },
  {
    number: '2',
    gradient: 'journey2',
    title: 'Learn & Practice',
    desc: 'Master concepts through live projects',
  },
  {
    number: '3',
    gradient: 'journey3',
    title: 'Get Certified',
    desc: 'Earn industry-recognized certifications',
  },
  {
    number: '4',
    gradient: 'journey4',
    title: 'Land Your Job',
    desc: '100% placement support guaranteed',
  },
];

const gradients = {
  journey1: 'linear-gradient(135deg, #A020F0 0%, #F857A6 100%)',
  journey2: 'linear-gradient(135deg, #F857A6 0%, #FF5858 100%)',
  journey3: 'linear-gradient(135deg, #FF5858 0%, #FFB347 100%)',
  journey4: 'linear-gradient(135deg, #F857A6 0%, #FF5858 100%)',
};

const JourneySteps = () => (
  <section className={styles.journeyStepsSection}>
    <h2 className={styles.sectionHeading}>Let&apos;s walk you through the journey at The Ranking Academy</h2>
    <div className={styles.journeyStepsRow}>
      {steps.map((step) => (
        <div className={styles.journeyStepCard} key={step.title}>
          <div
            className={styles.journeyStepCircle}
            style={{ background: gradients[step.gradient] }}
          >
            {step.number}
          </div>
          <div className={styles.journeyStepText}>
            <div className={styles.journeyStepTitle}>{step.title}</div>
            <div className={styles.journeyStepDesc}>{step.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default JourneySteps;
