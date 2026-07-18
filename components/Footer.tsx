export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-display text-sm text-muted">Build things that matter.</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/50">
          © {new Date().getFullYear()} Prince GoldenPro
        </p>
      </div>
    </footer>
  );
}
