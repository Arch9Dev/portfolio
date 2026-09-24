const responsibilities = [
  'Worked directly with a real client — a canine massage therapy business in Mission Bay, Auckland — to scope a booking platform from an initial conversation, not a fixed spec.',
  'Translated the client\'s requirements into a working system: a marketing site, an availability system, a customer booking flow, and an admin dashboard.',
  'Built the frontend (SvelteKit, later ported to React) and the backend/API layer (Express), with PostgreSQL and SQLite for data persistence.',
  'Iterated on the booking and availability flow across several rounds of client feedback as requirements became clearer.',
  'Ran a security hardening pass after launch — replacing a static session cookie with signed HMAC-SHA256 tokens and restricting CORS.',
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <p className="mono mb-3 text-xs tracking-widest text-muted">EXPERIENCE</p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Real client, real requirements.
        </h2>

        <div className="grid gap-8 rounded-lg border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">
              Freelance Software Developer
            </h3>
            <p className="mono mt-2 text-xs tracking-widest text-accent">2026 — PRESENT</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Independent freelance work building{' '}
              <a href="#work" className="text-accent hover:text-ink">FurTherapy</a>, a booking
              platform for a small local business.
            </p>
          </div>

          <ul className="space-y-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
