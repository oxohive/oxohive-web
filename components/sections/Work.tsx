import { work } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <Section id="work" tone="screen">
      <SectionHead
        onScreen
        eyebrow="Selected work"
        title="Projects that shipped."
        body="A sample of recent builds. Full case studies available on request."
      />
      {/* PLACEHOLDER: swap for real client projects and figures before launch */}
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-screen-line bg-screen-2">
              <div className="flex items-start justify-between gap-3.5 px-[22px] pt-[22px]">
                <span className="font-body text-[10.5px] tracking-[.02em] text-honey">
                  {w.kind}
                </span>
                <span className="shrink-0 font-body text-xs tabular-nums text-sx-num">{w.score}</span>
              </div>
              <div className="flex-1 px-[22px] pt-3 pb-[22px]">
                <h3 className="mb-2.5 text-xl tracking-[-.02em]">{w.title}</h3>
                <p className="text-[15px] leading-relaxed text-screen-ink-2">{w.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[5px] border border-screen-line px-2 py-1 font-body text-[10.5px] text-sx-cyan"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 border-t border-screen-line">
                {w.stats.map(([val, label], j) => (
                  <div
                    key={label}
                    className={[
                      "px-2.5 py-3.5 text-center",
                      j < 2 ? "border-r border-screen-line" : "",
                    ].join(" ")}
                  >
                    <b className="block font-body text-[17px] font-bold tabular-nums text-screen-ink">
                      {val}
                    </b>
                    <span className="font-body text-[10px] tracking-[.02em] text-sx-com">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
