import { Edit3, Github, Link, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Edit3,
    title: "Crie",
    description: "sua landing page em qualquer construtor de páginas.",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "2",
    icon: Github,
    title: "Exporte",
    description: "o projeto para o seu GitHub.",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "3",
    icon: Link,
    title: "Cole",
    description: "o link do repositório no Deployer.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    number: "4",
    icon: Rocket,
    title: "Pronto!",
    description: "Sua página está no ar e pronta para vender.",
    color: "from-green-500 to-green-600"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 passos simples para ter sua página no ar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
              )}
              
              <div className="card-professional text-center relative z-10 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-6 font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                
                <div className="mb-4">
                  <step.icon className="w-8 h-8 text-primary mx-auto" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <span className="text-gradient">{step.title}</span>{" "}
                  {step.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;