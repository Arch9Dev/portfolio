const facts = [
  ['Based in', 'Auckland, New Zealand'],
  ['Focus', 'Software Engineering'],
  ['Interests', 'Backend, SaaS, Web Applications, Systems, Cybersecurity'],
]

const changelog = [
  { year: '2021', items: ['Started formal IT study'] },
  { year: '2024', items: ['Software Development Diploma'] },
  { year: '2025', items: ['Bachelor of Software Engineering'] },
  {
    year: '2026',
    items: ['Building StockAura', 'Freelance development', 'Developing professional software engineering skills'],
  },
]

export default function Timeline() {
  return (
    <section id="about" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mono mb-3 text-xs tracking-widest text-muted">ABOUT</p>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Still early. Building on purpose.
            </h2>
            <dl className="space-y-5">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="mono text-[11px] tracking-widest text-accent">{label.toUpperCase()}</dt>
                  <dd className="mt-1 text-sm text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="mono mb-8 text-xs tracking-widest text-muted">CHANGELOG / BEN</p>
            <ol className="space-y-8">
              {changelog.map((entry) => (
                <li key={entry.year} className="grid grid-cols-[64px_1fr] gap-4 border-t border-border pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[96px_1fr]">
                  <span className="mono text-sm text-ink">{entry.year}</span>
                  <ul className="space-y-1.5">
                    {entry.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
