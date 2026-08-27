"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { industries } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const Skyline = dynamic(() => import("@/components/three/objects/Skyline"), { ssr: false });

export default function Industries() {
  const active = useRef(-1);

  return (
    <Section tone="raised">
      <SectionHead
        eyebrow="Industries"
        title="Where we go deep."
        body="Domains where we already know the regulations, the edge cases, and the things that go wrong at 2am."
      />
      <div className="pointer-events-none mb-4 h-[260px] w-full sm:h-[320px]">
        <SceneFrame cameraPosition={[0, 1.1, 7.4]} fov={40}>
          {(progress) => <Skyline progress={progress} active={active} />}
        </SceneFrame>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.05}>
            <article
              onMouseEnter={() => (active.current = i)}
              onMouseLeave={() => (active.current = -1)}
              className="h-full rounded-[14px] border border-line bg-ground p-[22px] transition-colors duration-200 hover:border-oak">
              <h3 className="mb-2 text-[19px]">{ind.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-2">{ind.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
