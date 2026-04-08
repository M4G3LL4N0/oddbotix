const BackgroundLayers = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  </div>
);

export default function OBX3Page() {
  return (
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
                The OBX-3 is a cutting-edge reconnaissance platform designed for extreme environment operations. Built with military-grade components and proprietary OddBotix AI, it delivers unparalleled situational awareness in hazardous conditions.
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
                  Real-time threat assessment AI
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
                Chemical, biological, and radiological threat identification with 99.7% accuracy
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
                Rated for operation in temperatures from -40°C to 85°C and winds up to 120 km/h
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Hostile Terrain</h4>
              <p className="text-gray-300">
                Designed for urban, mountainous, and aquatic environments with IP68 rating
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
            The OBX-3 was engineered with a singular focus: reliable performance in the most challenging conditions. Every component was selected and tested to exceed military specifications, while the AI core was trained on millions of hours of real-world data to ensure optimal decision-making in critical situations.
          </p>
        </div>
      </section>

      {/* Role in OddBotix Platform */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Role in OddBotix Platform</h3>
          <p className="text-lg leading-relaxed max-w-3xl">
            As the reconnaissance backbone of the OddBotix ecosystem, the OBX-3 provides critical intelligence for mission planning and execution. Its data feeds directly into the OddBotix Command Center, enabling real-time strategic decision making across all operational units.
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
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
