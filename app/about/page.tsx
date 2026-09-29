export const metadata = { title: "About Me | Phu Nguyen" };

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="mb-6 font-mono text-4xl font-bold text-white">
        <span className="text-[#c586c0]">const</span> <span className="text-[#4ec9b0]">aboutMe</span>
      </h1>

      <p className="mb-4 text-lg leading-relaxed text-[#9da5b4]">
        Hi, I&apos;m Phu. I&apos;m a Computer Science student who enjoys building
        things for the web and working with people to solve problems.
      </p>

      <div className="mb-6 mt-10">
        <h2 className="font-mono text-2xl font-bold text-white">
          <span className="text-[#6a9955]">{"// "}</span>Outside of code
        </h2>
        <div className="mt-2 h-px w-full bg-[#3c3c3c]" />
      </div>

      <ul className="grid gap-4">
        <li className="rounded-lg border border-[#5a5a5a] bg-[#2d2d30] px-5 py-4">
          <h3 className="font-mono text-xl font-semibold text-[#569cd6]">Guitar</h3>
          <p className="mt-1 leading-relaxed">
            I play guitar. It&apos;s why the strings run across the top of this site.
          </p>
        </li>
        <li className="rounded-lg border border-[#5a5a5a] bg-[#2d2d30] px-5 py-4">
          <h3 className="font-mono text-xl font-semibold text-[#4ec9b0]">Golf</h3>
          <p className="mt-1 leading-relaxed">I play golf whenever I get the chance.</p>
        </li>
      </ul>
    </main>
  );
}
