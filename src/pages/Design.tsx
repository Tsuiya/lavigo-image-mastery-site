import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, ArrowLeft, Layers, Brush, Layout } from "lucide-react";
import { Link } from "react-router-dom";

const Design = () => {
  const portfolioDesigns = [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop",
      title: "Identidade Visual"
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      title: "Material Impresso"
    },
    {
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop",
      title: "Interface Digital"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
      title: "Branding Corporativo"
    },
    {
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&h=300&fit=crop",
      title: "Design Editorial"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      title: "Embalagens"
    }
  ];

  const services = [
    {
      title: "Identidade Visual Imperial",
      description: "Criamos marcas que dominam e conquistam mercados",
      icon: Brush
    },
    {
      title: "Design Gráfico Premium",
      description: "Materiais que refletem autoridade e excelência",
      icon: Palette
    },
    {
      title: "Interfaces Digitais",
      description: "UX/UI que converte visitantes em súditos leais",
      icon: Layout
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
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Design <span className="text-secondary">Criativo</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Desenvolvemos identidades visuais imperiais que erguem estruturas de poder e autoridade para sua marca.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
            >
              Solicitar Orçamento de Design
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nossos Serviços de <span className="text-secondary">Design</span>
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
            Portfolio de <span className="text-secondary">Design</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioDesigns.map((design, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg relative">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{design.title}</h3>
                </div>
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
              Assuma o Trono com Design Imperial
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Padrão 4K mínimo e design sob medida. Domine sua imagem visual com autoridade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
              >
                Entrar em Contato
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Mais Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;