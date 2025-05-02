
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>();
  
  useEffect(() => {
    const colors = ['#14B8A6', '#6366F1', '#8B5CF6'];
    const particleCount = 25;
    
    const createParticles = () => {
      if (!containerRef.current) return [];
      
      const particles: Particle[] = [];
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      return particles;
    };
    
    const updateParticles = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      particlesRef.current = particlesRef.current.map(particle => {
        let { x, y, speedX, speedY, size, color } = particle;
        
        x += speedX;
        y += speedY;
        
        if (x < 0 || x > width) speedX *= -1;
        if (y < 0 || y > height) speedY *= -1;
        
        return { x, y, size, speedX, speedY, color };
      });
      
      renderParticles();
      requestRef.current = requestAnimationFrame(updateParticles);
    };
    
    const renderParticles = () => {
      if (!containerRef.current) return;
      
      // Clear existing particles
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      
      // Render new particles
      particlesRef.current.forEach(particle => {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.left = `${particle.x}px`;
        dot.style.top = `${particle.y}px`;
        dot.style.width = `${particle.size}px`;
        dot.style.height = `${particle.size}px`;
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = particle.color;
        dot.style.opacity = '0.5';
        containerRef.current?.appendChild(dot);
      });
    };
    
    particlesRef.current = createParticles();
    renderParticles();
    requestRef.current = requestAnimationFrame(updateParticles);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
};

export default ParticleBackground;
