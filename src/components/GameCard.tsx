'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface GameCardProps {
  id: number
  title: string
  category: string
  image: string
  rtp: string
}

export default function GameCard({ id, title, category, image, rtp }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-dark-accent hover:border-primary transition-all group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 bg-gradient-to-br from-primary to-blue-500 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-4xl font-black opacity-30">
          🎰
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
      </div>

      <div className="p-4 bg-dark-lighter">
        <div className="mb-2">
          <p className="text-primary text-xs font-bold uppercase">{category}</p>
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 text-sm">RTP: {rtp}</span>
        </div>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-500 transition-all">
          <Play size={16} /> Play
        </button>
      </div>
    </div>
  )
}