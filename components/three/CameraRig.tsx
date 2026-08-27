"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function CameraRig({
  scroll,
  pointer,
}: {
  scroll: React.MutableRefObject<number>;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const s = scroll.current;
    const k = 1 - Math.pow(0.001, delta);

    target.current.set(
      pointer.current.x * 2.4,
      6.4 - s * 3.4 + pointer.current.y * 0.9,
      9.2 - s * 4.6
    );

    camera.position.lerp(target.current, k);
    camera.lookAt(0, -0.4 + s * 0.5, 0);
  });

  return null;
}
