
import { Card } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const SkillCategory = ({ 
  title, 
  skills, 
  inView, 
  delay 
}: { 
  title: string; 
  skills: string[];
  inView: boolean;
  delay: string;
}) => (
  <Card className={cn(
    "p-6 glass-card opacity-0",
    inView ? "animate-fade-in" : ""
  )} style={{ animationDelay: delay }}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills = [
    "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "React Native", "Redux", "Material UI", "Responsive Design"
  ];
  
  const toolsSkills = [
    "Git", "Jest", "npm", "Visual Studio Code", "Chrome DevTools", "Webpack"
  ];
  
  const methodologySkills = [
    "Agile", "Scrum", "Test-Driven Development", "Component-Based Architecture", "RESTful APIs"
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            inView={inView} 
            delay="0s"
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            skills={toolsSkills} 
            inView={inView} 
            delay="0.2s"
          />
          
          <SkillCategory 
            title="Methodologies" 
            skills={methodologySkills} 
            inView={inView} 
            delay="0.4s"
          />
        </div>
        
        <div className="mt-16">
          <Card className={cn(
            "p-6 md:p-8 glass-card opacity-0",
            inView ? "animate-fade-in" : ""
          )} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-4">Technical Approach</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I approach frontend development with a focus on creating clean, maintainable, and 
                performant code. I prioritize component reusability, accessibility, and responsive design 
                in all projects I work on.
              </p>
              <p>
                My experience includes building complex user interfaces, implementing state management 
                solutions, and working with REST APIs to create dynamic web applications. I'm comfortable 
                working in collaborative environments and adapting to different project requirements.
              </p>
              <p>
                I stay updated with the latest frontend technologies and best practices through continuous 
                learning and professional development. This allows me to bring modern solutions to every project.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
