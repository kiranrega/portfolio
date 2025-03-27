
import { Card } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          Professional Experience
        </h2>
        
        <div className="space-y-8 mt-8">
          <Card className={cn(
            "p-6 md:p-8 glass-card opacity-0",
            inView ? "animate-appear" : ""
          )}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0 flex justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQEYz4rx86_pSA/company-logo_400_400/company-logo_400_400/0/1719868373797/intouchcx_logo?e=1748476800&v=beta&t=07lelKMc7eBX5m3fUhr-u994dqne5PbtdKpr3qjIFCI" 
                  alt="IntouchCX" 
                  className="company-logo"
                />
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Junior Software Engineer</h3>
                  <div className="flex items-center text-foreground/70 text-sm mt-1 space-x-2">
                    <span>IntouchCX</span>
                    <span>•</span>
                    <span>May 2024 - Present</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-4">
                  <li>Building responsive and accessible web applications using React.js and TypeScript</li>
                  <li>Collaborating with cross-functional teams to implement innovative frontend solutions</li>
                  <li>Contributing to component libraries and reusable design systems</li>
                  <li>Writing clean, maintainable code with a focus on performance optimization</li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className={cn(
            "p-6 md:p-8 glass-card opacity-0",
            inView ? "animate-appear-delay-200" : ""
          )}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0 flex justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQF0ibKMjHAp1A/company-logo_400_400-alternative/company-logo_400_400-alternative/0/1630642915207/extended_web_apptech_llp_logo?e=1748476800&v=beta&t=UkeI4cSC1Ak4pfeV5J5o6P0PvSmoEoTUVdImYpcz_4c"
                  alt="Extended Web AppTech" 
                  className="company-logo"
                />
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <div className="flex items-center text-foreground/70 text-sm mt-1 space-x-2">
                    <span>Extended Web AppTech</span>
                    <span>•</span>
                    <span>March 2022 - September 2023</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-4">
                  <li>Developed and maintained frontend applications using React.js and JavaScript</li>
                  <li>Implemented responsive designs that worked across various devices and screen sizes</li>
                  <li>Collaborated with UI/UX designers to translate visual designs into functioning code</li>
                  <li>Participated in code reviews to ensure quality and share knowledge with the team</li>
                  <li>Gained experience in React Native for cross-platform mobile application development</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
