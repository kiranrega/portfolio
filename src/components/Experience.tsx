
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

interface JobDetails {
  position: string;
  company: string;
  duration: string;
  logoUrl: string;
  responsibilities: string[];
  companyUrl: string;
}

const ExperienceCard = ({ 
  details,
  isActive,
  index 
}: { 
  details: JobDetails;
  isActive: boolean;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    className={`absolute top-0 left-0 w-full transition-all ${isActive ? 'visible' : 'invisible'}`}
  >
    <Card className="p-6 md:p-8 glass-card hover:border-primary/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 flex justify-center">
          <motion.a 
            href={details.companyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
            whileHover={{ y: -5 }}
          >
            <div className="relative w-16 h-16 overflow-hidden rounded-lg shadow-lg border border-white/10 bg-white bg-opacity-5 backdrop-blur-sm flex items-center justify-center">
              <img 
                src={details.logoUrl} 
                alt={details.company} 
                className="w-full h-full object-contain p-2"
              />
            </div>
          </motion.a>
        </div>
        <div className="flex-grow space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold gradient-text">{details.position}</h3>
            <motion.a 
              whileHover={{ y: -3, color: '#FF498B' }} 
              href={details.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary"
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>
          
          <div className="flex items-center text-foreground/70 text-sm space-x-2">
            <Briefcase size={16} className="text-primary" />
            <span className="font-semibold">{details.company}</span>
            <span>•</span>
            <Calendar size={16} className="text-primary" />
            <span>{details.duration}</span>
          </div>
          
          <ul className="space-y-2 text-foreground/70 mt-4">
            {details.responsibilities.map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-start"
              >
                <span className="text-primary mr-2 mt-1.5">▹</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences: JobDetails[] = [
    {
      position: "Junior Software Engineer",
      company: "IntouchCX",
      companyUrl: "https://intouchcx.com",
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
      companyUrl: "https://extendedwebapptech.com",
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
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary font-mono text-2xl mr-2">02.</span>
            <span>Where I've Worked</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-48 flex-shrink-0"
          >
            <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-muted">
              {experiences.map((exp, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-4 text-left font-mono text-sm transition-all hover:bg-muted hover:text-primary
                   ${activeTab === index 
                    ? 'text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-muted' 
                    : 'text-foreground/60 border-b-2 md:border-b-0 md:border-l-2 border-transparent'}`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-grow relative"
            style={{ minHeight: '300px' }}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                details={exp} 
                isActive={activeTab === index}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
