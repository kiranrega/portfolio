
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gradient-to-t from-background to-background/90 py-10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-3">
            <span className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Kiran</span> Kumar Rega
          </h2>
          
          <p className="text-foreground/70 max-w-md mx-auto mb-6">
            A passionate Frontend Developer building modern web applications and interfaces
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:shadow-lg hover:shadow-primary/20"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:kirankumar.rega@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail size={20} />
            </motion.a>
          </div>
          
          <div className="text-foreground/50 text-sm">
            <p className="hover:text-primary/70 transition-colors">
              Copyright © {year} <span className="text-primary/80">Kiran Kumar Rega</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
