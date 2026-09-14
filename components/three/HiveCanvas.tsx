"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Honeycomb from "./Honeycomb";
import CameraRig from "./CameraRig";
import Lighting from "./Lighting";

/**
 * Procedural hive. No models, no textures, no HDRIs — geometry is generated
 * in code, so this ships at a few KB and needs nothing sourced.
 */
export default function HiveCanvas() {
  const scroll = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = host.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height + window.innerHeight;
      const seen = window.innerHeight - r.top;
      scroll.current = Math.min(1, Math.max(0, seen / total));
    };
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={host} style={{ position: "absolute", inset: 0 }} aria-hidden="true">
      <Canvas
        dpr={[1, typeof window !== "undefined" && window.innerWidth < 768 ? 1.25 : 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 6.5, 9], fov: 42 }}
      >
        <CameraRig scroll={scroll} pointer={pointer} />
        <Lighting />
        <Honeycomb scroll={scroll} pointer={pointer} />
        <fog attach="fog" args={["#ffffff", 30, 62]} />
      </Canvas>
    </div>
  );
}
