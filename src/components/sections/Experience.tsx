import { Globe, MapPin } from "lucide-react";

const Experience = () => {
  const regions = [
    {
      region: "Europa",
      companies: [
        { name: "KOB GmbH", country: "Alemania" },
        { name: "Knoll AG / BASF", country: "Alemania" },
        { name: "Sanofi", country: "Francia" },
      ],
    },
    {
      region: "Norteamérica",
      companies: [
        { name: "Sanofi", country: "EEUU" },
        { name: "Banamex / Vitamedica", country: "México" },
        { name: "Prevem Seguros", country: "México" },
        { name: "SOC Asesores", country: "México" },
        { name: "Santino Propiedades", country: "México" },
      ],
    },
    {
      region: "Sudamérica",
      companies: [
        { name: "Salcobrand", country: "Chile" },
        { name: "Banmédica", country: "Chile" },
        { name: "Banco de la Provincia de Buenos Aires", country: "Argentina" },
        { name: "Pacífico Seguros", country: "Perú" },
        { name: "FYBECA", country: "Ecuador" },
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold mb-4">Experiencia construida en operación real</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            En múltiples contextos
          </h2>
          <p className="text-lg text-muted-foreground">
            La experiencia que respalda Strataexx se ha construido en <strong className="text-foreground">Europa, Estados Unidos, México y Latinoamérica</strong>, en contextos operativos y regulatorios complejos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Regional cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {regions.map((regionData) => (
              <div
                key={regionData.region}
                className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-primary text-lg">
                    {regionData.region}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {regionData.companies.map((company) => (
                    <li key={`${company.name}-${company.country}`} className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="text-foreground font-medium text-sm">{company.name}</span>
                        <span className="text-muted-foreground text-sm ml-1">({company.country})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="text-center">
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              No como lista de sectores, sino como evidencia de criterio y profundidad para operar en entornos reales, con restricciones reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
