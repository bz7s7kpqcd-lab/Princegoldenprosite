import Reveal from "./Reveal";

export default function Now() {
  return (
    <section className="border-t border-line py-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-4 rounded-2xl border border-gold/25 bg-gold/5 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <p className="eyebrow">Now</p>
          </div>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-bone">
            Currently focused on launching Genxix while documenting the founder journey
            publicly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
