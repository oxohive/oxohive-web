import { process, site } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import ProcessWave from "@/components/ui/ProcessWave";
import Button from "@/components/ui/Button";

const accents = ["#075bdb", "#7138ff", "#bc238c", "#b74c17"];

export default function Process() {
  return (
    <Section id="process" tone="warm" className="compact-section process-container">
      <ProcessWave />
      <SectionHead
        eyebrow="Process"
        title="How we work together."
        body="A clear plan. Visible progress. Results you can measure. We connect every stage of delivery to the value it should create for your business."
      />
      <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 xl:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.title} className="process-step flex flex-col rounded-2xl border border-line bg-ground p-5 sm:p-6">
            <h3 className="mb-3 md:min-h-[3.75rem] text-[clamp(19px,4.6vw,22px)] font-bold leading-snug text-ink">{step.title}</h3>
            <p className="mb-6 text-base leading-relaxed text-ink-2">{step.body}</p>
            <div className="mt-auto border-t border-line pt-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-[.08em]" style={{ color: accents[i] }}>What you get</p>
              <p className="text-sm font-semibold leading-relaxed text-ink">{step.meta}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="roi-panel mt-6 grid gap-6 rounded-2xl border border-line p-5 sm:p-6 md:gap-7 md:p-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.08em] text-honey-ink">Return on investment</p>
          <h3 className="mb-3 text-[clamp(22px,5.4vw,28px)] font-bold leading-tight text-ink">Define the value.<br />Then measure it.</h3>
          <p className="mb-5 max-w-[45ch] text-base leading-relaxed text-ink-2">We agree on the measures relevant to your project before work begins. Returns are assessed against implementation and ongoing costs.</p>
          <Button href={`mailto:${site.email}`}>Discuss your project</Button>
        </div>
        <dl className="m-0 grid gap-4 sm:grid-cols-3 lg:items-center">
          {[
            ["Time saved", "Hours of manual work reduced across your team."],
            ["Revenue impact", "Qualified enquiries, conversion and repeat business."],
            ["Cost efficiency", "Operating costs, errors and rework compared with your baseline."],
          ].map(([title, body]) => (
            <div key={title} className="h-full rounded-xl border border-white bg-white/85 p-5">
              <dt className="mb-2 text-lg font-bold text-ink">{title}</dt>
              <dd className="m-0 text-sm leading-relaxed text-ink-2">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
