"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CYAN, HONEY, OAK, hexGeometry } from "../shared";

/**
 * CTA — scattered cells drawing together into one.
 * The section asks you to get in touch. The geometry does the same thing:
 * separate pieces converging on a single point.
 */
export default function Converge({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const cells = useRef<(THREE.Mesh | null)[]>([]);
  const geo = useMemo(() => hexGeometry(0.34, 0.2), []);

  const seeds = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const tilt = ((i % 5) - 2) * 0.55;
        return { a, tilt, r: 4.6 + (i % 4) * 0.8, spin: 0.2 + (i % 3) * 0.1 };
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;
    const pull = Math.min(1, Math.max(0, (p - 0.15) * 1.8));
    const eased = 1 - Math.pow(1 - pull, 3);

    if (group.current) {
      group.current.rotation.y = t * 0.1;
      group.current.rotation.x = -0.2;
    }

    seeds.forEach((s, i) => {
      const m = cells.current[i];
      if (!m) return;
      const r = s.r * (1 - eased * 0.86);
      const a = s.a + t * s.spin;
      m.position.set(Math.cos(a) * r, s.tilt * (1 - eased * 0.8), Math.sin(a) * r);
      m.rotation.set(t * 0.4, a, t * 0.25);
      m.scale.setScalar(0.6 + eased * 0.5);
      (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15 + eased * 0.85;
    });
  });

  return (
    <group ref={group}>
      {seeds.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            cells.current[i] = el;
          }}
          geometry={geo}
        >
          <meshStandardMaterial
            color={i % 4 === 0 ? OAK : HONEY}
            roughness={0.3}
            metalness={0.5}
            emissive={i % 5 === 0 ? CYAN : HONEY}
            emissiveIntensity={0.2}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
