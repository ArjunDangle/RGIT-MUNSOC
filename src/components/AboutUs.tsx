
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-soft-grey/10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-charcoal-black mb-6">
            About RGIT MUNSOC
          </h2>
          <div className="w-24 h-1 bg-un-blue mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold font-playfair text-charcoal-black mb-6">Our Mission</h3>
            <p className="text-charcoal-black/80 text-lg font-inter leading-relaxed mb-6">
              The Model United Nations Society of Rajiv Gandhi Institute of Technology stands as a beacon of diplomatic excellence, fostering critical thinking, global awareness, and the art of negotiation among tomorrow's leaders.
            </p>
            <p className="text-charcoal-black/80 text-lg font-inter leading-relaxed">
              Through rigorous debate, cultural exchange, and collaborative problem-solving, we prepare our members to tackle the world's most pressing challenges with wisdom, empathy, and unwavering dedication to peace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-navy-blue p-8 rounded-lg border border-un-blue/20">
              <h3 className="text-3xl md:text-4xl font-semibold font-playfair text-pure-white mb-6">Our Vision</h3>
              <p className="text-pure-white/80 text-lg font-inter leading-relaxed mb-4">
                To cultivate a generation of informed global citizens who understand the complexities of international relations and are equipped to create meaningful change in an interconnected world.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold font-playfair text-un-blue">500+</div>
                  <div className="text-sm font-inter text-pure-white/70">Delegates Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-playfair text-un-blue">50+</div>
                  <div className="text-sm font-inter text-pure-white/70">Conferences</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-playfair text-un-blue">5</div>
                  <div className="text-sm font-inter text-pure-white/70">Years Strong</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
