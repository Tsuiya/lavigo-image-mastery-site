import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excelência 4K",
      description: "Padrão cinematográfico como mínimo aceitável que entrega resultados mensuráveis e impacto visual incomparável."
    },
    {
      icon: Zap,
      title: "Exclusividade Premium",
      description: "Atendimento customizado para apenas 10-15 marcas por mês, garantindo foco total e execução imperial."
    },
    {
      icon: Award,
      title: "Transparência Total",
      description: "Metas claras, relatórios detalhados e entrega pontual que constrói confiança e resultados duradouros."
    },
    {
      icon: Users,
      title: "Liderança de Mercado",
      description: "Guiamos clientes ao topo do ranking de engajamento e vendas com estratégias que dominam nichos."
    }
  ];

  const stats = [
    { number: "72h", label: "Tempo de Execução" },
    { number: "15", label: "Marcas por Mês" },
    { number: "4K", label: "Padrão Mínimo" },
    { number: "100%", label: "Satisfação Garantida" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-secondary">Lavigo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma agência de marketing premium que combina criatividade, estratégia e tecnologia 
            para ajudar marcas a dominarem sua imagem no mercado.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm px-3 py-1 mb-4">
                Nossa Filosofia
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Transformamos visões em realidade visual
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span><strong>Não seguimos tendências</strong> — nós as decretamos com padrão 4K imperial</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span><strong>Atendimento exclusivo</strong> para 10-15 marcas por mês com foco total</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span><strong>Execução garantida</strong> em até 72 horas com diagnóstico gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span><strong>PMEs dominando mercados</strong> com estratégias incrivelmente precisas</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button variant="premium" size="lg">
                Conheça Nossa Equipe
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
              Nossos <span className="text-secondary">Valores</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam cada projeto e relacionamento que construímos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos ajudar sua marca a alcançar novos patamares.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;