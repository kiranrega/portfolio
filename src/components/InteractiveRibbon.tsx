
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const InteractiveRibbon = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setPosition({
          x: Math.sin(Date.now() * 0.001) * 15,
          y: Math.cos(Date.now() * 0.001) * 15
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ribbonRef.current) return;
    
    const rect = ribbonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    
    setPosition({ x: x * 20, y: y * 20 });
  };

  const handleClick = () => {
    setIsClicked(true);
    
    // Reset after animation completes
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    clickTimeoutRef.current = setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div
      ref={ribbonRef}
      className="absolute -right-5 top-5 md:top-10 z-10 rotate-12 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <motion.div
        animate={{
          rotate: isHovering ? [0, -5, 5, 0] : 0,
          scale: isHovering ? 1.1 : 1,
          x: position.x,
          y: position.y
        }}
        transition={{
          rotate: {
            duration: 0.5,
            repeat: isHovering ? Infinity : 0,
            repeatType: "reverse"
          },
          scale: { duration: 0.3 }
        }}
        className="relative"
      >
        {/* Sparkles animation when clicked */}
        {isClicked && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                  animate={{ 
                    x: Math.sin(i / 4 * Math.PI * 2) * 40, 
                    y: Math.cos(i / 4 * Math.PI * 2) * 40,
                    opacity: 0,
                    scale: 1
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
        
        <motion.div
          className="ribbon bg-gradient-to-r from-accent-indigo to-primary text-white py-2 px-8 rounded-lg shadow-lg 
                    font-bold tracking-wide transform -rotate-45 origin-top-left text-sm md:text-base relative overflow-hidden"
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Available for hire!
          </span>
          
          {/* Shimmering effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />
        </motion.div>
        
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-2 bg-gradient-to-r from-accent-teal/30 to-accent-indigo/30 blur-md rounded-lg -z-10"
        />
        
        {/* Additional glowing accent */}
        <motion.div
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
            opacity: isHovering ? [0.4, 0.7, 0.4] : 0.4
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -inset-1 bg-primary/20 blur-xl rounded-full -z-20"
        />
      </motion.div>
    </div>
  );
};

export default InteractiveRibbon;
