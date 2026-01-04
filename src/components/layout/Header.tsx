import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/strataexx-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      label: "El Problema",
      href: isHomePage ? "#problema" : "/#problema",
      isAnchor: true,
    },
    {
      label: "Cómo Trabajamos",
      href: isHomePage ? "#como-trabajamos" : "/#como-trabajamos",
      isAnchor: true,
    },
    {
      label: "Casos de Uso",
      href: isHomePage ? "#casos-uso" : "/#casos-uso",
      isAnchor: true,
    },
    {
      label: "Experiencia",
      href: isHomePage ? "#experiencia" : "/#experiencia",
      isAnchor: true,
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      isAnchor: false,
    },
  ];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Strataexx" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => 
              link.isAnchor ? (
                <a key={link.href} href={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 px-4 rounded-md border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
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
              {navLinks.map(link => 
                link.isAnchor ? (
                  <a key={link.href} href={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} to={link.href} className="text-muted-foreground font-medium hover:text-accent transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>
                <Button variant="hero" className="flex-1">
                  Hablemos de tu caso
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;