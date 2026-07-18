import { contactLinks } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";
import GeometricMesh from "./GeometricMesh";

const links = [
  { label: "Email", href: contactLinks.email, external: false },
  { label: "X", href: contactLinks.x, external: true },
  { label: "LinkedIn", href: contactLinks.linkedin, external: true },
  { label: "GitHub", href: contactLinks.github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div className="pointer-events-none absolute -left-24 bottom-0 hidden opacity-40 md:block">
        <GeometricMesh variant="hero" />
      </div>
      <div className="container-page relative text-center">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold leading-tight text-bone md:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <MagneticLink
                key={link.label}
                href={link.href}
                external={link.external}
                className="inline-flex items-center rounded-full border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-gold hover:text-gold"
              >
                {link.label}
              </MagneticLink>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
