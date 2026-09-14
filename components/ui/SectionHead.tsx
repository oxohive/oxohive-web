import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  body,
  onScreen = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  onScreen?: boolean;
}) {
  return (
    <Reveal>
      <div className="mb-[clamp(34px,4vw,52px)] max-w-[920px]">
        <Eyebrow onScreen={onScreen}>{eyebrow}</Eyebrow>
        <h2
          className="brand-text mt-4 mb-5 text-[clamp(36px,4.8vw,60px)] font-semibold tracking-[-.035em]"
        >
          {title}
        </h2>
        {body && (
          <p className={onScreen ? "max-w-[68ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-screen-ink-2" : "max-w-[68ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2"}>
            {body}
          </p>
        )}
      </div>
    </Reveal>
  );
}
