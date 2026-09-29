"use client";

import { useState } from "react";

// Everything is drawn in this coordinate space and scales with the page width.
const W = 1200;
const NUT_TOP = 22;
const NUT_BOTTOM = 138; // board is narrower at the nut...
const END_TOP = 6;
const END_BOTTOM = 154; // ...and wider at the body end

const FRETS = 15;
const STRINGS = [5, 4.2, 3.5, 3, 2.5, 2]; // thickness, low E to high e
const GRAIN = [0.08, 0.17, 0.26, 0.35, 0.43, 0.52, 0.6, 0.69, 0.78, 0.87, 0.94]; // faint grain lines
const INLAYS = [3, 5, 7, 9, 15]; // single dots (12 is a double dot)

// Real fret spacing: each fret is 2^(1/12) closer than the last.
const fretX = (n: number) => (W * (1 - 2 ** (-n / 12))) / (1 - 2 ** (-FRETS / 12));
const top = (x: number) => NUT_TOP + ((END_TOP - NUT_TOP) * x) / W;
const bottom = (x: number) => NUT_BOTTOM + ((END_BOTTOM - NUT_BOTTOM) * x) / W;
const at = (x: number, t: number) => top(x) + (bottom(x) - top(x)) * t; // t: 0 = top edge, 1 = bottom

export default function GuitarStrings() {
  const [plucked, setPlucked] = useState<boolean[]>(STRINGS.map(() => false));
  const set = (i: number, value: boolean) =>
    setPlucked((prev) => prev.map((p, idx) => (idx === i ? value : p)));

  const mid = (n: number) => (fretX(n - 1) + fretX(n)) / 2;

  return (
    <svg viewBox={`0 0 ${W} 160`} className="block w-full" role="img" aria-label="Guitar fretboard">
      <defs>
        {/* wood: lighter in the middle, darker toward the edges */}
        <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2013" />
          <stop offset="0.5" stopColor="#6b4327" />
          <stop offset="1" stopColor="#3a2013" />
        </linearGradient>
        {/* fret wire: bright center, darker sides, like a polished cylinder */}
        <linearGradient id="fret" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7a7a7a" />
          <stop offset="0.45" stopColor="#f4f4f4" />
          <stop offset="1" stopColor="#8c8c8c" />
        </linearGradient>
        <radialGradient id="pearl" cx="0.35" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#bdb6a6" />
        </radialGradient>
        <linearGradient id="nut" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f2ead8" />
          <stop offset="1" stopColor="#b9b09a" />
        </linearGradient>
      </defs>

      {/* wood */}
      <polygon
        points={`0,${NUT_TOP} ${W},${END_TOP} ${W},${END_BOTTOM} 0,${NUT_BOTTOM}`}
        fill="url(#wood)"
      />

      {/* wood grain */}
      {GRAIN.map((t, i) => (
        <line
          key={i}
          x1="0"
          x2={W}
          y1={at(0, t)}
          y2={at(W, t)}
          stroke="#000"
          strokeOpacity={0.12 + (i % 3) * 0.05}
          strokeWidth={0.6 + (i % 2) * 0.6}
        />
      ))}

      {/* nut */}
      <rect x="0" y={NUT_TOP} width="9" height={NUT_BOTTOM - NUT_TOP} fill="url(#nut)" />

      {/* frets */}
      {Array.from({ length: FRETS }, (_, i) => i + 1).map((n) => {
        const x = fretX(n);
        return (
          <g key={n}>
            {/* soft shadow on the wood just after the fret */}
            <rect x={x + 2} y={top(x)} width="3" height={bottom(x) - top(x)} fill="#000" opacity="0.3" />
            <rect x={x - 2} y={top(x)} width="4.5" height={bottom(x) - top(x)} fill="url(#fret)" />
          </g>
        );
      })}

      {/* inlay dots */}
      {INLAYS.map((n) => (
        <circle key={n} cx={mid(n)} cy={at(mid(n), 0.5)} r="7" fill="url(#pearl)" />
      ))}
      <circle cx={mid(12)} cy={at(mid(12), 0.3)} r="7" fill="url(#pearl)" />
      <circle cx={mid(12)} cy={at(mid(12), 0.7)} r="7" fill="url(#pearl)" />

      {/* strings (hover to pluck) */}
      {STRINGS.map((thickness, i) => {
        const t = (i + 0.5) / STRINGS.length;
        const y1 = at(0, t);
        const y2 = at(W, t);
        return (
          <g
            key={i}
            className={plucked[i] ? "string-pluck" : undefined}
            onMouseEnter={() => set(i, true)}
            onAnimationEnd={() => set(i, false)}
          >
            {/* shadow on the wood */}
            <line x1="0" x2={W} y1={y1 + 3} y2={y2 + 3} stroke="#000" strokeOpacity="0.4" strokeWidth={thickness} />
            {/* steel body */}
            <line x1="0" x2={W} y1={y1} y2={y2} stroke="#9a9a9a" strokeWidth={thickness} />
            {/* highlight along the top edge for the metallic shine */}
            <line
              x1="0"
              x2={W}
              y1={y1 - thickness * 0.2}
              y2={y2 - thickness * 0.2}
              stroke="#f7f7f7"
              strokeWidth={Math.max(thickness * 0.35, 0.8)}
            />
            {/* invisible wider line so thin strings are easy to hit with the mouse */}
            <line x1="0" x2={W} y1={y1} y2={y2} stroke="transparent" strokeWidth="24" />
          </g>
        );
      })}
    </svg>
  );
}
