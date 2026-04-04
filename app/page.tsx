import { ArrowRight, Move3d, Gauge, Shield, Settings2, Factory } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-3xl font-extrabold tracking-tight">
          OddBotix
        </a>
        <nav className="hidden md:flex items-center gap-12">
          {['Systems', 'Technology', 'Applications', 'Thesis', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block px-8 py-2.5 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors font-medium"
        >
          Investor Briefing
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/25 opacity-40">
        <motion.svg
          animate={{ rotation: 360 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width={240}
          height={240}
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="4"
            fill="none"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-h1 glow mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Movement Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-300 mt-3 investor-copy"
        >
          We engineer adaptive locomotion architectures that empower robots to thrive where conventional systems falter, delivering unmatched mobility in the most demanding environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#systems"
            className="inline-block px-9 py-3 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors font-medium"
          >
            Technical Deep‑Dive
          </a>
          <a
            href="#contact"
            className="inline-block px-9 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/5 transition-colors font-medium"
          >
            Investor Pack
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">{title}</h2>
      <p className="mt-2 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function PremiumCard({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className="premium-card p-6 rounded-xl backdrop-blur-sm"
    >
      {icon}
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}

function Systems() {
  return (
    <section id="systems" className="section-spacing py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Core Systems"
          subtitle="Proprietary architectures that deliver unprecedented mobility across unstructured terrains"
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {[

            { icon: Move3d, title: "Abnormal Locomotion", description: "Multi‑modal movement capabilities for chaotic environments" },

            { icon: Gauge, title: "Adaptive Structures", description: "Reconfigurable bodies that evolve with mission demands" },

            { icon: Shield, title: "Confined‑Space Intelligence", description: "Autonomous navigation in tight, hazardous spaces" },

            { icon: Settings2, title: "Motion Engine", description: "Real‑time optimization of movement dynamics" }

          ].map((item, i) => (
            <PremiumCard key={i} icon={<item.icon className="w-10 h-10 text-primary" />} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="section-spacing py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Motion Intelligence"
          subtitle="A control layer that fuses machine learning with physics‑based simulation for field‑ready performance"
        />
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Adaptive Control</h3>
              <p className="text-zinc-300">
                Seamless integration of real‑time learning and deterministic physics ensures robust operation across diverse scenarios.
              </p>
            </div>
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Field Intelligence</h3>
              <p className="text-zinc-300">
                Autonomous decision‑making that thrives in dynamic, unstructured environments without human intervention.
              </p>
            </div>
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Simulation Pipeline</h3>
              <p className="text-zinc-300">
                High‑fidelity, physics‑accurate simulation that accelerates prototyping and reduces field‑testing cycles.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="aspect-video bg-tertiary rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay                muted
                loop
                playsInline                src="/video/technology.mp4"
                alt="Robotics simulation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="applications" className="section-spacing py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Applications"
          subtitle="Our systems redefine what robotics can achieve in the most demanding sectors"
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {[            { icon: Factory, title: "Industrial Inspection", description: "Autonomous inspection of hazardous infrastructure with zero‑risk exposure" },

            { icon: Shield, title: "Disaster Response", description: "Search‑and‑rescue capabilities in collapsed structures and unstable terrain" },

            { icon: Settings2, title: "Defense Reconnaissance", description: "Stealthy, adaptive platforms for covert surveillance" }

          ].map((item, i) => (
            <PremiumCard key={i} icon={<item.icon className="w-10 h-10 text-primary" />} title={item.title} description={item.description} />
          ))}
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="section-spacing py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Venture Thesis"
          subtitle="The future of robotics is defined by movement intelligence and adaptive architectures"
        />
        <div className="mt-16 max-w-3xl mx-auto space-y-8">
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Movement Intelligence</h3>
            <p className="text-zinc-300">
              We contend that true robotic advancement lies not merely in artificial intelligence, but in the capacity to move intelligently and adapt physically to complex environments.
            </p>
          </div>
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Adaptive Architectures</h3>
            <p className="text-zinc-300">
              Our modular, reconfigurable designs enable a single platform to execute diverse missions, dramatically reducing total cost of ownership.
            </p>
          </div>
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Field‑Ready Systems</h3>
            <p className="text-zinc-300">
              From simulation to real‑world deployment, our systems are engineered for reliability, durability, and immediate operational impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-spacing py-32 gradient-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Partner with the Leaders in Adaptive Robotics
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
          Invest in a technology stack that delivers unparalleled mobility, reduces operational risk, and opens new market opportunities for the next generation of autonomous systems.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-12 py-3 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors font-medium"
          >
            Schedule Briefing
          </a>
          <a
            href="https://noaerth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/5 transition-colors font-medium"
          >
            Noaerth Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-semibold">OddBotix</div>
        <div className="mt-4 text-sm text-zinc-300">
          © {new Date().getFullYear()} OddBotix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Systems />
      <Technology />
      <Applications />
      <Thesis />
      <CTA />
      <Footer />
    </div>
  );
}
