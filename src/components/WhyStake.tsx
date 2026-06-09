'use client'

import { Zap, Lock, TrendingUp, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant deposits and withdrawals with blockchain technology',
  },
  {
    icon: Lock,
    title: 'Provably Fair',
    description: 'Every game is verifiable and transparent using cryptographic proofs',
  },
  {
    icon: TrendingUp,
    title: 'Better Odds',
    description: 'Competitive odds and rakeback rewards for loyal players',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Play from anywhere with support for 20+ cryptocurrencies',
  },
]

export default function WhyStake() {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Stake?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're revolutionizing online gaming with transparency, speed, and fairness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-dark-lighter p-8 rounded-lg border border-dark-accent hover:border-primary transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}