import { AlertCircle, Clock, DollarSign, Ban } from "lucide-react";
import tangleToOrder from "@/assets/tangle-to-order.png";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Sistemas vencidos",
      description: "Los sistemas existen, pero están obsoletos y limitando el crecimiento.",
    },
    {
      icon: Clock,
      title: "Procesos con fricción",
      description: "Los procesos funcionan, pero generan ineficiencias constantes.",
    },
    {
      icon: DollarSign,
      title: "Información dispersa",
      description: "La información está, pero no llega donde debe ni cuando debe.",
    },
    {
      icon: Ban,
      title: "Decisiones por intuición",
      description: "Las decisiones se toman sin datos porque el dato no está listo.",
    },
  ];

  return (
    <section id="problema" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">El problema (nombrado sin rodeos)</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            En empresas en operación ocurre siempre lo mismo
          </h2>
          <p className="text-lg text-muted-foreground">
            El problema no es que no sepas qué duele. El problema es que atenderlo parece demasiado <strong className="text-foreground">caro, lento o riesgoso</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-lg text-foreground">
            Muchas empresas se quedan <strong>años</strong> así. No por falta de visión, sino por falta de <span className="text-accent font-semibold">una forma pragmática de avanzar</span>.
          </p>
        </div>

        {/* Transition image between Problem and Differentiator */}
        <div className="mt-16 flex justify-center">
          <img 
            src={tangleToOrder} 
            alt="" 
            className="w-[500px] lg:w-[700px] xl:w-[800px] h-auto opacity-[0.15] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;