import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="engineering-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="section-rule">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">06 / Contact</p>
            <h2 className="max-w-md text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-foreground md:text-7xl">Parlons<br /><span className="text-primary">technique.</span></h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-foreground bg-foreground p-7 text-background md:p-10">
              <h3 className="text-2xl font-bold md:text-3xl">Travaillons ensemble</h3>
              <p className="mb-8 mt-4 max-w-lg text-sm leading-relaxed text-background/70 md:text-base">
                Prêt à collaborer sur des projets innovants ? N’hésitez pas à me contacter.
              </p>
              <div className="flex flex-col items-start gap-7">
                <a
                  href="mailto:adama.gueye.3304@gmail.com"
                  data-testid="link-contact-email"
                  className="inline-flex items-center gap-3 border-b border-primary pb-2 text-base font-bold text-background transition-colors hover:text-primary md:text-lg"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  adama.gueye.3304@gmail.com
                </a>
                <div className="flex flex-wrap gap-3">
                  <a data-testid="link-contact-email-cta" href="mailto:adama.gueye.3304@gmail.com" className="inline-flex items-center gap-2 border border-primary bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-1">
                    <Mail size={16} aria-hidden="true" /> Envoyer un e-mail <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <a data-testid="link-contact-whatsapp" href="https://wa.me/221772311101" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-background/30 px-4 py-3 text-sm font-bold text-background transition-colors hover:border-primary hover:text-primary">
                    <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                  </a>
                  <a data-testid="link-contact-linkedin" href="https://www.linkedin.com/in/adama-gueye-060235218" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-background/30 px-4 py-3 text-sm font-bold text-background transition-colors hover:border-primary hover:text-primary">
                    <Linkedin size={16} aria-hidden="true" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
