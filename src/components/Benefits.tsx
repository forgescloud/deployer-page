import { Zap, Globe, Wrench, Target } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Implantação instantânea",
    description: "Do GitHub direto para a hospedagem, sem comandos ou scripts.",
    color: "text-yellow-500"
  },
  {
    icon: Globe,
    title: "Compatibilidade total",
    description: "Funciona com todas as hospedagens compartilhadas populares que oferecem FTP/FTPS.",
    color: "text-blue-500"
  },
  {
    icon: Wrench,
    title: "Zero dor de cabeça técnica",
    description: "Não exige experiência com FTP, CI/CD ou linha de comando.",
    color: "text-purple-500"
  },
  {
    icon: Target,
    title: "Perfeito para todos",
    description: "Afiliados, marketers, agências, criadores de conteúdo e pequenas empresas.",
    color: "text-green-500"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que milhares escolhem o{" "}
            <span className="text-gradient">Deployer</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A solução completa para quem quer focar no negócio, não na tecnologia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-professional text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.color} bg-current/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;