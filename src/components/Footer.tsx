export default function Footer() {
  return (
    <footer className="mx-auto max-w-content px-6 py-10 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mono text-sm text-ink">BEN DU TOIT</p>
          <p className="mono text-xs text-muted">SOFTWARE ENGINEER</p>
          <p className="mono mt-1 text-xs text-muted">Auckland, New Zealand</p>
        </div>

        <div className="mono flex items-center gap-6 text-xs tracking-wide text-muted">
          <a href="https://github.com/Arch9Dev" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/benjamin-dutoit/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LINKEDIN
          </a>
          <a href="mailto:bendt03@outlook.co.nz" className="hover:text-accent transition-colors">
            EMAIL
          </a>
        </div>
      </div>

      <p className="mono mt-8 text-[11px] text-muted/70">© 2026</p>
    </footer>
  )
}
