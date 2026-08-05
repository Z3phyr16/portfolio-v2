import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";
import ClickSpark from "@/components/ClickSpark";
import { RippleButton } from "@/components/ui/ripple-button";

export default function Header() {
  const [activeTab, setActiveTab] = useState("profile");
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="border-b border-border/50 bg-background z-20 fixed top w-screen">
      <ClickSpark
        sparkColor="#fafafa"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold text-foreground">
              Mark Tungol
            </h1>

            <div className="flex items-center gap-6 md:gap-8">
              {/* Navigation Tabs */}
              {/* <nav className="flex gap-6 md:gap-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'profile'
                    ? 'text-accent border-b-2 border-accent pb-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('summary')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'summary'
                    ? 'text-accent border-b-2 border-accent pb-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Summary
              </button>
            </nav> */}

              {/* Resume Button */}
              <div className="flex gap-2 items-center">
                <RippleButton className="bg-accent hover:bg-accent/90 text-foreground font-semibold max-w-[150px] max-h-[40px] text-sm md:text-md border-background">
                  Download CV
                </RippleButton>
                {/* <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Download CV
                </Button> */}

                <AnimatedThemeToggler
                  theme={resolvedTheme === "dark" ? "dark" : "light"}
                  onThemeChange={setTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </header>
  );
}
