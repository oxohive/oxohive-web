"use client";

/** Warm key from upper-left (the lamp), cool fill from the right (the window). */
export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} color="#F3EBDF" />
      <directionalLight
        position={[-6, 9, 4]}
        intensity={2.1}
        color="#E5A445"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[7, 4, 6]} intensity={0.7} color="#CFDDE4" />
      <pointLight position={[0, 3.2, 0]} intensity={14} distance={14} color="#E5A445" />
    </>
  );
}
