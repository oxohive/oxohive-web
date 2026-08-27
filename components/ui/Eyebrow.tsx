/* mono is structural here, not decorative: it reads like a shell prompt */
export default function Eyebrow({
  children,
  onScreen = false,
  center = false,
}: {
  children: React.ReactNode;
  onScreen?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={[
        "m-0 inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[.14em]",
        onScreen ? "text-honey" : "text-honey-ink",
        center ? "justify-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden="true" className="size-[7px] shrink-0 bg-honey" />
      {children}
    </p>
  );
}
