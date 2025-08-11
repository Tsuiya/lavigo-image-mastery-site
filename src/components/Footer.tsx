import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Fotografia Profissional",
    "Produção de Vídeo",
    "Design Criativo",
    "Marketing Estratégico"
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/agencialavigo/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/ag%C3%AAncialavigo" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577625736397" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/a0c887bf-26a0-462a-91cf-23e08d182df5.png" 
              alt="Lavigo" 
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed">
              Agência de marketing premium especializada em transformar visões em realidade visual. 
              Domine sua imagem no mercado.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-secondary transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">contato@lavigo.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">+55 (16) 99160-9339</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">Ibitinga, SP</span>
              </div>
            </div>
            
            {/* Mini Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.8!2d-48.831593!3d-21.7577172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf2992cb22b801%3A0x543c7f9d14ec33c0!2sAg%C3%AAncia%20Lavigo!5e0!3m2!1spt!2sbr!4v1735566789123!5m2!1spt!2sbr"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Lavigo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Lavigo. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="/blog" className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm">
                Blog
              </a>
              <a href="/cases" className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm">
                Cases
              </a>
              <a href="/privacidade" className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm">
                Termos de Uso
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-secondary"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Topo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;