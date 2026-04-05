"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <BackgroundLayers />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/technology" className="transition hover:text-white">Technology</a>
            <a href="/applications" className="transition hover:text-white">Applications</a>
            <a href="/thesis" className="transition hover:text-white">Thesis</a>
            <a href="/contact" className="text-white">Contact</a>
          </nav>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Request Access
          </a>
        </div>
      </header>

      <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <h1 className="text-h1 glow">Strategic Collaboration</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/60">
                OddBotix works with select mission partners, investors, and Noaerth ecosystem companies to deploy our motion intelligence technology in high-value environments.
              </p>
            </motion.div>

            <div className="glass premium-card p-12">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-medium">Get In Touch</h2>
                  <p className="mt-4 text-white/60">
                    For partnership inquiries, investor relations, or technical collaboration.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="mt-1 text-white/60">partners@oddbotix.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Location</h3>
                        <p className="mt-1 text-white/60">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Parent Company</h3>
                        <p className="mt-1 text-white/60">Noaerth Ecosystem</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-white/70">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-black transition hover:bg-primary-hover"
                      >
                        Submit Inquiry
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function BackgroundLayers() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Background layers content */}
    </div>
  );
}

interface ContactFormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}
