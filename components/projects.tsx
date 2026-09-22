import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  year: string
}

const projects: Project[] = [
  {
    title: "Northwind Analytics",
    description: "A real-time analytics dashboard helping SaaS teams turn raw event data into clear decisions.",
    image: "/projects/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "D3"],
    href: "#",
    year: "2025",
  },
  {
    title: "Ledger",
    description: "A personal finance app with automated budgeting, insights, and a calm, focused mobile experience.",
    image: "/projects/mobile-finance.png",
    tags: ["React Native", "Node", "Postgres"],
    href: "#",
    year: "2024",
  },
  {
    title: "Atelier Store",
    description: "A headless e-commerce storefront built for speed, with a refined, editorial product experience.",
    image: "/projects/ecommerce-site.png",
    tags: ["Next.js", "Shopify", "Tailwind"],
    href: "#",
    year: "2024",
  },
  {
    title: "Prism Design System",
    description: "A component library and token system powering a consistent UI across a dozen product teams.",
    image: "/projects/design-system.png",
    tags: ["React", "Storybook", "Figma"],
    href: "#",
    year: "2023",
  },
]

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected work</h2>
        <span className="text-sm text-muted-foreground">{projects.length} projects</span>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-1 text-lg font-medium">
                  {project.title}
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </h3>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
