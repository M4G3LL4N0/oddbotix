"use client";

import { motion } from "framer-motion";
import { Cpu, Move3D, Waypoints, Shield, ArrowRight } from "lucide-react";

export default function TechnologyPage() {
  return (
    <>
      <BackgroundLayers />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/technology" className="text-white">Technology</a>
            <a href="/applications" className="transition hover:text-white">Applications</a>
            <a href="/thesis" className="transition hover:text-white">Thesis</a>
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
              <h1 className="text-h1 glow">Motion Intelligence Architecture</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/60">
                Proprietary frameworks for discovering and deploying novel locomotion in constrained environments. Our stack enables machines to move in ways that should not work.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass premium-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Move3D className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-medium">Body Architecture</h2>
                </div>
                <p className="mt-6 text-white/60">
                  Reconfigurable robotic structures that adapt their geometry, posture, and access logic mid-mission. 
                  Our segmented architectures enable movement strategies impossible with conventional designs.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Soft-rigid hybrid structures
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Variable posture control
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Payload-aware balance
                  </li>
                </ul>
              </div>

              <div className="glass premium-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-medium">Control Layer</h2>
                </div>
                <p className="mt-6 text-white/60">
                  A hierarchical control system that discovers, refines, and deploys novel machine movement in the field.
                  Our motion engine learns from simulation and real-world telemetry.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Simulation-to-field flywheel
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Adaptive gait generation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    Environmental adaptation
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 glass premium-card">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-medium">Mission Systems</h2>
                  <p className="mt-4 text-white/60">
                    Integrated payload logic for operating in information-poor, hazardous environments where conventional machines fail.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Waypoints className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Navigation Stack</h3>
                      <p className="mt-1 text-white/60">
                        Proprietary algorithms for constrained-space pathfinding and reorientation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Hazard Mitigation</h3>
                      <p className="mt-1 text-white/60">
                        Systems designed for unstable, contaminated, and high-risk environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28 gradient-bg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h1 glow">Develop With Us</h2>
            <p className="mx-auto mt-6 text-lg text-white/60">
              OddBotix works with strategic partners to deploy our motion intelligence stack in high-value environments.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary-hover"
              >
                Request Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function BackgroundLayers() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}
