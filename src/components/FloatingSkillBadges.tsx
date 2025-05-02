
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const FloatingSkillBadges = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Make skills visible after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: '#06B6D4' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' }
  ];

  return (
    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ 
              delay: index * 0.15, 
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center cursor-pointer"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 + index * 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <AspectRatio ratio={1/1} className="w-8 h-8">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </AspectRatio>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-sm">{skill.name}</span>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingSkillBadges;
