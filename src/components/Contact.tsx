
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading contact">What's Next?</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold text-lightest-slate mb-5">Get In Touch</h2>
        
        <p className="text-slate mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <a href="mailto:kirankumar.rega@gmail.com">
          <Button 
            variant="outline" 
            className="px-8 py-6 text-primary border-primary hover:bg-primary/10 font-sfmono text-sm mx-auto"
          >
            Say Hello
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
