
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const socialLinks = [
    { icon: Github, url: "https://github.com/kiranrega", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/kiranrega", label: "LinkedIn" },
    { icon: Mail, url: "mailto:kirankumar.rega@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-3"
          >
            <span className="gradient-text font-display">Kiran</span> Kumar Rega
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/60 max-w-md mx-auto mb-6"
          >
            A passionate Frontend Developer building modern web applications and interfaces
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -5, color: '#FF498B' }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/40 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-foreground/40 text-sm"
          >
            <p className="flex items-center justify-center">
              <span>Designed & Built with</span>
              <Heart size={14} className="mx-1 text-primary" />
              <span>© {year}</span>
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
