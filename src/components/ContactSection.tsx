
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              LET'S<br />CONNECT
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
              Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
            </p>

            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 mb-12"
            >
              GET IN TOUCH →
            </Button>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                CONNECT
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GITHUB</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LINKEDIN</span>
                </a>
                <a 
                  href="mailto:arvind@example.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>EMAIL</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 ARVIND REDDY. BUILT WITH PASSION AND PRECISION.</p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wide"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
