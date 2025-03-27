
import { Card } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

interface CertificationProps {
  title: string;
  issuer: string;
  logo: string;
  inView: boolean;
  delay: number;
}

const Certification = ({ title, issuer, logo, inView, delay }: CertificationProps) => (
  <Card className={cn(
    "p-6 glass-card opacity-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
    inView ? "animate-appear" : ""
  )} style={{ animationDelay: `${delay * 0.1}s` }}>
    <div className="flex items-center gap-4">
      <img 
        src={logo} 
        alt={issuer} 
        className="w-12 h-12 rounded object-contain"
      />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-foreground/70">{issuer}</p>
      </div>
    </div>
  </Card>
);

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Frontend Developer (React) Certificate",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA"
    },
    {
      title: "React (Basic) Certificate",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA"
    },
    {
      title: "React Native Certificate",
      issuer: "Meta",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_400_400/company-logo_400_400/0/1636138754252/facebook_logo?e=1748476800&v=beta&t=CPntGMR8LfvjqOAOqfA2ehMdhYYGnELEisT77uB4T7o"
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certifications.map((cert, index) => (
            <Certification
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              logo={cert.logo}
              inView={inView}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
