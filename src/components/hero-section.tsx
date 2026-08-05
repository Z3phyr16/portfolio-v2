export default function HeroSection() {
  return (
    <div className="text-center py-12 md:py-16 z-2 relative">
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-border/50">
          <img
            src="/profile.png"
            alt="Mark Tungol"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        Mark Tungol
      </h2>

      {/* Title */}
      <p className="text-xs md:text-sm font-bold text-highlight tracking-widest mb-6">
        {/* WEB DEVELOPER */}
        FULL STACK .NET DEVELOPER
      </p>

      {/* Bio */}
      <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        Full Stack Developer with experience building scalable ASP.NET Core APIs
        and modern React applications. Passionate about clean architecture,
        maintainable code, and delivering fast, reliable web solutions.
      </p>
    </div>
  );
}
