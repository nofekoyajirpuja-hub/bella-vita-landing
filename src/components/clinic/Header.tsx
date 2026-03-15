import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modelos de Ensino", href: "#ensino" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <div className="leading-tight">
            <span className="font-heading text-xl font-bold text-foreground tracking-wide">
              Instituto Dra. Léia Demétrio
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body">
              Capacitação em Harmonização Facial
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-4">
            <a href="#contato" onClick={() => setIsOpen(false)}>Fale Conosco</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
