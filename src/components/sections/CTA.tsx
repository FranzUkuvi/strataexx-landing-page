import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 gradient-navy-glow relative overflow-hidden">
      {/* Glow effects like reference */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-primary/30 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Si al leer esto pensaste:
          </h2>
          <blockquote className="text-2xl md:text-3xl text-primary-foreground/80 italic mb-8">
            "Esto se parece demasiado a lo que vivimos"
          </blockquote>
          <p className="text-xl text-primary-foreground/70 mb-10">
            entonces vale la pena conversar.
          </p>
          
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-accent text-accent-foreground hover:bg-turquoise-light"
            >
              Agendar conversación
              <ArrowRight className="ml-2" />
            </Button>
            <p className="text-sm text-primary-foreground/50">
              Conversación directa. Sin presentaciones genéricas. Sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
