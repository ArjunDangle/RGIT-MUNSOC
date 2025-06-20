
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  instagram: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-diplomatic-blue rounded-lg overflow-hidden border border-charcoal-slate hover:border-regal-gold/50 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-diplomatic-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Social Links Overlay */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-regal-gold text-deep-onyx p-2 rounded-full hover:bg-opacity-90 transition-colors"
          >
            <Linkedin size={16} />
          </motion.a>
          <motion.a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-regal-gold text-deep-onyx p-2 rounded-full hover:bg-opacity-90 transition-colors"
          >
            <Instagram size={16} />
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-crisp-silver mb-2 group-hover:text-regal-gold transition-colors">
          {member.name}
        </h3>
        <p className="text-regal-gold font-medium">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
