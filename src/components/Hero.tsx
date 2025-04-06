
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-32 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <div 
        className={`flex flex-col ${isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}
      >
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-sfmono mb-5"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-lightest-slate mb-4"
        >
          Kiran Kumar Rega.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate mb-6"
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-slate max-w-lg mb-12"
        >
          I'm a frontend developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at 
          <span className="text-primary"> IntouchCX</span>.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            className="px-7 py-6 text-primary border-primary hover:bg-primary/10 font-sfmono text-sm group"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Check out my work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
