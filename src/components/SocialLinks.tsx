
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  orientation?: "horizontal" | "vertical";
  iconSize?: number;
  className?: string;
}

const SocialLinks = ({ orientation = "horizontal", iconSize = 18, className = "" }: SocialLinksProps) => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/kiranrega", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/kiranrega", label: "LinkedIn" },
    { icon: Mail, url: "mailto:kirankumar.rega@gmail.com", label: "Email" }
  ];
  
  return (
    <div className={`flex items-center ${orientation === "vertical" ? "flex-col" : ""} ${className}`}>
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
          <link.icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
