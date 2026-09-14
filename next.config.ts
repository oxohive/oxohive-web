import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Run the React Compiler as native Rust inside Turbopack. The default Babel
    // transform spawns Node subprocesses that exhaust memory on this machine.
    turbopackRustReactCompiler: true,
  },
};

export default nextConfig;
