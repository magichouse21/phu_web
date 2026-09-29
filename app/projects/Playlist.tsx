"use client";

import { useState } from "react";

type Track = {
  title: string;
  meta?: string;
  tech?: string[];
  bullets?: string[];
};

const TAG_COLORS = [
  { text: "#569cd6", bg: "rgba(86,156,214,0.15)" }, // blue
  { text: "#4ec9b0", bg: "rgba(78,201,176,0.15)" }, // teal
  { text: "#c586c0", bg: "rgba(197,134,192,0.15)" }, // purple
  { text: "#dcdcaa", bg: "rgba(220,220,170,0.15)" }, // yellow
  { text: "#ce9178", bg: "rgba(206,145,120,0.15)" }, // orange
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px]" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

export default function Playlist({
  tracks,
  label = "playlist",
  defaultPlaying = null,
}: {
  tracks: Track[];
  label?: string;
  defaultPlaying?: number | null; // index of the track that starts open
}) {
  // Like a music player: one track "plays" (expands) at a time.
  const [playing, setPlaying] = useState<number | null>(defaultPlaying);

  return (
    <section className="overflow-hidden rounded-lg border border-[#5a5a5a] bg-[#2d2d30] shadow-md">
      <div className="flex items-center justify-between border-b border-[#3c3c3c] px-5 py-3 font-mono text-xs">
        <span className="text-[#6a9955]">{`// ${label}`}</span>
        <span className="text-[#9da5b4]">
          {tracks.length} tracks
        </span>
      </div>

      <ol>
        {tracks.map((t, i) => {
          const isPlaying = playing === i;
          const expandable = !!t.bullets?.length;
          return (
            <li
              key={t.title}
              className={`border-b border-[#3c3c3c] last:border-b-0 transition-colors ${
                isPlaying ? "bg-[#37373d]" : "hover:bg-[#333337]"
              }`}
            >
              <div className="flex items-start gap-4 px-5 py-4">
                <button
                  type="button"
                  onClick={() => expandable && setPlaying(isPlaying ? null : i)}
                  aria-label={`${isPlaying ? "Collapse" : "Play"} ${t.title}`}
                  aria-expanded={isPlaying}
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                    isPlaying
                      ? "border-[#4ec9b0] bg-[#4ec9b0] text-[#1e1e1e]"
                      : "border-[#5a5a5a] text-[#569cd6] hover:border-[#569cd6] hover:bg-[#569cd6] hover:text-[#1e1e1e]"
                  }`}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#6a9955]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-xl font-bold ${isPlaying ? "text-[#4ec9b0]" : "text-white"}`}>
                      {t.title}
                    </h3>
                    {isPlaying && (
                      <span className="flex h-4 items-end gap-[2px]" aria-hidden>
                        <span className="eq-bar" style={{ animationDelay: "0s" }} />
                        <span className="eq-bar" style={{ animationDelay: "0.2s" }} />
                        <span className="eq-bar" style={{ animationDelay: "0.4s" }} />
                      </span>
                    )}
                  </div>
                  {t.meta && <p className="mt-1 text-sm text-[#9da5b4]">{t.meta}</p>}

                  {t.tech && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {t.tech.map((tag, k) => {
                        const c = TAG_COLORS[k % TAG_COLORS.length];
                        return (
                          <li
                            key={tag}
                            className="rounded-md px-2.5 py-1 font-mono text-xs"
                            style={{ color: c.text, background: c.bg, border: `1px solid ${c.text}55` }}
                          >
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {expandable && (
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isPlaying ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-[#569cd6]">
                          {t.bullets!.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
