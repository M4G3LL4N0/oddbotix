"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChartNoAxesCombined, Cpu, Factory, Shield, Waypoints } from "lucide-react";

const marketSegments = [
  {
    title: "Industrial Automation",
    description:
      "Next-gen inspection and operations in high-value facilities with constrained access, hazardous conditions, or complex geometries.",
    icon: Factory,
  },
  {
    title: "Defense & Security",
    description:
      "Mission-critical systems for contested environments where terrain adaptability and operational resilience dominate capability requirements.",
    icon: Shield,
  },
  {
    title: "Motion Intelligence Platform",
    description:
      "A control-layer and learning-loop opportunity that can expand beyond individual robotic systems.",
    icon: Cpu,
  },
];

const pillars = [
  {
    title: "Problem",
    copy:
      "Conventional robotics is still optimized around familiar movement models for predictable environments. Many of the highest-value environments are neither predictable nor accessible.",
  },
  {
    title: "Solution",
    copy:
      "OddBotix is building robotic systems around abnormal locomotion, adaptive machine structures, and motion intelligence designed for complex operational environments.",
  },
  {
    title: "Why Now",
    copy:
      "Simulation, reinforcement learning, embedded compute, and sensing have advanced enough to make new movement categories commercially viable.",
  },
  {
    title: "Platform Expansion",
    copy:
      "Beyond hardware systems, we're building a motion intelligence layer - control policies, simulation environments, and learning architectures that will define next-gen robotic movement.",
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/systems" className="transition hover:text-white">
              Systems
            </a>
            <a href="/technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="/applications" className="transition hover:text-white">
              Applications
            </a>
            <a href="/thesis" className="transition hover:text-white">
              Thesis
            </a>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Investor Inquiry
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
            Venture Opportunity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Movement intelligence as the next robotics platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix is commercializing adaptive robotic architectures for environments 
            that break conventional automation. This is a multi-billion dollar wedge into 
            industrial, defense, and infrastructure automation where movement is the limiting factor.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                Investment Thesis
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Movement is becoming the next control surface in robotics.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-white/64">
              <p>
                Robotics has historically centered on familiar body plans and
                familiar environments. That leaves major opportunity in spaces that
                are constrained, irregular, hazardous, subterranean, unstable, or
                operationally complex.
              </p>
              <p>
                OddBotix is positioned around the idea that movement intelligence,
                adaptive structures, and nonstandard robotic architectures can unlock
                a new operating layer for these environments.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  {pillar.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/64">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Market Surface
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              The wedge is high-value environments where motion is the bottleneck.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {marketSegments.map((segment) => {
              const Icon = segment.icon;

              return (
                <div
                  key={segment.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_34%)] opacity-75 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                      {segment.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/64">
                      {segment.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Waypoints className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Not just a robot company. A motion stack company.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/64">
              The long-term expansion path extends from systems to control logic,
              field telemetry, motion-policy libraries, adaptive architectures,
              licensing, and future OEM integration.
            </p>
            <p className="mt-4 text-base leading-8 text-white/64">
              That makes the opportunity broader than any single machine: it creates
              the potential for a compounding technical moat built around movement,
              deployment, and learning.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <ChartNoAxesCombined className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Why now.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-white/64">
              <p>Simulation environments are stronger.</p>
              <p>Embedded compute and sensing are better.</p>
              <p>AI makes novel movement discovery more viable.</p>
              <p>Demand is rising for automation in hazardous and labor-constrained environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Capital Partners
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Position at the genesis of adaptive robotics.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              We're assembling a select group of venture partners to scale this technical frontier. 
              Our Series A will accelerate commercialization across defense, industrial, 
              and infrastructure applications.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
            >
              Contact OddBotix
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://noaerth.com"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Visit Noaerth
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
