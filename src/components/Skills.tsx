
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
  GitBranch,
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
  skill
}: { 
  skill: SkillItem;
}) => {
  const levelColor = {
    Beginner: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
    Intermediate: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    Experienced: "bg-green-500/20 text-green-600 dark:text-green-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="skill-card group"
    >
      <div className="flex items-center">
        <div className="skill-icon group-hover:bg-primary/20 transition-colors duration-300">
          {skill.icon}
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</h4>
          <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${levelColor[skill.level]}`}>
            {skill.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

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
    { name: "Git", level: "Intermediate", icon: <GitBranch size={20} /> },
    { name: "VS Code", level: "Experienced", icon: <Terminal size={20} /> },
    { name: "Figma", level: "Beginner", icon: <Figma size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center" ref={ref}>
            Professional <span className="text-primary">Skillset</span>
          </h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            These are the technologies I've worked with in my journey as a software developer
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glass-card p-6 overflow-hidden shadow-lg border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                <span className="text-primary">Frontend</span> Development
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {frontendSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </Card>
          
          <Card className="glass-card p-6 overflow-hidden shadow-lg border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                <span className="text-primary">Backend</span> Development
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {backendSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </Card>
          
          <Card className="glass-card p-6 overflow-hidden shadow-lg border-primary/10 hover:border-primary/30 transition-colors duration-300 lg:col-span-1 md:col-span-2 lg:transform lg:translate-y-0 md:transform md:translate-y-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                <span className="text-primary">Tools</span> & Platforms
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {toolsSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
