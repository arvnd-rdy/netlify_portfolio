
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-red-500 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 hover:bg-warm-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 hover:bg-warm-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:arvind@example.com"
              className="p-4 bg-gray-800 hover:bg-warm-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Button */}
          <div className="pt-8">
            <Button 
              className="bg-warm-red-600 hover:bg-warm-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Arvind Reddy. Built with passion and precision.
          </p>
          
          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm" 
            className="mt-4 md:mt-0 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-3"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
