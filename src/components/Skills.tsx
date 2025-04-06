
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Skill component with proficiency indicator
const Skill = ({ name, proficiency }: { name: string; proficiency: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-4 glass-card border-primary/20 h-full flex flex-col justify-between">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full" 
            style={{ width: `${proficiency}%` }}
          />
        </div>
        {isHovered && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground/90 text-background px-2 py-1 rounded text-xs whitespace-nowrap">
            {proficiency}% Proficiency
          </div>
        )}
      </Card>
    </motion.div>
  );
};

const SkillSection = ({ title, skills, inView }: { title: string; skills: Array<{name: string; proficiency: number}>; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-10"
  >
    <h2 className="text-2xl font-bold mb-6 text-primary">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <Skill 
          key={index} 
          name={skill.name} 
          proficiency={skill.proficiency} 
        />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Simulate the inView calculation after component mount
    setIsInView(true);
  }, []);

  const frontendSkills = [
    { name: "React.js", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "HTML5", proficiency: 95 },
    { name: "CSS3", proficiency: 85 },
    { name: "React Native", proficiency: 75 }
  ];
  
  const toolsSkills = [
    { name: "Git", proficiency: 85 },
    { name: "Jest", proficiency: 70 },
    { name: "npm", proficiency: 85 },
    { name: "Visual Studio Code", proficiency: 90 },
    { name: "Chrome DevTools", proficiency: 80 },
    { name: "Webpack", proficiency: 65 }
  ];
  
  const methodologySkills = [
    { name: "Agile", proficiency: 80 },
    { name: "Scrum", proficiency: 75 },
    { name: "Test-Driven Development", proficiency: 70 },
    { name: "Component-Based Architecture", proficiency: 85 },
    { name: "RESTful APIs", proficiency: 80 },
    { name: "Responsive Design", proficiency: 90 }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-background to-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Skillset</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels
          </p>
        </motion.div>
        
        <SkillSection title="Frontend Development" skills={frontendSkills} inView={isInView} />
        <SkillSection title="Tools & Platforms" skills={toolsSkills} inView={isInView} />
        <SkillSection title="Methodologies" skills={methodologySkills} inView={isInView} />
      </div>
    </section>
  );
};

export default Skills;
