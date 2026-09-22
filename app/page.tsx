import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
