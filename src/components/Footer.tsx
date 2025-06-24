// src/components/Footer.tsx
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-executive-navy border-t border-muted-silver/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo-dark.png" // Changed logo source to logo-dark.png
                alt="RGIT MUNSOC Logo" 
                className="h-12 w-12"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold font-playfair text-crisp-white"
              >
                RGIT MUNSOC
              </motion.div>
            </div>
            <p className="text-crisp-white/80 text-sm leading-relaxed">
              Where Ideas Meet Diplomacy. The Model United Nations Society of Rajiv Gandhi Institute of Technology, fostering diplomatic excellence and global awareness.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cool-light-blue">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-crisp-white/80">
                <Mail size={16} />
                <span className="text-sm">rgitmunsoc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-crisp-white/80">
                <MapPin size={16} />
                <span className="text-sm">Rajiv Gandhi Institute of Technology, Versova, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cool-light-blue">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/rgitmunsoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#A9A9A9' }}
                className="text-crisp-white/80 hover:text-muted-silver transition-colors flex items-center space-x-2" // Added flex for alignment
              >
                <Instagram size={24} />
                <span className="text-sm">Instagram</span> {/* Added Instagram handle name */}
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/rgitmunsoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#A9A9A9' }}
                className="text-crisp-white/80 hover:text-muted-silver transition-colors flex items-center space-x-2" // Added flex for alignment
              >
                <Linkedin size={24} />
                <span className="text-sm">LinkedIn</span> {/* Added LinkedIn handle name */}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-8 pt-8 border-t border-muted-silver/20">
          <h3 className="text-lg font-semibold text-cool-light-blue mb-4">Find Us</h3>
          <div className="relative h-64 rounded-lg overflow-hidden border border-muted-silver/30">
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
        <div className="mt-8 pt-8 border-t border-muted-silver/20 text-center">
          <p className="text-crisp-white/60 text-sm">
            © 2024 RGIT MUNSOC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;