import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample mood data for the past week
const moodData = [
  { day: 'Mon', mood: 3, date: '9/7' },
  { day: 'Tue', mood: 4, date: '9/8' },
  { day: 'Wed', mood: 2, date: '9/9' },
  { day: 'Thu', mood: 4, date: '9/10' },
  { day: 'Fri', mood: 5, date: '9/11' },
  { day: 'Sat', mood: 4, date: '9/12' },
  { day: 'Sun', mood: 3, date: '9/13' },
];

const averageMood = moodData.reduce((sum, day) => sum + day.mood, 0) / moodData.length;

export const MoodTrends = () => {
  return (
    <Card className="border-0 shadow-soft bg-gradient-soft">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Your Mood This Week
          </span>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Average</div>
            <div className="text-2xl font-bold text-primary">
              {averageMood.toFixed(1)}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                domain={[1, 5]} 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: 'hsl(var(--primary-glow))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-card rounded-lg border">
            <div className="text-2xl text-primary">📈</div>
            <div className="text-sm text-muted-foreground">Trend</div>
            <div className="font-semibold">Improving</div>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <div className="text-2xl text-wellness">🎯</div>
            <div className="text-sm text-muted-foreground">Best Day</div>
            <div className="font-semibold">Friday</div>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <div className="text-2xl text-accent">💪</div>
            <div className="text-sm text-muted-foreground">Streak</div>
            <div className="font-semibold">7 days</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};