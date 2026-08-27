"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/**
 * Shared shell for every section scene.
 *
 * - mounts only once the section is near the viewport (no WebGL cost above the fold)
 * - drops to frameloop="never" while off-screen, so eight scenes never animate at once
 * - reports 0..1 scroll progress through the section, which each object animates against
 * - lights everything from one CC0 Poly Haven HDRI so all sections share a look
 */
export default function SceneFrame({
  children,
  height = "100%",
  cameraPosition = [0, 1.6, 6.2],
  fov = 40,
  className = "",
}: {
  children: (progress: React.MutableRefObject<number>) => React.ReactNode;
  height?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  // read once at mount, outside effect state-setting
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setMounted(true);
        setActive(e.isIntersecting);
      },
      { rootMargin: "220px 0px" }
    );
    io.observe(el);

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const total = r.height + window.innerHeight;
      progress.current = Math.min(1, Math.max(0, (window.innerHeight - r.top) / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={host} className={className} style={{ height }} aria-hidden="true">
      {mounted && (
        <Canvas
          dpr={[1, 1.6]}
          frameloop={active && !reduced ? "always" : "never"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
          <Environment files="/hdri/studio-warm.hdr" environmentIntensity={0.55} />
          <ambientLight intensity={0.35} color="#F3EBDF" />
          <directionalLight position={[-5, 7, 4]} intensity={1.7} color="#E5A445" />
          <directionalLight position={[6, 3, 5]} intensity={0.5} color="#CFDDE4" />
          {children(progress)}
        </Canvas>
      )}
    </div>
  );
}
