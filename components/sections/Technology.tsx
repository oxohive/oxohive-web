"use client";

import dynamic from "next/dynamic";
import { technology, capability } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const StackTower = dynamic(() => import("@/components/three/objects/StackTower"), { ssr: false });

export default function Technology() {
  return (
    <Section id="technology" tone="screen">
      <SectionHead
        onScreen
        eyebrow="Technology"
        title="The stack we build on."
        body="Battle-tested tools, chosen because they hold up in production — not because they trended last quarter."
      />

      <div className="pointer-events-none mb-4 h-[320px] w-full sm:h-[400px]">
        <SceneFrame cameraPosition={[0, 1.2, 6.6]} fov={40}>
          {(progress) => <StackTower progress={progress} />}
        </SceneFrame>
      </div>

      <div className="mb-[22px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {technology.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <article className="h-full rounded-[14px] border border-screen-line bg-screen-2 p-[22px] pb-[26px] transition-colors duration-200 hover:border-[#3A4452]">
              <h3 className="mb-1.5 text-[18.5px] tracking-[-.015em]">{t.title}</h3>
              <p className="mb-[18px] text-[14.5px] leading-snug text-screen-ink-2">{t.body}</p>
              <dl className="m-0 grid gap-3">
                {t.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[.1em] text-sx-com">
                      {k}
                    </dt>
                    <dd className="m-0 font-mono text-[13px] leading-snug text-sx-cyan">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="rounded-[14px] border border-screen-line bg-screen-2 px-[26px] py-7">
          <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2">
            {capability.map((group) => (
              <div key={group.title}>
                <h3 className="mb-[18px] font-mono text-[15px] font-medium uppercase tracking-[.08em] text-screen-ink-2">
                  {group.title}
                </h3>
                {group.bars.map(([name, val]) => (
                  <div key={name} className="mb-[15px]">
                    <div className="mb-[7px] flex items-baseline justify-between">
                      <span className="text-[14.5px] font-medium">{name}</span>
                      <span className="font-mono text-[12.5px] tabular-nums text-sx-num">{val}%</span>
                    </div>
                    <div className="h-[5px] overflow-hidden rounded-full bg-screen-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-honey to-sx-cyan"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
