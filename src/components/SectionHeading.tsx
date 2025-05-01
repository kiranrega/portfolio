
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ number, title, description }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
        <span className="text-primary font-mono text-2xl mr-2">{number}.</span>
        <span>{title}</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-blue rounded-full"></div>
      {description && (
        <p className="text-foreground/60 mt-6 max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
