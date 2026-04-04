"use client";

import { motion } from "framer-motion";
import { ArrowRight, Move3D, Cpu, Waypoints, Shield } from "lucide-react";

export default function ThesisPage() {
  return (
    <>
      <BackgroundLayers />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/technology" className="transition hover:text-white">Technology</a>
            <a href="/applications" className="transition hover:text-white">Applications</a>
            <a href="/thesis" className="text-white">Thesis</a>
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

      <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <h1 className="text-h1 glow">The Movement Intelligence Thesis</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/60">
                Conventional robotics has plateaued in its ability to operate in unstructured environments. The next frontier isn't better sensors or stronger actuators - it's fundamentally new ways for machines to move through the world.
              </p>
            </motion.div>

            <div className="glass premium-card p-12">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-medium">Venture Thesis</h2>
                  <p className="mt-4 text-white/60">
                    Conventional robotics has plateaued in its ability to operate in unstructured environments. 
                    OddBotix is pioneering movement intelligence as a new category in robotics.
                  </p>
                </div>
                <div className="space-y-6">
                  <ThesisPoint
                    icon={<Move3D className="h-5 w-5" />}
                    title="Beyond Wheels & Tracks"
                    description="We develop movement strategies that break conventional assumptions about how machines should move."
                  />
                  <ThesisPoint
                    icon={<Cpu className="h-5 w-5" />}
                    title="Control Layer Innovation"
                    description="Our motion engine discovers and refines novel locomotion strategies in simulation and field conditions."
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="glass premium-card p-8">
                <h2 className="text-2xl font-medium">Why Now</h2>
                <p className="mt-4 text-white/60">
                  Advances in simulation, materials science, and control theory have created an inflection point for novel locomotion architectures.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Computational power for real-time gait optimization
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    New materials enabling hybrid soft-rigid structures
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Growing demand for machines that operate where humans can't
                  </li>
                </ul>
              </div>

              <div className="glass premium-card p-8">
                <h2 className="text-2xl font-medium">Platform Potential</h2>
                <p className="mt-4 text-white/60">
                  OddBotix is building more than products - we're creating a platform for movement intelligence.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Proprietary motion policy library
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Simulation-to-reality transfer pipeline
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    OEM licensing potential
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28 gradient-bg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h1 glow">Invest In Movement</h2>
            <p className="mx-auto mt-6 text-lg text-white/60">
              OddBotix is backed by Noaerth and select strategic investors. We're currently raising our Series A.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary-hover"
              >
                Investor Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ThesisPoint({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-white/60">{description}</p>
      </div>
    </div>
  );
}

function BackgroundLayers() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}
