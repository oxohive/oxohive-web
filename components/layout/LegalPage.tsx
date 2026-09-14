import Link from "next/link";
import type { LegalDoc } from "@/lib/content";
import { site } from "@/lib/content";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* Shared shell for the legal documents. Prose sits in a narrower column than
   the marketing sections — long policy text needs a shorter measure to stay
   readable. */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Header />
      <main id="main">
        <article className="bg-ground py-[clamp(40px,7vw,88px)]">
          <div className="mx-auto w-full max-w-[760px] px-[clamp(20px,5vw,48px)]">
            <Link
              href="/"
              className="font-body text-[13px] font-medium text-ink-3 no-underline transition-colors hover:text-honey-ink"
            >
              &larr; Back to {site.name}
            </Link>

            <h1 className="brand-text mt-5 mb-3 text-[clamp(30px,6.4vw,52px)] font-semibold tracking-[-.035em]">
              {doc.title}
            </h1>

            <p className="m-0 font-body text-[13px] tracking-[.02em] text-ink-3">
              Last updated{" "}
              <time dateTime={doc.updatedISO}>{doc.updated}</time>
            </p>

            <div className="mt-7 border-t border-line pt-7">
              {doc.intro.map((p) => (
                <p
                  key={p}
                  className="mb-4 text-[clamp(16px,1.7vw,18.5px)] leading-relaxed text-ink-2"
                >
                  {p}
                </p>
              ))}
            </div>

            {doc.blocks.map((block) => (
              <section key={block.heading} className="mt-9">
                <h2 className="mb-3 text-[clamp(19px,2.6vw,24px)] font-semibold tracking-[-.02em]">
                  {block.heading}
                </h2>

                {block.body?.map((p) => (
                  <p key={p} className="mb-3.5 leading-relaxed text-ink-2">
                    {p}
                  </p>
                ))}

                {block.list && (
                  <ul className="m-0 mt-1 list-none p-0">
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="relative mb-2.5 pl-[22px] leading-relaxed text-ink-2 before:absolute before:left-0 before:top-[0.68em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-honey before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-11 rounded-xl border border-line bg-ground-2 p-[clamp(18px,3vw,26px)]">
              <h2 className="mb-2 text-[17px] font-semibold tracking-[-.015em]">
                Still have a question?
              </h2>
              <p className="mb-3 text-[15.5px] leading-relaxed text-ink-2">
                If anything here is unclear, ask us and we will explain it in plain terms.
              </p>
              <p className="m-0 flex flex-col gap-1 text-[15.5px]">
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-2 no-underline transition-colors hover:text-honey-ink"
                >
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="text-ink-2 no-underline transition-colors hover:text-honey-ink"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
