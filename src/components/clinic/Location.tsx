import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicFacadeDesktop from "@/assets/clinic-facade.jpg";
import clinicFacadeMobile from "@/assets/clinic-facade-mobile.jpg";
import ResponsiveImage from "@/components/clinic/ResponsiveImage";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clínica Moderna em Florianópolis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça nossa estrutura e venha nos visitar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-md min-h-[350px]"
          >
            <iframe
              title="Localização Bella Vita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5482!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ4LjgiUyA0OMKwMzInNTMuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <ResponsiveImage
                desktopSrc={clinicFacadeDesktop}
                mobileSrc={clinicFacadeMobile}
                alt="Fachada da Clínica"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    Av. Beira Mar Norte, 1500 - Sala 302
                    <br />Centro, Florianópolis - SC, 88015-600
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <a href="tel:+554832001500" className="text-sm text-primary hover:underline">
                    (48) 3200-1500
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p className="text-sm text-muted-foreground">
                    Seg a Sex: 8h às 19h
                    <br />Sáb: 9h às 14h
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-6 w-full">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-27.5969,-48.5482"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Como Chegar
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
