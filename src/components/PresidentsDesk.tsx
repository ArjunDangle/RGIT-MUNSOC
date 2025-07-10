// src/components/PresidentsDesk.tsx
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const PresidentsDesk = () => {
  return (
    <section className="py-24 bg-crisp-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Heading (always on top in mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-6 md:hidden"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-dark-grey">
            From the Secretary General's Desk
          </h2>
        </motion.div>

        {/* General Secretary Image and Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col items-center text-center"
        >
          <img
            src="/assets/team/aryan_mullick.jpg"
            alt="General Secretary"
            className="w-80 md:w-[24rem] h-80 md:h-[24rem] rounded-full object-cover shadow-xl hover:scale-105 transition-transform duration-500 mb-4"
          />

          {/* Name and Position */}
          <h3 className="text-3xl md:text-4xl font-playfair text-dark-grey mb-2">
            Aryan Mullick
          </h3>
          <p className="text-lg md:text-xl text-muted-silver mb-4">
            Secretary General | 2024 - 2025
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-2 justify-center">
            <a
              href="https://www.instagram.com/aryan_mullick_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:scale-110 transition-transform"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-mullick-93a2b4244/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:scale-110 transition-transform"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </motion.div>

        {/* General Secretary's Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          {/* Heading (desktop only) */}
          <div className="hidden md:block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-dark-grey">
              From the Secretary General's Desk
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-silver leading-relaxed mb-6">
            Welcome to RGIT MUNSOC , a space where diplomacy, leadership, and excellence converge. As Secretary General, it is my privilege to lead a community dedicated to shaping meaningful change through dialogue and vision.
          </p>

          <p className="text-lg md:text-xl text-muted-silver leading-relaxed mb-6">
            RGIT MUNSOC is more than just a debating platform. It is a transformative experience where students challenge perspectives, embrace diversity, and develop into thoughtful, globally-aware leaders. Here, every voice matters, and every session is an opportunity to grow.
          </p>

          <p className="text-lg md:text-xl text-muted-silver leading-relaxed mb-6">
            I invite you to join us in this journey — to question, to lead, and to inspire. Together, let us foster understanding, break barriers, and carry forward the spirit of diplomacy.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PresidentsDesk;
