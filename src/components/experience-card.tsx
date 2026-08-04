import { Badge } from "@/components/ui/badge";

export default function ExperienceCard() {
  return (
    <div className="border-l-4 border-accent bg-card/50 p-6 md:p-8 rounded-sm">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">
        Professional Experience
      </h3>

      {/* Experience Item */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-foreground">
              Web Developer
            </h4>
            <p className="text-sm text-muted-foreground">Nspire</p>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap ml-4">
            2026 - Present
          </span>
        </div>
        <p className="text-sm text-foreground/70 mb-4">
          Developing and maintaining robust enterprise web applications using
          .NET and modern frontend technologies. Focused on REST API
          integration, data architecture, and system security.
        </p>
      </div>

      {/* Core Technologies */}
      <div className="pt-6 border-t border-border/30">
        <h5 className="text-sm md:text-base font-semibold text-foreground mb-4">
          Core Technologies
        </h5>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">C# / ASP.NET Core</Badge>
          <Badge variant="secondary">JavaScript / TypeScript</Badge>
          <Badge variant="secondary">React / Blazer</Badge>
          <Badge variant="secondary">SQL Server / PostgreSQL</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">REST APIs</Badge>
        </div>
      </div>
    </div>
  );
}
