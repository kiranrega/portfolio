
import { Card } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 mt-8">
          <div className="md:col-span-3">
            <Card className={cn(
              "p-6 md:p-8 glass-card opacity-0",
              inView ? "animate-fade-in" : ""
            )}>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I'm a junior software engineer specializing in frontend development, 
                  currently working at IntouchCX. I bring a unique perspective to software 
                  engineering with an educational background in Mineral Processing.
                </p>
                <p>
                  My journey into tech started after completing my Master's degree, 
                  where I discovered my passion for creating user-friendly web applications. 
                  I've since focused on mastering modern frontend technologies like React.js, 
                  TypeScript, and React Native.
                </p>
                <p>
                  I'm passionate about creating responsive, accessible web applications that deliver 
                  exceptional user experiences. I enjoy working in collaborative environments 
                  where I can contribute to innovative solutions while continuously expanding my skillset.
                </p>
                <p>
                  When I'm not coding, I'm usually exploring new technologies, contributing to open-source 
                  projects, or expanding my knowledge through online courses and certifications.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className={cn(
              "p-6 md:p-8 glass-card opacity-0",
              inView ? "animate-fade-in" : ""
            )} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Master of Technology (M.Tech.)</h4>
                  <p className="text-sm text-foreground/70">Mineral Processing</p>
                  <p className="text-sm text-foreground/70">Vijayanagara Sri Krishnadevaraya University, Bellary</p>
                  <p className="text-sm text-foreground/70">2013-2016</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Bachelor of Science (B.Sc.)</h4>
                  <p className="text-sm text-foreground/70">Mineral Beneficiation</p>
                  <p className="text-sm text-foreground/70">Andhra University</p>
                  <p className="text-sm text-foreground/70">2010-2013</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
