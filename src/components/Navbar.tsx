
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="text-xl font-bold text-foreground tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-primary">Kiran</span> Kumar Rega
        </motion.a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('about')} 
            className="nav-link"
          >
            About
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('experience')} 
            className="nav-link"
          >
            Experience
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('skills')} 
            className="nav-link"
          >
            Skills
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('certifications')} 
            className="nav-link"
          >
            Certifications
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('contact')} 
            className="nav-link"
          >
            Contact
          </motion.button>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="text-foreground p-1 rounded-md"
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
          "fixed left-0 right-0 top-[72px] bg-background/95 backdrop-blur-md shadow-md md:hidden px-6 border-t overflow-hidden"
        )}
      >
        <nav className="flex flex-col py-4 space-y-4">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('about')} 
            className="nav-link w-fit"
          >
            About
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('experience')} 
            className="nav-link w-fit"
          >
            Experience
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('skills')} 
            className="nav-link w-fit"
          >
            Skills
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('certifications')} 
            className="nav-link w-fit"
          >
            Certifications
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            onClick={() => scrollToSection('contact')} 
            className="nav-link w-fit"
          >
            Contact
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
