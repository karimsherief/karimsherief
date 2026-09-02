export default function Header() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-content items-center justify-between px-10">
        <a href="#" className="font-display text-xl font-semibold tracking-tight">
          K<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-9 text-sm text-text-dim md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-border px-3 py-[7px] font-mono text-xs text-text-dim"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2 shadow-[0_0_0_3px_rgba(110,139,128,0.15)]" />
            Available for freelance
          </a>
        </div>
      </nav>
    </header>
  );
}
