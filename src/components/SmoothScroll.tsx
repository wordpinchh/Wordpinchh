"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 0.8,
        smoothTouch: false,
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
