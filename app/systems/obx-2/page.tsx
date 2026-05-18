import React from 'react';
import { SubpageVisual } from "@/components/SubpageVisual";

const BackgroundLayers = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-95" />
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
  </div>
);

const OBX2Page = () => {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="relative min-h-screen text-white">
      <BackgroundLayers />
      
      {/* Hero Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">OBX-2</h1>
          <h2 className="text-3xl font-medium text-gray-300">Adaptive Terrain Unit</h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            An adaptive terrain system concept for unstable ground, irregular surfaces, rubble, and industrial environments where movement reliability is the constraint.
          </p>
        </div>
      </section>

      {/* System Overview */}
      <section className="relative z-10 py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                The OBX-2 adaptive terrain unit series is framed around terrain intelligence and body adaptation:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>- Real-time surface classification</li>
                <li>- Dynamic suspension logic</li>
                <li>- Predictive gait adaptation</li>
                <li>- Multi-spectral traction control</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">AI-driven terrain analysis</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">Modular suspension system</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">Real-time surface adaptation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Terrain Mastery</h3>
              <p className="text-gray-300">
                Navigates loose, uneven, and shifting surfaces with movement strategies designed for recovery and traction.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Adaptive Response</h3>
              <p className="text-gray-300">
                Adjusts posture, traction, and movement planning based on terrain feedback.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">All-Weather Operation</h3>
              <p className="text-gray-300">
                Designed toward field resilience across weather, debris, vibration, and industrial operating constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Environments */}
      <section className="relative z-10 py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Target Environments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Industrial</h3>
              <p className="text-gray-300 mb-6">
                Rugged construction sites, mining operations, and heavy manufacturing facilities.
              </p>
              <h3 className="text-2xl font-bold mb-4">Exploration</h3>
              <p className="text-gray-300">
                Remote wilderness, mountainous regions, and scientific research sites.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Emergency</h3>
              <p className="text-gray-300 mb-6">
                Disaster zones, search and rescue operations, and hazardous material sites.
              </p>
              <h3 className="text-2xl font-bold mb-4">Defense & Security</h3>
              <p className="text-gray-300">
                Tactical operations, border patrol, and reconnaissance missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Logic */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Design Logic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                The OBX-2 was engineered from the ground up to solve the fundamental challenges of robotic mobility.
              </p>
              <p className="text-lg text-gray-300">
                Every component serves a purpose, from the AI-driven control system to the modular suspension architecture.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">Minimalist, functional design</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">Redundant safety systems</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
                <span className="text-lg">Field-serviceable components</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role in Platform */}
      <section className="relative z-10 py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Role in the OddBotix Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                As the core mobility unit, the OBX-2 enables OddBotix systems to operate in environments previously inaccessible to robotics.
              </p>
              <p className="text-lg text-gray-300">
                Its modular design allows seamless integration with various payloads and mission-specific configurations.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                The OBX-2's terrain data can feed the broader OddBotix motion stack, improving future mission planning and system design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Mobility?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how the OBX-2 can revolutionize your operations. Contact our team for a detailed consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex rounded-lg bg-blue-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Request Consultation
          </a>
        </div>
      </section>
    </div>
  </>
  );
};

export default OBX2Page;
