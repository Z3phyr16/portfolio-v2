import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ExperienceCard from "@/components/experience-card";
import Footer from "@/components/footer";
//backgrounds
import DotGrid from "@/components/DotGrid";
import { Meteors } from "@/components/ui/meteors";
import { ThemeProvider } from "@/components/theme-provider";
import ClickSpark from "@/components/ClickSpark";

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="vite-ui-theme"
    >
      <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
        {/* Background Animation */}

        <div className="fixed inset-0 z-1 pointer-events-none">
          {/* <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#0f172a"
          activeColor="#38bdf8"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        /> */}
          <Meteors />
        </div>

        {/* Header with Navigation */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-8 py-8 md:py-12 z-2">
          {/* Hero Section */}
          <HeroSection />

          {/* Experience Card */}
          <div className="my-12 md:my-16 z-2">
            <ExperienceCard />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
