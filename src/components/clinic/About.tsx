import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import clinicTeam from "@/assets/clinic-team.jpg";

const highlights = [
  { icon: Award, label: "Mais de 10 anos de experiência" },
  { icon: Users, label: "Atendimento humanizado" },
  { icon: ShieldCheck, label: "Tecnologia de ponta" },
  { icon: HeartHandshake, label: "Resultados naturais" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={clinicTeam}
              alt="Equipe Bella Vita"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Bella Vita
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Bella Vita Estética Avançada nasceu com o propósito de oferecer tratamentos estéticos de alta qualidade em Florianópolis. Nossa equipe é formada por profissionais especializados e em constante atualização, garantindo procedimentos seguros e resultados excepcionais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com um ambiente sofisticado, equipamentos de última geração e atendimento verdadeiramente personalizado, proporcionamos uma experiência única onde ciência e beleza se encontram.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
