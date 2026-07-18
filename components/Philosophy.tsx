import Reveal from "./Reveal";

const principles = [
  "Ship often.",
  "Learn publicly.",
  "Solve meaningful problems.",
  "Design for humans.",
  "Consistency beats intensity.",
  "Technology should empower people.",
];

export default function Philosophy() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-10">Founder Philosophy</p>
        </Reveal>
        <div className="space-y-1">
          {principles.map((line, i) => (
            <Reveal key={line} delay={i * 0.06}>
              <p className="text-balance font-display text-3xl font-medium leading-[1.15] text-muted transition-colors hover:text-bone md:text-5xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
