import { MoodCheckIn } from "@/components/MoodCheckIn";
import { MoodTrends } from "@/components/MoodTrends";
import { WellnessRecommendations } from "@/components/WellnessRecommendations";
import wellnessHero from "@/assets/wellness-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-primary-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SW</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Student Wellness Monitor</h1>
                <p className="text-sm text-muted-foreground">Your mental health companion</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Welcome back, Alex</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${wellnessHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Take Care of Your Mental Health
              </h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Track your daily mood, discover personalized wellness activities, 
                and build healthy habits that support your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <MoodCheckIn />
            <MoodTrends />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <WellnessRecommendations />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-lg border border-primary-soft shadow-soft text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Days Tracked</div>
              </div>
              <div className="p-6 bg-card rounded-lg border border-wellness shadow-soft text-center">
                <div className="text-3xl font-bold text-wellness mb-2">8</div>
                <div className="text-sm text-muted-foreground">Activities Completed</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary-soft bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">🌱 Student Wellness Monitor</p>
            <p className="text-sm">Supporting student mental health, one day at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;