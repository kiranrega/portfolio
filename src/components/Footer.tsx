
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <footer className="py-10 border-t border-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-medium mb-3"
          >
            <span className="gradient-text">Kiran Kumar Rega</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/60 hover:text-primary transition-colors p-2"
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/40 text-sm"
          >
            <p>© {year} • Designed & Built with purpose</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
