import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="container-page grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>
        <div className="max-w-2xl space-y-6">
          <Reveal>
            <p className="text-balance font-body text-2xl leading-relaxed text-bone md:text-3xl">
              I am an independent founder obsessed with solving real problems through
              software.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-lg leading-relaxed text-muted">
              I believe great ideas shouldn&apos;t die because the right people never met.
              I enjoy designing products, validating ideas quickly, and shipping
              continuously — even when the only tools I have are a phone and a browser
              tab.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-lg leading-relaxed text-muted">
              My goal is to build companies that improve how people create, collaborate,
              and solve problems with AI.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
