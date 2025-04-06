
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink } from 'lucide-react';
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
        'from-accent-teal/10 to-transparent',
        'from-primary/10 to-transparent',
        'from-accent-indigo/10 to-transparent'
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
    
    // Track mouse position for subtle parallax effect
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
            className="text-primary font-mono mb-5 text-sm"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
          >
            <span className="block">Kiran Kumar Rega</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-xl md:text-2xl font-light text-foreground/70 mb-6"
          >
            I craft digital experiences
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/80 mb-8 h-16"
          >
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React.js Specialist",
                  "UI/UX Enthusiast",
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
            I'm a frontend developer specializing in creating elegant, responsive digital experiences. 
            Currently focused on building user-centric web applications at IntouchCX.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10"
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
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md text-base group"
            >
              <span className="mr-2">View my work</span>
              <ExternalLink size={16} className="inline-block transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="hidden md:block"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
          }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal via-primary to-accent-indigo rounded-lg opacity-30 blur-md"></div>
            <div className="relative bg-background rounded-lg p-1">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQE-jLSbYgPr3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643889909683?e=1748476800&v=beta&t=4LevnLOeao5hRhldXhGvB9Sebb5gfMcPhiDftxrTABo" 
                alt="Kiran Kumar Rega" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.button 
          animate={{ y: [0, 8, 0] }}
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
          <span className="text-xs mb-2 font-mono">Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
