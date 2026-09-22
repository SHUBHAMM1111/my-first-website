const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "Redis"],
  },
  {
    title: "Design",
    skills: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
  },
  {
    title: "Tooling",
    skills: ["Git", "Vercel", "Docker", "Playwright", "Turborepo"],
  },
]

export function Skills() {
  return (
    <section id="about" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills & tech stack</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I work across the full product lifecycle — from early sketches and design systems to shipping performant,
              production-grade applications. These are the tools I reach for most.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
