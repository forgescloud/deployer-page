import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Automatize. Implemente. Simplifique.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-shadow">
              Publique sua{" "}
              <span className="text-accent">landing-page</span>{" "}
              em qualquer hospedagem compartilhada
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              <strong>Zero configuração técnica</strong>
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Cole o link do seu repositório{" "}
              <span className="inline-flex items-center gap-1 font-semibold">
                <Github className="w-5 h-5" />
                GitHub
              </span>{" "}
              e veja o deploy acontecer em minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="btn-hero text-lg group"
              >
                Começar agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Ver demonstração
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl"></div>
            <img
              src={heroImage}
              alt="Ilustração mostrando deploy automático do GitHub para servidor FTP"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;