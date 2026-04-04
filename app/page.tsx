import { ArrowRight, Move3d, Gauge, Shield, Settings2, Factory } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-semibold">OddBotix</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#systems" className="hover:text-primary transition-colors">Systems</a>
          <a href="#technology" className="hover:text-primary transition-colors">Technology</a>
          <a href="#applications" className="hover:text-primary transition-colors">Applications</a>
          <a href="#thesis" className="hover:text-primary transition-colors">Thesis</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="px-6 py-2 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Redefining Robotic Movement
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-zinc-400"
            >
              Venture-backed robotics company pioneering movement intelligence and adaptive architectures for high-risk environments.
            </motion.p>
            <div className="mt-8 flex gap-4">
              <a
                href="#systems"
                className="px-6 py-3 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors"
              >
                Explore Systems
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">
            {[
              { title: "Patents Filed", value: "12+" },
              { title: "Years in R&D", value: "5+" },
              { title: "Field Tests", value: "200+" },
              { title: "Locomotion Modes", value: "8+" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 glass rounded-lg hover-scale"
              >
                <div className="text-2xl font-semibold">{item.value}</div>
                <div className="mt-2 text-sm text-zinc-400">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Systems() {
  return (
    <section id="systems" className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Core Systems"
          subtitle="Our proprietary architectures enable unprecedented mobility in complex environments"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: Move3d,
              title: "Abnormal Locomotion",
              description: "Multi-modal movement capabilities for unstructured terrain"
            },
            {
              icon: Gauge,
              title: "Adaptive Structures",
              description: "Reconfigurable body architectures for dynamic environments"
            },
            {
              icon: Shield,
              title: "Confined-Space Intelligence",
              description: "Autonomous navigation in constrained spaces"
            },
            {
              icon: Settings2,
              title: "Motion Engine",
              description: "Real-time movement optimization and control"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-lg hover-scale"
            >
              <item.icon className="w-8 h-8 text-primary" />
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Motion Intelligence"
          subtitle="Our proprietary control layer enables seamless simulation-to-field deployment"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Adaptive Control</h3>
              <p className="mt-2 text-zinc-400">
                Real-time movement optimization using machine learning and physics-based models
              </p>
            </div>
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Field Intelligence</h3>
              <p className="mt-2 text-zinc-400">
                Autonomous decision making in dynamic, unstructured environments
              </p>
            </div>
            <div className="p-8 glass rounded-lg">
              <h3 className="text-xl font-semibold">Simulation Pipeline</h3>
              <p className="mt-2 text-zinc-400">
                High-fidelity simulation environment for rapid prototyping and testing
              </p>
            </div>
          </div>
          <div className="p-8 glass rounded-lg">
            <div className="aspect-video bg-tertiary rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="applications" className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Applications"
          subtitle="Our systems are transforming industries where conventional robotics fail"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: Factory,
              title: "Industrial Inspection",
              description: "Autonomous inspection in hazardous industrial environments"
            },
            {
              icon: Shield,
              title: "Disaster Response",
              description: "Search and rescue operations in collapsed structures"
            },
            {
              icon: Settings2,
              title: "Defense Reconnaissance",
              description: "Stealthy reconnaissance in complex terrain"
            },
            {
              icon: Move3d,
              title: "Subterranean Systems",
              description: "Autonomous navigation in underground environments"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-lg hover-scale"
            >
              <item.icon className="w-8 h-8 text-primary" />
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Venture Thesis"
          subtitle="The future of robotics will be defined by movement intelligence and body adaptability"
        />
        <div className="mt-16 max-w-3xl mx-auto space-y-8">
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Movement Intelligence</h3>
            <p className="mt-2 text-zinc-400">
              We believe that the next frontier in robotics is not just about AI, but about how machines move and adapt to their environment. Our focus on movement intelligence enables robots to operate in environments where traditional systems fail.
            </p>
          </div>
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Adaptive Architectures</h3>
            <p className="mt-2 text-zinc-400">
              The ability to dynamically reconfigure a robot's physical structure allows for unprecedented versatility. Our adaptive architectures enable a single platform to perform multiple functions across diverse environments.
            </p>
          </div>
          <div className="p-8 glass rounded-lg">
            <h3 className="text-xl font-semibold">Field-Ready Systems</h3>
            <p className="mt-2 text-zinc-400">
              We bridge the gap between simulation and real-world deployment, ensuring our systems are robust and reliable in the most challenging conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Ready to Transform Robotic Movement?</h2>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore how OddBotix can revolutionize your operations with adaptive robotics
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-background hover:bg-primary-hover transition-colors"
            >
              Request Demo
            </a>
            <a
              href="https://noaerth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
            >
              Learn About Noaerth
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-semibold">OddBotix</div>
          <div className="mt-4 md:mt-0 text-sm text-zinc-400">
            © {new Date().getFullYear()} OddBotix. Part of the Noaerth ecosystem.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
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
