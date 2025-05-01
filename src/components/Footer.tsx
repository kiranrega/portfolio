
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

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
            className="mb-6"
          >
            <SocialLinks />
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
