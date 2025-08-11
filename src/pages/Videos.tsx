import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, ArrowLeft, Play, Film, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Videos = () => {
  const portfolioVideos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      title: "Vídeo Institucional"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1551817958-11e0f7bbea6f?w=500&h=300&fit=crop",
      title: "Comercial para TV"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500&h=300&fit=crop",
      title: "Documentário Corporativo"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=300&fit=crop",
      title: "Conteúdo para Redes"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=300&fit=crop",
      title: "Evento Corporativo"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=500&h=300&fit=crop",
      title: "Produto em Ação"
    }
  ];

  const services = [
    {
      title: "Vídeos Institucionais",
      description: "Conte a história da sua empresa com impacto imperial",
      icon: Monitor
    },
    {
      title: "Comerciais 4K",
      description: "Campanhas publicitárias que dominam a atenção",
      icon: Film
    },
    {
      title: "Conteúdo para Redes",
      description: "Vídeos estratégicos para engajamento máximo",
      icon: Play
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
                <Video className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Produção de <span className="text-secondary">Vídeo</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Criamos narrativas audiovisuais imperiais que comandam atenção e convertem espectadores em súditos leais.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
            >
              Solicitar Orçamento de Vídeo
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nossos Serviços de <span className="text-secondary">Vídeo</span>
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
            Portfolio de <span className="text-secondary">Vídeos</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioVideos.map((video, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <Play className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">{video.title}</p>
                  </div>
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
              Domine Através do Audiovisual Imperial
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Estratégia 360° e execução em até 72 horas. Seja soberano da sua narrativa visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open("https://wa.me/5516991609339", "_blank")}
              >
                Fale Conosco no WhatsApp
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Explorar Outros Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;