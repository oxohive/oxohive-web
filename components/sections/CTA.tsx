"use client";

import dynamic from "next/dynamic";
import { cta, site } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const SceneFrame = dynamic(() => import("@/components/three/SceneFrame"), { ssr: false });
const Converge = dynamic(() => import("@/components/three/objects/Converge"), { ssr: false });

export default function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-screen py-[clamp(60px,8vw,104px)]">
      <div className="pointer-events-none absolute inset-0">
        <SceneFrame cameraPosition={[0, 0.4, 7]} fov={44} height="100%">
          {(progress) => <Converge progress={progress} />}
        </SceneFrame>
      </div>

      <div className="brand-content mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <Reveal>
          <div className="mx-auto max-w-[640px] rounded-2xl bg-white/90 p-6 text-center md:p-8">
            <Eyebrow onScreen center>{cta.eyebrow}</Eyebrow>
            <h2 className="brand-text my-4 text-[clamp(36px,4.8vw,60px)] font-semibold tracking-[-.035em]">{cta.title}</h2>
            <p className="mb-[30px] text-lg text-screen-ink-2">{cta.body}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${site.email}`} onScreen arrow>Book a call</Button>
              <Button href={site.phoneHref} variant="ghost" onScreen>{site.phone}</Button>
            </div>
            <p className="mt-4 text-[15.5px] text-screen-ink-2">
              <a href={`mailto:${site.email}`} className="text-honey-ink no-underline hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-[26px] font-body text-[11.5px] tracking-[.06em] text-sx-com">
              {cta.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
