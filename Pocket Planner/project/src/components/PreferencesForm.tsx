import React, { useState } from 'react';
import { TravelPreferences } from '../types';
import { CalendarDays, DollarSign, MapPin, Heart, Utensils, Scaling, Building } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: TravelPreferences) => void;
}

export default function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<TravelPreferences>({
    budget: '',
    duration: '',
    startLocation: '',
    destination: '',
    purpose: '',
    dietaryPreferences: '',
    interests: [],
    mobilityNeeds: '',
    accommodation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const handleInterestChange = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/20">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400" />
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Budget Range</label>
              </div>
              <select
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                value={preferences.budget}
                onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                required
              >
                <option value="">Select budget range</option>
                <option value="budget">Budget ($0-$1000)</option>
                <option value="moderate">Moderate ($1000-$3000)</option>
                <option value="luxury">Luxury ($3000+)</option>
              </select>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <CalendarDays className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Trip Duration</label>
              </div>
              <input
                type="text"
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                placeholder="e.g., 7 days"
                value={preferences.duration}
                onChange={(e) => setPreferences({ ...preferences, duration: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Starting Location</label>
              </div>
              <input
                type="text"
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                placeholder="e.g., New York"
                value={preferences.startLocation}
                onChange={(e) => setPreferences({ ...preferences, startLocation: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Destination</label>
              </div>
              <input
                type="text"
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                placeholder="e.g., Paris"
                value={preferences.destination}
                onChange={(e) => setPreferences({ ...preferences, destination: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Purpose of Trip</label>
              </div>
              <select
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                value={preferences.purpose}
                onChange={(e) => setPreferences({ ...preferences, purpose: e.target.value })}
                required
              >
                <option value="">Select purpose</option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
                <option value="adventure">Adventure</option>
                <option value="cultural">Cultural Experience</option>
                <option value="romantic">Romantic Getaway</option>
              </select>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <Utensils className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Dietary Preferences</label>
              </div>
              <input
                type="text"
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                placeholder="e.g., Vegetarian, Halal, etc."
                value={preferences.dietaryPreferences}
                onChange={(e) => setPreferences({ ...preferences, dietaryPreferences: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <Scaling className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Mobility Needs</label>
              </div>
              <select
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                value={preferences.mobilityNeeds}
                onChange={(e) => setPreferences({ ...preferences, mobilityNeeds: e.target.value })}
              >
                <option value="">Select mobility preference</option>
                <option value="active">Very Active (Long walks, hiking)</option>
                <option value="moderate">Moderate Activity</option>
                <option value="limited">Limited Mobility</option>
                <option value="wheelchair">Wheelchair Accessible</option>
              </select>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-2 mb-2">
                <Building className="w-5 h-5 text-blue-300" />
                <label className="block text-sm font-medium text-blue-100">Accommodation Preference</label>
              </div>
              <select
                className="w-full rounded-lg bg-white/5 border-white/10 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200"
                value={preferences.accommodation}
                onChange={(e) => setPreferences({ ...preferences, accommodation: e.target.value })}
              >
                <option value="">Select accommodation type</option>
                <option value="luxury">Luxury Hotels</option>
                <option value="midrange">Mid-range Hotels</option>
                <option value="budget">Budget Hotels/Hostels</option>
                <option value="apartment">Vacation Rentals/Apartments</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-100">What interests you?</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['History', 'Art', 'Food', 'Nature', 'Shopping', 'Nightlife', 'Sports', 'Local Culture'].map((interest) => (
              <label
                key={interest}
                className={`flex items-center justify-center p-3 rounded-lg border ${
                  preferences.interests.includes(interest)
                    ? 'bg-blue-400/20 border-blue-400 text-blue-100'
                    : 'border-white/10 hover:border-blue-400 hover:bg-blue-400/10 transition-colors duration-200 text-blue-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={preferences.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{interest}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 px-4 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-lg shadow-lg"
      >
        Create My Perfect Trip
      </button>
    </form>
  );
}