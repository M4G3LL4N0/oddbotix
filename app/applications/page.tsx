"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, AlertTriangle, Eye, Map, HardHat } from "lucide-react";

export default function ApplicationsPage() {
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
            <a href="/applications" className="text-white">Applications</a>
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
              <h1 className="text-h1 glow">Strategic Deployment</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/60">
                OddBotix systems are engineered for high-value missions where conventional machines fail. Our technology creates asymmetric advantage in constrained, hazardous, and information-poor environments.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ApplicationCard
                icon={<Factory className="h-6 w-6" />}
                title="Industrial Inspection"
                description="Navigate constrained interiors, hazardous corridors, and difficult access points inside critical infrastructure."
              />
              <ApplicationCard
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Disaster Response"
                description="Map unstable environments, enter compromised spaces, and capture intelligence where conventional machines fail."
              />
              <ApplicationCard
                icon={<Eye className="h-6 w-6" />}
                title="Defense Reconnaissance"
                description="Deploy into uncertain terrain and geometry for high-risk, high-value information gathering."
              />
              <ApplicationCard
                icon={<Map className="h-6 w-6" />}
                title="Subterranean Systems"
                description="Operate across tunnels, pipes, voids, underground infrastructure, and inaccessible networks."
              />
              <ApplicationCard
                icon={<HardHat className="h-6 w-6" />}
                title="Hazardous Access"
                description="Enter and operate in contaminated, high-temperature, or otherwise dangerous environments."
              />
              <ApplicationCard
                icon={<Eye className="h-6 w-6" />}
                title="Remote Intelligence"
                description="Gather data from locations too dangerous or inaccessible for human operators."
              />
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28 gradient-bg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h1 glow">Strategic Deployment</h2>
            <p className="mx-auto mt-6 text-lg text-white/60">
              OddBotix systems are designed for high-value missions where movement intelligence creates asymmetric advantage.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary-hover"
              >
                Discuss Deployment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ApplicationCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="border border-white/5 bg-[#050816] p-8 transition-all hover:border-white/10 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
    </motion.div>
  );
}

function BackgroundLayers() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Background layers content */}
    </div>
  );
}
