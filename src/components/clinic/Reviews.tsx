import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";

const reviews = [
  { name: "Camila Ferreira", text: "Fiz preenchimento e ficou super natural. Atendimento impecável!" },
  { name: "Juliana Costa", text: "Ambiente incrível e profissionais extremamente qualificados. Recomendo demais!" },
  { name: "Mariana Santos", text: "O botox ficou maravilhoso, ninguém percebeu, só elogiaram minha pele. Amei!" },
  { name: "Renata Oliveira", text: "A harmonização facial mudou minha autoestima. Resultado natural e lindo!" },
];

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avaliações
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O que nossas pacientes dizem sobre a experiência na Bella Vita
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
                  {review.name.charAt(0)}
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
            Mais de 2.000 procedimentos realizados
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
