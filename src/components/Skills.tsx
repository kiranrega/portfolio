
import { Card } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Code2, 
  FileJson, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  CodeXml,
  Coffee,
  Git,
  Terminal,
  Figma,
  Box
} from "lucide-react";

// Define a type for skill items
type SkillItem = {
  name: string;
  level: "Beginner" | "Intermediate" | "Experienced";
  icon: React.ReactNode;
};

// Define a type for skill categories
type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const SkillCard = ({ 
  skill,
  delay 
}: { 
  skill: SkillItem;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex items-center gap-3 mb-6"
    >
      <div className="p-2 rounded-full bg-primary/10 text-primary">
        {skill.icon}
      </div>
      <div>
        <h4 className="text-lg font-medium">{skill.name}</h4>
        <p className="text-sm text-muted-foreground">{skill.level}</p>
      </div>
    </motion.div>
  );
};

const SkillCategoryCard = ({ 
  category, 
  inView, 
  delay 
}: { 
  category: SkillCategory; 
  inView: boolean;
  delay: string;
}) => (
  <Card 
    className={cn(
      "p-6 glass-card opacity-0 relative overflow-hidden",
      inView ? "animate-fade-in" : ""
    )} 
    style={{ animationDelay: delay }}
  >
    <motion.h3 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold mb-8 text-primary"
    >
      {category.title}
    </motion.h3>
    
    <div className="grid grid-cols-1 gap-2">
      {category.skills.map((skill, index) => (
        <SkillCard 
          key={skill.name} 
          skill={skill} 
          delay={index * 0.1}
        />
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills: SkillItem[] = [
    { name: "HTML", level: "Experienced", icon: <Globe size={20} /> },
    { name: "CSS", level: "Intermediate", icon: <CodeXml size={20} /> },
    { name: "JavaScript", level: "Intermediate", icon: <FileJson size={20} /> },
    { name: "Bootstrap", level: "Beginner", icon: <Box size={20} /> },
    { name: "React.js", level: "Beginner", icon: <Code2 size={20} /> },
  ];
  
  const backendSkills: SkillItem[] = [
    { name: "Spring Boot", level: "Beginner", icon: <Coffee size={20} /> },
    { name: "MySQL", level: "Intermediate", icon: <Database size={20} /> },
    { name: "PHP", level: "Intermediate", icon: <Server size={20} /> },
    { name: "Java", level: "Intermediate", icon: <Cpu size={20} /> },
  ];
  
  const toolsSkills: SkillItem[] = [
    { name: "Git", level: "Intermediate", icon: <Git size={20} /> },
    { name: "VS Code", level: "Experienced", icon: <Terminal size={20} /> },
    { name: "Figma", level: "Beginner", icon: <Figma size={20} /> },
  ];

  const skillCategories: SkillCategory[] = [
    { title: "Frontend Development", skills: frontendSkills },
    { title: "Backend Development", skills: backendSkills },
    { title: "Tools & Platforms", skills: toolsSkills },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-background/50 dark:bg-background/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              inView={inView}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
