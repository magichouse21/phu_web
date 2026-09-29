import Playlist from "./Playlist";

export const metadata = { title: "My Projects | Phu Nguyen" };

type Entry = {
  title: string;
  meta?: string;
  tech?: string[];
  bullets?: string[];
};

const summary =
  "IT infrastructure and systems professional with hands-on experience in systems monitoring, automation, and cloud infrastructure fundamentals. Strong foundation in scripting, Linux administration, and IT operations.";

const projects: Entry[] = [
  {
    title: "InboxAssist",
    meta: "AI Club, Project Manager · February 2026 – Present",
    tech: ["Python", "FastAPI", "Microsoft Graph API", "OAuth", "LLMs", "Vector search"],
    bullets: [
      "Leading a team of student developers building an AI-powered email assistant that retrieves, summarizes, and drafts responses to Outlook emails using LLMs and vector search.",
      "Architecting backend services in Python (FastAPI) with secure OAuth access through the Microsoft Graph Mail API.",
      "Implementing multi-model LLM workflows (OpenAI, Anthropic, DeepSeek, and more) to validate email retrieval and generate context-aware summaries and responses.",
      "Coordinating a phased roadmap (API integration, data processing, AI pipeline) and managing recruitment, onboarding, and task delegation.",
      "Exploring Chrome and Safari browser extension integration for a user-facing interface.",
    ],
  },
  {
    title: "Wazuh SIEM Infrastructure Lab",
    meta: "Independent project",
    tech: ["Wazuh", "Ubuntu", "Linux", "Bash", "SSH", "Windows 11"],
    bullets: [
      "Deployed Wazuh on an Ubuntu server VM, configuring SSH access and remote management.",
      "Set up log aggregation and security monitoring to detect authentication failures and identify brute-force attempts.",
      "Analyzed events in the Wazuh dashboard to correlate logs and spot attack patterns.",
      "Extended monitoring by provisioning a Windows 11 VM to collect additional telemetry across operating systems.",
    ],
  },
  {
    title: "RC-Controlled Rover",
    meta: "ASME IAM3D Additive Manufacturing Competition · 3rd place",
    tech: ["Python", "Embedded systems", "Motor control"],
    bullets: [
      "Sole programmer; built the full control system from scratch within a 48-hour limit.",
      "Wrote real-time motor and servo control for the drivetrain, arms, wrist, and bucket of a rover that collects and deposits sand.",
      "Designed throttle ramping, deadband filtering, and directional mapping, plus kill-switch and braking safety features.",
      "Integrated ESCs, servos, and a camera into a responsive control architecture.",
    ],
  },
];

const experience: Entry[] = [
  {
    title: "Business Analyst Intern, Bayen Group",
    meta: "Torrance, CA · June – August 2026",
    tech: ["ADA/WCAG", "QA testing", "Power Automate", "Microsoft 365"],
    bullets: [
      "Ran QA testing on 20+ pages of a production website against ADA/WCAG standards, documenting defects with reproduction steps and triaging by severity and user impact.",
      "Wrote a remediation report and presented findings to stakeholders, translating technical requirements into effort estimates and business risk.",
      "Automated Microsoft 365 file management with Power Automate, routing OneDrive uploads to designated folders.",
      "Delivered Microsoft 365 and process automation training to non-technical staff.",
    ],
  },
  {
    title: "Pharmacy Technician, Walgreens",
    meta: "Irvine, CA · October 2023 – June 2026",
    tech: ["First-line IT support", "Troubleshooting", "Device management"],
    bullets: [
      "Provided first-line IT support for patients and staff, troubleshooting iPads and mobile devices used for digital forms and vaccine registration.",
      "Resolved connectivity, hardware configuration, and account access issues for users with limited technical experience.",
      "Maintained device inventory and readiness, restoring devices to working order and keeping systems available.",
      "Reduced support requests with clear user documentation and guidance.",
    ],
  },
  {
    title: "Scout Leader, Vietnamese Eucharistic Youth Movement",
    meta: "Irvine, CA · September 2023 – Present",
    tech: ["Leadership", "Logistics", "Mentoring"],
    bullets: [
      "Led groups of 20–50+ participants on multi-day trips and community events, keeping them safe, organized, and accountable.",
      "Planned outing logistics including scheduling, resources, and risk management.",
      "Made real-time decisions in outdoor environments with limited resources, and handled conflict resolution.",
      "Mentored younger members in teamwork, communication, and personal development.",
    ],
  },
];

const education: Entry[] = [
  {
    title: "California State University, Long Beach",
    meta: "B.S. Computer Science, Statistics minor · Expected June 2027",
    tech: ["Computer Science", "Statistics minor", "GPA 3.6"],
    bullets: [
      "Relevant courses: Operating Systems, Networks and Distributed Systems, Intro to Cybersecurity, Data Structures & Algorithms.",
    ],
  },
];

const certifications = [
  "Google IT Support Professional Certificate (2026)",
  "Microsoft Certified: Power Platform Fundamentals, PL-900 (2026)",
  "CompTIA Security+ (in progress, expected 2026)",
];

const skills: { group: string; items: string[] }[] = [
  { group: "Systems & Networking", items: ["Windows", "Linux", "DNS", "IP addressing", "Network troubleshooting", "Virtual machines", "Infrastructure monitoring"] },
  { group: "Scripting & Automation", items: ["Python", "Bash", "PowerShell", "Git"] },
  { group: "Microsoft 365", items: ["Teams", "OneDrive", "SharePoint", "Excel"] },
  { group: "Data & Libraries", items: ["SQL", "pandas", "NumPy"] },
  { group: "Cloud & Infrastructure", items: ["AWS (interested)", "Docker (interested)"] },
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

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="mb-4 font-mono text-4xl font-bold text-white">
        <span className="text-[#c586c0]">const</span> <span className="text-[#4ec9b0]">projects</span>
      </h1>
      <p className="mb-12 leading-relaxed text-[#9da5b4]">{summary}</p>

      <section className="mb-14">
        <Heading>Projects</Heading>
        <Playlist tracks={projects} label="playlist: projects" defaultPlaying={0} />
      </section>

      <section className="mb-14">
        <Heading>Experience & Leadership</Heading>
        <Playlist tracks={experience} label="playlist: experience & leadership" />
      </section>

      <section className="mb-14">
        <Heading>Education</Heading>
        <Playlist tracks={education} label="playlist: education" />
      </section>

      <section className="mb-14">
        <Heading>Certifications</Heading>
        <ul className="flex flex-wrap gap-3">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-md border border-[#5a5a5a] bg-[#2d2d30] px-4 py-2 font-mono text-sm text-[#4ec9b0]"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <Heading>Technical Skills</Heading>
        <div className="space-y-5">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="mb-2 font-mono font-semibold text-[#c586c0]">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#5a5a5a] bg-[#2d2d30] px-2.5 py-1 font-mono text-xs text-[#9cdcfe]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
