"use client";

import { motion } from "framer-motion";
import { SubpageVisual } from "@/components/SubpageVisual";
import { ArrowRight, Layers3, Cpu, Radar, Activity } from "lucide-react";

export default function PlatformPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <SubpageVisual variant="default" />
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/systems" className="transition hover:text-white">Systems</a>
            <a href="/platform" className="transition hover:text-white">Platform</a>
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
            Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            A motion intelligence platform for impossible environments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix is building more than robots. We're creating a motion intelligence
            platform that combines adaptive systems, simulation-driven control, and
            field learning to operate where conventional movement models fail.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Layers3 className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Systems feed the platform
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              Each deployed system generates telemetry that improves the broader motion
              intelligence platform, creating a compounding advantage across robotic
              classes and environments.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Cpu className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Motion intelligence layer
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              The core platform advantage is a control layer that discovers, refines,
              and deploys nonstandard movement strategies across difficult environments.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Radar className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Simulation-to-field loop
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              Movement policies are explored in simulation, transferred into hardware,
              and improved through real-world telemetry - creating a compounding
              advantage over time.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="inline-flex rounded-2xl border border-white/12 bg-white/8 p-3 text-cyan-200">
              <Activity className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Platform moat compounds
            </h2>

            <p className="mt-5 text-base leading-8 text-white/64">
              More deployments create more telemetry. More telemetry improves motion
              policies. Better policies expand system performance. Expanded performance
              increases platform value over time.
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
              A new movement stack in robotics starts with systems that learn
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Explore the broader OddBotix thesis, deployment environments, or
              start a strategic conversation around the technology platform.
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
              href="/systems"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              View Systems
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
