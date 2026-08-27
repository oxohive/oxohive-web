import * as THREE from "three";

/** Palette, mirrored from the CSS tokens so 3D and 2D never drift apart. */
export const HONEY = "#E5A445";
export const OAK = "#C6A079";
export const CREAM = "#F3EBDF";
export const SCREEN = "#13161B";
export const CYAN = "#7DCFFF";
export const ESPRESSO = "#1D1814";

/** A hexagonal prism. Every object on the site is built from this one shape. */
export function hexGeometry(radius: number, depth: number) {
  return new THREE.CylinderGeometry(radius, radius, depth, 6, 1);
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
