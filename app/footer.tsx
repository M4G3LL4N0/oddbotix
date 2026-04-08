"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-20 bg-black/50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-semibold tracking-tight text-white">OddBotix</span>
            <span className="text-xs tracking-wide text-white/40 uppercase">A Noaerth Ecosystem Company</span>
          </div>
          <div className="mt-8 flex space-x-8 md:mt-0">
            <a href="/technology" className="text-sm text-white/50 transition hover:text-white/90">
              Technology
            </a>
            <a href="/applications" className="text-sm text-white/50 transition hover:text-white/90">
              Applications
            </a>
            <a href="/thesis" className="text-sm text-white/50 transition hover:text-white/90">
              Thesis
            </a>
            <a href="/contact" className="text-sm text-white/50 transition hover:text-white/90">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/30 md:text-left">
          © {new Date().getFullYear()} OddBotix Research. Proprietary technology. All rights strictly enforced.
        </div>
      </div>
    </footer>
  );
}
