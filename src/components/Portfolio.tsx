import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const Portfolio = () => {
  // Placeholder videos - será substituído por uploads reais
  const videos = [
    {
      id: 1,
      title: "Campanha Institucional - Tech Corp",
      category: "Vídeo Institucional",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Ensaio Fotográfico - Produto Premium",
      category: "Fotografia",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Comercial - Marca de Luxo",
      category: "Comercial",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      duration: "0:30"
    },
    {
      id: 4,
      title: "Documentário Corporativo",
      category: "Documentário",
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
      duration: "5:20"
    }
  ];

  const categories = ["Todos", "Vídeo Institucional", "Fotografia", "Comercial", "Documentário"];

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore alguns dos nossos trabalhos mais impactantes e veja como transformamos visões em realidade.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-secondary hover:text-foreground transition-colors duration-200 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <Card key={video.id} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="lg" className="bg-background/90 text-foreground hover:bg-background">
                      <Play className="mr-2 h-5 w-5" />
                      Assistir
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            Ver Portfolio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;