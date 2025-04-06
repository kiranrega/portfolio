
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CertificationProps {
  title: string;
  issuer: string;
  logo: string;
  link: string;
  index: number;
}

const Certification = ({ title, issuer, logo, link, index }: CertificationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block h-full"
    >
      <Card className={cn(
        "p-6 glass-card border-primary/10 transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full",
      )}>
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <img 
              src={logo} 
              alt={issuer} 
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-primary/80">{issuer}</p>
          </div>
        </div>
      </Card>
    </motion.a>
  </motion.div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Frontend Developer (React) Certificate",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA",
      link: "https://www.hackerrank.com"
    },
    {
      title: "React (Basic) Certificate",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA",
      link: "https://www.hackerrank.com"
    },
    {
      title: "React Native Certificate",
      issuer: "Meta",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_400_400/company-logo_400_400/0/1636138754252/facebook_logo?e=1748476800&v=beta&t=CPntGMR8LfvjqOAOqfA2ehMdhYYGnELEisT77uB4T7o",
      link: "https://www.meta.com"
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Professional certificates I've earned
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certifications.map((cert, index) => (
            <Certification
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              logo={cert.logo}
              link={cert.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
