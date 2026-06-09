'use client'

import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: string | number
  change: number
}

export default function LiveStats() {
  const [stats, setStats] = useState<Stat[]>([
    { label: 'Total Players', value: '1.2M+', change: 5.2 },
    { label: 'Daily Bets', value: '45M+', change: 12.3 },
    { label: 'Paid Out', value: '$2.3B+', change: 8.1 },
    { label: 'Avg Win', value: '$1,234', change: 3.5 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        change: (Math.random() - 0.5) * 15,
      })))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Live Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-dark p-8 rounded-lg border border-dark-accent hover:border-primary transition-all">
              <p className="text-gray-400 text-sm uppercase font-bold mb-2">{stat.label}</p>
              <div className="flex items-end gap-4">
                <h3 className="text-4xl font-black">{stat.value}</h3>
                <span className={`text-sm font-bold ${
                  stat.change > 0 ? 'text-success' : 'text-danger'
                }`}>
                  {stat.change > 0 ? '+' : ''}{stat.change.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}