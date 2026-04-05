const BackgroundLayers = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
  </div>
);

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayers />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* HERO */}
        <section className="mb-24">
          <h1 className="text-6xl font-bold mb-4">OBX-1</h1>
          <h2 className="text-3xl font-medium text-gray-400 mb-8">
            Confined-Space Crawler System
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            A revolutionary robotics platform designed for extreme environments where conventional systems fail. Combining advanced locomotion with intelligent mapping, OBX-1 redefines what's possible in confined spaces.
          </p>
        </section>

        {/* SYSTEM OVERVIEW */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-8">System Overview</h3>
          <div className="space-y-6 text-gray-300">
              <p className="text-lg text-gray-300">
                The OBX-1 confined-space crawler series represents our first-generation modular robotics platform for environments below 30cm access diameter. Each unit combines:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>- Segmented body architecture with 9 degrees of freedom</li>
                <li>- Hybrid wheel-leg locomotion modules</li>
                <li>- Tactile surface adaptation</li>
                <li>- Autonomous posture optimization</li>
              </ul>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-8">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-xl font-medium mb-2">Abnormal Locomotion</h4>
              <p>Advanced movement patterns for navigating irregular surfaces and complex geometries.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Confined Access</h4>
              <p>Compact design enabling access to spaces as narrow as 20cm diameter.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Adaptive Posture</h4>
              <p>Dynamic body configuration for optimal positioning in constrained environments.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Recovery Movement</h4>
              <p>Self-righting capabilities in case of falls or disorientation.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xl font-medium mb-2">Mapping & Intelligence</h4>
              <p>Real-time 3D mapping and environmental analysis for autonomous operation.</p>
            </div>
          </div>
        </section>

        {/* ENVIRONMENT */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-8">Operational Environments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-xl font-medium mb-2">Tunnels & Ducts</h4>
              <p>Navigation through narrow, winding passages with varying surfaces.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Pipes & Conduits</h4>
              <p>Inspection and maintenance in utility networks.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Collapsed Structures</h4>
              <p>Search and rescue operations in disaster zones.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Industrial Interiors</h4>
              <p>Access to confined spaces in manufacturing and processing facilities.</p>
            </div>
          </div>
        </section>

        {/* DESIGN LOGIC */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-8">Design Philosophy</h3>
          <div className="space-y-6 text-gray-300">
            <p>
              OBX-1 was born from the recognition that many critical environments remain inaccessible to conventional robotics. Traditional systems often fail in confined spaces due to their rigid designs and limited adaptability.
            </p>
            <p>
              The system's architecture prioritizes flexibility, resilience, and intelligence. Every component was designed with the understanding that failure is not an option in critical operations.
            </p>
          </div>
        </section>

        {/* FUTURE EXPANSION */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-8">Future Development</h3>
          <div className="space-y-6 text-gray-300">
            <p>
              OBX-1 represents the foundation of OddBotix's advanced motion platform. Future iterations will expand its capabilities while maintaining the core principles of adaptability and reliability.
            </p>
            <p>
              The system's modular design allows for integration of new sensors, tools, and AI capabilities, ensuring it remains at the forefront of confined-space robotics.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <h3 className="text-4xl font-bold mb-8">Explore Possibilities</h3>
          <div className="space-y-6 text-gray-300">
            <p>
              Discover how OBX-1 can transform your operations in confined spaces. Contact us to discuss partnership opportunities or custom implementations.
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
