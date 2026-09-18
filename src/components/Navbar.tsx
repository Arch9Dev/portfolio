export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-base/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="mono text-sm font-medium tracking-tight text-ink hover:text-accent transition-colors"
        >
          Arch9Dev
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          <a href="#work" className="mono text-xs tracking-wide text-muted hover:text-ink transition-colors">
            WORK
          </a>
          <a href="#about" className="mono text-xs tracking-wide text-muted hover:text-ink transition-colors">
            ABOUT
          </a>
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <a
            href="https://github.com/Arch9Dev"
            target="_blank"
            rel="noreferrer"
            className="mono text-xs tracking-wide text-muted hover:text-accent transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-dutoit/"
            target="_blank"
            className="mono text-xs tracking-wide text-muted hover:text-accent transition-colors"
          >
            LINKEDIN
          </a>
        </div>

        <a
          href="https://github.com/Arch9Dev"
          target="_blank"
          rel="noreferrer"
          className="mono text-xs tracking-wide text-muted hover:text-accent transition-colors sm:hidden"
        >
          GITHUB
        </a>
      </nav>
    </header>
  )
}
