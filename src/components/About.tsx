import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair, Settings2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[19rem] overflow-hidden border border-border bg-card p-7"
          >
            <div className="engineering-grid absolute inset-0 opacity-40" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary">AG / 02</span>
                <Crosshair size={22} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="mb-4 h-px w-16 bg-primary" />
                <span className="block text-[clamp(5rem,14vw,9rem)] font-bold leading-[0.75] tracking-[-0.1em] text-foreground">AG</span>
                <p className="mt-5 max-w-[13rem] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">Sénégal<br />Sciences · systèmes · méthode</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="section-rule">
              <p className="mb-4 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">À propos de moi</p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">
                Comprendre les systèmes.<br /><span className="text-muted-foreground">Les rendre plus utiles.</span>
              </h2>
            </div>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Je m’appelle Adama Gueye, étudiant sénégalais passionné par les sciences, les technologies, l’électrotechnique et la maintenance des systèmes.
              </p>
              <p>
                Après une formation en Physique Numérique à l’Université Alioune Diop de Bambey, je poursuis aujourd’hui une Licence en Maintenance des Systèmes Électromécaniques à l’École Polytechnique de Thiès.
              </p>
              <p>
                Mon objectif professionnel est de développer mes compétences techniques et de contribuer à des projets innovants, en participant à l’étude, à la supervision, à la maintenance et à l’amélioration continue des systèmes électromécaniques industriels.
              </p>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Settings2 className="mt-0.5 shrink-0 text-primary" size={19} aria-hidden="true" />
                <div><p className="text-sm font-bold text-foreground">Approche système</p><p className="mt-1 text-sm text-muted-foreground">Observer, comprendre, améliorer.</p></div>
              </div>
              <a href="#contact" data-testid="link-about-contact" className="group flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary">
                Échanger sur un projet <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
