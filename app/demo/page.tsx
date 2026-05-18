"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { ArrowRight, Radar } from "lucide-react";

const environments = [
  "Industrial corridor",
  "Collapsed structure",
  "Subterranean tunnel",
  "Hazard perimeter",
] as const;

const systems = [
  { id: "obx-1", label: "OBX-1 Crawler", fit: "Tight voids" },
  { id: "obx-2", label: "OBX-2 Terrain", fit: "Unstable ground" },
  { id: "obx-3", label: "OBX-3 Recon", fit: "Thermal + visual" },
  { id: "obx-4", label: "OBX-4 Mapper", fit: "Underground grid" },
  { id: "obx-5", label: "OBX-5 Remote", fit: "Delayed telemetry" },
] as const;

type Telemetry = {
  linkQuality: number;
  hazardScore: number;
  traverseMinutes: number;
  coveragePct: number;
  notes: string[];
};

function mockTelemetry(env: string, systemId: string): Telemetry {
  const seed = env.length + systemId.length;
  return {
    linkQuality: 72 + (seed % 20),
    hazardScore: 18 + (seed % 35),
    traverseMinutes: 6 + (seed % 14),
    coveragePct: 58 + (seed % 35),
    notes: [
      "DEMO: Sample mission telemetry only.",
      `Environment profile: ${env}.`,
      `Selected platform: ${systemId.toUpperCase()}.`,
      "Human operator review required before field deployment.",
    ],
  };
}

export default function DemoPage() {
  const [environment, setEnvironment] = useState<(typeof environments)[number]>(
    environments[0],
  );
  const [systemId, setSystemId] = useState<(typeof systems)[number]["id"]>("obx-1");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<Telemetry | null>(null);

  const system = useMemo(
    () => systems.find((s) => s.id === systemId) ?? systems[0],
    [systemId],
  );

  function runMission() {
    setRunning(true);
    setResult(null);
    window.setTimeout(() => {
      setResult(mockTelemetry(environment, systemId));
      setRunning(false);
    }, 1400);
  }

  return (
    <>
      <SubpageVisual variant="demo" />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">
          Mission lab (demo)
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
          Plan a robotic mission in 60 seconds
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
          Pick an environment and OBX platform. Run a local simulation to preview
          hazard score, link quality, and coverage. All outputs are labeled DEMO.
        </p>

        <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <label className="block text-sm text-white/70">
            Environment
            <select
              className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-white"
              value={environment}
              onChange={(e) =>
                setEnvironment(e.target.value as (typeof environments)[number])
              }
            >
              {environments.map((env) => (
                <option key={env} value={env}>
                  {env}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm text-white/70">
            OBX system
            <select
              className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-white"
              value={systemId}
              onChange={(e) =>
                setSystemId(e.target.value as (typeof systems)[number]["id"])
              }
            >
              {systems.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label} — {s.fit}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={runMission}
            disabled={running}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
          >
            {running ? "Running simulation…" : "Run mission simulation"}
            <Radar className="h-4 w-4" />
          </button>
        </div>

        {result && (
          <section className="mt-8 rounded-2xl border border-cyan-400/25 bg-cyan-500/5 p-6">
            <h2 className="text-lg font-semibold text-white">Mission preview</h2>
            <p className="mt-1 text-xs text-cyan-200/80">
              DEMO telemetry for {system.label} in {environment}
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-white/50">Link quality</dt>
                <dd className="text-2xl font-semibold text-white">{result.linkQuality}%</dd>
              </div>
              <div>
                <dt className="text-xs text-white/50">Hazard score</dt>
                <dd className="text-2xl font-semibold text-white">{result.hazardScore}/100</dd>
              </div>
              <div>
                <dt className="text-xs text-white/50">Traverse time</dt>
                <dd className="text-2xl font-semibold text-white">{result.traverseMinutes} min</dd>
              </div>
              <div>
                <dt className="text-xs text-white/50">Coverage</dt>
                <dd className="text-2xl font-semibold text-white">{result.coveragePct}%</dd>
              </div>
            </dl>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {result.notes.map((n) => (
                <li key={n}>· {n}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
          >
            Compare OBX systems <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="text-sm text-white/60 hover:text-white">
            Request field access
          </Link>
        </div>
      </main>
    </>
  );
}
