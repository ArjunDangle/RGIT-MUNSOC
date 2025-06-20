
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
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
            className="text-5xl md:text-6xl font-bold text-regal-gold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-crisp-silver/80 leading-relaxed"
          >
            Get in touch with RGIT MUNSOC for inquiries, collaborations, or to join our diplomatic community
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-regal-gold mb-8">Send us a Message</h2>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-regal-gold mb-8">Get in Touch</h2>
              <p className="text-crisp-silver/80 text-lg leading-relaxed mb-8">
                Whether you're interested in joining our society, participating in RGITMUN, or exploring partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-diplomatic-blue rounded-lg border border-charcoal-slate hover:border-regal-gold/50 transition-all duration-300"
              >
                <Mail className="text-regal-gold" size={24} />
                <div>
                  <h3 className="font-semibold text-crisp-silver">Email</h3>
                  <p className="text-crisp-silver/80">rgitmunsoc@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-diplomatic-blue rounded-lg border border-charcoal-slate hover:border-regal-gold/50 transition-all duration-300"
              >
                <MapPin className="text-regal-gold" size={24} />
                <div>
                  <h3 className="font-semibold text-crisp-silver">Location</h3>
                  <p className="text-crisp-silver/80">Rajiv Gandhi Institute of Technology, Andheri, Mumbai</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-charcoal-slate">
              <h3 className="text-xl font-semibold text-regal-gold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/rgitmunsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#C89F5B' }}
                  className="text-crisp-silver/80 hover:text-regal-gold transition-colors p-3 bg-diplomatic-blue rounded-lg border border-charcoal-slate hover:border-regal-gold/50"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/rgitmunsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#C89F5B' }}
                  className="text-crisp-silver/80 hover:text-regal-gold transition-colors p-3 bg-diplomatic-blue rounded-lg border border-charcoal-slate hover:border-regal-gold/50"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-regal-gold mb-8 text-center">Visit Us</h2>
          <div className="relative h-96 rounded-lg overflow-hidden border border-charcoal-slate">
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
