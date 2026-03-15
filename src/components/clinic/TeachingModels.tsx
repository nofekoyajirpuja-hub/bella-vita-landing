import { motion } from "framer-motion";
import { Users, Wrench, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    icon: Users,
    title: "Mentoria Individual",
    desc: "Mentoria prática para profissionais que desejam realizar procedimentos com supervisão direta, focando em prática clínica real e acompanhamento especializado.",
  },
  {
    icon: Wrench,
    title: "Workshop Hands On",
    desc: "Treinamento prático intensivo voltado para profissionais que desejam aprimorar técnicas através de demonstrações e prática em pacientes modelo.",
  },
  {
    icon: MonitorPlay,
    title: "Cursos Online",
    desc: "Cursos com conteúdo teórico e prático, permitindo acesso às aulas a qualquer momento com material didático completo e certificação.",
  },
];

const TeachingModels = () => {
  return (
    <section id="ensino" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conheça Nossos Modelos de Ensino
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Formatos flexíveis para cada etapa da sua carreira
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-rose-light flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <model.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {model.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {model.desc}
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="#contato">Saiba mais</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingModels;
