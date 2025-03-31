export interface TravelPreferences {
  budget: string;
  duration: string;
  startLocation: string;
  destination: string;
  purpose: string;
  dietaryPreferences: string;
  interests: string[];
  mobilityNeeds: string;
  accommodation: string;
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  cost: string;
  location: string;
}

export interface DayPlan {
  day: number;
  activities: Activity[];
  meals: string[];
  accommodation: string;
}

export interface Itinerary {
  days: DayPlan[];
  totalCost: string;
  notes: string[];
}