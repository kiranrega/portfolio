
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-8xl font-bold text-primary mb-4 animate-fade-in">404</h1>
        <p className="text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-300"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
