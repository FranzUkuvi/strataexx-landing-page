import { useState } from "react";
import { ChevronDown, Eye, Users, Calculator, TrendingUp, Link } from "lucide-react";

interface UseCase {
  icon: React.ElementType;
  title: string;
  summary: string;
  problem: string;
  mvpExample: string;
  result: string;
}

const UseCases = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const useCases: UseCase[] = [
    {
      icon: Eye,
      title: "Falta de visibilidad para decidir",
      summary: "La información existe, pero no llega a tiempo ni en forma usable.",
      problem: "Los datos están dispersos, llegan tarde o nadie confía del todo en ellos. Las decisiones se toman con intuición.",
      mvpExample: "Consolidación de información desde sistemas existentes en un tablero claro y accionable para dirección.",
      result: "Decisiones más rápidas, menos discusiones, mayor control sin burocracia.",
    },
    {
      icon: Users,
      title: "Procesos que dependen de personas clave",
      summary: "La operación funciona, pero no escala sin fricción.",
      problem: "Procesos críticos viven en la cabeza de una o dos personas.",
      mvpExample: "Flujo digital ligero que guía la ejecución y registra decisiones y excepciones.",
      result: "Menor dependencia individual y operación más predecible.",
    },
    {
      icon: Calculator,
      title: "Cálculos y reglas hechas 'a mano'",
      summary: "Excel, validaciones manuales y errores recurrentes.",
      problem: "Costos, comisiones o reglas de negocio se recalculan manualmente.",
      mvpExample: "Motor de reglas específico integrado a datos existentes.",
      result: "Menos errores, más confianza y decisiones más rápidas.",
    },
    {
      icon: TrendingUp,
      title: "Operación comercial poco orquestada",
      summary: "Oportunidades se pierden por falta de estructura.",
      problem: "Marketing, ventas y seguimiento no están bien conectados.",
      mvpExample: "Flujo comercial claro desde lead hasta cierre, con priorización automática.",
      result: "Mejor uso del esfuerzo comercial y mayor tasa de cierre.",
    },
    {
      icon: Link,
      title: "Sistemas que funcionan, pero no se hablan",
      summary: "Trabajo manual innecesario y datos inconsistentes.",
      problem: "Sistemas aislados generan fricción y reprocesos.",
      mvpExample: "Capa intermedia que conecta sistemas existentes y automatiza traspasos clave.",
      result: "Menos fricción operativa y mayor coherencia de información.",
    },
  ];

  return (
    <section id="casos-uso" className="py-24 lg:py-32 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Qué tipo de problemas resolvemos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Casos de uso prácticos
          </h2>
          <p className="text-lg text-muted-foreground">
            No somos expertos en tu industria. Somos expertos en <strong className="text-foreground">convertir problemas operativos reales en soluciones funcionales</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-md ${
                openIndex === index ? "lg:col-span-1 md:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2 pr-8">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.summary}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border/50 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">El problema</p>
                      <p className="text-sm text-muted-foreground">{useCase.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">Ejemplo de MVP</p>
                      <p className="text-sm text-muted-foreground">{useCase.mvpExample}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">Resultado</p>
                      <p className="text-sm text-foreground font-medium">{useCase.result}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
