
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    className="h-full"
  >
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="block h-full"
    >
      <div className="glass-card border border-white/5 hover:border-primary/30 transition-all duration-300 h-full p-6 group">
        <div className="flex items-start gap-4">
          <div className="bg-white/5 p-3 rounded-lg flex-shrink-0">
            <img 
              src={logo} 
              alt={issuer} 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
              <ExternalLink size={16} className="text-foreground/40 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-primary/80 mt-1">{issuer}</p>
          </div>
        </div>
      </div>
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
    <section id="certifications" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary font-mono text-2xl mr-2">04.</span>
            <span>Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-full"></div>
          <p className="text-foreground/60 mt-6 max-w-2xl">
            Professional certificates I've earned throughout my career journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-foreground/60 italic">
            Continuously learning and expanding my knowledge through professional certifications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
