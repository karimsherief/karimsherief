const PRINCIPLES = [
  {
    title: "Design and code, together",
    body: "I don't hand off a Figma file and disappear — the visual details get refined in the browser, where the real constraints live.",
  },
  {
    title: "Performance is a feature",
    body: "A beautiful interface that loads slowly isn't beautiful. Speed, accessibility, and polish are part of the same job, not an afterthought.",
  },
  {
    title: "Plain, direct communication",
    body: "Clear updates, realistic timelines, and no jargon — you should always know exactly where a project stands.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-[72px] md:py-[110px]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-14">
          <div className="eyebrow">How I work</div>
          <h2 className="mt-2 font-display text-[28px] font-medium md:text-[38px]">
            A short list of things I don&apos;t compromise on.
          </h2>
        </div>

        <div className="border-t border-border-soft">
          {PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-2.5 border-b border-border-soft py-8 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <h3 className="text-[19px] font-medium text-text">
                {item.title}
              </h3>
              <p className="max-w-[560px] text-[14.5px] text-text-dim">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
