export default function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.3fr_0.9fr] lg:items-end lg:py-32">
        <div className="animate-reveal">
          <p className="mono mb-6 text-xs tracking-wide text-accent">
            SOFTWARE ENGINEERING GRADUATE — AUCKLAND, NZ
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Benjamin Du Toit
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted">
            Software engineering graduate based in Auckland, NZ. <br /> I build full-stack
            applications, backend systems and practical software products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-[#08130D] transition-transform hover:translate-x-0.5"
            >
              View my work
            </a>
            <a
              href="https://github.com/Arch9Dev"
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-xs tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
            >
              GITHUB
            </a>
          </div>
        </div>

        <div className="animate-reveal [animation-delay:120ms]">
          <div className="rounded-lg border border-border bg-surface p-6">
            <p className="mono mb-5 text-[11px] tracking-widest text-muted">SYSTEM STATUS</p>

            <div className="mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-accent" />
              </span>
              <span className="mono text-xs text-accent">ONLINE</span>
            </div>

            <dl className="space-y-3">
              {[
                ['Focus', 'SOFTWARE'],
                ['Location', 'AUCKLAND, NZ'],
                ['Current Project', 'StockAura  '],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-t border-border/70 pt-3 first:border-t-0 first:pt-0">
                  <dt className="mono text-xs text-muted">{label}</dt>
                  <dd className="mono text-xs text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
