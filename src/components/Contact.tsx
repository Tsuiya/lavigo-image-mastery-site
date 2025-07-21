import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@lavigo.com.br",
      action: "mailto:contato@lavigo.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (16) 99160-9339",
      action: "tel:+5516991609339"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Ibitinga, SP",
      action: "https://www.google.com/maps/place/Ag%C3%AAncia+Lavigo/@-21.7577172,-48.831593,21z/data=!4m6!3m5!1s0x94bf2992cb22b801:0x543c7f9d14ec33c0!8m2!3d-21.7576747!4d-48.8316431!16s%2Fg%2F11ydzc5wzy?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Facebook, name: "Facebook", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para dominar sua imagem? Vamos conversar sobre seu próximo projeto 
            e como podemos ajudar sua marca a alcançar novos patamares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Solicite um Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nome</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome completo"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Empresa</Label>
                  <Input 
                    id="company" 
                    placeholder="Nome da empresa"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(11) 99999-9999"
                    className="bg-background/50 border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">Serviço de Interesse</Label>
                <select 
                  id="service"
                  className="w-full p-3 rounded-md bg-background/50 border border-border focus:border-secondary text-foreground"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="fotografia">Fotografia</option>
                  <option value="video">Produção de Vídeo</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="completo">Pacote Completo</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  className="bg-background/50 border-border focus:border-secondary resize-none"
                />
              </div>

              <Button 
                variant="premium" 
                className="w-full" 
                size="lg"
                onClick={() => {
                  // Collect form data
                  const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                  const company = (document.getElementById('company') as HTMLInputElement)?.value || '';
                  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                  const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                  const service = (document.getElementById('service') as HTMLSelectElement)?.value || '';
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                  
                  // Create email body
                  const emailBody = `
Nome: ${name}
Empresa: ${company}
Email: ${email}
Telefone: ${phone}
Serviço de Interesse: ${service}
Mensagem: ${message}
                  `.trim();
                  
                  // Open email client
                  window.open(`mailto:tsuiya.hachiman@gmail.com?subject=Solicitação de Orçamento - Lavigo&body=${encodeURIComponent(emailBody)}`, '_blank');
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(contact.action, "_blank")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                        <contact.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors duration-300 group"
                    >
                      <social.icon className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-gradient-accent rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Consultoria Gratuita
              </h3>
              <p className="text-foreground/80 mb-6">
                Agende uma conversa sem compromisso e descubra como podemos transformar sua marca.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
              >
                Agendar Consultoria
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;