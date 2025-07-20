import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Palette, TrendingUp, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Comando Visual 4K",
      description: "Padrão 4K como mínimo aceitável. Cada quadro milimetricamente calibrado para erguer estruturas de poder e autoridade visual.",
      features: ["Fotografia imperial de produtos", "Ensaios corporativos de autoridade", "Vídeos institucionais dominantes", "Tratamento em padrão superior"]
    },
    {
      icon: Video,
      title: "Decretos em Movimento",
      description: "Narrativas que convertem espectadores em súditos leais. Do conceito à execução em 72 horas, criamos conteúdo que impõe respeito.",
      features: ["Vídeos que decretam tendências", "Motion graphics imperiais", "Conteúdo para domínio digital", "Edição com precisão cirúrgica"]
    },
    {
      icon: Palette,
      title: "Design de Autoridade",
      description: "Identidades visuais que comandam mercados. Criamos designs magneticamente poderosos que estabelecem liderança visual.",
      features: ["Branding de comando imperial", "Interfaces de dominação digital", "Materiais de autoridade suprema", "Sistemas visuais de poder"]
    },
    {
      icon: TrendingUp,
      title: "Estratégia 360° Imperial",
      description: "Diagnóstico gratuito, estratégia sob medida e execução em 72h. Colocamos o cetro tecnológico à disposição do seu reinado.",
      features: ["Diagnóstico gratuito completo", "Estratégia 360° personalizada", "Tráfego pago para dominação", "Relatórios de performance imperial"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-secondary">Decretos Visuais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Cada projeto é um reinado, cada entrega, um decreto visual que impõe respeito. 
            Atendimento exclusivo para apenas 10-15 marcas por mês, garantindo foco total e resultados imperiais.
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
              Pronto para assumir o trono?
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Seja soberano de sua narrativa. Receba diagnóstico gratuito e estratégia 360° 
              para comandar seu mercado com autoridade imperial.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;