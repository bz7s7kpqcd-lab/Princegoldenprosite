import { timeline } from "@/lib/data";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4">Timeline</p>
          <h2 className="max-w-lg text-balance text-3xl font-bold leading-tight text-bone md:text-4xl">
            The build, so far.
          </h2>
        </Reveal>

        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[15px]" />
          <ul className="space-y-12">
            {timeline.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 0.08}>
                <li className="relative pl-8 md:pl-12">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-ink md:h-[30px] md:w-[30px] md:flex md:items-center md:justify-center md:top-0" />
                  <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                    {entry.year}
                    {entry.month ? ` · ${entry.month}` : ""}
                  </p>
                  <h3 className="mb-1 font-display text-xl font-bold text-bone">{entry.title}</h3>
                  <p className="font-body leading-relaxed text-muted">{entry.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={timeline.length * 0.08}>
            <div className="relative mt-12 pl-8 md:pl-12">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-dashed border-line md:h-[30px] md:w-[30px] md:top-0" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted/60">
                What&apos;s next
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
