"use client";

import { motion } from "framer-motion";
import { ArrowRight, Radar, Shield, Network, ScanSearch, Waypoints, Cpu } from "lucide-react";

const systems = [
  {
    name: "OBX-1",
    title: "Confined-Space Crawler",
    description:
      "A robotic system designed for narrow interiors, compromised access paths, and spaces where conventional wheeled platforms stall.",
    environment: "Pipes, tunnels, voids, critical infrastructure",
    icon: ScanSearch,
  },
  {
    name: "OBX-2",
    title: "Adaptive Terrain Unit",
    description:
      "A movement-first platform built for unstable surfaces, geometry changes, and high-friction operational terrain.",
    environment: "Rubble, industrial sites, irregular terrain",
    icon: Waypoints,
  },
  {
    name: "OBX-3",
    title: "Hazard Reconnaissance System",
    description:
      "An intelligence-oriented robotic system for entering hazardous environments and capturing mission-critical field data.",
    environment: "Heat, contamination, instability, high-risk zones",
    icon: Shield,
  },
  {
    name: "OBX-4",
    title: "Subterranean Mapping Platform",
    description:
      "A system focused on navigation, mapping, and environmental sensing inside underground infrastructure and inaccessible networks.",
    environment: "Subsurface corridors, networked underground systems",
    icon: Network,
  },
  {
    name: "OBX-5",
    title: "Remote Intelligence Unit",
    description:
      "A flexible robotic platform built to gather visual, thermal, and environmental awareness where human access is limited or delayed.",
    environment: "Hard-access strategic environments",
    icon: Radar,
  },
];

export default function SystemsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/technology" className="transition hover:text-white">Technology</a>
            <a href="/applications" className="transition hover:text-white">Applications</a>
            <a href="/thesis" className="transition hover:text-white">Thesis</a>
            <a href="/investors" className="transition hover:text-white">Investors</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
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
            Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Systems designed for environments that resist normal machines.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix frames robotics as a systems category: movement, structure,
            intelligence, and mission adaptation built together for operationally difficult environments.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {systems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_34%)] opacity-75 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                      {system.name}
                    </div>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                    {system.title}
                  </h2>
          
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
                    {system.name}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {system.description}
                  </p>

                  <div className="mt-6 rounded-[1rem] border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Environment
                    </div>
                    <div className="mt-2 text-sm text-white/80">
                      {system.environment}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Waypoints className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The systems are different because the movement assumptions are different.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              OddBotix does not start from wheels, tracks, or humanoid expectations.
              It starts from access difficulty, geometry, instability, and mission constraints.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Cpu className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Each deployed system strengthens the broader motion stack.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              The long-term opportunity compounds through deployments, telemetry,
              control refinement, and future platform expansion across additional robotic classes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Next Step
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Start with systems. Expand into a category.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              For pilot systems, strategic partnerships, or venture conversations,
              OddBotix is building toward a new operational layer in robotics.
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
              href="/investors"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              View Investors
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
