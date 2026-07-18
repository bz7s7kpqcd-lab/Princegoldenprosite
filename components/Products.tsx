"use client";

import { motion } from "framer-motion";
import { products, ProductStatus } from "@/lib/data";
import Reveal from "./Reveal";

const statusStyles: Record<ProductStatus, string> = {
  Building: "text-gold border-gold/40 bg-gold/10",
  Prototype: "text-bone border-line bg-surface2",
  Concept: "text-muted border-line bg-surface2",
  Research: "text-muted border-line bg-surface2",
};

export default function Products() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Featured Products</p>
            <h2 className="max-w-xl text-balance text-3xl font-bold leading-tight text-bone md:text-4xl">
              Four products. One founder. Built in the open.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-gold/40"
              >
                <div className="mb-6 flex h-36 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-surface2 to-ink">
                  <span className="font-display text-2xl font-bold tracking-tight text-line group-hover:text-gold/30 transition-colors">
                    {product.name}
                  </span>
                </div>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-bone">{product.name}</h3>
                  <span
                    className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${statusStyles[product.status]}`}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="mb-2 font-body italic text-muted">{product.tagline}</p>
                <p className="mb-6 flex-1 font-body leading-relaxed text-muted">
                  {product.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold"
                  >
                    Visit {product.name}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted/60">
                    Not yet live
                  </span>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
