"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  { plain: "<Hero", jsx: <><span className="text-[#7A93B8]">&lt;Hero</span></> },
  {
    plain: '  title="Selected Work"',
    jsx: (
      <>
        &nbsp;&nbsp;<span className="text-accent">title</span>=
        <span className="text-[#8FB29B]">&quot;Selected Work&quot;</span>
      </>
    ),
  },
  {
    plain: '  status="available"',
    jsx: (
      <>
        &nbsp;&nbsp;<span className="text-accent">status</span>=
        <span className="text-[#8FB29B]">&quot;available&quot;</span>
      </>
    ),
  },
  { plain: "/>", jsx: <span className="text-[#7A93B8]">/&gt;</span> },
];

export default function Hero() {
  const [linesShown, setLinesShown] = useState(0);
  const [charsShown, setCharsShown] = useState(0);
  const [previewShown, setPreviewShown] = useState(false);
  const [btnShown, setBtnShown] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setLinesShown(CODE_LINES.length);
      setPreviewShown(true);
      setBtnShown(true);
      return;
    }

    // Reset in case this effect re-runs (e.g. React Strict Mode's
    // mount → cleanup → mount dev-only double-invoke).
    setLinesShown(0);
    setCharsShown(0);
    setPreviewShown(false);
    setBtnShown(false);

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIndex >= CODE_LINES.length) {
        setTimeout(() => {
          setPreviewShown(true);
          setTimeout(() => setBtnShown(true), 200);
        }, 250);
        return;
      }

      const lineLength = CODE_LINES[lineIndex].plain.length;
      if (charIndex <= lineLength) {
        setLinesShown(lineIndex + 1);
        setCharsShown(charIndex);
        charIndex++;
        timeoutId = setTimeout(typeNext, 22);
      } else {
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNext, 120);
      }
    };

    timeoutId = setTimeout(typeNext, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="pb-24 pt-24 md:pt-[100px] md:pb-[90px]">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10">
        <div>
          <div className="eyebrow">Front-end developer — Cairo, Egypt</div>
          <h1 className="my-6 font-display text-[38px] font-medium leading-[1.12] tracking-tight md:text-[60px]">
            Karim builds interfaces
            <br />
            that feel <em className="font-normal not-italic italic text-accent">considered.</em>
          </h1>
          <p className="mb-9 max-w-[460px] text-[17px] text-text-dim">
            I design and build fast, detail-obsessed web products with
            Next.js and React — from first pixel to shipped code. Currently
            taking on select freelance projects.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#work"
              className="rounded-lg bg-accent px-6 py-3.5 text-[14.5px] font-semibold text-[#151312] transition-transform hover:-translate-y-0.5"
            >
              View selected work →
            </a>
            <a
              href="#contact"
              className="border-b border-border py-3.5 text-[14.5px] font-semibold text-text-dim transition-colors hover:border-text-dim hover:text-text"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[10px] border border-border bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="font-mono text-[11.5px] text-text-faint">
              Hero.jsx
            </div>
          </div>

          <div className="min-h-[190px] px-[22px] pb-[18px] pt-[22px] font-mono text-[13px] leading-[1.75]">
            {CODE_LINES.slice(0, linesShown).map((line, i) => {
              const isCurrentLine = i === linesShown - 1;
              const showFull = !isCurrentLine || i < linesShown - 1;
              return (
                <div key={i}>
                  <span className="inline-block w-[18px] text-text-faint">
                    {i + 1}
                  </span>
                  {isCurrentLine && charsShown < line.plain.length ? (
                    <>
                      <span>{line.plain.slice(0, charsShown)}</span>
                      <span className="inline-block h-[15px] w-[7px] animate-blink bg-accent align-text-bottom" />
                    </>
                  ) : (
                    line.jsx
                  )}
                </div>
              );
            })}
          </div>

          <div className="mx-[22px] mb-[22px] border-t border-dashed border-border pt-[18px]">
            <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-faint">
              Live preview
            </div>
            <div
              className={`flex items-center justify-between rounded-lg border border-border bg-bg-soft px-[18px] py-4 transition-all duration-500 ${
                previewShown
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1.5 opacity-0"
              }`}
            >
              <div>
                <div className="text-sm font-semibold">Selected Work</div>
                <div className="mt-0.5 text-xs text-text-dim">
                  A rendered component, not a screenshot.
                </div>
              </div>
              <div
                className={`rounded-md bg-accent px-3.5 py-2 text-xs font-semibold text-[#151312] transition-all duration-300 ${
                  btnShown ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                View →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
