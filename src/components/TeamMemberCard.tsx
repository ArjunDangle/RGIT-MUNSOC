// src/components/TeamMemberCard.tsx
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group bg-crisp-white rounded-3xl shadow-md hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all cursor-pointer"
  >
    {/* Image */}
    <div className="w-44 h-44 rounded-full overflow-hidden mb-6 shadow-inner">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Name */}
    <h3 className="text-2xl font-semibold md:text-3xl font-playfair text-deep-onyx mb-1">
      {member.name}
    </h3>

    {/* Position */}
    <p className="text-lg md:text-xl font-medium text-muted-silver mb-4">
      {member.position}
    </p>

    {/* Social Icons */}
    <div className="flex space-x-4 mt-2">
      {member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E4405F] hover:scale-110 transition-transform"
        >
          <Instagram className="w-7 h-7" />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077B5] hover:scale-110 transition-transform"
        >
          <Linkedin className="w-7 h-7" />
        </a>
      )}
    </div>
  </motion.div>
);

export default TeamMemberCard;
