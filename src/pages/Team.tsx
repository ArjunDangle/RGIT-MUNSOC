// src/pages/Team.tsx
import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/TeamMemberCard';
import PresidentsDesk from '@/components/PresidentsDesk';

const Team = () => {
  // Modified 'role' to 'position' for consistency with TeamMemberCard
  const secretariat = [
    {
      name: "Arjun Patel",
      position: "Secretary General",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/arjunpatel",
      instagram: "https://instagram.com/arjunpatel"
    },
    {
      name: "Priya Sharma",
      position: "Deputy Secretary General",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/priyasharma",
      instagram: "https://instagram.com/priyasharma"
    },
    {
      name: "Rohan Mehta",
      position: "USG Delegate Affairs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/rohanmehta",
      instagram: "https://instagram.com/rohanmehta"
    },
    {
      name: "Sneha Reddy",
      position: "USG Logistics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/snehareddy",
      instagram: "https://instagram.com/snehareddy"
    },
  ];

  const core_team = [
    {
      name: "Aditi Singh",
      position: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734b5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/aditisingh",
      instagram: "https://instagram.com/aditisingh"
    },
    {
      name: "Kabir Khan",
      position: "Head of Content",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/kabirkhan",
      instagram: "https://instagram.com/kabirkhan"
    },
    {
      name: "Vivek Gupta",
      position: "Head of Outreach",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/vivekgupta",
      instagram: "https://instagram.com/vivekgupta"
    },
    {
      name: "Ishaan Das",
      position: "Head of Finance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com/in/ishaandas",
      instagram: "https://instagram.com/ishaandas"
    },
  ];

  // Combined all team members into a single array
  const allTeamMembers = [...secretariat, ...core_team];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 overflow-x-hidden"
    >
      {/* Team Hero Section */}
      <section id="team_hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-executive-navy">
        {/* Removed background image and overlay, reverting to solid color */}
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-crisp-white mb-4 font-playfair"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-crisp-white/90 leading-relaxed font-inter"
          >
            The dedicated individuals who drive RGIT MUNSOC, fostering diplomacy and cultivating future leaders.
          </motion.p>
        </div>
      </section>

      {/* President's Desk Section */}
      <section id = 'president_desk'>
        <PresidentsDesk />
      </section>

      {/* Combined Core Team Section */}
      <section id="core_team" className="py-20 bg-deep-onyx">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-silver mb-6">
              Our Dedicated Core Team
            </h2>
            <div className="w-24 h-1 bg-diplomatic-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allTeamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Team;