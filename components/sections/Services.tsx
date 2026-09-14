import { services } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <Section id="services" tone="raised" className="compact-section">
      <SectionHead
        eyebrow="Services"
        title="What we can help with."
        body="Practical support for your technology, operations and marketing. Explore the services we can deliver for your business."
      />
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <article
              className="service-card flex h-full flex-col rounded-2xl border p-5 pb-6 sm:p-6 sm:pb-7">
              <span className="mb-4 block font-body text-[11px] font-semibold tracking-[.08em] text-honey-ink">
                {s.num} / {s.kind}
              </span>
              <h3 className="mb-2.5 text-[clamp(19px,4.6vw,22px)] font-bold tracking-[-.02em]">{s.title}</h3>
              <p className="text-base leading-relaxed text-ink-2">{s.body}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[5px] bg-ground-3 px-2 py-1 font-body text-xs tracking-[.02em] text-ink-3"
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
