import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Server, Zap } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DEMO_VIDEO_URL =
  "https://stream.adilo.com/adilo-encoding/bxwIXUHtGtzc0g7s/5KGRMun9/720p.mp4";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-purple-50 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-200/50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm rounded-full px-4 py-2 text-purple-800 text-sm font-semibold mb-8 animate-fade-in-up border border-purple-200">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Automatize. Implemente. Simplifique.
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Publique sua{" "}
              <span className="text-accent font-extrabold">landing-page ou site</span>{" "}
              em qualquer hospedagem
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
              <ContactFormModal
                trigger={
                  <Button size="lg" className="btn-hero text-lg group">
                    Começar agora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />

              {/* Modal de vídeo */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white shadow-lg"
                  >
                    Ver demonstração
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  {/* <DialogHeader className="px-6 pt-6">
                    <DialogTitle className="text-xl">Demonstração</DialogTitle>
                  </DialogHeader> */}
                  <div className="px-6 pt-10 pb-6">
                    <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden border">
                      <iframe
                        src={DEMO_VIDEO_URL}
                        title="Demonstração"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Visual Mockup Component */}
          <div className="mt-16 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-3xl mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl" />

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
                      <div className="w-8 h-0.5 bg-accent animate-pulse" />
                      <Zap className="w-6 h-6 text-accent animate-bounce" />
                      <div className="w-8 h-0.5 bg-accent animate-pulse" />
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
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Deploy em andamento...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;
