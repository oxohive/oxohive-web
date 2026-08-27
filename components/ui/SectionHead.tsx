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
      <div className="mb-[clamp(34px,4vw,52px)] max-w-[62ch]">
        <Eyebrow onScreen={onScreen}>{eyebrow}</Eyebrow>
        <h2
          className={[
            "mt-4 mb-3.5 text-[clamp(29px,3.7vw,45px)]",
            onScreen ? "text-screen-ink" : "text-ink",
          ].join(" ")}
        >
          {title}
        </h2>
        {body && (
          <p className={onScreen ? "text-[17.5px] text-screen-ink-2" : "text-[17.5px] text-ink-2"}>
            {body}
          </p>
        )}
      </div>
    </Reveal>
  );
}
