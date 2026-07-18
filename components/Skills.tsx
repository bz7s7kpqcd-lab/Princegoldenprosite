import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="max-w-lg text-balance text-3xl font-bold leading-tight text-bone md:text-4xl">
            What I bring to a build.
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <Reveal key={skill} delay={i * 0.03}>
              <span className="inline-block rounded-full border border-line px-5 py-2.5 font-body text-bone transition-colors hover:border-gold hover:text-gold">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
