
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Linkedin, Github, Mail, SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-background/70 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-10 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 glass-card border-primary/10 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Me</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[120px] border-primary/20 focus:border-primary"
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <SendHorizontal size={18} />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="p-6 md:p-8 glass-card border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <motion.a 
                  href="mailto:kirankumar.rega@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-primary hover:underline">kirankumar.rega@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/kiranrega"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-primary hover:underline">linkedin.com/in/kiranrega</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/kiranrega"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p
                    className="text-primary hover:underline">github.com/kiranrega</p>
                  </div>
                </motion.a>
              </div>
            </Card>
            
            <motion.div variants={itemVariants}>
              <Card className="p-6 md:p-8 glass-card border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4">Let's Work Together</h3>
                <p className="text-foreground/80">
                  Open for opportunities: Whether it's a project, job opportunity, or just a chat about technology, I'd love to hear from you!
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
