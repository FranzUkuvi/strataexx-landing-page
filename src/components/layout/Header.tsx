import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/strataexx-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    label: "El Problema",
    href: "#problema"
  }, {
    label: "Cómo Trabajamos",
    href: "#como-trabajamos"
  }, {
    label: "Casos de Uso",
    href: "#casos-uso"
  }, {
    label: "Experiencia",
    href: "#experiencia"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default">
              Hablemos de tu caso
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button variant="hero" className="mt-4 w-full">
                Hablemos de tu caso
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;