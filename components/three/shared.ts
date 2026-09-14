import * as THREE from "three";

/** Shared animation palette matched to the supplied Oxohive logo. */
export const LOGO_PALETTE = ["#00D5ED", "#0866FF", "#7138FF", "#F52C9C", "#FF655E", "#FFB45E"] as const;
export const HONEY = LOGO_PALETTE[0];
export const OAK = LOGO_PALETTE[2];
export const CREAM = "#F7F8FF";
export const SCREEN = "#040711";
export const CYAN = LOGO_PALETTE[1];
export const ESPRESSO = "#030409";

/** A hexagonal prism. Every object on the site is built from this one shape. */
export function hexGeometry(radius: number, depth: number) {
  return new THREE.CylinderGeometry(radius, radius, depth, 6, 1);
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
