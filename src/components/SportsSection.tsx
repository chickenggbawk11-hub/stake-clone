'use client'

import BetCard from './BetCard'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const currentBets = [
  { id: 1, sport: 'Football', match: 'Manchester United vs Liverpool', odds: 2.45, type: 'Moneyline' },
  { id: 2, sport: 'Basketball', match: 'Lakers vs Celtics', odds: 1.95, type: 'Spread' },
  { id: 3, sport: 'Tennis', match: 'Djokovic vs Sinner', odds: 3.20, type: 'Moneyline' },
  { id: 4, sport: 'Football', match: 'Real Madrid vs Barcelona', odds: 2.10, type: 'Moneyline' },
]

export default function SportsSection() {
  return (
    <section className="py-16 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Live Sports</h2>
            <p className="text-gray-400">Bet on your favorite sports with live odds</p>
          </div>
          <Link href="/sports" className="flex items-center gap-2 text-primary hover:text-blue-500 transition-colors">
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBets.map(bet => (
            <BetCard key={bet.id} {...bet} />
          ))}
        </div>
      </div>
    </section>
  )
}