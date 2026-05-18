"use client";

import { motion } from "framer-motion";
import { SubpageVisual } from "@/components/SubpageVisual";
import { ArrowRight, Mail, Building2, Handshake, Landmark } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <SubpageVisual variant="contact" />
      <BackgroundLayers />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            OddBotix
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/systems" className="transition hover:text-white">
              Systems
            </a>
            <a href="/technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="/applications" className="transition hover:text-white">
              Applications
            </a>
            <a href="/thesis" className="transition hover:text-white">
              Thesis
            </a>
            <a href="/investors" className="transition hover:text-white">
              Investors
            </a>
          </nav>

          <a
            href="mailto:hello@oddbotix.com"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Email Us
          </a>
        </div>
      </header>

      <section className="relative px-6 pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200"
          >
            Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Strategic conversations start here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            OddBotix is built for strategic partners, pilot opportunities,
            investor conversations, and high-complexity deployment environments
            where conventional robotics is insufficient.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Inquiry Types
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built for serious partners and venture-scale opportunities.
            </h2>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={<Handshake className="h-5 w-5" />}
                title="Strategic Partnerships"
                copy="Deployment partners, research collaborations, and technical alliances."
              />
              <ContactRow
                icon={<Building2 className="h-5 w-5" />}
                title="Pilot Programs"
                copy="High-value environments where adaptive robotics can create immediate operational leverage."
              />
              <ContactRow
                icon={<Landmark className="h-5 w-5" />}
                title="Investor Conversations"
                copy="Category creation, platform expansion, and long-term motion intelligence strategy."
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                title="General Inquiries"
                copy="Partnership, media, technical, or venture ecosystem introductions."
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101f] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(249,115,22,0.18),transparent_26%)]" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                Contact Panel
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
                  OddBotix
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Start a conversation with the venture.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/64">
                  For pilot discussions, strategic deployments, investor
                  conversations, or Noaerth portfolio alignment, use the
                  channels below.
                </p>

                <div className="mt-8 space-y-4">
                  <InfoBlock
                    label="Email"
                    value="hello@oddbotix.com"
                    href="mailto:hello@oddbotix.com"
                  />
                  <InfoBlock
                    label="Parent Company"
                    value="Noaerth"
                    href="https://noaerth.com"
                  />
                  <InfoBlock
                    label="Focus"
                    value="Experimental robotics, motion intelligence, adaptive systems"
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:hello@oddbotix.com"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(244,114,182,0.22)] transition hover:scale-[1.02]"
                  >
                    Email OddBotix
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="https://noaerth.com"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Visit Noaerth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.03] p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Closing Note
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              The next movement category in robotics will be built deliberately.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              OddBotix is being shaped as a premium deep-tech venture with
              platform potential across systems, control layers, and future
              motion intelligence infrastructure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4">
      <div className="mt-1 text-cyan-200">{icon}</div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="mt-1 text-sm leading-7 text-white/60">{copy}</div>
      </div>
    </div>
  );
}

function InfoBlock({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="transition hover:text-white">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-white/40">
        {label}
      </div>
      <div className="mt-2 text-sm text-white/80">{content}</div>
    </div>
  );
}

function BackgroundLayers() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,80,180,0.18),transparent_35%),linear-gradient(180deg,#040714_0%,#050816_45%,#040713_100%)]" />
      <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute right-[-10rem] top-[4rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[20%] h-[28rem] w-[28rem] rounded-full bg-orange-400/8 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}
