
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface JobData {
  company: string;
  title: string;
  range: string;
  url: string;
  responsibilities: string[];
}

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  const jobs: JobData[] = [
    {
      company: "IntouchCX",
      title: "Junior Software Engineer",
      range: "May 2024 - Present",
      url: "https://intouchcx.com",
      responsibilities: [
        "Building responsive and accessible web applications using React.js and TypeScript",
        "Collaborating with cross-functional teams to implement innovative frontend solutions",
        "Contributing to component libraries and reusable design systems",
        "Writing clean, maintainable code with a focus on performance optimization"
      ]
    },
    {
      company: "Extended Web AppTech",
      title: "Software Engineer",
      range: "March 2022 - September 2023",
      url: "https://extendedwebapptech.com",
      responsibilities: [
        "Developed and maintained frontend applications using React.js and JavaScript",
        "Implemented responsive designs that worked across various devices and screen sizes",
        "Collaborated with UI/UX designers to translate visual designs into functioning code",
        "Participated in code reviews to ensure quality and share knowledge with the team",
        "Gained experience in React Native for cross-platform mobile application development"
      ]
    }
  ];

  const activeJob = jobs[activeTabIndex];

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading experience">Where I've Worked</h2>
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-32">
          <div className="experience-tabs">
            {jobs.map((job, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTabIndex(idx)}
                className={cn(
                  "tab-button",
                  activeTabIndex === idx ? "active" : ""
                )}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[320px]"
          >
            <h3 className="text-xl text-lightest-slate mb-1">
              <span className="font-semibold">{activeJob.title}</span>
              <span className="text-primary"> @ </span>
              <a 
                href={activeJob.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold link-hover"
              >
                {activeJob.company}
              </a>
            </h3>
            
            <p className="font-sfmono text-sm text-slate mb-6">{activeJob.range}</p>
            
            <ul className="numbered-list text-slate">
              {activeJob.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
