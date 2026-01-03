import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-accent font-semibold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Soluciones de negocio apalancadas en software
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hay problemas que sabes que existen.
              <span className="block text-accent mt-2">Strataexx los resuelve.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Trabajamos con dueños y directivos para convertir limitantes reales del negocio en soluciones concretas, rápidamente y sin reemplazar tu operación actual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg">
                Hablemos de tu caso
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Explorar si aplica a mi empresa
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">15-45 días a MVP</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Sin reemplazar sistemas</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Impacto medible</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl shadow-lg p-8 border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sprint de Definición</p>
                      <p className="text-sm text-muted-foreground">Problema → MVP funcional</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">Diagnóstico directo con directivos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">Priorización de impacto alto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">Solución conectada a sistemas</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Progreso</span>
                      <span className="text-sm font-semibold text-accent">15-45 días</span>
                    </div>
                    <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-accent text-sm font-semibold animate-float">
                Sin burocracia
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 px-4 py-2 rounded-xl shadow-md text-sm font-medium">
                ✓ Ejecutamos, no vendemos humo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;