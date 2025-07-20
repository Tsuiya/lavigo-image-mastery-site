import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Padrão 4K como mínimo aceitável. Cada quadro milimetricamente calibrado para erguer estruturas de poder."
    },
    {
      icon: Users,
      title: "Exclusividade", 
      description: "Atendimento customizado; número limitado de clientes. Apenas 10-15 marcas por mês recebem nosso foco total."
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Metas claras, relatórios detalhados e entrega dentro do prazo. Processos forjados para resultados imperiais."
    },
    {
      icon: Zap,
      title: "Liderança",
      description: "Guiamos nossos clientes ao topo do ranking de engajamento e vendas. Você lidera, nós executamos o poder."
    }
  ];

  const stats = [
    { number: "10-15", label: "Marcas/Mês" },
    { number: "4K", label: "Padrão Mínimo" },
    { number: "72h", label: "Execução" },
    { number: "360°", label: "Estratégia" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nós somos a <span className="text-secondary">Lavigo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            Em cada quadro 4K, em cada cor milimetricamente calibrada, erguemos estruturas de poder e autoridade. 
            Nosso compromisso é com a perfeição absoluta: um padrão mínimo que desafia o ordinário e converte espectadores em súditos leais.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa jornada nasce da convicção de que toda PME merece comandar seu mercado com imagens magneticamente 
            poderosas e estratégias incrivelmente precisas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm px-3 py-1 mb-4">
                Manifesto Imperial
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Nós não seguimos tendências — nós as decretamos
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Atendemos com exclusividade apenas 10 a 15 marcas por mês, garantindo foco total, 
                atendimento sob medida e processos forjados para resultados imperiais. 
                Aqui, cada projeto é um reinado, cada entrega, um decreto visual que impõe respeito.
              </p>
              <p className="text-lg leading-relaxed">
                Colocamos à disposição o cetro tecnológico da Lavigo: diagnóstico gratuito, 
                estratégia 360° e execução em até 72 horas. Convidamos você a assumir o trono 
                da sua história e ser soberano de sua própria narrativa.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="premium" size="lg">
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-secondary">Valores Imperiais</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os pilares de poder que estabelecem nossa autoridade máxima em marketing visual e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-border/50">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para assumir o comando?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Seja soberano de sua própria narrativa. Na Lavigo, você lidera, nós executamos o poder 
              com diagnóstico gratuito e estratégia 360°.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;