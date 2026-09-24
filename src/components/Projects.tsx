import { motion } from "framer-motion";
import { Laptop, Lightbulb, Calculator, Cog, BookOpen, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ElectroDiag",
    audience: "Étudiants · Techniciens · Ingénieurs",
    description: "Une plateforme gratuite pour digitaliser un parc de machines. Chaque équipement dispose d’un QR code donnant accès à son historique, à un diagnostic guidé et à un rapport PDF instantané avec ElectroDiag Pro.",
    href: "https://electrodiag-pro.vercel.app/",
    icon: Laptop
  },
  {
    title: "Electro LAB",
    audience: "Techniciens · Cours · Travaux pratiques",
    description: "Une plateforme développée pour réviser les travaux pratiques d’électrotechnique : simulation de démarrages de moteurs, inversions de sens et entraînement au dépannage.",
    href: "https://electro-lab-saas.vercel.app/",
    icon: Lightbulb
  },
  {
    title: "Machines électriques",
    audience: "Guide didactique",
    description: "Site web en français consacré aux moteurs synchrones et asynchrones, triphasés et monophasés : constitution, fonctionnement, pannes, bobinage, couplage étoile-triangle, formules et quiz.",
    href: "https://adamaths.github.io/moteurs-electriques-guide/",
    icon: Calculator
  },
  {
    title: "CalculScientifique",
    audience: "Projet de fin de cycle · Physique Numérique",
    description: "Conception d’une interface de calcul scientifique à distance pour la communauté universitaire et secondaire.",
    href: "https://calculscientifique.vercel.app/",
    icon: Cog
  },
  {
    title: "Bibliothèque Numérique",
    audience: "Physique Numérique",
    description: "PhysicNumerique est une plateforme de partage de ressources pédagogiques pour les étudiants de Licence 3 Physique Numérique. Elle centralise cours, TD, TP, examens et annales, organisés par module, matière, semestre et type de document.",
    href: "https://physicnumerique.softr.app/",
    icon: BookOpen
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-y border-border bg-card/35 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="section-rule">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">04 / Réalisations</p>
            <h2 className="text-4xl font-bold tracking-[-0.05em] text-foreground md:text-6xl">Mes projets</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Découvrez des projets en physique numérique, électromécanique, maintenance industrielle et développement numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <article data-testid={`card-project-${idx}`} className={`group relative flex h-full flex-col overflow-hidden border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 md:p-8 ${idx === 0 ? "md:row-span-2" : ""}`}>
                  <div className="mb-10 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10">
                    <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0{idx + 1} / 05</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">{project.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">{project.audience}</p>
                  <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                  {project.title === "CalculScientifique" && (
                    <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                      Équipe : Adama Gueye, Seydina M. L. Pouye, Ahmadou K. Sene, Alpha Ba et Ndeye Sarr.
                    </p>
                  )}
                  <a
                    href={project.href}
                    data-testid={`link-project-${idx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 border-b border-primary pb-1 text-sm font-bold text-primary transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Voir le projet <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </a>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
