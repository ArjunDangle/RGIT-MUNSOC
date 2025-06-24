// src/components/TeamMemberCard.tsx
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform cursor-pointer border border-transparent hover:border-regal-gold"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-diplomatic-blue">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-2xl font-bold font-playfair text-crisp-silver mb-2"> {/* Updated name text style */}
        {member.name}
      </h3>
      <p className="font-inter text-crisp-silver/70 mb-4 font-medium"> {/* Updated position text style */}
        {member.position}
      </p>

      <div className="flex space-x-4">
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-executive-navy hover:text-regal-gold transition-colors hover:scale-110" // Updated Instagram icon color
          >
            <Instagram className="w-6 h-6" />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-executive-navy hover:text-regal-gold transition-colors hover:scale-110" // Updated LinkedIn icon color
          >
            <Linkedin className="w-6 h-6" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;