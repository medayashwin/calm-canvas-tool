import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const moodEmojis = [
  { emoji: "😢", label: "Very Sad", value: 1, color: "text-red-400" },
  { emoji: "😟", label: "Sad", value: 2, color: "text-orange-400" },
  { emoji: "😐", label: "Neutral", value: 3, color: "text-yellow-400" },
  { emoji: "😊", label: "Good", value: 4, color: "text-wellness" },
  { emoji: "😄", label: "Great", value: 5, color: "text-primary" },
];

export const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (selectedMood === null) return;
    
    // Store mood data (would integrate with backend)
    toast({
      title: "Mood recorded successfully!",
      description: `Thank you for sharing how you're feeling today.`,
    });
    
    setSelectedMood(null);
    setNote("");
  };

  return (
    <Card className="bg-gradient-wellness border-0 shadow-wellness">
      <CardHeader>
        <CardTitle className="text-wellness-foreground flex items-center gap-2">
          <span className="text-2xl">💭</span>
          How are you feeling today?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moodEmojis.map((mood) => (
            <Button
              key={mood.value}
              variant={selectedMood === mood.value ? "default" : "outline"}
              className={`
                h-16 flex-col gap-1 transition-smooth hover:scale-105
                ${selectedMood === mood.value ? 'bg-primary shadow-soft' : 'hover:bg-primary-soft'}
              `}
              onClick={() => setSelectedMood(mood.value)}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs">{mood.label}</span>
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          <Textarea
            placeholder="Optional: Share what's on your mind..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[80px] resize-none border-primary-soft focus:border-primary"
          />
          
          <Button
            onClick={handleSubmit}
            disabled={selectedMood === null}
            className="w-full bg-gradient-primary hover:shadow-soft transition-smooth"
          >
            Record My Mood
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};