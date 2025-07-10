
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';

const QuoteCarousel = () => {
  const quotes = [
    {
      text: "The UN was designed to be a club of the world's great powers, and that's exactly what it is.",
      author: "Samantha Power",
      role: "Former UN Ambassador",
      image: "/assets/leadersquotes/Samantha_Power.jpg",
      country: "United States"
    },
    {
      text: "Diplomacy is the art of restraining power.",
      author: "Hans Morgenthau",
      role: "Political Scientist",
      image: "/assets/leadersquotes/Hans_Morgenthau.jpg",
      country: "Germany"
    },
    {
      text: "The United Nations is our one great hope for a peaceful and free world.",
      author: "Ralph Bunche",
      role: "Nobel Peace Prize Winner",
      image: "/assets/leadersquotes/Ralph_Bunche.jpg",
      country: "United States"
    },
    {
      text: "In diplomacy, as in life itself, one often learns more from failures than from successes.",
      author: "Dag Hammarskjöld",
      role: "Former UN Secretary-General",
      image: "/assets/leadersquotes/Dag Hammarskjöld.jpeg",
      country: "Sweden"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 bg-executive-navy relative overflow-hidden">
      {/* Diplomatic Background Illustrations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10"
        >
          <Globe size={100} className="text-crisp-white" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10"
        >
          <svg viewBox="0 0 200 200" className="w-32 h-32 text-crisp-white">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M60 100l80 0M100 60l0 80" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-crisp-white mb-16 font-cormorant"
        >
          Voices of Diplomacy
        </motion.h2>

        <div className="relative h-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8"
            >
              {/* Leader Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={quotes[currentIndex].image}
                    alt={quotes[currentIndex].author}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cool-light-blue/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-cool-light-blue rounded-full p-2">
                    <MapPin size={16} className="text-executive-navy" />
                  </div>
                </div>
              </motion.div>

              {/* Quote Content */}
              <div className="flex-1 max-w-2xl">
                <motion.blockquote 
                  className="text-xl md:text-2xl font-light italic text-crisp-white/90 mb-6 leading-relaxed font-crimson"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  "{quotes[currentIndex].text}"
                </motion.blockquote>
                <motion.footer 
                  className="text-cool-light-blue"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="font-semibold text-lg font-cormorant">{quotes[currentIndex].author}</div>
                  <div className="text-sm text-muted-silver/70 font-inter">{quotes[currentIndex].role}</div>
                  <div className="text-xs text-cool-light-blue/60 font-inter mt-1">{quotes[currentIndex].country}</div>
                </motion.footer>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-cool-light-blue rounded-full border border-muted-silver' 
                  : 'w-3 h-3 bg-muted-silver/50 rounded-full hover:bg-cool-light-blue/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;
