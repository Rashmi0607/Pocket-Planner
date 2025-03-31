import React, { useState } from 'react';
import PreferencesForm from './components/PreferencesForm';
import Itinerary from './components/Itinerary';
import { TravelPreferences, Itinerary as ItineraryType } from './types';
import { Plane, Sparkles } from 'lucide-react';

function App() {
  const [itinerary, setItinerary] = useState<ItineraryType | null>(null);

  const handlePreferencesSubmit = (preferences: TravelPreferences) => {
    // This is where you would normally make an API call to your AI backend
    // For now, we'll use mock data
    const mockItinerary: ItineraryType = {
      days: [
        {
          day: 1,
          activities: [
            {
              name: 'City Walking Tour',
              description: 'Explore the historic city center with a professional guide',
              duration: '3 hours',
              cost: '$30',
              location: 'City Center'
            },
            {
              name: 'Local Market Visit',
              description: 'Experience local culture and cuisine at the famous market',
              duration: '2 hours',
              cost: '$0',
              location: 'Central Market'
            }
          ],
          meals: [
            'Breakfast at hotel',
            'Lunch at local café',
            'Dinner at traditional restaurant'
          ],
          accommodation: 'Comfort Inn City Center'
        }
      ],
      totalCost: '$500',
      notes: [
        'All activities are wheelchair accessible',
        'Restaurant reservations recommended',
        'Tour times may vary based on availability'
      ]
    };

    setItinerary(mockItinerary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Pocket Planner
                </h1>
                <p className="text-sm text-blue-200">Your AI Travel Companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Sparkles className="w-4 h-4" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!itinerary ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Plan Your Perfect Trip</h2>
              <p className="text-blue-200">Tell us your preferences, and let AI craft your ideal itinerary</p>
            </div>
            <PreferencesForm onSubmit={handlePreferencesSubmit} />
          </div>
        ) : (
          <div>
            <button
              onClick={() => setItinerary(null)}
              className="mb-6 inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Start Over
            </button>
            <Itinerary itinerary={itinerary} />
          </div>
        )}
      </main>

      <footer className="bg-white/5 backdrop-blur-sm mt-12 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-blue-200">
            © {new Date().getFullYear()} Pocket Planner. Your journey begins here.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;