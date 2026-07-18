import { posts } from "@/lib/data";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section id="writing" className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-14">
          <p className="eyebrow mb-4">Writing</p>
          <h2 className="max-w-xl text-balance text-3xl font-bold leading-tight text-bone md:text-4xl">
            Thoughts on startups, AI, product building, and entrepreneurship.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ink p-6 transition-colors hover:border-gold/40">
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold text-bone">{post.title}</h3>
                  <p className="font-body text-muted">{post.excerpt}</p>
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50">
                  Coming soon
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
