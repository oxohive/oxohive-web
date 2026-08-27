import { footerCols, site, social } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ground-2 pt-[clamp(48px,6vw,72px)] pb-[30px]">
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href={site.url} className="flex items-center gap-2.5 no-underline">
              <span
                aria-hidden="true"
                className="clip-hex grid size-[30px] shrink-0 place-items-center bg-screen font-mono text-[15px] font-bold text-honey"
              >
                O
              </span>
              <span className="font-display text-xl font-bold tracking-[-.03em]">{site.name}</span>
            </a>
            <p className="mt-3.5 mb-[18px] max-w-[36ch] text-[15px] text-ink-2">
              Websites, mobile apps, CRM and ERP systems, and the search work that makes sure
              they get found.
            </p>
            <div className="flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  rel="noopener"
                  className="rounded-md border border-line-2 px-[11px] py-[7px] font-mono text-[11px] uppercase tracking-[.06em] text-ink-2 no-underline transition-colors hover:border-ink hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-ink-3">
                {col.title}
              </h4>
              <ul className="m-0 list-none p-0">
                {col.links.map((l) => (
                  <li key={l.label} className="mb-2.5">
                    <a
                      href={l.href}
                      className="text-[15px] text-ink-2 no-underline transition-colors hover:text-honey-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-3.5 border-t border-line pt-[22px] font-mono text-[11.5px] tracking-[.03em] text-ink-3">
          <span>
            &copy; 2026 {site.name} &middot; {site.domain}
          </span>
          <span className="flex flex-wrap gap-[18px]">
            <a href="/privacy-policy" className="no-underline hover:text-ink">Privacy Policy</a>
            <a href="/terms" className="no-underline hover:text-ink">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
