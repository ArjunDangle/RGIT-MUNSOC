
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteCarousel = () => {
  const quotes = [
    {
      text: "The UN was designed to be a club of the world's great powers, and that's exactly what it is.",
      author: "Samantha Power",
      role: "Former UN Ambassador"
    },
    {
      text: "Diplomacy is the art of restraining power.",
      author: "Hans Morgenthau",
      role: "Political Scientist"
    },
    {
      text: "The United Nations is our one great hope for a peaceful and free world.",
      author: "Ralph Bunche",
      role: "Nobel Peace Prize Winner"
    },
    {
      text: "In diplomacy, as in life itself, one often learns more from failures than from successes.",
      author: "Dag Hammarskjöld",
      role: "Former UN Secretary-General"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 bg-deep-onyx">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-regal-gold mb-12"
        >
          Voices of Diplomacy
        </motion.h2>

        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <blockquote className="text-xl md:text-2xl font-light italic text-crisp-silver/90 mb-6 leading-relaxed">
                "{quotes[currentIndex].text}"
              </blockquote>
              <footer className="text-regal-gold">
                <div className="font-semibold text-lg">{quotes[currentIndex].author}</div>
                <div className="text-sm text-crisp-silver/70">{quotes[currentIndex].role}</div>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-regal-gold' : 'bg-charcoal-slate hover:bg-regal-gold/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;
