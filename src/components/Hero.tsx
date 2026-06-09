'use client'

import { Zap, Trophy, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-dark-accent to-dark py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"> Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the next generation of cryptocurrency gaming. Trade, bet, and win with ultimate transparency and lightning-fast payouts.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-blue-500 transition-all text-lg">
                Play Now
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-dark transition-all text-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-accent hover:border-primary transition-all">
              <Zap className="text-primary mb-3" size={32} />
              <p className="text-gray-400 mb-1">Lightning Fast</p>
              <p className="text-3xl font-bold">2.5s</p>
              <p className="text-gray-500 text-sm">Avg Payout</p>
            </div>
            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-accent hover:border-primary transition-all">
              <Trophy className="text-primary mb-3" size={32} />
              <p className="text-gray-400 mb-1">Daily Winners</p>
              <p className="text-3xl font-bold">45K+</p>
              <p className="text-gray-500 text-sm">Players Winning</p>
            </div>
            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-accent hover:border-primary transition-all">
              <Shield className="text-primary mb-3" size={32} />
              <p className="text-gray-400 mb-1">Provably Fair</p>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-500 text-sm">Transparent</p>
            </div>
            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-accent hover:border-primary transition-all">
              <div className="text-primary text-3xl mb-3 font-black">₿</div>
              <p className="text-gray-400 mb-1">Cryptos</p>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-gray-500 text-sm">Supported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}