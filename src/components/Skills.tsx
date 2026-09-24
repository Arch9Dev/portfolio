const groups = [
  {
    label: 'Applications',
    items: [
      { name: 'React', note: 'StockAura, FurTherapy' },
      { name: 'TypeScript', note: 'StockAura' },
      { name: 'Next.js', note: '' },
      { name: 'SvelteKit', note: 'FurTherapy' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Express', note: 'StockAura, FurTherapy' },
      { name: 'REST APIs', note: 'StockAura, FurTherapy' },
      { name: 'Python', note: '' },
      { name: 'C#', note: '' },
      { name: 'SQL', note: '' },
    ],
  },
  {
    label: 'Data',
    items: [
      { name: 'PostgreSQL', note: 'StockAura, FurTherapy' },
      { name: 'Prisma', note: 'StockAura' },
      { name: 'SQLite', note: 'FurTherapy' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git / GitHub', note: '' },
      { name: 'Linux', note: '' },
      { name: 'Docker', note: '' },
      { name: 'JWT / bcrypt', note: 'StockAura' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <p className="mono mb-3 text-xs tracking-widest text-muted">SKILLS / TECHNOLOGIES</p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Tools, applied.
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="mono mb-5 text-[11px] tracking-widest text-accent">
                {group.label.toUpperCase()}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                    <p className="text-sm text-ink">{item.name}</p>
                    {item.note && <p className="mono mt-1 text-[11px] text-muted">{item.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
