import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import FloatingSkillBadges from "@/components/FloatingSkillBadges";

// Lazy load components
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div 
    className="flex items-center justify-center min-h-screen"
    role="status"
    aria-label="Loading content"
  >
    <div 
      className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
      aria-hidden="true"
    ></div>
  </div>
);

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          // Focus the target element for keyboard navigation
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="min-h-screen bg-background text-foreground relative"
      role="main"
    >
      <Navbar />
      <Toaster position="top-right" />
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-background focus:text-foreground focus:p-4"
      >
        Skip to main content
      </a>
      
      {/* Side social links */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 left-5 z-40 hidden lg:block"
        role="complementary"
        aria-label="Social media links"
      >
        <div className="flex flex-col items-center">
          <SocialLinks orientation="vertical" />
          <div 
            className="w-px h-24 bg-foreground/20 mt-6"
            aria-hidden="true"
          ></div>
        </div>
      </motion.div>
      
      {/* Side email */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 right-5 z-40 hidden lg:block"
        role="complementary"
        aria-label="Contact information"
      >
        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ y: -5, color: '#FF498B' }}
            href="mailto:kirankumar.rega@gmail.com" 
            className="text-foreground/40 hover:text-primary transition-all duration-200 font-mono tracking-wide text-xs"
            style={{ writingMode: 'vertical-rl' }}
            aria-label="Send email to kirankumar.rega@gmail.com"
          >
            kirankumar.rega@gmail.com
          </motion.a>
          <div 
            className="w-px h-24 bg-foreground/20 mt-6"
            aria-hidden="true"
          ></div>
        </div>
      </motion.div>
      
      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
