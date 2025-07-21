
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Monitor, Server, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-purple-50 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-200/50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm rounded-full px-4 py-2 text-purple-800 text-sm font-semibold mb-8 animate-fade-in-up border border-purple-200">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Automatize. Implemente. Simplifique.
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Publique sua{" "}
              <span className="text-accent font-extrabold">landing-page</span>{" "}
              em qualquer hospedagem compartilhada
            </h1>
            
            <p className="text-xl text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
              <strong>Zero configuração técnica</strong>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cole o link do seu repositório{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
                <Github className="w-5 h-5" />
                GitHub
              </span>{" "}
              e veja o deploy acontecer em minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
                className="bg-white border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white shadow-lg"
              >
                Ver demonstração
              </Button>
            </div>
          </div>
          
          {/* Visual Mockup Component */}
          <div className="mt-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative max-w-3xl mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
              
              {/* Main mockup container */}
              <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* GitHub */}
                  <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">GitHub Repo</span>
                  </div>
                  
                  {/* Arrow with animation */}
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-accent animate-pulse"></div>
                      <Zap className="w-6 h-6 text-accent animate-bounce" />
                      <div className="w-8 h-0.5 bg-accent animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Server */}
                  <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Server className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Hospedagem</span>
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="mt-6 flex items-center justify-center space-x-2 text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Deploy em andamento...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
