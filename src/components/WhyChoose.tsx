import { Check } from "lucide-react";

const features = [
  {
    title: "Implantação instantânea",
    description: "Do GitHub direto para sua hospedagem, sem comandos ou scripts."
  },
  {
    title: "Compatível com todas as hospedagens",
    description: "Basta acesso FTP."
  },
  {
    title: "Zero dor de cabeça técnica",
    description: "Nenhuma experiência em FTP ou programação necessária."
  },
  {
    title: "Perfeito para todos",
    description: "Afiliados, marketers, agências, criadores e pequenas empresas."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher o{" "}
              <span className="text-gradient">Deployer</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;