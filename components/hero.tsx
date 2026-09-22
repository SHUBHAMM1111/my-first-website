import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        Available for freelance & full-time work
      </p>

      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        I design and build <span className="text-accent">thoughtful</span> digital products for the web.
      </h1>

      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {
          "I'm Ava Reyes, a product engineer and designer with 7 years of experience turning complex problems into fast, accessible, and beautifully simple interfaces. I care about the details others skip."
        }
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
