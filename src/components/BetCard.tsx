'use client'

import { TrendingUp } from 'lucide-react'

interface BetCardProps {
  id: number
  sport: string
  match: string
  odds: number
  type: string
}

export default function BetCard({ id, sport, match, odds, type }: BetCardProps) {
  return (
    <div className="bg-dark p-6 rounded-lg border border-dark-accent hover:border-primary transition-all group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-primary text-xs font-bold uppercase">{sport}</p>
          <h3 className="text-lg font-bold mt-1 group-hover:text-primary transition-colors">{match}</h3>
        </div>
        <div className="flex items-center gap-1 text-success bg-success/10 px-2 py-1 rounded">
          <TrendingUp size={14} />
          <span className="text-xs font-bold">Live</span>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-400 text-sm mb-2">Current Odds</p>
        <div className="text-4xl font-black text-primary">{odds}</div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-500 transition-all">
          Bet
        </button>
        <button className="flex-1 px-4 py-2 border-2 border-dark-accent text-gray-300 font-bold rounded-lg hover:border-primary transition-all">
          {type}
        </button>
      </div>
    </div>
  )
}