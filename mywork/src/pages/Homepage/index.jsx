import { useEffect } from 'react';
import { Header, Footer } from '../shared/components';
import HeroSection from './sections/HeroSection';
import KeyFeatures from './sections/KeyFeatures';
import GrowthStats from './sections/GrowthStats';
import JourneySteps from './sections/JourneySteps';
import Batches from './sections/Batches';
import Overview from './sections/Overview';
import Certificate from './sections/Certificate';
import Skills from './sections/Skills';
import Tools from './sections/Tools';
import Capstone from './sections/Capstone';
import Reviews from './sections/Reviews';
import Faq from './sections/Faq';
import CareerFaq from './sections/CareerFaq';
import BasicFaq from './sections/BasicFaq';
import Achievements from './sections/Achievements';
import Enterprise from './sections/Enterprise';
import Branches from './sections/Branches';
import styles from './Homepage.module.css';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homepageBg}>
      <Header />
      <HeroSection />
      <KeyFeatures />
      <GrowthStats />
      <JourneySteps />
      <Batches />
      <Overview />
      <Certificate />
      <Skills />
      <Tools />
      <Capstone />
      <Reviews />
      <Faq />
      <CareerFaq />
      <BasicFaq />
      <Achievements />
      <Enterprise />
      <Branches />
      <Footer />
    </div>
  );
};

export default Homepage;
