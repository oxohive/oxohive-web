import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onScreen?: boolean;
  arrow?: boolean;
  full?: boolean;
};

const base =
  "group inline-flex items-center gap-2.5 rounded-lg border-[1.5px] px-[22px] py-[13px] " +
  "text-[15px] font-semibold no-underline whitespace-nowrap cursor-pointer " +
  "transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5";

const styles = {
  warm: {
    primary: "bg-ink text-ground border-ink hover:bg-honey hover:border-honey hover:text-[#1D1814]",
    ghost: "bg-transparent text-ink border-line-2 hover:border-ink",
  },
  screen: {
    primary: "bg-honey text-[#141110] border-honey hover:bg-[#F2B45A] hover:border-[#F2B45A]",
    ghost: "bg-transparent text-screen-ink border-screen-line hover:border-screen-ink-2",
  },
};

export default function Button({
  href,
  children,
  variant = "primary",
  onScreen = false,
  arrow = false,
  full = false,
}: Props) {
  const cls = [
    base,
    styles[onScreen ? "screen" : "warm"][variant],
    full ? "w-full justify-center" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-[3px]"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
