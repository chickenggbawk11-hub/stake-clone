'use client'

import { useState } from 'react'
import GameCard from '@/components/GameCard'
import { Search } from 'lucide-react'

const casinoGames = [
  { id: 1, title: 'Mega Moolah', category: 'Slots', image: '/games/slots1.jpg', rtp: '88.12%' },
  { id: 2, title: 'Gates of Olympus', category: 'Slots', image: '/games/slots2.jpg', rtp: '96.50%' },
  { id: 3, title: 'Black Jack Pro', category: 'Table Games', image: '/games/blackjack.jpg', rtp: '99.50%' },
  { id: 4, title: 'Lightning Roulette', category: 'Table Games', image: '/games/roulette.jpg', rtp: '97.30%' },
  { id: 5, title: 'Stake Originals', category: 'Exclusive', image: '/games/exclusive.jpg', rtp: '98.00%' },
  { id: 6, title: 'Live Baccarat', category: 'Live', image: '/games/baccarat.jpg', rtp: '98.60%' },
  { id: 7, title: 'Dragon\'s Fire', category: 'Slots', image: '/games/slots3.jpg', rtp: '95.50%' },
  { id: 8, title: 'Crypto Quest', category: 'Exclusive', image: '/games/exclusive2.jpg', rtp: '97.00%' },
]

export default function Casino() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Slots', 'Table Games', 'Live', 'Exclusive']
  const filteredGames = casinoGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-dark">
      <div className="bg-gradient-to-b from-dark-accent to-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 pulse-glow">Casino Games</h1>
          <p className="text-gray-400">Choose from thousands of exciting games</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-lighter border border-dark-accent rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-dark font-bold'
                    : 'bg-dark-accent text-gray-300 hover:bg-dark-lighter'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found. Try different filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}