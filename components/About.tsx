const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "Figma",
  "REST / GraphQL APIs",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-[72px] md:py-[110px]">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-9 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="my-[18px] font-display text-[26px] font-medium leading-[1.12] md:text-[34px]">
            Based in Cairo, working with clients everywhere.
          </h2>
          <p className="mb-[18px] max-w-[460px] text-[15.5px] text-text-dim">
            I&apos;m a front-end developer who cares as much about the craft
            of an interface as the code behind it — probably from time spent
            thinking about brand and visual identity outside of engineering
            work too.
          </p>
          <p className="max-w-[460px] text-[15.5px] text-text-dim">
            I mostly build with Next.js and React, and I&apos;m equally
            comfortable owning a project end-to-end or slotting into an
            existing product team.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-[18px]">Tools &amp; languages</div>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3.5 py-2 font-mono text-[12.5px] text-text-dim transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
