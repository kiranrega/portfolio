
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveRibbon = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ribbonRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ribbonRef}
      className="absolute -right-5 top-5 md:top-10 z-10 rotate-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
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
        <div className="ribbon bg-gradient-to-r from-accent-indigo to-primary text-white py-2 px-8 rounded-lg shadow-lg 
                      font-bold tracking-wide transform -rotate-45 origin-top-left text-sm md:text-base">
          <span className="block">Available for hire!</span>
        </div>
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
      </motion.div>
    </div>
  );
};

export default InteractiveRibbon;
