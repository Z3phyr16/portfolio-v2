import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <header className="border-b border-border/50 bg-background">
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
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
