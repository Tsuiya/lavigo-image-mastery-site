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
      info: "+55 (11) 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      action: "#"
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
            Assuma o <span className="text-secondary">Comando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Convidamos você a assumir o trono da sua história. Seja soberano de sua própria narrativa. 
            Na Lavigo, você lidera, nós executamos o poder com diagnóstico gratuito e estratégia 360°.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Diagnóstico Imperial Gratuito
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

              <Button variant="premium" className="w-full" size="lg">
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
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group cursor-pointer">
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
                Diagnóstico Imperial Gratuito
              </h3>
              <p className="text-foreground/80 mb-6">
                Análise completa do seu reino digital + estratégia 360° personalizada. 
                Execução em 72 horas para resultados imperiais.
              </p>
              <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Solicitar Diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;