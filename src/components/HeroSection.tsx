
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Scale, Handshake, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-executive-navy">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-executive-navy via-cool-light-blue/10 to-muted-silver/5" />
        
        {/* Large Diplomatic Vector Illustration - Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            {/* World Map SVG Background */}
            <svg viewBox="0 0 800 400" className="w-full h-full text-crisp-white/10">
              <path d="M158 206c-1-3-2-7-2-11 0-4 1-8 2-11l46-23c4-2 9-2 13 0l46 23c1 3 2 7 2 11 0 4-1 8-2 11l-46 23c-4 2-9 2-13 0z" />
              <circle cx="400" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M300 150l200 0M300 200l200 0M300 250l200 0" stroke="currentColor" strokeWidth="1" />
              <path d="M350 100l0 200M400 100l0 200M450 100l0 200" stroke="currentColor" strokeWidth="1" />
            </svg>
            {/* Overlaying diplomatic symbols */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Scale size={80} className="text-crisp-white/10" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Smaller floating diplomatic elements - positioned to avoid mobile overlap */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-5 md:top-16 md:left-16 opacity-10"
        >
          <Handshake size={40} className="text-crisp-white md:w-[60px] md:h-[60px]" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 right-5 md:bottom-24 md:right-24 opacity-8"
        >
          <Users size={35} className="text-crisp-white md:w-[55px] md:h-[55px]" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 90, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-2 md:right-12 opacity-6"
        >
          <Globe size={45} className="text-crisp-white md:w-[70px] md:h-[70px]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-cormorant mb-6 text-crisp-white"
        >
          RGIT MUNSOC
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light font-crimson text-crisp-white mb-12 tracking-wide"
        >
          Where Ideas Meet Diplomacy
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/rgitmun25">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(173, 216, 230, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-cool-light-blue text-executive-navy px-8 py-3 rounded-lg font-semibold font-inter flex items-center space-x-2 transition-all duration-300 hover:bg-opacity-90 border border-muted-silver/30"
            >
              <span>Explore RGITMUN'25</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link to="/team">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ADD8E6",
                color: "#001F3F",
                borderColor: "#A9A9A9"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cool-light-blue text-cool-light-blue px-8 py-3 rounded-lg font-semibold font-inter transition-all duration-300"
            >
              Meet the Team
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cool-light-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-silver rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
