import { motion } from "framer-motion";

const results = [
  { procedure: "Preenchimento Labial", before: "Lábios finos e assimétricos", after: "Volume natural e harmonioso" },
  { procedure: "Harmonização Facial", before: "Contorno facial irregular", after: "Simetria e equilíbrio" },
  { procedure: "Botox", before: "Linhas de expressão marcadas", after: "Pele lisa e rejuvenescida" },
];

const Results = () => {
  return (
    <section id="resultados" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resultados Reais
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transformações que falam por si — resultados naturais e sofisticados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.procedure}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-lg overflow-hidden bg-card shadow-md"
            >
              <div className="grid grid-cols-2">
                <div className="bg-muted p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Antes</span>
                  <p className="text-sm text-foreground/70">{result.before}</p>
                </div>
                <div className="bg-rose-light p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
                  <span className="text-xs uppercase tracking-widest text-primary mb-2 font-medium">Depois</span>
                  <p className="text-sm text-foreground/70">{result.after}</p>
                </div>
              </div>
              <div className="p-4 text-center border-t border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {result.procedure}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
