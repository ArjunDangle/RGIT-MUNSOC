
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Instagram, Linkedin, MapPin, Phone, Clock, Globe } from 'lucide-react';

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
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10"
          >
            <Globe size={120} className="text-crisp-white" />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Mail className="w-16 h-16 text-crisp-white mx-auto mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-crisp-white mb-6 font-playfair"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-crisp-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Get in touch with RGIT MUNSOC for inquiries, collaborations, or to join our diplomatic community. We're here to help you embark on your Model UN journey.
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
            className="bg-crisp-white rounded-lg p-8 shadow-lg border border-muted-silver/20"
          >
            <h2 className="text-3xl font-bold text-dark-grey mb-8 font-playfair">Send us a Message</h2>
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
              <h2 className="text-3xl font-bold text-dark-grey mb-8 font-playfair">Get in Touch</h2>
              <p className="text-muted-silver text-lg leading-relaxed mb-8">
                Whether you're interested in joining our society, participating in RGITMUN, or exploring partnership opportunities, we'd love to hear from you. Connect with us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 bg-crisp-white rounded-lg border border-muted-silver/20 hover:border-cool-light-blue/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="bg-cool-light-blue/10 p-3 rounded-full">
                  <Mail className="text-cool-light-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-grey">Email</h3>
                  <p className="text-muted-silver">rgitmunsoc@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 bg-crisp-white rounded-lg border border-muted-silver/20 hover:border-cool-light-blue/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="bg-cool-light-blue/10 p-3 rounded-full">
                  <MapPin className="text-cool-light-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-grey">Location</h3>
                  <p className="text-muted-silver">Rajiv Gandhi Institute of Technology, Andheri, Mumbai</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 bg-crisp-white rounded-lg border border-muted-silver/20 hover:border-cool-light-blue/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="bg-cool-light-blue/10 p-3 rounded-full">
                  <Clock className="text-cool-light-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-grey">Office Hours</h3>
                  <p className="text-muted-silver">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-muted-silver/20">
              <h3 className="text-xl font-semibold text-dark-grey mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/rgitmunsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-muted-silver hover:text-cool-light-blue transition-colors p-4 bg-crisp-white rounded-lg border border-muted-silver/20 hover:border-cool-light-blue/50 shadow-sm hover:shadow-md"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/rgitmunsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-muted-silver hover:text-cool-light-blue transition-colors p-4 bg-crisp-white rounded-lg border border-muted-silver/20 hover:border-cool-light-blue/50 shadow-sm hover:shadow-md"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-executive-navy/5 rounded-lg p-6 border border-muted-silver/20">
              <h3 className="text-xl font-semibold text-dark-grey mb-4">Quick Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-silver">Response Time:</span>
                  <span className="text-dark-grey font-medium">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-silver">Best Time to Contact:</span>
                  <span className="text-dark-grey font-medium">Weekdays</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-silver">Languages:</span>
                  <span className="text-dark-grey font-medium">English, Hindi</span>
                </div>
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
          <h2 className="text-3xl font-bold text-dark-grey mb-8 text-center font-playfair">Visit Our Campus</h2>
          <div className="relative h-96 rounded-lg overflow-hidden border border-muted-silver/20 shadow-lg">
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
