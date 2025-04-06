
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
  >
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] group"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-md">
          <img 
            src={logo} 
            alt={issuer} 
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lightest-slate group-hover:text-primary transition-colors duration-200">{title}</h3>
          <p className="text-slate text-sm">{issuer}</p>
        </div>
        <ExternalLink className="text-slate w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
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
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading certifications">Certifications</h2>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
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
    </section>
  );
};

export default Certifications;
