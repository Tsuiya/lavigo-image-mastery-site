import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, ArrowLeft, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Fotografia = () => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e8eba505?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?w=500&h=300&fit=crop"
  ];

  const services = [
    {
      title: "Fotografia Corporativa",
      description: "Imagens profissionais para empresas e executivos",
      icon: Users
    },
    {
      title: "Ensaios de Produto",
      description: "Destaque seus produtos com qualidade 4K",
      icon: Camera
    },
    {
      title: "Eventos Empresariais",
      description: "Cobertura completa de eventos corporativos",
      icon: Star
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
                <Camera className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Fotografia <span className="text-secondary">Profissional</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Capturamos a essência imperial da sua marca com padrão 4K mínimo. 
              Cada quadro é uma declaração de poder e autoridade visual.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
            >
              Solicitar Orçamento Fotográfico
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nossos Serviços de <span className="text-secondary">Fotografia</span>
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
            Portfolio de <span className="text-secondary">Fotografia</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para Dominar com Fotografia Imperial?
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Diagnóstico gratuito e execução em até 72 horas. Assuma o trono da sua imagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
              >
                Iniciar Conversa no WhatsApp
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Outros Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fotografia;