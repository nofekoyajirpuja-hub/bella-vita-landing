import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Award, Clock, HeadphonesIcon } from "lucide-react";
import clinicTeam from "@/assets/clinic-team.jpg";

const differentials = [
  { icon: BookOpen, label: "Cursos online e mentorias individuais" },
  { icon: FlaskConical, label: "Conteúdos científicos e prática intensiva" },
  { icon: Award, label: "Certificação de conclusão" },
  { icon: Clock, label: "Flexibilidade de horários" },
  { icon: HeadphonesIcon, label: "Suporte individualizado ao aluno" },
];

const Excellence = () => {
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
              alt="Treinamento no Instituto Dra. Léia Demétrio"
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
              Excelência em Capacitação
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Instituto Dra. Léia Demétrio nasceu com o propósito de capacitar profissionais da estética, impulsionando suas carreiras através do desenvolvimento de raciocínio clínico e domínio das técnicas mais inovadoras da harmonização facial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa metodologia combina conhecimento teórico com prática clínica intensiva, preparando profissionais para atuar com segurança e excelência no mercado da estética.
            </p>

            <div className="space-y-3">
              {differentials.map((item) => (
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

export default Excellence;
