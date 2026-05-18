import { SubpageVisual } from "@/components/SubpageVisual";
const BackgroundLayers = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-black/95 backdrop-blur-[2px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  </div>
);

export default function DeckPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="min-h-screen text-white">
      <BackgroundLayers />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl space-y-32">
        {/* Cover */}
        <section className="text-center">
          <h1 className="text-6xl font-bold mb-4">OddBotix</h1>
          <p className="text-xl text-gray-300">
            Redefining Robotics Through Movement Intelligence
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-4xl font-bold mb-8">The Problem</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Conventional robotics fails in constrained, hazardous, irregular, and operationally complex environments.
            </p>
            <p>
              Movement remains the fundamental bottleneck in robotic capability.
            </p>
          </div>
        </section>

        {/* Insight */}
        <section>
          <h2 className="text-4xl font-bold mb-8">The Insight</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The next control surface in robotics is movement intelligence.
            </p>
            <p>
              Adaptive body logic matters more than brute force computation.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <div className="space-y-4 text-gray-300">
            <p className="font-medium">OddBotix:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Abnormal locomotion systems</li>
              <li>Adaptive control architectures</li>
              <li>Motion intelligence platform</li>
            </ul>
          </div>
        </section>

        {/* Systems */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Systems</h2>
          <div className="space-y-4 text-gray-300">
            <p>OBX-1: Confined-Space Crawler</p>
            <p>OBX-2: Adaptive Terrain Unit</p>
            <p>OBX-3: Hazard Reconnaissance System</p>
            <p>OBX-4: Subterranean Mapping Platform</p>
            <p>OBX-5: Remote Intelligence Unit</p>
          </div>
        </section>

        {/* Technology */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Technology</h2>
          <div className="space-y-4 text-gray-300">
            <p>Simulation-to-field development loop</p>
            <p>Unified control layer</p>
            <p>Real-time telemetry system</p>
            <p>Platform moat through motion intelligence</p>
          </div>
        </section>

        {/* Market */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Market</h2>
          <div className="space-y-4 text-gray-300">
            <p>Industrial automation</p>
            <p>Defense applications</p>
            <p>Infrastructure maintenance</p>
            <p>Hazardous environment access</p>
            <p>Subterranean systems</p>
          </div>
        </section>

        {/* Why Now */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Why Now</h2>
          <div className="space-y-4 text-gray-300">
            <p>AI enables adaptive control</p>
            <p>Simulation maturity accelerates development</p>
            <p>Hardware reaches critical capability</p>
            <p>Labor constraints drive automation demand</p>
          </div>
        </section>

        {/* Business Vision */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Business Vision</h2>
          <div className="space-y-4 text-gray-300">
            <p>Systems-first approach</p>
            <p>Stack integration</p>
            <p>Platform development</p>
            <p>Future licensing & OEM opportunities</p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">The Future of Robotics</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're building the movement intelligence layer for the next generation of robotics.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors"
          >
            Start the Conversation
          </a>
        </section>
      </div>
    </div>
  </>
  )
}
