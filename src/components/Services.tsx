import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Palette, TrendingUp, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Fotografia Profissional",
      description: "Capturamos a essência da sua marca com imagens de alta qualidade que contam histórias e conectam com seu público.",
      features: ["Fotografia corporativa", "Ensaios de produto", "Eventos empresariais", "Retratos executivos"]
    },
    {
      icon: Video,
      title: "Produção de Vídeo",
      description: "Criamos conteúdo audiovisual impactante que transmite sua mensagem de forma envolvente e memorável.",
      features: ["Vídeos institucionais", "Comerciais", "Documentários", "Conteúdo para redes sociais"]
    },
    {
      icon: Palette,
      title: "Design Criativo",
      description: "Desenvolvemos identidades visuais consistentes e materials gráficos que fortalecem sua presença no mercado.",
      features: ["Identidade visual", "Design gráfico", "Materiais impressos", "Interfaces digitais"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Estratégico",
      description: "Estratégias de marketing personalizadas que posicionam sua marca como líder no seu segmento.",
      features: ["Consultoria estratégica", "Gestão de redes sociais", "Campanhas publicitárias", "Análise de mercado"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-secondary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em marketing visual e estratégia, 
            combinando criatividade, tecnologia e expertise para resultados excepcionais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:text-secondary transition-colors duration-300">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para dominar sua imagem?
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos elevar sua marca ao próximo nível.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;