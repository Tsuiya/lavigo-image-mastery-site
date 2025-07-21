import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ArrowLeft, Target, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Marketing = () => {
  const portfolioMarketing = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      title: "Análise de Dados",
      description: "Dashboard com métricas imperiais"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      title: "Estratégia Digital",
      description: "Campanhas que dominam mercados"
    },
    {
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop",
      title: "Gestão de Redes",
      description: "Presença que conquista súditos"
    },
    {
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      title: "Consultoria Premium",
      description: "Estratégias sob medida"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
      title: "ROI Imperial",
      description: "Resultados que impressionam"
    },
    {
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop",
      title: "Tráfego Pago",
      description: "Campanhas que convertem"
    }
  ];

  const services = [
    {
      title: "Consultoria Estratégica Imperial",
      description: "Diagnóstico gratuito e estratégias que dominam mercados",
      icon: Target
    },
    {
      title: "Tráfego Pago Premium",
      description: "Campanhas que convertem espectadores em súditos leais",
      icon: TrendingUp
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Presença digital que comanda autoridade absoluta",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Marketing <span className="text-secondary">Estratégico</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Estratégias imperiais de performance que posicionam sua marca no topo do ranking de engajamento e vendas.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
            >
              Solicitar Consultoria Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nossos Serviços de <span className="text-secondary">Marketing</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-secondary/10 w-fit">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Cases de <span className="text-secondary">Marketing</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioMarketing.map((item, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Resultados <span className="text-secondary">Imperiais</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <p className="text-muted-foreground">Marcas Atendidas por Mês</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">72h</div>
              <p className="text-muted-foreground">Execução Máxima</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4K</div>
              <p className="text-muted-foreground">Padrão Mínimo</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">360°</div>
              <p className="text-muted-foreground">Estratégia Completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comande seu Mercado com Marketing Imperial
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Diagnóstico gratuito, estratégia 360° e resultados em até 72 horas. Lidere, nós executamos o poder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
              >
                Agendar Consultoria Gratuita
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Conhecer Outros Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;