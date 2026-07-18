import { techStack } from "@/lib/data";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">Tech Stack</p>
          <h2 className="max-w-lg text-balance text-3xl font-bold leading-tight text-bone md:text-4xl">
            Tools I ship with.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.03}>
              <div className="flex items-center justify-center rounded-xl border border-line bg-ink py-5 font-mono text-sm text-muted transition-colors hover:border-gold/40 hover:text-gold">
                {tech}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
