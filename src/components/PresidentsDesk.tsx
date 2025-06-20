
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PresidentsDesk = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-diplomatic-gradient">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-silver mb-6">
            From the President's Desk
          </h2>
          <div className="w-24 h-1 bg-diplomatic-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Society President"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-diplomatic-gradient opacity-20"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-4 left-4 text-white"
            >
              <h3 className="text-2xl font-bold font-playfair">Arjun Patel</h3>
              <p className="text-lg font-inter">Society President</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl font-light font-inter italic text-crisp-silver leading-relaxed"
            >
              "As we embark on another year of diplomatic excellence, I am reminded that Model UN is not just about debate—it's about building bridges of understanding across cultures, ideologies, and perspectives."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg font-inter text-crisp-silver/80 leading-relaxed">
                Our society stands at the forefront of nurturing tomorrow's global leaders. Through rigorous training, thoughtful discourse, and immersive simulations, we prepare our members to tackle the world's most pressing challenges.
              </p>

              <p className="text-lg font-inter text-crisp-silver/80 leading-relaxed">
                I invite you to join us in this journey of intellectual growth, diplomatic prowess, and meaningful change. Together, we shall continue to uphold the values of peace, cooperation, and mutual understanding that define the very essence of diplomacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="pt-4"
            >
              <div className="text-right">
                <p className="font-bold font-inter text-crisp-silver text-lg">Warm regards,</p>
                <p className="font-bold font-playfair text-2xl text-crisp-silver">Arjun Patel</p>
                <p className="font-inter text-crisp-silver/70">Society President, RGIT MUNSOC</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresidentsDesk;
