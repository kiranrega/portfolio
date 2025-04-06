
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-background to-background/90">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div 
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center ${isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Hi There!</span>
            <span className="block mt-2">I'm <span className="text-primary">Kiran Kumar Rega</span></span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground/80 mb-8 h-16">
            <Typewriter
              options={{
                strings: [
                  "Junior Software Engineer",
                  "Frontend Developer",
                  "React.js Developer",
                  "React Native Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary p-3 rounded-full text-primary-foreground transition-colors"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary p-3 rounded-full text-primary-foreground transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
          
          <div className="mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
              >
                Explore My Work
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="image-rotate relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75 animate-pulse"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQE-jLSbYgPr3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643889909683?e=1748476800&v=beta&t=4LevnLOeao5hRhldXhGvB9Sebb5gfMcPhiDftxrTABo" 
              alt="Kiran Kumar Rega" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.button 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center justify-center text-foreground/70 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
