import { Clock, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: Clock,
    title: "Setup concluído em minutos",
    color: "text-orange-500"
  },
  {
    icon: Headphones,
    title: "Suporte humano 24×7",
    color: "text-purple-500"
  }
];

const Guarantees = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Garantias
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-r from-card to-card/50 border border-border/50 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-8 h-8 ${guarantee.color}`}>
                <guarantee.icon className="w-full h-full" />
              </div>
              <span className="font-semibold text-foreground whitespace-nowrap">
                {guarantee.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;