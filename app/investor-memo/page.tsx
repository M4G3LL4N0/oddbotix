const BackgroundLayers = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
    <div className="absolute inset-0 opacity-20 bg-grid-white/[0.05]" />
  </div>
);

export default function InvestorMemo() {
  return (
    <div className="min-h-screen text-white font-sans">
      <BackgroundLayers />
      
      <div className="container mx-auto px-4 py-24 max-w-3xl space-y-24">
        {/* HERO */}
        <section>
          <h1 className="text-6xl font-bold mb-4">OddBotix</h1>
          <h2 className="text-3xl font-medium text-gray-300 mb-8">Investor Memo</h2>
          <p className="text-xl text-gray-400">
            Redefining robotics through unconventional locomotion
          </p>
        </section>

        {/* PROBLEM */}
        <section>
          <h3 className="text-2xl font-bold mb-4">The Problem</h3>
          <p className="text-gray-300 leading-relaxed">
            Conventional robotics remains constrained by traditional movement paradigms, limiting their effectiveness in complex, unstructured environments. The real world doesn't conform to flat surfaces and predictable terrains.
          </p>
        </section>

        {/* INSIGHT */}
        <section>
          <h3 className="text-2xl font-bold mb-4">The Insight</h3>
          <p className="text-gray-300 leading-relaxed">
            Movement is the fundamental bottleneck in robotics. By mastering abnormal locomotion, we unlock unprecedented capabilities in navigation, manipulation, and environmental interaction.
          </p>
        </section>

        {/* SOLUTION */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
          <p className="text-gray-300 leading-relaxed">
            OddBotix combines advanced motion intelligence with adaptive systems, creating robots that thrive where others fail. Our approach redefines what's possible in robotic movement and interaction.
          </p>
        </section>

        {/* WHY NOW */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Why Now</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Simulation technologies enable rapid iteration</li>
            <li>AI breakthroughs in control systems</li>
            <li>Hardware maturity reaches inflection point</li>
          </ul>
        </section>

        {/* MARKET */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>Industrial Automation</div>
            <div>Defense Applications</div>
            <div>Infrastructure Maintenance</div>
            <div>High-Complexity Environments</div>
          </div>
        </section>

        {/* MOAT */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Our Moat</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Proprietary motion stack</li>
            <li>Closed-loop learning system</li>
            <li>Deployment advantage in real-world scenarios</li>
          </ul>
        </section>

        {/* VISION */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To create the category-defining robotics platform for the next generation of intelligent machines.
          </p>
        </section>

        {/* CTA */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Let's Build the Future</h3>
          <p className="text-gray-300 mb-4">
            We're seeking visionary investors to join us in redefining robotics.
          </p>
          <a
            href="mailto:investors@oddbotix.com"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start the Conversation
          </a>
        </section>
      </div>
    </div>
  );
}
