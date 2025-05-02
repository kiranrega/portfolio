
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Earth, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const InteractiveGlobe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  // Show simpler version for mobile devices
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 w-64 mx-auto mt-8"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Earth size={100} className="text-primary" />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 rounded-full bg-primary/10 blur-xl"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative h-96 w-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive CSS Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className={`relative w-64 h-64 rounded-full ${isHovered ? 'bg-accent-teal' : 'bg-primary'}`}
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: [0, 360],
          }}
          transition={{
            rotate: { 
              duration: isHovered ? 60 : 30, 
              ease: "linear", 
              repeat: Infinity 
            },
            scale: { duration: 0.5 }
          }}
        >
          {/* Globe grid lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`horizontal-${i}`}
              className="absolute left-0 w-full border-t border-white/20"
              style={{ 
                top: `${(100 / 5) * i}%`,
                transform: `translateY(-50%) rotateX(${i * 15}deg)`
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`vertical-${i}`}
              className="absolute top-0 h-full border-l border-white/20"
              style={{ 
                left: `${(100 / 12) * i}%`,
                transform: `translateX(-50%) rotateY(${i * 15}deg)`
              }}
            />
          ))}
          
          {/* Globe outer glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-accent-teal/10 blur-xl" />
          
          {/* Overlaid SVG icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe 
              size={isHovered ? 80 : 70} 
              className={`${isHovered ? 'text-white' : 'text-white/80'} transition-all duration-300`}
              strokeWidth={1.2}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Accent glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl"
      />
      
      {/* Particles around the globe */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-accent-indigo"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4
          }}
          animate={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </motion.div>
  );
};

export default InteractiveGlobe;
