import React from 'react';
import { Itinerary as ItineraryType } from '../types';
import { Calendar, Clock, MapPin, DollarSign, Sun, Coffee, Utensils, Moon, Building } from 'lucide-react';

interface ItineraryProps {
  itinerary: ItineraryType;
}

export default function Itinerary({ itinerary }: ItineraryProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-8">
          <h2 className="text-3xl font-bold text-white">Your Perfect Trip</h2>
          <p className="mt-2 text-blue-100">Carefully crafted just for you</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-8">
            {itinerary.days.map((day) => (
              <div key={day.day} className="border-b border-white/10 pb-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="w-6 h-6 text-blue-300" />
                  <h3 className="text-2xl font-bold text-white">Day {day.day}</h3>
                </div>
                
                <div className="space-y-6">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-200 border border-white/10">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">{activity.name}</h4>
                        <p className="text-blue-200">{activity.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                          <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <Clock className="w-4 h-4 text-blue-300" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <MapPin className="w-4 h-4 text-blue-300" />
                            <span>{activity.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <DollarSign className="w-4 h-4 text-blue-300" />
                            <span>{activity.cost}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                        <Utensils className="w-5 h-5 text-blue-300" />
                        <span>Today's Meals</span>
                      </h4>
                      <ul className="space-y-3">
                        {day.meals.map((meal, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            {index === 0 && <Sun className="w-4 h-4 text-yellow-400" />}
                            {index === 1 && <Coffee className="w-4 h-4 text-orange-400" />}
                            {index === 2 && <Moon className="w-4 h-4 text-purple-400" />}
                            <span className="text-blue-200">{meal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                        <Building className="w-5 h-5 text-blue-300" />
                        <span>Accommodation</span>
                      </h4>
                      <p className="text-blue-200">{day.accommodation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-400/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
              <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-300" />
                <span>Total Cost Estimate</span>
              </h4>
              <p className="text-2xl font-bold text-blue-300">{itinerary.totalCost}</p>
            </div>

            {itinerary.notes.length > 0 && (
              <div className="bg-purple-400/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <h4 className="font-semibold text-white mb-4">Important Notes</h4>
                <ul className="space-y-2">
                  {itinerary.notes.map((note, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-purple-400">•</span>
                      <span className="text-blue-200">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}