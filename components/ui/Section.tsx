type Tone = "warm" | "raised" | "screen";

const tones: Record<Tone, string> = {
  warm: "bg-ground",
  raised: "bg-ground-2 border-y border-line",
  screen: "bg-screen text-screen-ink",
};

export default function Section({
  id,
  tone = "warm",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-[clamp(46px,8vw,104px)] ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">{children}</div>
    </section>
  );
}
