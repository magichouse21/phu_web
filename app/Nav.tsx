"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/projects", label: "My Projects", color: "#4ec9b0" },
  { href: "/about", label: "About Me", color: "#c586c0" },
];

// VS Code-style editor tabs: the active page's tab gets a blue top border.
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-end">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`flex items-center gap-2 border-t-2 px-4 py-2 font-mono text-sm transition-colors ${
                  active
                    ? "border-[#569cd6] bg-[#1e1e1e] text-white"
                    : "border-transparent bg-[#2d2d2d] text-[#9da5b4] hover:text-white"
                }`}
              >
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: tab.color }}
                />
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
