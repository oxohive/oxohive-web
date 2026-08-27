"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HEX = {
  radius: 0.52,
  gap: 0.09,
  rings: 9,
  depth: 0.34,
};

type Cell = { x: number; z: number; dist: number; phase: number };

/** Axial hex grid -> world positions. Pure math, no assets. */
function buildCells(rings: number): Cell[] {
  const w = HEX.radius * 2 + HEX.gap;
  const cells: Cell[] = [];
  for (let q = -rings; q <= rings; q++) {
    const r1 = Math.max(-rings, -q - rings);
    const r2 = Math.min(rings, -q + rings);
    for (let r = r1; r <= r2; r++) {
      const x = w * (3 / 4) * q;
      const z = w * (Math.sqrt(3) / 2) * (r + q / 2);
      const dist = Math.sqrt(x * x + z * z);
      cells.push({ x, z, dist, phase: (q * 0.7 + r * 1.3) % (Math.PI * 2) });
    }
  }
  return cells;
}

export default function Honeycomb({
  scroll,
  pointer,
}: {
  scroll: React.MutableRefObject<number>;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const cells = useMemo(() => buildCells(HEX.rings), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  // hexagonal prism: a 6-sided cylinder, flat-capped
  const geometry = useMemo(
    () => new THREE.CylinderGeometry(HEX.radius, HEX.radius, HEX.depth, 6, 1),
    []
  );

  const maxDist = useMemo(
    () => cells.reduce((m, c) => Math.max(m, c.dist), 0),
    [cells]
  );

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;

    const t = state.clock.elapsedTime;
    const s = scroll.current;
    const px = pointer.current.x;
    const py = pointer.current.y;

    for (let i = 0; i < cells.length; i++) {
      const c = cells[i];
      const norm = c.dist / maxDist;

      // pointer proximity in the grid plane
      const dx = c.x - px * 7;
      const dz = c.z + py * 5;
      const near = Math.max(0, 1 - Math.sqrt(dx * dx + dz * dz) / 4.2);

      // resting wave + scroll swell + cursor lift
      const wave = Math.sin(t * 0.85 + c.phase + norm * 3.1) * 0.16;
      const swell = Math.sin(s * Math.PI) * (1 - norm) * 1.35;
      const lift = near * near * 1.15;

      dummy.position.set(c.x, wave + swell + lift, c.z);
      dummy.rotation.set(0, Math.PI / 6, 0);
      const sc = 1 - norm * 0.22 + near * 0.14;
      dummy.scale.set(sc, 1 + lift * 0.7, sc);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);

      // amber core fading to oak at the rim, hot under the cursor
      const heat = Math.min(1, near * 1.5 + swell * 0.28);
      color.setRGB(
        0.36 + heat * 0.54 - norm * 0.08,
        0.22 + heat * 0.36 - norm * 0.05,
        0.09 + heat * 0.12
      );
      m.setColorAt(i, color);
    }

    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[geometry, undefined, cells.length]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        vertexColors
        roughness={0.42}
        metalness={0.16}
        emissive="#E5A445"
        emissiveIntensity={0.13}
        flatShading
      />
    </instancedMesh>
  );
}
