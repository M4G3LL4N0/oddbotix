import { SubpageVisual } from "@/components/SubpageVisual";
const BackgroundLayers = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-800/50 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/50 to-transparent" />
  </div>
);

export default function RoadmapPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="relative min-h-screen">
      <BackgroundLayers />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold text-white mb-4">
            Building the Future of Robotics
          </h1>
          <p className="text-gray-300 text-lg">
            OddBotix is engineering a comprehensive robotics platform that will
              improve how machines move through hard physical environments. Our roadmap
            outlines the strategic progression toward this vision.
          </p>
        </section>

        {/* Phase 1 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-300 font-medium">1</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Core Systems Development
            </h2>
          </div>
          <p className="text-gray-300 pl-16">
            Establishing the foundational architecture for modular robotics,
            including OBX system taxonomy, adaptive body logic, sensing plans,
            and safety protocols.
          </p>
        </section>

        {/* Phase 2 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-300 font-medium">2</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Motion Intelligence Stack
            </h2>
          </div>
          <p className="text-gray-300 pl-16">
            Developing advanced motion planning and control algorithms,
            integrating sensor fusion, and implementing adaptive learning
            capabilities for dynamic environments.
          </p>
        </section>

        {/* Phase 3 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-300 font-medium">3</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Deployment Learning Loop
            </h2>
          </div>
          <p className="text-gray-300 pl-16">
            Developing partner-ready pilot workflows and feedback loops so
            real-world telemetry can improve future movement policies.
          </p>
        </section>

        {/* Phase 4 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-300 font-medium">4</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Platform Expansion & Licensing
            </h2>
          </div>
          <p className="text-gray-300 pl-16">
            Expanding toward licensing and OEM opportunities once the system
            family and motion policy library are validated through focused use cases.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-32">
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Shaping the Future of Robotics
            </h2>
            <p className="text-gray-300 mb-6">
              Join us in building the next generation of intelligent robotics
              systems. Explore partnership opportunities to be part of this
              transformative journey.
            </p>
            <a
              href="/contact"
              className="inline-flex rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  </>
  )
}
