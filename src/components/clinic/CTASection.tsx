import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Agende Sua Avaliação e <br />Realce Sua Beleza
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-10 text-lg">
            Dê o primeiro passo para sua transformação. Nossa equipe está pronta para receber você.
          </p>
          <Button asChild size="lg" className="text-base px-10 py-6">
            <a href="#contato">Agendar Agora</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
