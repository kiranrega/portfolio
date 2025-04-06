
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create animated background elements
    const createBackgroundElements = () => {
      const animatedBg = document.createElement('div');
      animatedBg.className = 'animated-bg';
      
      // Add 3 gradient blobs
      const colors = [
        'from-primary/30 to-transparent',
        'from-accent/30 to-transparent',
        'from-accent-blue/30 to-transparent'
      ];
      
      for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.className = `animated-bg-element bg-gradient-radial ${colors[i]}`;
        
        // Random sizes and positions
        const size = Math.random() * 300 + 200;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        animatedBg.appendChild(element);
      }
      
      if (heroRef.current) {
        heroRef.current.appendChild(animatedBg);
      }
    };
    
    createBackgroundElements();
    
    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center ${isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-primary font-mono mb-5"
          >
            Hi there, my name is
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2"
          >
            <span className="block">Kiran Kumar Rega</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/60 mb-6"
          >
            I build things for the web
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 mb-8 h-16"
          >
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
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-foreground/60 max-w-lg mb-8"
          >
            I'm a frontend developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building responsive web applications at IntouchCX.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-primary/10 p-3 rounded-full text-foreground/60 hover:text-primary transition-colors border border-white/5"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-primary/10 p-3 rounded-full text-foreground/60 hover:text-primary transition-colors border border-white/5"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kirankumar.rega@gmail.com"
              className="bg-muted hover:bg-primary/10 p-3 rounded-full text-foreground/60 hover:text-primary transition-colors border border-white/5"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10"
          >
            <div className="gradient-border inline-block">
              <div className="p-[1px]">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="btn-hover-effect bg-background hover:bg-background/80 text-foreground border-0 px-8 py-6 text-lg group"
                >
                  <span className="mr-2">Check out my work</span>
                  <ExternalLink size={16} className="inline-block transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="hidden md:block"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          }}
        >
          <div className="tilt-effect relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQE-jLSbYgPr3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643889909683?e=1748476800&v=beta&t=4LevnLOeao5hRhldXhGvB9Sebb5gfMcPhiDftxrTABo" 
                alt="Kiran Kumar Rega" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative tilt-content border-2 border-white/5"
              />
            </div>
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
          className="flex flex-col items-center justify-center text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2 font-mono">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
