import { useState } from 'react'

const links = [
  { href: '#work', label: 'WORK' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono text-xs tracking-wide text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
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
            rel="noreferrer"
            className="mono text-xs tracking-wide text-muted hover:text-accent transition-colors"
          >
            LINKEDIN
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="mono flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border/80 bg-base px-6 py-4 sm:hidden"
        >
          <div className="mono flex flex-col gap-4 text-xs tracking-wide">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="h-px w-full bg-border" aria-hidden="true" />
            <a
              href="https://github.com/Arch9Dev"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-dutoit/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
