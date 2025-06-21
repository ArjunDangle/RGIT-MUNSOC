
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-executive-navy">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-executive-navy via-cool-light-blue/10 to-muted-silver/5" />
        
        {/* Minimalistic UN-inspired floating elements - positioned to avoid mobile overlap */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-32 left-10 md:top-20 md:left-20 opacity-5"
        >
          <Globe size={60} className="text-crisp-white md:w-[120px] md:h-[120px]" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-40 right-10 md:bottom-32 md:right-32 opacity-3"
        >
          <Globe size={40} className="text-crisp-white md:w-[80px] md:h-[80px]" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 right-5 md:right-20 opacity-2"
        >
          <Globe size={80} className="text-crisp-white md:w-[150px] md:h-[150px]" />
        </motion.div>

        {/* Subtle world map watermark */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMjVDMTAgMzguODA3MSAyMS4xOTI5IDUwIDM1IDUwQzQ4LjgwNzEgNTAgNjAgMzguODA3MSA2MCAyNUM2MCAxMS4xOTI5IDQ4LjgwNzEgMCAzNSAwQzIxLjE5MjkgMCAxMCAxMS4xOTI5IDEwIDI1WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K')] bg-repeat opacity-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-playfair mb-6 text-crisp-white"
        >
          RGIT MUNSOC
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light font-inter text-crisp-white mb-12 tracking-wide"
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
