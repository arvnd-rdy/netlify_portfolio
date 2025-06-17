
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ContactSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              LET'S<br />CONNECT
            </h2>
            <p className={`text-gray-600 leading-relaxed max-w-md mb-8 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
            </p>

            <Button 
              className={`bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 mb-12 hover:scale-105 hover:shadow-lg ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              GET IN TOUCH →
            </Button>
          </div>

          <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                CONNECT
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: "GITHUB", href: "https://github.com" },
                  { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
                  { icon: Mail, label: "EMAIL", href: "mailto:arvind@example.com" }
                ].map((item, index) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    target={item.label !== "EMAIL" ? "_blank" : undefined}
                    rel={item.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                    className={`flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <p>© 2025 ARVIND REDDY. BUILT WITH PASSION AND PRECISION.</p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-gray-500 hover:text-gray-900 transition-all duration-300 uppercase tracking-wide hover:scale-105"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
