import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Transforme seu workflow hoje mesmo
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-shadow">
            Transforme o lançamento do seu projeto em algo{" "}
            <span className="text-accent">simples e rápido</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Concentre-se no crescimento do seu negócio; deixe o deploy conosco.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-hero text-lg group px-8 py-4"
            >
              Publique agora mesmo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            ✓ Sem compromisso • ✓ Setup em minutos • ✓ Suporte incluso
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FinalCTA;