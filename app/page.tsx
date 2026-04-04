"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Radar,
  Shield,
  Waypoints,
  ScanLine,
  Move3D,
} from "lucide-react";

const features = [
  {
    title: "Abnormal Locomotion",
    description:
      "Movement strategies designed beyond wheels, tracks, and standard humanoid assumptions.",
    icon: Move3D,
  },
  {
    title: "Adaptive Structures",
    description:
      "Reconfigurable robotic architectures that shift posture, geometry, and access logic mid-mission.",
    icon: Waypoints,
  },
  {
    title: "Confined-Space Intelligence",
    description:
      "Systems designed for narrow, unstable, hazardous, and information-poor environments.",
    icon: Shield,
  },
  {
    title: "Motion Engine",
    description:
      "A control layer for discovering, refining, and deploying novel machine movement in the field.",
    icon: Cpu,
  },
];

const applications = [
  {
    title: "Industrial Inspection",
    description:
      "Navigate constrained interiors, hazardous corridors, and difficult access points inside critical infrastructure.",
  },
  {
    title: "Disaster Response",
    description:
      "Map unstable environments, enter compromised spaces, and capture intelligence where conventional machines fail.",
  },
  {
    title: "Defense Reconnaissance",
    description:
      "Deploy into uncertain terrain and geometry for high-risk, high-value information gathering.",
  },
  {
    title: "Subterranean Systems",
    description:
      "Operate across tunnels, pipes, voids, underground infrastructure, and inaccessible networks.",
  },
];

const architectureBlocks = [
  {
    title: "Locomotion Models",
    items: ["Crawl", "Twist", "Spiral", "Asymmetric gait", "Recovery states"],
  },
  {
    title: "Body Logic",
    items: [
      "Soft-rigid hybrid",
      "Segmented geometry",
      "Variable posture",
      "Reorientation",
      "Payload-aware balance",
    ],
  },
  {
    title: "Mission Stack",
    items: [
      "Thermal sensing",
      "Vision systems",
      "Mapping",
      "Environmental data",
      "Operator assist",
    ],
  },
  {
    title: "Platform Advantage",
    items: [
      "Training flywheel",
      "Field telemetry",
      "Policy library",
      "Future licensing",
      "OEM potential",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#systems" className="transition hover:text-white">Systems</a>
            <a href="#technology" className="transition hover:text-white">Technology</a>
            <a href="#applications" className="transition hover:text-white">Applications</a>
            <a href="#thesis" className="transition hover:text-white">Thesis</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Request Access
          </a>
        </div>
      </header>

      <Hero />
      <Systems />
      <Technology />
      <Applications />
      <Thesis />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200"
          >
            Experimental Robotics Venture
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Machines built for movement that should not work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix develops experimental robotic systems with abnormal locomotion,
            adaptive body logic, and motion intelligence.
          </motion.p>

          <motion.div className="mt-10 flex gap-4">
            <a className="rounded-full bg-white px-6 py-3 text-black">View Systems</a>
            <a className="rounded-full border border-white/20 px-6 py-3">Explore</a>
          </motion.div>
        </div>

        <HeroPanel />
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="px-6 py-20">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="rounded-2xl border border-white/10 p-6">
              <Icon className="mb-4" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-white/60">{f.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Technology() {
  return <section id="technology" className="px-6 py-20">Technology</section>;
}

function Applications() {
  return <section id="applications" className="px-6 py-20">Applications</section>;
}

function Thesis() {
  return <section id="thesis" className="px-6 py-20">Thesis</section>;
}

function FinalCta() {
  return <section id="contact" className="px-6 py-20">Contact</section>;
}

function Footer() {
  return <footer className="px-6 py-10 text-white/40">OddBotix</footer>;
}

function BackgroundLayers() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}

function HeroPanel() {
  return (
    <div className="h-[300px] rounded-2xl border border-white/10 bg-white/5" />
  );
}
