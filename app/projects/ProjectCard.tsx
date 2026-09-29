"use client";

import { useState } from "react";

type Props = {
  label?: string; // shown like a code comment, e.g. "track 01"
  title: string;
  meta?: string;
  tech?: string[];
  bullets?: string[];
};

// VS Code Dark+ style accent colors for the tags
const TAG_COLORS = [
  { text: "#569cd6", bg: "rgba(86,156,214,0.15)" }, // blue
  { text: "#4ec9b0", bg: "rgba(78,201,176,0.15)" }, // teal
  { text: "#c586c0", bg: "rgba(197,134,192,0.15)" }, // purple
  { text: "#dcdcaa", bg: "rgba(220,220,170,0.15)" }, // yellow
  { text: "#ce9178", bg: "rgba(206,145,120,0.15)" }, // orange
];

export default function ProjectCard({ label, title, meta, tech, bullets }: Props) {
  const [open, setOpen] = useState(false);
  const expandable = !!bullets?.length;

  return (
    <article className="rounded-lg border border-[#5a5a5a] bg-[#2d2d30] shadow-md transition duration-200 hover:-translate-y-1 hover:border-[#569cd6] hover:shadow-xl hover:shadow-black/40">
      <div className="px-5 py-4">
        <button
          type="button"
          onClick={() => expandable && setOpen((o) => !o)}
          aria-expanded={expandable ? open : undefined}
          className={`flex w-full items-start justify-between gap-4 text-left ${
            expandable ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <span>
            {label && (
              <span className="mb-1 block font-mono text-xs text-[#6a9955]">{`// ${label}`}</span>
            )}
            <span className="block text-xl font-bold text-white">{title}</span>
            {meta && <span className="mt-1 block text-sm text-[#9da5b4]">{meta}</span>}
          </span>
          {expandable && (
            <span
              aria-hidden
              className={`mt-1 shrink-0 font-mono text-2xl leading-none text-[#569cd6] transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          )}
        </button>

        {tech && tech.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tech.map((t, i) => {
              const c = TAG_COLORS[i % TAG_COLORS.length];
              return (
                <li
                  key={t}
                  className="rounded-md px-2.5 py-1 font-mono text-xs"
                  style={{ color: c.text, background: c.bg, border: `1px solid ${c.text}55` }}
                >
                  {t}
                </li>
              );
            })}
          </ul>
        )}

        {expandable && (
          <div
            className={`grid transition-all duration-300 ease-out ${
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-[#569cd6]">
                {bullets!.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
