
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h3 className="text-lightest-slate text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    "JavaScript (ES6+)", 
    "TypeScript", 
    "React", 
    "React Native", 
    "HTML5", 
    "CSS3", 
    "Tailwind CSS", 
    "SASS", 
    "Redux"
  ];
  
  const toolsSkills = [
    "Git", 
    "GitHub", 
    "VS Code", 
    "Webpack", 
    "npm", 
    "Jest", 
    "Chrome DevTools", 
    "Figma", 
    "Postman"
  ];
  
  const methodologySkills = [
    "Responsive Design", 
    "Agile", 
    "Scrum", 
    "TDD", 
    "RESTful APIs", 
    "GraphQL", 
    "Accessibility", 
    "Performance Optimization",
    "Component-Based Architecture"
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading skills">Skills</h2>
      </motion.div>
      
      <div className="text-slate">
        <p className="mb-10">
          I've worked with a variety of technologies in the web development world.
          Here's a non-exhaustive list of the technologies I'm most familiar with:
        </p>
        
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        <SkillCategory title="Methodologies" skills={methodologySkills} />
      </div>
    </section>
  );
};

export default Skills;
