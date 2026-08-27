"use client";

import dynamic from "next/dynamic";
import { internship } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const Mentorship = dynamic(() => import("@/components/three/objects/Mentorship"), { ssr: false });

export default function Internship() {
  return (
    <Section id="internship" tone="warm">
      <SectionHead
        eyebrow="Internship"
        title="From learner to industry-ready."
        body="A structured programme with live training, personal mentorship, and real project work — flexible enough to fit around everything else you are doing."
      />

      <div className="pointer-events-none mb-4 h-[280px] w-full sm:h-[340px]">
        <SceneFrame cameraPosition={[0, 1.8, 6.4]} fov={40}>
          {(progress) => <Mentorship progress={progress} />}
        </SceneFrame>
      </div>

      <div className="grid grid-cols-1 items-start gap-[clamp(34px,4vw,56px)] lg:grid-cols-[.85fr_1fr]">
        <Reveal>
          <div className="grid">
            {internship.points.map((p, i) => (
              <div
                key={p.title}
                className={[
                  "border-t border-line py-5",
                  i === internship.points.length - 1 ? "border-b" : "",
                ].join(" ")}
              >
                <h3 className="mb-1.5 text-[18.5px]">{p.title}</h3>
                <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-ink-2">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[14px] border border-line bg-ground-2 p-[22px]">
            <h3 className="mb-1 text-[17px]">Open roles</h3>
            <p className="mb-[18px] text-[14.5px] text-ink-2">
              Applications reviewed on a rolling basis.
            </p>

            {internship.roles.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="flex items-center justify-between gap-3.5 border-t border-line py-3.5 no-underline transition-[padding] duration-150 hover:ps-1.5"
              >
                <span>
                  <b className="block text-[15.5px] font-semibold">{r.title}</b>
                  <em className="font-mono text-[11px] uppercase not-italic tracking-[.06em] text-ink-3">
                    {r.meta}
                  </em>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[17px] text-honey-ink">
                  &rarr;
                </span>
              </a>
            ))}

            <div className="mt-[22px]">
              <Button href="#contact" arrow full>Enrol now</Button>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
