"use client";

import { motion } from "framer-motion";
import { SubpageVisual } from "@/components/SubpageVisual";
import {
  ArrowRight,
  Factory,
  Shield,
  Map,
  TriangleAlert,
  Network,
  Radar,
} from "lucide-react";

const applications = [
  {
    title: "Industrial Inspection",
    description:
      "Navigate constrained interiors, hazardous corridors, and difficult access points inside critical infrastructure.",
    icon: Factory,
    emphasis: "High-risk operating environments",
  },
  {
    title: "Disaster Response",
    description:
      "Enter unstable spaces, map compromised structures, and capture field intelligence where conventional machines cannot safely operate.",
    icon: TriangleAlert,
    emphasis: "Rapid access under uncertainty",
  },
  {
    title: "Defense Reconnaissance",
    description:
      "Deploy adaptive robotic systems into uncertain terrain and complex geometry for high-value information gathering.",
    icon: Shield,
    emphasis: "Strategic intelligence capture",
  },
  {
    title: "Subterranean Infrastructure",
    description:
      "Operate across tunnels, pipes, voids, underground corridors, and inaccessible networked spaces.",
    icon: Network,
    emphasis: "Below-ground systems access",
  },
  {
    title: "Hazardous Access",
    description:
      "Approach environments with heat, instability, contamination, or structural complexity that limit direct human entry.",
    icon: Radar,
    emphasis: "Safety through robotic reach",
  },
  {
    title: "Remote Intelligence Mapping",
    description:
      "Generate visual, thermal, and environmental awareness in spaces that are hard to reach, poorly understood, or operationally sensitive.",
    icon: Map,
    emphasis: "Operational understanding at depth",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <SubpageVisual variant="default" />
      <BackgroundLayers />

      <section className="relative px-6 pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200"
          >
            Applications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Where conventional robotics fails
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix is designed for high-complexity operational environments:
            constrained interiors, unstable terrain, subterranean networks,
            hazardous access zones, and mission spaces where standard movement
            models fail.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_34%)] opacity-75 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-white/42">
                    {item.emphasis}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h2>

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
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                Deployment Logic
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Start where the cost of failure is high and access is difficult.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-white/64">
              <p>
                OddBotix is positioned around environments that are operationally
                difficult, geometrically irregular, and expensive to inspect,
                map, or enter using conventional machines.
              </p>
              <p>
                The wedge is not novelty. It is utility in places where movement
                constraints become the defining bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-4">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Next Step
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Deploy robotics where normal access assumptions no longer hold.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              For strategic pilots, field applications, or venture conversations,
              OddBotix is building toward the environments that demand a new
              motion category.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
            >
              Contact OddBotix
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/technology"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Explore Technology
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
