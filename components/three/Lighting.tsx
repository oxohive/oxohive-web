"use client";

import { LOGO_PALETTE } from "./shared";

/** Neutral key keeps the cell colors true; brand rim lights give the glossy sheen. */
export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.55} color="#FFFFFF" />
      <hemisphereLight args={["#FFFFFF", "#DCE6FF", 0.45]} />

      {/* key */}
      <directionalLight position={[-6, 9, 4]} intensity={0.95} color="#FFFFFF" />
      {/* brand rims: cool on the left, warm on the right — the gloss highlights */}
      <directionalLight position={[-9, 3, 5]} intensity={0.85} color={LOGO_PALETTE[0]} />
      <directionalLight position={[9, 4, 5]} intensity={0.85} color={LOGO_PALETTE[4]} />
      <pointLight position={[0, 4.5, 1]} intensity={26} distance={22} color={LOGO_PALETTE[2]} />
      <pointLight position={[3, 2.4, 6]} intensity={18} distance={16} color={LOGO_PALETTE[3]} />
    </>
  );
}
