// src/components/TeamMemberCard.tsx
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className="flex flex-col items-center text-center"
  >
    {/* Image Card */}
    <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-md transition-all">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text and Socials */}
    <div className="mt-4">
      <h3 className="text-2xl font-semibold font-playfair text-deep-onyx mb-1">
        {member.name}
      </h3>
      <p className="text-lg font-medium text-muted-silver mb-3">
        {member.position}
      </p>
      <div className="flex justify-center space-x-4">
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] transition-transform duration-200 hover:scale-110"
          >
            <Instagram className="w-6 h-6" />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] transition-transform duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default TeamMemberCard;
