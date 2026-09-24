import { motion } from "framer-motion";

const educationData = [
  {
    year: "En cours",
    degree: "Licence Professionnelle — Maintenance des Systèmes Électromécaniques (LIUMSE)",
    school: "École Polytechnique de Thiès",
  },
  {
    year: "2024–2025",
    degree: "Licence 3 — Physique Numérique",
    school: "Université Alioune Diop de Bambey",
  },
  {
    year: "2019–2020",
    degree: "Baccalauréat Scientifique — Série S2",
    school: "Lycée Cheikh Mourath Ndao de Méckhé",
  }
];

export default function Education() {
  return (
    <section id="education" className="relative border-y border-border bg-card/35 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="section-rule">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">02 / Parcours</p>
            <h2 className="text-4xl font-bold tracking-[-0.05em] text-foreground md:text-6xl">Parcours académique</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Une trajectoire à la rencontre de la physique, du code et des systèmes industriels.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-[1.35rem] top-0 border-l border-primary/45 md:left-[calc(25%+1rem)]" />
          <div className="space-y-5">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative grid gap-4 pl-12 md:grid-cols-[25%_1fr] md:gap-8 md:pl-0"
              >
                <div className="absolute left-[1rem] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-card md:left-[calc(25%+0.67rem)]" />
                <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-primary md:pt-7">{item.year}</p>
                <div className="border border-border bg-background/75 p-5 transition-all hover:-translate-y-1 hover:border-primary/60 md:p-7">
                  <h3 className="max-w-2xl text-xl font-bold tracking-[-0.02em] text-foreground md:text-2xl">{item.degree}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
