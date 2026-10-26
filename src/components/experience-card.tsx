import { Badge } from "@/components/ui/badge";
import BorderGlow from "./BorderGlow";
import ClickSpark from "@/components/ClickSpark";
import FlipCard from "./FlipCard";

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
          <hr className="border-muted-foreground mb-4" />
          {/* Projects */}
          <div className="grid grid-cols-2 gap-4 overflow-x-hidden">
            <div className="col-span-2 md:col-span-1">
              <div className="w-full [&>div]:!w-full">
                <FlipCard
                  front={
                    <img
                      src="/lunas.jpg"
                      alt="Medical Management System"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  back={
                    <div
                      style={{
                        padding: 24,
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('lunas.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "#ffffff",
                      }}
                      className="h-full flex flex-col justify-between" // Use justify-between if you want the text at the top and bottom like the reference
                    >
                      <div className="text-center">
                        <h3 className="font-bold text-xl  mb-2">
                          Medical Management System
                        </h3>
                        <p className="text-gray-300">
                          Enables integrated management of healthcare
                          operations, medical information, and patient services.
                        </p>
                      </div>
                    </div>
                  }
                  axis="y"
                  flipOnClick
                  draggable
                  dragDistance={0}
                  tilt
                  tiltMax={12}
                  glare
                  glareOpacity={0.22}
                  hoverScale={1.03}
                  perspective={1100}
                  stiffness={170}
                  damping={20}
                  height={350}
                  radius={22}
                  background="#27272a"
                  color="#f5f5f5"
                  shadow
                  shadowColor="transparent"
                  shadowOpacity={0.45}
                  onFlipChange={(flipped) => console.log(flipped)}
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="w-full [&>div]:!w-full">
                <FlipCard
                  front={
                    <img
                      src="/sukey.png"
                      alt="Sukey"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  back={
                    <div
                      style={{
                        padding: 24,
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('sukey.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "#ffffff",
                      }}
                      className="h-full flex flex-col justify-between" // Use justify-between if you want the text at the top and bottom like the reference
                    >
                      <div className="text-center">
                        <h3 className="font-bold text-xl  mb-2">
                          Car Rental System
                        </h3>
                        <p className="text-gray-300">
                          Sukey connects drivers with unique vehicles and car
                          owners with verified renters. Skip the counter, or put
                          your idle car to work.
                        </p>
                      </div>
                    </div>
                  }
                  axis="y"
                  flipOnClick
                  draggable
                  dragDistance={0}
                  tilt
                  tiltMax={12}
                  glare
                  glareOpacity={0.22}
                  hoverScale={1.03}
                  perspective={1100}
                  stiffness={170}
                  damping={20}
                  height={350}
                  radius={22}
                  background="#27272a"
                  color="#f5f5f5"
                  shadow
                  shadowColor="transparent"
                  shadowOpacity={0.45}
                  onFlipChange={(flipped) => console.log(flipped)}
                />
              </div>
            </div>
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
                <Badge variant="secondary">MySql</Badge>
              </div>
            </div>
          </div>
        </ClickSpark>
      </BorderGlow>
    </>
  );
}
