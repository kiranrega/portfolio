
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary font-mono text-2xl mr-2">01.</span>
            <span>About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Card className="p-6 md:p-8 glass-card border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4 text-foreground/80">
                <p className="text-lg leading-relaxed">
                  Hello! I'm <span className="text-primary font-medium">Kiran Kumar Rega</span>, a frontend developer with a passion for creating engaging user experiences. I'm based in <span className="text-primary font-medium">Hyderabad, India</span> and currently working at IntouchCX as a Junior Software Engineer.
                </p>
                <p className="leading-relaxed">
                  My journey into tech is somewhat unique, as I started with an educational 
                  background in <span className="italic">Mineral Processing</span>. After completing my 
                  Master's degree, I discovered my passion for building digital products and pivoted 
                  my career toward software engineering.
                </p>
                <p className="leading-relaxed">
                  My main focus these days is building accessible, inclusive products and digital experiences 
                  at IntouchCX for a variety of clients. I particularly enjoy creating fluid, responsive interfaces 
                  that provide exceptional user experiences across all devices.
                </p>
                <p className="leading-relaxed">
                  Outside of coding, I enjoy:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Playing Games",
                    "Reading Tech Articles",
                    "Exploring New Technologies",
                    "Contributing to Open-Source Projects"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-primary mr-2">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="font-medium text-primary mt-4 italic"
                >
                  "Strive to build things that make a difference!"
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <div className="gradient-border inline-block">
                    <div className="p-[1px]">
                      <Button className="flex items-center gap-2 btn-hover-effect bg-background hover:bg-background/80 text-foreground border-0" variant="default">
                        <FileText size={18} />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </motion.div>
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
            <Card className="p-6 md:p-8 glass-card border-white/5 hover:border-primary/20 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">Education</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>
                
                {[
                  {
                    degree: "Master of Technology (M.Tech.)",
                    field: "Mineral Processing",
                    institution: "Vijayanagara Sri Krishnadevaraya University, Bellary",
                    years: "2013-2016"
                  },
                  {
                    degree: "Bachelor of Science (B.Sc.)",
                    field: "Mineral Beneficiation",
                    institution: "Andhra University",
                    years: "2010-2013"
                  }
                ].map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary z-10"></div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-primary">{edu.field}</p>
                      <p className="text-foreground/60">{edu.institution}</p>
                      <p className="text-foreground/50 font-mono text-sm">{edu.years}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
