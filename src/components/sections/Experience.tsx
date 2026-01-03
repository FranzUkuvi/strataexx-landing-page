import { Globe } from "lucide-react";

const Experience = () => {
  const companies = [
    "KOB GmbH (Alemania)",
    "Knoll AG / BASF (Alemania)",
    "Sanofi (Francia, EEUU)",
    "Salcobrand (Chile)",
    "Banmédica (Chile)",
    "Banco de la Provincia de Buenos Aires (Argentina)",
    "Pacífico Seguros (Perú)",
    "FYBECA (Ecuador)",
    "Prevem Seguros (México)",
    "SOC Asesores (México)",
    "Banamex / Vitamedica (México)",
  ];

  return (
    <section id="experiencia" className="py-24 lg:py-32 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Experiencia construida en operación real</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            En múltiples contextos
          </h2>
          <p className="text-lg text-muted-foreground">
            La experiencia que respalda Strataexx se ha construido en <strong className="text-foreground">Europa, Estados Unidos, México y Latinoamérica</strong>, en contextos operativos y regulatorios complejos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proyectos y trabajo en organizaciones como:</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {companies.map((company, index) => (
                <div
                  key={company}
                  className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">{company}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground text-center italic">
              No como lista de sectores, sino como evidencia de criterio y profundidad para operar en entornos reales, con restricciones reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
