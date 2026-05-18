import { SubpageVisual } from "@/components/SubpageVisual";
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
    <SubpageVisual variant="default" />
      <>
      <Head>
        <title>OddBotix | Investor Summary</title>
        <meta name="description" content="OddBotix investor summary for motion intelligence robotics" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OddBotix
            </h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-3xl leading-tight">
              Motion intelligence platform for high-complexity environments
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3 font-medium"
              >
                Contact OddBotix
              </a>
              <a
                href="/deck"
                className="rounded-full border border-gray-700 px-8 py-3 font-medium transition hover:bg-white hover:bg-opacity-10"
              >
                Investor Deck
              </a>
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
                  <span>Robotics still struggles in constrained, hazardous, irregular, and subterranean environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-pink-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  </div>
                  <span>Operators still rely on human entry or brittle bespoke systems in high-risk access conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-pink-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  </div>
                  <span>Movement remains a limiting layer for field robotics, not just perception or compute</span>
                </li>
              </ul>
            </Tile>

            {/* The Solution */}
            <Tile className="border-l-4 border-indigo-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                The OddBotix Solution
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>Motion intelligence platform direction: adaptive body logic, movement policy learning, and mission-specific systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>Systems-first roadmap that starts with the OBX family and compounds toward a reusable motion stack</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-indigo-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <span>Future platform value through shared motion primitives, telemetry loops, and partner deployments</span>
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
                  <span>Simulation, embedded compute, sensing, and control tooling are improving at the same time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-purple-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Industrial, infrastructure, defense, and response teams need safer access to complex environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-purple-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Component cost curves are making more specialized robotic systems commercially plausible</span>
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
                  <span><span className="font-medium">Infrastructure Access:</span> pipes, tunnels, voids, underground networks, and hard-access facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-amber-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <span><span className="font-medium">Hazard Reconnaissance:</span> remote sensing before human entry into dangerous zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-none bg-amber-900 bg-opacity-20 rounded-full p-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <span><span className="font-medium">Motion Platform:</span> future licensing, OEM, and deployment telemetry opportunities</span>
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
                      <span>Movement policies that can improve through simulation and field telemetry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Mission system taxonomy that keeps hardware, sensing, and control logic aligned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Platform path from OBX systems into reusable motion intelligence infrastructure</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Strategic Advantage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Clear category focus around movement intelligence rather than generic robotics automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Noaerth portfolio context with a disciplined deep-tech venture narrative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Partnership strategy focused on high-signal pilot environments and strategic robotics collaborators</span>
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
              OddBotix is preparing strategic investor and partner conversations to advance the system family and platform roadmap.
            </p>
            <a
              href="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-10 py-4 text-lg font-medium transition hover:opacity-90"
            >
              Connect With Our Investment Team
            </a>
          </section>
        </div>
      </div>
    </>
  </>
  )
}

export default InvestorsPage
