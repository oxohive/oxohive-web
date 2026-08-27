"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HONEY, OAK, SCREEN, hexGeometry } from "../shared";

/**
 * SERVICES — six cells in a ring, one per service.
 * Six services, six sides to a hexagon, six cells. The count is the point.
 * The active card's cell rises and heats up.
 */
export default function HexCluster({
  progress,
  active,
}: {
  progress: React.MutableRefObject<number>;
  active: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const cells = useRef<(THREE.Mesh | null)[]>([]);
  const geo = useMemo(() => hexGeometry(0.86, 0.3), []);

  const ring = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2;
        return { x: Math.cos(a) * 1.72, z: Math.sin(a) * 1.72, i };
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;

    if (group.current) {
      group.current.rotation.y = t * 0.13 + p * 0.9;
      group.current.rotation.x = -0.42 + Math.sin(t * 0.3) * 0.03;
    }

    ring.forEach((c, i) => {
      const m = cells.current[i];
      if (!m) return;
      const isOn = active.current === i;
      const target = isOn ? 0.72 : Math.sin(t * 0.9 + i * 1.1) * 0.09;
      m.position.y += (target - m.position.y) * 0.12;

      const mat = m.material as THREE.MeshStandardMaterial;
      const heat = isOn ? 0.85 : 0.1;
      mat.emissiveIntensity += (heat - mat.emissiveIntensity) * 0.12;
      const sc = isOn ? 1.12 : 1;
      m.scale.x += (sc - m.scale.x) * 0.12;
      m.scale.z += (sc - m.scale.z) * 0.12;
    });
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* centre cell — the studio itself */}
      <mesh geometry={geo} rotation={[0, Math.PI / 6, 0]} scale={[1.15, 1, 1.15]}>
        <meshStandardMaterial
          color={SCREEN}
          roughness={0.3}
          metalness={0.5}
          emissive={HONEY}
          emissiveIntensity={0.22}
          flatShading
        />
      </mesh>

      {ring.map((c) => (
        <mesh
          key={c.i}
          ref={(el) => {
            cells.current[c.i] = el;
          }}
          geometry={geo}
          position={[c.x, 0, c.z]}
          rotation={[0, Math.PI / 6, 0]}
        >
          <meshStandardMaterial
            color={OAK}
            roughness={0.45}
            metalness={0.2}
            emissive={HONEY}
            emissiveIntensity={0.1}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
