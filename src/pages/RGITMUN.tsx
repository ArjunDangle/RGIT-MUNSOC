
import { motion } from 'framer-motion';
import { Globe, Users, Calendar, Award, FileText, MapPin, Handshake, Scale } from 'lucide-react';
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

  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "200+ Delegates",
      description: "Join delegates from across the country"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Issues",
      description: "Tackle real-world diplomatic challenges"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Prestigious Awards",
      description: "Recognition for outstanding diplomacy"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research Papers",
      description: "Comprehensive background guides provided"
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-diplomatic-gradient opacity-90" />
          
          {/* Diplomatic Vector Illustrations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 opacity-15"
          >
            <Scale size={80} className="text-crisp-white" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 opacity-10"
          >
            <Handshake size={100} className="text-crisp-white" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Globe className="w-16 h-16 text-cool-light-blue mx-auto mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-crisp-white mb-6 font-cormorant"
          >
            RGITMUN'25
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-cool-light-blue mb-4"
          >
            <Calendar className="w-6 h-6" />
            <span className="font-crimson">April 12-13, 2025</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center space-x-2 text-lg text-crisp-white/80 mb-8"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-inter">Rajiv Gandhi Institute of Technology, Mumbai</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-crisp-white/80 leading-relaxed max-w-3xl mx-auto font-inter"
          >
            Join us for two days of intense diplomatic negotiations, thoughtful debate, and global problem-solving as we tackle the world's most pressing challenges in the spirit of international cooperation.
          </motion.p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-crisp-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 font-cormorant">
              Conference Highlights
            </h2>
            <div className="w-24 h-1 bg-cool-light-blue mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-muted-silver/30 hover:border-cool-light-blue/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-cool-light-blue mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-2 font-crimson">
                  {highlight.title}
                </h3>
                <p className="text-muted-silver text-sm font-inter">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-executive-navy/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 font-cormorant">
              Committees
            </h2>
            <div className="w-24 h-1 bg-cool-light-blue mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <CommitteeCard key={index} committee={committee} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-crisp-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 font-cormorant">
              Event Timeline
            </h2>
            <div className="w-24 h-1 bg-cool-light-blue mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {timeline.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, x: dayIndex === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-executive-navy/5 rounded-lg p-6 border border-muted-silver/20"
              >
                <h3 className="text-2xl font-bold text-cool-light-blue mb-6 font-cormorant">{day.day}</h3>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start space-x-4 p-3 rounded border-l-4 border-cool-light-blue/50 bg-crisp-white">
                      <div className="text-cool-light-blue font-semibold min-w-[80px] text-sm font-inter">
                        {event.time}
                      </div>
                      <div className="text-dark-grey text-sm font-inter">{event.event}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-diplomatic-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-crisp-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-crisp-white mb-6 font-cormorant">
              Ready to Join the Diplomatic Arena?
            </h2>
            <p className="text-xl text-crisp-white/80 mb-8 leading-relaxed font-inter">
              Register now for RGITMUN'25 and be part of an unforgettable diplomatic experience that will challenge your perspectives and enhance your global understanding.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-crisp-white text-executive-navy px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 border border-muted-silver/30 font-inter"
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
