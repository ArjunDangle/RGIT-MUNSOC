
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LeaderQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const leaders = [
    {
      quote: "The United Nations was not created to take mankind to heaven, but to save humanity from hell.",
      leader: "Dag Hammarskjöld",
      role: "Former UN Secretary-General",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Peace cannot be kept by force; it can only be achieved by understanding.",
      leader: "Albert Einstein",
      role: "Physicist & Peace Advocate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      leader: "Walt Disney",
      role: "Visionary Leader",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Injustice anywhere is a threat to justice everywhere.",
      leader: "Martin Luther King Jr.",
      role: "Civil Rights Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      leader: "Nelson Mandela",
      role: "Former President of South Africa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "In diversity there is beauty and there is strength.",
      leader: "Maya Angelou",
      role: "Poet & Civil Rights Activist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-charcoal-slate">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-crisp-silver mb-6">
            Voices of Leadership
          </h2>
          <p className="text-xl text-crisp-silver/80 max-w-3xl mx-auto">
            Drawing inspiration from visionary leaders who shaped our world through diplomacy and courage
          </p>
          <div className="w-24 h-1 bg-diplomatic-blue mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-diplomatic-blue rounded-lg p-6 border border-crisp-silver/10 hover:border-crisp-silver/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-crisp-silver/20">
                  <img
                    src={leader.image}
                    alt={leader.leader}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-crisp-silver">{leader.leader}</h3>
                  <p className="text-sm text-crisp-silver/70">{leader.role}</p>
                </div>
              </div>
              
              <blockquote className="text-crisp-silver/90 italic text-lg leading-relaxed">
                "{leader.quote}"
              </blockquote>
              
              <div className="mt-4 w-12 h-0.5 bg-diplomatic-blue group-hover:bg-crisp-silver/50 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderQuotes;
