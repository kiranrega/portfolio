
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Earth } from 'lucide-react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Custom error boundary for Three.js rendering issues
const ErrorFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-primary">
      <Earth size={100} />
    </div>
  );
};

const GlobeObject = ({ isHovered }: { isHovered: boolean }) => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  // Rotate the globe
  useFrame((_, delta) => {
    if (globeRef.current) {
      // Always rotate slowly, but slower when hovered
      const rotationSpeed = isHovered ? 0.1 : 0.3;
      globeRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1} 
      />
      <Sphere ref={globeRef} args={[1, 32, 32]}>
        <meshStandardMaterial 
          color={isHovered ? "#14b8a6" : "#6366f1"}
          wireframe 
        />
      </Sphere>
      <Sphere args={[1, 32, 32]} scale={1.1}>
        <meshStandardMaterial 
          color={isHovered ? "#6366f1" : "#14b8a6"}
          opacity={0.1}
          transparent
          wireframe={false}
        />
      </Sphere>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={!isHovered} 
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const InteractiveGlobe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();

  // Error handler for WebGL context issues
  useEffect(() => {
    const handleError = () => {
      console.log("WebGL context error detected, falling back to simplified view");
      setHasError(true);
    };
    
    window.addEventListener('webglcontextlost', handleError);
    return () => {
      window.removeEventListener('webglcontextlost', handleError);
    };
  }, []);

  // Mobile or error fallback
  if (isMobile || hasError) {
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
      <Canvas shadows dpr={[1, 2]} onError={() => setHasError(true)}>
        <Suspense fallback={<ErrorFallback />}>
          <GlobeObject isHovered={isHovered} />
        </Suspense>
      </Canvas>
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
