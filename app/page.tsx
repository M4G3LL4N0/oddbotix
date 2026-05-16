"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Factory,
  Map,
  Menu,
  Radar,
  ScanSearch,
  ShieldAlert,
  Waypoints,
  X,
} from "lucide-react";
import Footer from "./footer";

const navItems = [
  ["About", "/about"],
  ["Systems", "/systems"],
  ["Technology", "/technology"],
  ["Applications", "/applications"],
  ["Mission", "/mission"],
  ["Investors", "/investors"],
  ["Contact", "/contact"],
];

const systems = [
  {
    name: "OBX-1",
    title: "Confined-Space Crawler",
    environment: "Pipes, tunnels, voids, collapsed interiors",
    icon: ScanSearch,
  },
  {
    name: "OBX-2",
    title: "Adaptive Terrain Unit",
    environment: "Unstable ground, rubble, industrial terrain",
    icon: Waypoints,
  },
  {
    name: "OBX-3",
    title: "Hazard Reconnaissance System",
    environment: "Visual, thermal, and environmental intelligence",
    icon: ShieldAlert,
  },
  {
    name: "OBX-4",
    title: "Subterranean Mapping Platform",
    environment: "Underground infrastructure and hard-access networks",
    icon: Map,
  },
  {
    name: "OBX-5",
    title: "Remote Intelligence Unit",
    environment: "Delayed-access sensing and remote awareness",
    icon: Radar,
  },
];

const proofPoints = [
  "Mission-oriented robotic systems",
  "Adaptive body logic",
  "Simulation-to-field learning",
  "Deployment telemetry",
  "Motion policy library",
  "Future licensing and OEM paths",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen overflow-x-hidden text-white motion-fade-up">
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setMenuOpen(false)}>
            OddBotix
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/68 lg:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:bg-white/15 sm:inline-flex"
            >
              Request Access
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white transition hover:border-cyan-300/35 hover:bg-white/[0.1] lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                Request Access
              </Link>
              <p className="px-3 pt-2 text-[11px] leading-relaxed text-white/45">
                Robotics concepts shown here are engineering narratives for planning — not field-certified
                systems or operational guarantees.
              </p>
            </nav>
          </div>
        ) : null}
      </header>

      <section className="relative px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200"
            >
              Noaerth portfolio company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Movement intelligence for places conventional robots fail.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              OddBotix is an experimental robotics venture building abnormal
              locomotion systems, adaptive machine movement, and a motion stack
              for constrained, hazardous, subterranean, and high-complexity environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
              >
                Explore Systems
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Technology
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101f] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_65%_85%,rgba(249,115,22,0.16),transparent_28%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                    System Family
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    OBX mission stack
                  </h2>
                </div>
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Cpu className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {systems.map((system) => {
                  const Icon = system.icon;

                  return (
                    <Link
                      key={system.name}
                      href={`/systems/${system.name.toLowerCase()}`}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
                    >
                      <span className="rounded-xl border border-white/10 bg-white/8 p-2 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {system.name} · {system.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-white/52">
                          {system.environment}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:text-white/75" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Category Thesis
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Movement is the next control layer in robotics.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/64">
              Robotics usually begins with familiar forms: wheels, tracks, arms,
              humanoid templates. OddBotix begins with environmental constraints:
              access geometry, instability, risk, sensing limits, and mission intent.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5"
              >
                <div className="mb-5 h-px w-14 bg-gradient-to-r from-cyan-300 via-violet-300 to-orange-300" />
                <p className="text-sm font-medium leading-7 text-white/78">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <FeaturePanel
            icon={<Factory className="h-5 w-5" />}
            title="Industrial access"
            copy="Infrastructure operators need machines that can enter pipes, voids, rubble, and inspection paths without remaking the environment first."
          />
          <FeaturePanel
            icon={<ShieldAlert className="h-5 w-5" />}
            title="Hazard intelligence"
            copy="Dangerous zones require remote visual, thermal, and environmental awareness before people or larger systems can safely enter."
          />
          <FeaturePanel
            icon={<Waypoints className="h-5 w-5" />}
            title="Platform expansion"
            copy="Each mission system can feed a broader library of motion policies, deployment telemetry, and future OEM motion intelligence."
          />
        </div>
      </section>

      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Build Direction
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A serious robotics skunkworks with a platform path.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              OddBotix is being shaped for pilot partners, strategic robotics
              collaborators, and investors who understand that physical intelligence
              starts with how machines move.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
            >
              Contact OddBotix
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Investor Narrative
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeaturePanel({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/18">
      <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/62">{copy}</p>
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
