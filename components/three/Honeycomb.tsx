"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { LOGO_PALETTE } from "./shared";

const BRAND_COLORS = LOGO_PALETTE.map((hex) => new THREE.Color(hex));

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
      const wave = Math.sin(t * 0.35 + c.phase + norm * 3.1) * 0.10;
      const swell = Math.sin(s * Math.PI) * (1 - norm) * 1.35;
      const lift = near * near * 0.55;

      dummy.position.set(c.x, wave + swell + lift, c.z);
      dummy.rotation.set(0, Math.PI / 6, 0);
      const sc = 1 - norm * 0.22 + near * 0.14;
      dummy.scale.set(sc, 1 + lift * 0.7, sc);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);

      // A brand gradient that flows across the hive like the process wave.
      const base = THREE.MathUtils.clamp((c.x / maxDist + 1) / 2, 0, 1);
      const flow = (base * 0.82 + c.z / maxDist * 0.12 + t * 0.045) % 1;
      const blend = (flow < 0 ? flow + 1 : flow) * BRAND_COLORS.length;
      const stop = Math.min(Math.floor(blend), BRAND_COLORS.length - 1);
      const next = (stop + 1) % BRAND_COLORS.length;
      color.copy(BRAND_COLORS[stop]).lerp(BRAND_COLORS[next], blend - stop);
      // glossy crest: cells riding the wave or under the cursor read brighter
      color.multiplyScalar(1.05 + wave * 1.1 + near * 0.35);
      m.setColorAt(i, color);
    }

    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[geometry, undefined, cells.length]}
    >
      <meshPhysicalMaterial
        vertexColors
        toneMapped={false}
        roughness={0.16}
        metalness={0.28}
        clearcoat={1}
        clearcoatRoughness={0.12}
        reflectivity={0.85}
        sheen={0.6}
        sheenColor="#FFFFFF"
        emissive="#FFFFFF"
        emissiveIntensity={0.05}
        flatShading
      />
    </instancedMesh>
  );
}
