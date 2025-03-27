
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold text-foreground tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-primary">Kiran</span> Kumar Rega
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            Experience
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection('certifications')} className="nav-link">
            Certifications
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-1 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed left-0 right-0 top-[72px] bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out md:hidden px-6 border-t",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 space-y-4">
          <button onClick={() => scrollToSection('about')} className="nav-link w-fit">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link w-fit">
            Experience
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link w-fit">
            Skills
          </button>
          <button onClick={() => scrollToSection('certifications')} className="nav-link w-fit">
            Certifications
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link w-fit">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
