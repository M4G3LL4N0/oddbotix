"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Mountain, ShieldAlert, Waypoints } from "lucide-react";

const pillars = [
  {
    title: "Conventional robotics is too constrained",
    copy:
      "Most systems are still optimized around familiar movement assumptions, predictable surfaces, and clean operating environments.",
    icon: ShieldAlert,
  },
  {
    title: "Hard environments change the design logic",
    copy:
      "In unstable, narrow, hazardous, subterranean, or irregular spaces, movement becomes the main bottleneck rather than a secondary implementation detail.",
    icon: Mountain,
  },
  {
    title: "Movement intelligence becomes the category",
    copy:
      "OddBotix is built around the idea that control, posture, adaptation, and locomotion form a compounding technical stack.",
    icon: Cpu,
  },
];

const beliefs = [
  "Robotics should be designed from the environment backward, not from familiar machine archetypes forward.",
  "Adaptive body logic matters as much as control logic in difficult operational spaces.",
  "The long-term advantage is not one machine, but a movement stack that improves through deployment and telemetry.",
  "The best robotics companies of the next cycle will behave like platform companies, not just hardware vendors.",
];

export default function MissionPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/about" className="transition hover:text-white">
              About
            </a>
            <a href="/systems" className="transition hover:text-white">
              Systems
            </a>
            <a href="/technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="/applications" className="transition hover:text-white">
              Applications
            </a>
            <a href="/investors" className="transition hover:text-white">
              Investors
            </a>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Request Access
          </a>
        </div>
      </header>

      <section className="relative px-6 pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200"
          >
            Mission
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Build robotics for the environments that break normal assumptions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix exists to push robotics beyond familiar movement models and
            into the high-complexity environments where access, adaptation, and
            motion intelligence matter most.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_34%)] opacity-75 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {pillar.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Waypoints className="h-5 w-5" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Worldview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              The mission is not to imitate existing robotics. It is to redefine the movement layer.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-white/64">
              <p>
                OddBotix is built around the idea that many of the most valuable
                operational environments remain under-served because robots are
                still designed around simplified, familiar movement logic.
              </p>
              <p>
                In the long run, the strongest companies in this space will own
                not only systems, but the intelligence stack that governs how
                those systems move, adapt, and improve.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Core Beliefs
            </p>

            <div className="mt-6 space-y-4">
              {beliefs.map((belief) => (
                <div
                  key={belief}
                  className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68"
                >
                  {belief}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Expansion Path
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Start with hard environments. Expand into a platform.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              The first wedge is high-value operating environments where access is
              hard and failure is expensive. Over time, the opportunity expands
              into broader motion intelligence, adaptive systems, deployment
              telemetry, and future licensing or platform layers across robotics.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Next Step
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Build the movement category deliberately.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Explore the systems, technology stack, and venture thesis behind
              OddBotix or start a strategic conversation directly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/technology"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
            >
              Explore Technology
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Contact OddBotix
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function BackgroundLayers() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,80,180,0.18),transparent_35%),linear-gradient(180deg,#040714_0%,#050816_45%,#040713_100%)]" />
      <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute right-[-10rem] top-[4rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[20%] h-[28rem] w-[28rem] rounded-full bg-orange-400/8 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}
