export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border-soft pb-10 pt-24 md:pt-[100px]"
    >
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <div className="eyebrow justify-center">Contact</div>
        <h2 className="mx-auto my-8 max-w-[760px] font-display text-[32px] font-medium leading-[1.12] md:text-[56px]">
          Let&apos;s build something
          <br />
          <em className="not-italic text-accent">considered.</em>
        </h2>
        <a
          href="mailto:sheriefkarim@gmail.com"
          className="inline-flex items-center gap-2.5 border-b border-accent pb-1 font-mono text-base text-accent"
        >
          sheriefkarim@gmail.com ↗
        </a>

        <div className="mx-auto mt-24 flex max-w-content flex-col items-center justify-between gap-3.5 font-mono text-xs text-text-faint md:flex-row">
          <span>© 2026 Karim.</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/karimsherief"
              className="hover:text-text-dim"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karimsherief"
              className="hover:text-text-dim"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
