
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

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
        }
      });
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <Toaster position="top-right" />
      
      {/* Side social links */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 left-5 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center">
          <SocialLinks orientation="vertical" />
          <div className="w-px h-24 bg-foreground/20 mt-6"></div>
        </div>
      </motion.div>
      
      {/* Side email */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 right-5 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ y: -5, color: '#FF498B' }}
            href="mailto:kirankumar.rega@gmail.com" 
            className="text-foreground/40 hover:text-primary transition-all duration-200 font-mono tracking-wide text-xs"
            style={{ writingMode: 'vertical-rl' }}
          >
            kirankumar.rega@gmail.com
          </motion.a>
          <div className="w-px h-24 bg-foreground/20 mt-6"></div>
        </div>
      </motion.div>
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
