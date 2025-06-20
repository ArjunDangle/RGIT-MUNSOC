
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-onyx">
      {/* Animated UN-inspired Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-onyx via-diplomatic-blue/20 to-charcoal-slate/30" />
        
        {/* Floating Globe Icons */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 opacity-10"
        >
          <Globe size={120} className="text-crisp-silver" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 right-32 opacity-10"
        >
          <Globe size={80} className="text-crisp-silver" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 30, 0]
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 right-20 opacity-5"
        >
          <Globe size={150} className="text-crisp-silver" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Diplomatic Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light italic text-crisp-silver/90 mb-8 leading-relaxed"
        >
          "The United Nations was not created to take mankind to heaven, but to save humanity from hell."
          <footer className="text-diplomatic-blue font-semibold mt-2 text-lg">— Dag Hammarskjöld</footer>
        </motion.blockquote>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-crisp-silver to-diplomatic-blue bg-clip-text text-transparent">
            RGIT MUNSOC
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-light text-crisp-silver mb-12 tracking-wide"
        >
          Where Ideas Meet Diplomacy
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/rgitmun25">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(20, 40, 64, 0.4)",
                background: "linear-gradient(45deg, #2C3E50, #142840)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-diplomatic-blue text-crisp-silver px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:bg-opacity-90 border border-crisp-silver/20"
            >
              <span>Explore RGITMUN'25</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link to="/team">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#2C3E50",
                color: "#F0F0F0"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-diplomatic-blue text-diplomatic-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-diplomatic-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-diplomatic-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
