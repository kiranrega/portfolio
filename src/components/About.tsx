
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading about">About Me</h2>
      </motion.div>
      
      <div className="grid md:grid-cols-5 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <div className="space-y-4 text-slate">
            <p>
              Hello! My name is Kiran and I enjoy creating things that live on the internet. 
              My interest in web development started after completing my Master's degree in
              Mineral Processing, where I discovered my passion for creating user-friendly web applications.
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              <span className="text-primary"> IntouchCX</span>, where I specialize in frontend development.
              My main focus these days is building responsive and accessible web applications.
            </p>
            
            <p>
              I bring a unique perspective to software engineering with my educational 
              background in Mineral Processing. My journey into tech started as a curiosity
              and has evolved into a fulfilling career.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 numbered-list mt-5">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React Native</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="relative group mx-auto max-w-xs">
            <div className="absolute -inset-4 rounded bg-primary/20 opacity-75 blur-sm transition duration-300 group-hover:-inset-1 group-hover:opacity-100 group-hover:blur-md"></div>
            <div className="relative">
              <div className="w-full h-full border-2 border-primary absolute top-5 left-5 -z-10 rounded"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQE-jLSbYgPr3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643889909683?e=1748476800&v=beta&t=4LevnLOeao5hRhldXhGvB9Sebb5gfMcPhiDftxrTABo" 
                alt="Kiran Kumar Rega" 
                className="rounded grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
