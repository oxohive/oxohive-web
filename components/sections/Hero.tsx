"use client";

import dynamic from "next/dynamic";
import { hero, site } from "@/lib/content";
import Button from "@/components/ui/Button";

/* WebGL is client-only and lazy — the page renders and is readable without it */
const HiveCanvas = dynamic(() => import("@/components/three/HiveCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-screen pt-[clamp(40px,8vw,96px)] pb-[clamp(48px,8vw,104px)]">
      <div className="pointer-events-none absolute inset-0">
        <HiveCanvas />
      </div>

      {/* legibility scrim: the hive stays visible, the type stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-scrim"
      />

      <div className="brand-content mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <div className="max-w-[42rem]">
          <p className="mb-6 text-sm font-medium text-screen-ink-2">{hero.eyebrow}</p>

          <h1 className="mb-5 text-[clamp(29px,6.8vw,60px)] tracking-[-.035em] text-screen-ink">
            {hero.headlineLead}{" "}
            <em className="brand-text block not-italic">{hero.headlineBrand}</em>{" "}
            {hero.headlineTail}
          </h1>

          <p className="mb-[30px] max-w-[52ch] text-[clamp(15.5px,1.6vw,19.5px)] text-screen-ink-2">
            {hero.lead}
          </p>

          <div className="mb-[34px] flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} onScreen arrow>Book a call</Button>
            <Button href="#work" variant="ghost" onScreen>See our work</Button>
          </div>

          <div className="flex flex-wrap gap-x-2.5 gap-y-2 border-t border-screen-line pt-6">
            {hero.disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full border border-screen-line px-3.5 py-1.5 font-body text-[11.5px] tracking-[.02em] text-screen-ink-2"
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
