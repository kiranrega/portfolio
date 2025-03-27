
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-foreground/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-primary">Kiran</span> Kumar Rega
            </h2>
            <p className="text-sm text-foreground/60 mt-1">
              Junior Software Engineer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/60">
              &copy; {year} Kiran Kumar Rega. All Rights Reserved.
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              Made with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
