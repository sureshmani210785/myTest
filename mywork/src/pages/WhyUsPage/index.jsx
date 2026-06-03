import { useEffect } from 'react';
import { Header, Footer } from '../shared/components';
import styles from '../shared/components/Header/Header.module.css';
import HeroSection from './sections/HeroSection';
import WhyChooseSection from './sections/WhyChooseSection';
import StatsSection from './sections/StatsSection';
import HighlightsSection from './sections/HighlightsSection';
import EligibilitySection from './sections/EligibilitySection';
import TrainingSection from './sections/TrainingSection';
import ToolsSection from './sections/ToolsSection';
import InstructorsSection from './sections/InstructorsSection';
import FaqSection from './sections/FaqSection';
import CertificationSection from './sections/CertificationSection';
import TestimonialsSection from './sections/TestimonialsSection';

const WhyUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerMenuItems = [
    { label: 'Modules', path: '/' },
    { label: 'Tools', path: '/tools' },
    { label: 'Experts', path: '/experts' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'FAQ', path: '/faq' },
  ];

  const headerTopStripContent = (
    <div className={styles.topStripContainer}>
      <div className={styles.topStripLeftSection}>
        <div className={styles.topStripContactItem}>
          <i className="fa-solid fa-phone"></i>
          <span>+91 98765 43210</span>
        </div>
        <div className={styles.topStripContactItem}>
          <i className="fa-solid fa-envelope"></i>
          <span>info@rankingacademy.com</span>
        </div>
      </div>
      <div className={styles.topStripRight}>
        Corporate Training <span className={styles.topStripArrow}>→</span>
      </div>
    </div>
  );

  const footerSections = [
    {
      title: 'Quick Links',
      items: ['About Us', 'Course Curriculum', 'Student Reviews', 'Placement Partners', 'Contact Us']
    },
    {
      title: 'Contact Info',
      items: [
        '📍 123, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
        '📞 +91 98765 43210',
        '📧 info@rankingacademy.com'
      ]
    }
  ];

  const footerCourseDetails = {
    items: [
      { label: 'Duration', value: '12 Months Full-Time' },
      { label: 'Fees', value: '₹2,25,000' },
      { label: 'Job Assistance', value: 'Within 12 Months' }
    ],
    buttonLabel: 'Apply Now',
    buttonAction: () => console.log('Apply clicked')
  };

  return (
    <>
      <Header
        variant="inner"
        logo={{ text: 'The Ranking Academy', badge: 'RA' }}
        menuItems={headerMenuItems}
        primaryAction={{ label: 'Apply Now', action: () => console.log('Apply clicked') }}
        secondaryAction={{ label: 'Download Syllabus', action: () => console.log('Download clicked') }}
        showTopStrip={true}
        topStripContent={headerTopStripContent}
      />
      <HeroSection />
      <StatsSection />
      <HighlightsSection />
      <EligibilitySection />
      <ToolsSection />
      <TrainingSection />
      <CertificationSection />
      <WhyChooseSection />
      <InstructorsSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer
        variant="detailed"
        brand={{
          text: 'The Ranking Academy',
          badge: 'RA',
          description: 'Chennai\'s premier digital marketing institute offering agency-style training with guaranteed internship.'
        }}
        sections={footerSections}
        courseDetails={footerCourseDetails}
        socialLinks={[
          { icon: 'fa-brands fa-facebook' },
          { icon: 'fa-brands fa-instagram' },
          { icon: 'fa-brands fa-linkedin' },
          { icon: 'fa-brands fa-youtube' }
        ]}
        copyright="© 2026 The Ranking Academy. All rights reserved."
      />
    </>
  );
};

export default WhyUsPage;
