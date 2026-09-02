const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "GraphQL",
  "Figma",
];

export default function StackMarquee() {
  const items = [...STACK, ...STACK];

  return (
    <div className="overflow-hidden border-y border-border-soft py-5">
      <div className="flex w-max animate-scroll gap-12">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-mono text-[13px] text-text-faint"
          >
            {item} <em className="not-italic text-accent-2">//</em>
          </span>
        ))}
      </div>
    </div>
  );
}
