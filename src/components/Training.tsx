import { motion } from "framer-motion";
import { Award, Languages } from "lucide-react";

const trainingData = [
  {
    year: "2025–2026",
    title: "MOOC Orange — Module No-Code",
    description: "Certificat"
  },
  {
    year: "2024–2025",
    title: "Impression 3D",
    description: "Certificat"
  }
];

export default function Training() {
  return (
    <section id="training" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 section-rule">
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">05 / Repères</p>
          <h2 className="text-4xl font-bold tracking-[-0.05em] text-foreground md:text-6xl">Certifications & langues</h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {trainingData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              data-testid={`card-training-${idx}`}
              className="group relative overflow-hidden bg-card p-7 transition-colors hover:bg-background"
            >
              <div className="mb-12 flex items-start justify-between">
                <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
              </div>
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {item.year}
                </span>
                <h3 className="mb-2 mt-4 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            data-testid="card-languages"
            className="relative overflow-hidden bg-card p-7 transition-colors hover:bg-background"
          >
            <div className="mb-12 flex items-start justify-between">
              <div className="flex h-6 w-6 items-center justify-center text-primary">
              <Languages className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">03</span>
            </div>
            <h3 className="mb-5 text-xl font-bold text-foreground">Langues</h3>
            <div className="space-y-4 text-sm">
              <p className="flex justify-between gap-4 border-b border-border pb-3 text-muted-foreground">
                <span>Français</span><span className="font-semibold text-foreground">Natif</span>
              </p>
              <p className="flex justify-between gap-4 text-muted-foreground">
                <span>Anglais</span><span className="font-semibold text-foreground">Intermédiaire</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
