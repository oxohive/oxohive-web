"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CYAN, HONEY, OAK, SCREEN, hexGeometry } from "../shared";

/**
 * INTERNSHIP — one large cell, small cells orbiting it.
 * A mentor and the people learning from them. The small cells start loose and
 * scattered and settle into a stable orbit as the section scrolls: learner to
 * industry-ready, which is exactly what the section says.
 */
export default function Mentorship({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const orbiters = useRef<(THREE.Mesh | null)[]>([]);
  const core = useRef<THREE.Mesh>(null);
  const smallGeo = useMemo(() => hexGeometry(0.26, 0.16), []);
  const coreGeo = useMemo(() => hexGeometry(0.95, 0.34), []);

  const seeds = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        a: (i / 7) * Math.PI * 2,
        r: 1.9 + (i % 3) * 0.34,
        y: (i % 2 === 0 ? 1 : -1) * (0.24 + (i % 4) * 0.14),
        speed: 0.24 + (i % 3) * 0.09,
        chaos: 1.6 + (i % 5) * 0.5,
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;
    const settle = Math.min(1, Math.max(0, (p - 0.1) * 2.2));

    if (group.current) group.current.rotation.x = -0.34;
    if (core.current) {
      core.current.rotation.y = t * 0.3;
      (core.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.3 + Math.sin(t * 1.4) * 0.08;
    }

    seeds.forEach((s, i) => {
      const m = orbiters.current[i];
      if (!m) return;
      const a = s.a + t * s.speed;
      // scattered at first, tightening into orbit as you scroll
      const r = s.r + (1 - settle) * s.chaos;
      m.position.set(
        Math.cos(a) * r,
        s.y * settle + Math.sin(t * 0.8 + i) * 0.08,
        Math.sin(a) * r
      );
      m.rotation.y = a * 1.6;
      m.rotation.z = (1 - settle) * s.chaos;
      m.scale.setScalar(0.55 + settle * 0.45);
      (m.material as THREE.MeshStandardMaterial).emissiveIntensity = settle * 0.7;
    });
  });

  return (
    <group ref={group}>
      <mesh ref={core} geometry={coreGeo} rotation={[0, Math.PI / 6, 0]}>
        <meshStandardMaterial
          color={SCREEN}
          roughness={0.26}
          metalness={0.6}
          emissive={HONEY}
          emissiveIntensity={0.3}
          flatShading
        />
      </mesh>

      {seeds.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            orbiters.current[i] = el;
          }}
          geometry={smallGeo}
        >
          <meshStandardMaterial
            color={OAK}
            roughness={0.4}
            metalness={0.3}
            emissive={i % 3 === 0 ? CYAN : HONEY}
            emissiveIntensity={0.2}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
