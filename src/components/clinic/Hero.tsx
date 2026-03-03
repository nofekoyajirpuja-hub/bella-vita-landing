import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const trustItems = [
  "Profissionais especializados",
  "Equipamentos modernos",
  "Atendimento personalizado",
  "Parcelamento facilitado",
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Clínica Bella Vita" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary-foreground/70 font-body mb-4">
            Realçando sua beleza com naturalidade
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Sua Melhor Versão Começa Aqui
          </h1>
          <p className="text-lg text-primary-foreground/80 font-light mb-8 max-w-lg">
            Tratamentos modernos, tecnologia avançada e atendimento personalizado em Florianópolis.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contato">Agendar Avaliação</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {trustItems.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-2 text-sm text-primary-foreground/80"
              >
                <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
