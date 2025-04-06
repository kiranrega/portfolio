
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gradient-to-t from-background to-background/90 py-10 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-primary">Kiran</span> Kumar Rega
          </h2>
          
          <p className="text-foreground/60 max-w-md mx-auto mb-6">
            A passionate Frontend Developer building modern web applications and interfaces
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:kirankumar.rega@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
          
          <div className="text-foreground/60 text-sm">
            <p>
              Copyright © {year} Kiran Kumar Rega
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
