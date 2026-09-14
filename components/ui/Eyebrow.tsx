export default function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  onScreen?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={[
        "m-0 inline-flex items-center font-body text-black text-[clamp(16px,4.2vw,26px)] font-bold tracking-[-.015em]",
        center ? "justify-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
