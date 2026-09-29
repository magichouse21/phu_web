import Link from "next/link";
import GuitarStrings from "./GuitarStrings";

// Add your links here and they will show up in the Contact section.
const CONTACT = {
  email: "phunfun21@gmail.com", // e.g. "you@example.com"
  github: "https://github.com/magichouse21", // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/phunguyenphu/", // e.g. "https://www.linkedin.com/in/your-handle"
};

const STACK = ["Python", "Linux", "Next.js", "TypeScript", "Microsoft 365", "SQL"];

const featured = [
  {
    title: "InboxAssist",
    meta: "AI Club · Project Manager",
    blurb:
      "AI-powered Outlook assistant that retrieves, summarizes, and drafts email replies with LLMs and vector search.",
    tech: ["Python", "FastAPI", "Microsoft Graph"],
  },
  {
    title: "Wazuh SIEM Lab",
    meta: "Independent project",
    blurb:
      "Security monitoring lab on Ubuntu and Windows 11 VMs that detects authentication failures and brute-force attempts.",
    tech: ["Wazuh", "Linux", "Bash"],
  },
  {
    title: "RC-Controlled Rover",
    meta: "ASME IAM3D · 3rd place",
    blurb:
      "Sole programmer of a full rover control system, built from scratch in 48 hours for a national competition.",
    tech: ["Python", "Embedded", "Motor control"],
  },
];

const credentials = [
  "Google IT Support Certificate",
  "Microsoft PL-900",
  "CompTIA Security+ (in progress)",
];

const timeline = [
  { when: "Jun – Aug 2026", what: "Business Analyst Intern", where: "Bayen Group", color: "#4ec9b0" },
  { when: "Feb 2026 – now", what: "Project Manager, InboxAssist", where: "AI Club", color: "#569cd6" },
  { when: "Sep 2023 – now", what: "Scout Leader", where: "Vietnamese Eucharistic Youth Movement", color: "#c586c0" },
  { when: "Expected Jun 2027", what: "B.S. Computer Science", where: "CSU Long Beach", color: "#dcdcaa" },
];

const TAG_COLORS = [
  { text: "#569cd6", bg: "rgba(86,156,214,0.15)" },
  { text: "#4ec9b0", bg: "rgba(78,201,176,0.15)" },
  { text: "#c586c0", bg: "rgba(197,134,192,0.15)" },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="font-mono text-2xl font-bold text-white">
        <span className="text-[#6a9955]">{"// "}</span>
        {children}
      </h2>
      <div className="mt-2 h-px w-full bg-[#3c3c3c]" />
    </div>
  );
}

export default function Home() {
  const contactLinks = [
    CONTACT.email && { label: "Email", href: `mailto:${CONTACT.email}` },
    CONTACT.github && { label: "GitHub", href: CONTACT.github },
    CONTACT.linkedin && { label: "LinkedIn", href: CONTACT.linkedin },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="flex flex-1 flex-col font-sans">
      {/* hero */}
      <section className="mx-auto w-full max-w-3xl px-6 pb-10 pt-16">
        <p className="fade-up font-mono text-sm text-[#6a9955]">{"// hi, I'm"}</p>
        <h1 className="fade-up mt-2 font-mono text-5xl font-bold text-white sm:text-6xl" style={{ animationDelay: "0.08s" }}>
          <span className="text-[#c586c0]">const</span> <span className="text-[#4ec9b0]">phu</span>
          <span className="text-[#d4d4d4]"> = </span>
          <span className="text-[#ce9178]">&quot;builder&quot;</span>
        </h1>
        <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-[#9da5b4]" style={{ animationDelay: "0.16s" }}>
          Computer Science student building web tools, automation, and AI projects. I enjoy working
          with people to solve problems, and I&apos;m looking for entry-level IT roles.
        </p>

        <ul className="fade-up mt-5 flex flex-wrap gap-2" style={{ animationDelay: "0.24s" }}>
          {STACK.map((s, i) => {
            const c = TAG_COLORS[i % TAG_COLORS.length];
            return (
              <li
                key={s}
                className="rounded-md px-2.5 py-1 font-mono text-xs"
                style={{ color: c.text, background: c.bg, border: `1px solid ${c.text}55` }}
              >
                {s}
              </li>
            );
          })}
        </ul>

        <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.32s" }}>
          <Link
            href="/projects"
            className="rounded-md bg-[#569cd6] px-5 py-2.5 font-mono text-sm font-semibold text-[#1e1e1e] transition hover:bg-[#6cb0ea]"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-[#5a5a5a] px-5 py-2.5 font-mono text-sm text-white transition hover:border-[#569cd6] hover:text-[#569cd6]"
          >
            About me
          </Link>
        </div>
      </section>

      {/* the guitar: pluck the strings */}
      <section aria-label="Guitar" className="w-full py-6">
        <GuitarStrings />
        <p className="mt-3 text-center font-mono text-xs text-[#6a9955]">{"// go on, pluck a string"}</p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-10">
        {/* featured projects */}
        <section className="mb-14">
          <Heading>Featured projects</Heading>
          <ul className="grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <li key={p.title}>
                <Link
                  href="/projects"
                  className="flex h-full flex-col rounded-lg border border-[#5a5a5a] bg-[#2d2d30] p-5 shadow-md transition duration-200 hover:-translate-y-1 hover:border-[#569cd6] hover:shadow-xl hover:shadow-black/40"
                >
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-xs text-[#9da5b4]">{p.meta}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed">{p.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t, i) => {
                      const c = TAG_COLORS[i % TAG_COLORS.length];
                      return (
                        <li
                          key={t}
                          className="rounded px-2 py-0.5 font-mono text-[11px]"
                          style={{ color: c.text, background: c.bg, border: `1px solid ${c.text}55` }}
                        >
                          {t}
                        </li>
                      );
                    })}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-right font-mono text-sm">
            <Link href="/projects" className="text-[#569cd6] hover:underline">
              see everything →
            </Link>
          </p>
        </section>

        {/* credentials */}
        <section className="mb-14">
          <Heading>Credentials</Heading>
          <ul className="flex flex-wrap gap-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="rounded-md border border-[#5a5a5a] bg-[#2d2d30] px-4 py-2 font-mono text-sm text-[#4ec9b0]"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* experience snapshot */}
        <section className="mb-14">
          <Heading>Experience snapshot</Heading>
          <ol className="relative ml-2 border-l border-[#3c3c3c]">
            {timeline.map((t) => (
              <li key={t.what} className="relative pb-6 pl-6 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full"
                  style={{ background: t.color }}
                />
                <p className="font-mono text-xs text-[#6a9955]">{`// ${t.when}`}</p>
                <p className="mt-0.5 font-bold text-white">{t.what}</p>
                <p className="text-sm text-[#9da5b4]">{t.where}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* contact */}
        <section>
          <Heading>Let&apos;s talk</Heading>
          <p className="mb-5 leading-relaxed text-[#9da5b4]">
            Open to entry-level IT roles and interesting projects. Say hi.
          </p>
          {contactLinks.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-block rounded-md border border-[#5a5a5a] bg-[#2d2d30] px-5 py-2.5 font-mono text-sm text-[#569cd6] transition hover:border-[#569cd6]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-sm text-[#6a9955]">{"// add your links in CONTACT at the top of app/page.tsx"}</p>
          )}
        </section>
      </div>
    </main>
  );
}
