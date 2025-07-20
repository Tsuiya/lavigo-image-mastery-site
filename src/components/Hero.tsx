import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/a0c887bf-26a0-462a-91cf-23e08d182df5.png" 
              alt="Lavigo" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="block">Assuma o</span>
            <span className="block text-secondary">trono da sua história</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Nós não seguimos tendências — nós as decretamos. Com padrão 4K como mínimo e atendimento exclusivo para apenas 10-15 marcas por mês.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              Diagnóstico Gratuito
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Ver Nossos Decretos Visuais
            </Button>
          </div>

          {/* Imperial Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            {[
              { name: "Diagnóstico Gratuito", desc: "Análise completa do seu reino digital" },
              { name: "Estratégia 360°", desc: "Plano imperial sob medida" },
              { name: "Execução 72h", desc: "Decretos visuais em tempo imperial" }
            ].map((service, index) => (
              <div key={service.name} className="text-center group cursor-pointer">
                <div className="bg-card/50 rounded-lg p-6 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-elegant">
                  <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;