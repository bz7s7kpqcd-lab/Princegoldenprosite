"use client";

import { motion } from "framer-motion";
import GeometricMesh from "./GeometricMesh";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-mesh bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-24 top-16 hidden opacity-70 md:block lg:-right-8">
        <GeometricMesh variant="hero" />
      </div>

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Founder · Product Builder · AI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-bone md:text-7xl"
        >
          Building products people <span className="text-gold">actually need.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 max-w-xl text-balance font-body text-lg leading-relaxed text-muted md:text-xl"
        >
          I&apos;m Prince GoldenPro, a founder building AI-powered products that help
          founders, developers, homeowners, and businesses solve meaningful problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Explore my work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-gold hover:text-gold"
          >
            Contact me
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-muted/70"
        >
          Shipped solo · Built entirely on a phone · Abuja, Nigeria
        </motion.p>
      </div>
    </section>
  );
}
