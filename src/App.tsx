import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ExperienceCard from '@/components/experience-card'
import Footer from '@/components/footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Animated Radial Gradient Background */}
      <div className="fixed inset-0 -z-10">
        {/* Primary radial gradient - cyan/blue */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Secondary radial gradient - purple accent */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Tertiary radial gradient - subtle cyan */}
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Experience Card */}
        <div className="my-12 md:my-16">
          <ExperienceCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
