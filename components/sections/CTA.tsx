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
    <section id="contact" className="relative overflow-hidden bg-screen py-[clamp(60px,8vw,104px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] bottom-[-60%] h-[380px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(229,164,69,.28),transparent_66%)] blur-[30px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <SceneFrame cameraPosition={[0, 0.4, 7]} fov={44} height="100%">
          {(progress) => <Converge progress={progress} />}
        </SceneFrame>
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <Eyebrow onScreen center>{cta.eyebrow}</Eyebrow>
            <h2 className="my-4 text-[clamp(31px,4.4vw,52px)] text-screen-ink">{cta.title}</h2>
            <p className="mb-[30px] text-lg text-screen-ink-2">{cta.body}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${site.email}`} onScreen arrow>Book a call</Button>
              <Button href={`mailto:${site.email}`} variant="ghost" onScreen>{site.email}</Button>
            </div>
            <p className="mt-[26px] font-mono text-[11.5px] tracking-[.06em] text-sx-com">
              {cta.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
