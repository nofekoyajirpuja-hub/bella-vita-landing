import { motion } from "framer-motion";
import { Sparkles, Syringe, Smile, Heart, Dumbbell, Zap } from "lucide-react";

const procedures = [
  { icon: Sparkles, title: "Limpeza de Pele", desc: "Renovação e revitalização profunda da pele com técnicas avançadas." },
  { icon: Syringe, title: "Botox", desc: "Suavização de linhas de expressão com resultado natural." },
  { icon: Smile, title: "Preenchimento Facial", desc: "Volume e contorno facial com ácido hialurônico de última geração." },
  { icon: Heart, title: "Harmonização Facial", desc: "Equilíbrio e simetria facial personalizado para cada paciente." },
  { icon: Dumbbell, title: "Tratamentos Corporais", desc: "Modelagem e rejuvenescimento corporal com tecnologia de ponta." },
  { icon: Zap, title: "Depilação a Laser", desc: "Remoção definitiva dos pelos com conforto e segurança." },
];

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Procedimentos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tratamentos de excelência para realçar sua beleza natural
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-rose-light flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <proc.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {proc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {proc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
