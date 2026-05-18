import { SubpageVisual } from "@/components/SubpageVisual";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About OddBotix',
  description: 'Pioneering the future of abnormal locomotion and motion intelligence',
}

function BackgroundLayers() {
  return (
      <>
      <SubpageVisual variant="about" />
      <div className="fixed inset-0 -z-10 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
    </>
  );
}

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <BackgroundLayers />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 pt-32 pb-28">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight max-w-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Movement systems for impossible access
          </span>
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-2xl">
          OddBotix is building abnormal locomotion systems and motion intelligence for hazardous, constrained, subterranean, and irregular environments.
        </p>
      </section>
      
      {/* Company Overview */}
      <section className="relative px-8 sm:px-16 lg:px-24 py-28 bg-gradient-to-b from-black via-gray-900/80 to-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">We build machines that move differently</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          <div className="space-y-6 opacity-90">
            <p className="text-lg">
              Founded in stealth, OddBotix develops advanced motion systems that challenge conventional robotics paradigms.
            </p>
            <p className="text-lg">
              We specialize in abnormal locomotion: systems that use geometry, posture, and environment-aware movement to reach places conventional robots struggle to enter.
            </p>
          </div>
          <div className="space-y-6 opacity-90">
            <p className="text-lg">
              Our work sits at the intersection of mechanical engineering, AI, and unconventional computing systems.
            </p>
            <p className="text-lg">
              We're pioneering motion intelligence - the ability for machines to adapt their movement strategies in real-time to complex environments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Worldview */}
      <section className="relative px-8 sm:px-16 lg:px-24 py-28">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight max-w-4xl">
          The world needs machines that can adapt to the environment, not the other way around
        </h2>
        <div className="max-w-2xl space-y-8 text-lg">
          <p>
            Traditional robotics tries to make environments predictable. We believe in machines that thrive in unpredictability.
          </p>
          <p>
            Nature doesn't build perfect mechanisms - it builds adaptable solutions. We take inspiration from biological systems that move effectively without perfect conditions.
          </p>
          <p>
            Our worldview: the future belongs to machines that can navigate complex, unmodified environments through emergent behaviors rather than pre-programmed routines.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="relative px-8 sm:px-16 lg:px-24 py-28 bg-gradient-to-b from-black via-gray-900/80 to-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">Principles guiding our work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              title: 'Emergent Motion',
              description: 'Complex behaviors emerge from simple rules interacting with environments'
            },
            {
              title: 'Adaptive Topology',
              description: 'Systems that can fundamentally change their mechanical configuration when needed'
            },
            {
              title: 'Environmental Coupling',
              description: 'Machines that actively use their environment as part of locomotion strategy'
            }
          ].map((item, index) => (
            <div key={index} className="space-y-4 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="relative px-8 sm:px-16 lg:px-24 py-28">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
          Towards a new era of motion<span className="text-purple-400">.</span>
        </h2>
        <div className="max-w-3xl space-y-8">
          <p className="text-lg">
            We envision a future where machines move with the same adaptive intelligence as biological organisms - perceiving their environment, assessing options, and executing optimal motion strategies in real-time.
          </p>
          <p className="text-lg">
            Our roadmap includes developing motion intelligence cores that can be adapted across industries - from precision agriculture to planetary exploration.
          </p>
          <p className="text-lg font-medium">
            The next decade will see the rise of machines that navigate our world on its own terms. We're building the foundations now.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-8 sm:px-16 lg:px-24 py-36 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Join us in redefining movement</h2>
          <p className="text-xl mb-12 text-gray-300">
            Interested in abnormal locomotion, adaptive systems, or motion intelligence? Reach out to explore collaborations.
          </p>
          <a
            href="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-3 font-medium text-white transition-all hover:scale-105"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}
