"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Radar,
  ScanLine,
  Waypoints,
  Layers3,
  Activity,
} from "lucide-react";

const stackItems = [
  {
    title: "Motion Intelligence",
    description:
      "A control layer designed to discover, refine, and deploy nonstandard movement strategies across difficult environments.",
    icon: Cpu,
  },
  {
    title: "Simulation-to-Field Loop",
    description:
      "Movement policies are explored in simulation, transferred into hardware, and improved through real-world telemetry.",
    icon: Radar,
  },
  {
    title: "Adaptive Body Logic",
    description:
      "Robotic architectures are framed around posture, geometry, reorientation, and mission-specific access rather than fixed assumptions.",
    icon: Waypoints,
  },
];

const architectureBlocks = [
  {
    title: "Locomotion Layer",
    items: ["Crawl states", "Twist states", "Spiral motion", "Recovery movement"],
  },
  {
    title: "Body Architecture",
    items: ["Segmented geometry", "Soft-rigid hybrids", "Variable posture", "Reorientation"],
  },
  {
    title: "Mission Systems",
    items: ["Thermal sensing", "Vision capture", "Mapping", "Environmental telemetry"],
  },
  {
    title: "Platform Moat",
    items: ["Policy library", "Field telemetry", "Learning loop", "Future licensing"],
  },
];

export default function TechnologyPage() {
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
            <a href="/applications" className="transition hover:text-white">
              Applications
            </a>
            <a href="/thesis" className="transition hover:text-white">
              Thesis
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
            Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Three technical pillars for adaptive robotics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix is being built around motion intelligence, adaptive robotic
            architectures, and simulation-driven deployment logic for environments
            where conventional movement models are not enough.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {stackItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                    {item.title}
                  </h2>
          
                  <div className="mt-1 h-px w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />

                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.94fr_1.06fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <ScanLine className="h-5 w-5" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Simulation-to-Field Flywheel
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Discover movement in software. Validate it in reality.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-white/64">
              <p>
                OddBotix is designed around a loop: explore movement states in
                simulation, transfer the strongest candidates into hardware, then
                use field telemetry to refine future behavior.
              </p>
              <p>
                That creates more than a robot. It creates a compounding system for
                motion discovery, deployment, and long-term platform advantage.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(249,115,22,0.18),transparent_26%)]" />

            <div className="relative">
              <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                <Layers3 className="h-5 w-5" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                Motion Architecture
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {architectureBlocks.map((block) => (
                  <TechBlock key={block.title} title={block.title} items={block.items} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Activity className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Body architecture is part of the intelligence stack.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              In difficult operational environments, success is not determined by
              software alone. Posture, geometry, reorientation, and access logic
              all become part of the system’s effective intelligence.
            </p>

            <p className="mt-4 text-base leading-8 text-white/64">
              OddBotix treats robotic architecture as dynamic and mission-aware,
              not static and assumed.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Cpu className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The moat compounds through deployment.
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-white/64">
              <p>More deployments create more telemetry.</p>
              <p>More telemetry improves motion policies.</p>
              <p>Better policies expand system performance.</p>
              <p>Expanded performance increases platform value over time.</p>
            </div>
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
              A new movement stack in robotics starts with systems that learn.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Explore the broader OddBotix thesis, deployment environments, or
              start a strategic conversation around the technology platform.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/thesis"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
            >
              View Thesis
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

function TechBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/8 bg-black/20 px-3 py-2 text-sm text-white/65"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
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
