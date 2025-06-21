
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-sky-blue/20 to-muted-gold/10" />
        
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
          className="absolute top-20 left-20 opacity-5"
        >
          <Globe size={120} className="text-pure-white" />
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
          className="absolute bottom-32 right-32 opacity-5"
        >
          <Globe size={80} className="text-pure-white" />
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
          className="absolute top-1/2 right-20 opacity-3"
        >
          <Globe size={150} className="text-pure-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold font-playfair mb-6"
        >
          <span className="bg-gradient-to-r from-pure-white to-sky-blue bg-clip-text text-transparent">
            RGIT MUNSOC
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-light font-inter text-pure-white mb-12 tracking-wide"
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
                boxShadow: "0 10px 25px rgba(135, 206, 235, 0.3)",
                background: "linear-gradient(45deg, #87CEEB, #D4AF37)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-sky-blue text-deep-navy px-8 py-3 rounded-lg font-semibold font-inter flex items-center space-x-2 transition-all duration-300 hover:bg-opacity-90 border border-muted-gold/30"
            >
              <span>Explore RGITMUN'25</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link to="/team">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#87CEEB",
                color: "#001F3F",
                borderColor: "#D4AF37"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-sky-blue text-sky-blue px-8 py-3 rounded-lg font-semibold font-inter transition-all duration-300"
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
          className="w-6 h-10 border-2 border-sky-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
