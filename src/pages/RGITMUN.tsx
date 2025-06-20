
import { motion } from 'framer-motion';
import CommitteeCard from '@/components/CommitteeCard';

const RGITMUN = () => {
  const committees = [
    {
      name: "United Nations Human Rights Council",
      abbreviation: "UNHRC",
      agenda: "Addressing Human Rights Violations in Conflict Zones",
      description: "The Human Rights Council is an inter-governmental body within the United Nations system responsible for strengthening the promotion and protection of human rights around the globe.",
      backgroundGuide: "/guides/unhrc-bg.pdf"
    },
    {
      name: "United Nations Security Council",
      abbreviation: "UNSC",
      agenda: "Maintaining International Peace and Security in the Indo-Pacific Region",
      description: "The Security Council has primary responsibility for the maintenance of international peace and security, making it the most powerful organ of the United Nations.",
      backgroundGuide: "/guides/unsc-bg.pdf"
    }
  ];

  const timeline = [
    {
      day: "Day 1 - April 12, 2025",
      events: [
        { time: "09:00 AM", event: "Registration & Welcome Coffee" },
        { time: "10:00 AM", event: "Opening Ceremony" },
        { time: "11:30 AM", event: "Committee Session I" },
        { time: "01:00 PM", event: "Lunch Break" },
        { time: "02:00 PM", event: "Committee Session II" },
        { time: "04:00 PM", event: "Tea Break" },
        { time: "04:30 PM", event: "Committee Session III" },
        { time: "06:30 PM", event: "Day 1 Conclusion" }
      ]
    },
    {
      day: "Day 2 - April 13, 2025",
      events: [
        { time: "09:30 AM", event: "Committee Session IV" },
        { time: "11:30 AM", event: "Crisis Committee" },
        { time: "01:00 PM", event: "Lunch Break" },
        { time: "02:00 PM", event: "Final Committee Session" },
        { time: "04:00 PM", event: "Closing Ceremony" },
        { time: "05:30 PM", event: "Awards & Recognition" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-diplomatic-gradient opacity-80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-regal-gold mb-6"
          >
            RGITMUN'25
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-crisp-silver mb-4"
          >
            April 12-13, 2025
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-crisp-silver/80 leading-relaxed"
          >
            Join us for two days of intense diplomatic negotiations, thoughtful debate, and global problem-solving as we tackle the world's most pressing challenges.
          </motion.p>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-charcoal-slate">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-regal-gold mb-6">
              Committees
            </h2>
            <div className="w-24 h-1 bg-regal-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <CommitteeCard key={index} committee={committee} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-deep-onyx">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-regal-gold mb-6">
              Event Timeline
            </h2>
            <div className="w-24 h-1 bg-regal-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {timeline.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, x: dayIndex === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-diplomatic-blue rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-regal-gold mb-6">{day.day}</h3>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start space-x-4">
                      <div className="text-regal-gold font-semibold min-w-[80px]">
                        {event.time}
                      </div>
                      <div className="text-crisp-silver">{event.event}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-charcoal-slate">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-regal-gold mb-6">
              Ready to Join the Diplomatic Arena?
            </h2>
            <p className="text-xl text-crisp-silver/80 mb-8 leading-relaxed">
              Register now for RGITMUN'25 and be part of an unforgettable diplomatic experience that will challenge your perspectives and enhance your global understanding.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-regal-gold text-deep-onyx px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-opacity-90"
            >
              Register for RGITMUN'25
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default RGITMUN;
