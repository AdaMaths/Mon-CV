import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Parcours", href: "#education" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Certifications & langues", href: "#training" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3" : "bg-background/70 backdrop-blur-sm py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" data-testid="link-home" className="group flex items-center gap-3 text-foreground">
          <span className="flex h-9 w-9 items-center justify-center border border-foreground bg-primary font-mono text-sm font-bold text-primary-foreground transition-transform group-hover:-rotate-6">AG</span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] sm:block">Adama Gueye</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`link-nav-${link.name.toLowerCase().replaceAll(" ", "-")}`}
              className="link-underline py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" data-testid="link-nav-contact-cta" className="ml-2 inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
            Me contacter <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          data-testid="button-mobile-menu"
          className="border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background px-5 shadow-lg lg:hidden"
          >
            <nav className="flex flex-col gap-1 py-4" aria-label="Navigation mobile">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-testid={`link-mobile-${link.name.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
