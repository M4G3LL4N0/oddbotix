import { NextPage } from 'next'
import Head from 'next/head'

interface BackgroundLayersProps {
  layers: { color: string; opacity: number }[];
}

const BackgroundLayers = ({ layers }: BackgroundLayersProps) => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {layers.map((layer, idx) => (
      <div
        key={idx}
        className="absolute inset-0"
        style={{
          backgroundColor: layer.color,
          opacity: layer.opacity,
          transform: `rotate(${idx * 7.5}deg)`,
          clipPath: `polygon(0% ${idx * 7}%, 100% ${idx * 5}%, 100% 100%, 0% 100%)`
        }}
      />
    ))}
  </div>
)

const Tile = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm ${className}`}>
    {children}
  </div>
)

const InvestorsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>OddBotix | Investor Summary</title>
        <meta name="description" content="The future of robotics powered by generative AI" />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
        <BackgroundLayers layers={[
          { color: '#6366f1', opacity: 0.1 },
          { color: '#8b5cf6', opacity: 0.05 },
          { color: '#ec4899', opacity: 0.07 }
        ]} />

        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Hero */}
          <section className="mb-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              OddBotix
            </h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-3xl leading-tight">
              Building the first general-purpose robotics platform powered by generative AI
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-medium">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition">
                Investor Deck
              </button>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* The Problem */}
            <Tile className="border-l-4 border-pink-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                The Problem
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-pink-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  </div>
                  <span>Robotics development is fragmented, specialized, and slow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-pink-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  </div>
                  <span>$300B spent annually on custom robotic solutions that rapidly become obsolete</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-pink-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  </div>
                  <span>No platform exists for rapid development of general-purpose robotics</span>
                </li>
              </ul>
            </Tile>

            {/* The Solution */}
            <Tile className="border-l-4 border-indigo-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                The OddBotix Solution
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>Generative Robotics Platform: first system to combine Large Motion Models with modular hardware</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>10-100x faster development cycles vs. traditional robotics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>Platform enables network effects through shared motion primitive libraries</span>
                </li>
              </ul>
            </Tile>

            {/* Why Now */}
            <Tile className="border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Why Now
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-purple-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Advancements in transformer architectures now sufficiently robust for real-world motion prediction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-purple-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Enterprise appetite for automation solutions at all-time high</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-purple-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Cost curves for key components (sensors, actuators, compute) crossing viability thresholds</span>
                </li>
              </ul>
            </Tile>

            {/* Market */}
            <Tile className="border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Market Surfaces
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-amber-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <span><span className="font-medium">Enterprise Automation:</span> $180B addressable for warehouse, manufacturing, logistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-amber-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <span><span className="font-medium">Developer Tools:</span> $40B market hungry for next-gen robotics frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-amber-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <span><span className="font-medium">Data Services:</span> Proprietary motion dataset poised to become industry standard</span>
                </li>
              </ul>
            </Tile>
          </div>

          {/* Moat & Vision */}
          <section className="mb-24">
            <Tile className="border-l-4 border-green-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Moat & Platform Vision
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Technical Moat</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Proprietary motion prediction models fine-tuned on largest robotics dataset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Hardware abstraction layer that reduces integration times from months to days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Patent-pending neural motion compiler architecture</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Strategic Advantage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>First-mover in generative robotics - no comparable platform exists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Talent density: team combines robotics PhDs with AI experts from leading labs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Early Fortune 500 design partners creating compounding data advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Tile>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us In Building The Future of Robotics</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're raising our Series A to accelerate platform development and enterprise deployments.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-medium text-lg hover:opacity-90 transition">
              Connect With Our Investment Team
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default InvestorsPage
