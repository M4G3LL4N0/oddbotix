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
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <div className="flex items-center gap-6">
              <a href="/about" className="transition hover:text-white">
                About
              </a>
              <a href="/systems" className="transition hover:text-white">
                Systems
              </a>
              <a href="/technology" className="transition hover:text-white">
                Tech
              </a>
              <a href="/applications" className="transition hover:text-white">
                Applications
              </a>
              <a href="/mission" className="transition hover:text-white">
                Mission
              </a>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-6">
              <a href="/thesis" className="transition hover:text-white">
                Thesis
              </a>
              <a href="/investors" className="transition hover:text-white">
                Investors
              </a>
              <a href="/partners" className="transition hover:text-white">
                Partners
              </a>
              <a href="/careers" className="transition hover:text-white">
                Careers
              </a>
              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </nav>

          <a
            href="/contact"
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
            The physics-defying robotics company.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            We pioneer robotic systems that move in ways physics says shouldn't work,
            solving mobility challenges in environments where conventional machines fail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#systems"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.28)] transition hover:scale-[1.02]"
            >
              View Systems
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#technology"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Explore Technology
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32 }}
            className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <Metric label="Movement class" value="Nonstandard" />
            <Metric label="Target environments" value="High-risk" />
            <Metric label="Positioning" value="Deep-tech" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="relative"
        >
          <HeroPanel />
        </motion.div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="relative px-6 pb-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
            Featured Systems
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Creating a new category: nonstandard locomotion systems
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            OddBotix combines experimental body architectures, motion control
            systems, simulation-driven learning, and mission intelligence into a
            single premium venture layer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_36%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Proprietary motion intelligence as the core IP
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65">
            The long-term advantage is not just unusual hardware. It is a system
            that discovers, refines, simulates, transfers, and deploys motion logic
            across environments, payloads, and future robot classes.
          </p>

          <div className="mt-8 space-y-4">
            <TechRow
              icon={<Radar className="h-5 w-5" />}
              title="Simulation-first discovery"
              copy="Search large movement spaces before physical deployment."
            />
            <TechRow
              icon={<ScanLine className="h-5 w-5" />}
              title="Real-world feedback loop"
              copy="Use field telemetry to improve motion policies over time."
            />
            <TechRow
              icon={<Cpu className="h-5 w-5" />}
              title="Software-defined robotics"
              copy="Make locomotion, posture, and adaptation part of the stack."
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(249,115,22,0.18),transparent_26%)]" />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
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
  );
}

function Applications() {
  return (
    <section id="applications" className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
            Applications
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            High-value applications where conventional robotics cannot operate
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((application) => (
            <ApplicationCard
              key={application.title}
              title={application.title}
              copy={application.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
        <div className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
            Venture Thesis
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Movement intelligence is the next trillion-dollar robotics category
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Robotics has spent years optimizing familiar body plans for familiar
            environments. OddBotix is built around a different assumption:
            difficult environments do not reward conventional motion.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/65">
            The long-term winners will combine adaptive structures, novel movement
            models, simulation-driven control, and field learning into one platform
            that can operate where other machines stall, break, or never enter.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            First-mover advantage in nonstandard locomotion robotics
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/65">
            For pilots, venture conversations, strategic partnerships, or Noaerth
            portfolio integration, this is the entry point.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
          >
            Contact the venture
          </a>

          <a
            href="https://noaerth.com"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Back to Noaerth
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>OddBotix</div>
        <div>Experimental robotics for abnormal locomotion and adaptive systems.</div>
      </div>
    </footer>
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

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.22),transparent_22%),radial-gradient(circle_at_70%_28%,rgba(249,115,22,0.18),transparent_24%),radial-gradient(circle_at_62%_72%,rgba(168,85,247,0.18),transparent_26%)]" />

      <div className="relative rounded-[1.5rem] border border-white/10 bg-[#07101f]/90 p-6">
        <div className="flex items-center justify-between">
          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            Robotics / Infrastructure
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/35">
            Prototype
          </div>
        </div>

        <div className="mt-8">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#09101f_0%,#071524_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.16),transparent_18%),radial-gradient(circle_at_68%_70%,rgba(168,85,247,0.16),transparent_20%)] opacity-80" />

            <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-sm" />

            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(165,243,252,0.9)]" />

              <div className="absolute left-[22%] top-[30%] h-[72px] w-[8px] rotate-[-24deg] rounded-full bg-gradient-to-b from-cyan-200/80 to-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
              <div className="absolute left-[60%] top-[28%] h-[84px] w-[8px] rotate-[28deg] rounded-full bg-gradient-to-b from-violet-200/80 to-violet-400/10 shadow-[0_0_20px_rgba(167,139,250,0.35)]" />
              <div className="absolute left-[30%] top-[58%] h-[78px] w-[8px] rotate-[34deg] rounded-full bg-gradient-to-b from-orange-200/80 to-orange-400/10 shadow-[0_0_20px_rgba(251,146,60,0.35)]" />
              <div className="absolute left-[58%] top-[56%] h-[70px] w-[8px] rotate-[-36deg] rounded-full bg-gradient-to-b from-cyan-200/80 to-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />

              <div className="absolute left-[18%] top-[48%] h-[2px] w-[72px] rotate-[12deg] bg-white/20" />
              <div className="absolute left-[52%] top-[48%] h-[2px] w-[58px] rotate-[-8deg] bg-white/20" />
              <div className="absolute left-[36%] top-[26%] h-[2px] w-[54px] rotate-[28deg] bg-white/20" />
              <div className="absolute left-[34%] top-[68%] h-[2px] w-[54px] rotate-[-24deg] bg-white/20" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/10 bg-black/30 p-4 backdrop-blur-lg">
              <div className="text-sm font-semibold text-white">
                Experimental motion interface
              </div>
              <div className="mt-1 text-sm text-white/60">
                Premium venture concept preview for the Noaerth portfolio layer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-lg">
      <div className="text-xs uppercase tracking-[0.2em] text-white/38">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function TechRow({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4">
      <div className="mt-1 text-cyan-200">{icon}</div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="mt-1 text-sm leading-7 text-white/60">{copy}</div>
      </div>
    </div>
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

function ApplicationCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6">
      <div className="text-xl font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm leading-7 text-white/62">{copy}</div>
    </div>
  );
}
