import { SubpageVisual } from "@/components/SubpageVisual";
const BackgroundLayers = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-95" />
    <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
  </div>
);

export default function PressPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="relative min-h-screen bg-black text-white">
      <BackgroundLayers />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">OddBotix in the Press</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Press context, positioning, and media-ready language for OddBotix as a motion intelligence robotics venture.
        </p>
      </section>

      {/* Company Boilerplate */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About OddBotix</h2>
          <p className="text-lg text-gray-300 mb-6">
            OddBotix is an experimental robotics venture focused on abnormal locomotion, adaptive machine movement, and motion intelligence for hard environments.
          </p>
          <p className="text-lg text-gray-300">
            The company is building toward a family of mission-oriented robotic systems and a broader motion stack for constrained, hazardous, subterranean, and operationally complex environments.
          </p>
        </div>
      </section>

      {/* Key Themes / Press Angles */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Press Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Movement Intelligence</h3>
              <p className="text-gray-300">
                Explore why motion itself is becoming a new control layer for field robotics.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Hard-Access Environments</h3>
              <p className="text-gray-300">
                Understand the environments where conventional robot forms break down: pipes, tunnels, rubble, voids, and hazardous zones.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Noaerth Portfolio Context</h3>
              <p className="text-gray-300">
                Position OddBotix as a premium deep-tech venture inside the broader Noaerth company-building ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiry Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-lg text-gray-300 mb-8">
            For press-related questions, interview requests, or media assets, please contact our communications team.
          </p>
          <a
            href="mailto:press@oddbotix.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Press Team
          </a>
        </div>
      </section>

      {/* Brand Positioning Summary */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Brand Positioning</h2>
            <p className="text-lg text-gray-300 mb-6">
              OddBotix should be described as a serious robotics skunkworks with a concrete OBX system family and a platform path. Core language should emphasize:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Abnormal locomotion and adaptive body logic</li>
              <li>Confined-space, hazard, and subterranean system applications</li>
              <li>Motion intelligence as a future platform layer</li>
              <li>Credible deep-tech positioning without unverified hardware claims</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in learning more about OddBotix? Our team is ready to answer your questions and discuss how we can collaborate.
          </p>
          <a
            href="mailto:info@oddbotix.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  </>
  )
}
