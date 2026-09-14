import { technology } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

export default function Technology() {
  return (
    <Section id="technology" tone="screen" className="compact-section">
      <SectionHead
        onScreen
        eyebrow="Technology with purpose"
        title="Solve the gaps holding your business back."
        body="Start with the problem, choose the right technology, and agree on how success will be measured. Every solution has a clear job to do."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {technology.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <article className="h-full rounded-2xl border border-screen-line bg-screen-2 p-6 md:p-7">
              <h3 className="mb-3 text-[22px] font-bold leading-snug text-ink">{t.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-ink-2">{t.body}</p>
              <dl className="m-0 grid gap-4 border-t border-line pt-5">
                {t.rows.map(([label, value]) => (
                  <div key={label} className="grid gap-1 sm:grid-cols-[100px_1fr] sm:gap-4">
                    <dt className="text-sm font-bold text-honey-ink">{label}</dt>
                    <dd className="m-0 text-[15px] leading-relaxed text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
