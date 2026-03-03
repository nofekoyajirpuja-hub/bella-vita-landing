import { Sparkles, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold text-primary-foreground">Bella Vita</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Realçando sua beleza com naturalidade. Estética avançada em Florianópolis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {["Início", "Procedimentos", "Sobre", "Resultados", "Avaliações"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+554832001500" className="hover:text-primary transition-colors">(48) 3200-1500</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Localização</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Av. Beira Mar Norte, 1500 - Sala 302, Florianópolis - SC</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Seg-Sex: 8h–19h | Sáb: 9h–14h</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Bella Vita Estética Avançada. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
