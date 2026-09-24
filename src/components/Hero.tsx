import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Waves } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="engineering-grid pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-30" />
      <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border border-primary/30 md:h-96 md:w-96">
        <div className="absolute inset-7 rounded-full border border-dashed border-primary/40 animate-[spin_28s_linear_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_10px_hsl(var(--primary)/.1)]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_19rem] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary"
            >
              <span className="h-px w-10 bg-primary" />
              Portfolio personnel
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              <h1 className="max-w-5xl text-[clamp(3.3rem,10vw,8.7rem)] font-bold leading-[0.88] tracking-[-0.07em] text-foreground">
                Adama<br />
                <span className="text-primary">GUEYE</span><span className="text-foreground/30">.</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-2xl"
            >
              Physique numérique <span className="mx-2 text-primary">/</span> Maintenance des systèmes électromécaniques
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="#projects" data-testid="link-hero-projects" className="inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground">
                Voir mes projets <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" data-testid="link-hero-contact" className="inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">
                Me contacter
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative border-l-2 border-primary bg-card/65 p-6 backdrop-blur-sm"
          >
            <div className="mb-7 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              <span>Profil technique</span>
              <span className="text-primary">01—07</span>
            </div>
            <p className="text-base leading-relaxed text-foreground/85">
              Étudiant en Licence Interuniversitaire en Maintenance des Systèmes Électromécaniques (LIUMSE) à l’École Polytechnique de Thiès, je souhaite développer mes compétences techniques et contribuer à des projets innovants.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-5">
              <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Cpu size={14} className="text-primary" /> Ingénierie</span>
              <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Waves size={14} className="text-primary" /> Numérique</span>
            </div>
          </motion.aside>
        </div>
        <a href="#about" data-testid="link-hero-discover" className="mt-16 inline-flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">
          <span className="flex h-9 w-9 items-center justify-center border border-border"><ArrowDown size={15} aria-hidden="true" /></span>
          Découvrir le parcours
        </a>
      </div>
    </section>
  );
}
