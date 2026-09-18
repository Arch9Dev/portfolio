import { useState } from 'react'
import { projects } from '../data/projects'

function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-start gap-0">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-start">
          <span className="mono rounded border border-border bg-base px-3 py-2 text-xs text-ink">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="mono py-1 pl-3 text-muted" aria-hidden="true">
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function SelectedWork() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <p className="mono mb-3 text-xs tracking-widest text-muted">SELECTED WORK</p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Projects, not exercises.
        </h2>

        <div className="space-y-6">
          {projects.map((project) => {
            const open = openId === project.id
            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border/60"
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={`${project.name} application preview`}
                      className="aspect-[4/3] w-full rounded-md border border-border object-cover lg:aspect-auto lg:h-full lg:min-h-[240px]"
                    />
                  ) : (
                    <div
                      className="flex aspect-[4/3] items-center justify-center rounded-md border border-border bg-surface2 lg:aspect-auto lg:h-full lg:min-h-[240px]"
                      role="img"
                      aria-label={`${project.name} application preview placeholder`}
                    >
                      <span className="mono text-xs text-muted">
                        [ APPLICATION SCREENSHOT — PLACEHOLDER ]
                      </span>
                    </div>
                  )}

                  <div>
                    <p className="mono text-xs tracking-widest text-accent">
                      PROJECT / {project.number}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mono mt-1 text-xs tracking-wide text-muted">
                      {project.tagline}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <div className="mt-6">
                      <p className="mono mb-2 text-[11px] tracking-widest text-muted">
                        TECHNOLOGY
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="mono rounded border border-border px-2.5 py-1 text-[11px] text-ink"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setOpenId(open ? null : project.id)}
                      aria-expanded={open}
                      aria-controls={`case-study-${project.id}`}
                      className="mono mt-7 inline-flex items-center gap-2 text-xs tracking-wide text-accent transition-colors hover:text-ink"
                    >
                      {open ? 'HIDE CASE STUDY —' : 'VIEW CASE STUDY →'}
                    </button>
                  </div>
                </div>

                {open && (
                  <div
                    id={`case-study-${project.id}`}
                    className="animate-reveal border-t border-border bg-base/40 p-6 sm:p-8"
                  >
                    <div className="grid gap-10 lg:grid-cols-2">
                      <div className="space-y-8">
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            THE PROBLEM
                          </h4>
                          <p className="text-sm leading-relaxed text-muted">
                            {project.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            THE SOLUTION
                          </h4>
                          <p className="text-sm leading-relaxed text-muted">
                            {project.caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            ENGINEERING
                          </h4>
                          <ul className="space-y-2">
                            {project.caseStudy.engineering.map((item) => (
                              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="mono mb-3 text-xs tracking-widest text-accent2">
                            ARCHITECTURE
                          </h4>
                          <ArchitectureDiagram steps={project.caseStudy.architecture} />
                        </div>
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            KEY ENGINEERING DECISIONS
                          </h4>
                          <ul className="space-y-2">
                            {project.caseStudy.decisions.map((item) => (
                              <li key={item} className="text-sm leading-relaxed text-muted">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            CHALLENGES
                          </h4>
                          <p className="text-sm leading-relaxed text-muted">
                            {project.caseStudy.challenges}
                          </p>
                        </div>
                        <div>
                          <h4 className="mono mb-2 text-xs tracking-widest text-accent2">
                            WHAT I LEARNED
                          </h4>
                          <p className="text-sm leading-relaxed text-muted">
                            {project.caseStudy.learned}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mono mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-xs tracking-wide">
                      <span className="text-muted">STATUS — {project.status}</span>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-accent hover:text-ink">
                          LIVE DEMO →
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-accent hover:text-ink">
                          GITHUB →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}