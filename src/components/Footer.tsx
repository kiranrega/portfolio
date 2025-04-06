
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="social-icons md:hidden flex items-center justify-center gap-6 mb-5">
            <a
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="mailto:kirankumar.rega@gmail.com"
              className="text-slate hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-slate text-sm font-sfmono">
            <p>
              Designed & Built by Kiran Kumar Rega
            </p>
            <p className="mt-2 text-xs">
              &copy; {year} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      
      {/* Social icons on the side (desktop only) */}
      <div className="social-side">
        <ul className="flex flex-col items-center m-0 p-0 list-none">
          <li>
            <a
              href="https://github.com/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors block p-2.5 hover:-translate-y-1 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/kiranrega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-colors block p-2.5 hover:-translate-y-1 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:kirankumar.rega@gmail.com"
              className="text-slate hover:text-primary transition-colors block p-2.5 hover:-translate-y-1 transform duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </li>
          <li className="side-line mt-4"></li>
        </ul>
      </div>
      
      {/* Email on the side (desktop only) */}
      <div className="side-element">
        <div className="flex flex-col items-center">
          <a href="mailto:kirankumar.rega@gmail.com" className="side-email">
            kirankumar.rega@gmail.com
          </a>
          <div className="side-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
