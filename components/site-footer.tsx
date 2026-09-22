export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Ava Reyes. All rights reserved.</p>
        <p>
          Built with <span className="text-foreground">Next.js</span> &{" "}
          <span className="text-foreground">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
