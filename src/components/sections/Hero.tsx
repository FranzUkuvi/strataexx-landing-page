import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-hero city-silhouette">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-mesh" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] animate-pulse" style={{
        animationDuration: '8s'
      }} />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[80px] animate-pulse" style={{
        animationDuration: '10s',
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-accent font-semibold mb-4 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Soluciones de negocio apalancadas en software
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Hay problemas que sabes que existen.
              <span className="block text-accent mt-2">Strataexx los resuelve.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              Trabajamos con dueños y directivos para convertir limitantes reales del negocio en soluciones concretas, rápidamente y sin reemplazar tu operación actual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <Button variant="hero" size="lg">
                Hablemos de tu caso
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Explorar si aplica a mi empresa
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>
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
          <div className="relative hidden lg:block animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <div className="relative">
              {/* Main card */}
              

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-accent text-sm font-semibold animate-float">
                Sin burocracia
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;