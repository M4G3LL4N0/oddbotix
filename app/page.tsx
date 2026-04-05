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
            <a href="/technology" className="transition hover:text-white">Technology</a>
            <a href="/applications" className="transition hover:text-white">Applications</a>
            <a href="/thesis" className="transition hover:text-white">Thesis</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
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
      <ApplicationsPreview />
      <TechnologyPreview />
      <ThesisPreview />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,_165,_255,_0.08)_0%,_rgba(5,_8,_22,_0)_70%)] opacity-60" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200 glow-sm"
          >
            Experimental Robotics Venture
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl glow"
          >
            Machines built for movement that <span className="text-primary">should not work</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix develops experimental robotic systems with abnormal locomotion,
            adaptive body logic, and motion intelligence for environments where conventional robots fail.
          </motion.p>

          <motion.div className="mt-10 flex gap-4">
            <a className="rounded-full bg-primary px-6 py-3 font-medium text-black transition hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/20">
              View Systems
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
            <a className="flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 transition hover:bg-white/10">
              Explore Technology
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
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

function TechnologyPreview() {
  return (
    <section id="technology" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-h1 glow">Motion Architecture</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Proprietary frameworks for discovering and deploying novel locomotion
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {architectureBlocks.map((block) => (
            <div key={block.title} className="glass premium-card">
              <h3 className="mb-4 text-xl font-medium text-white">{block.title}</h3>
              <ul className="space-y-2 text-white/60">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsPreview() {
  return (
    <section id="applications" className="relative px-6 py-28 gradient-bg">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-h1 glow">Mission Profiles</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Systems engineered for environments where conventional machines fail
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => (
            <div key={app.title} className="glass rounded-xl p-8">
              <h3 className="mb-3 text-xl font-medium text-white">{app.title}</h3>
              <p className="text-white/60">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThesisPreview() {
  return (
    <section id="thesis" className="relative px-6 py-36">
      <div className="pointer-events-none absolute inset-0 -z-1 bg-grid-white/[0.02]" />
      <div className="mx-auto max-w-7xl">
        <div className="border border-white/5 bg-gradient-to-br from-black via-[#050816] to-black p-16 shadow-2xl shadow-primary/5 backdrop-blur-sm">
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl glow">
                The Physics of <span className="text-primary">Movement</span>
              </h2>
              <p className="text-lg text-white/68">
                We're reinventing how machines interact with physical constraints.
                Our research spans hyper-constrained environments, non-Euclidean
                spaces, and unconventional mobility frameworks.
              </p>
              <div className="pt-4">
                <a
                  href="/thesis"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Our Thesis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <Radar className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-3 text-xl font-semibold text-white">Beyond Wheels & Tracks</h3>
                <p className="text-white/60">
                  Locomotion paradigms that break conventional mechanical assumptions.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <ScanLine className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-3 text-xl font-semibold text-white">Adaptive Body Logic</h3>
                <p className="text-white/60">
                  Machines that reconfigure topology and degrees of freedom on demand.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <Move3D className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-3 text-xl font-semibold text-white">Motion Intelligence</h3>
                <p className="text-white/60">
                  Proprietary control systems that discover and deploy novel locomotion.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <Shield className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-3 text-xl font-semibold text-white">Hazardous Environments</h3>
                <p className="text-white/60">
                  Systems engineered for unstable, contaminated, and high-risk spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative px-6 py-36">
      <div className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(ellipse_at_center,_rgba(74,_165,_255,_0.12)_0%,_rgba(5,_8,_22,_0)_70%)]" />
      <div className="mx-auto max-w-4xl">
        <div className="glass premium-card px-16 py-24 text-center">
          <div className="space-y-10">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl glow">
              Built for the Impossible
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/68">
              Our systems operate where conventional robotics fails. Partner with us to develop specialized mobility solutions for your most challenging environments.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-primary px-10 py-5 text-lg font-bold tracking-tight text-black transition hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/15"
              >
                Partner With Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="/technology"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-medium text-white transition hover:bg-white/10"
              >
                Explore Technology
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-20">
      <div className="gradient-line" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-semibold tracking-tight text-white">OddBotix</span>
            <span className="text-xs tracking-wide text-white/40 uppercase">A Noaerth Ecosystem Company</span>
          </div>
          <div className="mt-8 flex space-x-8 md:mt-0">
            <a href="/technology" className="text-sm text-white/50 transition hover:text-white/90">
              Technology
            </a>
            <a href="/applications" className="text-sm text-white/50 transition hover:text-white/90">
              Applications
            </a>
            <a href="/thesis" className="text-sm text-white/50 transition hover:text-white/90">
              Thesis
            </a>
            <a href="/contact" className="text-sm text-white/50 transition hover:text-white/90">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/30 md:text-left">
          © {new Date().getFullYear()} OddBotix Research. Proprietary technology. All rights strictly enforced.
        </div>
      </div>
    </footer>
  );
}

function BackgroundLayers() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}

function HeroPanel() {
  return (
    <div className="h-[300px] rounded-2xl border border-white/10 bg-white/5">
      {/* Hero panel content */}
    </div>
  );
}
