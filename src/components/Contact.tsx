export default function Contact() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 text-center sm:px-8 sm:py-32">
        <p className="mono mb-4 text-xs tracking-widest text-muted">CONTACT</p>
        <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-sm text-muted">
          Have a project, opportunity, or interesting problem?
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:bendt03@outlook.co.nz"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-[#08130D] transition-transform hover:translate-x-0.5"
          >
            Get in touch
          </a>
        </div>

        <div className="mono mt-10 flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-muted">
          <a href="mailto:bendt03@outlook.co.nz" className="hover:text-accent transition-colors">
            EMAIL
          </a>
          <a href="https://github.com/Arch9Dev" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/benjamin-dutoit/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LINKEDIN
          </a>
        </div>
      </div>
    </section>
  )
}
