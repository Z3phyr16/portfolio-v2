export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-12 md:mt-16 py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>©</span>
            <span>2024 Mark Tungol. Built with precision.</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:mark@example.com" className="hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
