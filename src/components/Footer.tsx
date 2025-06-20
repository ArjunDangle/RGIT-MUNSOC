
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-diplomatic-blue border-t border-charcoal-slate">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/224c2136-69c0-494e-8499-61bb6bb623b7.png"
                alt="RGIT MUNSOC Logo"
                className="h-12 w-12"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-crisp-silver to-diplomatic-blue bg-clip-text text-transparent font-playfair"
              >
                RGIT MUNSOC
              </motion.div>
            </div>
            <p className="text-crisp-silver/80 text-sm leading-relaxed">
              Where Ideas Meet Diplomacy. The Model United Nations Society of Rajiv Gandhi Institute of Technology, fostering diplomatic excellence and global awareness.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-regal-gold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-crisp-silver/80">
                <Mail size={16} />
                <span className="text-sm">rgitmunsoc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-crisp-silver/80">
                <MapPin size={16} />
                <span className="text-sm">RGIT, Andheri, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-regal-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/rgitmunsoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#C89F5B' }}
                className="text-crisp-silver/80 hover:text-regal-gold transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/rgitmunsoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#C89F5B' }}
                className="text-crisp-silver/80 hover:text-regal-gold transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-8 pt-8 border-t border-charcoal-slate">
          <h3 className="text-lg font-semibold text-regal-gold mb-4">Find Us</h3>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8447446945436!2d72.8325329!3d19.1181717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29c6f2d87b24e!2sRajiv%20Gandhi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-charcoal-slate text-center">
          <p className="text-crisp-silver/60 text-sm">
            © 2024 RGIT MUNSOC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
