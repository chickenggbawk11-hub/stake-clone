'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-dark-accent mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-4">
              ⚡ STAKE
            </h3>
            <p className="text-gray-400 text-sm">
              The next generation of cryptocurrency gaming and sports betting.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Gaming</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/casino" className="hover:text-primary transition-colors">Casino</Link></li>
              <li><Link href="/sports" className="hover:text-primary transition-colors">Sports</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Games</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Promotions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-accent pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Stake Clone. All rights reserved. This is a demo application.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}