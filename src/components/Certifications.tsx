
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
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="block h-full"
    >
      <div className="minimalist-card flex flex-col h-full group">
        <div className="flex items-start gap-4">
          <div className="bg-background p-3 rounded-md flex-shrink-0">
            <img 
              src={logo} 
              alt={issuer} 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-base group-hover:text-primary transition-colors">{title}</h3>
              <ExternalLink size={14} className="text-foreground/40 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-foreground/60 mt-1">{issuer}</p>
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
    <section id="certifications" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-primary mr-2">/</span>
            Certifications
          </h2>
          <p className="text-foreground/60 max-w-2xl">
            Professional certificates earned throughout my journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
