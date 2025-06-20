import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/TeamMemberCard';
import PresidentsDesk from '@/components/PresidentsDesk';

const Team = () => {
  const secretariat = [
    {
      name: "Arjun Patel",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/arjunpatel",
      instagram: "https://instagram.com/arjunpatel"
    },
    {
      name: "Priya Sharma",
      role: "Deputy Secretary General",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/priyasharma",
      instagram: "https://instagram.com/priyasharma"
    },
    {
      name: "Rohan Mehta",
      role: "USG Delegate Affairs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/rohanmehta",
      instagram: "https://instagram.com/rohanmehta"
    },
    {
      name: "Ananya Singh",
      role: "USG External Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/ananyasingh",
      instagram: "https://instagram.com/ananyasingh"
    }
  ];

  const coreTeam = [
    {
      name: "Vikram Joshi",
      role: "Director - UNHRC",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/vikramjoshi",
      instagram: "https://instagram.com/vikramjoshi"
    },
    {
      name: "Kavya Reddy",
      role: "Director - UNSC",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/kavyareddy",
      instagram: "https://instagram.com/kavyareddy"
    },
    {
      name: "Aditya Kumar",
      role: "Logistics Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/adityakumar",
      instagram: "https://instagram.com/adityakumar"
    },
    {
      name: "Shreya Gupta",
      role: "Media & Communications",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/shreyagupta",
      instagram: "https://instagram.com/shreyagupta"
    },
    {
      name: "Karthik Nair",
      role: "Technical Head",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/kartiknair",
      instagram: "https://instagram.com/kartiknair"
    },
    {
      name: "Riya Chopra",
      role: "Design & Creative Head",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/riyachopra",
      instagram: "https://instagram.com/riyachopra"
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
      <section className="relative py-20 bg-diplomatic-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold font-playfair text-crisp-silver mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-inter text-crisp-silver/80 leading-relaxed"
          >
            Meet the dedicated individuals who make RGIT MUNSOC a beacon of diplomatic excellence
          </motion.p>
        </div>
      </section>

      {/* President's Desk Section */}
      <PresidentsDesk />

      {/* Secretariat Section */}
      <section className="py-20 bg-charcoal-slate">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-silver mb-6">
              Secretariat
            </h2>
            <div className="w-24 h-1 bg-diplomatic-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secretariat.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-deep-onyx">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-silver mb-6">
              Core Team
            </h2>
            <div className="w-24 h-1 bg-diplomatic-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;
