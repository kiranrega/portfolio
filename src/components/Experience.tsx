
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceCard = ({ 
  position, 
  company, 
  duration, 
  logoUrl, 
  responsibilities, 
  index 
}: { 
  position: string; 
  company: string; 
  duration: string; 
  logoUrl: string; 
  responsibilities: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <Card className="p-6 md:p-8 glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-16 h-16 overflow-hidden rounded-lg shadow-lg border border-primary/10">
            <img 
              src={logoUrl} 
              alt={company} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-grow space-y-3">
          <h3 className="text-2xl font-bold text-primary">{position}</h3>
          <div className="flex items-center text-foreground/80 text-sm space-x-2">
            <Briefcase size={16} className="text-primary/80" />
            <span className="font-semibold">{company}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
          
          <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-4 mt-4">
            {responsibilities.map((item, i) => (
              <li key={i} className="pl-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      position: "Junior Software Engineer",
      company: "IntouchCX",
      duration: "May 2024 - Present",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQEYz4rx86_pSA/company-logo_400_400/company-logo_400_400/0/1719868373797/intouchcx_logo?e=1748476800&v=beta&t=07lelKMc7eBX5m3fUhr-u994dqne5PbtdKpr3qjIFCI",
      responsibilities: [
        "Building responsive and accessible web applications using React.js and TypeScript",
        "Collaborating with cross-functional teams to implement innovative frontend solutions",
        "Contributing to component libraries and reusable design systems",
        "Writing clean, maintainable code with a focus on performance optimization"
      ]
    },
    {
      position: "Software Engineer",
      company: "Extended Web AppTech",
      duration: "March 2022 - September 2023",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQF0ibKMjHAp1A/company-logo_400_400-alternative/company-logo_400_400-alternative/0/1630642915207/extended_web_apptech_llp_logo?e=1748476800&v=beta&t=UkeI4cSC1Ak4pfeV5J5o6P0PvSmoEoTUVdImYpcz_4c",
      responsibilities: [
        "Developed and maintained frontend applications using React.js and JavaScript",
        "Implemented responsive designs that worked across various devices and screen sizes",
        "Collaborated with UI/UX designers to translate visual designs into functioning code",
        "Participated in code reviews to ensure quality and share knowledge with the team",
        "Gained experience in React Native for cross-platform mobile application development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-background/80 to-secondary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My work experience as a software engineer
          </p>
        </motion.div>
        
        <div className="mt-16">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              position={exp.position}
              company={exp.company}
              duration={exp.duration}
              logoUrl={exp.logoUrl}
              responsibilities={exp.responsibilities}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
