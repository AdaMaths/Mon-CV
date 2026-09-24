import { motion } from "framer-motion";
import { Atom, Code2, Calculator, FlaskConical } from "lucide-react";

const categories = [
  {
    title: "Mathématiques",
    icon: Calculator,
    skills: [
      "Mathématiques appliquées",
      "Formulation de problèmes mathématiques pour l’analyse et l’optimisation"
    ]
  },
  {
    title: "Informatique",
    icon: Code2,
    skills: [
      "Programmation avancée",
      "Écriture et traduction d’algorithmes en code informatique"
    ]
  },
  {
    title: "Physique fondamentale",
    icon: Atom,
    skills: [
      "Propriétés physiques de l’atome",
      "Relations entre la structure et les propriétés des matériaux"
    ]
  },
  {
    title: "Sciences de l’ingénieur",
    icon: FlaskConical,
    skills: [
      "Instrumentation et expérimentation",
      "Analyse de systèmes électriques automatisés"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div className="section-rule">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">03 / Savoir-faire</p>
            <h2 className="text-4xl font-bold tracking-[-0.05em] text-foreground md:text-6xl">Compétences</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end">Des bases scientifiques solides, appliquées à l’analyse, à l’expérimentation et à la résolution de problèmes techniques.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemAnim}>
              <article data-testid={`card-skill-${idx}`} className="group h-full bg-card p-7 transition-colors hover:bg-background md:p-9">
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
                </div>
                <h3 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-foreground">{category.title}</h3>
                <ul className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start text-sm leading-relaxed text-muted-foreground">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                        {skill}
                      </li>
                    ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
