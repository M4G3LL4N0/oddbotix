const BackgroundLayers = () => (
  <>
    <div className="fixed inset-0 bg-black z-[-3]"></div>
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900/10 to-black z-[-2]"></div>
    <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 z-[-1]"></div>
  </>
);

export default function CareersPage() {
  return (
    <div className="min-h-screen text-white">
      <BackgroundLayers />
      
      {/* Hero */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          Build the Future of Intelligent Motion
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          At OddBotix, we're engineering robotic systems that perceive, learn,
          and move with unprecedented intelligence. Join us in defining the next
          frontier of autonomous robotics.
        </p>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-4xl font-bold mb-8">
            Why Join OddBotix
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-lg text-gray-300">
              We're engineering fundamental breakthroughs in robotic motion.
              When we succeed, these inventions will power entire categories
              of autonomous systems worldwide.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">⚡</span>
                Work on autonomous systems that require no training data
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">⚡</span>
                Build with novel sensor modalities never applied to robotics
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">⚡</span>
                Invent solutions with multi-order improvements in efficiency/noise tolerance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Want */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-4xl font-bold mb-8">
            Who We're Looking For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Technical Excellence</h3>
              <p className="text-gray-300">
                We seek engineers and researchers who can develop novel solutions
                at the intersection of mechanics, electronics, and algorithmic control.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Systems Thinking</h3>
              <p className="text-gray-300">
                Ideal candidates understand how components interact at multiple
                abstraction levels—from low-level signal processing to high-level
                behavioral objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-4xl font-bold mb-12">Areas of Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Robotics Engineering",
                description: "Designing novel mechanical systems that leverage our core motion intelligence breakthroughs"
              },
              {
                title: "Controls / Motion Intelligence",
                description: "Developing algorithms that enable adaptive, efficient motion in dynamic environments"
              },
              {
                title: "Simulation",
                description: "Building physics-accurate environments for rapid development and validation"
              },
              {
                title: "Embedded Systems",
                description: "Creating high-performance computing architectures for real-time control"
              },
              {
                title: "Design / Product",
                description: "Defining intuitive interfaces between robotic systems and human operators"
              }
            ].map((area) => (
              <div key={area.title} className="bg-gradient-to-b from-gray-900 to-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-medium mb-3">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-4xl font-bold mb-12">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fundamental innovation > incremental improvement",
              "Hardware/software co-design is mandatory",
              "Measurement supersedes intuition",
              "Elegant solutions solve multiple problems",
              "There are always multiple implementations worth trying",
              "Robustness cannot be added later"
            ].map((principle) => (
              <div key={principle} className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">■</span>
                <p className="text-gray-300">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/30 to-purple-900/10 border border-purple-900/50 rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're hiring exceptional engineers to solve problems that shouldn't be possible.
            Send us your strongest work.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg transition-all">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
