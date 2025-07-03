
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
      image: "/assets/leadersquotes/Ralph_Bunche.jpg"
    },
    {
      text: "Peace cannot be kept by force; it can only be achieved by understanding.",
      author: "Albert Einstein",
      title: "Theoretical Physicist & Peace Activist",
      image: "/assets/leadersquotes/Albert_Einstein.jpeg"
    },
    {
      text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.",
      author: "Nelson Mandela",
      title: "Former President of South Africa",
      image: "/assets/leadersquotes/Nelson_Mandela.jpeg"
    },
    {
      text: "We must learn to live together as brothers or perish together as fools.",
      author: "Martin Luther King Jr.",
      title: "Civil Rights Leader & Nobel Laureate",
      image: "/assets/leadersquotes/Martin_Luther_King_Jr.jpg"
    },
    {
      text: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
      author: "Albert Einstein",
      title: "On Global Responsibility",
      image: "/assets/leadersquotes/Albert_Einstein.jpeg"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      title: "On Education & Change",
      image: "/assets/leadersquotes/Nelson_Mandela.jpeg"
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-charcoal-grey mb-6">
            Voices of Leaders
          </h2>
          <div className="w-24 h-1 bg-sky-blue mx-auto mb-8"></div>
          <p className="text-xl font-inter text-charcoal-grey/70">
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
              className="bg-deep-navy rounded-lg p-8 border border-muted-gold/30 hover:border-muted-gold/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={quote.image}
                  alt={quote.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-sky-blue/30"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold font-inter text-pure-white">{quote.author}</h4>
                  <p className="text-sm font-inter text-sky-blue">{quote.title}</p>
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
