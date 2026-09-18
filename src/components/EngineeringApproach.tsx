const principles = [
  {
    number: '01',
    title: 'Understand the problem',
    body: "Start with the user's problem before choosing technology.",
  },
  {
    number: '02',
    title: 'Keep systems simple',
    body: 'Prefer clear architectures that are easy to understand and maintain.',
  },
  {
    number: '03',
    title: 'Build → test → iterate',
    body: 'Develop incrementally, test ideas and improve based on what I learn.',
  },
  {
    number: '04',
    title: 'Document the why',
    body: 'Explain not only what was built, but why important engineering decisions were made.',
  },
]

export default function EngineeringApproach() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <p className="mono mb-3 text-xs tracking-widest text-muted">HOW I BUILD</p>
        <h2 className="mb-14 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          A consistent approach, not a checklist.
        </h2>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.number} className="bg-surface p-8">
              <span className="mono text-sm text-accent">{p.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
