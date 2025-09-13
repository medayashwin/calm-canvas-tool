import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Start your day with deep breathing to center yourself and reduce anxiety.",
    category: "Mindfulness",
    duration: "5 min",
    icon: "🧘‍♀️",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Nature Walk",
    description: "A gentle walk outdoors can boost mood and provide vitamin D.",
    category: "Physical",
    duration: "15 min",
    icon: "🚶‍♂️",
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Gratitude Journaling",
    description: "Write down three things you're grateful for to shift your mindset.",
    category: "Reflection",
    duration: "10 min",
    icon: "📝",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Progressive Muscle Relaxation",
    description: "Systematic tensing and relaxing of muscle groups to reduce stress.",
    category: "Relaxation",
    duration: "20 min",
    icon: "💆‍♀️",
    difficulty: "Medium"
  }
];

export const WellnessRecommendations = () => {
  return (
    <Card className="border-0 shadow-wellness">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Personalized Wellness Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              className="p-4 rounded-lg border border-primary-soft bg-gradient-to-r from-card to-primary-soft/10 hover:shadow-soft transition-smooth"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{rec.icon}</span>
                    <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-wellness text-wellness-foreground">
                      {rec.category}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      {rec.duration}
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      {rec.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:shadow-soft transition-smooth shrink-0"
                >
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-wellness rounded-lg text-center">
          <h4 className="font-semibold text-wellness-foreground mb-2">
            💡 Daily Wellness Tip
          </h4>
          <p className="text-sm text-wellness-foreground/80">
            Remember, small consistent actions lead to big changes. Even 5 minutes of mindfulness can improve your day!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};