import { MapPin, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/strataexx-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Brand & Description */}
          <div>
            <img 
              src={logo} 
              alt="Strataexx" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-muted-foreground max-w-md mb-6">
              Soluciones de negocio apalancadas en software para empresas en operación. Ayudamos a dueños y directivos a resolver limitantes reales de crecimiento y operación mediante intervenciones focalizadas.
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="default">
                Agendar conversación
              </Button>
              <Button variant="heroOutline" size="default">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:text-right">
            <h3 className="text-lg font-semibold text-foreground mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 lg:justify-end">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5 lg:order-2" />
                <div className="lg:text-right">
                  <p className="text-muted-foreground">Boulevard de las Ciencias 3015, Int. 301</p>
                  <p className="text-muted-foreground">Juriquilla Santa Fe, Querétaro</p>
                  <p className="text-muted-foreground">CP 76230, México</p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <MessageCircle className="w-5 h-5 text-accent shrink-0 lg:order-2" />
                <a href="https://wa.me/524424469587" className="text-muted-foreground hover:text-accent transition-colors">
                  +52 442 446 9587
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Strataexx. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Aviso de Privacidad
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 max-w-3xl">
            Strataexx opera como firma de servicios profesionales orientados a la definición, priorización e implementación de soluciones de negocio apalancadas en software. La información presentada en este sitio tiene fines informativos y no constituye una oferta vinculante.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
