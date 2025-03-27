
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useInView } from 'react-intersection-observer';
import { Toaster } from "@/components/ui/sonner";

// Import React Intersection Observer
import { InView } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Toaster position="top-right" />
      
      <main>
        <Hero />
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <About />
            </div>
          )}
        </InView>
        
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <Experience />
            </div>
          )}
        </InView>
        
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <Skills />
            </div>
          )}
        </InView>
        
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <Certifications />
            </div>
          )}
        </InView>
        
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div ref={ref} className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <Contact />
            </div>
          )}
        </InView>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
