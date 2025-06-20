
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-charcoal-slate">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-regal-gold mb-6">
            About RGIT MUNSOC
          </h2>
          <div className="w-24 h-1 bg-regal-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-crisp-silver/90">
              The Model United Nations Society of Rajiv Gandhi Institute of Technology stands as a beacon of diplomatic excellence and intellectual discourse. Founded with the vision of nurturing future leaders and global citizens, we have consistently fostered an environment where ideas flourish and diplomacy thrives.
            </p>
            <p className="text-lg leading-relaxed text-crisp-silver/90">
              Our society brings together passionate individuals who share a commitment to understanding global affairs, developing critical thinking skills, and engaging in meaningful dialogue about the world's most pressing issues. Through rigorous debates, comprehensive research, and immersive simulations, we prepare our members to become effective communicators and thoughtful leaders.
            </p>
            <p className="text-lg leading-relaxed text-crisp-silver/90">
              With each passing year, RGIT MUNSOC has grown in stature and influence, hosting distinguished delegates from across the nation and establishing itself as a premier destination for Model UN excellence in Mumbai.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="RGIT MUNSOC Event"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-diplomatic-blue bg-opacity-20"></div>
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-regal-gold text-deep-onyx p-6 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
