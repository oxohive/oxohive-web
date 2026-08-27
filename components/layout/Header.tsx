"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-60 border-b border-line bg-ground/[.88] backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto flex h-[70px] w-full max-w-[1180px] items-center gap-6 px-[clamp(20px,5vw,48px)]">
        <a href={site.url} className="flex shrink-0 items-center gap-2.5 no-underline">
          <span
            aria-hidden="true"
            className="clip-hex grid size-[30px] shrink-0 place-items-center bg-screen font-mono text-[15px] font-bold text-honey shadow-[0_4px_14px_-6px_rgba(229,164,69,.6)]"
          >
            O
          </span>
          <span className="font-display text-xl font-bold tracking-[-.03em]">{site.name}</span>
        </a>

        <button
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto cursor-pointer rounded-lg border-[1.5px] border-line-2 bg-transparent px-3.5 py-2.5 font-mono text-[13px] font-medium text-ink md:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          onClick={() => setOpen(false)}
          className={[
            "gap-1 md:ml-auto md:flex md:items-center md:static md:flex-row md:border-0 md:bg-transparent md:p-0",
            open
              ? "absolute inset-x-0 top-[70px] flex flex-col items-stretch border-b border-line bg-ground px-[clamp(20px,5vw,48px)] pt-3.5 pb-5"
              : "hidden",
          ].join(" ")}
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3.5 py-3 text-base font-medium text-ink-2 no-underline transition-colors hover:bg-ground-2 hover:text-ink md:py-2 md:text-[14.5px]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <span className="ml-1.5 hidden md:inline-flex">
          <Button href="#contact" arrow>
            Book a call
          </Button>
        </span>
      </div>
    </header>
  );
}
