"use client";

/**
 * Reduced-motion access.
 *
 * Standard: SYSTEM/DESIGN-LANGUAGE/02-MOTION-SYSTEM.md §7
 *
 * WHY THIS EXISTS: the July 2026 audit found 96 animations across five
 * production sites running at full amplitude for users who had asked their OS
 * to stop motion. Two of those sites shipped the global CSS override
 * (`*{animation-duration:0.001ms!important}`) and believed they were covered.
 * They were not — Motion writes inline style values on animation frames, so it
 * never consults CSS `animation-duration` or `transition-duration`.
 *
 * The only reliable controls are `<MotionConfig reducedMotion="user">` (applied
 * by MotionProvider) and this hook for anything hand-rolled: rAF loops,
 * counters, autoplay, scroll effects.
 */

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * `true` when the user has asked for reduced motion.
 *
 * Returns `false` during SSR *and the first client render* so the markup matches
 * between server and client, then reflects the real OS preference after mount.
 *
 * NOTE (Bougasvlei, Phase 1): `useReducedMotion()` from motion/react returns the
 * live matchMedia value on the very first client render, which does NOT match the
 * server (the server has no matchMedia and resolves to `false`). Under
 * `prefers-reduced-motion: reduce` that produced a React hydration mismatch on
 * every reveal (server `opacity:0` / `scale(1.06)` vs client final state). The
 * mount guard below makes the hook honour the contract stated above. This fix
 * should be upstreamed to `ENGINE/motion/useMotionSafe.ts` in the OS.
 */
export function useMotionSafe(): boolean {
  const prefersReduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? prefersReduced : false;
}
