"use client";

import { industries } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

export default function Industries() {
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow="Industries"
        title="Software for your industry."
        body="Different businesses need different tools. Here are some of the areas we build for."
      />

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.05}>
            <article className="industry-card h-full rounded-[14px] border p-5 sm:p-[22px]">
              <h3 className="mb-2 text-[19px] font-bold">{ind.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-2">{ind.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
