
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const InteractiveGlobe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const globeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Characters to display on the globe (code-like characters)
  const codeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>/?';
  
  // Create lines of characters for the sphere
  const createCodeLines = () => {
    // Number of lines based on device
    const lineCount = isMobile ? 10 : 20;
    const linesArray = [];
    
    for (let i = 0; i < lineCount; i++) {
      // Characters per line, randomized slightly
      const charCount = isMobile ? 10 + Math.floor(Math.random() * 5) : 20 + Math.floor(Math.random() * 10);
      let line = '';
      
      for (let j = 0; j < charCount; j++) {
        line += codeChars[Math.floor(Math.random() * codeChars.length)];
      }
      
      linesArray.push(line);
    }
    
    return linesArray;
  };
  
  // Handle mouse movement for rotation
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return;
      
      const { left, top, width, height } = globeRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / width) * 20;
      const rotateX = ((e.clientY - centerY) / height) * -20;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Generate code lines
  const codeLines = createCodeLines();

  // Show simpler version for mobile devices
  if (isMobile) {
    return (
      <div className="relative h-64 w-64 mx-auto overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-500/10"
          animate={{ 
            rotate: 360,
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* Mobile version code lines */}
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-500/80 text-xs whitespace-nowrap"
              style={{
                top: `${(i / codeLines.length) * 100}%`,
                left: `${Math.sin((i / codeLines.length) * Math.PI) * 20 + 40}%`,
                transform: `rotate(${i * 10}deg)`,
                opacity: 0.7
              }}
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              {line}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Center avatar placeholder */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-blue-100">
            <img 
              src="/lovable-uploads/7f65685b-ca80-4718-987d-c58a096078d0.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"; // Fallback image
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={globeRef}
      className="relative h-96 w-96 mx-auto overflow-visible perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      {/* Main globe container with 3D rotation effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y + (isHovered ? 0 : 360)
        }}
        transition={{
          rotateY: {
            duration: isHovered ? 0.5 : 30,
            ease: isHovered ? "easeOut" : "linear",
            repeat: isHovered ? 0 : Infinity
          },
          rotateX: {
            duration: 0.5,
            ease: "easeOut"
          }
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* Code character lines arranged in a sphere */}
        {Array.from({ length: 20 }).map((_, lineIndex) => (
          <div
            key={lineIndex}
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              transform: `rotateY(${(lineIndex / 20) * 360}deg)`
            }}
          >
            {Array.from({ length: 8 }).map((_, rowIndex) => {
              // Calculate position on the sphere
              const offset = lineIndex % 2 === 0 ? 0 : 10;
              const angle = ((rowIndex + offset) / 8) * 180 - 90;
              const radius = 150; // Globe radius in pixels
              const y = Math.sin(angle * (Math.PI / 180)) * radius;
              const scaleX = Math.cos(angle * (Math.PI / 180));
              
              // Generate random string of code characters for this segment
              const chars = Array.from({ length: 15 }, () => 
                codeChars[Math.floor(Math.random() * codeChars.length)]
              ).join('');
              
              return (
                <motion.div
                  key={rowIndex}
                  className="absolute top-1/2 left-0 w-full text-center text-blue-500/80 text-xs whitespace-nowrap"
                  style={{
                    transform: `translateY(${y}px) rotateX(${-angle}deg) scaleX(${scaleX})`,
                    opacity: Math.abs(angle) > 70 ? 0.3 : 0.8,
                  }}
                  animate={{ 
                    opacity: [
                      Math.abs(angle) > 70 ? 0.2 : 0.6,
                      Math.abs(angle) > 70 ? 0.4 : 0.9,
                      Math.abs(angle) > 70 ? 0.2 : 0.6
                    ] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (lineIndex + rowIndex) * 0.1
                  }}
                >
                  {chars}
                </motion.div>
              );
            })}
          </div>
        ))}
        
        {/* Center avatar */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-blue-100">
            <img 
              src="/lovable-uploads/7f65685b-ca80-4718-987d-c58a096078d0.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"; // Fallback image
              }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Subtle glow effect behind the globe */}
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
        className="absolute inset-0 -z-10 rounded-full bg-blue-500/10 blur-2xl"
      />
      
      {/* Optional text below the avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12 z-20 text-center whitespace-nowrap">
        <motion.p 
          className="font-mono text-sm font-medium text-foreground"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Coding Challenge
        </motion.p>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
