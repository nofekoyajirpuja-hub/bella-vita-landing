import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";

const reviews = [
  { name: "Dra. Camila Ferreira", text: "A mentoria individual transformou minha prática clínica. Hoje atendo com total segurança e confiança!" },
  { name: "Dra. Juliana Costa", text: "O workshop hands on foi incrível! Prática intensiva com supervisão de altíssima qualidade." },
  { name: "Dra. Mariana Santos", text: "Os cursos online são completos e didáticos. Consegui conciliar com minha rotina e evoluí muito." },
  { name: "Dr. Rafael Oliveira", text: "Metodologia estruturada e suporte individualizado. O Instituto realmente faz diferença na carreira." },
];

const Reviews = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O que nossos alunos dizem sobre a experiência no Instituto
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
                  {review.name.replace("Dra. ", "").replace("Dr. ", "").charAt(0)}
                </div>
                <span className="text-sm font-medium text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-center"
        >
          <Award className="h-6 w-6 text-gold" />
          <span className="font-heading text-xl font-semibold text-foreground">
            Mais de 500 profissionais capacitados
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
