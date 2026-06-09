'use client'

import GameCard from './GameCard'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const featuredGames = [
  { id: 1, title: 'Mega Moolah', category: 'Slots', image: '/games/slots1.jpg', rtp: '88.12%' },
  { id: 2, title: 'Gates of Olympus', category: 'Slots', image: '/games/slots2.jpg', rtp: '96.50%' },
  { id: 3, title: 'Black Jack Pro', category: 'Table Games', image: '/games/blackjack.jpg', rtp: '99.50%' },
  { id: 4, title: 'Lightning Roulette', category: 'Table Games', image: '/games/roulette.jpg', rtp: '97.30%' },
]

export default function FeaturedGames() {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Games</h2>
            <p className="text-gray-400">Pick your favorite and start playing</p>
          </div>
          <Link href="/casino" className="flex items-center gap-2 text-primary hover:text-blue-500 transition-colors">
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  )
}