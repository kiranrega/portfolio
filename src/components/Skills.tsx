
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  icon: string;
  level: number;
  index: number;
}

const Skill = ({ name, icon, level, index }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-300";
    if (level >= 75) return "from-primary to-purple-400";
    if (level >= 60) return "from-accent-blue to-blue-400";
    return "from-yellow-500 to-orange-400";
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="glass-card p-5 h-full flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/30 group">
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110" 
        />
        <h3 className="font-medium text-center">{name}</h3>
        {/* <div className="w-full mt-3 bg-muted rounded-full h-1.5 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-full rounded-full bg-gradient-to-r ${getColor(level)}`}
          />
        </div> */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-muted px-3 py-1 rounded-md text-xs font-mono shadow-lg border border-white/10"
          >
            {/* {level}% Proficiency */}
            {name}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Array<{ name: string; icon: string; level: number }> }) => (
  <div className="mb-12">
    <h3 className="text-xl font-bold mb-6 gradient-text inline-block">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <Skill 
          key={skill.name} 
          name={skill.name} 
          icon={skill.icon} 
          level={skill.level} 
          index={index}
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 75 }
  ];
  
  const toolsSkills = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: 70 },
    { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", level: 85 },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 90 },
    { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", level: 65 }
  ];
  
  const methodologySkills = [
    // { name: "Agile", icon: "https://cdn.simpleicons.org/agile/6366F1", level: 80 },
    // { name: "Scrum", icon: "https://cdn.simpleicons.org/scrumalliance/FF498B", level: 75 },
    // { name: "TDD", icon: "https://cdn.simpleicons.org/testinglibrary/E33332", level: 70 },
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman/FF6C37", level: 80 },
    { name: "Responsive Design", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: 90 }
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary font-mono text-2xl mr-2">03.</span>
            <span>Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-full"></div>
          <p className="text-foreground/60 mt-6 max-w-2xl">
            I've worked with a variety of technologies in the web development world.
            Here's a quick overview of my technical skills and proficiency levels:
          </p>
        </motion.div>
        
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        <SkillCategory title="Methodologies" skills={methodologySkills} />
      </div>
    </section>
  );
};

export default Skills;
