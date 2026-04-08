const BackgroundLayers = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-95" />
    <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]" />
  </div>
);

export default function PressPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundLayers />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">OddBotix in the Press</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the latest news, insights, and innovations from OddBotix, the leader in advanced robotics solutions.
        </p>
      </section>

      {/* Company Boilerplate */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About OddBotix</h2>
          <p className="text-lg text-gray-300 mb-6">
            OddBotix is a pioneering robotics company specializing in cutting-edge automation solutions. Founded in 2020, we've quickly become a trusted name in industrial robotics, AI-driven automation, and smart manufacturing systems.
          </p>
          <p className="text-lg text-gray-300">
            Our mission is to revolutionize industries through innovative robotics that enhance productivity, safety, and efficiency. With a team of world-class engineers and AI experts, we're shaping the future of automation.
          </p>
        </div>
      </section>

      {/* Key Themes / Press Angles */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Press Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">AI-Driven Robotics</h3>
              <p className="text-gray-300">
                Explore how OddBotix is integrating advanced AI into industrial robotics for smarter automation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sustainable Manufacturing</h3>
              <p className="text-gray-300">
                Discover our commitment to eco-friendly robotics solutions that reduce environmental impact.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Industry 4.0 Innovation</h3>
              <p className="text-gray-300">
                Learn how we're driving the fourth industrial revolution with cutting-edge automation technologies.
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
              OddBotix stands at the forefront of robotics innovation, combining technical excellence with practical solutions that transform industries. We're recognized for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Cutting-edge AI and machine learning integration</li>
              <li>Reliable and scalable industrial solutions</li>
              <li>Commitment to safety and efficiency</li>
              <li>Forward-thinking approach to automation</li>
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
  );
}
