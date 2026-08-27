"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CYAN, HONEY, SCREEN, hexGeometry } from "../shared";

/**
 * TECHNOLOGY — a literal stack.
 * Six layers, one per technology card, stacked bottom-up: infrastructure at the
 * base, AI at the top. Scrolling assembles it. The section is called
 * "The stack we build on", so the object is a stack.
 */
export default function StackTower({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const layers = useRef<(THREE.Mesh | null)[]>([]);
  const geo = useMemo(() => hexGeometry(1.5, 0.2), []);

  const spec = useMemo(
    () => [
      { y: -1.15, s: 1.0, c: SCREEN },
      { y: -0.7, s: 0.92, c: SCREEN },
      { y: -0.25, s: 0.84, c: SCREEN },
      { y: 0.2, s: 0.76, c: SCREEN },
      { y: 0.65, s: 0.68, c: SCREEN },
      { y: 1.1, s: 0.6, c: SCREEN },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;

    if (group.current) {
      group.current.rotation.y = t * 0.16;
      group.current.rotation.x = -0.3;
    }

    spec.forEach((s, i) => {
      const m = layers.current[i];
      if (!m) return;
      // layers fly in from below, staggered, as the section scrolls past
      const gate = Math.min(1, Math.max(0, (p - i * 0.07) * 4));
      const eased = 1 - Math.pow(1 - gate, 3);
      m.position.y = s.y - (1 - eased) * 2.6;
      m.rotation.y = Math.PI / 6 + (1 - eased) * 1.4;

      const mat = m.material as THREE.MeshStandardMaterial;
      mat.opacity = eased;
      mat.emissiveIntensity = 0.12 + Math.sin(t * 1.2 + i) * 0.05 + eased * 0.1;
    });
  });

  return (
    <group ref={group}>
      {spec.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => {
            layers.current[i] = el;
          }}
          geometry={geo}
          position={[0, s.y, 0]}
          scale={[s.s, 1, s.s]}
        >
          <meshStandardMaterial
            color={s.c}
            roughness={0.28}
            metalness={0.62}
            emissive={i % 2 === 0 ? HONEY : CYAN}
            emissiveIntensity={0.14}
            transparent
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
