import { Badge } from "@/components/ui/badge";
import BorderGlow from "./BorderGlow";
import ClickSpark from "@/components/ClickSpark";

export default function ExperienceCard() {
  return (
    <>
      {/* Professional Experience Section */}

      <BorderGlow
        className="card-item p-6 md:p-4 bg-card-section rounded-sm mb-6 !shadow-none"
        edgeSensitivity={30}
        backgroundColor="var(--card-section)"
        borderRadius={6}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
      >
        <ClickSpark
          sparkColor="#fafafa"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/* <div className="card-item bg-card-section p-6 md:p-4 rounded-sm mb-6"> */}
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
            Professional Experience
          </h3>
          <hr className="border-muted-foreground" />
          {/* Experience Item */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-foreground">
                  Web Developer
                </h4>
                <p className="text-sm text-highlight">Nspire</p>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap ml-4">
                2024 - Present
              </span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Developing and maintaining robust enterprise web applications
              using .NET and modern frontend technologies. Focused on REST API
              integration, data architecture, and system security.
            </p>
          </div>
          {/* </div> */}
        </ClickSpark>
      </BorderGlow>

      {/* Featured Projects Section */}
      <BorderGlow
        className="card-item p-6 md:p-4 rounded-sm mb-6 !shadow-none"
        edgeSensitivity={30}
        backgroundColor="var(--card-section)"
        borderRadius={6}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
      >
        <ClickSpark
          sparkColor="#fafafa"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
            Featured Projects
          </h3>
          <hr className="border-muted-foreground" />
          {/* Projects */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">Project 1</div>
            <div className="col-span-12 md:col-span-6">Project 2</div>
          </div>
        </ClickSpark>
      </BorderGlow>

      {/* Tech Stack Section */}
      <BorderGlow
        className="card-item p-6 md:p-4 rounded-sm mb-6 !shadow-none"
        edgeSensitivity={30}
        backgroundColor="var(--card-section)"
        borderRadius={6}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
      >
        <ClickSpark
          sparkColor="#fafafa"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
            Tech Stack
          </h3>

          <hr className="border-muted-foreground" />

          <div className="grid grid-cols-12 gap-2">
            {/* Frontend Items*/}
            <div className="col-span-12 lg:col-span-4 md:col-span-6">
              <h4 className="text-sm md:text-sm font-bold text-foreground mb-2 text-highlight">
                FRONTEND
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Bootstrap</Badge>
              </div>
            </div>
            {/* Backend Items*/}
            <div className="col-span-12 lg:col-span-4 md:col-span-6">
              <h4 className="text-sm md:text-sm font-bold text-foreground mb-2 text-highlight">
                BACKEND
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ASP.NET Core</Badge>
                <Badge variant="secondary">Node</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">REST API</Badge>
              </div>
            </div>
            {/* Database Items*/}
            <div className="col-span-12 lg:col-span-4 md:col-span-6">
              <h4 className="text-sm md:text-sm font-bold text-foreground mb-2 text-highlight">
                DATABASE
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">SQL Server</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Prisma</Badge>
              </div>
            </div>
          </div>
        </ClickSpark>
      </BorderGlow>
    </>
  );
}
