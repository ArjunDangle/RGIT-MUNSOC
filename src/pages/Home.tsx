
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import LeaderQuotes from '@/components/LeaderQuotes';
import QuoteCarousel from '@/components/QuoteCarousel';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutUs />
      <QuoteCarousel />
      <LeaderQuotes />
    </motion.div>
  );
};

export default Home;
