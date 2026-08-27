"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HONEY, OAK, SCREEN, hexGeometry } from "../shared";

/**
 * INDUSTRIES — four hex pillars at four heights.
 * FinTech, Healthcare, E-commerce, Education. Different domains, different
 * depths. A small district rather than four identical blocks.
 */
export default function Skyline({
  progress,
  active,
}: {
  progress: React.MutableRefObject<number>;
  active: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const pillars = useRef<(THREE.Mesh | null)[]>([]);
  const geo = useMemo(() => hexGeometry(0.6, 1), []);

  const spec = useMemo(
    () => [
      { x: -2.4, h: 2.3 },
      { x: -0.8, h: 1.5 },
      { x: 0.8, h: 2.9 },
      { x: 2.4, h: 1.9 },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;

    if (group.current) {
      group.current.rotation.y = -0.35 + Math.sin(t * 0.2) * 0.22 + p * 0.4;
      group.current.rotation.x = -0.16;
    }

    spec.forEach((s, i) => {
      const m = pillars.current[i];
      if (!m) return;
      const isOn = active.current === i;
      const gate = Math.min(1, Math.max(0, (p - 0.08 - i * 0.05) * 5));
      const h = s.h * gate * (isOn ? 1.22 : 1);

      m.scale.y += (Math.max(0.001, h) - m.scale.y) * 0.14;
      m.position.y = m.scale.y / 2 - 1.2;

      const mat = m.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity += ((isOn ? 0.8 : 0.12) - mat.emissiveIntensity) * 0.12;
      mat.color.lerp(new THREE.Color(isOn ? HONEY : OAK), 0.1);
    });
  });

  return (
    <group ref={group}>
      {/* the plate they stand on */}
      <mesh position={[0, -1.24, 0]} rotation={[0, Math.PI / 6, 0]}>
        <cylinderGeometry args={[4.2, 4.2, 0.12, 6]} />
        <meshStandardMaterial color={SCREEN} roughness={0.4} metalness={0.5} flatShading />
      </mesh>

      {spec.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => {
            pillars.current[i] = el;
          }}
          geometry={geo}
          position={[s.x, 0, 0]}
          rotation={[0, Math.PI / 6, 0]}
        >
          <meshStandardMaterial
            color={OAK}
            roughness={0.36}
            metalness={0.42}
            emissive={HONEY}
            emissiveIntensity={0.12}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
