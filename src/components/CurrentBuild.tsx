export default function CurrentBuild() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-8">
        <p className="mono mb-6 text-xs tracking-widest text-muted">CURRENTLY BUILDING</p>

        <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent2" />
              <span className="mono text-xs tracking-wide text-accent2">FURTHERAPY</span>
            </div>
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">
              Booking platform for a canine massage business
            </h3>
            <p className="mt-2 max-w-lg text-sm text-muted">
              A real freelance client project — a full booking, availability and admin
              system, currently being rebuilt and hardened for redeployment.
            </p>
            <p className="mono mt-4 text-xs text-muted">
              SvelteKit · React / Express · PostgreSQL
            </p>
          </div>

          <div className="mono flex shrink-0 flex-col items-start gap-1 border-t border-border pt-4 sm:items-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <span className="text-[11px] tracking-widest text-muted">STATUS</span>
            <span className="text-sm text-accent2">In progress</span>
          </div>
        </div>
      </div>
    </section>
  )
}
