"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { services } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const HexCluster = dynamic(() => import("@/components/three/objects/HexCluster"), { ssr: false });

export default function Services() {
  const active = useRef(-1);

  return (
    <Section id="services" tone="raised">
      <SectionHead
        eyebrow="Services"
        title="Built from the ground up."
        body="Every service is designed to do one thing — make your business impossible to overlook."
      />
      <div className="pointer-events-none mb-2 h-[280px] w-full sm:h-[340px]">
        <SceneFrame cameraPosition={[0, 2.4, 5.4]} fov={38}>
          {(progress) => <HexCluster progress={progress} active={active} />}
        </SceneFrame>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <article
              onMouseEnter={() => (active.current = i)}
              onMouseLeave={() => (active.current = -1)}
              className="h-full rounded-[14px] border border-line bg-ground p-6 pb-7 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-oak">
              <span className="mb-4 block font-mono text-[11px] tracking-[.1em] text-ink-3">
                {s.num} / {s.kind}
              </span>
              <h3 className="mb-2.5 text-[20.5px] tracking-[-.02em]">{s.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-ink-2">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[5px] bg-ground-3 px-2 py-1 font-mono text-[10.5px] uppercase tracking-[.06em] text-ink-3"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
