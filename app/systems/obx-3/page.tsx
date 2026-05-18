import { SubpageVisual } from "@/components/SubpageVisual";
const BackgroundLayers = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  </div>
);

export default function OBX3Page() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="relative min-h-screen bg-black text-white">
      <BackgroundLayers />
      
      {/* Hero Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-1 mb-6 text-gray-400 text-sm">
            <span>Experimental Robotics Venture</span>
            <span>Motion Intelligence Systems</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">OBX-3</h1>
          <h2 className="text-3xl font-medium text-gray-300">
            Hazard Reconnaissance System
          </h2>
          <div className="mt-6 text-gray-400 text-sm">
            Noaerth Portfolio Company
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">System Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                The OBX-3 is a hazard reconnaissance system concept for dangerous environments where remote visual, thermal, and environmental awareness can reduce uncertainty before people enter.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white mr-3" />
                  Multi-spectral sensor array
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white mr-3" />
                  Autonomous navigation in GPS-denied environments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white mr-3" />
                  Environmental risk assessment workflow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Reconnaissance</h4>
              <p className="text-gray-300">
                360° situational awareness with multi-spectral imaging and LIDAR mapping
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Hazard Detection</h4>
              <p className="text-gray-300">
                Designed to support chemical, biological, radiological, and environmental risk workflows when validated sensors are integrated
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Autonomy</h4>
              <p className="text-gray-300">
                Self-guided operation in complex environments with obstacle avoidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Operational Environments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Extreme Conditions</h4>
              <p className="text-gray-300">
                Designed toward operation in heat, contamination, dust, debris, and other field constraints
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Hostile Terrain</h4>
              <p className="text-gray-300">
                Designed for rubble, industrial sites, constrained structures, and other high-risk access zones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Logic */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Design Logic</h3>
          <p className="text-lg leading-relaxed max-w-3xl">
            The OBX-3 design logic starts with the operator's need to understand risk before committing people or larger assets. The system emphasizes durable sensing, constrained movement, and clear field intelligence.
          </p>
        </div>
      </section>

      {/* Role in OddBotix Platform */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Role in OddBotix Platform</h3>
          <p className="text-lg leading-relaxed max-w-3xl">
            As part of the OddBotix ecosystem, OBX-3 is intended to feed field intelligence into mission planning, system selection, and future motion policy refinement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-6">Ready to Deploy?</h3>
            <p className="text-lg mb-8">
              Contact our team to discuss how the OBX-3 can enhance your operations.
            </p>
            <a
              href="/contact"
              className="inline-flex rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-200"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}
