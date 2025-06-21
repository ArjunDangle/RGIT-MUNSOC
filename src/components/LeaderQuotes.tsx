
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LeaderQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const quotes = [
    {
      text: "The United Nations is our one great hope for a peaceful and free world.",
      author: "Ralph Bunche",
      title: "Nobel Peace Prize Winner, UN Mediator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Peace cannot be kept by force; it can only be achieved by understanding.",
      author: "Albert Einstein",
      title: "Theoretical Physicist & Peace Activist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.",
      author: "Nelson Mandela",
      title: "Former President of South Africa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "We must learn to live together as brothers or perish together as fools.",
      author: "Martin Luther King Jr.",
      title: "Civil Rights Leader & Nobel Laureate",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
      author: "Albert Einstein",
      title: "On Global Responsibility",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      title: "On Education & Change",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-pure-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-charcoal-black mb-6">
            Voices of Leaders
          </h2>
          <div className="w-24 h-1 bg-un-blue mx-auto mb-8"></div>
          <p className="text-xl font-inter text-charcoal-black/70">
            Wisdom from those who shaped our world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-navy-blue rounded-lg p-8 border border-un-blue/20 hover:border-un-blue/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={quote.image}
                  alt={quote.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-un-blue/30"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold font-inter text-pure-white">{quote.author}</h4>
                  <p className="text-sm font-inter text-un-blue">{quote.title}</p>
                </div>
              </div>
              
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                className="text-pure-white/90 font-inter text-lg leading-relaxed italic"
              >
                "{quote.text}"
              </motion.blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderQuotes;
