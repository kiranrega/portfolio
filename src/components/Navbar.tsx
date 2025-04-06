
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="text-xl font-bold text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          K
        </motion.a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.button 
            whileHover={{ y: -2 }} 
            onClick={() => scrollToSection('about')} 
            className="nav-link"
          >
            <span className="nav-number">01.</span> About
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }} 
            onClick={() => scrollToSection('experience')} 
            className="nav-link"
          >
            <span className="nav-number">02.</span> Experience
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }} 
            onClick={() => scrollToSection('skills')} 
            className="nav-link"
          >
            <span className="nav-number">03.</span> Skills
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }} 
            onClick={() => scrollToSection('certifications')} 
            className="nav-link"
          >
            <span className="nav-number">04.</span> Certifications
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }} 
            onClick={() => scrollToSection('contact')} 
            className="nav-link"
          >
            <span className="nav-number">05.</span> Contact
          </motion.button>
          
          <Button 
            variant="outline" 
            className="font-sfmono text-primary border-primary hover:bg-primary/10"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="text-primary p-1 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn(
          "fixed left-0 right-0 top-[72px] bg-background/95 backdrop-blur-md shadow-md md:hidden px-6 border-t overflow-hidden z-50"
        )}
      >
        <nav className="flex flex-col py-6 space-y-4 items-center">
          <motion.button 
            whileHover={{ x: 4 }} 
            onClick={() => scrollToSection('about')} 
            className="nav-link w-full text-center py-3"
          >
            <span className="nav-number">01.</span> About
          </motion.button>
          <motion.button 
            whileHover={{ x: 4 }} 
            onClick={() => scrollToSection('experience')} 
            className="nav-link w-full text-center py-3"
          >
            <span className="nav-number">02.</span> Experience
          </motion.button>
          <motion.button 
            whileHover={{ x: 4 }} 
            onClick={() => scrollToSection('skills')} 
            className="nav-link w-full text-center py-3"
          >
            <span className="nav-number">03.</span> Skills
          </motion.button>
          <motion.button 
            whileHover={{ x: 4 }} 
            onClick={() => scrollToSection('certifications')} 
            className="nav-link w-full text-center py-3"
          >
            <span className="nav-number">04.</span> Certifications
          </motion.button>
          <motion.button 
            whileHover={{ x: 4 }} 
            onClick={() => scrollToSection('contact')} 
            className="nav-link w-full text-center py-3"
          >
            <span className="nav-number">05.</span> Contact
          </motion.button>
          
          <Button 
            variant="outline" 
            className="font-sfmono text-primary border-primary hover:bg-primary/10 mt-4 w-full"
          >
            Resume
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
