import { Check, X } from "lucide-react";

const ForWhom = () => {
  const forUs = [
    "Facturan a partir de USD 10 millones anuales",
    "Tienen procesos y sistemas funcionando, aunque con fricciones evidentes",
    "Reconocen que ciertas limitantes ya están afectando crecimiento, eficiencia o control",
    "Buscan avanzar sin poner en riesgo la operación existente",
  ];

  const notForUs = [
    "La empresa no tiene claridad sobre sus áreas de oportunidad",
    "Se busca únicamente desarrollo de software sin un problema de negocio definido",
    "No existe disposición para priorizar y decidir",
    "El objetivo es reemplazar sistemas core sin una justificación clara de impacto inmediato",
  ];

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Para empresas que ya saben dónde les duele</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Strataexx está diseñado para empresas en operación
          </h2>
          <p className="text-lg text-muted-foreground">
            Llegamos cuando el problema ya está identificado, pero no se ha resuelto por costo, tiempo o complejidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For us */}
          <div className="p-8 bg-background rounded-2xl border border-accent/20 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              Trabajamos con organizaciones que
            </h3>
            <div className="space-y-4">
              {forUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not for us */}
          <div className="p-8 bg-background rounded-2xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              No somos la mejor opción si
            </h3>
            <div className="space-y-4">
              {notForUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground">
            👉 <strong>El problema ya existe y ya duele.</strong> Nosotros ayudamos a resolverlo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
