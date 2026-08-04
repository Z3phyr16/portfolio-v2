export default function HeroSection() {
  return (
    <div className="text-center py-12 md:py-16">
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
      <p className="text-xs md:text-sm font-bold text-muted-foreground tracking-widest mb-6">
        WEB DEVELOPER
      </p>

      {/* Bio */}
      <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        I specialize in delivering high-performance solutions with a strong
        focus on .NET ecosystems and modern frontend frameworks, ensuring
        scalable and maintainable code architecture.
      </p>
    </div>
  );
}
