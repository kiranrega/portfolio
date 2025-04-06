
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-background/90 to-background/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Know Who <span className="text-primary">I Am</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A passionate Frontend Developer from India
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Card className="p-6 md:p-8 glass-card border-primary/10">
              <div className="space-y-4 text-foreground/90">
                <p className="text-lg">
                  Hi Everyone, I'm <span className="text-primary font-bold">Kiran Kumar Rega</span> from <span className="text-primary font-bold">Hyderabad, India</span>.
                  I'm a junior software engineer specializing in frontend development, 
                  currently working at IntouchCX.
                </p>
                <p>
                  I bring a unique perspective to software engineering with an educational 
                  background in Mineral Processing. My journey into tech started after completing my 
                  Master's degree, where I discovered my passion for creating user-friendly web applications.
                </p>
                <p>
                  Apart from coding, some other activities that I love to do:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li className="pl-2">Playing Games</li>
                  <li className="pl-2">Reading Tech Articles</li>
                  <li className="pl-2">Exploring New Technologies</li>
                  <li className="pl-2">Contributing to Open-Source Projects</li>
                </ul>
                
                <p className="font-bold text-primary mt-4">
                  "Strive to build things that make a difference!"
                </p>

                <div className="mt-8">
                  <Button className="flex items-center gap-2" variant="default">
                    <FileText size={18} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="p-6 md:p-8 glass-card border-primary/10 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
              <div className="space-y-6">
                <div className="space-y-2 border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="font-bold text-lg">Master of Technology (M.Tech.)</h4>
                  <p className="text-primary/80">Mineral Processing</p>
                  <p className="text-foreground/70">Vijayanagara Sri Krishnadevaraya University, Bellary</p>
                  <p className="text-foreground/70">2013-2016</p>
                </div>
                
                <div className="space-y-2 border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="font-bold text-lg">Bachelor of Science (B.Sc.)</h4>
                  <p className="text-primary/80">Mineral Beneficiation</p>
                  <p className="text-foreground/70">Andhra University</p>
                  <p className="text-foreground/70">2010-2013</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
