
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 z-0" />
      <div 
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <span className="block">Hi, I'm</span>
            <span className="text-primary block mt-2">Kiran Kumar Rega</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            Junior Software Engineer specializing in frontend development
          </p>
          <div className="opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
            >
              Explore My Work
            </Button>
          </div>
        </div>
        
        <div className="image-rotate hidden md:block opacity-0 animate-slide-in" style={{ animationDelay: '1s' }}>
          <img 
            src="https://media.licdn.com/dms/image/v2/C5603AQE-jLSbYgPr3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643889909683?e=1748476800&v=beta&t=4LevnLOeao5hRhldXhGvB9Sebb5gfMcPhiDftxrTABo" 
            alt="Kiran Kumar Rega" 
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-slide-in-delayed">
        <button 
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center justify-center text-foreground/70 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
