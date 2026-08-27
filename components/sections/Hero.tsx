"use client";

import dynamic from "next/dynamic";
import { hero } from "@/lib/content";
import Button from "@/components/ui/Button";

/* WebGL is client-only and lazy — the page renders and is readable without it */
const HiveCanvas = dynamic(() => import("@/components/three/HiveCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-screen pt-[clamp(52px,8vw,96px)] pb-[clamp(60px,8vw,104px)]">
      <div className="absolute inset-0">
        <HiveCanvas />
      </div>

      {/* legibility scrim: the hive stays visible, the type stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(19,22,27,.94)_0%,rgba(19,22,27,.78)_38%,rgba(19,22,27,.25)_70%,transparent_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <div className="max-w-[46rem]">
          {/* PLACEHOLDER: replace with real figures before launch */}
          <div className="mb-[22px] flex items-center gap-3">
            <span aria-hidden="true" className="tracking-[2px] text-sm text-honey">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            <span className="font-mono text-[12.5px] text-screen-ink-2">{hero.rating}</span>
          </div>

          <h1 className="mb-5 text-[clamp(38px,5.6vw,68px)] tracking-[-.035em] text-screen-ink">
            {hero.headlineLead}{" "}
            <em className="not-italic text-honey">{hero.headlineBrand}</em>{" "}
            {hero.headlineTail}
          </h1>

          <p className="mb-[30px] max-w-[52ch] text-[clamp(17px,1.6vw,19.5px)] text-screen-ink-2">
            {hero.lead}
          </p>

          <div className="mb-[34px] flex flex-wrap gap-3">
            <Button href="#contact" onScreen arrow>Book a call</Button>
            <Button href="#work" variant="ghost" onScreen>See our work</Button>
          </div>

          <div className="flex flex-wrap gap-x-2.5 gap-y-2 border-t border-screen-line pt-6">
            {hero.disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full border border-screen-line px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[.1em] text-screen-ink-2"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
