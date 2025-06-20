
import { motion } from 'framer-motion';
import { Download, Users, FileText } from 'lucide-react';

interface Committee {
  name: string;
  abbreviation: string;
  agenda: string;
  description: string;
  backgroundGuide: string;
}

interface CommitteeCardProps {
  committee: Committee;
  index: number;
}

const CommitteeCard = ({ committee, index }: CommitteeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-diplomatic-blue rounded-lg p-8 border border-charcoal-slate hover:border-regal-gold/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="bg-regal-gold text-deep-onyx px-4 py-2 rounded-lg font-bold text-lg">
          {committee.abbreviation}
        </div>
        <Users className="text-regal-gold" size={32} />
      </div>

      <h3 className="text-2xl font-bold text-crisp-silver mb-4">
        {committee.name}
      </h3>

      <div className="mb-6">
        <h4 className="text-regal-gold font-semibold mb-2 flex items-center">
          <FileText size={16} className="mr-2" />
          Agenda
        </h4>
        <p className="text-crisp-silver/90 font-medium">
          {committee.agenda}
        </p>
      </div>

      <p className="text-crisp-silver/80 leading-relaxed mb-6">
        {committee.description}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 text-regal-gold border border-regal-gold px-4 py-2 rounded-lg hover:bg-regal-gold hover:text-deep-onyx transition-all duration-300"
      >
        <Download size={16} />
        <span>Background Guide</span>
      </motion.button>
    </motion.div>
  );
};

export default CommitteeCard;
