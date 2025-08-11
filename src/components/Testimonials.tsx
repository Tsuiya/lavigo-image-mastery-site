import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "A Lavigo transformou completamente nossa presença digital. Em 3 meses, nosso engajamento aumentou 150% e as vendas dobraram. Recomendo para qualquer empresa que queira dominar seu mercado.",
      rating: 5
    },
    {
      id: 2,
      name: "Marina Silva",
      role: "Diretora de Marketing, Fashion Co",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c9e0?w=100&h=100&fit=crop&crop=face",
      content: "O padrão 4K da Lavigo é incomparável. Cada foto, cada vídeo entregue superou nossas expectativas. A equipe entende verdadeiramente o que significa excelência visual.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Santos",
      role: "Fundador, Green Tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Diagnóstico gratuito, estratégia clara e execução em 72h. A Lavigo cumpre o que promete. Nossa marca nunca teve tanta autoridade no mercado.",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "TechStart", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop" },
    { name: "Fashion Co", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop" },
    { name: "Green Tech", logo: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=120&h=40&fit=crop" },
    { name: "Digital Plus", logo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=120&h=40&fit=crop" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marcas que dominaram seus mercados com nossa execução imperial.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-secondary mx-auto mb-6 opacity-50" />
                
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                    <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Marcas que Confiam na Nossa Execução
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;