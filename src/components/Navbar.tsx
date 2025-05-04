import { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const NavItem = ({ 
  label, 
  id, 
  onClick, 
  index = 0, 
  isMobile = false 
}: { 
  label: string; 
  id: string; 
  onClick: () => void;
  index?: number;
  isMobile?: boolean;
}) => {
  return (
    <motion.button 
      key={id}
      initial={isMobile ? false : { opacity: 0, y: -10 }}
      animate={isMobile ? false : { opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.3 }}
      whileHover={{ y: -2 }} 
      onClick={onClick} 
      className="nav-link text-sm"
      aria-label={`Scroll to ${label} section`}
    >
      {label}
    </motion.button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      element.setAttribute('tabindex', '-1');
      element.focus();
    }
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-background/70 backdrop-blur-md border-b border-secondary/30" 
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#" 
          className="text-xl font-medium tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Scroll to top"
        >
          <span className="gradient-text font-display">Kiran</span> <span className="font-light">Kumar</span>
        </motion.a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <NavItem 
              key={item.id} 
              label={item.label} 
              id={item.id} 
              index={index}
              onClick={() => scrollToSection(item.id)} 
            />
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <motion.button 
            ref={mobileMenuButtonRef}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="text-foreground p-1 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        ref={mobileMenuRef}
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn(
          "fixed left-0 right-0 top-[72px] bg-background/95 backdrop-blur-md shadow-sm md:hidden px-6 border-t border-secondary/30 overflow-hidden"
        )}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col py-4 space-y-4">
          {navItems.map((item) => (
            <NavItem 
              key={item.id} 
              label={item.label} 
              id={item.id}
              isMobile
              onClick={() => scrollToSection(item.id)} 
            />
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
