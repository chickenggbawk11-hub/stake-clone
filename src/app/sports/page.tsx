'use client'

import { useState } from 'react'
import BetCard from '@/components/BetCard'

const sportsBets = [
  { id: 1, sport: 'Football', match: 'Manchester United vs Liverpool', odds: 2.45, type: 'Moneyline' },
  { id: 2, sport: 'Basketball', match: 'Lakers vs Celtics', odds: 1.95, type: 'Spread' },
  { id: 3, sport: 'Tennis', match: 'Djokovic vs Sinner', odds: 3.20, type: 'Moneyline' },
  { id: 4, sport: 'Football', match: 'Real Madrid vs Barcelona', odds: 2.10, type: 'Moneyline' },
  { id: 5, sport: 'Baseball', match: 'Yankees vs Red Sox', odds: 1.85, type: 'Spread' },
  { id: 6, sport: 'Esports', match: 'FaZe vs Team Liquid', odds: 2.30, type: 'Moneyline' },
  { id: 7, sport: 'Football', match: 'PSG vs Monaco', odds: 1.75, type: 'Moneyline' },
  { id: 8, sport: 'Basketball', match: 'Warriors vs Suns', odds: 2.15, type: 'Spread' },
]

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState('All')

  const sports = ['All', 'Football', 'Basketball', 'Tennis', 'Baseball', 'Esports']
  const filteredBets = sportsBets.filter(bet => selectedSport === 'All' || bet.sport === selectedSport)

  return (
    <div className="min-h-screen bg-dark">
      <div className="bg-gradient-to-b from-dark-accent to-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 pulse-glow">Sports Betting</h1>
          <p className="text-gray-400">Live odds on the biggest matches</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {sports.map(sport => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedSport === sport
                  ? 'bg-primary text-dark font-bold'
                  : 'bg-dark-accent text-gray-300 hover:bg-dark-lighter'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBets.map(bet => (
            <BetCard key={bet.id} {...bet} />
          ))}
        </div>
      </div>
    </div>
  )
}