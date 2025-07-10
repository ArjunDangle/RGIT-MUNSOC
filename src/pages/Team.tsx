// src/pages/Team.tsx
import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/TeamMemberCard';
import PresidentsDesk from '@/components/PresidentsDesk';

const Team = () => {
  // Modified 'role' to 'position' for consistency with TeamMemberCard
  const secretariat = [
    {
      name: "Ayaan Menon",
      position: "Deputy Secretary General",
      image : "/assets/team/ayaan_menon.jpg",
      linkedin: "http://www.linkedin.com/in/ayaan-memon",
      instagram: "https://instagram.com/arjunpatel"
    },
    {
      name: "Swaleha Shaikh",
      position: "USG Delegate Affairs",
      image: "/assets/team/swaleha_shaikh.jpg",
      linkedin: "https://linkedin.com/in/priyasharma",
      instagram: "https://instagram.com/priyasharma"
    },
    {
      name: "Aritra Sinharoy",
      position: "USG Outreach",
      image: "/assets/team/aritra_sinharoy.jpg",
      linkedin: "https://www.linkedin.com/in/aritra-sinharoy-302a47311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://instagram.com/aditisingh"
    },
    {
      name: "Aryan Dalvi",
      position: "USG Creatives",
      image: "/assets/team/aryan_dalvi.jpg",
      linkedin: "http://linkedin.com/in/aryan-dalvi-9a364128b",
      instagram: "https://instagram.com/rohanmehta"
    },
    {
      name: "Vansh Bohra",
      position: "USG Marketing",
      image: "/assets/team/vansh_bohra.jpg",
      linkedin: "https://www.linkedin.com/in/vansh-bohra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      instagram: "https://instagram.com/snehareddy"
    },
     {
      name: "Harshita Patil",
      position: "USG Documentation",
      image: "/assets/team/harshita_patil.jpg",
      linkedin: "https://linkedin.com/in/aditisingh",
      instagram: "https://instagram.com/aditisingh"
    },
    {
      name: "Abhinand Kumar",
      position: "USG Logistics",
      image: "/assets/team/abhinand_kumar.jpg",
      linkedin: "https://linkedin.com/in/aditisingh",
      instagram: "https://instagram.com/aditisingh"
    },
  ];

  const core_team = [
   
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
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8">
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

      <section id="core_team" className="pt-8 pb-20 bg-deep-onyx">
  <div className="max-w-[1200px] mx-auto px-4">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold font-playfair text-crisp-silver mb-6">
        Our Dedicated Core Team
      </h2>
      <div className="w-24 h-1 bg-diplomatic-blue mx-auto"></div>
    </motion.div>

    {/* Spacious 4-3 Grid Layout */}
    <div className="flex flex-col items-center space-y-24">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 justify-items-center">
        {allTeamMembers.slice(0, 4).map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>

      {/* Row 2: 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 justify-items-center">
        {allTeamMembers.slice(4).map((member, index) => (
          <TeamMemberCard key={index + 4} member={member} index={index + 4} />
        ))}
      </div>
    </div>
  </div>
</section>

    </motion.div>
  );
};

export default Team;