import { useState } from 'react';
import { Linkedin, Github, Twitter, Mail, Clock, Globe, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional Network',
      href: '#',
      color: 'text-portfolio-accent'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Code Repository',
      href: '#',
      color: 'text-portfolio-accent'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Tech Thoughts',
      href: '#',
      color: 'text-portfolio-accent'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Direct Contact',
      href: '#',
      color: 'text-portfolio-accent'
    }
  ];

  const quickInfo = [
    {
      icon: Clock,
      text: 'Response time: Within 24 hours'
    },
    {
      icon: Globe,
      text: 'Available for remote collaboration'
    },
    {
      icon: Handshake,
      text: 'Open to consulting opportunities'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-6">Let's Connect</h1>
          <p className="text-2xl text-portfolio-accent mb-4">
            "Let's build the future of data systems together."
          </p>
          <p className="text-lg text-portfolio-text">
            Ready to discuss your next big data challenge or explore collaboration opportunities?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-portfolio-highlight mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-portfolio-highlight">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full mt-2 bg-portfolio-bg border-portfolio-border text-portfolio-highlight placeholder-portfolio-text focus:border-portfolio-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-portfolio-highlight">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full mt-2 bg-portfolio-bg border-portfolio-border text-portfolio-highlight placeholder-portfolio-text focus:border-portfolio-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-portfolio-highlight">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full mt-2 bg-portfolio-bg border-portfolio-border text-portfolio-highlight placeholder-portfolio-text focus:border-portfolio-accent resize-vertical"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-portfolio-bg font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-portfolio-highlight mb-6">Connect</h3>
              
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, title, description, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center space-x-4 p-4 bg-portfolio-bg rounded-lg hover:bg-portfolio-accent/10 transition-colors group"
                  >
                    <Icon className="w-8 h-8 text-portfolio-accent group-hover:text-portfolio-highlight transition-colors" />
                    <div>
                      <div className="text-portfolio-highlight font-medium">{title}</div>
                      <div className="text-portfolio-text text-sm">{description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-portfolio-highlight mb-6">Quick Info</h3>
              
              <div className="space-y-4">
                {quickInfo.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-portfolio-accent flex-shrink-0" />
                    <span className="text-portfolio-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
