export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card/35 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono uppercase tracking-[0.12em]">
          &copy; {currentYear} Adama GUEYE. Tous droits réservés.
        </p>
        <p className="font-mono uppercase tracking-[0.12em]">Physique numérique / Électromécanique</p>
      </div>
    </footer>
  );
}
