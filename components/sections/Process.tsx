"use client";

import dynamic from "next/dynamic";
import { process } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const Pipeline = dynamic(() => import("@/components/three/objects/Pipeline"), { ssr: false });

/* A genuine sequence, so it is genuinely numbered. */
export default function Process() {
  return (
    <Section id="process" tone="warm">
      <SectionHead
        eyebrow="Process"
        title="Four stages, no surprises."
        body="You always know what we are doing this week, and what lands next."
      />
      <div className="pointer-events-none mb-4 h-[220px] w-full sm:h-[280px]">
        <SceneFrame cameraPosition={[0, 1.4, 6.8]} fov={40}>
          {(progress) => <Pipeline progress={progress} />}
        </SceneFrame>
      </div>

      <div className="grid">
        {process.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <article
              className={[
                "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-[22px] border-t border-line py-[26px]",
                i === process.length - 1 ? "border-b" : "",
              ].join(" ")}
            >
              <div className="grid size-[38px] shrink-0 place-items-center rounded-full border-[1.5px] border-honey font-mono text-xs font-bold tabular-nums text-honey-ink">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="mb-[7px] text-[21px]">{step.title}</h3>
                <p className="max-w-[60ch] text-base text-ink-2">{step.body}</p>
                <p className="mt-2.5 font-mono text-[11.5px] uppercase tracking-[.06em] text-ink-3">
                  {step.meta}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
