'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Wallet } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark-lighter border-b border-dark-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              ⚡ STAKE
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/casino" className="text-gray-300 hover:text-primary transition-colors">
              Casino
            </Link>
            <Link href="/sports" className="text-gray-300 hover:text-primary transition-colors">
              Sports
            </Link>
            <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
              Promotions
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-dark-accent hover:bg-primary hover:text-dark transition-all rounded-lg">
              <Wallet size={18} />
              <span>0.0 BTC</span>
            </button>
            <button className="px-6 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-500 transition-all">
              Sign In
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-gray-300 hover:text-primary">
              Home
            </Link>
            <Link href="/casino" className="block text-gray-300 hover:text-primary">
              Casino
            </Link>
            <Link href="/sports" className="block text-gray-300 hover:text-primary">
              Sports
            </Link>
            <button className="w-full px-6 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-500 transition-all">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}