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
      <div className="mb-[clamp(26px,4vw,52px)] max-w-[920px]">
        <Eyebrow onScreen={onScreen}>{eyebrow}</Eyebrow>
        <h2
          className="brand-text mt-3 mb-4 sm:mt-4 sm:mb-5 text-[clamp(27px,6.4vw,60px)] font-semibold tracking-[-.035em]"
        >
          {title}
        </h2>
        {body && (
          <p className={onScreen ? "max-w-[68ch] text-[clamp(15.5px,1.6vw,20px)] leading-relaxed text-screen-ink-2" : "max-w-[68ch] text-[clamp(15.5px,1.6vw,20px)] leading-relaxed text-ink-2"}>
            {body}
          </p>
        )}
      </div>
    </Reveal>
  );
}
