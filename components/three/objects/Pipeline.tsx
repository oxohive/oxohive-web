"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HONEY, OAK, hexGeometry } from "../shared";

/**
 * PROCESS — four nodes on a line, filling in order.
 * Discovery, Design, Development, Deploy. Scroll drives the fill, so the object
 * tells you where you are in the sequence. Order carries information here,
 * which is the only reason this one is numbered.
 */
export default function Pipeline({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const nodes = useRef<(THREE.Mesh | null)[]>([]);
  const links = useRef<(THREE.Mesh | null)[]>([]);
  const geo = useMemo(() => hexGeometry(0.5, 0.26), []);

  const xs = useMemo(() => [-2.55, -0.85, 0.85, 2.55], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;

    if (group.current) {
      group.current.rotation.x = -0.5;
      group.current.rotation.y = Math.sin(t * 0.22) * 0.16;
    }

    xs.forEach((_, i) => {
      const m = nodes.current[i];
      if (!m) return;
      const gate = Math.min(1, Math.max(0, (p - 0.12 - i * 0.16) * 6));
      const mat = m.material as THREE.MeshStandardMaterial;

      m.position.y = (1 - gate) * -0.9;
      m.rotation.y = Math.PI / 6 + t * 0.35 * gate;
      const sc = 0.7 + gate * 0.42;
      m.scale.setScalar(sc);
      mat.emissiveIntensity = gate * 0.9;
      mat.color.set(gate > 0.5 ? HONEY : OAK);
    });

    links.current.forEach((l, i) => {
      if (!l) return;
      const gate = Math.min(1, Math.max(0, (p - 0.2 - i * 0.16) * 6));
      l.scale.x = gate;
      (l.material as THREE.MeshStandardMaterial).emissiveIntensity = gate * 0.7;
    });
  });

  return (
    <group ref={group}>
      {xs.slice(0, 3).map((x, i) => (
        <mesh
          key={`link-${i}`}
          ref={(el) => {
            links.current[i] = el;
          }}
          position={[x + 0.85, 0, 0]}
          scale={[0, 1, 1]}
        >
          <boxGeometry args={[1.7, 0.05, 0.05]} />
          <meshStandardMaterial color={HONEY} emissive={HONEY} emissiveIntensity={0.5} />
        </mesh>
      ))}

      {xs.map((x, i) => (
        <mesh
          key={i}
          ref={(el) => {
            nodes.current[i] = el;
          }}
          geometry={geo}
          position={[x, 0, 0]}
          rotation={[0, Math.PI / 6, 0]}
        >
          <meshStandardMaterial
            color={OAK}
            roughness={0.34}
            metalness={0.45}
            emissive={HONEY}
            emissiveIntensity={0.1}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
