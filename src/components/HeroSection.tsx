// src/components/HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Function to handle the smooth scroll
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Ensure the main section explicitly hides overflow
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background for Smaller/Medium Screens (Mobile View) */}
      <div
        className="absolute inset-0 z-0 block md:hidden bg-executive-navy"
        // Ensure this specific mobile background container hides its own overflow
        style={{ overflow: 'hidden' }}
      >
        {/*
          Image background for mobile.
          The path assumes 'mobile herp.jpg' is in your public/assets folder.
          Adjust opacity-10 (10%) as needed for desired visibility under the gradient.
          We also add a scale to make sure it's slightly larger than the container,
          which can sometimes help fill subtle gaps caused by rendering quirks,
          and ensure it completely covers the area without revealing edges,
          then ensure overflow is hidden on its parent.
        */}
        <img
          src="/assets/mobile herp.jpg"
          alt="World Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 scale-110" // Added scale-110
          style={{ transform: 'scale(1.1)' }} // Fallback for scale if Tailwind doesn't apply it (or for more control)
        />
        {/* This gradient will sit on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-executive-navy via-cool-light-blue/10 to-muted-silver/5" />

        {/* Removed the motion.div that previously held the SVG.
            This simplifies the mobile background structure to just the image and gradient.
            If you still wanted some kind of motion/effect on the background map,
            you'd apply it directly to the <img> tag or a new wrapper,
            but positioning is key.
        */}
      </div>

      {/* Background for Larger Screens (Windows View) */}
      <div
        className="absolute inset-0 z-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/hero bg.jpg')` }}
      ></div>

      {/* Main content - responsive text and button colors */}
      <div className="container text-center z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-crisp-white md:text-executive-navy"
        >
          RGIT MUNSOC
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-crisp-white md:text-executive-navy"
        >
          Fostering Diplomacy, Cultivating Leaders
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 100 }}
          className="flex items-center justify-center" // Centering the single button
        >
          {/* Added onClick handler to the Link for smooth scrolling */}
          <Link to="/rgitmun25" onClick={handleScrollToTop}>
            <Button className="bg-transparent border-4 border-muted-silver text-crisp-white hover:bg-muted-silver hover:text-executive-navy px-10 py-5 rounded-lg text-lg font-extrabold
                               md:bg-transparent md:border-4 md:border-executive-navy md:text-executive-navy md:hover:bg-executive-navy md:hover:text-crisp-white md:px-14 md:py-7 md:text-xl md:font-extrabold">
              RGIT MUN'25
              <ArrowRight className="ml-2" size={20} strokeWidth={3} />
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Scroll Indicator has been removed */}
    </motion.section>
  );
};

export default HeroSection;