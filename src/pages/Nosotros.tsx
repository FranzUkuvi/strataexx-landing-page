import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import networkWaves from "@/assets/network-waves.png";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Editorial Style */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden gradient-hero">
          <div className="absolute inset-0 bg-mesh" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold mb-4 animate-fade-in">
                Quiénes somos
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Trayectoria operativa,<br />
                <span className="text-accent">no discurso</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Strataexx se construye sobre una trayectoria profesional desarrollada dentro de empresas reales, en contextos de alta complejidad operativa, distintos países y múltiples etapas de crecimiento.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Statement */}
        <section className="py-20 lg:py-28 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl md:text-3xl text-primary font-display font-medium leading-relaxed text-center italic">
                "No nace desde la consultoría. Nace desde la operación, la toma de decisiones y la responsabilidad directa sobre resultados."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Executive Experience */}
        <section className="py-20 lg:py-28 gradient-section-alt relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
                Experiencia ejecutiva en entornos corporativos y de crecimiento
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                La experiencia que da sustento a Strataexx proviene de una carrera que combina:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-lg">1</span>
                  </div>
                  <p className="text-foreground font-medium">
                    Liderazgo ejecutivo en corporativos internacionales
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-lg">2</span>
                  </div>
                  <p className="text-foreground font-medium">
                    Dirección general de operaciones regionales
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-lg">3</span>
                  </div>
                  <p className="text-foreground font-medium">
                    Fundación y escalamiento de empresas propias
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A lo largo de su trayectoria, su fundador ha ocupado posiciones de alta responsabilidad ejecutiva, incluyendo roles equivalentes a CEO y dirección general, con responsabilidad directa de P&L, equipos multidisciplinarios y operaciones en múltiples países.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Esta experiencia incluye trabajo en Europa, Estados Unidos, México y Latinoamérica, tanto en estructuras corporativas consolidadas como en organizaciones en etapa de construcción y expansión.
              </p>
            </div>
          </div>
        </section>

        {/* Dual Perspective */}
        <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={networkWaves}
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[30%] w-full min-w-[1400px] h-auto opacity-[0.05] object-cover grayscale"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Haber llegado "arriba" y haber empezado "desde cero"
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Uno de los pilares de Strataexx es la combinación —poco común— de dos perspectivas que normalmente no conviven bien:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Corporate perspective */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <h3 className="text-xl font-display font-semibold text-primary">
                      Mundo corporativo
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-6 border-l-2 border-primary/20">
                    La disciplina, estructura y exigencia del mundo corporativo
                  </p>
                  <div className="pl-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Rigor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Claridad de procesos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Entendimiento de gobernanza, control y escala</span>
                    </div>
                  </div>
                </div>

                {/* Founder perspective */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <h3 className="text-xl font-display font-semibold text-accent">
                      Fundador y dueño
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-6 border-l-2 border-accent/30">
                    La realidad, urgencia y pragmatismo del fundador y dueño de empresa
                  </p>
                  <div className="pl-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Foco en impacto real</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Sensibilidad al riesgo operativo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Decisiones con recursos limitados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-foreground">Cercanía con la realidad del dueño</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border/50">
                <p className="text-lg text-center text-primary font-medium">
                  Strataexx existe justamente en ese punto intermedio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology as Means */}
        <section className="py-20 lg:py-28 gradient-section-alt relative">
          <div className="absolute inset-0 bg-pattern" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Tecnología como medio, no como fin
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                A lo largo de esta trayectoria, la tecnología ha sido una constante, no como producto, sino como herramienta para resolver problemas de negocio.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-card rounded-lg p-5 border border-border/50">
                  <p className="text-foreground">Diseño e implementación de plataformas tecnológicas</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border/50">
                  <p className="text-foreground">Integración de sistemas existentes</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border/50">
                  <p className="text-foreground">Automatización de procesos críticos</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border/50">
                  <p className="text-foreground">Uso de analítica para soportar decisiones operativas y comerciales</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent/30 pl-6">
                La experiencia no parte de "qué tecnología usar", sino de qué problema resolver, y cómo hacerlo sin romper lo que ya funciona.
              </p>
            </div>
          </div>
        </section>

        {/* Model Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Un modelo basado en criterio senior y ejecución especializada
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Strataexx no se construye alrededor de una figura individual ni de una estructura rígida. El modelo es claro:
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <p className="text-foreground text-lg">
                    Una cabeza estratégica con experiencia ejecutiva y emprendedora
                  </p>
                </div>
                <div className="flex items-start gap-4 p-6 bg-accent/5 rounded-xl border border-accent/10">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  <p className="text-foreground text-lg">
                    Acompañada por equipos de especialistas tecnológicos senior, integrados según la naturaleza del problema a resolver
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-display font-semibold text-primary mb-6">
                  Los equipos que participan reúnen experiencia en:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>Arquitectura e integración de software</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>Desarrollo de soluciones productivas</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>Analítica, datos y automatización</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>Implementación en entornos reales</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Este enfoque permite mantener criterio, velocidad y calidad, sin inflar estructuras ni procesos innecesarios.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-20 lg:py-28 gradient-navy text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Cómo se refleja esta trayectoria en Strataexx
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
                Todo lo anterior se traduce directamente en la forma de trabajar:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">→</span>
                  <p className="text-lg">Entendemos la presión del dueño y del director</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">→</span>
                  <p className="text-lg">Hablamos el lenguaje de la operación, no de la teoría</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">→</span>
                  <p className="text-lg">Priorizamos impacto sobre perfección</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">→</span>
                  <p className="text-lg">Ejecutamos con cuidado, pero sin parálisis</p>
                </div>
              </div>

              <div className="border-t border-primary-foreground/20 pt-10">
                <p className="text-xl leading-relaxed text-center">
                  Strataexx no pretende enseñar cómo administrar una empresa. Existe para ayudar a destrabar problemas concretos, con criterio, foco y ejecución.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
