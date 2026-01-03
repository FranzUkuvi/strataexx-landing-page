import { Button } from "@/components/ui/button";
import { MessageSquare, Target, Code, CheckCircle } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Aterrizamos tus dolores reales",
      description: "Conversaciones directas con el dueño o directivo. Sin auditorías extensas. Sin burocracia.",
    },
    {
      icon: Target,
      number: "02",
      title: "Elegimos un solo problema prioritario",
      description: "El que más impacto tiene y menos riesgo genera. No intentamos resolver todo.",
    },
    {
      icon: Code,
      number: "03",
      title: "Construimos un MVP funcional",
      description: "Una solución real, usable, conectada a tus sistemas actuales.",
    },
  ];

  const outcomes = [
    "Tienes claridad",
    "Tienes algo funcionando",
    "Decides con información real si escalar",
  ];

  return (
    <section id="como-trabajamos" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Cómo trabajamos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Sprint de Definición + MVP Inicial
          </h2>
          <p className="text-lg text-muted-foreground">
            No cobramos por diagnósticos que terminan en un PowerPoint. <strong className="text-foreground">Trabajamos en un sprint corto donde ya avanzaste.</strong>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index > 0 ? "lg:mt-16" : ""}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`}>
                  <div className={`p-6 bg-background rounded-2xl border border-border/50 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md hover:border-accent/30 hover:shadow-md transition-all duration-300`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-accent font-display font-bold text-2xl">{step.number}</span>
                    </div>
                    <h3 className={`text-xl font-semibold text-foreground mb-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {step.title}
                    </h3>
                    <p className={`text-muted-foreground ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-accent" />
                </div>

                {/* Empty space for grid alignment */}
                <div className={index % 2 === 0 ? "lg:order-2" : ""} />
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
            <p className="text-accent font-semibold text-center mb-6">En 15–45 días, al final del sprint:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{outcome}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg">
                Conocer cómo sería un sprint en mi empresa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
