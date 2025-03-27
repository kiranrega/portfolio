
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="section-heading" ref={ref}>
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <Card className={cn(
            "p-6 md:p-8 glass-card opacity-0",
            inView ? "animate-fade-in" : ""
          )}>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
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
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className={cn(
              "p-6 md:p-8 glass-card opacity-0",
              inView ? "animate-fade-in" : ""
            )} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:contact@kirankumarrega.com" 
                      className="text-sm text-primary hover:underline"
                    >
                      contact@kirankumarrega.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/kirankumarrega" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      linkedin.com/in/kirankumarrega
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/kirankumarrega" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      github.com/kirankumarrega
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className={cn(
              "p-6 md:p-8 glass-card opacity-0",
              inView ? "animate-fade-in" : ""
            )} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-foreground/80">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out if you want to connect!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
