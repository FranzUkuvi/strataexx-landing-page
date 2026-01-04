import { Check, X, Zap } from "lucide-react";
import tangleToOrder from "@/assets/tangle-to-order.png";

const Differentiator = () => {
  const whatWeDoNot = [
    "No proponemos reemplazar tus sistemas",
    "No iniciamos con 'transformaciones digitales'",
    "No forzamos cambios organizacionales amplios",
  ];

  const whatWeDo = [
    { label: "Impacto alto", description: "Enfocamos donde más duele" },
    { label: "Riesgo bajo", description: "Sin alterar la operación actual" },
    { label: "Avance rápido", description: "De problema a MVP en semanas" },
  ];

  return (
    <section className="py-24 lg:py-32 gradient-section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
        {/* Tangle to order background image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={tangleToOrder} 
            alt="" 
            className="w-[700px] lg:w-[900px] xl:w-[1100px] h-auto opacity-[0.06] object-contain"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Nuestra forma de pensar</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            No todo problema requiere transformar toda la empresa
          </h2>
          <p className="text-lg text-muted-foreground">
            Muchos solo necesitan resolverse con <strong className="text-foreground">criterio, foco y ejecución</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What we don't do */}
          <div className="p-8 bg-card rounded-2xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              Lo que no hacemos
            </h3>
            <div className="space-y-4">
              {whatWeDoNot.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What we do */}
          <div className="p-8 bg-card rounded-2xl border border-accent/20 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              Nos enfocamos en
            </h3>
            <div className="space-y-4">
              {whatWeDo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-muted-foreground"> — {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-2xl border border-accent/20">
            <Zap className="w-6 h-6 text-accent" />
            <p className="text-foreground font-medium">
              Creamos <span className="text-accent">soluciones satélite</span> que viven encima de lo que ya existe y destraban lo que hoy te frena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
