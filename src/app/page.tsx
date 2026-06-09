'use client'

import Hero from '@/components/Hero'
import FeaturedGames from '@/components/FeaturedGames'
import SportsSection from '@/components/SportsSection'
import WhyStake from '@/components/WhyStake'
import LiveStats from '@/components/LiveStats'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <SportsSection />
      <WhyStake />
      <LiveStats />
    </>
  )
}