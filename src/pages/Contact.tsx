// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Instagram, Linkedin, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
    {/*Hero */}

    <section id="contact-hero" className="relative pt-10 pb-1 bg-white px-4 text-center">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl md:text-6xl font-bold text-executive-navy mb-4"
  >
    Get in Touch
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
  >
    We’re here to help and answer any questions you may have.
  </motion.p>
</section>  




  <section id="contact-hero" className="relative pt-10 10pb-20 bg-white px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
    
    {/* Diplomacy Image */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-2/5 flex justify-center"
    >
      <img src="/assets/diplomacy.png" alt="Diplomacy" className="w-3/4 md:w-full h-auto" />
    </motion.div>

    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-executive-navy text-left">
        Contact Us
      </h2>
      <ContactForm />
    </motion.div>

  </div>
</section>

    {/* Contact Cards */}
<section id="contact_form" className="max-w-7xl mx-auto px-4 py-20">
  <div className="flex flex-wrap justify-center gap-6">
    {[
      { icon: Mail, text: 'rgitmun@example.com', color: 'text-cool-light-blue', useClass: true },
      { icon: Instagram, text: '@rgitmunsoc', color: '#E4405F', useClass: false }, // OG Instagram color
      { icon: Linkedin, text: 'linkedin.com/rgitmun', color: '#0077B5', useClass: false }, // OG LinkedIn color
    ].map((item, index) => (
      <motion.div
        key={item.text}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-center space-x-4 bg-white rounded-2xl shadow-xl p-6 w-full md:w-auto min-w-[250px] hover:scale-105 transition-transform cursor-pointer"
      >
        {item.useClass ? (
          <item.icon className={`w-8 h-8 ${item.color}`} />
        ) : (
          <item.icon className="w-8 h-8" color={item.color} />
        )}
        <span className="text-lg font-semibold break-all">{item.text}</span>
      </motion.div>
    ))}
  </div>
</section>



      {/* Contact Form */}
      
          
          
        
      
    </motion.div>
  );
};

export default Contact;
